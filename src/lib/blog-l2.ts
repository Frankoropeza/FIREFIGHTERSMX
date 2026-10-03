/**
 * Piezas compartidas de la plantilla L2 para el blog: hub (/blog/) y archivos
 * (/blog/categoria/, /blog/tag/, /blog/pagina/). Un solo origen para la tarjeta
 * de artículo, los bloques de la barra lateral y los metadatos, de modo que
 * los cuatro destinos se mantengan homologados (2026-10).
 */
import type { CollectionEntry } from 'astro:content';
import { BLOG_POR_CATEGORIA } from '@lib/enlaces-directorio';
import { portadaBlog } from '@lib/portada-blog';
import { allCategories } from '@data/categories';
import { lineaPorSlug } from '@lib/linea-card';
import { slugifyCategory, slugifyTag } from '@lib/slug';
import type { L2Bloque } from '@lib/l2';

export type PostBlog = CollectionEntry<'blog'>;


/** Categorías de producto que trata una categoría del blog (inverso de BLOG_POR_CATEGORIA). */
const productosDeCategoriaBlog = (catBlog: string) =>
  Object.entries(BLOG_POR_CATEGORIA)
    .filter(([, cats]) => cats.includes(catBlog))
    .map(([slug]) => allCategories.find((c) => c.slug === slug))
    .filter((c): c is NonNullable<typeof c> => !!c)
    .slice(0, 2)
    .map((c) => ({ label: lineaPorSlug(c.slug)?.titulo ?? c.label, href: `/productos/${c.slug}/` }));

export const minutosDeLectura = (post: PostBlog) => Math.ceil((post.body ?? '').split(' ').length / 200);

/** Props de LineaCard para un artículo. */
export const tarjetaBlog = (post: PostBlog) => {
  const img = portadaBlog(post);
  return {
    href: `/blog/${post.id}/`,
    norma: `${post.data.category} · ${minutosDeLectura(post)} min de lectura`,
    titulo: post.data.title,
    texto: post.data.description,
    imagen: img?.url ?? null,
    imagenAlt: img?.alt ?? post.data.title,
    hijas: productosDeCategoriaBlog(post.data.category),
    cta: `Guía: ${post.data.tags?.[0] ?? post.data.category}`,
  };
};

export const hrefCategoria = (cat: string) => `/blog/categoria/${slugifyCategory(cat)}/`;
export const hrefTag = (tag: string) => `/blog/tag/${slugifyTag(tag)}/`;

export function conteoCategorias(posts: PostBlog[]): Record<string, number> {
  return posts.reduce<Record<string, number>>((acc, p) => {
    acc[p.data.category] = (acc[p.data.category] ?? 0) + 1;
    return acc;
  }, {});
}

/** Bloque «Categorías del blog» con conteo. */
export function bloqueCategoriasBlog(posts: PostBlog[]): L2Bloque {
  const conteo = conteoCategorias(posts);
  return {
    id: 'blog-categorias',
    titulo: 'Categorías del blog',
    meta: `${posts.length} artículos técnicos`,
    grupos: [{ links: Object.keys(conteo).map((c) => ({ label: c, href: hrefCategoria(c), n: conteo[c] })) }],
    foot: { label: 'Blog técnico contra incendio', href: '/blog/' },
  };
}

/** Bloque «Artículos destacados» (los más recientes, sin repetir el actual). */
export function bloqueDestacadosBlog(posts: PostBlog[], excluir: string[] = [], n = 5): L2Bloque {
  return {
    id: 'blog-destacados',
    titulo: 'Artículos destacados',
    grupos: [{ links: posts.filter((p) => !excluir.includes(p.id)).slice(0, n).map((p) => ({ label: p.data.title, href: `/blog/${p.id}/` })) }],
  };
}

/** Bloque de etiquetas. `actual` (nombre de etiqueta) se omite. */
export function bloqueTemasBlog(tags: string[], titulo = 'Temas frecuentes', actual?: string, n = 12): L2Bloque {
  return {
    id: 'blog-temas',
    titulo,
    grupos: [{ links: tags.filter((t) => t !== actual).slice(0, n).map((t) => ({ label: t, href: hrefTag(t) })) }],
  };
}

/** Bloque de recursos comerciales y normativos que acompaña a todos los archivos. */
export function bloqueRecursosBlog(): L2Bloque {
  return {
    id: 'blog-recursos',
    titulo: 'Normas y cobertura',
    grupos: [{ links: [
      { label: 'Certificaciones NFPA y NOM', href: '/certificaciones/' },
      { label: 'Licitaciones de equipo contra incendio', href: '/licitaciones/' },
      { label: 'Cobertura nacional por estado', href: '/cobertura/' },
      { label: 'Precios de equipo para bomberos', href: '/precios/' },
    ] }],
  };
}

/** Etiquetas ordenadas por frecuencia (desempate alfabético) — las que más agrupan primero. */
export function etiquetasPorFrecuencia(posts: PostBlog[]): string[] {
  const n = new Map<string, number>();
  for (const p of posts) for (const t of p.data.tags ?? []) n.set(t, (n.get(t) ?? 0) + 1);
  return [...n.entries()].sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0], 'es')).map(([t]) => t);
}

/* ─── Metadatos de archivos: title ≤ 60 y description ≤ 160 ─────────────── */

/** Title con cascada: el más descriptivo que quepa en 60 caracteres. */
export function tituloArchivo(nombre: string): string {
  const opciones = [
    `${nombre}: artículos técnicos de equipo contra incendio`,
    `${nombre}: artículos técnicos contra incendio`,
    `${nombre}: guías técnicas para bomberos`,
    `${nombre}: guías técnicas`,
  ];
  return opciones.find((t) => t.length <= 60) ?? nombre.slice(0, 60);
}

/** Description con cascada: la más completa que quepa en 160 caracteres. */
export function descripcionArchivo(tema: string): string {
  const opciones = [
    `Artículos técnicos sobre ${tema} en equipo para bomberos y sistemas contra incendio: normas NFPA y NOM y criterios de selección en México.`,
    `Artículos técnicos sobre ${tema} para bomberos y sistemas contra incendio: normas NFPA y NOM.`,
    `Artículos técnicos sobre ${tema} para bomberos y sistemas contra incendio.`,
  ];
  return opciones.find((d) => d.length <= 155) ?? opciones[2];
}
