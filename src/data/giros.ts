/**
 * Taxonomía de giros del directorio nacional de empresas.
 *
 * Fuente única para:
 *   • /empresas/[giro] y /empresas/[giro]/[estado]  (rutas)
 *   • cards, filtros y buscador del home y del hub /empresas
 *   • metadatos de render (color, ícono, normas)
 *
 * El SCIAN no tiene clase para este sector: la clasificación es editorial,
 * a partir de palabra clave + clase de actividad del DENUE (ver vault
 * 02 - Directorio / Dimensionamiento del DENUE).
 */

export type GiroKey =
  | 'venta-equipo'
  | 'equipos-contra-incendio'
  | 'extintores'
  | 'sistemas-ci'
  | 'capacitacion';

export interface Giro {
  slug: GiroKey;
  /** Nombre completo para h1 y títulos */
  label: string;
  /** Nombre corto para chips y navegación */
  labelCorto: string;
  /** Sustantivo plural para frases: "Empresas de {sustantivo} en Jalisco" */
  sustantivo: string;
  /** Meta description base (≤150 chars, se completa con el estado) */
  description: string;
  /** Color de acento */
  color: string;
  /** Path interno de un SVG 24×24 con stroke=currentColor */
  icon: string;
  /** Imagen de la card del giro (home y hub). 640×640 mínimo; se recorta a 16:10 */
  imagen: string;
  imagenAlt: string;
  /** Frase de valor para la card (≤ 110 caracteres) */
  claim: string;
  /** Párrafos SEO de la landing nacional del giro */
  intro: string[];
  /** Normas de referencia del giro */
  normas: string[];
  /** Especialidades (sub-giro) con etiqueta legible */
  especialidades: Record<string, string>;
  /** Slugs de categorías de producto relacionadas (categories.ts) */
  categoriasRelacionadas: string[];
  /** Slugs de servicios relacionados (services.ts) */
  serviciosRelacionados: string[];
}

