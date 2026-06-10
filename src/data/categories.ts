export interface Category {
  slug: string;
  label: string;
  norm: string;
  /** Meta description (≤160 caracteres) */
  description: string;
  /** Descripción corta para cards (1 línea) */
  shortDesc: string;
  /** Color de acento de la card */
  accent: string;
  /** Ícono SVG inline de la card */
  icon: string;
  /** Párrafos de introducción SEO de la página de categoría */
  intro: string[];
  /** Modelos / líneas destacadas */
  items: { name: string; detail: string }[];
  /** Categoría del array featuredProducts (data/products.ts) para listar productos */
  productCategory?: string;
  /** Módulo destacado (2 columnas) en el hub /productos */
  spotlight?: {
    title: string;
    highlight: string;
    paragraphs: string[];
    subsections: { name: string; detail: string }[];
    image: string;
    imageAlt: string;
  };
}

/**
 * Trajes para Bomberos tiene página estática propia
 * (src/pages/productos/trajes-bombero/) — se define aquí solo para
 * el hub /productos y el internal linking.
 */
export const trajesBombero: Category = {
  slug: 'trajes-bombero',
    shortDesc: 'Trajes estructurales y forestales certificados para protección térmica extrema.',
    accent: '#F75000',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z"/></svg>`,
  label: 'Trajes para Bomberos',
  norm: 'NFPA 1971 · 1977',
  description: 'Trajes estructurales, de proximidad y forestales certificados NFPA 1971 y 1977 en México: Globe, Lion y MSA. Tallas S–4XL con entrega en 32 estados.',
  intro: [
    'Trajes de combate estructural de 3 capas, trajes aluminizados de proximidad para ARFF y trajes forestales ligeros — todos certificados por laboratorio acreditado bajo NFPA 1971:2018 o NFPA 1977, con número de serie verificable con fábrica.',
    'Distribuimos Globe, Lion y MSA en tallas S–4XL con stock permanente en CDMX. Cada conjunto incluye ficha técnica para licitación, asesoría de tallaje y acceso al programa de inspección y mantenimiento NFPA 1851.',
  ],
  items: [
    { name: 'Globe GX-7', detail: 'Estructural premium con Crosstech y PBI/Kevlar' },
    { name: 'Lion TechGen', detail: 'Estructural NFPA 1971 de uso intensivo' },
    { name: 'Trajes de proximidad', detail: 'Aluminizados para ARFF y exposición radiante' },
    { name: 'Trajes forestales NFPA 1977', detail: 'Ligeros y transpirables para incendio vegetal' },
  ],
  productCategory: 'Trajes Bombero',
  spotlight: {
    title: 'Trajes para Bomberos certificados',
    highlight: 'NFPA 1971 y NFPA 1977',
    paragraphs: [
      'El traje estructural es la última barrera entre el bombero y el fuego. Distribuimos conjuntos completos —chaquetón y pantalón— certificados por laboratorio acreditado bajo NFPA 1971:2018, con número de serie verificable con fábrica y ficha técnica lista para licitación o auditoría STPS.',
      'Manejamos las líneas Globe, Lion y MSA en tallas S–4XL, con stock permanente de las configuraciones más demandadas y entrega en 24–48 horas en CDMX. Cada compra incluye asesoría de tallaje y el programa de inspección y mantenimiento conforme a NFPA 1851.',
    ],
    subsections: [
      { name: 'Trajes estructurales', detail: 'Combate interior de edificios. 3 capas: tejido exterior PBI/Nomex NXT, barrera de humedad Crosstech y forro térmico. Costuras de doble aguja reforzadas y trim reflejante 3M Scotchlite.' },
      { name: 'Trajes de proximidad', detail: 'Aluminizados para exposición radiante extrema: ARFF en aeropuertos, refinerías y fundiciones. Reflejan hasta el 90 % del calor radiante.' },
      { name: 'Trajes forestales NFPA 1977', detail: 'Ligeros y transpirables para incendio vegetal: camisola y pantalón en Nomex IIIA, diseñados para jornadas largas con golpe de calor mínimo.' },
      { name: 'Tallaje, stock y mantenimiento', detail: 'Tallas S–4XL con asesoría de ajuste, stock permanente en CDMX y programa de inspección avanzada, lavado técnico y reparación certificada NFPA 1851.' },
    ],
    image: '/images/categorias/trajes-bombero.svg',
    imageAlt: 'Ilustración técnica de traje estructural para bombero certificado NFPA 1971 con casco y bandas reflejantes',
  },
};

