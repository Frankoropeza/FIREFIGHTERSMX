#!/usr/bin/env node
/**
 * verificar-claims.mjs — candado de contenido no acreditado y de separación
 * entre la tienda y el directorio.
 *
 * Recorre dist/ después del build (`npm run build` lo invoca) y rechaza el build
 * si una página publica algo que no está acreditado o que mezcla las dos partes
 * del sitio.
 *
 * FIREFIGHTERS MX tiene dos partes con reglas distintas:
 *
 *  · TIENDA — FIREFIGHTERS MX como vendedor: productos, servicios, empresa,
 *    precios, cotización, licitaciones, distribuidores (cobertura y envíos),
 *    certificaciones, marcas, industrias, contacto y blog. Aquí el sitio habla
 *    en primera persona como empresa que vende y distribuye.
 *    Confirmado por Frank Oropeza el 2026-09-15: venta y distribución directa,
 *    bodega y stock propios, logística propia con envíos a todo México,
 *    convenio de distribución con las marcas del catálogo, 15 años de operación
 *    más de 500 estaciones equipadas, servicio técnico autorizado de las marcas
 *    de SCBA y cámaras térmicas (MSA, Dräger, 3M Scott) y la autoría real del
 *    blog (Ing. Marco García, Ing. Carlos Mendoza, Lic. Ana Ramírez). El stock y
 *    la entrega en 24–48 h ya los había confirmado el 2026-09-05.
 *
 *  · DIRECTORIO — registros de terceros, sección propia desde 2026-09-15:
 *    /directorio/, /empresas/, /estaciones/ y /cobertura/. Aquí el
 *    sitio no vende nada: describe empresas y estaciones ajenas. Cualquier
 *    afirmación comercial en primera persona en esta zona es una mezcla de las
 *    dos partes y se rechaza.
 *
 * Hay reglas GLOBALES que aplican en ambas zonas porque siguen sin acreditar.
 * Para levantar un candado hay que tener el dato confirmado: edita este archivo
 * y explica en el commit quién lo confirmó y cuándo.
 */
import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';

const DIST = process.argv[2] ?? 'dist';

/* ── Zonas ─────────────────────────────────────────────────────────────── */
const TIENDA = [
  '/productos/', '/servicios/', '/empresa/', '/nosotros/', '/precios/',
  '/licitaciones/', '/cotizacion/', '/distribuidores/', '/certificaciones/',
  '/marcas/', '/industrias/', '/contacto/', '/blog/',
];
// La portada «/» es la tienda (2026-09-15).
const DIRECTORIO = ['/directorio/', '/empresas/', '/estaciones/', '/cobertura/'];

const zonaDe = (ruta) => {
  if (ruta === '/') return 'tienda';
  if (DIRECTORIO.some((p) => ruta.startsWith(p))) return 'directorio';
  if (TIENDA.some((p) => ruta.startsWith(p))) return 'tienda';
  return 'neutral';
};

/* ── Reglas globales: sin acreditar en ningún lado ─────────────────────── */
const GLOBALES = [
  [/Baja\s+California\s+255/i, 'F-01 · domicilio de plantilla, no es el real'],
  [/(facebook|instagram|linkedin|youtube|x)\.com\/(@)?firefightersmx/i, 'F-02 · perfiles sociales inexistentes'],
  [/miles\s+de\s+vidas\s+protegidas/i, 'F-07 · métrica sin sustento'],
  [/Atendemos\s+a(l)?\s+(H\.|los\s+H\.)\s+Cuerpos?\s+de\s+Bomberos/i, 'F-08 · cartera de clientes sin autorización'],
  [/hasta\s+brigadas\s+de\s+PEMEX\s+y\s+CFE/i, 'F-08 · cartera de clientes sin autorización'],
  [/"aggregateRating"/i, 'F-13 · calificación agregada sin reseñas reales'],
  [/"@type"\s*:\s*"Store"/i, 'F-13 · el sitio se declara tienda en schema (usar Organization)'],
];

