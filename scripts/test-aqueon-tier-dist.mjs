import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { test } from 'node:test';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const site = 'https://firefighters.mx';
const basePath = 'empresas/equipos-contra-incendio/ciudad-de-mexico/aqueon-mexico';
const profile = readFileSync(path.join(root, 'dist', basePath, 'index.html'), 'utf8');
const sitemap = readFileSync(path.join(root, 'dist', 'sitemap-0.xml'), 'utf8');

const lines = [
  {
    slug: 'monitores-fijos',
    href: 'https://monitorescontraincendios.com/monitores-fijos/',
    meta: 'Monitores fijos contra incendio de AQUEON México en CDMX. Guía para comparar operación, red hidráulica, criterios técnicos y datos para cotizar.',
  },
  {
    slug: 'monitores-portatiles',
    href: 'https://monitorescontraincendios.com/monitores-portatiles/',
    meta: 'Monitores portátiles contra incendio de AQUEON México en CDMX. Guía para comparar despliegue, estabilidad, alimentación y datos para cotizar.',
  },
  {
    slug: 'monitores-automaticos',
    href: 'https://monitorescontraincendios.com/monitores-automaticos/',
    meta: 'Monitores automáticos contra incendio de AQUEON México en CDMX. Guía para comparar control, integración, pruebas y datos para cotizar.',
  },
];

const escapeRegExp = (value) => value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
const falseAttribution = /la empresa las separa|con los que AQUEON México especifica|menos de 24 horas hábiles|Datos declarados por la empresa/i;

for (const line of lines) {
  test(`${line.slug} conserva SEO, atribución editorial e interlinking en HTML`, () => {
    const relative = `/${basePath}/${line.slug}/`;
    const canonical = `${site}${relative}`;
    const html = readFileSync(path.join(root, 'dist', basePath, line.slug, 'index.html'), 'utf8');
    const officialAnchors = html.match(new RegExp(`<a[^>]+href="${escapeRegExp(line.href)}"[^>]*>`, 'g')) ?? [];

    assert.match(html, new RegExp(`<link rel="canonical" href="${escapeRegExp(canonical)}">`));
    assert.match(html, /<meta name="robots" content="index, follow[^\"]*">/);
    assert.match(html, new RegExp(`<meta name="description" content="${escapeRegExp(line.meta)}">`));
    assert.equal(officialAnchors.some((anchor) => !/nofollow/i.test(anchor)), true, 'Falta enlace oficial dofollow');
    assert.doesNotMatch(html, falseAttribution);
    assert.match(profile, new RegExp(`href="${escapeRegExp(relative)}"`));
    assert.match(sitemap, new RegExp(`<loc>${escapeRegExp(canonical)}</loc>`));
  });
}
