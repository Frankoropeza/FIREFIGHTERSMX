/**
 * Sistema unificado de páginas L4 de marca (cascos y trajes).
 *
 * Fuente única de tipos + metadatos de categoría + registro de marcas.
 * Cada marca (en cascosBrands.ts / trajesBrands.ts) implementa `EquipmentBrand`
 * y se renderiza con `src/components/products/BrandPage.astro`.
 *
 * Homologación: las 7 marcas (3 cascos + 4 trajes) usan el MISMO componente y
 * la MISMA forma de datos. Evolucionar estructura = editar el componente;
 * evolucionar contenido = editar la data; evolucionar columnas/categoría = aquí.
 */
import { cascosBrands } from './cascosBrands';
import { trajesBrandList } from './trajesBrands';
import { scbaBrandList } from './scbaBrands';
import { camarasBrandList } from './camarasBrands';
import { herramientasBrandList } from './herramientasBrands';

/* ── Familias / tipo de riesgo — color e ícono ─────────────────────────────── */
export type TipoKey =
  | 'estructural' | 'proximidad' | 'forestal' | 'usar' | 'mando' | 'industrial' | 'cbrn'
  | 'corte' | 'separacion' | 'combinada' | 'estabilizacion';

export interface TipoMeta {
  label: string;
  color: string;
  /** Path interno de un SVG 24×24 con stroke=currentColor */
  icon: string;
}

export const tipoEquipo: Record<TipoKey, TipoMeta> = {
  estructural: {
    label: 'Estructural',
    color: '#F75000',
    icon: `<path stroke-linecap="round" stroke-linejoin="round" d="M3 14a9 9 0 0 1 18 0M3 14h18v3a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1zM8 14v-2"/>`,
  },
  proximidad: {
    label: 'Proximidad ARFF',
    color: '#4A9ED4',
    icon: `<circle cx="12" cy="12" r="4.5"/><path stroke-linecap="round" d="M12 1.5v3M12 19.5v3M4 4l2 2M18 18l2 2M1.5 12h3M19.5 12h3M4 20l2-2M18 6l2-2"/>`,
  },
  forestal: {
    label: 'Forestal',
    color: '#34D399',
    icon: `<path stroke-linecap="round" stroke-linejoin="round" d="M12 2 4 22h16L12 2zM12 9v7"/>`,
  },
  usar: {
    label: 'USAR / Rescate',
    color: '#F5A623',
    icon: `<path stroke-linecap="round" stroke-linejoin="round" d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>`,
  },
  mando: {
    label: 'Mando',
    color: '#A78BFA',
    icon: `<path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.5a.6.6 0 0 1 1.04 0l2.3 4.66 5.14.75a.6.6 0 0 1 .33 1.02l-3.72 3.63.88 5.12a.6.6 0 0 1-.87.63L12 17.5l-4.6 2.42a.6.6 0 0 1-.87-.63l.88-5.12L3.7 10.5a.6.6 0 0 1 .33-1.02l5.14-.75z"/>`,
  },
  industrial: {
    label: 'Industrial',
    color: '#F5A623',
    icon: `<path stroke-linecap="round" stroke-linejoin="round" d="M13 2 4 14h6l-1 8 9-12h-6l1-8z"/>`,
  },
  cbrn: {
    label: 'CBRN / HAZMAT',
    color: '#2DD4BF',
    icon: `<path stroke-linecap="round" stroke-linejoin="round" d="M12 2 4 5v6c0 5 3.5 8 8 10 4.5-2 8-5 8-10V5l-8-3zM12 8v4M12 16h.01"/>`,
  },
  corte: {
    label: 'Corte / Cizalla',
    color: '#F75000',
    icon: `<circle cx="6" cy="6" r="2.5"/><circle cx="6" cy="18" r="2.5"/><path stroke-linecap="round" stroke-linejoin="round" d="M20 4 8 14.5M20 20 8 9.5"/>`,
  },
  separacion: {
    label: 'Separación',
    color: '#4A9ED4',
    icon: `<path stroke-linecap="round" stroke-linejoin="round" d="M5 4l6 8-6 8M19 4l-6 8 6 8"/>`,
  },
  combinada: {
    label: 'Combinada',
    color: '#F5A623',
    icon: `<path stroke-linecap="round" stroke-linejoin="round" d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>`,
  },
  estabilizacion: {
    label: 'Empuje y Estabilización',
    color: '#34D399',
    icon: `<path stroke-linecap="round" stroke-linejoin="round" d="M2 12h6M8 9l3 3-3 3M12 7h10v10H12z"/>`,
  },
};

