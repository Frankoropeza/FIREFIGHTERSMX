/**
 * Marcas de Cascos NFPA — fuente única de verdad para las páginas L4 de marca.
 *
 * Las páginas `/productos/cascos-nfpa/[marca]` son wrappers delgados que
 * importan su objeto `CascoBrand` y lo pasan a `BrandHelmetPage.astro`.
 * Evolucionar la estructura = editar el componente; evolucionar el contenido
 * = editar este archivo. Una sola fuente, homologación garantizada.
 *
 * Relacionado: design system v2 (datos en src/data, componentes solo renderizan).
 */

/* ── Familias de casco — color e ícono por tipo de riesgo ──────────────────── */
export type TipoCascoKey = 'estructural' | 'proximidad' | 'forestal' | 'usar' | 'mando';

export interface TipoCascoMeta {
  label: string;
  color: string;
  /** Path interno de un SVG 24×24 con stroke=currentColor */
  icon: string;
}

export const tipoCasco: Record<TipoCascoKey, TipoCascoMeta> = {
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
};

/* ── Interfaces ────────────────────────────────────────────────────────────── */
export interface BrandStat { valor: string; etiq: string; }
export interface BrandCredencial { n: string; t: string; d: string; }
export interface BrandLinea {
  tipo: TipoCascoKey;
  badge: string;
  titulo: string;
  modelos: string;
  desc: string;
  tech: string;
}
export interface BrandAnatomia { t: string; d: string; }
export interface BrandComparativaRow {
  modelo: string;
  tipo: TipoCascoKey;
  norma: string;
  material: string;
  proteccion: string;
  peso: string;
  ideal: string;
  rec: boolean;
}
export interface BrandGuia { n: string; t: string; }
export interface BrandSegmento { num: string; titulo: string; desc: string; modelos: string; tipo: TipoCascoKey; }
export interface BrandFaq { q: string; a: string; }

export interface CascoBrand {
  /** Slug de URL bajo /productos/cascos-nfpa/ */
  slug: string;
  /** Valor exacto de `brand` en products.ts para filtrar el catálogo */
  brand: string;
  /** Nombre comercial mostrado (puede diferir de `brand`) */
  brandLabel: string;
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
  lineas: BrandLinea[];
  linesIntro: string;
  flagship: string;
  anatomiaIntro: string;
  anatomia: BrandAnatomia[];
  comparativa: BrandComparativaRow[];
  comparativaNote: string;
  guia: BrandGuia[];
  segmentosIntro: string;
  segmentos: BrandSegmento[];
  faqs: BrandFaq[];
  ctaKicker: string;
  ctaTitleHtml: string;
  /** Frase base para los CTA de WhatsApp */
  waQuote: string;
}

/* ════════════════════════════════════════════════════════════════════════════
   MSA GALLET
   ════════════════════════════════════════════════════════════════════════════ */
