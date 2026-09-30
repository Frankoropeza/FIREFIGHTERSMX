#!/usr/bin/env node
/**
 * Optimización de imágenes de /public/images (AVIF) — idempotente.
 *
 *  1. Genera variantes responsivas `<nombre>-480.avif` y `<nombre>-768.avif`
 *     (sólo si el original es al menos 15 % más ancho que la variante).
 *  2. Recomprime el original a calidad 50 / 4:2:0 sólo si ahorra ≥ 20 % y la
 *     PSNR contra la versión actual es ≥ 36 dB (sin pérdida visible).
 *  3. Recomprime los JPG de Open Graph (mozjpeg progresivo, calidad 76).
 *
 * Uso:  node scripts/optimizar-imagenes.mjs [--dry] [--solo <subcadena>]
 * Sharp: usa `sharp` del proyecto o la ruta de SHARP_MODULE.
 */
import { readdirSync, statSync, readFileSync, writeFileSync, existsSync } from 'node:fs';
import { join, extname, basename, dirname, relative } from 'node:path';

const sharp = (await import(process.env.SHARP_MODULE ?? 'sharp')).default;
const ROOT = join(process.cwd(), 'public', 'images');
const ANCHOS = [480, 768];
const DRY = process.argv.includes('--dry');
const SOLO = process.argv.includes('--solo') ? process.argv[process.argv.indexOf('--solo') + 1] : null;
const AVIF = { quality: 50, effort: 5, chromaSubsampling: '4:2:0' };
const MANIFIESTO = join(process.cwd(), 'scripts', 'imagenes-optimizadas.json');
const hecho = existsSync(MANIFIESTO) ? JSON.parse(readFileSync(MANIFIESTO, 'utf8')) : {};
const marcar = (f) => { hecho[relative(ROOT, f)] = statSync(f).size; };
const guardarManifiesto = () => !DRY && writeFileSync(MANIFIESTO, JSON.stringify(hecho, null, 1) + '\n');
const yaHecho = (f) => hecho[relative(ROOT, f)] === statSync(f).size;
const esVariante = (f) => /-(480|768)\.avif$/.test(f);

const recorrer = (d) => readdirSync(d, { withFileTypes: true }).flatMap((e) => {
  const f = join(d, e.name);
  return e.isDirectory() ? recorrer(f) : [f];
});

async function psnr(a, b) {
  const [x, y] = await Promise.all([a, b].map((buf) => sharp(buf).raw().toBuffer({ resolveWithObject: true })));
  if (x.info.width !== y.info.width || x.info.channels !== y.info.channels) return 0;
  let s = 0;
  for (let i = 0; i < x.data.length; i++) { const d = x.data[i] - y.data[i]; s += d * d; }
  const mse = s / x.data.length;
  return mse === 0 ? 99 : 10 * Math.log10((255 * 255) / mse);
}

const stats = { antes: 0, despues: 0, variantes: 0, recomp: 0, saltadas: 0, jpgAntes: 0, jpgDespues: 0 };
const archivos = recorrer(ROOT).filter((f) => (!SOLO || f.includes(SOLO)));

async function procesarAvif(f) {
  const orig = readFileSync(f);
  const meta = await sharp(orig).metadata();
  stats.antes += orig.length;
  let final = orig;
  if (!yaHecho(f)) {
    const nuevo = await sharp(orig).avif(AVIF).toBuffer();
    if (nuevo.length <= orig.length * 0.8 && (await psnr(orig, nuevo)) >= 36) {
      final = nuevo; stats.recomp++;
      if (!DRY) writeFileSync(f, nuevo);
    } else stats.saltadas++;
    if (!DRY) marcar(f);
  }
  stats.despues += final.length;
  for (const w of ANCHOS) {
    if (meta.width < w * 1.15) continue;
    const out = join(dirname(f), `${basename(f, '.avif')}-${w}.avif`);
    if (existsSync(out) && !(final !== orig)) continue;
    const v = await sharp(final).resize({ width: w }).avif({ ...AVIF, quality: 52 }).toBuffer();
    if (!DRY) writeFileSync(out, v);
    stats.variantes++;
  }
}

async function procesarJpg(f) {
  const orig = readFileSync(f);
  stats.jpgAntes += orig.length;
  if (yaHecho(f)) { stats.jpgDespues += orig.length; return; }
  const nuevo = await sharp(orig).jpeg({ quality: 76, mozjpeg: true, progressive: true }).toBuffer();
  const ok = nuevo.length <= orig.length * 0.85 && (await psnr(orig, nuevo)) >= 34;
  if (ok && !DRY) writeFileSync(f, nuevo);
  if (!DRY) marcar(f);
  stats.jpgDespues += ok ? nuevo.length : orig.length;
}

const cola = archivos.filter((f) => (extname(f) === '.avif' && !esVariante(f)) || extname(f) === '.jpg');
let i = 0;
await Promise.all(Array.from({ length: 3 }, async () => {
  while (i < cola.length) {
    const f = cola[i++];
    try { await (extname(f) === '.avif' ? procesarAvif(f) : procesarJpg(f)); }
    catch (e) { console.error('ERROR', f, e.message); }
    guardarManifiesto(); if (i % 25 === 0) console.log(`… ${i}/${cola.length}`);
  }
}));
guardarManifiesto();
const mb = (n) => (n / 1048576).toFixed(2) + ' MB';
console.log(`AVIF originales: ${mb(stats.antes)} → ${mb(stats.despues)} (${stats.recomp} recomprimidos, ${stats.saltadas} intactos)`);
console.log(`Variantes responsivas generadas: ${stats.variantes}`);
console.log(`JPG OG: ${mb(stats.jpgAntes)} → ${mb(stats.jpgDespues)}`);
if (DRY) console.log('(dry-run: no se escribió nada)');
