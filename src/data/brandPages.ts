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
import { sistemasCIBrandList } from './sistemasCIBrands';
import { hazmatBrandList } from './hazmatBrands';

/* ── Familias / tipo de riesgo — color e ícono ─────────────────────────────── */
export type TipoKey =
  | 'estructural' | 'proximidad' | 'forestal' | 'usar' | 'mando' | 'industrial' | 'cbrn'
  | 'corte' | 'separacion' | 'combinada' | 'estabilizacion'
  | 'rociadores' | 'deteccion' | 'agente-ci' | 'red-hidraulica'
  | 'traje-nivel-a' | 'traje-nivel-b' | 'detector-multigases' | 'kit-descon';

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
  rociadores: {
    label: 'Rociadores',
    color: '#4A9ED4',
    icon: `<path stroke-linecap="round" stroke-linejoin="round" d="M12 2v4M6.34 6.34 3.51 3.51M4 12H0M6.34 17.66l-2.83 2.83M12 18v4M17.66 17.66l2.83 2.83M20 12h4M17.66 6.34l2.83-2.83"/><circle cx="12" cy="12" r="3"/>`,
  },
  deteccion: {
    label: 'Detección / Alarma',
    color: '#F5A623',
    icon: `<path stroke-linecap="round" stroke-linejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0 1 18 14.158V11a6 6 0 0 0-5-5.917V4a1 1 0 0 0-2 0v1.083A6 6 0 0 0 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 0 1-6 0v-1m6 0H9"/>`,
  },
  'agente-ci': {
    label: 'Agente Limpio',
    color: '#2DD4BF',
    icon: `<path stroke-linecap="round" stroke-linejoin="round" d="M19.428 15.428a2 2 0 0 0-1.022-.547l-2.387-.477a6 6 0 0 0-3.86.517l-.318.158a6 6 0 0 1-3.86.517L6.05 15.21a2 2 0 0 0-1.806.547M8 4h8l-1 1v5.172a2 2 0 0 0 .586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 0 0 9 10.172V5L8 4z"/>`,
  },
  'red-hidraulica': {
    label: 'Red Hidráulica',
    color: '#60A5FA',
    icon: `<path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14M12 5l7 7-7 7"/><circle cx="5" cy="12" r="2"/><circle cx="19" cy="12" r="2"/>`,
  },
  'traje-nivel-a': {
    label: 'Nivel A Encapsulado',
    color: '#EF4444',
    icon: `<path stroke-linecap="round" stroke-linejoin="round" d="M12 2 4 5v6c0 5 3.5 8 8 10 4.5-2 8-5 8-10V5l-8-3z"/><circle cx="12" cy="12" r="2"/>`,
  },
  'traje-nivel-b': {
    label: 'Nivel B/C Salpicadura',
    color: '#F5A623',
    icon: `<path stroke-linecap="round" stroke-linejoin="round" d="M12 2 4 5v6c0 5 3.5 8 8 10 4.5-2 8-5 8-10V5l-8-3z"/>`,
  },
  'detector-multigases': {
    label: 'Detección Multi-Gas',
    color: '#34D399',
    icon: `<path stroke-linecap="round" stroke-linejoin="round" d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2v-4M9 21H5a2 2 0 0 1-2-2v-4m0 0h18"/><circle cx="12" cy="12" r="2"/>`,
  },
  'kit-descon': {
    label: 'Infraestructura / Calibración',
    color: '#A78BFA',
    icon: `<path stroke-linecap="round" stroke-linejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/><circle cx="12" cy="12" r="3"/>`,
  },
};