const msaGallet: CascoBrand = {
  slug: 'msa-gallet',
  brand: 'MSA Safety',
  brandLabel: 'MSA Gallet',
  eyebrow: 'MSA Safety · Gallet · Distribuidor Autorizado MX',
  heroTitleTop: 'Cascos MSA Gallet',
  heroTitleAccent: 'con normas verificadas.',
  heroLead:
    'Distribuidor autorizado de MSA Gallet en México. Cascos F1 XF, F2XR y F2 X-TREM, con stock permanente en CDMX, entrega en 24–48 h y fichas técnicas para licitación.',
  heroIntro: [
    'El MSA Gallet F1 XF es un casco estructural europeo tipo B con carcasa de termoplásticos de alta temperatura.',
    'El F1 XF cumple EN 443:2008, EN 16471:2014 y EN 16473:2014; sus visores cumplen EN 14458:2018. El F2XR cumple EN 16471:2014, EN 16473:2014 y EN 12492:2012; el F2 X-TREM cumple EN 16471 y EN 16473.',
  ],
  heroBadges: ['EN 443:2008', 'EN 16471', 'EN 16473', 'EN 14458:2018', 'F2XR · EN 12492:2012', 'Distribuidor autorizado MX'],
  seoTitle: 'Cascos MSA Gallet EN — F1 XF · F2XR · F2 X-TREM | México',
  seoDescription:
    'Cascos MSA Gallet en México: F1 XF, F2XR y F2 X-TREM con normas EN según modelo. Distribuidor autorizado, stock en CDMX y fichas técnicas para licitación.',
  founding: '—',
  parentOrg: { name: 'MSA Safety', ticker: '—' },
  stats: [
    { valor: '3', etiq: 'Modelos vigentes en catálogo' },
    { valor: 'F1 XF', etiq: 'Casco estructural europeo tipo B' },
    { valor: 'EN 443:2008', etiq: 'Norma del F1 XF' },
    { valor: 'EN 16471', etiq: 'Norma para F1 XF, F2XR y F2 X-TREM' },
  ],
  credenciales: [
    { n: '01', t: 'Tres modelos vigentes', d: 'El catálogo incluye MSA Gallet F1 XF, MSA Gallet F2XR y MSA Gallet F2 X-TREM. La selección debe partir del escenario de uso y de la norma indicada para cada modelo.' },
    { n: '02', t: 'Normas EN por modelo', d: 'El F1 XF cuenta con EN 443:2008, EN 16471:2014 y EN 16473:2014. El F2XR añade EN 12492:2012 a EN 16471:2014 y EN 16473:2014; el F2 X-TREM cuenta con EN 16471 y EN 16473.' },
    { n: '03', t: 'Visores y accesorios del F1 XF', d: 'Los visores del F1 XF cumplen EN 14458:2018. El modelo admite como opciones cubierta, cubrenuca y visor dorado aluminizados.' },
    { n: '04', t: 'Documentación para licitación', d: 'Entregamos ficha técnica, certificado del modelo y carta de distribuidor autorizado para procesos de compra públicos y corporativos.' },
  ],
  linesIntro:
    'La línea MSA Gallet reúne un modelo estructural europeo y dos modelos multipropósito para incendios forestales, rescate técnico, USAR y accidentes viales.',
  lineas: [
    { tipo: 'estructural', badge: 'EN 443:2008', titulo: 'Línea Estructural', modelos: '1 modelo — MSA Gallet F1 XF', desc: 'Casco estructural europeo tipo B con carcasa de termoplásticos de alta temperatura.', tech: 'EN 443:2008 · EN 16471:2014 · EN 16473:2014 · Visores EN 14458:2018' },
    { tipo: 'proximidad', badge: '—', titulo: 'Configuración con accesorios aluminizados', modelos: '1 modelo — MSA Gallet F1 XF', desc: 'El F1 XF puede configurarse con cubierta, cubrenuca y visor dorado aluminizados opcionales.', tech: 'Accesorios aluminizados opcionales · Consulta la ficha técnica' },
    { tipo: 'forestal', badge: 'EN 16471 · EN 16473', titulo: 'Línea Forestal', modelos: '2 modelos — MSA Gallet F2XR · MSA Gallet F2 X-TREM', desc: 'Modelos multipropósito para incendios forestales, rescate técnico, USAR y accidentes viales.', tech: 'F2XR: EN 12492:2012 · F2 X-TREM: —' },
    { tipo: 'usar', badge: 'EN 16471 · EN 16473', titulo: 'Línea Rescate Técnico / USAR', modelos: '2 modelos — MSA Gallet F2XR · MSA Gallet F2 X-TREM', desc: 'Modelos multipropósito para rescate técnico, USAR y accidentes viales.', tech: 'F2XR: visores EN 14458:2018 · F2 X-TREM: —' },
  ],
  flagship: 'MSA Gallet F1 XF',
  anatomiaIntro:
    'La ficha técnica del MSA Gallet F1 XF permite revisar estos elementos de su configuración antes de especificarlo.',
  anatomia: [
    { t: 'Carcasa', d: 'Carcasa de termoplásticos de alta temperatura.' },
    { t: 'Visores', d: 'Visores conformes con EN 14458:2018.' },
    { t: 'Accesorios aluminizados', d: 'Cubierta, cubrenuca y visor dorado disponibles como opciones para el F1 XF.' },
    { t: 'Norma estructural', d: 'La ficha del F1 XF identifica EN 443:2008 para casco estructural europeo tipo B.' },
    { t: 'Normas de uso adicional', d: 'El F1 XF también cuenta con EN 16471:2014 y EN 16473:2014.' },
    { t: 'Compatibilidad del conjunto', d: 'Verifica la compatibilidad del casco con el resto del equipo en las fichas técnicas de los modelos involucrados.' },
  ],
  comparativa: [
    { modelo: 'MSA Gallet F1 XF', tipo: 'estructural', norma: 'EN 443:2008', material: 'Termoplásticos de alta temperatura', proteccion: 'Visores EN 14458:2018', peso: '—', ideal: 'Combate estructural', rec: true },
    { modelo: 'MSA Gallet F1 XF', tipo: 'forestal', norma: 'EN 16471:2014', material: 'Termoplásticos de alta temperatura', proteccion: 'Visores EN 14458:2018', peso: '—', ideal: 'Incendios forestales', rec: false },
    { modelo: 'MSA Gallet F1 XF', tipo: 'usar', norma: 'EN 16473:2014', material: 'Termoplásticos de alta temperatura', proteccion: 'Visores EN 14458:2018', peso: '—', ideal: 'Rescate técnico', rec: false },
    { modelo: 'MSA Gallet F1 XF', tipo: 'proximidad', norma: '—', material: 'Termoplásticos de alta temperatura', proteccion: 'Accesorios aluminizados opcionales', peso: '—', ideal: 'Consultar configuración', rec: false },
    { modelo: 'MSA Gallet F2XR', tipo: 'usar', norma: 'EN 16471:2014 · EN 16473:2014 · EN 12492:2012', material: 'Termoplástico de alta temperatura', proteccion: 'Visores EN 14458:2018', peso: '—', ideal: 'Rescate técnico y USAR', rec: false },
    { modelo: 'MSA Gallet F2XR', tipo: 'forestal', norma: 'EN 16471:2014 · EN 16473:2014', material: 'Termoplástico de alta temperatura', proteccion: 'Visores EN 14458:2018', peso: '—', ideal: 'Incendios forestales', rec: false },
    { modelo: 'MSA Gallet F2 X-TREM', tipo: 'usar', norma: 'EN 16471 · EN 16473', material: '—', proteccion: '—', peso: '—', ideal: 'Rescate técnico y USAR', rec: false },
    { modelo: 'MSA Gallet F2 X-TREM', tipo: 'forestal', norma: 'EN 16471 · EN 16473', material: '—', proteccion: '—', peso: '—', ideal: 'Incendios forestales', rec: false },
  ],
  comparativaNote: 'Los tres modelos del catálogo se presentan con normas EN. Confirma en la ficha técnica del modelo la norma y la configuración requeridas por tu operación.',
  guia: [
    { n: '01', t: 'Define el escenario dominante: combate estructural → MSA Gallet F1 XF; incendios forestales, rescate técnico o USAR → MSA Gallet F2XR o MSA Gallet F2 X-TREM.' },
    { n: '02', t: 'Revisa la norma aplicable: el F1 XF cuenta con EN 443:2008; F1 XF, F2XR y F2 X-TREM cuentan con EN 16471 y EN 16473 según la edición indicada en su ficha.' },
    { n: '03', t: 'Si especificas el F1 XF, define si requieres sus accesorios aluminizados opcionales: cubierta, cubrenuca y visor dorado.' },
    { n: '04', t: 'Solicita la ficha técnica y el certificado del modelo, y registra la fecha de fabricación para el programa de inspección y retiro conforme a NFPA 1850 (2026).' },
  ],
  segmentosIntro:
    'La selección entre los modelos MSA Gallet depende del tipo de incidente, la norma exigida y la configuración indicada en la ficha técnica.',
  segmentos: [
    { num: '01', tipo: 'estructural', titulo: 'Combate estructural', desc: 'El MSA Gallet F1 XF es un casco estructural europeo tipo B con EN 443:2008.', modelos: 'MSA Gallet F1 XF' },
    { num: '02', tipo: 'proximidad', titulo: 'Configuración con accesorios aluminizados', desc: 'El MSA Gallet F1 XF permite añadir cubierta, cubrenuca y visor dorado aluminizados como opciones.', modelos: 'MSA Gallet F1 XF' },
    { num: '03', tipo: 'forestal', titulo: 'Incendios forestales', desc: 'MSA Gallet F2XR y MSA Gallet F2 X-TREM son modelos multipropósito para incendios forestales.', modelos: 'MSA Gallet F2XR · MSA Gallet F2 X-TREM' },
    { num: '04', tipo: 'usar', titulo: 'Rescate técnico y USAR', desc: 'MSA Gallet F2XR y MSA Gallet F2 X-TREM son modelos multipropósito para rescate técnico y USAR.', modelos: 'MSA Gallet F2XR · MSA Gallet F2 X-TREM' },
  ],
  faqs: [
    { q: '¿Qué modelos MSA Gallet están vigentes en el catálogo?', a: 'El catálogo incluye MSA Gallet F1 XF, MSA Gallet F2XR y MSA Gallet F2 X-TREM.' },
    { q: '¿Qué diferencia hay entre MSA Gallet F1 XF, F2XR y F2 X-TREM?', a: 'El F1 XF es un casco estructural europeo tipo B. F2XR y F2 X-TREM son modelos multipropósito para incendios forestales, rescate técnico, USAR y accidentes viales. Revisa la norma y configuración de cada uno antes de especificarlo.' },
    { q: '¿Estos cascos tienen certificación NFPA?', a: 'No. Los MSA Gallet F1 XF, F2XR y F2 X-TREM del catálogo se presentan con normas EN. El F1 XF cuenta con EN 443:2008; el F2XR y el F2 X-TREM se presentan para los usos indicados con normas EN según su ficha técnica.' },
    { q: '¿Qué accesorios están disponibles para el MSA Gallet F1 XF?', a: 'El F1 XF puede configurarse con cubierta, cubrenuca y visor dorado aluminizados opcionales. Sus visores cumplen EN 14458:2018.' },
    { q: '¿Cuándo se retira del servicio un casco MSA Gallet?', a: 'Sigue las instrucciones del fabricante y el programa de inspección aplicable. NFPA 1850 (2026) exige retirar el equipo a más tardar 10 años después de su fabricación.' },
    { q: '¿Entregan ficha técnica y certificado para licitación?', a: 'Sí. Entregamos ficha técnica, certificado del modelo y carta de distribuidor autorizado para procesos de compra públicos y corporativos.' },
  ],
  ctaKicker: 'MSA Gallet · normas EN por modelo',
  ctaTitleHtml: 'Selecciona por escenario.<br/>Revisa la ficha técnica.',
  waQuote: 'Hola, quiero cotizar cascos MSA Gallet.',
};

