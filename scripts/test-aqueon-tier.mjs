import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import { test } from 'node:test';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const profilePath = path.join(root, 'src/content/empresas/ciudad-de-mexico/aqueon-mexico.md');
const profile = readFileSync(profilePath, 'utf8');
const lineTemplate = readFileSync(path.join(root, 'src/pages/empresas/[giro]/[estado]/[slug]/[linea].astro'), 'utf8');

const lines = [
  {
    name: 'Monitores fijos',
    slug: 'monitores-fijos',
    href: 'https://monitorescontraincendios.com/monitores-fijos/',
    meta: 'Monitores fijos contra incendio de AQUEON México en CDMX. Guía para comparar operación, red hidráulica, criterios técnicos y datos para cotizar.',
  },
  {
    name: 'Monitores portátiles',
    slug: 'monitores-portatiles',
    href: 'https://monitorescontraincendios.com/monitores-portatiles/',
    meta: 'Monitores portátiles contra incendio de AQUEON México en CDMX. Guía para comparar despliegue, estabilidad, alimentación y datos para cotizar.',
  },
  {
    name: 'Monitores automáticos',
    slug: 'monitores-automaticos',
    href: 'https://monitorescontraincendios.com/monitores-automaticos/',
    meta: 'Monitores automáticos contra incendio de AQUEON México en CDMX. Guía para comparar control, integración, pruebas y datos para cotizar.',
  },
];

const unsafeClaims = /55 1234 5678|Torre Mayor|Reforma 505|fundaci[oó]n|tel[eé]fono|direcci[oó]n|coordenadas|FM Approved|UL Listed|ATEX|IECEx|ISO 9001|15 a[nñ]os|500 sistemas/i;
const phoneOrPostalCode = /(?:\+?52[\s.-]?)?\(?\d{2,3}\)?[\s.-]?\d{3,4}[\s.-]?\d{4}|\bC\.?\s*P\.?\s*\d{5}\b/i;

test('la meta descripción no publica cero modelos cuando no hay catálogo verificable', () => {
  assert.doesNotMatch(lineTemplate, /\$\{l\.modelos\.length\} modelos/);
  assert.match(lineTemplate, /description: recorta\(l\.metaDescripcion \?\?/);
});

test('la plantilla separa la guía editorial de afirmaciones atribuibles a la empresa', () => {
  assert.match(lineTemplate, /const esEditorial = l\.origenContenido === 'editorial';/);
  assert.match(lineTemplate, /esEditorial \? 'Escenarios de aplicación'/);
  assert.doesNotMatch(lineTemplate, /Con estos datos la empresa compromete propuesta formal en menos de 24 horas hábiles\./);
});

for (const line of lines) {
  test(`${line.name} enlaza a una página Tier-1 propia`, () => {
    const start = profile.indexOf(`- nombre: "${line.name}"`);
    assert.notEqual(start, -1, `No existe la línea ${line.name} en la ficha`);
    const next = profile.indexOf('\n    - nombre:', start + 1);
    const block = profile.slice(start, next === -1 ? profile.length : next);
    assert.match(block, new RegExp(`pagina: "${line.slug}"`));
  });

  test(`${line.name} conserva la política factual de AQUEON`, () => {
    const file = path.join(root, `src/content/lineas/aqueon-mexico/${line.slug}.md`);
    assert.equal(existsSync(file), true, `Falta ${file}`);
    const source = readFileSync(file, 'utf8');

    assert.match(source, /^empresa: "aqueon-mexico"$/m);
    assert.match(source, /^estado: "ciudad-de-mexico"$/m);
    assert.match(source, /^giro: "equipos-contra-incendio"$/m);
    assert.match(source, new RegExp(`^slug: "${line.slug}"$`, 'm'));
    assert.match(source, /^origenContenido: "editorial"$/m);
    assert.match(source, new RegExp(`^metaDescripcion: "${line.meta.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}"$`, 'm'));
    assert.ok(line.meta.length >= 120 && line.meta.length <= 155, `Meta de ${line.slug}: ${line.meta.length} caracteres`);
    assert.doesNotMatch(line.meta, /\.\s*\d+\.?$/);
    assert.match(source, new RegExp(`^urlEmpresa: "${line.href.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}"$`, 'm'));
    assert.match(source, new RegExp(`url: "${line.href.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}"`));
    assert.doesNotMatch(source, unsafeClaims);
    assert.doesNotMatch(source, phoneOrPostalCode);
  });
}
