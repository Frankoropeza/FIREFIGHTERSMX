// brands.ts — Catálogo de marcas distribuidas por FIREFIGHTERS MX
// Cada entrada alimenta:
//   • /marcas/index.astro  → grid de fabricantes
//   • /marcas/[marca].astro → landing individual SEO por marca
// ─────────────────────────────────────────────────────────────────

export interface Brand {
  /** Slug único para URL: /marcas/[slug] */
  slug: string;
  /** Nombre comercial del fabricante */
  name: string;
  /** Monograma / emoji de representación visual */
  emoji: string;
  /** Descripción corta (card del índice, ≤100 chars) */
  description: string;
  /** País de origen con bandera */
  country?: string;
  /** Descripción larga para landing individual (1–2 párrafos) */
  longDesc: string[];
  /** Productos representativos que distribuimos (2–5 modelos/líneas) */
  products: { name: string; detail: string }[];
  /** Normas / certificaciones que respaldan esta marca */
  norms: string[];
  /** Slugs de categorías de producto relacionadas (categories.ts) */
  categoryLinks: string[];
  /** Sitio web oficial (solo informativo, NO enlace follow externo) */
  website?: string;
}

export const brands: Brand[] = [
  {
    slug: 'msa-safety',
    name: 'MSA Safety',
    emoji: '🛡️',
    description: 'Líder mundial en EPP para bomberos. SCBA, cascos, trajes y detectores de gas.',
    country: '🇺🇸 USA',
    longDesc: [
      'MSA Safety es el fabricante de referencia en equipos de protección personal para bomberos a nivel mundial. Su SCBA G1 es el estándar de facto en cuerpos de bomberos que exigen telemetría integrada, alarma PASS y cumplimiento NFPA 1970. El casco Gallet F1 XF, de estilo europeo integral, es el más solicitado en cuerpos metropolitanos y aeropuertos ARFF por su visor retráctil y módulo de comunicación.',
      'Trabajamos con la línea MSA Safety en México. Cada equipo se entrega con número de serie verificable, certificado de laboratorio acreditado y carta de fabricante — documentación lista para anexo técnico de licitación CompraNet, auditoría STPS y expediente de Protección Civil.',
    ],
    products: [
      { name: 'MSA G1 SCBA', detail: 'SCBA NFPA 1970 con telemetría integrada, EOSTI y alarma PASS. Cilindros 30/45/60 min a 4 500 psi.' },
      { name: 'MSA Gallet F1 XF', detail: 'Casco integral NFPA 1970 con visor retráctil, protección nucal y módulo de lámpara.' },
      { name: 'MSA Altair 4X', detail: 'Detector de gases multigas para entrada en recintos confinados y búsqueda en interior.' },
      { name: 'Repuestos y refacciones MSA', detail: 'Cilindros de repuesto, piezas faciales, reguladores y kits de mantenimiento originales.' },
    ],
    norms: ['NFPA 1981', 'NFPA 1982', 'NFPA 1970', 'NOM-002-STPS-2010'],
    categoryLinks: ['equipos-scba', 'cascos-nfpa'],
  },
  {
    slug: 'drager',
    name: 'Dräger',
    emoji: '🔵',
    description: 'Tecnología alemana de precisión. SCBA, equipos médicos y detección de gases.',
    country: '🇩🇪 Alemania',
    longDesc: [
      'Dräger es el fabricante alemán líder en equipos de seguridad para la vida. Su SCBA PSS 7000 destaca por la ergonomía de arnés, la presión positiva constante y el rendimiento en operaciones prolongadas de hasta 60 minutos. La plataforma de detección de gases Dräger-Tubes es referencia mundial en identificación de HAZMAT.',
      'En FIREFIGHTERS MX distribuimos los equipos Dräger más demandados en industria petrolera, brigadas industriales y aeropuertos ARFF, con soporte técnico local y prueba hidrostática autorizada.',
    ],
    products: [
      { name: 'Dräger PSS 7000', detail: 'SCBA de arnés ergonómico profesional para uso intensivo. Cilindros 6,8 L y 9 L.' },
      { name: 'Dräger PSS 3000', detail: 'SCBA compacto para espacios confinados y brigadas industriales.' },
      { name: 'Dräger X-am 5600', detail: 'Detector de gases multigas portátil para medición simultánea de hasta 6 gases.' },
      { name: 'Dräger-Tubes', detail: 'Tubos de detección colorimétrica para identificación rápida de sustancias HAZMAT.' },
    ],
    norms: ['NFPA 1970', 'NFPA 1990', 'EN 137', 'NOM-002-STPS-2010'],
    categoryLinks: ['equipos-scba'],
  },
  {
    slug: '3m-scott',
    name: '3M Scott',
    emoji: '🟠',
    description: 'SCBA Scott Air-Pak, mascarillas y equipos respiratorios para emergencias.',
    country: '🇺🇸 USA',
    longDesc: [
      '3M Scott es reconocido mundialmente por su línea Air-Pak de SCBA. El Air-Pak NxG7 incorpora Pak-Tracker para localización en interior — una ventaja operativa crítica en búsqueda y rescate. La plataforma modular permite configurar el equipo según las necesidades específicas de cada cuerpo de bomberos o brigada industrial.',
      'Distribuimos 3M Scott en México con soporte técnico, refacciones originales y prueba hidrostática de cilindros. Ideales para cuerpos de bomberos que buscan localización integrada sin infraestructura adicional.',
    ],
    products: [
      { name: '3M Scott Air-Pak NxG7', detail: 'SCBA con Pak-Tracker localizador integrado. Plataforma modular NFPA 1970.' },
      { name: '3M Scott Air-Pak 75', detail: 'SCBA de uso general, peso optimizado para operaciones estructurales.' },
      { name: 'Máscaras AV-3000 SureSeal', detail: 'Pieza facial panorámica con sello facial de doble capa. Compatible Air-Pak.' },
      { name: 'Cilindros y repuestos Scott', detail: 'Cilindros de fibra de carbono 4 500 psi, reguladores y kits de servicio originales.' },
    ],
    norms: ['NFPA 1970 (cap. 15–19)', 'NFPA 1970 (cap. 20–24)', 'NOM-002-STPS-2010'],
    categoryLinks: ['equipos-scba'],
  },
  {
    slug: 'globe-manufacturing',
    name: 'Globe Manufacturing',
    emoji: '🧥',
    description: 'El fabricante #1 de trajes estructurales para bomberos en Norteamérica.',
    country: '🇺🇸 USA',
    longDesc: [
      'Globe Manufacturing es el fabricante de trajes estructurales más grande de Norteamérica y la marca de referencia para cuerpos de bomberos que exigen cumplimiento NFPA 1970 con diseño a medida. Su modelo GX-7 combina tela exterior PBI/Kevlar NXT, barrera de humedad Crosstech y forro térmico, con costuras de doble aguja y trim reflejante 3M Scotchlite.',
      'En FIREFIGHTERS MX distribuimos trajes Globe con toma de medidas directa en estación, stock permanente en tallas S–4XL y programa de inspección avanzada y lavado técnico certificado NFPA 1850. Ideales para licitaciones que exigen certificado de laboratorio acreditado y carta de fabricante.',
    ],
    products: [
      { name: 'Globe GX-7 Structural', detail: 'Traje estructural premium NFPA 1970. PBI/Kevlar NXT exterior + Crosstech + forro térmico. El referente para cuerpos metropolitanos.' },
      { name: 'Globe Leatherneck', detail: 'Traje estructural de uso intensivo con cuello de cuero y refuerzos en rodilla y codo.' },
      { name: 'Globe Sidewinder', detail: 'Traje de acceso rápido con cierre de cremallera para estaciones de alta rotación.' },
      { name: 'Globe Proximity / ARFF', detail: 'Traje aluminizado de proximidad para aeropuertos y riesgos con exposición radiante extrema.' },
    ],
    norms: ['NFPA 1970', 'NFPA 1950', 'NFPA 1850', 'NOM-002-STPS-2010'],
    categoryLinks: ['trajes-bombero'],
  },
  {
    slug: 'holmatro',
    name: 'Holmatro',
    emoji: '⚙️',
    description: 'Herramientas hidráulicas de rescate vehicular: cizallas, expansores, cilindros.',
    country: '🇳🇱 Países Bajos',
    longDesc: [
      'Holmatro es la marca holandesa de referencia en herramientas hidráulicas para rescate vehicular. Su línea Pentheon inalámbrica permite despliegue en segundos sin unidad de poder central — crítico en accidentes carreteros con vehículos de aceros endurecidos de tercera generación. El separador SPR 4250 SC y la herramienta combinada CT 4260 HCS son los más usados en México por cuerpos de bomberos metropolitanos.',
      'Distribuimos Holmatro con refacciones originales, servicio técnico y calibración. Compatible con sistemas hidráulicos de unidad de poder existentes o en configuración inalámbrica Pentheon de última generación.',
    ],
    products: [
      { name: 'Holmatro SPR 4250 SC', detail: 'Separador de alto tonelaje para extracción en vehículos con aceros de alta resistencia.' },
      { name: 'Holmatro CT 4260 HCS', detail: 'Herramienta combinada corte/separación. Doble función en un solo equipo.' },
      { name: 'Holmatro RAP 3240 SC (Pentheon)', detail: 'Ariete telescópico inalámbrico para empuje de tablero y estabilización de cargas.' },
      { name: 'Unidades de poder Holmatro', detail: 'Unidades de poder de gasolina y eléctricas para sistemas de una y dos herramientas.' },
    ],
    norms: ['NFPA 1936', 'ISO 13852', 'NOM-002-STPS-2010'],
    categoryLinks: ['herramientas-rescate'],
  },
  {
    slug: 'bullard',
    name: 'Bullard',
    emoji: '⛑️',
    description: 'Cascos para bomberos, cámaras de imagen térmica y EPP de alta performance.',
    country: '🇺🇸 USA',
    longDesc: [
      'Bullard es el fabricante americano más reconocido en cascos para bomberos estructurales. Sus modelos USTM y USTERM de fibra de vidrio termoendurecida son el estándar en cuerpos con tradición americana: ala completa, escudo frontal personalizable y resistencia térmica superior. La línea de cámaras de imagen térmica T3 Max ofrece resolución y autonomía para búsqueda en interior.',
      'En FIREFIGHTERS MX distribuimos cascos Bullard con escudo frontal personalizado para tu cuerpo de bomberos, refacciones originales (visores, suspensiones, escudos) y soporte técnico. Ideales para licitaciones que exigen NFPA 1970 con certificado de laboratorio acreditado.',
    ],
    products: [
      { name: 'Bullard USTM', detail: 'Casco tradicional americano en fibra de vidrio termoendurecida NFPA 1970. El más vendido.' },
      { name: 'Bullard USTERM', detail: 'Versión mejorada del USTM con cubierta exterior de mayor resistencia térmica.' },
      { name: 'Bullard T3 Max TIC', detail: 'Cámara de imagen térmica de alta resolución para búsqueda en interior.' },
      { name: 'Accesorios y refacciones Bullard', detail: 'Visores, escudos frontales personalizados, suspensiones y guarniciones de repuesto.' },
    ],
    norms: ['NFPA 1970', 'NFPA 1930', 'NOM-002-STPS-2010'],
    categoryLinks: ['cascos-nfpa'],
  },
  {
    slug: 'honeywell',
    name: 'Honeywell',
    emoji: '🔶',
    description: 'Detectores de gas, alarmas contra incendio y soluciones de seguridad integral.',
    country: '🇺🇸 USA',
    longDesc: [
      'Honeywell es uno de los fabricantes más completos en seguridad industrial y contra incendio: desde detectores de gas fijos y portátiles hasta sistemas de alarma, paneles y sistemas de supresión. Su portafolio cubre brigadas industriales, aeropuertos y grandes instalaciones con un solo proveedor.',
      'Distribuimos los productos Honeywell más demandados en México para brigadas industriales y sistemas de detección en centros de trabajo, bajo los requerimientos de la NOM-002-STPS-2010 y NFPA 72.',
    ],
    products: [
      { name: 'Honeywell BW Clip4', detail: 'Detector de gases multigas desechable de 2 años. Ideal para dotación masiva de brigadas.' },
      { name: 'Honeywell Vulcain 2', detail: 'Detector fijo de gas para instalaciones industriales y cuartos eléctricos.' },
      { name: 'Sistemas de alarma Notifier', detail: 'Paneles de alarma y detección de incendio para instalaciones comerciales e industriales.' },
      { name: 'EPP respiratorio North', detail: 'Mascarillas, cartuchos y equipos de respiración autónoma para emergencias industriales.' },
    ],
    norms: ['NFPA 72', 'NOM-002-STPS-2010', 'NOM-026-STPS-2008'],
    categoryLinks: ['herramientas-rescate'],
  },
  {
    slug: 'kidde-utc',
    name: 'Kidde / UTC',
    emoji: '🚨',
    description: 'Extintores, sistemas de supresión y alarmas para mercado comercial e industrial.',
    country: '🇺🇸 USA',
    longDesc: [
      'Kidde, parte de UTC (United Technologies), es uno de los fabricantes más grandes del mundo en extintores portátiles y sistemas de supresión. Sus extintores PQS, CO₂ y Clase K son de los más utilizados en comercio, industria y gobierno por su disponibilidad, precio y soporte de servicio.',
      'Distribuimos extintores Kidde y accesorios con mantenimiento y recarga certificada NOM-154-SCFI-2005, entregando ficha técnica y constancia de servicio lista para expediente ante Protección Civil y STPS.',
    ],
    products: [
      { name: 'Kidde Pro Line PQS ABC', detail: 'Extintores de polvo químico seco multipropósito para oficinas, comercios e industria ligera.' },
      { name: 'Kidde CO₂', detail: 'Extintores de CO₂ para cuartos eléctricos y equipos sensibles. Limpio, sin residuo.' },
      { name: 'Kidde Clase K', detail: 'Extintores para cocinas con aceites vegetales e hidrogenados. Conforme NOM-154.' },
      { name: 'Sistemas de supresión FM-200', detail: 'Supresión limpia para centros de datos, cuartos de telecomunicaciones y archivos.' },
    ],
    norms: ['NOM-154-SCFI-2005', 'NOM-002-STPS-2010', 'NFPA 10'],
    categoryLinks: [],
  },
  {
    slug: 'ansul',
    name: 'Ansul',
    emoji: '🔴',
    description: 'Sistemas de supresión para cocinas industriales, transformadores y riesgos especiales.',
    country: '🇺🇸 USA',
    longDesc: [
      'Ansul, marca de Tyco / Johnson Controls, es el estándar mundial en sistemas de supresión de cocinas industriales. Su sistema R-102 es el de mayor instalación en cocinas de restaurantes, hoteles y cafeterías en todo el mundo, con activación automática al detectar calor excesivo en la campana.',
      'Distribuimos e instalamos sistemas Ansul R-102 con mantenimiento semestral certificado y refacciones originales. Ideales para restaurantes, hoteles, comedores industriales y cocinas de cualquier giro que exigen cumplimiento con el seguro y con Protección Civil.',
    ],
    products: [
      { name: 'Ansul R-102', detail: 'Sistema de supresión para campanas de cocina industrial. Clase K. El más instalado en el mundo.' },
      { name: 'Ansul CHECKFIRE SC-N', detail: 'Sistema de supresión para maquinaria y vehículos de minería y construcción.' },
      { name: 'Ansul Inergen', detail: 'Agente limpio de gas inerte para protección de centros de datos y cuartos eléctricos.' },
      { name: 'Cargas y refacciones Ansul', detail: 'Recargas de agente, boquillas, fusibles térmicos y detectores de repuesto originales.' },
    ],
    norms: ['NFPA 17A', 'NOM-002-STPS-2010', 'NFPA 96'],
    categoryLinks: [],
  },
  {
    slug: 'naffco',
    name: 'NAFFCO',
    emoji: '🏗️',
    description: 'Fabricante global de extintores, equipos CI y vehículos bomberos.',
    country: '🇦🇪 EAU',
    longDesc: [
      'NAFFCO (National Fire Fighting Manufacturing) es el mayor fabricante de equipos contra incendio de Oriente Medio y uno de los más grandes a nivel mundial. Su catálogo abarca extintores portátiles, sistemas de rociadores, gabinetes, mangueras, vehículos contra incendio y equipo de respuesta de emergencia.',
      'Distribuimos extintores NAFFCO y accesorios de sistemas CI en México, con relación calidad-precio competitiva para proyectos de gran volumen y equipamiento de estaciones.',
    ],
    products: [
      { name: 'Extintores NAFFCO PQS', detail: 'Extintores de polvo químico seco de 4, 6, 9 y 12 kg. Certificación CE y UL.' },
      { name: 'Extintores NAFFCO CO₂', detail: 'Extintores de CO₂ de 2, 5 y 9 kg para áreas eléctricas y espacios sensibles.' },
      { name: 'Gabinetes y mangueras NAFFCO', detail: 'Gabinetes tipo I y II con manguera semirrígida para sistemas hidráulicos CI.' },
      { name: 'Rociadores NAFFCO', detail: 'Rociadores automáticos colgantes y montantes conforme NFPA 13.' },
    ],
    norms: ['NFPA 10', 'NFPA 13', 'NOM-002-STPS-2010', 'UL Listed'],
    categoryLinks: [],
  },
  {
    slug: 'tyco-johnson-controls',
    name: 'Tyco / Johnson Controls',
    emoji: '🟢',
    description: 'Rociadores NFPA 13, sistemas de alarma y soluciones CI a gran escala.',
    country: '🇮🇪 Irlanda',
    longDesc: [
      'Tyco, ahora integrado en Johnson Controls, es uno de los mayores fabricantes de sistemas contra incendio del mundo. Sus rociadores automáticos, válvulas y sistemas de detección están presentes en los edificios más importantes de México.',
      'Suministramos materiales Tyco / Johnson Controls para proyectos de sistemas hidráulicos CI bajo NFPA 13, con asesoría técnica en diseño hidráulico, selección de rociadores y requerimientos de la aseguradora.',
    ],
    products: [
      { name: 'Rociadores automáticos Tyco', detail: 'Rociadores colgantes, montantes y laterales NFPA 13 para residencias, comercios e industria.' },
      { name: 'Válvulas de control Tyco', detail: 'Válvulas de mariposa, retención y alarma para redes hidráulicas CI.' },
      { name: 'Detección Simplex', detail: 'Detectores de humo y calor, estaciones manuales y paneles de alarma para edificios.' },
      { name: 'Sistemas de supresión Grinnell', detail: 'Supresión con agua nebulizada y espuma para riesgos especiales.' },
    ],
    norms: ['NFPA 13', 'NFPA 72', 'NOM-002-STPS-2010', 'UL Listed'],
    categoryLinks: [],
  },
  {
    slug: 'rosenbauer',
    name: 'Rosenbauer',
    emoji: '🚒',
    description: 'Vehículos y equipos para cuerpos de bomberos a nivel mundial.',
    country: '🇦🇹 Austria',
    longDesc: [
      'Rosenbauer es el mayor fabricante de vehículos y equipos para bomberos de Europa. Sus unidades PANTHER (ARFF), COMMANDER y FORCE son de los más avanzados en cobertura de aeropuertos, combate estructural y rescate. También fabrica monitores, bombas y sistemas de espuma.',
      'Trabajamos con equipos auxiliares y accesorios Rosenbauer para cuerpos de bomberos en México, además de soporte en especificaciones para licitación de vehículos.',
    ],
    products: [
      { name: 'Monitores Rosenbauer', detail: 'Monitores fijos y portátiles de alta capacidad para combate ofensivo en exterior.' },
      { name: 'Sistemas de espuma Rosenbauer', detail: 'Dosificadores de espuma y accesorios para supresión de líquidos inflamables.' },
      { name: 'Equipos de llenado de aire', detail: 'Compresores y estaciones de llenado para cilindros de SCBA en estaciones.' },
      { name: 'Herramientas y accesorios', detail: 'Equipos de dotación para unidades de combate de incendio y rescate.' },
    ],
    norms: ['NFPA 1901', 'OACI ARFF', 'EN 1846'],
    categoryLinks: [],
  },
  {
    slug: 'lion-apparel',
    name: 'Lion Apparel',
    emoji: '🦁',
    description: 'Trajes estructurales y de proximidad, capas y prendas de protección.',
    country: '🇺🇸 USA',
    longDesc: [
      'Lion Apparel es el segundo fabricante de trajes estructurales para bomberos más grande de Norteamérica. Su línea TechGen es reconocida por la combinación de protección térmica, transpirabilidad y durabilidad en condiciones de combate interior. También fabrica trajes de proximidad y ropa de estación.',
      'Distribuimos trajes Lion en México con toma de medidas, stock permanente y programa de inspección NFPA 1850 — la segunda opción premium junto a Globe para cuerpos que requieren variedad de fabricante en licitaciones.',
    ],
    products: [
      { name: 'Lion TechGen Structural', detail: 'Traje estructural NFPA 1970 de uso intensivo. Buena relación peso-protección para operaciones prolongadas.' },
      { name: 'Lion Proximity', detail: 'Traje aluminizado de proximidad para ARFF y exposición radiante.' },
      { name: 'Lion Station Wear', detail: 'Ropa de cuartel en Nomex IIIA: pantalón y camisola para uso diario en estación.' },
      { name: 'Lion Wildland NFPA 1950', detail: 'Traje forestal ligero en Nomex IIIA para incendio vegetal.' },
    ],
    norms: ['NFPA 1970', 'NFPA 1950', 'NFPA 1850'],
    categoryLinks: ['trajes-bombero'],
  },
  {
    slug: 'cairns-helmets',
    name: 'Cairns Helmets',
    emoji: '⛑️',
    description: 'Cascos tradicionales para bomberos estructurales, iconos del sector.',
    country: '🇺🇸 USA',
    longDesc: [
      'Cairns Helmets es la marca americana de cascos de cuero y fibra de vidrio más icónica del sector bomberos. El modelo N6A Houston de cuero es el preferido por cuerpos con tradición americana que buscan imagen y durabilidad. Sus cascos de fibra de vidrio ofrecen protección NFPA 1970 con el estilo clásico americano.',
      'Distribuimos cascos Cairns con escudo frontal personalizado para tu cuerpo de bomberos y refacciones originales: visores, suspensiones y guarniciones de repuesto.',
    ],
    products: [
      { name: 'Cairns N6A Houston (cuero)', detail: 'Casco de cuero americano clásico. El favorito de cuerpos con tradición. Personalizable.' },
      { name: 'Cairns 1010 Composite', detail: 'Casco de fibra de vidrio americano NFPA 1970. Ala completa, escudo frontal desmontable.' },
      { name: 'Cairns 660 Boston', detail: 'Casco de cuero más ligero, diseño compacto para cuerpos con preferencia de peso reducido.' },
      { name: 'Accesorios y escudos Cairns', detail: 'Escudos frontales personalizados con el nombre y número de tu estación.' },
    ],
    norms: ['NFPA 1970'],
    categoryLinks: ['cascos-nfpa'],
  },
  {
    slug: 'flir-teledyne',
    name: 'FLIR / Teledyne',
    emoji: '📷',
    description: 'Cámaras de imagen térmica para bomberos y búsqueda y rescate.',
    country: '🇺🇸 USA',
    longDesc: [
      'FLIR, ahora parte de Teledyne, es el fabricante de referencia en cámaras de imagen térmica (TIC) para bomberos. Sus modelos K65 y K55 ofrecen la resolución y el contraste necesarios para localizar víctimas y puntos calientes en interior con cero visibilidad. Resistentes al agua, polvo y caídas, diseñadas para trabajo real en combate.',
      'Distribuimos cámaras FLIR con garantía oficial, calibración y soporte técnico. La inversión correcta para equipos de búsqueda y rescate que trabajan en condiciones de visibilidad cero.',
    ],
    products: [
      { name: 'FLIR K65', detail: 'Cámara TIC de alta resolución 320×240 px para búsqueda en interior y navegación en humo.' },
      { name: 'FLIR K55', detail: 'Cámara TIC de resolución estándar 160×120 px. La opción de dotación para equipos de rescate.' },
      { name: 'FLIR K33', detail: 'Cámara TIC de entrada, compacta y robusta para primera dotación.' },
      { name: 'Baterías y accesorios FLIR', detail: 'Baterías adicionales, cargadores y bolsas de transporte originales.' },
    ],
    norms: ['NFPA 1930', 'UL Listed'],
    categoryLinks: [],
  },
  {
    slug: 'dji-enterprise',
    name: 'DJI Enterprise',
    emoji: '🚁',
    description: 'Drones para emergencias, búsqueda y rescate y vigilancia aérea.',
    country: '🇨🇳 China',
    longDesc: [
      'DJI Enterprise ofrece la línea de drones más avanzada para uso en emergencias y seguridad pública. Los modelos Matrice 30T y Mavic 3 Thermal integran cámara térmica y RGB en la misma plataforma, con alcance de 15 km y autonomía de hasta 41 minutos — la herramienta de reconocimiento aéreo más accesible para cuerpos de bomberos y protección civil.',
      'Distribuimos drones DJI Enterprise con capacitación de vuelo, gestión de permisos AFAC y configuración para operaciones de emergencia en México.',
    ],
    products: [
      { name: 'DJI Matrice 30T', detail: 'Drone profesional con cámara térmica + RGB + laser rangefinder. Para búsqueda, rescate e inspección en altura.' },
      { name: 'DJI Mavic 3 Thermal', detail: 'Drone compacto con cámara térmica integrada para reconocimiento y búsqueda de víctimas.' },
      { name: 'DJI Dock 2', detail: 'Estación de vuelo autónomo para patrullaje y monitoreo remoto sin piloto en sitio.' },
      { name: 'Accesorios y capacitación DJI', detail: 'Baterías adicionales, bolsas de transporte y capacitación de vuelo certificada.' },
    ],
    norms: ['AFAC México', 'RPAS SCT'],
    categoryLinks: [],
  },
];