/* ── Interfaces de datos de marca ──────────────────────────────────────────── */
export interface BrandStat { valor: string; etiq: string; }
export interface BrandCredencial { n: string; t: string; d: string; }
export interface BrandLinea { tipo: TipoKey; badge: string; titulo: string; modelos: string; desc: string; tech: string; }
export interface BrandAnatomia { t: string; d: string; }
export interface BrandGuia { n: string; t: string; }
export interface BrandSegmento { num: string; tipo: TipoKey; titulo: string; desc: string; modelos: string; }
export interface BrandFaq { q: string; a: string; }
export interface ComparativaRow {
  modelo: string;
  tipo: TipoKey;
  rec: boolean;
  /** Valores por columna; las claves coinciden con comparativaCols de la categoría */
  norma?: string; material?: string; proteccion?: string;
  shell?: string; tpp?: string; thl?: string;
  autonomia?: string; cilindro?: string; electronica?: string;
  resolucion?: string; sensor?: string;
  fuerza?: string; rango?: string; fuente?: string;
  peso?: string; ideal?: string;
}

export interface EquipmentBrand {
  /** Categoría L3: 'cascos-nfpa' | 'trajes-bombero' */
  categorySlug: string;
  /** Slug de URL bajo /productos/<categorySlug>/ */
  slug: string;
  /** Valor exacto de `brand` en products.ts para filtrar el catálogo */
  brand: string;
  brandLabel: string;
  /** Descripción corta cuando esta marca aparece como cross-link hermano */
  crossDesc: string;
  eyebrow: string;
  heroTitleTop: string;
  heroTitleAccent: string;
  heroLead: string;
  heroIntro: string[];
  heroBadges: string[];
  seoTitle: string;
  seoDescription: string;
  founding?: string;
  parentOrg?: { name: string; ticker?: string };
  stats: BrandStat[];
  credenciales: BrandCredencial[];
  linesIntro: string;
  lineas: BrandLinea[];
  flagship: string;
  anatomiaIntro: string;
  anatomia: BrandAnatomia[];
  comparativa: ComparativaRow[];
  comparativaNote: string;
  guia: BrandGuia[];
  segmentosIntro: string;
  segmentos: BrandSegmento[];
  faqs: BrandFaq[];
  ctaKicker: string;
  ctaTitleHtml: string;
  waQuote: string;
}

/* ── Metadatos por categoría (breadcrumb, filtro, columnas, conjunto) ───────── */
export interface ComparativaCol { key: string; label: string; align?: 'left' | 'center'; accent?: boolean; }
export interface CrossLink { label: string; desc: string; href: string; }
export interface CategoriaMeta {
  label: string;
  productCategory: string;
  comparativaCols: ComparativaCol[];
  conjunto: CrossLink[];
}

