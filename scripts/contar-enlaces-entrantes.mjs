#!/usr/bin/env node
/**
 * contar-enlaces-entrantes.mjs — cuenta, por URL, cuántas PÁGINAS distintas de
 * dist/ la enlazan con <a href> dofollow (sin rel="nofollow"), excluyendo la
 * propia página. Criterio de Ahrefs «solo un enlace interno entrante dofollow».
 *
 * Uso: node scripts/contar-enlaces-entrantes.mjs dist [--min 3] [--prefijo /cobertura/]
 * Con --min falla (exit 1) si alguna página indexable del prefijo queda por debajo.
 */
import { readdirSync, readFileSync } from 'node:fs';
import { join, relative } from 'node:path';

const args = process.argv.slice(2);
const dist = args[0] ?? 'dist';
const opt = (k) => { const i = args.indexOf(k); return i > -1 ? args[i + 1] : undefined; };
const min = Number(opt('--min') ?? 0);
const prefijo = opt('--prefijo') ?? '/';

const walk = (d) => readdirSync(d, { withFileTypes: true }).flatMap((e) =>
  e.isDirectory() ? walk(join(d, e.name)) : e.name === 'index.html' ? [join(d, e.name)] : []);
const ruta = (f) => { const r = relative(dist, f).replace(/index\.html$/, ''); return '/' + r; };
const norm = (h) => {
  let r = h.replace(/^https:\/\/firefighters\.mx/, '').split(/[?#]/)[0];
  if (!r.startsWith('/') || r.startsWith('//')) return null;
  try { r = decodeURIComponent(r); } catch {}
  if (/\.[a-z0-9]{2,5}$/i.test(r)) return null;
  return r.endsWith('/') ? r : r + '/';
};

const entrantes = new Map();
const indexable = new Set();
for (const f of walk(dist)) {
  const src = ruta(f);
  const html = readFileSync(f, 'utf8');
  if (!/<meta name="robots" content="noindex/.test(html)) indexable.add(src);
  const vistos = new Set();
  for (const m of html.matchAll(/<a\b([^>]*)>/g)) {
    const attrs = m[1];
    if (/\brel="[^"]*nofollow/.test(attrs)) continue;
    const h = attrs.match(/\bhref="([^"]+)"/);
    if (!h) continue;
    const t = norm(h[1]);
    if (!t || t === src || vistos.has(t)) continue;
    vistos.add(t);
    entrantes.set(t, (entrantes.get(t) ?? 0) + 1);
  }
}

const filas = [...indexable].filter((r) => r.startsWith(prefijo))
  .map((r) => [r, entrantes.get(r) ?? 0]).sort((a, b) => a[1] - b[1]);
const bajas = filas.filter(([, n]) => n < Math.max(min, 1) || (min && n < min));
const hist = {};
for (const [, n] of filas) { const k = n >= 10 ? '10+' : String(n); hist[k] = (hist[k] ?? 0) + 1; }
console.log(`ENTRANTES ${prefijo}: ${filas.length} páginas indexables · distribución ${JSON.stringify(hist)}`);
for (const [r, n] of filas.slice(0, Number(opt('--mostrar') ?? 15))) console.log(`  ${n}\t${r}`);
if (min && bajas.length) { console.error(`✗ ${bajas.length} página(s) con menos de ${min} enlaces entrantes`); process.exit(1); }
