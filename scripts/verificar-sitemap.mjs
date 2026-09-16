#!/usr/bin/env node
/**
 * verificar-sitemap.mjs — candado post-build: sitemap y redirecciones contra dist/.
 *
 * Origen: Ahrefs 2026-09-16. Dos etiquetas del blog (nfpa-1981, nfpa-1936)
 * dejaron de generarse al renombrar los tags y sus URLs quedaron en 404 sin que
 * el build lo notara.
 *
 * Falla (exit 1) si:
 *   1. una URL de sitemap-*.xml no tiene su dist/<ruta>/index.html;
 *   2. un destino interno de public/_redirects no existe en dist/.
 */
import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';

const DIST = process.argv[2] ?? 'dist';
const HOST = 'https://firefighters.mx';
const errores = [];

const existePagina = (ruta) => {
  let r = ruta.split(/[?#]/)[0];
  try { r = decodeURIComponent(r); } catch {}
  if (/\.[a-z0-9]{2,5}$/i.test(r)) return existsSync(join(DIST, r));
  return existsSync(join(DIST, r, 'index.html'));
};

// 1. Sitemap
const mapas = readdirSync(DIST).filter((f) => /^sitemap-\d+\.xml$/.test(f));
if (!mapas.length) errores.push('No hay sitemap-N.xml en dist/');
let urls = 0;
for (const m of mapas) {
  for (const [, loc] of readFileSync(join(DIST, m), 'utf8').matchAll(/<loc>([^<]+)<\/loc>/g)) {
    urls++;
    if (!loc.startsWith(HOST + '/')) { errores.push(`${m}: host inesperado ${loc}`); continue; }
    if (!existePagina(loc.slice(HOST.length))) errores.push(`${m}: sin HTML en dist/ → ${loc}`);
  }
}

// 2. Destinos de _redirects
let destinos = 0;
const red = join(DIST, '_redirects');
if (existsSync(red)) {
  for (const linea of readFileSync(red, 'utf8').split('\n')) {
    const l = linea.trim();
    if (!l || l.startsWith('#')) continue;
    const [, destino] = l.split(/\s+/);
    if (!destino || !destino.startsWith('/') || destino.includes('*') || destino.includes(':')) continue;
    destinos++;
    if (!existePagina(destino)) errores.push(`_redirects: destino inexistente → ${l}`);
  }
}

if (errores.length) {
  console.error(`✗ verificar-sitemap: ${errores.length} problema(s)`);
  for (const e of errores.slice(0, 50)) console.error('  ' + e);
  process.exit(1);
}
console.log(`✓ verificar-sitemap: ${urls} URLs del sitemap y ${destinos} destinos de _redirects con HTML en dist/`);