export const categoriaMarca: Record<string, CategoriaMeta> = {
  'cascos-nfpa': {
    label: 'Cascos NFPA',
    productCategory: 'Cascos NFPA',
    comparativaCols: [
      { key: 'norma', label: 'Norma', align: 'center', accent: true },
      { key: 'material', label: 'Material' },
      { key: 'proteccion', label: 'Protección facial' },
      { key: 'peso', label: 'Peso', align: 'center' },
      { key: 'ideal', label: 'Ideal para' },
    ],
    conjunto: [
      { label: 'Trajes para Bomberos', desc: 'Globe, Lion, Honeywell, Fire-Dex — NFPA 1970', href: '/productos/trajes-bombero' },
      { label: 'Equipos SCBA', desc: 'MSA G1, Dräger y 3M Scott — integración con casco', href: '/productos/equipos-scba' },
      { label: 'Cámaras Térmicas', desc: 'Soporte en casco · NFPA 1801', href: '/productos/camaras-termicas' },
      { label: 'Mantenimiento y vida útil', desc: 'Inspección y retiro de cascos NFPA 1850', href: '/servicios/mantenimiento' },
      { label: 'Soporte para licitaciones', desc: 'Fichas técnicas y manifiestos por partida', href: '/licitaciones' },
    ],
  },
  'trajes-bombero': {
    label: 'Trajes para Bomberos',
    productCategory: 'Trajes Bombero',
    comparativaCols: [
      { key: 'shell', label: 'Shell exterior' },
      { key: 'tpp', label: 'TPP (cal/cm²)', align: 'center', accent: true },
      { key: 'thl', label: 'THL (W/m²)', align: 'center', accent: true },
      { key: 'peso', label: 'Peso', align: 'center' },
      { key: 'ideal', label: 'Ideal para' },
    ],
    conjunto: [
      { label: 'Cascos NFPA', desc: 'MSA Gallet, Bullard y Cairns — NFPA 1970', href: '/productos/cascos-nfpa' },
      { label: 'Equipos SCBA', desc: 'MSA G1, Dräger y 3M Scott — aire autónomo', href: '/productos/equipos-scba' },
      { label: 'Mantenimiento y vida útil', desc: 'Lavado, reparación e inspección NFPA 1850', href: '/servicios/mantenimiento' },
      { label: 'Normas y certificaciones', desc: 'NFPA 1970, 1977 y 1850 explicadas', href: '/certificaciones' },
      { label: 'Soporte para licitaciones', desc: 'Fichas técnicas y manifiestos por partida', href: '/licitaciones' },
    ],
  },
  'equipos-scba': {
    label: 'Equipos SCBA',
    productCategory: 'Equipos SCBA',
    comparativaCols: [
      { key: 'autonomia', label: 'Autonomía', align: 'center', accent: true },
      { key: 'cilindro', label: 'Cilindro' },
      { key: 'peso', label: 'Peso', align: 'center' },
      { key: 'electronica', label: 'Electrónica' },
      { key: 'ideal', label: 'Ideal para' },
    ],
    conjunto: [
      { label: 'Cascos NFPA', desc: 'MSA Gallet, Bullard y Cairns — integración con máscara', href: '/productos/cascos-nfpa' },
      { label: 'Trajes para Bomberos', desc: 'Globe, Lion, Honeywell, Fire-Dex — NFPA 1970', href: '/productos/trajes-bombero' },
      { label: 'Cámaras Térmicas', desc: 'Integración en máscara y casco · NFPA 1801', href: '/productos/camaras-termicas' },
      { label: 'Mantenimiento y servicio', desc: 'Prueba hidrostática y de flujo anual · NFPA 1852', href: '/servicios/mantenimiento' },
      { label: 'Soporte para licitaciones', desc: 'Fichas técnicas y manifiestos por partida', href: '/licitaciones' },
    ],
  },
  'camaras-termicas': {
    label: 'Cámaras Térmicas',
    productCategory: 'Cámaras Térmicas',
    comparativaCols: [
      { key: 'resolucion', label: 'Resolución', align: 'center', accent: true },
      { key: 'sensor', label: 'Sensor' },
      { key: 'autonomia', label: 'Autonomía', align: 'center' },
      { key: 'peso', label: 'Peso', align: 'center' },
      { key: 'ideal', label: 'Ideal para' },
    ],
    conjunto: [
      { label: 'Cascos NFPA', desc: 'MSA Gallet, Bullard y Cairns — montaje de cámara', href: '/productos/cascos-nfpa' },
      { label: 'Equipos SCBA', desc: 'MSA G1, Dräger y 3M Scott — integración TIC', href: '/productos/equipos-scba' },
      { label: 'Trajes para Bomberos', desc: 'Globe, Lion, Honeywell, Fire-Dex — NFPA 1970', href: '/productos/trajes-bombero' },
      { label: 'Mantenimiento y servicio', desc: 'Calibración y verificación NFPA 1801', href: '/servicios/mantenimiento' },
      { label: 'Soporte para licitaciones', desc: 'Fichas técnicas y manifiestos por partida', href: '/licitaciones' },
    ],
  },
  'herramientas-rescate': {
    label: 'Herramientas de Rescate',
    productCategory: 'Herramientas Rescate',
    comparativaCols: [
      { key: 'fuerza', label: 'Fuerza / Capacidad', align: 'center', accent: true },
      { key: 'rango', label: 'Apertura / Carrera' },
      { key: 'peso', label: 'Peso', align: 'center' },
      { key: 'fuente', label: 'Fuente' },
      { key: 'ideal', label: 'Ideal para' },
    ],
    conjunto: [
      { label: 'Cascos NFPA', desc: 'MSA Gallet, Bullard y Cairns — NFPA 1970', href: '/productos/cascos-nfpa' },
      { label: 'Trajes para Bomberos', desc: 'Globe, Lion, Honeywell, Fire-Dex — NFPA 1970', href: '/productos/trajes-bombero' },
      { label: 'Equipos SCBA', desc: 'MSA G1, Dräger y 3M Scott — aire autónomo', href: '/productos/equipos-scba' },
      { label: 'Capacitación y demostración', desc: 'Operación y mantenimiento NFPA 1936', href: '/servicios/capacitacion' },
      { label: 'Soporte para licitaciones', desc: 'Fichas técnicas y manifiestos por partida', href: '/licitaciones' },
    ],
  },
};

/* ── Registro de marcas + helpers ──────────────────────────────────────────── */
const cascosCrossDesc: Record<string, string> = {
  'msa-gallet': 'Estilo europeo integral · F1 XF · visor retráctil · NFPA 1970',
  'bullard': 'Estilo americano de ala completa · USTM · TIC · NFPA 1970',
  'cairns': 'Cuero icónico desde 1836 · N6A Houston · NFPA 1970',
};

/** Adapta las marcas de cascos (tipo local CascoBrand) a EquipmentBrand. */
const cascosAdapted: EquipmentBrand[] = cascosBrands.map((b) => ({
  ...b,
  categorySlug: 'cascos-nfpa',
  crossDesc: cascosCrossDesc[b.slug] ?? b.eyebrow,
} as EquipmentBrand));

export const brandPages: EquipmentBrand[] = [...cascosAdapted, ...trajesBrandList, ...scbaBrandList, ...camarasBrandList, ...herramientasBrandList];

export function brandPageBySlug(slug: string): EquipmentBrand | undefined {
  return brandPages.find((b) => b.slug === slug);
}

/** Otras marcas de la MISMA categoría (cross-links por URL específica). */
export function hermanasMarca(brand: EquipmentBrand): CrossLink[] {
  return brandPages
    .filter((b) => b.categorySlug === brand.categorySlug && b.slug !== brand.slug)
    .map((b) => ({ label: b.brandLabel, desc: b.crossDesc, href: `/productos/${b.categorySlug}/${b.slug}` }));
}
