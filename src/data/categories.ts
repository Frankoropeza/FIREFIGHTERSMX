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
    icon: ``,
  label: 'Trajes para Bomberos',
  norm: 'NFPA 1970 · 1950',
  description: 'Trajes estructurales, de proximidad y forestales certificados NFPA 1970 y 1950 en México: Globe, Lion, Morning Pride, Fire-Dex y Sköld, con entrega en 32 estados.',
  intro: [
    'Trajes de combate estructural de 3 capas, trajes aluminizados de proximidad para ARFF y trajes forestales ligeros — todos certificados por laboratorio acreditado bajo NFPA 1970 o NFPA 1950, con número de serie verificable con fábrica.',
    'Distribuimos Globe (MSA), Lion, Morning Pride, Fire-Dex y la mexicana Sköld, con stock permanente en CDMX. Cada conjunto incluye ficha técnica para licitación, asesoría de tallaje y acceso al programa de inspección y mantenimiento NFPA 1850.',
  ],
  items: [
    { name: 'Globe G-XTREME 3.0', detail: 'Estructural con shell PBI MAX y barrera GORE-TEX CROSSTECH Innovate' },
    { name: 'Lion V-Force', detail: 'Estructural con sistema de humedad IsoDri y mangas raglán' },
    { name: 'Trajes de proximidad', detail: 'Aluminizados para ARFF y exposición radiante' },
    { name: 'Trajes forestales NFPA 1950', detail: 'Ligeros y transpirables para incendio vegetal' },
  ],
  productCategory: 'Trajes Bombero',
  spotlight: {
    title: 'Trajes para Bomberos certificados',
    highlight: 'NFPA 1970 y NFPA 1950',
    paragraphs: [
      'El traje estructural es la última barrera entre el bombero y el fuego. Distribuimos conjuntos completos —chaquetón y pantalón— certificados por laboratorio acreditado bajo NFPA 1970 (la norma que desde 2024 absorbió a la NFPA 1971), con número de serie verificable con fábrica y ficha técnica lista para licitación o auditoría STPS.',
      'Manejamos Globe, Lion, Morning Pride, Fire-Dex y Sköld, con stock permanente de las configuraciones más demandadas y entrega en 24–48 horas en CDMX. Cada compra incluye asesoría de tallaje y el programa de inspección y mantenimiento conforme a NFPA 1850.',
    ],
    subsections: [
      { name: 'Trajes estructurales', detail: 'Combate interior de edificios. Sistema de tres capas —shell exterior, barrera de humedad y forro térmico— certificado como conjunto; el TPP y el THL dependen del compuesto elegido.' },
      { name: 'Trajes de proximidad', detail: 'Aluminizados para exposición a calor radiante: ARFF en aeropuertos, refinerías y fundiciones. Globe Proximity, Fire-Dex Proximity, Morning Pride TAILS y VIPER Proximity y Sköld Aproximación.' },
      { name: 'Trajes forestales NFPA 1950', detail: 'Ligeros y transpirables para incendio vegetal: camisola y pantalón en Nomex IIIA, diseñados para jornadas largas con golpe de calor mínimo.' },
      { name: 'Tallaje, stock y mantenimiento', detail: 'Asesoría de tallaje con prueba de ajuste, stock permanente en CDMX y programa de inspección avanzada, lavado técnico y reparación certificada NFPA 1850.' },
    ],
    image: '/images/categorias/trajes-bombero.avif',
    imageAlt: 'Ilustración técnica de traje estructural para bombero certificado NFPA 1970 con casco y bandas reflejantes',
  },
};

/**
 * Categorías del catálogo — fuente única para:
 * - Páginas /productos/[categoria]
 * - Hub /productos y grids del home
 */