export const giros: Giro[] = [
  {
    slug: 'venta-equipo',
    label: 'Venta de Equipo para Bomberos y EPP',
    labelCorto: 'Equipo y EPP',
    sustantivo: 'equipo para bomberos y EPP',
    description: 'Distribuidores de equipo para bomberos, EPP estructural, SCBA, cascos, herramientas de rescate y seguridad industrial',
    color: '#F75000',
    icon: `<path stroke-linecap="round" stroke-linejoin="round" d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z"/>`,
    imagen: '/images/categorias/sistemas-ci.avif',
    imagenAlt: 'Equipo de protección personal para bombero: chaquetón, casco, guantes, botas y radio dispuestos sobre una superficie',
    claim: 'Distribuidores de trajes NFPA, cascos, SCBA, herramientas de rescate y EPP industrial.',
    intro: [
      'Distribuidores y fabricantes de equipo de protección personal para bomberos, brigadas industriales y protección civil: trajes estructurales, cascos, equipos de respiración autónoma, herramientas de rescate, cámaras térmicas, equipo HAZMAT y EPP de seguridad industrial.',
      'El directorio agrupa a las empresas que abastecen a cuerpos de bomberos municipales, brigadas de planta, aeropuertos y organismos de protección civil en los 32 estados. Cada ficha indica ubicación, giro y especialidades, con su fuente de origen citada.',
    ],
    normas: ['NFPA 1970', 'NFPA 1950', 'NFPA 1990', 'NFPA 1936', 'NFPA 1930', 'NOM-002-STPS-2010', 'NOM-017-STPS-2008'],
    especialidades: {
      'epp-industrial': 'EPP y seguridad industrial',
      'uniformes-y-calzado': 'Uniformes y calzado de seguridad',
      'epp-estructural': 'EPP estructural para bomberos',
      'scba': 'Equipos de respiración autónoma',
      'herramientas-rescate': 'Herramientas de rescate',
      'camaras-termicas': 'Cámaras térmicas',
      'hazmat': 'Equipo HAZMAT',
    },
    categoriasRelacionadas: ['trajes-bombero', 'cascos-nfpa', 'equipos-scba', 'herramientas-rescate', 'camaras-termicas', 'hazmat'],
    serviciosRelacionados: ['licitaciones'],
  },
  {
    slug: 'equipos-contra-incendio',
    label: 'Equipos Contra Incendios',
    labelCorto: 'Equipos contra incendios',
    sustantivo: 'equipos contra incendios',
    description: 'Distribuidores de equipos contra incendios en México: monitores, boquillas, mangueras, válvulas, conexiones, gabinetes e hidrantes con certificación UL y FM',
    color: '#FF6B26',
    icon: `<path stroke-linecap="round" stroke-linejoin="round" d="M3 12h4l2-3 3 6 2-4h7M5 12v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-6M9 6V4h6v2"/>`,
    imagen: '/images/categorias/sistemas-ci.avif',
    imagenAlt: 'Equipo de red hidráulica contra incendio: gabinete con manguera, boquilla y válvula listos para operar',
    claim: 'Monitores, boquillas, mangueras, válvulas, conexiones y gabinetes con certificación UL y FM.',
    intro: [
      'Distribuidores y proveedores de equipos contra incendios para la red hidráulica: monitores y cañones de alto caudal, boquillas y chiflones, mangueras de ataque y succión, válvulas OS&Y y de mariposa, conexiones de bronce con toma siamesa, gabinetes e hidrantes. Es el material que va de la toma de agua a la descarga, y el que revisa Protección Civil y la aseguradora cuando piden el expediente de la instalación.',
      'Es un oficio distinto al de quien diseña e instala el sistema y al de quien vende equipo de protección personal: aquí el proveedor suministra la pieza, la respalda con ficha técnica del fabricante y acredita su certificación UL Listed o FM Approved. Trabajan bajo NFPA 13, 14, 24 y 1964, y abastecen a constructoras, instaladores, plantas industriales, brigadas y dependencias.',
    ],
    normas: ['NFPA 13', 'NFPA 14', 'NFPA 24', 'NFPA 25', 'NFPA 1964', 'NOM-002-STPS-2010'],
    especialidades: {
      'monitores': 'Monitores y cañones contra incendio',
      'boquillas': 'Boquillas y chiflones',
      'mangueras': 'Mangueras contra incendio',
      'valvulas': 'Válvulas para red contra incendio',
      'conexiones-herrajes': 'Conexiones, herrajes y tomas siamesas',
      'gabinetes-hidrantes': 'Gabinetes e hidrantes',
    },
    categoriasRelacionadas: ['sistemas-ci', 'extintores'],
    serviciosRelacionados: ['instalacion-sistemas-ci', 'mantenimiento', 'licitaciones'],
  },
  {
    slug: 'extintores',
    label: 'Extintores: Venta, Recarga y Mantenimiento',
    labelCorto: 'Extintores',
    sustantivo: 'extintores',
    description: 'Empresas de venta, recarga, mantenimiento y prueba hidrostática de extintores conforme a NOM-154-SCFI y NOM-002-STPS',
    color: '#E10A1A',
    icon: `<path stroke-linecap="round" stroke-linejoin="round" d="M9 5a3 3 0 0 1 6 0v1H9V5zM8 7h8a1 1 0 0 1 1 1v12a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V8a1 1 0 0 1 1-1zM12 2v3M15 8l4-3"/>`,
    // TODO Frank: generar foto de extintores (PQS/CO2 en fila o recarga en taller). Placeholder temporal.
    imagen: '/images/categorias/drones-emergencia.avif',
    imagenAlt: 'Bombero frente a una estructura en llamas con la unidad de bomberos detrás',
    claim: 'Venta, recarga, mantenimiento y prueba hidrostática conforme a NOM-154-SCFI y NOM-002-STPS.',
    intro: [
      'Empresas dedicadas a la venta, recarga, mantenimiento y prueba hidrostática de extintores portátiles y móviles: polvo químico seco ABC, CO₂, agua, espuma AFFF, agentes limpios y tipo K para cocinas.',
      'Es el giro más capilar del sector: prácticamente cada ciudad del país cuenta con al menos una recargadora. La NOM-002-STPS-2010 obliga a los centros de trabajo a mantener sus extintores con recarga y verificación periódica, y la NOM-154-SCFI-2005 regula el servicio y el collar de garantía.',
    ],
    normas: ['NOM-154-SCFI-2005', 'NOM-002-STPS-2010', 'NOM-100-SCFI-1994', 'NFPA 10'],
    especialidades: {
      'recarga-y-mantenimiento': 'Recarga y mantenimiento',
      'venta-de-extintores': 'Venta de extintores',
      'prueba-hidrostatica': 'Prueba hidrostática',
      'senalizacion': 'Señalización de seguridad',
    },
    categoriasRelacionadas: ['extintores'],
    serviciosRelacionados: ['mantenimiento', 'auditoria-seguridad'],
  },
  {
    slug: 'sistemas-ci',
    label: 'Sistemas Contra Incendio: Ingeniería e Instalación',
    labelCorto: 'Sistemas CI',
    sustantivo: 'sistemas contra incendio',
    description: 'Empresas de ingeniería, instalación y mantenimiento de sistemas contra incendio: rociadores, detección, redes hidráulicas y agentes limpios',
    color: '#4A9ED4',
    icon: `<path stroke-linecap="round" stroke-linejoin="round" d="M12 3v6M8 9h8M12 9c0 4-4 5-4 9a4 4 0 0 0 8 0c0-4-4-5-4-9zM5 6h14"/>`,
    // TODO Frank: generar foto de rociadores / red hidráulica / tablero de detección. Placeholder temporal.
    imagen: '/images/categorias/extintores.avif',
    imagenAlt: 'Equipo contra incendio dispuesto en un taller: chaquetón, casco, equipo de respiración, manguera y herramientas',
    claim: 'Ingeniería, instalación y mantenimiento de rociadores, detección, redes hidráulicas y agentes limpios.',
    intro: [
      'Empresas de ingeniería, proyecto, instalación y mantenimiento de sistemas fijos de protección contra incendio: rociadores automáticos, detección y alarma, redes hidráulicas con bombas listadas, hidrantes, gabinetes y sistemas de supresión con agentes limpios.',
      'Trabajan bajo NFPA 13, NFPA 72, NFPA 20 y NFPA 2001, con memoria de cálculo hidráulico exigida por aseguradoras y Protección Civil. Son el proveedor natural de plantas industriales, centros de datos, hospitales, hoteles y edificios de gran altura.',
    ],
    normas: ['NFPA 13', 'NFPA 72', 'NFPA 20', 'NFPA 25', 'NFPA 2001', 'NOM-002-STPS-2010'],
    especialidades: {
      'rociadores': 'Rociadores automáticos',
      'deteccion-y-alarma': 'Detección y alarma',
      'red-hidraulica': 'Red hidráulica y bombas',
      'agentes-limpios': 'Agentes limpios',
      'espuma': 'Sistemas de espuma',
    },
    categoriasRelacionadas: ['sistemas-ci'],
    serviciosRelacionados: ['instalacion-sistemas-ci', 'mantenimiento'],
  },
  {
    slug: 'capacitacion',
    label: 'Capacitación, Brigadas y Consultoría NOM-002',
    labelCorto: 'Capacitación',
    sustantivo: 'capacitación y consultoría',
    description: 'Centros de capacitación de brigadas contra incendio, consultoría NOM-002-STPS, DC-3 y asesoría en protección civil',
    color: '#34D399',
    icon: `<path stroke-linecap="round" stroke-linejoin="round" d="M12 3 2 8l10 5 10-5-10-5zM6 10.5V16c0 1.5 3 3 6 3s6-1.5 6-3v-5.5M22 8v6"/>`,
    imagen: '/images/industrias/brigadas-industriales.avif',
    imagenAlt: 'Bombero mexicano con casco y chaquetón sonriendo frente a las unidades de su estación',
    claim: 'Formación de brigadas, constancias DC-3, simulacros y consultoría para cumplir la NOM-002-STPS.',
    intro: [
      'Centros de capacitación, instructores y consultores especializados en formación de brigadas contra incendio, cumplimiento de la NOM-002-STPS-2010, constancias DC-3 ante la STPS, simulacros documentados y programas internos de protección civil.',
      'La NOM-002-STPS obliga a todo centro de trabajo a contar con brigadistas capacitados y a documentar su formación. Este giro reúne a quienes imparten esa capacitación y a quienes asesoran en la integración del expediente ante inspecciones de la STPS y Protección Civil.',
    ],
    normas: ['NOM-002-STPS-2010', 'NOM-019-STPS-2011', 'NFPA 1001', 'NFPA 600', 'DC-3 STPS'],
    especialidades: {
      'brigadas': 'Formación de brigadas',
      'consultoria-nom-002': 'Consultoría NOM-002',
      'dc-3': 'Constancias DC-3',
      'simulacros': 'Simulacros y planes de emergencia',
      'rescate-tecnico': 'Rescate técnico',
    },
    categoriasRelacionadas: ['extintores', 'trajes-bombero'],
    serviciosRelacionados: ['capacitacion', 'brigadas-empresariales', 'auditoria-seguridad'],
  },
];

