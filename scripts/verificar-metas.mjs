#!/usr/bin/env node
/**
 * verificar-metas — gate de títulos meta y meta descriptions (regla de Frank, 2026-10-03):
 *   · ninguna meta lleva la marca (title, description, og:*, twitter:*, author, publisher, copyright);
 *   · title ≤ 70 caracteres; description entre 70 y 160, cerrada (sin «…»);
 *   · títulos y descripciones no se repiten entre páginas indexables.
 * Uso: node scripts/verificar-metas.mjs dist
 */
import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';

const DIST = process.argv[2] ?? 'dist';
const MARCA = /firefighters\s*mx|\bffmx\b|inproseg|vigiles/i;
const ent = (s) => s.replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>');

const paginas = [];
(function walk(d) {
  for (const n of readdirSync(d)) {
    const p = join(d, n);
    if (statSync(p).isDirectory()) walk(p);
    else if (n.endsWith('.html')) paginas.push(p);
  }
})(DIST);

const errores = [];
const titulos = new Map();
const descs = new Map();
let revisadas = 0;
for (const p of paginas) {
  const html = readFileSync(p, 'utf8');
  const head = html.slice(0, html.indexOf('</head>') + 1 || 40000);
  const title = ent((head.match(/<title>([\s\S]*?)<\/title>/) ?? [])[1] ?? '').trim();
  if (!title) continue; // verificación de Google y similares
  revisadas++;
  const url = '/' + relative(DIST, p).replace(/index\.html$/, '');
  const noindex = /<meta name="robots" content="noindex/.test(head);
  const desc = ent((head.match(/<meta name="description" content="([^"]*)"/) ?? [])[1] ?? '');
  const metas = [...head.matchAll(/<meta (?:name|property)="([^"]+)" content="([^"]*)"/g)];
  for (const [, k, v] of metas) {
    if (MARCA.test(ent(v)) && !/^(og:url|twitter:url|og:image|twitter:image)/.test(k)) errores.push(`${url} · marca en <meta ${k}>: ${ent(v).slice(0, 90)}`);
  }
  if (MARCA.test(title)) errores.push(`${url} · marca en <title>: ${title}`);
  if ([...title].length > 70) errores.push(`${url} · title de ${[...title].length} caracteres`);
  if (!desc) errores.push(`${url} · sin meta description`);
  else {
    if (desc.length > 160) errores.push(`${url} · description de ${desc.length} caracteres`);
    if (desc.length < 70) errores.push(`${url} · description corta (${desc.length})`);
    if (/…$/.test(desc)) errores.push(`${url} · description cortada con «…»`);
  }
  if (!noindex) {
    titulos.set(title, [...(titulos.get(title) ?? []), url]);
    if (desc) descs.set(desc, [...(descs.get(desc) ?? []), url]);
  }
}
for (const [t, us] of titulos) if (us.length > 1) errores.push(`title duplicado ×${us.length}: «${t}» (${us.slice(0, 3).join(', ')})`);
for (const [d, us] of descs) if (us.length > 1) errores.push(`description duplicada ×${us.length}: «${d.slice(0, 70)}…» (${us.slice(0, 3).join(', ')})`);

console.log(`METAS: ${errores.length} incidencias (${revisadas} páginas revisadas).`);
if (errores.length) {
  for (const e of errores.slice(0, 60)) console.log('  ✗ ' + e);
  if (errores.length > 60) console.log(`  … y ${errores.length - 60} más`);
  process.exit(1);
}