export const categories: Category[] = [
  {
    slug: 'detectores-de-humo',
    label: 'Detectores de humo',
    norm: 'NFPA 72 · UL 217',
    description: 'Detectores autónomos Kidde de humo y humo/CO para vivienda: opciones a batería, cableadas e interconectables conforme a NFPA 72 y UL 217.',
    shortDesc: 'Alarmas autónomas Kidde para detección local de humo y monóxido de carbono.',
    accent: '#F5A623',
    icon: '',
    intro: [
      'Un detector autónomo emite alarma en el punto donde se instala y puede interconectarse con unidades compatibles según el modelo. Es distinto de un sistema de detección con panel, módulos, circuitos y notificación diseñado para un inmueble; esa arquitectura se consulta en Sistemas Contra Incendio.',
      'La selección comienza por la alimentación disponible, el tipo de sensor publicado y la compatibilidad de interconexión. Revise el manual del modelo para ubicación, separación de fuentes de vapor o cocción, prueba periódica y fecha de reemplazo; una alarma no detecta humo que no alcanza su cámara.',
    ],
    items: [
      { name: 'Kidde P9050', detail: 'Detector fotoeléctrico autónomo con batería de 9 V.' },
      { name: 'Kidde 30CUAR-VRF', detail: 'Alarma cableada de humo/CO con respaldo AA e interconexión inalámbrica.' },
      { name: 'Kidde 20SAR-VRF', detail: 'Detector de humo cableado con respaldo AA e interconexión inalámbrica.' },
      { name: 'Kidde P4010ACSAQ-WF', detail: 'Detector fotoeléctrico cableado con respaldo sellado y monitor de calidad de aire.' },
    ],
    productCategory: 'Detectores de Humo',
  },
  {
    slug: 'desfibriladores',
    label: 'Desfibriladores (DEA)',
    norm: 'IEC 60601-2-4',
    description: 'Desfibriladores externos automáticos ZOLL, Philips, Mindray y Powerheart para programas de respuesta, con consumibles y configuración por modelo.',
    shortDesc: 'DEA para respuesta a paro cardiaco, con consumibles y accesorios por modelo.',
    accent: '#34D399',
    icon: '',
    intro: [
      'Un DEA analiza el ritmo y guía la respuesta con instrucciones del fabricante; no sustituye la activación del servicio médico de emergencias, la capacitación ni el programa de revisión del sitio. Compare modalidad semiautomática o automática, guía de RCP, protección ambiental y opciones pediátricas publicadas para cada referencia.',
      'El programa debe asignar responsables para revisar estado, batería, electrodos y gabinete, además de conservar instrucciones y formación aplicable. Antes de compra o instalación en México, solicite el registro sanitario COFEPRIS vigente del modelo y compruebe las fechas de vigencia de batería y electrodos.',
    ],
    items: [
      { name: 'ZOLL AED Plus', detail: 'DEA con Real CPR Help, electrodos CPR-D-padz e índice IP55.' },
      { name: 'ZOLL AED 3', detail: 'DEA con pantalla a color, modo infantil integrado y análisis RapidShock.' },
      { name: 'Philips HeartStart FRx', detail: 'DEA con indicaciones de voz y opción de llave pediátrica.' },
      { name: 'Mindray BeneHeart C1A', detail: 'DEA disponible en versiones semiautomática y automática.' },
    ],
    productCategory: 'Desfibriladores DEA',
  },
  {
    slug: 'epp-bombero',
    label: 'Botas, guantes y capuchas para bombero',
    norm: 'NFPA 1970',
    description: 'Botas, guantes y capuchas para combate estructural, con referencias Lion y Globe de MSA bajo NFPA 1970 y herramientas Council Tool.',
    shortDesc: 'Protección complementaria y herramientas manuales para la dotación bomberil.',
    accent: '#F75000',
    icon: '',
    intro: [
      'Botas, guantes y capucha deben seleccionarse como parte de la interfaz entre traje, casco, SCBA y tarea. La etiqueta del artículo y las instrucciones de uso son las referencias para confirmar cumplimiento de NFPA 1970 en la configuración adquirida; materiales o accesorios distintos pueden cambiar el conjunto aplicable.',
      'Defina tallas, ancho de bota, mano dominante, compatibilidad con la máscara y la protección requerida antes de pedir. Inspeccione costuras, barreras, suelas, cierres y herrajes después de exposición o limpieza. Las hachas y barras de entrada forzada son herramientas de operación y requieren entrenamiento específico.',
    ],
    items: [
      { name: 'Lion Battalion', detail: 'Bota de cuero para incendio estructural, proximidad y salpicadura líquida.' },
      { name: 'Lion Primus', detail: 'Guante estructural certificado NFPA 1970 con CROSSTECH y Kovenex.' },
      { name: 'Globe Guard Hood', detail: 'Capucha con barrera de partículas para cabeza y cuello.' },
      { name: 'Council Tool FE6', detail: 'Hacha plana de entrada forzada compatible con barra Halligan.' },
    ],
    productCategory: 'EPP Bombero',
  },
  {
    slug: 'cascos-nfpa',
    shortDesc: 'Cascos de combate y forestales con protección facial integrada y suspensión avanzada.',
    accent: '#F75000',
    icon: ``,
    label: 'Cascos NFPA',
    norm: 'NFPA 1970 · 1950',
    description: 'Cascos para bomberos certificados NFPA 1970 y 1950 en México: MSA Gallet, Bullard y Cairns. Estructurales, forestales y de rescate. Cotización en 24 h.',
    intro: [
      'El casco es la primera línea de protección craneal en combate estructural. Todos los modelos que distribuimos están certificados bajo NFPA 1970 (estructural) o NFPA 1950 (forestal) por laboratorios acreditados, con número de serie verificable con fábrica.',
      'Manejamos configuraciones con protector facial integrado, goggles, lámparas y soportes para cámara térmica. Stock permanente de los modelos más demandados con entrega en 24–48 h en CDMX.',
    ],
    items: [
      { name: 'MSA Gallet F1 XF', detail: 'Casco europeo integral con visor retráctil y protección nucal' },
      { name: 'Bullard UST / USTM y UST LowRider', detail: 'Casco tradicional americano de fibra de vidrio' },
      { name: 'Cairns N6A Houston', detail: 'Casco de cuero clásico para cuerpos con tradición' },
      { name: 'Cascos forestales NFPA 1950', detail: 'Ligeros, ventilados, compatibles con goggles y capucha' },
    ],
    productCategory: 'Cascos NFPA',
    spotlight: {
      title: 'Cascos para Bomberos certificados',
      highlight: 'NFPA 1970 y NFPA 1950',
      paragraphs: [
        'El casco protege contra impacto, penetración, calor radiante y descarga eléctrica — y la NFPA 1970 exige que cada componente lo demuestre en laboratorio acreditado. Distribuimos MSA Gallet, Bullard y Cairns con certificado de conformidad, número de serie verificable y ficha técnica lista para licitación.',
        'Te asesoramos en la configuración correcta según tu operación: protector facial o goggles, lámpara integrada, soporte para cámara térmica y protección nucal. Stock permanente de los modelos más demandados con entrega en 24–48 horas en CDMX.',
      ],
      subsections: [
        { name: 'Estilo europeo integral', detail: 'MSA Gallet F1 XF: visor retráctil interno, protección nucal integrada, módulo de lámpara y comunicación. El estándar en cuerpos metropolitanos y ARFF.' },
        { name: 'Estilo americano tradicional', detail: 'Bullard UST/USTM, UST LowRider y Cairns N6A Houston: fibra de vidrio termoendurecida o cuero, ala completa contra escurrimientos y escudo frontal personalizable.' },
        { name: 'Cascos forestales NFPA 1950', detail: 'Ligeros y ventilados para incendio vegetal: compatibles con goggles, capucha y protección auditiva en jornadas largas.' },
        { name: 'Accesorios y refacciones', detail: 'Visores, goggles, lámparas, escudos frontales personalizados y suspensiones de repuesto — todo original de fábrica para conservar la certificación.' },
      ],
      image: '/images/categorias/cascos-nfpa.avif',
      imageAlt: 'Ilustración técnica de casco estructural para bombero certificado NFPA 1970 con visor abatible y banda reflejante',
    },
  },
  {
    slug: 'equipos-scba',
    shortDesc: 'Equipos de respiración autónoma de circuito abierto para atmósferas inmediatamente peligrosas.',
    accent: '#F5A623',
    icon: ``,
    label: 'Equipos SCBA',
    norm: 'NFPA 1970 · NIOSH',
    description: 'Equipos de respiración autónoma SCBA certificados NFPA 1970 y NIOSH: MSA G1, Dräger PSS y 3M Scott Air-Pak. Cilindros 30/45/60 min. Servicio autorizado.',
    intro: [
      'El equipo de respiración autónoma es el componente más crítico — y el más regulado — del EPP de un bombero. Distribuimos SCBA certificados NFPA 1970 (antes NFPA 1981) con aprobación NIOSH CBRN, en configuraciones de 30, 45 y 60 minutos con cilindros de fibra de carbono de 4,500 psi.',
      'Además de la venta, somos servicio técnico autorizado: prueba hidrostática de cilindros, mantenimiento de reguladores, pruebas de flujo anuales y refacciones originales. Tu inversión queda protegida durante toda la vida útil del equipo.',
    ],
    items: [
      { name: 'MSA G1 SCBA', detail: 'Electrónica integrada, telemetría opcional, EOSTI integrado' },
      { name: 'Dräger PSS 7000', detail: 'Arnés ergonómico profesional para uso intensivo' },
      { name: '3M Scott Air-Pak X3 Pro', detail: 'Certificado NFPA 1970 (2025) por SEI con aprobación NIOSH' },
      { name: 'Cilindros y refacciones', detail: 'Cilindros 4500 psi, máscaras, reguladores y repuestos originales' },
    ],
    productCategory: 'Equipos SCBA',
    spotlight: {
      title: 'Equipos SCBA certificados',
      highlight: 'NFPA 1970 y NIOSH CBRN',
      paragraphs: [
        'El equipo de respiración autónoma incluye MSA G1, Dräger PSS 7000 y 3M Scott Air-Pak X3 Pro. El X3 Pro está certificado NFPA 1970 (2025) por SEI con aprobación NIOSH.',
        'Somos servicio técnico autorizado: prueba hidrostática de cilindros, pruebas de flujo anuales, mantenimiento de reguladores y refacciones originales. Tu inversión queda protegida durante toda la vida útil del equipo, con bitácora lista para auditoría.',
      ],
      subsections: [
        { name: 'Configuraciones 30 / 45 / 60 min', detail: 'Cilindros de fibra de carbono a 4,500 psi según el perfil de tu operación: estructural, industrial o HAZMAT con autonomía extendida.' },
        { name: 'Electrónica integrada', detail: 'EOSTI, alarma PASS, telemetría y localizador en cabina de mando — visibilidad total del aire y la posición de cada elemento.' },
        { name: 'Máscaras y reguladores', detail: 'Piezas faciales full-face con ajuste certificado, reguladores de presión positiva y adaptadores para comunicación.' },
        { name: 'Servicio técnico autorizado', detail: 'Prueba hidrostática, prueba de flujo anual, refacciones originales y bitácora de mantenimiento para tu expediente.' },
      ],
      image: '/images/categorias/equipos-scba.avif',
      imageAlt: 'Ilustración técnica de equipo de respiración autónoma SCBA con cilindro de 4500 psi, máscara y manómetro',
    },
  },
  {
    slug: 'herramientas-rescate',
    shortDesc: 'Sistemas hidráulicos de excarcelación y rescate vehicular de alto rendimiento.',
    accent: '#F75000',
    icon: ``,
    label: 'Herramientas de Rescate',
    norm: 'EN 13204 · NFPA 1960',
    description: 'Herramientas hidráulicas de rescate (quijadas de la vida): cizallas, separadores, combinadas y arietes Holmatro, Hurst y Weber. Rescate vehicular y estructural. Demostración y capacitación incluidas.',
    intro: [
      'Para extracción vehicular y rescate urbano, distribuimos herramientas Holmatro, Hurst y Weber con clasificación EN 13204: cizallas, separadores, herramientas combinadas y arietes telescópicos, en versiones con manguera y batería (Pentheon).',
      'Cada venta institucional incluye demostración en sitio y capacitación básica de operación. Ofrecemos también mantenimiento preventivo anual con refacciones originales para mantener la certificación del equipo.',
    ],
    items: [
      { name: 'Holmatro Pentheon', detail: 'Cizalla, separador, combinada y ariete a batería' },
      { name: 'Hurst eDRAULIC 3.0 y Weber E-FORCE3', detail: 'Herramientas a batería para vehículos de acero de alta resistencia' },
      { name: 'Arietes telescópicos', detail: 'Empuje de tablero y estabilización de cargas' },
      { name: 'Línea Pentheon (batería)', detail: 'Sin mangueras: despliegue en segundos, sin unidad de poder' },
    ],
    productCategory: 'Herramientas Rescate',
    spotlight: {
      title: 'Herramientas de Rescate certificadas',
      highlight: 'EN 13204',
      paragraphs: [
        'En extracción vehicular cada minuto cuenta. Distribuimos herramientas Holmatro, Hurst y Weber con clasificación EN 13204: cizallas, separadores, herramientas combinadas y arietes telescópicos con fuerzas de corte de más de 1,000 kN, capaces de abrir los aceros endurecidos de los vehículos modernos.',
        'Cada venta institucional incluye demostración en sitio y capacitación básica de operación. Damos mantenimiento preventivo anual con refacciones originales para conservar la certificación y el rendimiento del equipo.',
      ],
      subsections: [
        { name: 'Cizallas y separadores', detail: 'Holmatro Pentheon, Hurst eDRAULIC 3.0 y Weber E-FORCE3: alto tonelaje para postes B reforzados y aceros al boro de vehículos recientes.' },
        { name: 'Línea Pentheon a batería', detail: 'Sin mangueras ni unidad de poder: despliegue en segundos, velocidad bajo carga y operación silenciosa para triage.' },
        { name: 'Arietes y estabilización', detail: 'Arietes telescópicos para empuje de tablero, calzas y puntales de estabilización para vehículos y estructuras.' },
        { name: 'Demostración y capacitación', detail: 'Demo en tu estación con escenarios reales, capacitación de operación y mantenimiento preventivo anual certificado.' },
      ],
      image: '/images/categorias/herramientas-rescate.avif',
      imageAlt: 'Ilustración técnica de separador hidráulico de rescate vehicular de clasificación EN 13204',
    },
  },
  {
    slug: 'extintores',
    shortDesc: 'Extintores portátiles y sobre ruedas para fuegos clase A, B, C, D y K.',
    accent: '#F5A623',
    icon: ``,
    label: 'Extintores',
    norm: 'NOM-100-STPS · NOM-102-STPS · NFPA 10',
    description: 'Extintores PQS ABC (NOM-100-STPS), CO₂ (NOM-102-STPS), tipo K y agente limpio bajo NFPA 10. Venta, recarga y mantenimiento NOM-154-SCFI',
    intro: [
      'Distribuimos extintores portátiles y móviles para todo tipo de riesgo: polvo químico seco ABC (NOM-100-STPS) para uso general, CO₂ (NOM-102-STPS) para tableros y electrónica, Tipo K para cocinas industriales y agentes limpios para centros de datos.',
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
      title: 'Extintores y servicio',
      highlight: 'PQS NOM-100-STPS · CO₂ NOM-102-STPS · NFPA 10',
      paragraphs: [
        'El extintor correcto depende del fuego que vas a combatir: PQS ABC (NOM-100-STPS) para uso general, CO₂ (NOM-102-STPS) para tableros y electrónica, Tipo K para cocinas industriales y agentes limpios para centros de datos. El servicio de recarga y mantenimiento se realiza conforme a NOM-154-SCFI.',
        'El servicio no termina en la venta: recargamos todos los tipos de agente con collar de garantía y reporte para tu expediente de Protección Civil, conforme al programa anual que exige la NOM-002-STPS. También programamos la prueba hidrostática obligatoria de tus cilindros.',
      ],
      subsections: [
        { name: 'PQS ABC multiuso', detail: 'El estándar para oficinas, comercios y bodegas: 4.5, 6 y 9 kg, portátiles y móviles sobre ruedas para áreas industriales.' },
        { name: 'CO₂ y agentes limpios', detail: 'Sin residuo: tableros eléctricos, servidores y laboratorios. HFC-227ea para activos electrónicos de alto valor.' },
        { name: 'Tipo K para cocinas', detail: 'Acetato de potasio para aceites y grasas en cocinas industriales — el complemento obligado del sistema de campana.' },
        { name: 'Recarga y mantenimiento', detail: 'Recarga certificada con collar de garantía, etiqueta de inspección, reporte documental y prueba hidrostática programada.' },
      ],
      image: '/images/categorias/extintores.avif',
      imageAlt: 'Ilustración técnica de extintor PQS ABC con manómetro y collar de garantía',
    },
  },
  {
    slug: 'sistemas-ci',
    shortDesc: 'Rociadores automáticos, paneles de detección y agentes limpios para instalaciones críticas.',
    accent: '#34D399',
    icon: ``,
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
      image: '/images/categorias/sistemas-ci.avif',
      imageAlt: 'Ilustración técnica de rociador automático contra incendio y panel de detección FACP conforme NFPA 13 y 72',
    },
  },
  {
    slug: 'camaras-termicas',
    shortDesc: 'Cámaras de imagen térmica para búsqueda y rescate en ambientes de visibilidad cero.',
    accent: '#F5A623',
    icon: ``,
    label: 'Cámaras Térmicas',
    norm: 'NFPA 1930',
    description: 'Cámaras térmicas para bomberos certificadas NFPA 1930: FLIR, MSA Evolution y Bullard. Búsqueda y rescate, sobrehaul y HAZMAT. Demostración sin costo.',
    intro: [
      'La imagen térmica reduce dramáticamente los tiempos de búsqueda y localización de víctimas. Manejamos cámaras certificadas NFPA 1930 — el estándar que garantiza legibilidad, durabilidad e interfaz uniforme en condiciones de combate.',
      'Desde cámaras personales de bolsillo hasta equipos de mando con telemetría, te asesoramos según presupuesto y uso: estructural, HAZMAT, inspección industrial o búsqueda y rescate.',
    ],
    items: [
      { name: 'FLIR K75 / K85-N', detail: 'Línea estructural con FSX y transmisión Wi-Fi' },
      { name: 'MSA Evolution 6000 y G1 iTIC', detail: 'Cámara de mano e imagen térmica integrada al SCBA G1' },
      { name: 'Bullard TXS / NXT', detail: 'Ligeras, intuitivas, alta resolución' },
      { name: 'Cámaras personales', detail: 'Una cámara por bombero: decisión táctica inmediata' },
    ],
    productCategory: 'Cámaras Térmicas',
    spotlight: {
      title: 'Cámaras Térmicas certificadas',
      highlight: 'NFPA 1930',
      paragraphs: [
        'En visibilidad cero, la imagen térmica es la diferencia entre buscar y encontrar. Distribuimos cámaras FLIR, MSA Evolution y Bullard certificadas NFPA 1930 — el estándar que garantiza legibilidad, durabilidad e interfaz uniforme en condiciones de combate real.',
        'Te asesoramos según uso y presupuesto: desde cámaras personales de bolsillo para cada elemento hasta equipos de mando con grabación y telemetría. Demostración en sitio sin costo para que tu brigada las pruebe antes de decidir.',
      ],
      subsections: [
        { name: 'Búsqueda y rescate', detail: 'Localización de víctimas en humo denso: sensores de alta sensibilidad con paletas de color para identificar fuentes de calor.' },
        { name: 'Sobrehaul y puntos calientes', detail: 'Verificación de extinción total tras el ataque: detecta combustión oculta en muros, techos y entrepisos.' },
        { name: 'Cámaras personales', detail: 'Una cámara por bombero cambia la táctica: decisión inmediata en el interior sin esperar al equipo de mando.' },
        { name: 'Integración y accesorios', detail: 'Cámara integrada al SCBA (MSA G1 iTIC), grabación de incidentes, cargadores vehiculares y fundas de despliegue rápido.' },
      ],
      image: '/images/categorias/camaras-termicas.avif',
      imageAlt: 'Ilustración técnica de cámara térmica para bomberos certificada NFPA 1930 con silueta de calor en pantalla',
    },
  },
  {
    slug: 'hazmat',
    shortDesc: 'Trajes de protección química Nivel A y B para respuesta a materiales peligrosos.',
    accent: '#F75000',
    icon: ``,
    label: 'Equipos HAZMAT',
    norm: 'NFPA 1990',
    description: 'Trajes HAZMAT Nivel A y B certificados NFPA 1990, detección multi-gas y descontaminación. Equipamiento para materiales peligrosos en México.',
    intro: [
      'Para respuesta a materiales peligrosos equipamos brigadas con trajes encapsulados Nivel A y trajes salpicadura Nivel B/C (ambos NFPA 1990), detección multi-gas, kits de descontaminación y sellado de fugas.',
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
      highlight: 'NFPA 1990',
      paragraphs: [
        'La respuesta a materiales peligrosos exige protección absoluta y compatibilidad química documentada. Equipamos brigadas con trajes encapsulados Nivel A y trajes de salpicadura Nivel B/C certificados NFPA 1990, detección multi-gas y kits de descontaminación.',
        'Cada traje se entrega con las tablas de permeación del fabricante y asesoría de selección según las sustancias específicas de tu operación — crítico para refinerías, plantas químicas, logística y respuesta municipal.',
      ],
      subsections: [
        { name: 'Nivel A encapsulado', detail: 'Protección total a gas y vapor con SCBA interno: la máxima barrera para atmósferas desconocidas o tóxicas.' },
        { name: 'Nivel B y C de salpicadura', detail: 'DuPont Tychem y equivalentes para líquidos y aerosoles, con SCBA externo o respirador purificador según el riesgo.' },
        { name: 'Detección multi-gas', detail: 'Monitores de O₂, LEL, CO, H₂S y tóxicos específicos con certificación para atmósferas explosivas.' },
        { name: 'Descontaminación y sellado', detail: 'Regaderas portátiles, tinas de contención, kits de sellado de fugas y bolsas de recuperación para el cierre del incidente.' },
      ],
      image: '/images/categorias/hazmat.avif',
      imageAlt: 'Ilustración técnica de traje HAZMAT Nivel A encapsulado certificado NFPA 1990 con visor y guantes químicos',
    },
  },
  {
    slug: 'rescate-vertical',
    label: 'Rescate vertical y técnico',
    norm: 'NFPA 2500 · EN según fabricante',
    description: 'Arneses, descensores, poleas y camillas para rescate vertical y técnico de Petzl, CMC y Ferno, con normas publicadas por cada fabricante.',
    shortDesc: 'Equipo de cuerda, control de descenso y transporte de paciente para rescate técnico.',
    accent: '#F5A623',
    icon: '',
    intro: [
      'El rescate vertical se configura como sistema: arnés, cuerda, anclajes, control de descenso, aseguramiento, ventaja mecánica y empaque del paciente. La compatibilidad se confirma por modelo, diámetro de cuerda y manual del fabricante; no se sustituye con piezas de apariencia semejante.',
      'Petzl publica equipos de descenso, poleas y arnés para trabajo con cuerda. CMC publica dispositivos de control y camillas para rescate. Ferno aporta camillas canastilla para traslado. La capacitación y el plan de rescate son requisitos operativos antes de desplegar cualquier conjunto.',
    ],
    items: [
      { name: 'Petzl MAESTRO S', detail: 'Descensor con polea bloqueadora integrada para descenso e izado.' },
      { name: 'CMC MPD', detail: 'Control de descenso, belay y polea en un solo dispositivo.' },
      { name: 'CMC Titanium Split-Apart', detail: 'Canastilla desmontable con puntos StratLoad.' },
      { name: 'Ferno Model 71', detail: 'Camilla canastilla con carcasa de polietileno y bastidor de aluminio.' },
    ],
    productCategory: 'Rescate Vertical',
  },
  {
    slug: 'equipo-forestal',
    label: 'Equipo para incendio forestal',
    norm: 'NFPA 1950 para EPP · herramientas por fabricante',
    description: 'Herramientas manuales y bombas de mochila para incendio forestal, más el EPP forestal disponible en el catálogo de FIREFIGHTERS MX.',
    shortDesc: 'Herramientas forestales, bombas de mochila y acceso al EPP para combate de vegetación.',
    accent: '#34D399',
    icon: '',
    intro: [
      'Esta categoría reúne herramientas para construir líneas, mover combustible y atender puntos con agua de mochila. La dotación manual no reemplaza el análisis de terreno, clima, comunicaciones, rutas de escape ni el entrenamiento de la brigada.',
      'También es el hub del EPP forestal ya publicado: Lion ENgage Wildland, Fire-Dex Wildland, Sköld Forestal, Bullard Wildfire y MSA Gallet F2XR. Para prendas y cascos, confirme etiqueta, talla, compatibilidad y alcance de la norma NFPA 1950 o EN que corresponda al modelo.',
    ],
    items: [
      { name: 'Council Tool McLeod MT48', detail: 'Herramienta de azadón y rastrillo para líneas de control.' },
      { name: 'Council Tool Pulaski 38PE136', detail: 'Hacha y azadón para corte y excavación.' },
      { name: 'Truper MAC', detail: 'McLeod para limpieza de áreas y líneas corta fuego.' },
      { name: 'Indian 90G', detail: 'Bomba de mochila de acero galvanizado de cinco galones.' },
    ],
    productCategory: 'Equipo Forestal',
  },
  {
    slug: 'drones-emergencia',
    shortDesc: 'Drones con cámara térmica para evaluación aérea, búsqueda y reconocimiento HAZMAT.',
    accent: '#34D399',
    icon: ``,
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
      image: '/images/categorias/drones-emergencia.avif',
      imageAlt: 'Ilustración técnica de dron cuadricóptero con gimbal térmico detectando a una persona en búsqueda y rescate',
    },
  },
  {
    slug: 'senalizacion-emergencia',
    shortDesc: 'Señalamientos de seguridad, lámparas de emergencia y botiquines de primeros auxilios para centros de trabajo.',
    accent: '#34D399',
    icon: ``,
    label: 'Señalización y Emergencia',
    norm: 'NOM-026-STPS · NOM-003-SSPC · UL 924',
    description: 'Señalamientos de seguridad NOM-026 y NOM-003-SSPC, lámparas de emergencia UL 924 y botiquines de primeros auxilios para empresas en México.',
    intro: [
      'Señalización, iluminación de emergencia y primeros auxilios completan la protección contra incendio: permiten que las personas identifiquen el riesgo, encuentren la salida y reciban la primera atención.',
      'Suministramos señalamientos industriales y de protección civil (incluida la señalización fotoluminiscente Brady), lámparas de emergencia Lithonia y letreros de salida Sure-Lites listados UL 924, y botiquines First Aid Only conforme a ANSI/ISEA Z308.1.',
    ],
    items: [
      { name: 'Señalamientos de seguridad', detail: 'Señalización industrial y de protección civil, incluida la señalización fotoluminiscente Brady.' },
      { name: 'Lámparas de emergencia', detail: 'Lámparas Lithonia y letreros de salida Sure-Lites listados UL 924.' },
      { name: 'Botiquines de primeros auxilios', detail: 'Botiquines First Aid Only conforme a ANSI/ISEA Z308.1.' },
    ],
    productCategory: 'Señalización y Emergencia',
  },
];

/** Catálogo completo (incluye trajes-bombero) — para el hub /productos */
export const allCategories: Category[] = [trajesBombero, ...categories];
