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
  heroTitleAccent: 'certificados NFPA.',
  heroLead:
    'Distribuidor autorizado de MSA Gallet en México. Stock permanente de las 8 configuraciones —estructural, ARFF, forestal y USAR— con entrega en 24–48 h en CDMX y ficha técnica completa para licitación.',
  heroIntro: [
    'MSA Safety —NYSE: MSA— es el grupo industrial de seguridad más grande del mundo. Su línea Gallet define el estándar europeo de casco estructural: visor retráctil interno, fibra de vidrio termoendurecida y módulos integrados de lámpara y comunicación.',
    'El F1 XF es el casco más solicitado en cuerpos metropolitanos y ARFF de México. La gama cubre los cuatro escenarios de riesgo: estructural (NFPA 1970), proximidad (NFPA 1971), forestal (NFPA 1950) y rescate técnico USAR (EN 16471/16473).',
  ],
  heroBadges: ['NFPA 1970', 'NFPA 1971', 'NFPA 1950', 'Fibra de vidrio', 'Optrel retráctil', 'MSA Safety · NYSE', 'Distribuidor autorizado MX'],
  seoTitle: 'Cascos MSA Gallet NFPA 1970 — F1 XF · Distribuidor México',
  seoDescription:
    'Cascos MSA Gallet certificados NFPA 1970 en México: F1 XF, Comandante, EVOGUARD, ARFF, USAR F2 y forestal F1 SF. Distribuidor autorizado · stock CDMX · ficha para licitación.',
  founding: '1865',
  parentOrg: { name: 'MSA Safety Incorporated', ticker: 'NYSE:MSA' },
  stats: [
    { valor: 'NYSE: MSA', etiq: 'Grupo de seguridad global' },
    { valor: 'F1 XF', etiq: 'El casco más solicitado en MX' },
    { valor: '8', etiq: 'Configuraciones certificadas' },
    { valor: '32', etiq: 'Estados con cobertura' },
  ],
  credenciales: [
    { n: '01', t: 'MSA Safety · líder mundial', d: 'Gallet forma parte de MSA Safety (NYSE: MSA), el mayor grupo industrial de seguridad del mundo. Más de un siglo desarrollando protección para bomberos, con red global de soporte y refacciones originales garantizadas.' },
    { n: '02', t: 'El estándar europeo de casco', d: 'La línea Gallet define el casco estructural integral: cubierta de fibra de vidrio termoendurecida, visor retráctil interno y módulos integrados de lámpara y comunicación. El perfil envolvente de mayor cobertura cráneo-facial del mercado.' },
    { n: '03', t: 'Certificación verificable', d: 'Cada casco incluye etiqueta de trazabilidad con número de serie, lote y laboratorio acreditado. Documentación lista para auditorías NFPA 1850, licitaciones públicas y procesos de acreditación institucional.' },
    { n: '04', t: 'Stock e integración en CDMX', d: 'Inventario de los modelos más demandados con entrega en 24–48 h desde CDMX, y configuración del conjunto casco-SCBA-cámara térmica compatible con MSA G1, Dräger y 3M Scott — todo original de fábrica.' },
  ],
  linesIntro:
    'La línea Gallet cubre los cuatro escenarios de operación desde un solo proveedor: estructural para combate en edificios, proximidad para aeropuertos y combustibles, forestal para interfaz urbano-forestal y rescate técnico USAR. Una sola relación de distribución para todo tu parque de cascos.',
  lineas: [
    { tipo: 'estructural', badge: 'NFPA 1970', titulo: 'Línea Estructural', modelos: '4 modelos — F1 XF · F1 XF Comandante · EVOGUARD · F1 EVO', desc: 'El casco europeo integral para combate estructural en edificios. Desde el F1 XF —el más solicitado en cuerpos tier-1— hasta el EVOGUARD ergonómico con suspensión anti-concusión y el F1 EVO de entrada para licitaciones municipales.', tech: 'Fibra de vidrio termoendurecida · Visor Optrel retráctil · Fas-Trac III 8 puntos · NFPA 1970' },
    { tipo: 'proximidad', badge: 'NFPA 1970 Proximity', titulo: 'Línea Proximidad ARFF', modelos: '1 modelo — F1 XF ARFF', desc: 'Cubierta aluminizada reflectante y visor dorado NFPA 1970 para aproximación a fuegos de combustible. Referencia en aeropuertos ARFF (AICM, GDL, MTY), refinerías y procesos calientes bajo normativa AFAC.', tech: 'Fibra de vidrio + aluminizado · Visor dorado reflectante · Ventilación sellable · NFPA 1970' },
    { tipo: 'forestal', badge: 'NFPA 1950', titulo: 'Línea Forestal / Interfaz', modelos: '2 modelos — F1 SF · F1 SF Pro', desc: 'Cascos ligeros y ventilados para incendio de vegetación e interfaz urbano-forestal. El F1 SF Pro incluye visor facial retráctil y capucha forestal de serie para brigadas de alto rendimiento en jornadas largas.', tech: 'Termoplástico / ABS reforzado · ~0.58–0.65 kg · Visor + capucha · NFPA 1950 · S-130/S-190' },
    { tipo: 'usar', badge: 'EN 16471 / 16473', titulo: 'Línea Rescate Técnico / USAR', modelos: '1 modelo — F2 X-TREM', desc: 'Casco compacto de rescate técnico y búsqueda urbana (USAR). Alta resistencia al impacto lateral para espacios confinados, derrumbes y maniobras con cuerda. Usado por equipos USAR en México.', tech: 'Polipropileno alta resistencia · Diseño compacto · Visor transparente retráctil · EN 16471/16473' },
  ],
  flagship: 'F1 XF',
  anatomiaIntro:
    'El F1 XF no es solo una cubierta: es un sistema integrado de protección craneal, facial y nucal con módulos de misión. Estos seis elementos explican por qué es el casco de referencia en los cuerpos metropolitanos y ARFF de México.',
  anatomia: [
    { t: 'Cubierta de fibra de vidrio', d: 'Carcasa termoendurecida que disipa el calor radiante mejor que el composite ABS y mantiene la estabilidad dimensional bajo exposición térmica prolongada.' },
    { t: 'Visor facial Optrel retráctil', d: 'Pantalla ocular interna que se despliega sin quitar el casco y se retrae dentro de la cubierta cuando no se usa, evitando rayaduras y daño acumulado.' },
    { t: 'Suspensión Fas-Trac III', d: 'Arnés de 8 puntos ajustable en tres dimensiones (altura, perímetro y ángulo) para un calce estable que reduce la fatiga en operaciones largas.' },
    { t: 'Protección nucal articulada', d: 'Cubrenuca rígido articulado certificado NFPA 1970 que protege la zona cervical de brasas y escurrimientos sin limitar el movimiento de cabeza.' },
    { t: 'Módulos integrados', d: 'Anclajes laterales nativos para lámpara, sistema de comunicación y soporte de cámara de imagen térmica — sin comprometer la certificación de la cubierta.' },
    { t: 'Compatibilidad SCBA', d: 'Adaptadores verificados para máscara full-face MSA G1, Dräger PSS 7000 y 3M Scott Air-Pak NxG7, para un sellado correcto del conjunto respiratorio.' },
  ],
  comparativa: [
    { modelo: 'F1 XF', tipo: 'estructural', norma: 'NFPA 1970', material: 'Fibra de vidrio termoendurecida', proteccion: 'Visor Optrel retráctil', peso: '~1.35 kg', ideal: 'Cuerpos metropolitanos tier-1', rec: true },
    { modelo: 'F1 XF Comandante', tipo: 'mando', norma: 'NFPA 1970', material: 'Fibra de vidrio', proteccion: 'Visor dorado/plateado', peso: '~1.35 kg', ideal: 'Oficiales y jefes de sector', rec: false },
    { modelo: 'EVOGUARD', tipo: 'estructural', norma: 'NFPA 1970', material: 'Composite fibra/aramida', proteccion: 'Visor Optrel retráctil', peso: '~1.30 kg', ideal: 'Integración nativa con MSA G1', rec: false },
    { modelo: 'F1 EVO', tipo: 'estructural', norma: 'NFPA 1970', material: 'Polipropileno reforzado', proteccion: 'Visor facial abatible', peso: '~1.25 kg', ideal: 'Licitaciones municipales', rec: false },
    { modelo: 'F1 XF ARFF', tipo: 'proximidad', norma: 'NFPA 1970', material: 'Fibra de vidrio + aluminizado', proteccion: 'Visor dorado reflectante', peso: '~1.55 kg', ideal: 'Aeropuertos ARFF y combustibles', rec: false },
    { modelo: 'F2 X-TREM', tipo: 'usar', norma: 'EN 16471/16473', material: 'Polipropileno alta resistencia', proteccion: 'Visor transparente retráctil', peso: '~1.20 kg', ideal: 'Rescate técnico y espacios confinados', rec: false },
    { modelo: 'F1 SF', tipo: 'forestal', norma: 'NFPA 1950', material: 'Termoplástico de alta resistencia', proteccion: 'Pantalla facial abatible', peso: '~0.58 kg', ideal: 'Incendio vegetal e interfaz', rec: false },
    { modelo: 'F1 SF Pro', tipo: 'forestal', norma: 'NFPA 1950', material: 'ABS reforzado + capucha', proteccion: 'Visor retráctil + capucha', peso: '~0.65 kg', ideal: 'Brigadas forestales alto rendimiento', rec: false },
  ],
  comparativaNote:
    '* Cascos estructurales certificados NFPA 1970; proximidad NFPA 1971; forestal NFPA 1950; USAR EN 16471/16473. Pesos aproximados según configuración.',
  guia: [
    { n: '01', t: 'Define el escenario dominante: estructural en edificios → F1 XF / EVOGUARD; aproximación a combustible → F1 XF ARFF; incendio vegetal → F1 SF; rescate técnico/USAR → F2 X-TREM. Este primer paso reduce a la mitad las opciones.' },
    { n: '02', t: 'Elige el nivel: el F1 XF lidera licitaciones tier-1; el EVOGUARD prioriza ergonomía e integración nativa con MSA G1; el F1 EVO es la entrada para presupuestos municipales sin perder la certificación NFPA 1970.' },
    { n: '03', t: 'Configura el visor y los módulos: visor Optrel retráctil o visor dorado ARFF, módulo de lámpara, soporte para cámara térmica y comunicación — todo original de fábrica para conservar la certificación.' },
    { n: '04', t: 'Verifica compatibilidad con tu SCBA (MSA G1, Dräger PSS 7000, 3M Scott) y la capucha de partículas, y asegura refacciones originales —visor, suspensión Fas-Trac III, barboquejo— para la vida útil NFPA 1850.' },
  ],
  segmentosIntro:
    'Gallet es la primera opción en cuerpos que requieren visor integrado, perfil envolvente y módulos de misión, con trazabilidad NFPA 1850 y documentación para licitación. Su respaldo en MSA Safety asegura refacciones originales y soporte en los 32 estados.',
  segmentos: [
    { num: '01', tipo: 'estructural', titulo: 'Departamentos Metropolitanos Tier-1', desc: 'CDMX, GDL, MTY, PUE y los principales cuerpos del país. El F1 XF domina por su visor retráctil, perfil bajo y trazabilidad NFPA 1850; el F1 XF Comandante identifica jerarquía con visor dorado o plateado.', modelos: 'F1 XF · F1 XF Comandante · EVOGUARD' },
    { num: '02', tipo: 'proximidad', titulo: 'Aeropuertos ARFF e Industria', desc: 'AICM, GDL, MTY y aeropuertos regionales, refinerías y procesos calientes. El F1 XF ARFF cumple NFPA 1970 Proximity con cubierta aluminizada y visor dorado para aproximación a fuegos de combustible.', modelos: 'F1 XF ARFF' },
    { num: '03', tipo: 'forestal', titulo: 'Brigadas Forestales / Protección Civil', desc: 'CONAFOR, brigadas de interfaz urbano-forestal y Protección Civil. El F1 SF y el F1 SF Pro cumplen NFPA 1950 con bajo peso, alta ventilación y compatibilidad con goggles y capucha forestal.', modelos: 'F1 SF · F1 SF Pro' },
    { num: '04', tipo: 'usar', titulo: 'USAR y Rescate Técnico', desc: 'Equipos de búsqueda y rescate urbano, espacios confinados y rescate con cuerda. El F2 X-TREM (EN 16471/16473) ofrece diseño compacto y máxima resistencia al impacto lateral en derrumbes.', modelos: 'F2 X-TREM' },
  ],
  faqs: [
    { q: '¿Por qué el MSA Gallet F1 XF es el casco más solicitado en cuerpos metropolitanos de México?', a: 'El F1 XF combina cubierta de fibra de vidrio termoendurecida —más resistente al calor radiante que el composite ABS—, visor facial retráctil interno que despliega sin quitar el casco y suspensión Fas-Trac III ajustable en tres dimensiones. Esa integración de protección, perfil bajo y módulos de lámpara y comunicación lo convirtió en el estándar de los cuerpos tier-1 (CDMX, Guadalajara, Monterrey) y de las operaciones ARFF. Además, su respaldo en MSA Safety (NYSE: MSA) garantiza refacciones originales y trazabilidad a largo plazo.' },
    { q: '¿Qué diferencia hay entre el F1 XF estructural, el F1 XF ARFF y el F2 X-TREM USAR?', a: 'El F1 XF estructural está certificado NFPA 1970 para combate en edificios. El F1 XF ARFF añade cubierta aluminizada reflectante y visor dorado NFPA 1971 Proximity para aproximación a fuegos de kerosene en aeropuertos y refinerías. El F2 X-TREM es un casco de rescate técnico certificado EN 16471/16473, con diseño compacto para espacios confinados y máxima resistencia al impacto lateral en colapsos y maniobras USAR. Mismo ADN Gallet, tres escenarios de riesgo distintos.' },
    { q: '¿El visor Optrel retráctil sustituye a los goggles de protección?', a: 'El visor facial interno del F1 XF protege contra impacto, partículas y salpicaduras durante el ataque, y se retrae dentro de la cubierta cuando no se usa —sin acumular daño ni rayaduras. Para humo denso, vapores o trabajos de sobrehaul prolongados se recomienda complementarlo con goggles sellados NFPA 1970. Te asesoramos sobre la combinación visor + goggles + capucha de partículas correcta para tu operación.' },
    { q: '¿Es compatible el casco Gallet con mi SCBA y con cámara de imagen térmica?', a: 'Sí. Los modelos Gallet están disponibles con adaptadores verificados para máscara full-face de SCBA MSA G1, Dräger PSS 7000 y 3M Scott Air-Pak NxG7, y con montajes para cámara térmica. El EVOGUARD ofrece integración nativa con el SCBA MSA G1 sin adaptadores. Configuramos el conjunto casco-SCBA-capucha para que funcione sin interferencias y conserve la certificación NFPA vigente.' },
    { q: '¿Cada cuánto se retira del servicio un casco MSA Gallet?', a: 'El retiro se rige por las instrucciones de MSA y la inspección periódica conforme a NFPA 1850. Independientemente de la antigüedad, el casco se retira de inmediato ante impacto severo, grieta, deformación de la cubierta o degradación de la suspensión. Te facilitamos la guía de inspección y retiro de MSA y, en cada compra, la etiqueta de trazabilidad con número de serie para tu expediente de auditoría.' },
    { q: '¿Entregan ficha técnica y certificado de conformidad para licitación pública?', a: 'Sí. Cada casco MSA Gallet incluye el certificado de conformidad del fabricante, la ficha técnica con número de modelo y lote, y el reporte del laboratorio acreditado. Para concursos públicos (CompraNet, IMSS, Pemex, gobiernos estatales) generamos el manifiesto de cumplimiento por partida con identificación del estándar exacto (NFPA 1970-2018, NFPA 1971 Proximity o NFPA 1977-2021).' },
  ],
  ctaKicker: 'El casco europeo de referencia en México',
  ctaTitleHtml: 'Stock permanente.<br/>Ficha técnica lista.',
  waQuote: 'Hola, quiero cotizar cascos MSA Gallet NFPA 1970.',
};