export const giroKeys = giros.map((g) => g.slug) as [GiroKey, ...GiroKey[]];

export function giroPorSlug(slug: string): Giro | undefined {
  return giros.find((g) => g.slug === slug);
}

export const giroMap: Record<GiroKey, Giro> = Object.fromEntries(giros.map((g) => [g.slug, g])) as Record<GiroKey, Giro>;

/** Niveles comerciales de listing — independiente de `confianza` (veracidad editorial) */
export type PlanKey = 'basico' | 'verificado' | 'destacado';
export const planConfig: Record<PlanKey, { label: string; color: string; bgColor: string; orden: number }> = {
  destacado:  { label: 'Destacado',  color: '#F5A623', bgColor: 'rgba(245,166,35,0.12)', orden: 0 },
  verificado: { label: 'Verificado', color: '#34D399', bgColor: 'rgba(52,211,153,0.10)', orden: 1 },
  basico:     { label: 'Básico',     color: '#4A7599', bgColor: 'rgba(74,117,153,0.12)', orden: 2 },
};

/** Niveles de confianza editorial — mismos valores que el directorio de estaciones */
export type ConfianzaKey = 'alta' | 'media' | 'baja';
export const confianzaConfig: Record<ConfianzaKey, { label: string; color: string; bgColor: string; descripcion: string }> = {
  alta:  { label: 'Datos verificados', color: '#34D399', bgColor: 'rgba(52,211,153,0.1)',  descripcion: 'Contacto y giro confirmados contra fuente oficial y sitio propio.' },
  media: { label: 'Datos confirmados', color: '#F5A623', bgColor: 'rgba(245,166,35,0.1)',  descripcion: 'Existencia y giro confirmados; contacto pendiente de verificación.' },
  baja:  { label: 'Registro público',  color: '#94A3B8', bgColor: 'rgba(148,163,184,0.12)', descripcion: 'Tomado del registro público del DENUE (INEGI). Pendiente de verificación directa.' },
};

/**
 * Política de indexación de fichas L4.
 * Mientras sea `false`, las fichas de plan básico con confianza baja (registro público
 * DENUE sin verificar) llevan noindex y quedan fuera del sitemap: se indexan las
 * L1–L3 y solo las fichas reclamadas o verificadas. Evita que miles de páginas
 * delgadas afecten al dominio, y da a las empresas una razón para verificar.
 * Cambiar a `true` para indexar todo el directorio.
 */
export const INDEXAR_FICHAS_BASICAS = true;
