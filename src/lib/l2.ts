/**
 * Plantilla L2 (hubs de sección) — datos compartidos de la barra lateral y de la
 * rejilla. Diseño homologado a partir de /productos/ (Frank, 2026-09-30): barra lateral
 * derecha con bloques de enlazado + columna principal con secciones ancladas.
 * Cada hub arma su barra con estos bloques en el orden que le toca (el suyo primero).
 */
import { catalogo } from '@data/catalogo';
import { allCategories } from '@data/categories';
import { featuredProducts } from '@data/products';
import { industries } from '@data/industries';
import { services } from '@data/services';
import { marcaDeBrand } from '@data/interlinking';

export interface L2Link { label: string; href: string; n?: number }
export interface L2Grupo { label?: string; links: L2Link[]; foot?: { label: string; href: string } }
export interface L2Bloque { id: string; titulo: string; meta?: string; grupos: L2Grupo[]; foot?: { label: string; href: string } }
export interface L2Seccion { id: string; label: string }

const barra = (h: string) => (h.endsWith('/') ? h : `${h}/`);

/** Clase de ancho para la fila final incompleta de una rejilla de 3 (6 subcolumnas). */
export const anchoFila = (i: number, n: number): string => {
  const r = n % 3;
  if (r === 0 || i < n - r) return '';
  return r === 1 ? 'l2-span-6' : 'l2-span-3';
};

export function bloqueCategorias(): L2Bloque {
  const EXTRA: Record<string, string[]> = { 'equipo-bomberos': ['drones-emergencia'] };
  const grupos = catalogo.map((f) => ({
    label: f.eyebrow,
    links: [
      ...f.lineas.map((l) => ({ label: l.titulo, href: l.href })),
      ...(EXTRA[f.slug] ?? [])
        .map((s) => allCategories.find((c) => c.slug === s))
        .filter(Boolean)
        .map((c) => ({ label: c!.label, href: `/productos/${c!.slug}/` })),
    ],
    foot: f.hub,
  }));
  const lineas = grupos.reduce((a, g) => a + g.links.length, 0);
  return { id: 'categorias', titulo: 'Categorías', meta: `${featuredProducts.length} modelos · ${lineas} líneas`, grupos };
}

export function bloqueMarcas(): L2Bloque {
  const conteo = new Map<string, L2Link>();
  for (const p of featuredProducts) {
    const m = marcaDeBrand(p.brand);
    if (!m) continue;
    const prev = conteo.get(m.href);
    conteo.set(m.href, { label: prev?.label ?? m.label, href: m.href, n: (prev?.n ?? 0) + 1 });
  }
  const links = [...conteo.values()].sort((a, b) => (b.n ?? 0) - (a.n ?? 0) || a.label.localeCompare(b.label, 'es'));
  return { id: 'marcas', titulo: 'Marcas', meta: 'Fabricantes con ficha en el catálogo', grupos: [{ links }], foot: { label: 'Marcas de equipo para bomberos', href: '/marcas/' } };
}

export function bloqueIndustrias(): L2Bloque {
  return { id: 'industrias', titulo: 'Industrias', grupos: [{ links: industries.map((i) => ({ label: i.name, href: barra(i.href) })) }], foot: { label: 'Equipo contra incendio por industria', href: '/industrias/' } };
}

export function bloqueServicios(): L2Bloque {
  return { id: 'servicios', titulo: 'Servicios', grupos: [{ links: services.map((s) => ({ label: s.title, href: barra(s.href) })) }], foot: { label: 'Servicios contra incendio', href: '/servicios/' } };
}

export function bloqueGuias(links: L2Link[], meta?: string): L2Bloque {
  return { id: 'guias-normas', titulo: 'Normas y guías', meta, grupos: [{ links }], foot: { label: 'Blog técnico contra incendio', href: '/blog/' } };
}

/** Guías por defecto (catálogo). Cada hub puede pasar las suyas. */
export const GUIAS_CATALOGO: L2Link[] = [
  { label: 'Normas NFPA y NOM aplicables', href: '/certificaciones/' },
  { label: 'Guía NOM-002-STPS-2010', href: '/blog/nom-002-stps-guia-completa/' },
  { label: 'Tipos de extintores en México', href: '/blog/tipos-de-extintores-mexico/' },
  { label: 'NFPA 1970: la nueva norma de trajes', href: '/blog/nfpa-1970-nueva-norma-trajes-bombero/' },
  { label: 'Guía de compra de equipo para bomberos', href: '/blog/guia-compra-equipo-bomberos-nfpa-mexico-2026/' },
  { label: 'Licitaciones de equipo contra incendio', href: '/licitaciones/' },
];