/* ── Directorio: el sitio no habla como vendedor ───────────────────────── */
const SOLO_TIENDA = [
  [/distribuidor(es)?\s+autorizad[oa]s?\s+(de|del|MX|México|en\s+México)/i, 'D-03 · «distribuidor autorizado» fuera de la tienda'],
  [/somos\s+distribuidores?\s+(autorizad|oficial)/i, 'D-03 · «distribuidor autorizado» fuera de la tienda'],
  [/somos\s+servicio\s+(técnico\s+)?autorizado/i, 'D-04 · servicio técnico autorizado fuera de la tienda'],
  [/(llevamos|tenemos|acumulamos|cumplimos)\s+(más\s+de\s+)?(15|quince)\s+años/i, 'D-05 · antigüedad propia fuera de la tienda'],
  [/(más\s+de\s+)?500\s+estaciones\s+equipadas/i, 'D-06 · volumen propio fuera de la tienda'],
  [/\b(distribuimos|vendemos|comercializamos|importamos|instalamos|recargamos)\b/i, 'D-11 · venta en primera persona dentro del directorio'],
  [/\b(entregamos|cotizamos|facturamos|reacondicionamos|calibramos)\b/i, 'D-11 · operación comercial en primera persona dentro del directorio'],
  [/(mantenemos|tenemos|manejamos|contamos\s+con)\s+(stock|inventario|existencias?)/i, 'D-12 · inventario propio dentro del directorio'],
  [/stock\s+permanente/i, 'D-12 · inventario propio dentro del directorio'],
  [/nuestros?\s+(clientes|almacén|almacen|catálogo|catalogo|stock|inventario)/i, 'D-12 · operación comercial propia dentro del directorio'],
  [/log[íi]stica\s+propia/i, 'D-12 · logística propia dentro del directorio'],
  [/schema\.org\/(InStock|OutOfStock|PreOrder|LimitedAvailability)/i, 'D-13 · disponibilidad declarada dentro del directorio'],
];

/* ── Tienda: no manda al cliente a la competencia ──────────────────────── */
// Un enlace de texto al directorio es aceptable; un botón (CTA) no.
const SEPARACION_TIENDA = [
  [/<a\b[^>]*href="\/(empresas|estaciones)[\/"][^>]*class="[^"]*\b(btn|quick-link-cta)\b/i, 'S-01 · botón de la tienda que manda al directorio'],
  [/<a\b[^>]*class="[^"]*\b(btn|quick-link-cta)\b[^"]*"[^>]*href="\/(empresas|estaciones)[\/"]/i, 'S-01 · botón de la tienda que manda al directorio'],
];

/* ── Schema: una oferta sin precio es inválida para Google ─────────────── */
function ofertaSinPrecio(html) {
  const bloques = html.match(/<script type="application\/ld\+json">[\s\S]*?<\/script>/g) ?? [];
  for (const b of bloques) {
    // Oferta de venta (con disponibilidad) sin precio. Las Offer dentro de un
    // OfferCatalog de servicios describen alcances y no son fichas de producto.
    if (/"@type"\s*:\s*"Offer"/.test(b) && /"availability"\s*:/.test(b) && !/"(price|minPrice|lowPrice)"\s*:/.test(b)) {
      return '"@type":"Offer" sin precio';
    }
  }
  return null;
}

function* htmls(dir) {
  for (const e of readdirSync(dir)) {
    const p = join(dir, e);
    if (statSync(p).isDirectory()) yield* htmls(p);
    else if (e.endsWith('.html')) yield p;
  }
}

let fallos = 0;
const paginas = { tienda: 0, directorio: 0, neutral: 0 };
const reportar = (ruta, texto, motivo) => {
  console.error(`  x ${ruta}\n      "${texto}"  -> ${motivo}`);
  fallos++;
};

for (const file of htmls(DIST)) {
  const ruta = file.replace(/^.*?dist/, '').replace(/index\.html$/, '');
  const zona = zonaDe(ruta);
  paginas[zona]++;
  const html = readFileSync(file, 'utf8');

  // El header, el footer y el menú móvil son comunes a las dos partes: las
  // reglas de zona sólo miran el contenido propio de la página.
  const cuerpo = html
    .replace(/<header\b[\s\S]*?<\/header>/gi, '')
    .replace(/<footer\b[\s\S]*?<\/footer>/gi, '');

  const reglas = [...GLOBALES.map((r) => [...r, html])];
  if (zona === 'directorio') reglas.push(...SOLO_TIENDA.map((r) => [...r, cuerpo]));
  if (zona === 'tienda') reglas.push(...SEPARACION_TIENDA.map((r) => [...r, cuerpo]));

  for (const [re, motivo, texto] of reglas) {
    const m = texto.match(re);
    if (m) reportar(ruta, m[0].slice(0, 90), motivo);
  }
  const oferta = ofertaSinPrecio(html);
  if (oferta) reportar(ruta, oferta, 'F-14 · oferta sin precio en JSON-LD (no hay precios publicados)');
}

const total = paginas.tienda + paginas.directorio + paginas.neutral;
const resumen = `tienda ${paginas.tienda} · directorio ${paginas.directorio} · otras ${paginas.neutral}`;
if (fallos) {
  console.error(`\nCLAIMS: ${fallos} incidencia(s) en ${total} paginas (${resumen}). Build rechazado.`);
  process.exit(1);
}
console.log(`CLAIMS: 0 incidencias (${total} paginas revisadas: ${resumen}).`);