/* ════════════════════════════════════════════════════════════════════════════
   BULLARD
   ════════════════════════════════════════════════════════════════════════════ */
const bullard: CascoBrand = {
  slug: 'bullard',
  brand: 'Bullard',
  brandLabel: 'Bullard',
  eyebrow: 'Bullard · Cascos NFPA por modelo · Distribuidor autorizado MX',
  heroTitleTop: 'Cascos Bullard',
  heroTitleAccent: 'con normas por modelo.',
  heroLead:
    'Distribuidor autorizado de Bullard en México. Ocho modelos vigentes para uso estructural, proximidad y forestal, con ficha técnica y certificado del modelo para licitación.',
  heroIntro: [
    'El catálogo incluye USTM, UST LowRider, USRX, FX Series, PX Series, LT Series y AX Series para aplicaciones estructurales; Wildfire FH911C corresponde a la línea forestal.',
    'NFPA 1970 (2025) consolidó NFPA 1971 para protección estructural y de proximidad. NFPA 1950 (2025) consolidó NFPA 1977 para incendios forestales; verifica en la ficha la norma indicada para cada modelo.',
  ],
  heroBadges: ['NFPA 1970 (2025)', 'NFPA 1971', 'NFPA 1977 (2022)', 'Fibra de vidrio', 'Termoplástico', 'Distribuidor autorizado MX'],
  seoTitle: 'Cascos Bullard NFPA — USTM · UST LowRider · México',
  seoDescription:
    'Cascos Bullard en México: USTM, UST LowRider, USRX, Wildfire FH911C, FX Series, PX Series, LT Series y AX Series, con norma indicada por modelo. Distribuidor autorizado y ficha técnica para licitación.',
  founding: '—',
  parentOrg: { name: '—' },
  stats: [
    { valor: '8', etiq: 'Modelos vigentes en catálogo' },
    { valor: 'NFPA 1970', etiq: 'Norma indicada para UST LowRider, FX, PX y LT' },
    { valor: 'NFPA 1971', etiq: 'Norma indicada para USTM, USRX y AX' },
    { valor: '32', etiq: 'Estados con cobertura' },
  ],
  credenciales: [
    { n: '01', t: 'Ocho modelos vigentes', d: 'El catálogo incluye Bullard USTM, UST LowRider, USRX, Wildfire FH911C, FX Series, PX Series, LT Series y AX Series. La selección parte del escenario de uso y de la norma indicada para cada modelo.' },
    { n: '02', t: 'Normas por modelo', d: 'UST LowRider, FX Series, PX Series y LT Series indican NFPA 1970 (2025). USTM, USRX y AX Series indican NFPA 1971; Wildfire FH911C indica NFPA 1977 (2022) y ANSI/ISEA Z89.1-2014 (R2019).' },
    { n: '03', t: 'Materiales indicados en ficha', d: 'USTM usa fibra de vidrio Thermoglas; UST LowRider, fibra de vidrio compuesta con resina termofija retardante. USRX, PX Series, LT Series y Wildfire FH911C se presentan en termoplástico; FX Series y AX Series, en fibra de vidrio.' },
    { n: '04', t: 'Documentación para licitación', d: 'Entregamos ficha técnica, certificado del modelo y carta de distribuidor autorizado para procesos de compra públicos y corporativos.' },
  ],
  linesIntro:
    'La línea Bullard reúne modelos estructurales tradicionales y modernos, una configuración de proximidad y un casco forestal. Revisa la norma, el material y los accesorios indicados en la ficha de cada modelo.',
  lineas: [
    { tipo: 'estructural', badge: 'NFPA 1971 · NFPA 1970 (2025)', titulo: 'Línea Estructural Tradicional', modelos: '2 modelos — USTM · UST LowRider', desc: 'USTM es un casco tradicional con shell de fibra de vidrio Thermoglas. UST LowRider es tradicional, con carcasa de fibra de vidrio compuesta y resina termofija retardante.', tech: 'USTM: NFPA 1971 · UST LowRider: NFPA 1970 (2025)' },
    { tipo: 'estructural', badge: 'NFPA por modelo', titulo: 'Línea Estructural Moderna', modelos: '5 modelos — USRX · FX Series · PX Series · LT Series · AX Series', desc: 'USRX, FX Series, PX Series, LT Series y AX Series son modelos estructurales. AX Series también se presenta para proximidad con sus accesorios indicados.', tech: 'USRX y AX: NFPA 1971 · FX, PX y LT: NFPA 1970 (2025)' },
    { tipo: 'proximidad', badge: 'NFPA 1971', titulo: 'Configuración de Proximidad', modelos: '1 modelo — AX Series', desc: 'AX Series se presenta para operación estructural y de proximidad con cubierta aluminizada, cubrenuca y visor dorado.', tech: 'Fibra de vidrio · Accesorios aluminizados' },
    { tipo: 'forestal', badge: 'NFPA 1977 (2022)', titulo: 'Línea Forestal', modelos: '1 modelo — Wildfire FH911C', desc: 'Wildfire FH911C es un casco forestal con carcasa termoplástica de alta temperatura.', tech: 'NFPA 1977 (2022) · ANSI/ISEA Z89.1-2014 (R2019)' },
  ],
  flagship: 'Bullard USTM',
  anatomiaIntro:
    'La ficha técnica del Bullard USTM permite revisar estos elementos de su configuración antes de especificarlo.',
  anatomia: [
    { t: 'Shell de fibra de vidrio Thermoglas', d: 'El USTM se presenta con shell de fibra de vidrio Thermoglas.' },
    { t: 'Acabado mate USTM', d: 'El acabado mate identifica la configuración USTM del casco Bullard UST.' },
    { t: 'Uso estructural', d: 'La ficha del USTM indica certificación NFPA 1971 para combate estructural.' },
    { t: 'Norma del modelo', d: 'Verifica la etiqueta y el certificado del USTM al especificar el equipo para un proceso de compra.' },
    { t: 'Accesorios', d: 'Consulta en la ficha técnica los accesorios y la configuración disponibles para el modelo.' },
    { t: 'Compatibilidad del conjunto', d: 'Verifica la compatibilidad del casco con el resto del equipo en las fichas técnicas de los modelos involucrados.' },
  ],
  comparativa: [
    { modelo: 'Bullard USTM', tipo: 'estructural', norma: 'NFPA 1971', material: 'Fibra de vidrio Thermoglas', proteccion: '—', peso: '—', ideal: 'Combate estructural', rec: true },
    { modelo: 'Bullard UST LowRider', tipo: 'estructural', norma: 'NFPA 1970 (2025)', material: 'Fibra de vidrio compuesta con resina termofija retardante', proteccion: '—', peso: '—', ideal: 'Combate estructural', rec: false },
    { modelo: 'Bullard USRX', tipo: 'estructural', norma: 'NFPA 1971', material: 'Termoplástico', proteccion: '—', peso: '—', ideal: 'Combate estructural', rec: false },
    { modelo: 'Bullard Wildfire FH911C', tipo: 'forestal', norma: 'NFPA 1977 (2022)', material: 'Termoplástico de alta temperatura', proteccion: '—', peso: '—', ideal: 'Incendios forestales', rec: false },
    { modelo: 'Bullard FX Series', tipo: 'estructural', norma: 'NFPA 1970 (2025)', material: 'Fibra de vidrio', proteccion: '—', peso: '—', ideal: 'Combate estructural', rec: false },
    { modelo: 'Bullard PX Series', tipo: 'estructural', norma: 'NFPA 1970 (2025)', material: 'Termoplástico de alta temperatura', proteccion: '—', peso: '—', ideal: 'Combate estructural', rec: false },
    { modelo: 'Bullard LT Series', tipo: 'estructural', norma: 'NFPA 1970 (2025)', material: 'Termoplástico', proteccion: '—', peso: '—', ideal: 'Combate estructural', rec: false },
    { modelo: 'Bullard AX Series', tipo: 'proximidad', norma: 'NFPA 1971', material: 'Fibra de vidrio', proteccion: 'Cubierta aluminizada, cubrenuca y visor dorado', peso: '—', ideal: 'Estructural y proximidad', rec: false },
  ],
  comparativaNote:
    'Las normas y materiales se indican por modelo. NFPA 1970 (2025) consolidó NFPA 1971; NFPA 1950 (2025) consolidó NFPA 1977. Confirma el certificado y la ficha técnica aplicables.',
  guia: [
    { n: '01', t: 'Define el escenario dominante: combate estructural → USTM, UST LowRider, USRX, FX Series, PX Series, LT Series o AX Series; incendio forestal → Wildfire FH911C.' },
    { n: '02', t: 'Revisa la norma indicada para el modelo: NFPA 1970 (2025), NFPA 1971 o NFPA 1977 (2022), según corresponda.' },
    { n: '03', t: 'Para proximidad, revisa la configuración AX Series con cubierta aluminizada, cubrenuca y visor dorado.' },
    { n: '04', t: 'Solicita la ficha técnica y el certificado del modelo, y registra la fecha de fabricación para el programa de inspección y retiro conforme a NFPA 1850 (2026).' },
  ],
  segmentosIntro:
    'La selección entre los modelos Bullard depende del escenario de uso, la norma indicada en el certificado y la configuración señalada en la ficha técnica.',
  segmentos: [
    { num: '01', tipo: 'estructural', titulo: 'Combate estructural tradicional', desc: 'USTM y UST LowRider son modelos tradicionales para combate estructural; sus fichas indican materiales y normas distintas por modelo.', modelos: 'Bullard USTM · Bullard UST LowRider' },
    { num: '02', tipo: 'estructural', titulo: 'Combate estructural', desc: 'USRX, FX Series, PX Series, LT Series y AX Series se presentan para aplicaciones estructurales. Verifica la norma indicada para cada uno.', modelos: 'Bullard USRX · Bullard FX Series · Bullard PX Series · Bullard LT Series · Bullard AX Series' },
    { num: '03', tipo: 'proximidad', titulo: 'Proximidad', desc: 'AX Series se presenta para operación estructural y de proximidad con cubierta aluminizada, cubrenuca y visor dorado.', modelos: 'Bullard AX Series' },
    { num: '04', tipo: 'forestal', titulo: 'Incendios forestales', desc: 'Wildfire FH911C es un casco forestal con NFPA 1977 (2022) y ANSI/ISEA Z89.1-2014 (R2019) indicados en su ficha.', modelos: 'Bullard Wildfire FH911C' },
  ],
  faqs: [
    { q: '¿Qué modelos Bullard están vigentes en el catálogo?', a: 'El catálogo incluye Bullard USTM, UST LowRider, USRX, Wildfire FH911C, FX Series, PX Series, LT Series y AX Series.' },
    { q: '¿Qué norma indica cada casco estructural Bullard?', a: 'UST LowRider, FX Series, PX Series y LT Series indican NFPA 1970 (2025). USTM, USRX y AX Series indican NFPA 1971. Revisa la ficha y el certificado del modelo al especificarlo.' },
    { q: '¿Qué norma tiene el Bullard Wildfire FH911C?', a: 'Wildfire FH911C indica NFPA 1977 (2022) y ANSI/ISEA Z89.1-2014 (R2019). NFPA 1950 (2025) consolidó la antigua NFPA 1977 para incendios forestales.' },
    { q: '¿Qué configuración de proximidad ofrece Bullard?', a: 'AX Series se presenta para operación estructural y de proximidad con cubierta aluminizada, cubrenuca y visor dorado.' },
    { q: '¿Cuándo se retira del servicio un casco Bullard?', a: 'Sigue las instrucciones del fabricante y el programa de inspección aplicable. NFPA 1850 (2026) exige retirar el equipo a más tardar 10 años después de su fabricación.' },
    { q: '¿Entregan ficha técnica y certificado para licitación?', a: 'Sí. Entregamos ficha técnica, certificado del modelo y carta de distribuidor autorizado para procesos de compra públicos y corporativos.' },
  ],
  ctaKicker: 'Bullard · normas por modelo',
  ctaTitleHtml: 'Selecciona por escenario.<br/>Revisa la ficha técnica.',
  waQuote: 'Hola, quiero cotizar cascos Bullard.',
};

