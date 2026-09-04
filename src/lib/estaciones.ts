/**
 * Capa de acceso al directorio de estaciones de bomberos.
 *
 * Los datos viven en la colección `estaciones` (un .md por ESTACIÓN FÍSICA).
 * Este módulo es el único que habla con getCollection: las páginas piden
 * agregados ya resueltos, igual que hace @lib/empresas con el directorio
 * de empresas.
 *
 * Los helpers de getStaticPaths viven aquí y se importan; declararlos en el
 * frontmatter de la página rompe el build de producción (ver docs).
 */
import { getCollection, type CollectionEntry } from 'astro:content';
import { estados as estadosMetaData, estadoPorSlug as metaPorSlug, type EstadoMeta } from '@data/estados';
import { TIPOS, type TipoEstacion } from '@data/estaciones-config';

export type Estacion = CollectionEntry<'estaciones'>['data'];

export const estadosMeta = estadosMetaData;
export const estadoMeta = metaPorSlug;

/** Estado con sus estaciones ya resueltas. Sustituye al viejo EstadoDirectorio. */
export interface EstadoConEstaciones extends EstadoMeta {
  estaciones: Estacion[];
}

/** Central primero, luego por nombre. Estable entre builds. */
export function ordenEstaciones(a: Estacion, b: Estacion): number {
  const rol = (e: Estacion) => (e.rolEstacion === 'central' ? 0 : e.rolEstacion === 'unica' ? 1 : 2);
  return rol(a) - rol(b) || a.nombre.localeCompare(b.nombre, 'es');
}

let _cache: Estacion[] | null = null;
export async function todasLasEstaciones(): Promise<Estacion[]> {
  if (_cache) return _cache;
  const entries = await getCollection('estaciones', ({ data }) => data.activa !== false);
  _cache = entries.map((e) => e.data).sort(ordenEstaciones);
  return _cache;
}

export async function estacionesPorEstado(estadoSlug: string): Promise<Estacion[]> {
  return (await todasLasEstaciones()).filter((e) => e.estado === estadoSlug);
}

/** Los 32 estados con sus estaciones. Solo los que tienen al menos una. */
export async function estadosConEstaciones(): Promise<EstadoConEstaciones[]> {
  const todas = await todasLasEstaciones();
  return estadosMetaData
    .map((m) => ({ ...m, estaciones: todas.filter((e) => e.estado === m.slug) }))
    .filter((e) => e.estaciones.length > 0);
}

export async function estadoConEstaciones(estadoSlug: string): Promise<EstadoConEstaciones | undefined> {
  const m = metaPorSlug(estadoSlug);
  if (!m) return undefined;
  return { ...m, estaciones: await estacionesPorEstado(estadoSlug) };
}

/** Parejas estado+estación para el getStaticPaths de las fichas L3. */
export async function todasLasParejas(): Promise<{ estado: EstadoConEstaciones; estacion: Estacion }[]> {
  const estados = await estadosConEstaciones();
  return estados.flatMap((estado) => estado.estaciones.map((estacion) => ({ estado, estacion })));
}

export async function estacionPorSlug(estadoSlug: string, slug: string): Promise<Estacion | undefined> {
  return (await estacionesPorEstado(estadoSlug)).find((e) => e.slug === slug);
}

export async function estacionesPorTipo(tipo: TipoEstacion): Promise<Estacion[]> {
  return (await todasLasEstaciones()).filter((e) => e.tipo === tipo);
}

/** Tipos con al menos una estación, en el orden canónico de TIPOS. */
export async function tiposPresentes(): Promise<TipoEstacion[]> {
  const todas = await todasLasEstaciones();
  return TIPOS.filter((t) => todas.some((e) => e.tipo === t));
}

export async function conteoPorTipo(): Promise<{ tipo: TipoEstacion; total: number }[]> {
  const todas = await todasLasEstaciones();
  return TIPOS.map((tipo) => ({ tipo, total: todas.filter((e) => e.tipo === tipo).length })).filter((t) => t.total > 0);
}

export async function totalEstaciones(): Promise<number> {
  return (await todasLasEstaciones()).length;
}

/** Otras estaciones de la misma corporación. La base de la agrupación por cuerpo. */
export async function hermanasDeCorporacion(e: Estacion): Promise<Estacion[]> {
  return (await estacionesPorEstado(e.estado))
    .filter((x) => x.corporacionSlug === e.corporacionSlug && x.slug !== e.slug);
}

export const urlEstacion = (e: Estacion) => `/estaciones/${e.estado}/${e.slug}/`;
export const urlEstado = (slug: string) => `/estaciones/${slug}/`;

/** Última fecha de verificación presente en un conjunto de fichas. */
export function ultimaVerificacion(lista: Estacion[]): string | null {
  return lista.map((e) => e.verificadoEl).filter(Boolean).sort().pop() ?? null;
}

const MESES = ['enero','febrero','marzo','abril','mayo','junio','julio','agosto','septiembre','octubre','noviembre','diciembre'];
/** '2026-06' → 'junio de 2026'. Devuelve null si no hay fecha. */
export function fechaLarga(v: string | null | undefined): string | null {
  if (!v) return null;
  const [y, m] = v.split('-');
  return m ? `${MESES[parseInt(m, 10) - 1]} de ${y}` : y;
}
