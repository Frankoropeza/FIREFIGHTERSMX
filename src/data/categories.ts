export interface Category {
  slug: string;
  label: string;
  norm: string;
  /** Meta description (≤160 caracteres) */
  description: string;
  /** Párrafos de introducción SEO de la página de categoría */
  intro: string[];
  /** Modelos / líneas destacadas */
  items: { name: string; detail: string }[];
  /** Categoría del array featuredProducts (data/products.ts) para listar productos */
  productCategory?: string;
}

/**
 * Categorías del catálogo — fuente única para:
 * - Páginas /productos/[categoria]
 * - Navegación y grids del home
 * NOTA: trajes-bombero tiene página estática propia (src/pages/productos/trajes-bombero/).
 */
export const categories: Category[] = [
  {
    slug: 'cascos-nfpa',
    label: 'Cascos NFPA',
    norm: 'NFPA 1971 · 1977',
    description: 'Cascos para bomberos certificados NFPA 1971 y 1977 en México: MSA Gallet, Bullard y Cairns. Estructurales, forestales y de rescate. Cotización en 24 h.',
    intro: [
      'El casco es la primera línea de protección craneal en combate estructural. Todos los modelos que distribuimos están certificados bajo NFPA 1971:2018 (estructural) o NFPA 1977 (forestal) por laboratorios acreditados, con número de serie verificable con fábrica.',
      'Manejamos configuraciones con protector facial integrado, goggles, lámparas y soportes para cámara térmica. Stock permanente de los modelos más demandados con entrega en 24–48 h en CDMX.',
    ],
    items: [
      { name: 'MSA Gallet F1 XF', detail: 'Casco europeo integral con visor retráctil y protección nucal' },
      { name: 'Bullard USTM / USTERM', detail: 'Casco tradicional americano, fibra de vidrio termoendurecida' },
      { name: 'Cairns N6A Houston', detail: 'Casco de cuero clásico para cuerpos con tradición' },
      { name: 'Cascos forestales NFPA 1977', detail: 'Ligeros, ventilados, compatibles con goggles y capucha' },
    ],
    productCategory: 'Cascos NFPA',
  },
  {
    slug: 'equipos-scba',
    label: 'Equipos SCBA',
    norm: 'NFPA 1981 · NIOSH',
    description: 'Equipos de respiración autónoma SCBA certificados NFPA 1981 y NIOSH: MSA G1, Dräger PSS y 3M Scott Air-Pak. Cilindros 30/45/60 min. Servicio autorizado.',
    intro: [
      'El equipo de respiración autónoma es el componente más crítico — y el más regulado — del EPP de un bombero. Distribuimos SCBA certificados NFPA 1981 con aprobación NIOSH CBRN, en configuraciones de 30, 45 y 60 minutos con cilindros de fibra de carbono de 4,500 psi.',
      'Además de la venta, somos servicio técnico autorizado: prueba hidrostática de cilindros, mantenimiento de reguladores, pruebas de flujo anuales y refacciones originales. Tu inversión queda protegida durante toda la vida útil del equipo.',
    ],
    items: [
      { name: 'MSA G1 SCBA', detail: 'Electrónica integrada, telemetría opcional, EOSTI integrado' },
      { name: 'Dräger PSS 7000', detail: 'Arnés ergonómico profesional para uso intensivo' },
      { name: '3M Scott Air-Pak NxG7', detail: 'Plataforma modular con Pak-Tracker localizador' },
      { name: 'Cilindros y refacciones', detail: 'Cilindros 4500 psi, máscaras, reguladores y repuestos originales' },
    ],
    productCategory: 'Equipos SCBA',
  },
  {
    slug: 'herramientas-rescate',
    label: 'Herramientas de Rescate',
    norm: 'NFPA 1936',
    description: 'Herramientas hidráulicas de rescate NFPA 1936: cizallas, separadores y arietes Holmatro. Rescate vehicular y estructural. Demostración y capacitación incluidas.',
    intro: [
      'Para extracción vehicular y rescate urbano, distribuimos la línea completa Holmatro certificada NFPA 1936: cizallas, separadores, herramientas combinadas y arietes telescópicos, en versiones con manguera y batería (Pentheon).',
      'Cada venta institucional incluye demostración en sitio y capacitación básica de operación. Ofrecemos también mantenimiento preventivo anual con refacciones originales para mantener la certificación del equipo.',
    ],
    items: [
      { name: 'Holmatro SPR 4250 SC', detail: 'Separador de alto tonelaje para vehículos modernos' },
      { name: 'Holmatro CT 4260 HCS', detail: 'Herramienta combinada corte/separación' },
      { name: 'Arietes telescópicos', detail: 'Empuje de tablero y estabilización de cargas' },
      { name: 'Línea Pentheon (batería)', detail: 'Sin mangueras: despliegue en segundos, sin unidad de poder' },
    ],
    productCategory: 'Herramientas Rescate',
  },
  {
    slug: 'extintores',
    label: 'Extintores',
    norm: 'NOM-154-SCFI · NFPA 10',
    description: 'Extintores certificados NOM-154-SCFI y NFPA 10: PQS ABC, CO₂, Tipo K y agente limpio. Venta, recarga y mantenimiento con collar de garantía en México.',
    intro: [
      'Distribuimos extintores portátiles y móviles certificados NOM-154-SCFI para todo tipo de riesgo: polvo químico seco ABC para uso general, CO₂ para tableros y electrónica, Tipo K para cocinas industriales y agentes limpios para centros de datos.',
      'El servicio no termina en la venta: recargamos todos los tipos de agente con collar de garantía, etiqueta de inspección vigente y reporte para tu expediente de Protección Civil, conforme al programa anual que exige la NOM-002-STPS.',
    ],
    items: [
      { name: 'PQS ABC 4.5 / 6 / 9 kg', detail: 'El estándar para oficinas, comercios y bodegas' },
      { name: 'CO₂ 4.5 / 10 kg Clase BC', detail: 'Sin residuo: tableros eléctricos, servidores, laboratorios' },
      { name: 'Tipo K 6 L', detail: 'Aceites y grasas en cocinas industriales' },
      { name: 'Agente limpio HFC-227ea', detail: 'Protección de equipo electrónico sensible' },
    ],
    productCategory: 'Extintores',
  },
  {
    slug: 'sistemas-ci',
    label: 'Sistemas Contra Incendio',
    norm: 'NFPA 13 · 72 · 2001',
    description: 'Sistemas contra incendio NFPA: rociadores, detección y alarma, supresión con agente limpio FM-200/Novec. Diseño, instalación y memoria de cálculo en México.',
    intro: [
      'Diseñamos e instalamos sistemas fijos de protección: rociadores automáticos NFPA 13, detección y alarma NFPA 72 con tableros FACP, y supresión por agente limpio NFPA 2001 (FM-200, Novec 1230) para activos críticos.',
      'Cada proyecto incluye memoria de cálculo hidráulico, planos as-built, puesta en marcha documentada y capacitación al personal de mantenimiento — el expediente completo que pide tu aseguradora y la autoridad.',
    ],
    items: [
      { name: 'Rociadores Tyco / Viking', detail: 'Diseño NFPA 13 por densidad de riesgo' },
      { name: 'Paneles Honeywell / Notifier', detail: 'Detección direccionable NFPA 72' },
      { name: 'FM-200 / Novec 1230', detail: 'Supresión limpia para data centers y archivos' },
      { name: 'Redes hidráulicas y bombas', detail: 'Bombas certificadas y tableros NFPA 20' },
    ],
    productCategory: 'Sistemas CI',
  },
  {
    slug: 'camaras-termicas',
    label: 'Cámaras Térmicas',
    norm: 'NFPA 1801',
    description: 'Cámaras térmicas para bomberos certificadas NFPA 1801: FLIR, MSA Evolution y Bullard. Búsqueda y rescate, sobrehaul y HAZMAT. Demostración sin costo.',
    intro: [
      'La imagen térmica reduce dramáticamente los tiempos de búsqueda y localización de víctimas. Manejamos cámaras certificadas NFPA 1801 — el estándar que garantiza legibilidad, durabilidad e interfaz uniforme en condiciones de combate.',
      'Desde cámaras personales de bolsillo hasta equipos de mando con telemetría, te asesoramos según presupuesto y uso: estructural, HAZMAT, inspección industrial o búsqueda y rescate.',
    ],
    items: [
      { name: 'FLIR K45 / K65', detail: 'Línea estructural con FSX y grabación' },
      { name: 'MSA Evolution 6000', detail: 'Integración con SCBA G1 y telemetría' },
      { name: 'Bullard TXS / NXT', detail: 'Ligeras, intuitivas, alta resolución' },
      { name: 'Cámaras personales', detail: 'Una cámara por bombero: decisión táctica inmediata' },
    ],
    productCategory: 'Cámaras Térmicas',
  },
  {
    slug: 'hazmat',
    label: 'Equipos HAZMAT',
    norm: 'NFPA 1991 · 1992',
    description: 'Trajes HAZMAT Nivel A y B certificados NFPA 1991/1992, detección multi-gas y descontaminación. Equipamiento para materiales peligrosos en México.',
    intro: [
      'Para respuesta a materiales peligrosos equipamos brigadas con trajes encapsulados Nivel A (NFPA 1991), trajes salpicadura Nivel B/C (NFPA 1992), detección multi-gas, kits de descontaminación y sellado de fugas.',
      'El equipo HAZMAT exige compatibilidad química documentada: te entregamos las tablas de permeación del fabricante y asesoramos la selección según las sustancias específicas de tu operación — crítico para refinerías, química y logística.',
    ],
    items: [
      { name: 'Nivel A encapsulado', detail: 'Protección total a vapor con SCBA interno' },
      { name: 'Nivel B splash', detail: 'Protección a salpicadura con SCBA externo' },
      { name: 'DuPont Tychem 10000', detail: 'Barrera química de amplio espectro' },
      { name: 'Detección multi-gas', detail: 'O₂, LEL, CO, H₂S y tóxicos específicos' },
    ],
    productCategory: 'Equipos HAZMAT',
  },
  {
    slug: 'drones-emergencia',
    label: 'Drones de Emergencia',
    norm: 'Certificación AFAC',
    description: 'Drones para bomberos y protección civil: térmicos DJI Matrice, búsqueda y rescate, evaluación de incendios. Capacitación de piloto y trámite AFAC incluidos.',
    intro: [
      'El dron se volvió herramienta estándar de la respuesta a emergencias: evaluación aérea de incendios estructurales y forestales, búsqueda de personas con cámara térmica, y reconocimiento HAZMAT sin exponer personal.',
      'Entregamos soluciones completas: aeronave con cámara térmica radiométrica, baterías de ciclo extendido, capacitación de piloto y acompañamiento en el registro ante AFAC para operación institucional.',
    ],
    items: [
      { name: 'DJI Matrice con térmica', detail: 'Plataforma institucional con cámara radiométrica' },
      { name: 'Drones compactos térmicos', detail: 'Despliegue en menos de 2 minutos' },
      { name: 'Accesorios de misión', detail: 'Altavoces, luces de búsqueda, lanzadores' },
      { name: 'Capacitación y AFAC', detail: 'Formación de piloto y registro institucional' },
    ],
  },
];
