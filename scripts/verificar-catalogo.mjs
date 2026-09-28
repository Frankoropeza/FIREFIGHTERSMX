#!/usr/bin/env node
/**
 * verificar-catalogo.mjs — candado de calidad del catálogo (/productos/, /marcas/).
 * Origen: auditoría del catálogo 2026-09-28 (vault FIREFIGHTERSMX, CATALOGO-2026-09).
 *
 * FALLA el build (exit 1) si en dist/ aparece:
 *   C-01  una celda de especificación sin dato («—», «–», vacía) en una ficha;
 *   C-02  «distribuidor autorizado de <línea genérica>» (PQS ABC, CO2, Red Hidráulica…);
 *   C-03  un <title> o alt de imagen con marcador vacío («— —» o terminado en «—»);
 *   C-04  una meta description del catálogo cortada (sin punto final) o de más de 155;
 *   C-05  una imagen de la ficha cuyo alt nombra OTRO modelo del catálogo.
 *
 * AVISA (no falla hasta activar --estricto, al cerrar R9):
 *   A-01  ficha con menos especificaciones que el mínimo de su categoría;
 *   A-02  ficha con imagen de referencia (sin fotografía propia del modelo).
 */
import { readdirSync, readFileSync, existsSync } from 'node:fs';
import { join, relative } from 'node:path';

const DIST = process.argv[2] ?? 'dist';
const ESTRICTO = process.argv.includes('--estricto');
const walk = (d) => existsSync(d) ? readdirSync(d, { withFileTypes: true }).flatMap((e) =>
  e.isDirectory() ? walk(join(d, e.name)) : e.name === 'index.html' ? [join(d, e.name)] : []) : [];

const LINEAS = ['PQS ABC', 'CO2', 'Especializados', 'Sobre Ruedas', 'Red Hidráulica'];
const MINIMOS = {
  'trajes-bombero': 4, 'cascos-nfpa': 4, 'equipos-scba': 4, 'camaras-termicas': 4,
  'herramientas-rescate': 4, 'extintores': 4, 'sistemas-ci': 4, 'hazmat': 3,
  'drones-emergencia': 4, 'senalizacion-emergencia': 3,
};
const texto = (h) => h.replace(/<[^>]+>/g, ' ').replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&').replace(/\s+/g, ' ').trim();
const decode = (s) => s.replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&amp;/g, '&');

const dirProductos = join(DIST, 'productos');
const subdirsFuente = (cat) => {
  const p = join('src/pages/productos', cat);
  return existsSync(p) ? readdirSync(p, { withFileTypes: true }).filter((e) => e.isDirectory()).map((e) => e.name) : [];
};
const paginas = [...walk(dirProductos), ...walk(join(DIST, 'marcas'))].map((f) => {
  const ruta = '/' + relative(DIST, f).replace(/index\.html$/, '');
  const partes = ruta.split('/').filter(Boolean);
  const esModelo = partes[0] === 'productos' && partes.length >= 3 && !(partes.length === 3 && subdirsFuente(partes[1]).includes(partes[2]));
  const html = readFileSync(f, 'utf8');
  const h1 = texto((html.match(/<h1\b[\s\S]*?<\/h1>/) ?? [''])[0]);
  return { f, ruta, partes, esModelo, html, h1 };
});
const nombres = new Set(paginas.filter((p) => p.esModelo).map((p) => p.h1.split(' — ')[0].trim()).filter(Boolean));

const fallos = []; const avisos = [];
for (const p of paginas) {
  const cuerpo = p.html.replace(/<script\b[\s\S]*?<\/script>/g, '').replace(/<style\b[\s\S]*?<\/style>/g, '');
  const title = decode((p.html.match(/<title>([\s\S]*?)<\/title>/) ?? ['', ''])[1]);
  const meta = decode((p.html.match(/<meta name="description" content="([^"]*)"/) ?? ['', ''])[1]);

  if (/— —|—\s*\||—\s*$/.test(title)) fallos.push(['C-03', p.ruta, `title: ${title}`]);
  if (meta && (!/[.!?]$/.test(meta.trim()) || meta.length > 155)) fallos.push(['C-04', p.ruta, `meta (${meta.length}): …${meta.slice(-50)}`]);
  for (const l of LINEAS) {
    if (new RegExp(`distribuidor(es)? autorizados? de ${l} en México`, 'i').test(texto(cuerpo))) fallos.push(['C-02', p.ruta, l]);
  }
  if (!p.esModelo) continue;

  let filas = 0;
  for (const tr of cuerpo.match(/<tr\b[\s\S]*?<\/tr>/g) ?? []) {
    const celdas = (tr.match(/<t[dh]\b[\s\S]*?<\/t[dh]>/g) ?? []).map(texto);
    if (celdas.length < 2 || !celdas[0] || celdas[0] === 'Parámetro') continue;
    filas++;
    if (['—', '–', '-', ''].includes(celdas[1])) fallos.push(['C-01', p.ruta, `«${celdas[0]}» vacío`]);
  }
  const propio = p.h1.split(' — ')[0].trim();
  for (const m of cuerpo.matchAll(/<figure\b[\s\S]*?<\/figure>/g)) {
    for (const a of m[0].matchAll(/<img\b[^>]*\balt="([^"]*)"/g)) {
      const alt = decode(a[1]);
      if (/—\s*$|— —/.test(alt)) fallos.push(['C-03', p.ruta, `alt: ${alt}`]);
      const ajeno = [...nombres].find((n) => n !== propio && !propio.startsWith(n) && alt.startsWith(n));
      if (ajeno) fallos.push(['C-05', p.ruta, `alt de otro modelo: ${ajeno}`]);
    }
  }
  const minimo = MINIMOS[p.partes[1]] ?? 3;
  if (filas < minimo) avisos.push(['A-01', p.ruta, `${filas} especificaciones (mínimo ${minimo})`]);
  if (/Imagen de referencia/.test(cuerpo)) avisos.push(['A-02', p.ruta, 'sin fotografía propia del modelo']);
}

const resumen = (lista) => Object.entries(lista.reduce((a, [c]) => ((a[c] = (a[c] ?? 0) + 1), a), {})).map(([c, n]) => `${c}: ${n}`).join(' · ');
if (avisos.length) console.log(`  CATÁLOGO avisos → ${resumen(avisos)}`);
if (ESTRICTO) fallos.push(...avisos);
if (fallos.length) {
  console.error(`✗ CATÁLOGO: ${fallos.length} incumplimientos → ${resumen(fallos)}`);
  for (const [c, r, d] of fallos.slice(0, 40)) console.error(`  ${c}  ${r}  ${d}`);
  process.exit(1);
}
console.log(`✓ CATÁLOGO: ${paginas.filter((p) => p.esModelo).length} fichas y ${paginas.length - paginas.filter((p) => p.esModelo).length} páginas de catálogo sin placeholders, claims de línea, metas cortadas ni imágenes ajenas`);
