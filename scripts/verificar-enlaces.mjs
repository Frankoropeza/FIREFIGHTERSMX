#!/usr/bin/env node
/**
 * verificar-enlaces.mjs — candado de enlaces salientes en el directorio de empresas.
 *
 * Regla: sólo las fichas VIP (plan `destacado`) pueden llevar enlace a un sitio
 * externo. Una ficha básica es un registro público que levantamos nosotros; el
 * enlace saliente es un beneficio del plan, no un dato del registro.
 *
 * Qué NO cuenta como enlace saliente comercial y por eso está permitido:
 *   • la cita de fuente (INEGI/DENUE, sitio institucional) — es lo que hace
 *     verificable la ficha y el esquema la exige con `fuentes.min(1)`;
 *   • el enlace a Google Maps de la coordenada;
 *   • assets de CDN.
 *
 * Se ejecuta sobre dist/ después del build.
 */
import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';

const DIST = process.argv[2] ?? 'dist';

/** Hosts permitidos en cualquier ficha: fuentes, mapas y assets */
const PERMITIDOS = [
  /(^|\.)inegi\.org\.mx$/i,
  /(^|\.)google\.com$/i,
  /(^|\.)openstreetmap\.org$/i,
  /(^|\.)cdnjs\.cloudflare\.com$/i,
  /(^|\.)unpkg\.com$/i,
  /\.gob\.mx$/i,
];

function* htmls(dir) {
  for (const e of readdirSync(dir)) {
    const p = join(dir, e);
    if (statSync(p).isDirectory()) yield* htmls(p);
    else if (e.endsWith('.html')) yield p;
  }
}

const raizEmpresas = join(DIST, 'empresas');
let fallos = 0;
let fichas = 0;

for (const file of htmls(raizEmpresas)) {
  const ruta = file.replace(/^.*?dist/, '').replace(/index\.html$/, '');
  // Sólo fichas L4: /empresas/<giro>/<estado>/<slug>/
  if (ruta.split('/').filter(Boolean).length !== 4) continue;
  fichas++;
  const html = readFileSync(file, 'utf8');
  const esVIP = /VIP|Destacado/.test(html) && /Destacado/.test(html);

  // Sólo anclas <a>: un <link rel="preconnect"> a fuentes o un asset de CDN no
  // es un enlace saliente, es infraestructura de la página.
  const externos = [...html.matchAll(/<a\b[^>]*\bhref="(https?:\/\/[^"]+)"/g)].map((m) => m[1]);
  for (const url of externos) {
    let host;
    try { host = new URL(url).hostname; } catch { continue; }
    if (/(^|\.)firefighters\.mx$/i.test(host)) continue;
    if (PERMITIDOS.some((re) => re.test(host))) continue;
    // Cita de fuente: el enlace lleva el nombre de la fuente y la flecha ↗
    const esFuente = new RegExp(`href="${url.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}"[^>]*>[^<]*↗`).test(html);
    if (esFuente) continue;
    if (esVIP) continue;
    console.error(`  x ${ruta}\n      ${url}  -> enlace saliente en ficha no VIP`);
    fallos++;
  }
}

if (fallos) {
  console.error(`\nENLACES: ${fallos} enlace(s) saliente(s) en fichas no VIP (${fichas} fichas revisadas). Build rechazado.`);
  process.exit(1);
}
console.log(`ENLACES: 0 enlaces salientes en fichas no VIP (${fichas} fichas revisadas).`);
