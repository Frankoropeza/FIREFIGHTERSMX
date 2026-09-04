/**
 * Acceso y agregados del directorio nacional de empresas.
 *
 * Vive en un módulo (no en frontmatter) porque los helpers de getStaticPaths
 * deben importarse — ver memoria ffmx-getstaticpaths-scope.
 * Se cachea en módulo: getCollection corre una sola vez por build.
 */
import { getCollection, type CollectionEntry } from 'astro:content';
import { giros, giroMap, planConfig, type GiroKey } from '@data/giros';
import { estados as estadosDir } from '@data/estaciones';

export type Empresa = CollectionEntry<'empresas'>['data'];

/** Estados: nombre + slug + región, tomados del directorio de estaciones (fuente única) */
export const estadosMeta = estadosDir.map((e) => ({ nombre: e.nombre, slug: e.slug, abreviatura: e.abreviatura, region: e.region }));
export const estadoMeta = (slug: string) => estadosMeta.find((e) => e.slug === slug);

let _cache: Empresa[] | null = null;
export async function todasLasEmpresas(): Promise<Empresa[]> {
  if (_cache) return _cache;
  const entries = await getCollection('empresas', ({ data }) => data.activa);
  _cache = entries.map((e) => e.data).sort(ordenListing);
  return _cache;
}

/** Orden de listado: plan (destacado → básico), luego confianza, luego nombre */
const confOrden = { alta: 0, media: 1, baja: 2 } as const;
export function ordenListing(a: Empresa, b: Empresa): number {
  const p = planConfig[a.plan].orden - planConfig[b.plan].orden; if (p) return p;
  const c = confOrden[a.confianza] - confOrden[b.confianza]; if (c) return c;
  return a.nombre.localeCompare(b.nombre, 'es');
}

export const urlEmpresa = (e: Empresa) => `/empresas/${e.giroPrincipal}/${e.estado}/${e.slug}/`;
export const urlGiroEstado = (giro: GiroKey, estado: string) => `/empresas/${giro}/${estado}/`;

export async function empresasPorGiro(giro: GiroKey) {
  return (await todasLasEmpresas()).filter((e) => e.giros.includes(giro));
}
export async function empresasPorEstado(estado: string) {
  return (await todasLasEmpresas()).filter((e) => e.estado === estado);
}
export async function empresasPorGiroEstado(giro: GiroKey, estado: string) {
  return (await todasLasEmpresas()).filter((e) => e.giros.includes(giro) && e.estado === estado);
}

export interface Conteo { slug: string; nombre: string; total: number }

/** Conteo por estado (todos los 32, incluso en cero) */
export async function conteoPorEstado(giro?: GiroKey): Promise<Conteo[]> {
  const all = await todasLasEmpresas();
  return estadosMeta.map((s) => ({
    slug: s.slug, nombre: s.nombre,
    total: all.filter((e) => e.estado === s.slug && (!giro || e.giros.includes(giro))).length,
  }));
}
/** Conteo por giro */
export async function conteoPorGiro(estado?: string): Promise<(Conteo & { giro: GiroKey })[]> {
  const all = await todasLasEmpresas();
  return giros.map((g) => ({
    slug: g.slug, giro: g.slug, nombre: g.labelCorto,
    total: all.filter((e) => e.giros.includes(g.slug) && (!estado || e.estado === estado)).length,
  }));
}
/** Ciudades con más empresas dentro de un conjunto */
export function topCiudades(lista: Empresa[], n = 8) {
  const m = new Map<string, number>();
  for (const e of lista) m.set(e.ciudad, (m.get(e.ciudad) ?? 0) + 1);
  return [...m.entries()].sort((a, b) => b[1] - a[1]).slice(0, n).map(([ciudad, total]) => ({ ciudad, total }));
}
/** Especialidades presentes con etiqueta legible */
export function especialidadesPresentes(lista: Empresa[], giro: GiroKey) {
  const m = new Map<string, number>();
  for (const e of lista) for (const s of e.especialidades) if (giroMap[giro].especialidades[s]) m.set(s, (m.get(s) ?? 0) + 1);
  return [...m.entries()].sort((a, b) => b[1] - a[1]).map(([slug, total]) => ({ slug, label: giroMap[giro].especialidades[slug], total }));
}

/** Stats globales para el home y el hub */
export async function statsDirectorio() {
  const all = await todasLasEmpresas();
  const conEstado = new Set(all.map((e) => e.estado)).size;
  const ciudades = new Set(all.map((e) => `${e.estado}/${e.ciudad}`)).size;
  const conWeb = all.filter((e) => e.sitioWeb).length;
  const verificadas = all.filter((e) => e.confianza !== 'baja').length;
  return { total: all.length, estados: conEstado, ciudades, conWeb, verificadas, giros: giros.length };
}

/** Puntos para mapa: [lat, lng, nombre, url, giro] */
export function puntosMapa(lista: Empresa[]) {
  return lista.filter((e) => e.coordenadas).map((e) => [e.coordenadas!.lat, e.coordenadas!.lng, e.nombre, urlEmpresa(e), e.giroPrincipal] as const);
}
