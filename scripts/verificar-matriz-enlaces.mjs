#!/usr/bin/env node
/**
 * verificar-matriz-enlaces.mjs — candado de enlazado entre secciones (interlinking 2026-09-30).
 *
 * 1. ESTRUCTURA: cada HTML de dist/ abre y cierra <header> el mismo número de veces y,
 *    si lleva el header del sitio, conserva el drawer móvil (#mobile-menu). Nace del
 *    incidente del 2026-09-30: un «<script>» dentro de un comentario de Header.astro
 *    se comía el cierre </header> y el sitio dejó de hacer scroll en producción.
 * 2. MATRIZ: porcentaje mínimo de páginas de cada tipo que enlazan (dentro de <main>)
 *    a otra sección. Evita que un cambio de plantilla vuelva a aislar marcas,
 *    industrias o cobertura.
 */
import { readdirSync, readFileSync } from 'node:fs';
import { join, relative } from 'node:path';

const DIST = process.argv[2] ?? 'dist';
const walk = (d) => readdirSync(d, { withFileTypes: true }).flatMap((e) =>
  e.isDirectory() ? walk(join(d, e.name)) : e.name === 'index.html' ? [join(d, e.name)] : []);

const segs = (u) => u.split('/').filter(Boolean);
const TIPOS = {
  'ficha de producto': (u) => segs(u)[0] === 'productos' && segs(u).length >= 3,
  'categoría de producto': (u) => segs(u)[0] === 'productos' && segs(u).length === 2,
  'marca': (u) => segs(u)[0] === 'marcas' && segs(u).length === 2,
  'industria': (u) => segs(u)[0] === 'industrias' && segs(u).length === 2,
  'cobertura por estado': (u) => segs(u)[0] === 'cobertura' && segs(u).length === 2,
  'ficha de estación': (u) => segs(u)[0] === 'estaciones' && segs(u).length === 3,
  'ficha de empresa': (u) => segs(u)[0] === 'empresas' && segs(u).length === 4 && !['estado', 'registro'].includes(segs(u)[1]),
};
const REGLAS = [
  ['ficha de producto', /^\/cobertura\//, 0.9, 'cobertura'],
  ['ficha de producto', /^\/industrias\//, 0.6, 'industrias'],
  ['ficha de producto', /^\/marcas\/[^/]+/, 0.45, 'página de marca'],
  ['categoría de producto', /^\/cobertura\//, 1, 'cobertura'],
  ['marca', /^\/servicios\//, 1, 'servicios'],
  ['marca', /^\/blog\/[^/]+/, 0.9, 'guías del blog'], // DJI Enterprise: el blog aún no tiene guía de drones; no se fuerza un enlace ajeno
  ['marca', /^\/productos\/[^/]+\/?$/, 1, 'categorías'],
  ['industria', /^\/blog\/[^/]+/, 1, 'guías del blog'],
  ['cobertura por estado', /^\/productos\/[^/]+\/?$/, 1, 'categorías de producto'],
  ['cobertura por estado', /^\/blog\/[^/]+/, 1, 'guías del blog'],
  ['ficha de estación', /^\/industrias\//, 1, 'industrias'],
  ['ficha de estación', /^\/cobertura\/[^/]+/, 1, 'cobertura del estado'],
  ['ficha de empresa', /^\/industrias\//, 0.95, 'industrias'],
  ['ficha de empresa', /^\/cobertura\/[^/]+/, 0.95, 'cobertura del estado'],
];

let errores = 0;
const estructura = [];
const paginas = {};
for (const f of walk(DIST)) {
  const html = readFileSync(f, 'utf8');
  const url = '/' + relative(DIST, f).replace(/index\.html$/, '');
  const abre = (html.match(/<header[\s>]/g) ?? []).length;
  const cierra = (html.match(/<\/header>/g) ?? []).length;
  if (abre !== cierra || (html.includes('class="hdr"') && !html.includes('id="mobile-menu"'))) estructura.push(`${url} (<header> ${abre}/${cierra})`);
  if (/<meta[^>]+noindex/.test(html.slice(0, 6000))) continue;
  const main = html.split('<main')[1]?.split('</main>')[0];
  if (!main) continue;
  paginas[url] = new Set([...main.matchAll(/href="(\/[^"#?]*)/g)].map((m) => m[1]));
}
if (estructura.length) {
  errores++;
  console.error(`✗ ESTRUCTURA: ${estructura.length} páginas con <header> sin cerrar o sin drawer móvil. Ej.: ${estructura.slice(0, 5).join(' · ')}`);
} else console.log('✓ ESTRUCTURA: <header> cerrado y drawer móvil presente en todas las páginas');

for (const [tipo, destino, minimo, nombre] of REGLAS) {
  const us = Object.keys(paginas).filter(TIPOS[tipo]);
  if (!us.length) continue;
  const ok = us.filter((u) => [...paginas[u]].some((h) => destino.test(h)));
  const pct = ok.length / us.length;
  const linea = `${tipo} → ${nombre}: ${ok.length}/${us.length} (${(pct * 100).toFixed(0)} %, mínimo ${(minimo * 100).toFixed(0)} %)`;
  if (pct + 1e-9 < minimo) {
    errores++;
    const faltan = us.filter((u) => !ok.includes(u)).slice(0, 4).join(' · ');
    console.error(`✗ MATRIZ ${linea}. Sin enlace: ${faltan}`);
  } else console.log(`✓ MATRIZ ${linea}`);
}
process.exit(errores ? 1 : 0);
