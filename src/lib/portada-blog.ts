import type { CollectionEntry } from 'astro:content';
import { PORTADAS_BLOG } from '@data/portadas-blog';

/** Imagen de portada de un artículo: la portada propia si existe; si no, la del frontmatter. */
export function portadaBlog(post: CollectionEntry<'blog'>): { url: string; alt: string } | undefined {
  return PORTADAS_BLOG[post.id] ?? post.data.image;
}
