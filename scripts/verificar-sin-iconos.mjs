#!/usr/bin/env node
/**
 * verificar-sin-iconos.mjs — regla de diseño de firefighters.mx (Frank, 2026-09-16):
 * NADA DE NUMERACIÓN NI ÍCONOS en cards ni elementos del sitio.
 *
 * Falla (exit 1) si en el HTML visible de dist/ aparece:
 *   1. un <svg> que no sea el logotipo (marcado con data-logo);
 *   2. un emoji o símbolo usado como ícono (★ ✓ ✗ ⚠ ⚡ 📍 …);
 *   3. numeración decorativa: «01», «02»… como texto de un elemento,
 *      o «Paso 1», «Paso 01».
 * No revisa <script>, <style> ni JSON-LD. La paginación del blog usa números
 * sin cero a la izquierda y no se considera numeración decorativa.
 */
import { readdirSync, readFileSync } from 'node:fs';
import { join, relative } from 'node:path';

const DIST = process.argv[2] ?? 'dist';
const walk = (d) => readdirSync(d, { withFileTypes: true }).flatMap((e) =>
  e.isDirectory() ? walk(join(d, e.name)) : e.name.endsWith('.html') ? [join(d, e.name)] : []);

const EMOJI = /[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}\u{2B50}\u{2B06}\u{2194}-\u{21FF}\u{2190}-\u{2193}]/gu;
const reglas = [
  ['svg', /<svg\b(?![^>]*\bdata-logo\b)[^>]*>/g],
  ['numeración', />\s*0[1-9]\s*</g],
  ['numeración', />\s*Paso\s+0?\d+\b/gi],
];

const porRegla = {};
const ejemplos = {};
for (const f of walk(DIST)) {
  const html = readFileSync(f, 'utf8')
    .replace(/<script\b[\s\S]*?<\/script>/g, '')
    .replace(/<style\b[\s\S]*?<\/style>/g, '');
  const ruta = '/' + relative(DIST, f).replace(/index\.html$/, '');
  const visibles = html.replace(/<[^>]+>/g, ' ');
  const hits = [];
  for (const [nombre, re] of reglas) for (const m of html.matchAll(re)) hits.push([nombre, m[0].slice(0, 60)]);
  for (const m of visibles.matchAll(EMOJI)) hits.push(['emoji/símbolo', m[0]]);
  for (const [nombre, ej] of hits) {
    porRegla[nombre] ??= new Map();
    porRegla[nombre].set(ruta, (porRegla[nombre].get(ruta) ?? 0) + 1);
    ejemplos[nombre] ??= new Set();
    if (ejemplos[nombre].size < 5) ejemplos[nombre].add(`${ruta} → ${ej}`);
  }
}

const total = Object.values(porRegla).reduce((s, m) => s + [...m.values()].reduce((a, b) => a + b, 0), 0);
if (total) {
  console.error(`✗ SIN-ICONOS: ${total} incidencia(s)`);
  for (const [nombre, m] of Object.entries(porRegla)) {
    const n = [...m.values()].reduce((a, b) => a + b, 0);
    console.error(`  ${nombre}: ${n} en ${m.size} página(s)`);
    for (const e of ejemplos[nombre]) console.error(`    ${e}`);
  }
  if (process.argv.includes('--detalle')) {
    for (const [nombre, m] of Object.entries(porRegla))
      for (const [r, n] of [...m].sort((a, b) => b[1] - a[1]).slice(0, 40)) console.error(`  [${nombre}] ${n}\t${r}`);
  }
  process.exit(1);
}
console.log('✓ SIN-ICONOS: 0 íconos, emojis ni numeración decorativa en dist/');