/* ── Interfaces de datos de marca ──────────────────────────────────────────── */
export interface BrandStat { valor: string; etiq: string; }
export interface BrandCredencial { n: string; t: string; d: string; }
export interface BrandLinea {
  tipo: TipoKey;
  badge: string;
  /** Título legible de la familia (nuevo patrón) */
  familiaLabel?: string;
  /** Slug del producto estrella de esta línea */
  flagship?: string;
  /** Descripción de la línea */
  desc: string;
  /** Modelos resumidos — array {m, d} (nuevo patrón) o string (legado) */
  modelos?: { m: string; d: string }[] | string;
  /** Campos legado */
  titulo?: string;
  tech?: string;
}
export interface BrandAnatomia { t: string; d: string; }
export interface BrandGuia { n: string; t: string; }
export interface BrandSegmento { num: string; tipo: TipoKey; titulo: string; desc: string; modelos: string; }
export interface BrandFaq { q: string; a: string; }
export interface ComparativaRow {
  modelo: string;
  tipo?: TipoKey;
  rec?: boolean;
  /** Valores por columna; las claves coinciden con comparativaCols de la categoría */
  norma?: string; material?: string; proteccion?: string;
  shell?: string; tpp?: string; thl?: string;
  autonomia?: string; cilindro?: string; electronica?: string;
  resolucion?: string; sensor?: string;
  fuerza?: string; rango?: string; fuente?: string;
  peso?: string; ideal?: string;
  tipo_sis?: string; cobertura?: string; listado?: string;
  /** HAZMAT */
  nivel_haz?: string; barrera?: string; gases?: string;
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
  /** Slug del producto estrella (nivel superior) */
  flagship?: string;
  anatomiaIntro?: string;
  anatomia?: BrandAnatomia[];
  comparativa: ComparativaRow[];
  /** Etiqueta encima de la tabla comparativa */
  comparativaLabel?: string;
  comparativaNote?: string;
  guia?: BrandGuia[];
  segmentosIntro?: string;
  segmentos?: BrandSegmento[];
  faqs?: BrandFaq[];
  /** Alias moderno de faqs */
  faq?: BrandFaq[];
  ctaKicker?: string;
  ctaTitleHtml?: string;
  /** Mensaje de WhatsApp CTA */
  waQuote?: string;
  /** Alias moderno de waQuote */
  ctaWhatsapp?: string;
  notaPie?: string;
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
  'sistemas-ci': {
    label: 'Sistemas Contra Incendio',
    productCategory: 'Sistemas CI',
    comparativaCols: [
      { key: 'norma', label: 'Norma', align: 'center', accent: true },
      { key: 'tipo_sis', label: 'Tipo de sistema' },
      { key: 'cobertura', label: 'Cobertura / Cap.', align: 'center' },
      { key: 'listado', label: 'Listado' },
      { key: 'ideal', label: 'Ideal para' },
    ],
    conjunto: [
      { label: 'Equipos SCBA', desc: 'MSA G1, Dräger y 3M Scott — aire autónomo', href: '/productos/equipos-scba' },
      { label: 'Herramientas de Rescate', desc: 'Holmatro, Hurst y Weber — NFPA 1936', href: '/productos/herramientas-rescate' },
      { label: 'Extintores', desc: 'Amerex y Ansul — ABC, CO₂ y cocina', href: '/productos/extintores' },
      { label: 'Capacitación contra incendio', desc: 'Brigadas, evacuación y respuesta NFPA', href: '/servicios/capacitacion' },
      { label: 'Soporte para licitaciones', desc: 'Fichas técnicas y manifiestos por partida', href: '/licitaciones' },
    ],
  },
  'hazmat': {
    label: 'Equipos HAZMAT',
    productCategory: 'Equipos HAZMAT',
    comparativaCols: [
      { key: 'norma', label: 'Norma', align: 'center', accent: true },
      { key: 'nivel_haz', label: 'Nivel EPA' },
      { key: 'barrera', label: 'Material barrera' },
      { key: 'gases', label: 'Gases / Cobertura' },
      { key: 'ideal', label: 'Ideal para' },
    ],
    conjunto: [
      { label: 'Equipos SCBA', desc: 'MSA G1, Dräger y 3M Scott — CBRN/NIOSH', href: '/productos/equipos-scba' },
      { label: 'Trajes para Bomberos', desc: 'Globe, Lion, Honeywell — NFPA 1970', href: '/productos/trajes-bombero' },
      { label: 'Sistemas Contra Incendio', desc: 'Tyco, Honeywell, Kidde Fenwal — NFPA 13/72', href: '/productos/sistemas-ci' },
      { label: 'Capacitación HAZMAT', desc: 'Reconocimiento, respuesta y descontaminación', href: '/servicios/capacitacion' },
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

export const brandPages: EquipmentBrand[] = [...cascosAdapted, ...trajesBrandList, ...scbaBrandList, ...camarasBrandList, ...herramientasBrandList, ...sistemasCIBrandList, ...hazmatBrandList];

export function brandPageBySlug(slug: string): EquipmentBrand | undefined {
  return brandPages.find((b) => b.slug === slug);
}

/** Otras marcas de la MISMA categoría (cross-links por URL específica). */
export function hermanasMarca(brand: EquipmentBrand): CrossLink[] {
  return brandPages
    .filter((b) => b.categorySlug === brand.categorySlug && b.slug !== brand.slug)
    .map((b) => ({ label: b.brandLabel, desc: b.crossDesc, href: `/productos/${b.categorySlug}/${b.slug}` }));
}
