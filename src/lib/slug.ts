/**
 * Convierte texto legible en un slug de URL.
 *   "NFPA 1970" → "nfpa-1970"   ·   "Equipos EPP" → "equipos-epp"
 *
 * Vive en un módulo externo (no en el frontmatter del .astro) porque el
 * build de producción de Astro extrae `getStaticPaths` a un scope aislado
 * y no ve los helpers declarados junto a él. Importándolo, queda disponible
 * tanto en getStaticPaths como en el template.
 */
export function slugify(value: string): string {
  return value
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

/** Slug de categoría del blog: "Equipos EPP" → "equipos-epp". */
export const slugifyCategory = slugify;

/** Slug de tag del blog: "NFPA 1970" → "nfpa-1970". */
export const slugifyTag = slugify;