/* ════════════════════════════════════════════════════════════════════════════
   BULLARD
   ════════════════════════════════════════════════════════════════════════════ */
const bullard: CascoBrand = {
  slug: 'bullard',
  brand: 'Bullard',
  brandLabel: 'Bullard',
  eyebrow: 'Bullard · Desde 1898 · Estilo Americano · Distribuidor MX',
  heroTitleTop: 'Cascos Bullard',
  heroTitleAccent: 'certificados NFPA.',
  heroLead:
    'Distribuidor autorizado de Bullard en México. Stock permanente de las 8 configuraciones —estructural, mando, forestal y USAR— con entrega en 24–48 h en CDMX y ficha técnica completa para licitación.',
  heroIntro: [
    'Bullard lleva más de 125 años fabricando EPP para bomberos desde California — la empresa que inventó el casco industrial moderno. Su línea USTM/USTERM define el estilo americano de ala completa en material composite: escudo frontal personalizable con emblema institucional y alta resistencia térmica.',
    'Como fabricante también de cámaras de imagen térmica, Bullard ofrece la mejor compatibilidad nativa con TIC del mercado. La primera opción para corporaciones con identidad histórica que exigen tradición y tecnología.',
  ],
  heroBadges: ['NFPA 1970', 'NFPA 1971', 'NFPA 1950', 'Composite ABS / USTERM', 'Ala completa', 'Escudo frontal', 'TIC Mount', 'Distribuidor autorizado MX'],
  seoTitle: 'Cascos Bullard NFPA 1970 — USTM · Distribuidor México',
  seoDescription:
    'Cascos Bullard certificados NFPA en México: USTM, USTERM, XTF, FH2 mando, USAR y forestal SX6. Estilo americano de ala completa. Distribuidor autorizado · stock CDMX · ficha para licitación.',
  founding: '1898',
  parentOrg: { name: 'E.D. Bullard Company' },
  stats: [
    { valor: '1898', etiq: 'Fundada en California' },
    { valor: '125+', etiq: 'Años fabricando EPP' },
    { valor: 'USTM', etiq: 'El estilo americano de referencia' },
    { valor: '32', etiq: 'Estados con cobertura' },
  ],
  credenciales: [
    { n: '01', t: 'Pionera americana desde 1898', d: 'E.D. Bullard fabrica protección desde California hace más de 125 años — la empresa que inventó el casco industrial moderno. Un siglo largo de ingeniería de protección craneal para bomberos, con refacciones originales garantizadas.' },
    { n: '02', t: 'El estilo americano de ala completa', d: 'La línea USTM/USTERM define el casco de ala completa en composite: protección 360° contra brasas y escurrimientos, y escudo frontal personalizable con el emblema institucional. La primera opción de las corporaciones con identidad histórica.' },
    { n: '03', t: 'Integración líder con cámara térmica', d: 'Bullard también fabrica cámaras de imagen térmica (línea TXS), así que sus cascos ofrecen montajes nativos para TIC sin adaptadores de terceros — una ventaja única para sobrehaul y búsqueda en humo denso.' },
    { n: '04', t: 'Trazabilidad y stock en CDMX', d: 'Cada casco incluye número de serie verificable y documentación lista para NFPA 1850 y licitación. Stock de los modelos más demandados con entrega en 24–48 h desde CDMX y configuración del conjunto casco-SCBA-cámara.' },
  ],
  linesIntro:
    'La línea Bullard cubre el espectro de operación desde un solo proveedor: estructural de ala completa para combate en edificios, mando para oficiales, forestal para interfaz urbano-forestal y rescate técnico USAR. Una sola relación de distribución para todo tu parque de cascos.',
  lineas: [
    { tipo: 'estructural', badge: 'NFPA 1970', titulo: 'Línea Estructural — Ala Completa', modelos: '5 modelos — USTM · USTERM · XTF · 891V · LTX', desc: 'El estilo americano de ala completa para combate estructural. Desde el USTM —el casco de referencia— y el USTERM con montaje TIC, hasta el XTF con visor retráctil, el 891V clásico en fibra de vidrio y el LTX con estética de cuero.', tech: 'Composite ABS / USTERM termoendurecido / fibra de vidrio · Escudo frontal · Ratchet · QuadRange™' },
    { tipo: 'mando', badge: 'NFPA 1970', titulo: 'Línea de Mando', modelos: '1 modelo — FH2 Commander', desc: 'Casco de mando para oficiales. Acabado dorado (jefe de sector) o plateado (comandante) de serie, con escudo frontal personalizable con rango y emblema. Identificación visual inmediata de jerarquía en escena.', tech: 'Composite ABS dorado/plateado · Escudo de rango · QuadRange™ · NFPA 1970' },
    { tipo: 'forestal', badge: 'NFPA 1950', titulo: 'Línea Forestal / Interfaz', modelos: '1 modelo — SX6 Wildland', desc: 'El casco más ligero de la línea Bullard (~0.52 kg) para incendio de vegetación e interfaz urbano-forestal. Ventilación activa frontal y posterior, malla facial FR y compatibilidad con capucha forestal certificada.', tech: 'ABS ligero ventilado · Malla facial FR · ~0.52 kg · NFPA 1950 · S-130/S-190' },
    { tipo: 'usar', badge: 'NFPA 1970', titulo: 'Línea Rescate Técnico / USAR', modelos: '1 modelo — USRRG', desc: 'Casco de rescate urbano y operaciones técnicas. Shell ABS de alto impacto, ala corta delantera para espacios confinados y montaje frontal para linterna de 1000+ lúmenes. Suspensión QuadRange™ de 4 posiciones.', tech: 'ABS alto impacto · Ala corta · Montaje linterna 1000+ lm · QuadRange™ 4 posiciones' },
  ],
  flagship: 'USTM',
  anatomiaIntro:
    'El USTM no es solo una cubierta: es el sistema americano de ala completa con escudo de identidad y módulos de misión. Estos seis elementos explican por qué es la referencia en las corporaciones con tradición de México.',
  anatomia: [
    { t: 'Ala completa (full brim)', d: 'El ala envolvente de 360° desvía el agua y las brasas lejos del cuello y la nuca — la firma del casco americano y su mayor diferencia frente al perfil europeo.' },
    { t: 'Escudo frontal personalizable', d: 'Front shield serigrafiable e intercambiable con el nombre del cuerpo, número de estación, rango y emblema. Identidad institucional reconocible al instante en escena.' },
    { t: 'Shell composite / USTERM', d: 'Composite ABS termoplástico (USTM) o compuesto termoendurecido USTERM, con mayor resistencia al calor radiante y estabilidad dimensional bajo exposición prolongada.' },
    { t: 'Suspensión Ratchet / QuadRange™', d: 'Arnés ajustable —Ratchet de 8 puntos o QuadRange™ de 4 posiciones— para un calce estable que reduce la fatiga cervical en operaciones largas.' },
    { t: 'Montaje para cámara térmica', d: 'Anclaje frontal/lateral nativo para la cámara de imagen térmica Bullard TXS y para módulos de lámpara, sin adaptadores de terceros que comprometan la certificación.' },
    { t: 'Compatibilidad SCBA', d: 'Adaptadores verificados para máscara full-face MSA G1, Dräger PSS 7000 y 3M Scott Air-Pak NxG7, para un sellado correcto del conjunto respiratorio.' },
  ],
  comparativa: [
    { modelo: 'USTM', tipo: 'estructural', norma: 'NFPA 1970', material: 'Composite ABS termoplástico', proteccion: 'Visor exterior abatible', peso: '~1.53 kg', ideal: 'Identidad histórica · ala completa', rec: true },
    { modelo: 'USTERM', tipo: 'estructural', norma: 'NFPA 1970', material: 'Compuesto termoendurecido USTERM', proteccion: 'Visor + ocular integrado', peso: '~1.64 kg', ideal: 'Calor radiante alto · montaje TIC', rec: false },
    { modelo: 'XTF Composite', tipo: 'estructural', norma: 'NFPA 1970', material: 'Composite termoendurecido', proteccion: 'Visor Optrel retráctil', peso: '~1.42 kg', ideal: 'Metropolitano · visor retráctil', rec: false },
    { modelo: 'FH2 Commander', tipo: 'mando', norma: 'NFPA 1970', material: 'Composite ABS dorado/plateado', proteccion: 'Protector facial abatible', peso: '~1.50 kg', ideal: 'Oficiales y jefes de sector', rec: false },
    { modelo: '891V Classic', tipo: 'estructural', norma: 'NFPA 1970', material: 'Fibra de vidrio tradicional', proteccion: 'Visor metálico abatible', peso: '~1.65 kg', ideal: 'Tradición Bullard · calor radiante', rec: false },
    { modelo: 'LTX Traditional', tipo: 'estructural', norma: 'NFPA 1970', material: 'Composite estética cuero', proteccion: 'Pantalla facial abatible', peso: '~1.48 kg', ideal: 'Look de cuero · menor peso', rec: false },
    { modelo: 'USRRG', tipo: 'usar', norma: 'NFPA 1970', material: 'ABS de alto impacto', proteccion: 'Visor abatible + goggles', peso: '~1.40 kg', ideal: 'Rescate técnico · espacios confinados', rec: false },
    { modelo: 'SX6 Wildland', tipo: 'forestal', norma: 'NFPA 1950', material: 'ABS ligero ventilado', proteccion: 'Malla facial FR', peso: '~0.52 kg', ideal: 'Incendio vegetal e interfaz', rec: false },
  ],
  comparativaNote:
    '* Cascos estructurales y de mando certificados NFPA 1970; forestal NFPA 1950. Pesos aproximados según configuración.',
  guia: [
    { n: '01', t: 'Define el escenario dominante: estructural en edificios → USTM / USTERM / XTF; mando → FH2 Commander; incendio vegetal → SX6 Wildland; rescate técnico/USAR → USRRG. Este primer paso reduce a la mitad las opciones.' },
    { n: '02', t: 'Elige el material y la generación: USTM composite de referencia, USTERM termoendurecido con montaje TIC, XTF con visor retráctil y ventilación, 891V en fibra de vidrio clásica o LTX con estética de cuero — todos de ala completa.' },
    { n: '03', t: 'Personaliza el escudo frontal con el nombre, número y rango de tu corporación, y configura el montaje para cámara térmica Bullard TXS, lámpara y comunicación.' },
    { n: '04', t: 'Verifica compatibilidad con tu SCBA (MSA G1, Dräger PSS 7000, 3M Scott) y asegura refacciones originales —visor, suspensión QuadRange™, escudo— para la vida útil NFPA 1850.' },
  ],
  segmentosIntro:
    'Bullard es la primera opción de los cuerpos que valoran la tradición americana del ala completa, el escudo frontal de identidad y la integración nativa con cámara térmica — con trazabilidad NFPA 1850 y soporte en los 32 estados.',
  segmentos: [
    { num: '01', tipo: 'estructural', titulo: 'Corporaciones con Identidad Histórica', desc: 'Cuerpos de bomberos con tradición y escudo frontal institucional. El USTM, el 891V Classic y el LTX conservan el ala completa y el escudo personalizable que distingue al servicio americano.', modelos: 'USTM · 891V Classic · LTX' },
    { num: '02', tipo: 'estructural', titulo: 'Departamentos Metropolitanos Exigentes', desc: 'Operaciones de alta frecuencia que requieren visor retráctil, ventilación activa y cámara térmica integrada. El XTF Composite y el USTERM ofrecen el composite más avanzado de la línea.', modelos: 'XTF Composite · USTERM' },
    { num: '03', tipo: 'forestal', titulo: 'Brigadas Forestales / Protección Civil', desc: 'CONAFOR, brigadas de interfaz urbano-forestal y Protección Civil. El SX6 Wildland cumple NFPA 1950 con el menor peso de la línea, ventilación activa y compatibilidad con capucha forestal.', modelos: 'SX6 Wildland' },
    { num: '04', tipo: 'usar', titulo: 'USAR, Rescate Técnico y Mando', desc: 'Equipos de búsqueda y rescate urbano, espacios confinados y mando operativo. El USRRG aporta ala corta y linterna de alto rendimiento; el FH2 Commander identifica la jerarquía en escena.', modelos: 'USRRG · FH2 Commander' },
  ],
  faqs: [
    { q: '¿Cuándo conviene el estilo americano de ala completa Bullard frente al europeo (MSA Gallet)?', a: 'El casco americano Bullard de ala completa protege 360° del escurrimiento de agua y la caída de brasas, e incorpora el escudo frontal personalizable con el emblema y el número de la corporación — un elemento de identidad institucional con más de un siglo de tradición en el servicio. Es la elección natural de cuerpos con historia y de operaciones donde el reconocimiento visual de rango importa. El europeo (Gallet) prioriza perfil bajo y visor retráctil interno. Ambos certifican NFPA; la decisión es operacional e identitaria.' },
    { q: '¿Qué diferencia hay entre el USTM, el USTERM y el XTF Composite?', a: 'El USTM es el casco americano de referencia: shell de composite ABS, ala completa y escudo frontal serigrafiable. El USTERM usa un compuesto termoendurecido con mayor resistencia al calor radiante e incorpora de fábrica el montaje frontal para cámara de imagen térmica Bullard TXS. El XTF Composite es el modelo más avanzado: composite termoendurecido, visor Optrel retráctil de operación con una mano y ventilación activa para departamentos metropolitanos exigentes.' },
    { q: '¿El escudo frontal (front shield) se personaliza con el emblema de mi corporación?', a: 'Sí. El escudo frontal Bullard es serigrafiable e intercambiable: se personaliza con el nombre del cuerpo, número de estación, rango y emblema institucional. Manejamos también la línea FH2 Commander en color dorado (jefe de sector) y plateado (comandante) para identificación inmediata de jerarquía en escena. Cotizamos el escudo personalizado junto con el casco.' },
    { q: '¿Es cierto que los cascos Bullard tienen la mejor integración con cámara térmica?', a: 'Bullard es, además de fabricante de cascos, uno de los principales fabricantes mundiales de cámaras de imagen térmica (línea TXS). Por eso sus cascos —especialmente USTERM y XTF— ofrecen montajes nativos verificados para la TIC Bullard, sin adaptadores de terceros. También son compatibles con sistemas de comunicación y con máscaras full-face de SCBA MSA G1, Dräger PSS 7000 y 3M Scott Air-Pak NxG7.' },
    { q: '¿Cada cuánto se retira del servicio un casco Bullard?', a: 'El retiro se rige por las instrucciones de Bullard y la inspección periódica conforme a NFPA 1850. Independientemente de la antigüedad, el casco se retira de inmediato ante impacto severo, grieta, deformación de la cubierta o degradación de la suspensión. Te facilitamos la guía de inspección y retiro de Bullard y, en cada compra, la etiqueta de trazabilidad con número de serie para tu expediente de auditoría.' },
    { q: '¿Entregan ficha técnica y certificado de conformidad para licitación pública?', a: 'Sí. Cada casco Bullard incluye el certificado de conformidad del fabricante, la ficha técnica con número de modelo y lote, y el reporte del laboratorio acreditado. Para concursos públicos (CompraNet, IMSS, Pemex, gobiernos estatales) generamos el manifiesto de cumplimiento por partida con identificación del estándar exacto (NFPA 1970-2018, NFPA 1971 o NFPA 1977-2021).' },
  ],
  ctaKicker: 'El casco americano de ala completa en México',
  ctaTitleHtml: 'Stock permanente.<br/>Escudo a tu medida.',
  waQuote: 'Hola, quiero cotizar cascos Bullard NFPA 1970.',
};

