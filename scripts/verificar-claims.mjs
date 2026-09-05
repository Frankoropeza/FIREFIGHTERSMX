#!/usr/bin/env node
/**
 * verificar-claims.mjs — candado de contenido no acreditado.
 *
 * Recorre dist/ y falla si alguna página publica una afirmación sobre la propia
 * empresa que no está respaldada por documentación (auditoría 2026-09-05).
 * Se ejecuta después del build: `npm run build` lo invoca.
 *
 * Para levantar un candado hay que tener el documento en la mano: acredita la
 * afirmación, edita este archivo y explica en el commit qué documento la avala.
 */
import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';

const DIST = process.argv[2] ?? 'dist';

/** [patrón, motivo] — se busca sobre el HTML servido */
const PROHIBIDOS = [
  [/distribuidor(es)?\s+autorizad[oa]s?\s+(de|del|MX|México|en\s+México)/i, 'F-03 · sin carta de distribución acreditada'],
  [/somos\s+distribuidores?\s+(autorizad|oficial)/i,                      'F-03 · sin carta de distribución acreditada'],
  [/distribuidor(es)?\s+(oficial|directo)e?s?/i,                        'F-03 · sin carta de distribución acreditada'],
  [/somos\s+servicio\s+(técnico\s+)?autorizado/i,                           'F-04 · sin certificado de servicio técnico'],
  // Sólo la antigüedad EN PRIMERA PERSONA: "15 años de vida útil" o el historial
  // de un producto de tercero son datos legítimos y no deben disparar el candado.
  [/(llevamos|tenemos|acumulamos|cumplimos)\s+(más\s+de\s+)?(15|quince)\s+años/i,  'F-05 · antigüedad de la operación sin acreditar'],
  [/(más\s+de\s+|15\+\s+?)(15|quince)\s+años\s+(equipando|atendiendo|acompañando|dedicad|de\s+especializaci|en\s+el\s+mercado)/i, 'F-05 · antigüedad de la operación sin acreditar'],
  [/(15|quince)\s+años,?\s+(del\s+lado|miles\s+de\s+vidas)/i,                   'F-05 · antigüedad de la operación sin acreditar'],
  [/\b500\+/,                                                         'F-06 · volumen de clientes sin acreditar'],
  [/(más\s+de\s+)?500\s+estaciones\s+equipadas/i,                             'F-06 · volumen de clientes sin acreditar'],
  [/miles\s+de\s+vidas\s+protegidas/i,                                      'F-07 · métrica sin sustento'],
  [/Atendemos\s+a(l)?\s+(H\.|los\s+H\.)\s+Cuerpos?\s+de\s+Bomberos/i,             'F-08 · cartera de clientes sin acreditar'],
  [/Baja\s+California\s+255/i,                                            'F-01 · domicilio sin verificar'],
  [/(facebook|instagram|linkedin|youtube|x)\.com\/(@)?firefightersmx/i, 'F-02 · perfiles sociales inexistentes'],
];

/** Rutas cuyo contenido es consejo al comprador o requisito de licitación: exentas */
const EXENTAS = [
  '/blog/guia-compra-equipo-bomberos-nfpa-mexico-2026/',
  '/blog/licitaciones-equipo-contra-incendio-mexico-nom-nfpa/',
  '/blog/especificaciones-traje-bombero-licitaciones/',
  '/servicios/licitaciones/',
  '/licitaciones/',
  '/precios/',
];

function* htmls(dir) {
  for (const e of readdirSync(dir)) {
    const p = join(dir, e);
    if (statSync(p).isDirectory()) yield* htmls(p);
    else if (e.endsWith('.html')) yield p;
  }
}

let fallos = 0;
let paginas = 0;
for (const file of htmls(DIST)) {
  const ruta = file.replace(/^.*?dist/, '').replace(/index\.html$/, '');
  if (EXENTAS.some((x) => ruta === x)) continue;
  paginas++;
  const html = readFileSync(file, 'utf8');
  for (const [re, motivo] of PROHIBIDOS) {
    const m = html.match(re);
    if (m) {
      console.error(`  x ${ruta}\n      "${m[0]}"  -> ${motivo}`);
      fallos++;
    }
  }
}

if (fallos) {
  console.error(`\nCLAIMS: ${fallos} afirmacion(es) no acreditada(s) en ${paginas} paginas. Build rechazado.`);
  process.exit(1);
}
console.log(`CLAIMS: 0 afirmaciones no acreditadas (${paginas} paginas revisadas).`);