/* ════════════════════════════════════════════════════════════════════════════
   CAIRNS
   ════════════════════════════════════════════════════════════════════════════ */
const cairns: CascoBrand = {
  slug: 'cairns',
  brand: 'Cairns',
  brandLabel: 'Cairns',
  eyebrow: 'Cairns · MSA · Distribuidor autorizado MX',
  heroTitleTop: 'Cascos Cairns',
  heroTitleAccent: 'certificados NFPA.',
  heroLead:
    'Distribuidor autorizado de Cairns en México. Cascos estructurales, tradicionales, modernos y tipo jet para rescate técnico, con stock en CDMX y fichas técnicas para licitación.',
  heroIntro: [
    'La línea Cairns reúne los modelos N6A Houston, 1836, 880, Invader 664, 360S y 660C Metro para combate estructural, además del Cairns XF1 para combate estructural y rescate técnico.',
    'Los modelos disponibles combinan construcciones en cuero, fibra de vidrio compuesta y termoplástico de alta temperatura. Revisa la ficha técnica y el certificado de cada modelo antes de especificarlo.',
  ],
  heroBadges: ['NFPA 1971', 'NFPA 1971 (2018)', 'Cuero', 'Fibra de vidrio compuesta', 'Termoplástico', 'Cairns XF1', 'MSA'],
  seoTitle: 'Cascos Cairns NFPA 1971 — N6A Houston · México',
  seoDescription:
    'Cascos Cairns en México: N6A Houston, 1836, XF1, 880, Invader 664, 360S y 660C Metro con norma NFPA según modelo. Distribuidor autorizado y fichas técnicas para licitación.',
  founding: '—',
  parentOrg: { name: 'MSA', ticker: '—' },
  stats: [
    { valor: '7', etiq: 'Modelos vigentes en catálogo' },
    { valor: 'N6A Houston', etiq: 'Modelo tradicional de cuero' },
    { valor: 'Cairns XF1', etiq: 'Estructural y rescate técnico' },
    { valor: '32', etiq: 'Estados con cobertura' },
  ],
  credenciales: [
    { n: '01', t: 'Siete modelos vigentes', d: 'El catálogo incluye Cairns N6A Houston, 1836, XF1, 880, Invader 664, 360S y 660C Metro. La selección debe partir del escenario de uso y de la norma indicada para cada modelo.' },
    { n: '02', t: 'Materiales por modelo', d: 'N6A Houston está fabricado en cuero; 1836, Invader 664 y 660C Metro utilizan fibra de vidrio compuesta; 880 y 360S utilizan termoplástico de alta temperatura. Para Cairns XF1, consulta la ficha técnica.' },
    { n: '03', t: 'Normas según modelo', d: 'N6A Houston, 1836 y Cairns XF1 indican NFPA 1971 (2018). El Cairns XF1 también indica NFPA 1951 (2013) para rescate técnico. 880, 360S y 660C Metro indican NFPA 1971; Invader 664 indica NFPA 1971 e IRAM.' },
    { n: '04', t: 'Documentación para licitación', d: 'Entregamos ficha técnica, certificado del modelo y carta de distribuidor autorizado para procesos de compra públicos y corporativos.' },
  ],
  linesIntro:
    'La línea Cairns se organiza por construcción y uso: cascos estructurales tradicionales, modelos estructurales modernos y un casco tipo jet para combate estructural y rescate técnico.',
  lineas: [
    { tipo: 'estructural', badge: 'NFPA 1971 (2018)', titulo: 'Línea Estructural Tradicional', modelos: '2 modelos — Cairns N6A Houston · Cairns 1836', desc: 'N6A Houston está fabricado en cuero; Cairns 1836 utiliza fibra de vidrio compuesta. Ambos indican NFPA 1971 (2018).', tech: 'N6A Houston: cuero · 1836: fibra de vidrio compuesta' },
    { tipo: 'estructural', badge: 'NFPA 1971', titulo: 'Línea Estructural', modelos: '4 modelos — Cairns 880 · Cairns Invader 664 · Cairns 360S · Cairns 660C Metro', desc: '880 y 360S tienen shell termoplástico de alta temperatura; Invader 664 y 660C Metro tienen shell de fibra de vidrio compuesta.', tech: '880 y 360S: termoplástico · Invader 664 y 660C Metro: fibra de vidrio compuesta' },
    { tipo: 'usar', badge: 'NFPA 1971 (2018) · NFPA 1951 (2013)', titulo: 'Línea Estructural y Rescate Técnico', modelos: '1 modelo — Cairns XF1', desc: 'Casco tipo jet de MSA Cairns para combate estructural y rescate técnico.', tech: 'Normas indicadas: NFPA 1971 (2018) · NFPA 1951 (2013)' },
    { tipo: 'mando', badge: 'NFPA según modelo', titulo: 'Selección por ficha técnica', modelos: '7 modelos — N6A Houston · 1836 · XF1 · 880 · Invader 664 · 360S · 660C Metro', desc: 'Confirma en la ficha técnica del modelo la norma, los accesorios y la configuración requeridos por tu operación.', tech: 'Ficha técnica · Certificado del modelo · Carta de distribuidor autorizado' },
  ],
  flagship: 'Cairns N6A Houston',
  anatomiaIntro:
    'Antes de especificar el Cairns N6A Houston, conviene revisar estos elementos en la ficha técnica y el certificado del modelo.',
  anatomia: [
    { t: 'Construcción', d: 'El Cairns N6A Houston está fabricado en cuero.' },
    { t: 'Uso estructural', d: 'La ficha del modelo indica NFPA 1971 (2018) para combate estructural.' },
    { t: 'Etiqueta del modelo', d: 'Revisa que la etiqueta identifique el modelo, la fecha de fabricación y la norma indicada.' },
    { t: 'Suspensión y accesorios', d: 'Consulta en la ficha técnica del modelo los componentes y accesorios incluidos en la configuración solicitada.' },
    { t: 'Compatibilidad del conjunto', d: 'Verifica la compatibilidad del casco con el resto del equipo en las fichas técnicas de los modelos involucrados.' },
    { t: 'Inspección y retiro', d: 'NFPA 1850 (2026) exige el retiro del equipo a más tardar 10 años después de su fabricación.' },
  ],
  comparativa: [
    { modelo: 'Cairns N6A Houston', tipo: 'estructural', norma: 'NFPA 1971 (2018)', material: 'Cuero', proteccion: '—', peso: '—', ideal: 'Combate estructural', rec: true },
    { modelo: 'Cairns 1836', tipo: 'estructural', norma: 'NFPA 1971 (2018)', material: 'Fibra de vidrio compuesta', proteccion: '—', peso: '—', ideal: 'Combate estructural', rec: false },
    { modelo: 'Cairns XF1', tipo: 'estructural', norma: 'NFPA 1971 (2018)', material: '—', proteccion: '—', peso: '—', ideal: 'Combate estructural', rec: false },
    { modelo: 'Cairns XF1', tipo: 'usar', norma: 'NFPA 1951 (2013)', material: '—', proteccion: '—', peso: '—', ideal: 'Rescate técnico', rec: false },
    { modelo: 'Cairns 880', tipo: 'estructural', norma: 'NFPA 1971', material: 'Termoplástico de alta temperatura', proteccion: '—', peso: '—', ideal: 'Combate estructural', rec: false },
    { modelo: 'Cairns Invader 664', tipo: 'estructural', norma: 'NFPA 1971 e IRAM', material: 'Fibra de vidrio compuesta', proteccion: '—', peso: '—', ideal: 'Combate estructural', rec: false },
    { modelo: 'Cairns 360S', tipo: 'estructural', norma: 'NFPA 1971', material: 'Termoplástico', proteccion: '—', peso: '—', ideal: 'Combate estructural', rec: false },
    { modelo: 'Cairns 660C Metro', tipo: 'estructural', norma: 'NFPA 1971', material: 'Fibra de vidrio compuesta', proteccion: '—', peso: '—', ideal: 'Combate estructural o de proximidad', rec: false },
  ],
  comparativaNote:
    'La tabla reproduce la norma y el material indicados para cada modelo. NFPA 1970 (2025) consolidó NFPA 1971, entre otras normas; confirma el requisito de tu proceso con la ficha y el certificado vigentes.',
  guia: [
    { n: '01', t: 'Define el escenario dominante: combate estructural → N6A Houston, 1836, XF1, 880, Invader 664, 360S o 660C Metro; rescate técnico → Cairns XF1.' },
    { n: '02', t: 'Revisa el material indicado para el modelo: cuero en N6A Houston; fibra de vidrio compuesta en 1836, Invader 664 y 660C Metro; termoplástico de alta temperatura en 880 y 360S.' },
    { n: '03', t: 'Confirma la norma del modelo: N6A Houston, 1836 y XF1 indican NFPA 1971 (2018); XF1 también indica NFPA 1951 (2013) para rescate técnico; Invader 664 indica NFPA 1971 e IRAM.' },
    { n: '04', t: 'Solicita la ficha técnica y el certificado del modelo, y registra la fecha de fabricación para el programa de inspección y retiro conforme a NFPA 1850 (2026).' },
  ],
  segmentosIntro:
    'La selección del casco Cairns depende del escenario operativo, la norma requerida y el material indicado para cada modelo. La cobertura comercial se extiende a los 32 estados.',
  segmentos: [
    { num: '01', tipo: 'estructural', titulo: 'Combate estructural en cuero', desc: 'Cairns N6A Houston está fabricado en cuero y su ficha indica NFPA 1971 (2018) para combate estructural.', modelos: 'Cairns N6A Houston' },
    { num: '02', tipo: 'estructural', titulo: 'Combate estructural en fibra de vidrio compuesta', desc: 'Cairns 1836, Invader 664 y 660C Metro utilizan shell de fibra de vidrio compuesta para operaciones estructurales según la norma indicada por modelo.', modelos: 'Cairns 1836 · Cairns Invader 664 · Cairns 660C Metro' },
    { num: '03', tipo: 'estructural', titulo: 'Combate estructural en termoplástico', desc: 'Cairns 880 y Cairns 360S utilizan shell termoplástico de alta temperatura y su ficha indica NFPA 1971.', modelos: 'Cairns 880 · Cairns 360S' },
    { num: '04', tipo: 'usar', titulo: 'Rescate técnico', desc: 'Cairns XF1 es un casco tipo jet de MSA Cairns para combate estructural y rescate técnico; su ficha indica NFPA 1971 (2018) y NFPA 1951 (2013).', modelos: 'Cairns XF1' },
  ],
  faqs: [
    { q: '¿Qué modelos Cairns están vigentes en el catálogo?', a: 'Cairns N6A Houston, 1836, XF1, 880, Invader 664, 360S y 660C Metro. Consulta la ficha técnica y el certificado de cada modelo para confirmar su aplicación y norma.' },
    { q: '¿Qué diferencias hay entre los materiales de la línea?', a: 'N6A Houston está fabricado en cuero. Cairns 1836, Invader 664 y 660C Metro tienen shell de fibra de vidrio compuesta. Cairns 880 y 360S tienen shell termoplástico de alta temperatura. Para Cairns XF1, consulta la ficha técnica.' },
    { q: '¿Qué norma indica cada casco Cairns?', a: 'N6A Houston y 1836 indican NFPA 1971 (2018). Cairns XF1 indica NFPA 1971 (2018) para combate estructural y NFPA 1951 (2013) para rescate técnico. 880, 360S y 660C Metro indican NFPA 1971; Invader 664 indica NFPA 1971 e IRAM.' },
    { q: '¿El Cairns XF1 sirve para rescate técnico?', a: 'Sí. La ficha del Cairns XF1 indica NFPA 1951 (2013) para rescate técnico y NFPA 1971 (2018) para combate estructural.' },
    { q: '¿Cuándo debe retirarse un casco Cairns?', a: 'Sigue las instrucciones del fabricante y el programa de inspección aplicable. NFPA 1850 (2026) exige el retiro del equipo a más tardar 10 años después de la fecha de fabricación.' },
    { q: '¿Entregan ficha técnica y certificado para licitación?', a: 'Sí. Entregamos ficha técnica, certificado del modelo y carta de distribuidor autorizado para procesos de compra públicos y corporativos.' },
  ],
  ctaKicker: 'Cairns · normas por modelo',
  ctaTitleHtml: 'Selecciona por escenario.<br/>Revisa la ficha técnica.',
  waQuote: 'Hola, quiero cotizar cascos Cairns.',
};

/* ── Exports ───────────────────────────────────────────────────────────────── */
export const cascosBrands: CascoBrand[] = [msaGallet, bullard, cairns];

export function cascoBrandBySlug(slug: string): CascoBrand | undefined {
  return cascosBrands.find((b) => b.slug === slug);
}

/** Cross-links a las otras marcas de cascos (URL específica) para la página dada. */
export function otrasMarcasCascos(slug: string): { label: string; desc: string; href: string }[] {
  const desc: Record<string, string> = {
    'msa-gallet': 'Estilo europeo integral · F1 XF · visor retráctil · EN 443',
    'bullard': 'Estilo americano de ala completa · USTM · TIC · NFPA 1970',
    'cairns': 'Cuero icónico desde 1836 · N6A Houston · NFPA 1970',
  };
  return cascosBrands
    .filter((b) => b.slug !== slug)
    .map((b) => ({ label: b.brandLabel, desc: desc[b.slug] ?? b.eyebrow, href: `/productos/cascos-nfpa/${b.slug}` }));
}