/* ════════════════════════════════════════════════════════════════════════════
   CAIRNS
   ════════════════════════════════════════════════════════════════════════════ */
const cairns: CascoBrand = {
  slug: 'cairns',
  brand: 'Cairns',
  brandLabel: 'Cairns',
  eyebrow: 'Cairns · Desde 1836 · El Casco Icónico · Distribuidor MX',
  heroTitleTop: 'Cascos Cairns',
  heroTitleAccent: 'certificados NFPA.',
  heroLead:
    'Distribuidor autorizado de Cairns en México. Stock permanente de las 8 configuraciones —del N6A Houston de cuero al composite moderno, mando, ARFF y forestal— con entrega en 24–48 h en CDMX y ficha técnica para licitación.',
  heroIntro: [
    'Cairns es la marca de cascos para bomberos más antigua de América — fundada en 1836. El N6A Houston, en cuero curtido y polipropileno, es el casco más reconocible del servicio en el continente: la silueta de ala trasera larga, el águila frontal y el escudo serigrafiable que se volvieron símbolo del oficio.',
    'Su línea combina ese legado con composite moderno (1010, 1044 Invader), proximidad ARFF (795) y forestal (Wildland). Hoy parte del grupo MSA Safety, conserva tradición e ingeniería bajo un mismo estándar NFPA.',
  ],
  heroBadges: ['NFPA 1970', 'NFPA 1971', 'NFPA 1950', 'Cuero / Composite', 'N6A Houston', 'Escudo frontal', 'Desde 1836', 'MSA Safety'],
  seoTitle: 'Cascos Cairns NFPA 1970 — N6A Houston · México',
  seoDescription:
    'Cascos Cairns certificados NFPA en México: N6A Houston de cuero, 1010/1044 composite, 880 mando, 795 ARFF y forestal. La marca de casco más antigua de América · distribuidor autorizado MX.',
  founding: '1836',
  parentOrg: { name: 'MSA Safety Incorporated', ticker: 'NYSE:MSA' },
  stats: [
    { valor: '1836', etiq: 'La marca de casco más antigua de América' },
    { valor: 'N6A', etiq: 'El casco más reconocible del servicio' },
    { valor: 'MSA Safety', etiq: 'Grupo · respaldo global' },
    { valor: '32', etiq: 'Estados con cobertura' },
  ],
  credenciales: [
    { n: '01', t: 'Casi dos siglos de legado', d: 'Cairns fabrica cascos de bombero desde 1836 — la marca más antigua de América. El N6A Houston es la silueta de cuero que se convirtió en el símbolo visual del servicio en todo el continente, hoy bajo certificación NFPA vigente.' },
    { n: '02', t: 'Cuero y composite, un solo portafolio', d: 'Cairns es la única marca que abarca el casco de cuero patrimonial (N6A) y el composite moderno de perfil bajo (1010, 1044 Invader). Tradición e ingeniería contemporánea desde un mismo distribuidor, según lo que pida cada cuerpo.' },
    { n: '03', t: 'Identidad: escudo frontal y mando', d: 'Escudo frontal intercambiable y serigrafiable con emblema, compañía y rango, sostenido por el característico águila (eagle holder). La línea 880 Commander en dorado y plateado identifica la jerarquía al instante en escena.' },
    { n: '04', t: 'Respaldo MSA Safety · stock CDMX', d: 'Cairns forma parte del grupo MSA Safety, lo que garantiza refacciones originales y soporte global. Cada casco lleva número de serie verificable y documentación NFPA 1850; stock de los modelos clave con entrega en 24–48 h desde CDMX.' },
  ],
  linesIntro:
    'La línea Cairns cubre los cuatro escenarios de operación desde un solo proveedor: estructural en cuero o composite para combate en edificios, proximidad ARFF para aeropuertos y combustibles, forestal para interfaz urbano-forestal y mando para oficiales. Una sola relación de distribución para todo el parque.',
  lineas: [
    { tipo: 'estructural', badge: 'NFPA 1970', titulo: 'Línea Estructural — Cuero & Composite', modelos: '5 modelos — N6A Houston · 1010 · 1044 Invader · 660C · 990', desc: 'El corazón de Cairns: del N6A Houston en cuero —el icono del servicio— al 1044 Invader composite de perfil bajo, pasando por el 660C clásico en fibra de vidrio y el 990 de presupuesto medio. Tradición y tecnología, mismo estándar NFPA.', tech: 'Cuero curtido · Composite PP/aramida · Fibra de vidrio · Visor retráctil · Escudo frontal' },
    { tipo: 'proximidad', badge: 'NFPA 1970 Proximity', titulo: 'Línea Proximidad ARFF', modelos: '1 modelo — 795 ARFF', desc: 'Casco aluminizado con visor dorado reflectante para aproximación a fuegos de combustible de aviación. Diseñado para vehículos ARFF Oshkosh, Rosenbauer y Striker, con alta retención en maniobras de alta velocidad. NFPA 1970 Proximity.', tech: 'Fibra de vidrio aluminizada · Visor dorado reflectante · Alta retención 8 puntos · NFPA 1970' },
    { tipo: 'forestal', badge: 'NFPA 1950', titulo: 'Línea Forestal / Interfaz', modelos: '1 modelo — Cairns Wildland', desc: 'Casco ultraligero (~0.55 kg) para incendio de vegetación e interfaz urbano-forestal. Ventilación activa, malla facial FR y compatibilidad con capucha forestal y goggles certificados, para jornadas de más de 8 horas.', tech: 'ABS ligero ventilado · Malla facial FR · ~0.55 kg · NFPA 1950 · S-130/S-190' },
    { tipo: 'mando', badge: 'NFPA 1970', titulo: 'Línea de Mando', modelos: '1 modelo — 880 Commander', desc: 'El casco de mando más reconocido de América del Norte: cuero premium en dorado (jefe de sector) o plateado (comandante), con suspensión Boston Leather y escudo de rango. Distinción y resistencia al calor radiante.', tech: 'Cuero premium · Visor metálico dorado/plateado · Suspensión Boston Leather · NFPA 1970' },
  ],
  flagship: 'N6A Houston',
  anatomiaIntro:
    'El N6A no es una pieza de museo: es ingeniería de protección con casi dos siglos de evolución. Estos seis elementos explican por qué la silueta de cuero sigue siendo la referencia de identidad —y de calor radiante— en las corporaciones con tradición de México.',
  anatomia: [
    { t: 'Construcción en cuero curtido', d: 'Cuero moldeado a alta temperatura, el material original del casco de bombero desde el siglo XIX, con una resistencia al calor radiante que sigue siendo referencia bajo NFPA 1970.' },
    { t: 'Ala trasera extendida', d: 'El largo ala posterior —la silueta inconfundible del N6A— desvía el agua y las brasas lejos del cuello y la parte alta de la espalda durante el ataque.' },
    { t: 'Escudo frontal + eagle holder', d: 'Front shield serigrafiable e intercambiable sostenido por el característico águila de latón: nombre del cuerpo, compañía, número de estación y rango, reconocibles al instante.' },
    { t: 'Suspensión de cuero', d: 'Sistema de cabezal y barboquejo en cuero, ajustable a 8 puntos, que reparte el peso y mantiene un calce estable y cómodo en operaciones prolongadas.' },
    { t: 'Protección nucal y facial', d: 'Cubrenuca de cuero y compatibilidad con pantalla facial abatible y goggles certificados, para completar la protección NFPA en combate estructural.' },
    { t: 'Compatibilidad SCBA y trazabilidad', d: 'Adaptadores verificados para máscara full-face MSA G1, Dräger PSS 7000 y 3M Scott Air-Pak NxG7, y etiqueta con número de serie para auditoría NFPA 1850.' },
  ],
  comparativa: [
    { modelo: 'N6A Houston', tipo: 'estructural', norma: 'NFPA 1970', material: 'Cuero + polipropileno', proteccion: 'Escudo frontal + visor', peso: '~1.78 kg', ideal: 'Identidad histórica · el icono', rec: true },
    { modelo: '1010 Composite', tipo: 'estructural', norma: 'NFPA 1970', material: 'Composite PP + fibra de vidrio', proteccion: 'Visor facial retráctil', peso: '~1.52 kg', ideal: 'ADN Cairns · composite ligero', rec: false },
    { modelo: '1044 Invader', tipo: 'estructural', norma: 'NFPA 1970', material: 'Composite PP + aramida', proteccion: 'Visor retráctil integrado', peso: '~1.45 kg', ideal: 'Metropolitano · perfil bajo', rec: false },
    { modelo: '660C Traditional', tipo: 'estructural', norma: 'NFPA 1970', material: 'Fibra de vidrio + PP', proteccion: 'Pantalla facial abatible', peso: '~1.68 kg', ideal: 'Estética clásica · calor radiante', rec: false },
    { modelo: '990 Composite', tipo: 'estructural', norma: 'NFPA 1970', material: 'Composite PP / fibra de vidrio', proteccion: 'Visor retráctil interno', peso: '~1.55 kg', ideal: 'Presupuesto medio · visor retráctil', rec: false },
    { modelo: '880 Commander', tipo: 'mando', norma: 'NFPA 1970', material: 'Cuero premium dorado/plateado', proteccion: 'Visor metálico de mando', peso: '~1.85 kg', ideal: 'Oficiales y jefes de sector', rec: false },
    { modelo: '795 ARFF', tipo: 'proximidad', norma: 'NFPA 1970', material: 'Fibra de vidrio aluminizada', proteccion: 'Visor dorado reflectante', peso: '~1.70 kg', ideal: 'Aeropuertos ARFF y combustibles', rec: false },
    { modelo: 'Wildland', tipo: 'forestal', norma: 'NFPA 1950', material: 'ABS ligero ventilado', proteccion: 'Malla FR abatible', peso: '~0.55 kg', ideal: 'Incendio vegetal e interfaz', rec: false },
  ],
  comparativaNote:
    '* Cascos estructurales y de mando certificados NFPA 1970; proximidad NFPA 1970; forestal NFPA 1950. Pesos aproximados según configuración.',
  guia: [
    { n: '01', t: 'Define el escenario dominante: estructural en edificios → N6A / 1010 / 1044; aproximación a combustible → 795 ARFF; incendio vegetal → Wildland; mando → 880 Commander. Este primer paso reduce a la mitad las opciones.' },
    { n: '02', t: 'Elige el material según identidad y carga de trabajo: cuero patrimonial (N6A, 880) para tradición y calor radiante, o composite moderno (1010, 1044, 990) para menor peso, perfil bajo y visor retráctil.' },
    { n: '03', t: 'Personaliza el escudo frontal con emblema, compañía y rango de tu corporación, y configura visor o pantalla, lámpara y módulos de comunicación.' },
    { n: '04', t: 'Verifica compatibilidad con tu SCBA (MSA G1, Dräger PSS 7000, 3M Scott) y asegura refacciones originales —visor, suspensión, escudo— y el cuidado del cuero para la vida útil NFPA 1850.' },
  ],
  segmentosIntro:
    'Cairns es la primera opción de los cuerpos que valoran el legado del casco de cuero y el escudo frontal de identidad, sin renunciar a opciones composite modernas — con respaldo MSA Safety, trazabilidad NFPA 1850 y soporte en los 32 estados.',
  segmentos: [
    { num: '01', tipo: 'estructural', titulo: 'Corporaciones con Identidad Histórica', desc: 'Cuerpos con tradición y escudo frontal institucional. El N6A Houston en cuero, el 660C clásico y el 880 Commander de mando conservan la silueta y el material que definen al servicio de bomberos americano.', modelos: 'N6A Houston · 660C · 880 Commander' },
    { num: '02', tipo: 'estructural', titulo: 'Departamentos Metropolitanos Modernos', desc: 'Operaciones de alta frecuencia que privilegian menor peso, perfil bajo y visor retráctil. El 1010 Composite y el 1044 Invader llevan el ADN Cairns a materiales contemporáneos con mayor visión periférica.', modelos: '1010 Composite · 1044 Invader' },
    { num: '03', tipo: 'proximidad', titulo: 'Aeropuertos ARFF e Industria', desc: 'AICM, GDL, MTY y aeropuertos regionales, refinerías y procesos calientes. El 795 ARFF cumple NFPA 1970 Proximity con cubierta aluminizada y visor dorado para aproximación a fuegos de combustible.', modelos: '795 ARFF' },
    { num: '04', tipo: 'forestal', titulo: 'Brigadas Forestales / Protección Civil', desc: 'CONAFOR, brigadas de interfaz urbano-forestal y Protección Civil. El Cairns Wildland cumple NFPA 1950 con el menor peso de la línea, ventilación activa y compatibilidad con capucha forestal.', modelos: 'Cairns Wildland' },
  ],
  faqs: [
    { q: '¿Casco de cuero N6A Houston o composite moderno (1010 / 1044 Invader)?', a: 'El N6A Houston en cuero es el casco patrimonial del bombero americano: máxima resistencia al calor radiante, ala trasera extendida y el escudo frontal que define la identidad del cuerpo — la elección de las corporaciones con tradición. Los modelos composite (1010 y 1044 Invader) llevan el ADN Cairns a materiales modernos: hasta un 20% menos de peso que el cuero, visor retráctil integrado y perfil bajo para mayor visión periférica. Todos certifican NFPA; la decisión es de identidad y de carga de trabajo del cuerpo.' },
    { q: '¿Por qué el N6A Houston es el casco más reconocible del servicio en América?', a: 'Cairns fabrica cascos de bombero desde 1836 — es la marca más antigua del continente. El N6A Houston hereda casi dos siglos de la silueta de cuero con ala trasera larga, el águila (eagle front holder) y el escudo frontal serigrafiable, elementos que se volvieron el símbolo visual del servicio de bomberos. No es nostalgia: el cuero curtido y moldeado a alta temperatura sigue ofreciendo una resistencia al calor radiante de referencia, ahora bajo certificación NFPA 1970 vigente.' },
    { q: '¿El casco de cuero cumple la misma certificación NFPA que el composite?', a: 'Sí. Tanto el N6A Houston de cuero como los modelos composite y de fibra de vidrio están certificados por laboratorio acreditado bajo NFPA 1970 (estructural) o NFPA 1950 (forestal), con número de serie verificable con fábrica. El material cambia el peso, la estética y el mantenimiento, no el nivel de protección exigido por la norma. El cuero requiere un cuidado específico (acondicionado periódico) que documentamos en la guía de la marca.' },
    { q: '¿El escudo frontal se personaliza con el emblema y el rango de mi corporación?', a: 'Sí. El escudo frontal (front shield) Cairns es intercambiable y serigrafiable con el nombre del cuerpo, número de estación, compañía y rango. Para oficiales, la línea 880 Commander se entrega en cuero premium dorado (jefe de sector) o plateado (comandante) de serie, con suspensión Boston Leather. Cotizamos el escudo personalizado junto con el casco.' },
    { q: '¿Cada cuánto se retira del servicio un casco Cairns y cómo se cuida el cuero?', a: 'El retiro se rige por las instrucciones de Cairns y la inspección periódica conforme a NFPA 1850: retiro inmediato ante impacto severo, grieta, deformación o degradación de la suspensión. El cuero, además, requiere acondicionado periódico y secado a la sombra para conservar su integridad. Te facilitamos la guía de inspección, cuidado y retiro de la marca y, en cada compra, la etiqueta de trazabilidad con número de serie.' },
    { q: '¿Entregan ficha técnica y certificado de conformidad para licitación pública?', a: 'Sí. Cada casco Cairns incluye el certificado de conformidad del fabricante, la ficha técnica con número de modelo y lote, y el reporte del laboratorio acreditado. Para concursos públicos (CompraNet, IMSS, Pemex, gobiernos estatales) generamos el manifiesto de cumplimiento por partida con identificación del estándar exacto (NFPA 1970-2018, NFPA 1971 Proximity o NFPA 1977-2021).' },
  ],
  ctaKicker: 'El casco icónico de América · desde 1836',
  ctaTitleHtml: 'Legado en cuero.<br/>Certificación NFPA.',
  waQuote: 'Hola, quiero cotizar cascos Cairns NFPA 1970.',
};

/* ── Exports ───────────────────────────────────────────────────────────────── */
export const cascosBrands: CascoBrand[] = [msaGallet, bullard, cairns];

export function cascoBrandBySlug(slug: string): CascoBrand | undefined {
  return cascosBrands.find((b) => b.slug === slug);
}

/** Cross-links a las otras marcas de cascos (URL específica) para la página dada. */
export function otrasMarcasCascos(slug: string): { label: string; desc: string; href: string }[] {
  const desc: Record<string, string> = {
    'msa-gallet': 'Estilo europeo integral · F1 XF · visor retráctil · NFPA 1970',
    'bullard': 'Estilo americano de ala completa · USTM · TIC · NFPA 1970',
    'cairns': 'Cuero icónico desde 1836 · N6A Houston · NFPA 1970',
  };
  return cascosBrands
    .filter((b) => b.slug !== slug)
    .map((b) => ({ label: b.brandLabel, desc: desc[b.slug] ?? b.eyebrow, href: `/productos/cascos-nfpa/${b.slug}` }));
}
