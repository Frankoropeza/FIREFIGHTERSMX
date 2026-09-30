/**
 * Enlaces entre catálogo, directorio y blog.
 *
 * Esta capa conserva en un solo lugar la relación editorial entre las
 * categorías del catálogo, los giros del directorio y las categorías reales
 * del blog. Las guías se rotan con una semilla estable para repartir los
 * enlaces de plantilla sin publicar borradores ni repetir una misma ficha.
 */
import { getCollection, type CollectionEntry } from 'astro:content';
import type { GiroKey } from '@data/giros';

export const ANCLA_GIRO: Record<GiroKey, string> = {
  extintores: 'Empresas de recarga y venta de extintores',
  'sistemas-ci': 'Empresas de sistemas contra incendio',
  'venta-equipo': 'Proveedores de equipo para bomberos',
  'equipos-contra-incendio': 'Empresas de equipos contra incendios',
  capacitacion: 'Empresas de capacitación y brigadas NOM-002',
};

const GIROS_POR_CATEGORIA: Record<string, GiroKey> = {
  extintores: 'extintores',
  'sistemas-ci': 'sistemas-ci',
  'detectores-de-humo': 'sistemas-ci',
  'senalizacion-emergencia': 'capacitacion',
  'trajes-bombero': 'venta-equipo',
  'cascos-nfpa': 'venta-equipo',
  'equipos-scba': 'venta-equipo',
  'epp-bombero': 'venta-equipo',
  'camaras-termicas': 'venta-equipo',
  'herramientas-rescate': 'venta-equipo',
  hazmat: 'venta-equipo',
  'rescate-vertical': 'venta-equipo',
  'equipo-forestal': 'venta-equipo',
  desfibriladores: 'venta-equipo',
  'drones-emergencia': 'venta-equipo',
};

/** Industrias que atiende cada giro del directorio (interlinking 2026-09-30).
 *  Enlace temático al sector: no afirma que la empresa atienda esa industria. */
export const INDUSTRIAS_POR_GIRO: Record<GiroKey, { href: string; label: string }[]> = {
  extintores: [{ href: '/industrias/hoteles/', label: 'Protección contra incendio para hoteles' }, { href: '/industrias/brigadas-industriales/', label: 'Equipo para brigadas industriales' }],
  'sistemas-ci': [{ href: '/industrias/hospitales/', label: 'Sistemas contra incendio para hospitales' }, { href: '/industrias/hoteles/', label: 'Sistemas contra incendio para hoteles' }],
  'venta-equipo': [{ href: '/industrias/bomberos-municipales/', label: 'Equipo para bomberos municipales' }, { href: '/industrias/proteccion-civil/', label: 'Equipo para Protección Civil' }],
  'equipos-contra-incendio': [{ href: '/industrias/refinerias-pemex/', label: 'Protección para refinerías' }, { href: '/industrias/brigadas-industriales/', label: 'Equipo para brigadas industriales' }],
  capacitacion: [{ href: '/industrias/brigadas-industriales/', label: 'Capacitación para brigadas industriales' }, { href: '/industrias/proteccion-civil/', label: 'Equipo para Protección Civil' }],
};

export function giroDeCategoria(slugCategoriaProducto: string): GiroKey | undefined {
  return GIROS_POR_CATEGORIA[slugCategoriaProducto];
}

export const BLOG_POR_CATEGORIA: Record<string, string[]> = {
  'trajes-bombero': ['Trajes Bombero', 'Equipos EPP'],
  'epp-bombero': ['Equipos EPP'],
  'cascos-nfpa': ['Cascos NFPA'],
  'equipos-scba': ['Equipos SCBA'],
  'camaras-termicas': ['Cámaras Térmicas'],
  'drones-emergencia': ['Drones de Emergencia'],
  hazmat: ['Equipos HAZMAT'],
  'herramientas-rescate': ['Herramientas Rescate'],
  extintores: ['Extintores', 'Mantenimiento y Recarga'],
  'sistemas-ci': ['Sistemas CI', 'Instalación de Sistemas CI'],
  'detectores-de-humo': ['Sistemas CI', 'Instalación de Sistemas CI'],
  'senalizacion-emergencia': ['Normatividad', 'Auditoría NOM-002'],
};

const GIROS_POR_BLOG: Record<string, GiroKey> = {
  Extintores: 'extintores',
  'Mantenimiento y Recarga': 'extintores',
  'Sistemas CI': 'sistemas-ci',
  'Instalación de Sistemas CI': 'sistemas-ci',
  'Auditoría NOM-002': 'capacitacion',
  'Brigadas Empresariales': 'capacitacion',
  'Capacitación Certificada': 'capacitacion',
  Normatividad: 'capacitacion',
  'Cascos NFPA': 'venta-equipo',
  'Cámaras Térmicas': 'venta-equipo',
  'Drones de Emergencia': 'venta-equipo',
  'Equipos EPP': 'venta-equipo',
  'Equipos HAZMAT': 'venta-equipo',
  'Equipos SCBA': 'venta-equipo',
  'Herramientas Rescate': 'venta-equipo',
  'Trajes Bombero': 'venta-equipo',
  Equipamiento: 'venta-equipo',
};

export function giroDeBlog(category: string): GiroKey {
  return GIROS_POR_BLOG[category] ?? 'equipos-contra-incendio';
}

type Post = CollectionEntry<'blog'>;

const hash = (semilla: string): number => {
  let valor = 0;
  for (let i = 0; i < semilla.length; i += 1) valor = ((valor * 31) + semilla.charCodeAt(i)) >>> 0;
  return valor;
};

const seleccionar = (posts: Post[], semilla: string, n: number): Post[] => {
  if (n <= 0 || posts.length === 0) return [];
  const ordenados = [...posts].sort((a, b) => a.id.localeCompare(b.id, 'es'));
  const inicio = hash(semilla) % ordenados.length;
  return Array.from({ length: Math.min(n, ordenados.length) }, (_, i) => ordenados[(inicio + i) % ordenados.length]);
};

const postsPublicados = () => getCollection('blog', ({ data }) => !data.draft);

/** Guías publicadas del giro, rotadas de forma reproducible por página. */
export async function guiasPara(giro: GiroKey, semilla: string, n = 2): Promise<Post[]> {
  return seleccionar((await postsPublicados()).filter((post) => giroDeBlog(post.data.category) === giro), semilla, n);
}

/** Guías de las categorías editoriales asignadas a una categoría de producto. */
export async function guiasPorCategoria(categorias: readonly string[], semilla: string, n = 2): Promise<Post[]> {
  const permitidas = new Set(categorias);
  return seleccionar((await postsPublicados()).filter((post) => permitidas.has(post.data.category)), semilla, n);
}