/**
 * Categorías del catálogo — fuente única para:
 * - Páginas /productos/[categoria]
 * - Hub /productos y grids del home
 */
export const categories: Category[] = [
  {
    slug: 'cascos-nfpa',
    shortDesc: 'Cascos de combate y forestales con protección facial integrada y suspensión avanzada.',
    accent: '#F75000',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M2 17a10 10 0 0 1 20 0"/><path d="M2 17h20v3H2z"/><path d="M12 7v2"/></svg>`,
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
    spotlight: {
      title: 'Cascos para Bomberos certificados',
      highlight: 'NFPA 1971 y NFPA 1977',
      paragraphs: [
        'El casco protege contra impacto, penetración, calor radiante y descarga eléctrica — y la NFPA 1971:2018 exige que cada componente lo demuestre en laboratorio acreditado. Distribuimos MSA Gallet, Bullard y Cairns con certificado de conformidad, número de serie verificable y ficha técnica lista para licitación.',
        'Te asesoramos en la configuración correcta según tu operación: protector facial o goggles, lámpara integrada, soporte para cámara térmica y protección nucal. Stock permanente de los modelos más demandados con entrega en 24–48 horas en CDMX.',
      ],
      subsections: [
        { name: 'Estilo europeo integral', detail: 'MSA Gallet F1 XF: visor retráctil interno, protección nucal integrada, módulo de lámpara y comunicación. El estándar en cuerpos metropolitanos y ARFF.' },
        { name: 'Estilo americano tradicional', detail: 'Bullard USTM/USTERM y Cairns N6A Houston: fibra de vidrio termoendurecida o cuero, ala completa contra escurrimientos y escudo frontal personalizable.' },
        { name: 'Cascos forestales NFPA 1977', detail: 'Ligeros y ventilados para incendio vegetal: compatibles con goggles, capucha y protección auditiva en jornadas largas.' },
        { name: 'Accesorios y refacciones', detail: 'Visores, goggles, lámparas, escudos frontales personalizados y suspensiones de repuesto — todo original de fábrica para conservar la certificación.' },
      ],
      image: '/images/categorias/cascos-nfpa.svg',
      imageAlt: 'Ilustración técnica de casco estructural para bombero certificado NFPA 1971 con visor abatible y banda reflejante',
    },
  },
  {
    slug: 'equipos-scba',
    shortDesc: 'Equipos de respiración autónoma de circuito abierto para atmósferas inmediatamente peligrosas.',
    accent: '#F5A623',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="4"/><path d="M12 3v2M12 19v2M3 12h2M19 12h2"/></svg>`,
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
    spotlight: {
      title: 'Equipos SCBA certificados',
      highlight: 'NFPA 1981 y NIOSH CBRN',
      paragraphs: [
        'El equipo de respiración autónoma es la pieza más crítica del EPP: de él depende cada minuto dentro de una atmósfera IDLH. Distribuimos SCBA MSA G1, Dräger PSS 7000 y 3M Scott Air-Pak NxG7 certificados NFPA 1981 con aprobación NIOSH CBRN, con número de serie verificable y ficha técnica para licitación.',
        'Somos servicio técnico autorizado: prueba hidrostática de cilindros, pruebas de flujo anuales, mantenimiento de reguladores y refacciones originales. Tu inversión queda protegida durante toda la vida útil del equipo, con bitácora lista para auditoría.',
      ],
      subsections: [
        { name: 'Configuraciones 30 / 45 / 60 min', detail: 'Cilindros de fibra de carbono a 4,500 psi según el perfil de tu operación: estructural, industrial o HAZMAT con autonomía extendida.' },
        { name: 'Electrónica integrada', detail: 'EOSTI, alarma PASS, telemetría y localizador en cabina de mando — visibilidad total del aire y la posición de cada elemento.' },
        { name: 'Máscaras y reguladores', detail: 'Piezas faciales full-face con ajuste certificado, reguladores de presión positiva y adaptadores para comunicación.' },
        { name: 'Servicio técnico autorizado', detail: 'Prueba hidrostática, prueba de flujo anual, refacciones originales y bitácora de mantenimiento para tu expediente.' },
      ],
      image: '/images/categorias/equipos-scba.svg',
      imageAlt: 'Ilustración técnica de equipo de respiración autónoma SCBA con cilindro de 4500 psi, máscara y manómetro',
    },
  },
  {
    slug: 'herramientas-rescate',
    shortDesc: 'Sistemas hidráulicos de excarcelación y rescate vehicular de alto rendimiento.',
    accent: '#F75000',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>`,
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
    spotlight: {
      title: 'Herramientas de Rescate certificadas',
      highlight: 'NFPA 1936',
      paragraphs: [
        'En extracción vehicular cada minuto cuenta. Distribuimos la línea completa Holmatro certificada NFPA 1936: cizallas, separadores, herramientas combinadas y arietes telescópicos con fuerzas de corte de más de 1,000 kN, capaces de abrir los aceros endurecidos de los vehículos modernos.',
        'Cada venta institucional incluye demostración en sitio y capacitación básica de operación. Damos mantenimiento preventivo anual con refacciones originales para conservar la certificación y el rendimiento del equipo.',
      ],
      subsections: [
        { name: 'Cizallas y separadores', detail: 'Holmatro SPR 4250 SC y CT 4260 HCS: alto tonelaje para postes B reforzados y aceros al boro de vehículos recientes.' },
        { name: 'Línea Pentheon a batería', detail: 'Sin mangueras ni unidad de poder: despliegue en segundos, velocidad bajo carga y operación silenciosa para triage.' },
        { name: 'Arietes y estabilización', detail: 'Arietes telescópicos para empuje de tablero, calzas y puntales de estabilización para vehículos y estructuras.' },
        { name: 'Demostración y capacitación', detail: 'Demo en tu estación con escenarios reales, capacitación de operación y mantenimiento preventivo anual certificado.' },
      ],
      image: '/images/categorias/herramientas-rescate.svg',
      imageAlt: 'Ilustración técnica de separador hidráulico de rescate vehicular certificado NFPA 1936',
    },
  },
  {
    slug: 'extintores',
    shortDesc: 'Extintores portátiles y sobre ruedas para fuegos clase A, B, C, D y K.',
    accent: '#F5A623',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M15 6v-3a3 3 0 0 0-6 0v3"/><rect x="6" y="6" width="12" height="14" rx="2"/><path d="M10 11h4M12 11v4"/></svg>`,
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
    spotlight: {
      title: 'Extintores certificados',
      highlight: 'NOM-154-SCFI y NFPA 10',
      paragraphs: [
        'El extintor correcto depende del fuego que vas a combatir: PQS ABC para uso general, CO₂ para tableros y electrónica, Tipo K para cocinas industriales y agentes limpios para centros de datos. Todos nuestros equipos cumplen NOM-154-SCFI con certificado de conformidad y etiqueta de inspección vigente.',
        'El servicio no termina en la venta: recargamos todos los tipos de agente con collar de garantía y reporte para tu expediente de Protección Civil, conforme al programa anual que exige la NOM-002-STPS. También programamos la prueba hidrostática obligatoria de tus cilindros.',
      ],
      subsections: [
        { name: 'PQS ABC multiuso', detail: 'El estándar para oficinas, comercios y bodegas: 4.5, 6 y 9 kg, portátiles y móviles sobre ruedas para áreas industriales.' },
        { name: 'CO₂ y agentes limpios', detail: 'Sin residuo: tableros eléctricos, servidores y laboratorios. HFC-227ea para activos electrónicos de alto valor.' },
        { name: 'Tipo K para cocinas', detail: 'Acetato de potasio para aceites y grasas en cocinas industriales — el complemento obligado del sistema de campana.' },
        { name: 'Recarga y mantenimiento', detail: 'Recarga certificada con collar de garantía, etiqueta de inspección, reporte documental y prueba hidrostática programada.' },
      ],
      image: '/images/categorias/extintores.svg',
      imageAlt: 'Ilustración técnica de extintor PQS ABC certificado NOM-154-SCFI con manómetro y collar de garantía',
    },
  },
  {
    slug: 'sistemas-ci',
    shortDesc: 'Rociadores automáticos, paneles de detección y agentes limpios para instalaciones críticas.',
    accent: '#34D399',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M12 2a10 10 0 1 0 0 20A10 10 0 0 0 12 2z"/><path d="M8 12h8M12 8v8"/></svg>`,
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
    spotlight: {
      title: 'Sistemas Contra Incendio',
      highlight: 'NFPA 13, 72 y 2001',
      paragraphs: [
        'Un sistema fijo bien diseñado detecta, alerta y suprime antes de que el fuego tome el edificio. Diseñamos e instalamos rociadores automáticos NFPA 13, detección y alarma NFPA 72 con tableros FACP direccionables, y supresión por agente limpio NFPA 2001 para activos críticos.',
        'Cada proyecto entrega memoria de cálculo hidráulico, planos as-built, puesta en marcha documentada y capacitación al personal — el expediente completo que piden tu aseguradora, tu DRO y la autoridad.',
      ],
      subsections: [
        { name: 'Rociadores automáticos NFPA 13', detail: 'Diseño por densidad de riesgo con Tyco y Viking: oficinas, naves industriales, almacenes de gran altura y estacionamientos.' },
        { name: 'Detección y alarma NFPA 72', detail: 'Paneles Honeywell/Notifier direccionables, detectores de humo y calor, notificación audible y visible por zonas.' },
        { name: 'Supresión con agente limpio', detail: 'FM-200 y Novec 1230 para data centers, archivos y salas eléctricas — extinción sin daño al equipo.' },
        { name: 'Redes hidráulicas y bombas', detail: 'Bombas certificadas, tableros NFPA 20, hidrantes y tomas siamesas con memoria de cálculo y pruebas de aceptación.' },
      ],
      image: '/images/categorias/sistemas-ci.svg',
      imageAlt: 'Ilustración técnica de rociador automático contra incendio y panel de detección FACP conforme NFPA 13 y 72',
    },
  },
  {
    slug: 'camaras-termicas',
    shortDesc: 'Cámaras de imagen térmica para búsqueda y rescate en ambientes de visibilidad cero.',
    accent: '#F5A623',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M23 7l-7 5 7 5V7z"/><rect x="1" y="5" width="15" height="14" rx="2"/></svg>`,
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
    spotlight: {
      title: 'Cámaras Térmicas certificadas',
      highlight: 'NFPA 1801',
      paragraphs: [
        'En visibilidad cero, la imagen térmica es la diferencia entre buscar y encontrar. Distribuimos cámaras FLIR, MSA Evolution y Bullard certificadas NFPA 1801 — el estándar que garantiza legibilidad, durabilidad e interfaz uniforme en condiciones de combate real.',
        'Te asesoramos según uso y presupuesto: desde cámaras personales de bolsillo para cada elemento hasta equipos de mando con grabación y telemetría. Demostración en sitio sin costo para que tu brigada las pruebe antes de decidir.',
      ],
      subsections: [
        { name: 'Búsqueda y rescate', detail: 'Localización de víctimas en humo denso: sensores de alta sensibilidad con paletas de color para identificar fuentes de calor.' },
        { name: 'Sobrehaul y puntos calientes', detail: 'Verificación de extinción total tras el ataque: detecta combustión oculta en muros, techos y entrepisos.' },
        { name: 'Cámaras personales', detail: 'Una cámara por bombero cambia la táctica: decisión inmediata en el interior sin esperar al equipo de mando.' },
        { name: 'Integración y accesorios', detail: 'Montaje en casco o SCBA (MSA G1), grabación de incidentes, cargadores vehiculares y fundas de despliegue rápido.' },
      ],
      image: '/images/categorias/camaras-termicas.svg',
      imageAlt: 'Ilustración técnica de cámara térmica para bomberos certificada NFPA 1801 con silueta de calor en pantalla',
    },
  },
  {
    slug: 'hazmat',
    shortDesc: 'Trajes de protección química Nivel A y B para respuesta a materiales peligrosos.',
    accent: '#F75000',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>`,
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
    spotlight: {
      title: 'Equipos HAZMAT certificados',
      highlight: 'NFPA 1991 y 1992',
      paragraphs: [
        'La respuesta a materiales peligrosos exige protección absoluta y compatibilidad química documentada. Equipamos brigadas con trajes encapsulados Nivel A certificados NFPA 1991, trajes de salpicadura Nivel B/C NFPA 1992, detección multi-gas y kits de descontaminación.',
        'Cada traje se entrega con las tablas de permeación del fabricante y asesoría de selección según las sustancias específicas de tu operación — crítico para refinerías, plantas químicas, logística y respuesta municipal.',
      ],
      subsections: [
        { name: 'Nivel A encapsulado', detail: 'Protección total a gas y vapor con SCBA interno: la máxima barrera para atmósferas desconocidas o tóxicas.' },
        { name: 'Nivel B y C de salpicadura', detail: 'DuPont Tychem y equivalentes para líquidos y aerosoles, con SCBA externo o respirador purificador según el riesgo.' },
        { name: 'Detección multi-gas', detail: 'Monitores de O₂, LEL, CO, H₂S y tóxicos específicos con certificación para atmósferas explosivas.' },
        { name: 'Descontaminación y sellado', detail: 'Regaderas portátiles, tinas de contención, kits de sellado de fugas y bolsas de recuperación para el cierre del incidente.' },
      ],
      image: '/images/categorias/hazmat.svg',
      imageAlt: 'Ilustración técnica de traje HAZMAT Nivel A encapsulado certificado NFPA 1991 con visor y guantes químicos',
    },
  },
  {
    slug: 'drones-emergencia',
    shortDesc: 'Drones con cámara térmica para evaluación aérea, búsqueda y reconocimiento HAZMAT.',
    accent: '#34D399',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><circle cx="12" cy="12" r="3"/><circle cx="4.5" cy="4.5" r="2.5"/><circle cx="19.5" cy="4.5" r="2.5"/><circle cx="4.5" cy="19.5" r="2.5"/><circle cx="19.5" cy="19.5" r="2.5"/><path d="M6.5 6.5l3.4 3.4M17.5 6.5l-3.4 3.4M6.5 17.5l3.4-3.4M17.5 17.5l-3.4-3.4"/></svg>`,
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
    spotlight: {
      title: 'Drones de Emergencia con',
      highlight: 'cámara térmica y registro AFAC',
      paragraphs: [
        'El dron se volvió herramienta estándar de la primera respuesta: evaluación aérea de incendios estructurales y forestales, búsqueda de personas con cámara térmica radiométrica y reconocimiento HAZMAT sin exponer personal en la zona caliente.',
        'Entregamos soluciones completas listas para operar: aeronave DJI Matrice con sensor térmico, baterías de ciclo extendido, capacitación de piloto y acompañamiento en el registro ante AFAC para operación institucional legal.',
      ],
      subsections: [
        { name: 'Evaluación de incendios', detail: 'Vista cenital del avance del fuego, puntos calientes y rutas de ataque en estructural y forestal — en minutos, no horas.' },
        { name: 'Búsqueda y rescate térmico', detail: 'Sensor radiométrico que detecta firmas de calor humanas de noche, entre vegetación o en estructuras colapsadas.' },
        { name: 'Reconocimiento HAZMAT', detail: 'Lectura visual de fugas, derrames y placas de identificación a distancia segura antes de comprometer al equipo.' },
        { name: 'Capacitación y registro AFAC', detail: 'Formación de piloto institucional, protocolos de operación y trámite completo ante la autoridad aeronáutica.' },
      ],
      image: '/images/categorias/drones-emergencia.svg',
      imageAlt: 'Ilustración técnica de dron cuadricóptero con gimbal térmico detectando a una persona en búsqueda y rescate',
    },
  },
];

/** Catálogo completo (incluye trajes-bombero) — para el hub /productos */
export const allCategories: Category[] = [trajesBombero, ...categories];
