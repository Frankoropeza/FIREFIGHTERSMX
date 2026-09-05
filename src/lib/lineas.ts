/**
 * Acceso a las páginas de línea de producto (L5) de empresas VIP.
 *
 * Vive en un módulo porque lo usan getStaticPaths de dos páginas
 * (la ficha y la propia línea) — ver memoria ffmx-getstaticpaths-scope.
 */
import { getCollection, type CollectionEntry } from 'astro:content';

export type Linea = CollectionEntry<'lineas'>['data'];

let _cache: Linea[] | null = null;
export async function todasLasLineas(): Promise<Linea[]> {
  if (_cache) return _cache;
  _cache = (await getCollection('lineas')).map((l) => l.data);
  return _cache;
}

export const urlLinea = (l: Pick<Linea, 'giro' | 'estado' | 'empresa' | 'slug'>) =>
  `/empresas/${l.giro}/${l.estado}/${l.empresa}/${l.slug}/`;

/** Líneas de una empresa (por slug), sin importar la plaza en la que están ancladas */
export async function lineasDeEmpresa(empresa: string): Promise<Linea[]> {
  return (await todasLasLineas()).filter((l) => l.empresa === empresa);
}

/** Mapa slug-de-línea → URL interna, para que la card de la ficha apunte adentro */
export async function urlsLineasDeEmpresa(empresa: string): Promise<Record<string, string>> {
  const out: Record<string, string> = {};
  for (const l of await lineasDeEmpresa(empresa)) out[l.slug] = urlLinea(l);
  return out;
}
