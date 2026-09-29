/**
 * Utilidades de las cards de línea de producto (LineaCard).
 * Fuente única de datos: src/data/catalogo.ts (líneas, subcategorías, botón principal).
 */
import { existsSync } from 'node:fs';
import { join } from 'node:path';
import { catalogo, type LineaCatalogo } from '@data/catalogo';

export const lineasCatalogo: LineaCatalogo[] = catalogo.flatMap((f) => f.lineas);

export const lineaPorSlug = (slug: string) => lineasCatalogo.find((l) => l.slug === slug);

/** Imagen de la línea (1200×750): la del catálogo y, si no existe, la de la categoría homónima. */
export const imagenLinea = (slug: string): string | null => {
  for (const src of [`/images/catalogo/${slug}.avif`, `/images/categorias/${slug}.avif`]) {
    if (existsSync(join(process.cwd(), 'public', src))) return src;
  }
  return null;
};
