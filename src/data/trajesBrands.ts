/**
 * Marcas de Trajes para Bomberos — implementan EquipmentBrand (ver brandPages.ts).
 * Renderizadas por src/components/products/BrandPage.astro (mismo componente que cascos).
 *
 * Migradas desde las páginas standalone (jun 2026) y homologadas: se normalizaron
 * los campos (segmentos con num+tipo, CTA con kicker+título) y se añadieron las
 * secciones "Anatomía del flagship" y "Guía de selección" para paridad con cascos.
 */
import type { EquipmentBrand } from './brandPages';

/* Nota técnica común a todas las comparativas de trajes */
const NOTA_TPP_THL =
  '* TPP ≥ 35 y THL ≥ 205 W/m² son los mínimos NFPA 1970 para trajes estructurales. Consulta el certificado del modelo para sus valores de laboratorio.';

/* ════════════════════════════════════════════════════════════════════════════
   GLOBE MANUFACTURING
   ════════════════════════════════════════════════════════════════════════════ */
const globe: EquipmentBrand = {
  categorySlug: 'trajes-bombero',
  slug: 'globe-manufacturing',
  brand: 'Globe Manufacturing',
  brandLabel: 'Globe Manufacturing',
  crossDesc: 'G-XTREME 3.0 · ATHLETIX · CLASSIX · G-XCEL · Globe Proximity',
  eyebrow: 'Globe Manufacturing · Distribuidor Autorizado MX',
  heroTitleTop: 'Trajes Globe',
  heroTitleAccent: 'NFPA 1971 y NFPA 1970.',
  heroLead:
    'Distribuidor autorizado de Globe Manufacturing en México. Consulta disponibilidad en CDMX y documentación técnica para licitación del modelo requerido.',
  heroIntro: [
    'El catálogo vigente de Globe Manufacturing incluye cuatro trajes estructurales y un traje de proximidad. La documentación debe revisarse para la configuración y el modelo solicitados.',
    'G-XTREME 3.0 y ATHLETIX se presentan con NFPA 1971; CLASSIX y G-XCEL con NFPA 1970 (2025), según MSA. Globe Proximity se presenta sin norma indicada en la ficha disponible.',
  ],
  heroBadges: ['NFPA 1971', 'NFPA 1970 (2025)', 'PBI MAX', 'GORE-TEX CROSSTECH Innovate', 'G-XTREME 3.0', 'Globe Proximity', 'Distribuidor autorizado MX'],
  seoTitle: 'Trajes Globe Manufacturing estructurales — Distribuidor MX',
  seoDescription:
    'Catálogo de trajes Globe Manufacturing en México: G-XTREME 3.0, ATHLETIX, CLASSIX, G-XCEL y Globe Proximity. Documentación técnica para licitación.',
  founding: '—',
  parentOrg: { name: '—', ticker: '—' },
  stats: [
    { valor: '5', etiq: 'Modelos vigentes listados' },
    { valor: '2', etiq: 'Modelos con NFPA 1971' },
    { valor: '2', etiq: 'Modelos con NFPA 1970 (2025)' },
    { valor: '1', etiq: 'Modelo de proximidad' },
  ],
  credenciales: [
    { n: '01', t: 'Catálogo estructural y de proximidad', d: 'La línea vigente reúne G-XTREME 3.0, ATHLETIX, CLASSIX, G-XCEL y Globe Proximity.' },
    { n: '02', t: 'Documentación para licitación', d: 'Se puede solicitar ficha técnica y documentación del modelo y la configuración requeridos para procesos de compra.' },
    { n: '03', t: 'Revisión por modelo', d: 'La norma, el shell y la barrera deben verificarse en la ficha técnica del modelo solicitado. Los valores sin publicación se presentan como no disponibles.' },
    { n: '04', t: 'Disponibilidad en CDMX', d: 'Consulta stock en CDMX y entrega de 24–48 h para confirmar disponibilidad del modelo y talla requeridos.' },
  ],
  linesIntro:
    'La línea vigente reúne modelos estructurales con dos referencias de norma y una opción Globe Proximity. Revisa la ficha técnica antes de definir una configuración.',
  lineas: [
    { tipo: 'estructural', badge: 'NFPA 1971', titulo: 'Estructural NFPA 1971', modelos: '2 modelos — G-XTREME 3.0 · ATHLETIX', desc: 'G-XTREME 3.0 y ATHLETIX se presentan con NFPA 1971. Ambos incluyen barrera GORE-TEX CROSSTECH Innovate según la ficha disponible.', tech: 'GORE-TEX CROSSTECH Innovate' },
    { tipo: 'estructural', badge: 'NFPA 1970 (2025)', titulo: 'Estructural NFPA 1970', modelos: '2 modelos — CLASSIX · G-XCEL', desc: 'CLASSIX y G-XCEL se presentan como trajes estructurales certificados bajo NFPA 1970 (2025), según MSA.', tech: '—' },
    { tipo: 'proximidad', badge: '—', titulo: 'Línea Proximity', modelos: '1 modelo — Globe Proximity', desc: 'Globe Proximity cuenta con shell de tejido de punto en mezcla PBI y película aluminizada laminada.', tech: 'Mezcla PBI · película aluminizada laminada' },
  ],
  flagship: 'G-XTREME 3.0',
  anatomiaIntro:
    'El G-XTREME 3.0 se configura con shell PBI MAX o PBI MAX LP y barrera GORE-TEX CROSSTECH Innovate. Verifica los componentes de la configuración solicitada en su ficha técnica.',
  anatomia: [
    { t: 'Shell exterior PBI MAX', d: 'Disponible en PBI MAX o PBI MAX LP según la configuración.' },
    { t: 'Barrera GORE-TEX CROSSTECH Innovate', d: 'Barrera de humedad GORE-TEX CROSSTECH Innovate; flúor ≤100 ppm en certificación.' },
    { t: 'Configuración del conjunto', d: 'La ficha técnica del modelo solicitado define los componentes de la configuración certificada.' },
    { t: 'Certificación NFPA 1971', d: 'G-XTREME 3.0 se presenta con NFPA 1971.' },
    { t: 'Datos de laboratorio', d: 'Solicita el certificado del modelo exacto para revisar los datos publicados por el laboratorio acreditado.' },
    { t: 'Ciclo de vida NFPA 1850', d: 'NFPA 1850 (2026) exige retirar el conjunto a más tardar 10 años después de su fecha de fabricación.' },
  ],
  comparativa: [
    { modelo: 'G-XTREME 3.0', tipo: 'estructural', shell: 'PBI MAX o PBI MAX LP, según configuración', tpp: '—', thl: '—', peso: '—', ideal: 'Uso estructural', rec: true },
    { modelo: 'ATHLETIX', tipo: 'estructural', shell: '—', tpp: '—', thl: '—', peso: '—', ideal: 'Uso estructural', rec: false },
    { modelo: 'CLASSIX', tipo: 'estructural', shell: '—', tpp: '—', thl: '—', peso: '—', ideal: 'Uso estructural', rec: false },
    { modelo: 'G-XCEL', tipo: 'estructural', shell: '—', tpp: '—', thl: '—', peso: '—', ideal: 'Uso estructural', rec: false },
    { modelo: 'Globe Proximity', tipo: 'proximidad', shell: 'Mezcla PBI y película aluminizada laminada', tpp: '—', thl: '—', peso: '—', ideal: 'Proximidad', rec: false },
    { modelo: 'G-XTREME 3.0', tipo: 'estructural', shell: 'PBI MAX o PBI MAX LP, según configuración', tpp: '—', thl: '—', peso: '—', ideal: 'Uso estructural', rec: false },
  ],
  comparativaNote: NOTA_TPP_THL,
  guia: [
    { n: '01', t: 'Define si el requerimiento corresponde a un traje estructural o a Globe Proximity.' },
    { n: '02', t: 'Para trajes estructurales, revisa la referencia de norma indicada para cada modelo: NFPA 1971 en G-XTREME 3.0 y ATHLETIX; NFPA 1970 (2025) en CLASSIX y G-XCEL, según MSA.' },
    { n: '03', t: 'En G-XTREME 3.0, confirma la configuración de shell PBI MAX o PBI MAX LP y la barrera GORE-TEX CROSSTECH Innovate.' },
    { n: '04', t: 'Solicita la ficha técnica y el certificado del modelo exacto; los valores TPP, THL y peso sin dato publicado se mantienen como no disponibles.' },
  ],
  segmentosIntro:
    'Los cinco modelos vigentes permiten organizar la revisión técnica por tipo de prenda, norma indicada y configuración disponible. La selección debe considerar el escenario de uso y la ficha del modelo.',
  segmentos: [
    { num: '01', tipo: 'estructural', titulo: 'Operación estructural', desc: 'G-XTREME 3.0 y ATHLETIX se presentan con NFPA 1971 y barrera GORE-TEX CROSSTECH Innovate.', modelos: 'G-XTREME 3.0 · ATHLETIX' },
    { num: '02', tipo: 'estructural', titulo: 'Evaluación NFPA 1970', desc: 'CLASSIX y G-XCEL se presentan como trajes estructurales certificados bajo NFPA 1970 (2025), según MSA.', modelos: 'CLASSIX · G-XCEL' },
    { num: '03', tipo: 'proximidad', titulo: 'Traje de proximidad', desc: 'Globe Proximity cuenta con shell de tejido de punto en mezcla PBI y película aluminizada laminada.', modelos: 'Globe Proximity' },
    { num: '04', tipo: 'estructural', titulo: 'Revisión de adquisición', desc: 'La ficha técnica y el certificado del modelo solicitado permiten comparar la norma indicada y la configuración disponible.', modelos: 'G-XTREME 3.0 · ATHLETIX · CLASSIX · G-XCEL' },
  ],
  faqs: [
    { q: '¿Qué modelos Globe están vigentes?', a: 'Los modelos vigentes listados son G-XTREME 3.0, ATHLETIX, CLASSIX, G-XCEL y Globe Proximity.' },
    { q: '¿Qué opciones de shell tiene el G-XTREME 3.0?', a: 'El G-XTREME 3.0 se configura con shell PBI MAX o PBI MAX LP. Consulta la ficha técnica para la configuración solicitada.' },
    { q: '¿Qué modelos usan barrera GORE-TEX CROSSTECH Innovate?', a: 'G-XTREME 3.0 y ATHLETIX se presentan con barrera GORE-TEX CROSSTECH Innovate.' },
    { q: '¿Qué establece la NFPA 1850 sobre el retiro del traje?', a: 'NFPA 1850 (2026) exige retirar el conjunto a más tardar 10 años después de su fecha de fabricación.' },
    { q: '¿Qué dato de flúor declara CROSSTECH Innovate?', a: 'La certificación de GORE-TEX CROSSTECH Innovate declara flúor ≤100 ppm.' },
  ],
  ctaKicker: 'Documentación técnica',
  ctaTitleHtml: 'Revisa el modelo.<br/>Solicita su ficha.',
  waQuote: 'Hola, quiero cotizar trajes Globe Manufacturing.',
};

/* ════════════════════════════════════════════════════════════════════════════
   LION APPAREL
   ════════════════════════════════════════════════════════════════════════════ */
const lion: EquipmentBrand = {
  categorySlug: 'trajes-bombero',
  slug: 'lion-apparel',
  brand: 'Lion Apparel',
  brandLabel: 'Lion Apparel',
  crossDesc: 'V-Force · RedZone · ENgage Wildland EN 15614',
  eyebrow: 'Lion Apparel · Distribuidor Autorizado MX',
  heroTitleTop: 'Trajes Lion',
  heroTitleAccent: 'estructurales y forestales.',
  heroLead:
    'Distribuidor autorizado de Lion Apparel en México. Consulta fichas técnicas, certificados aplicables y documentación para procesos de compra.',
  heroIntro: [
    'El catálogo vigente incluye cuatro trajes estructurales: Lion V-Force, Lion RedZone, Lion V-Force EVO y Lion Super-Deluxe.',
    'Lion ENgage Wildland está destinado a incendios forestales y de maleza; utiliza shell de sarga de aramida FR y se identifica con la norma EN 15614.',
  ],
  heroBadges: ['NFPA 1971', 'EN 15614', 'V-Force', 'ENgage Wildland', 'Distribuidor autorizado MX'],
  seoTitle: 'Trajes Lion V-Force y ENgage Wildland — México',
  seoDescription:
    'Catálogo Lion Apparel en México: V-Force, RedZone, V-Force EVO, Super-Deluxe y ENgage Wildland EN 15614. Distribuidor autorizado y documentación para licitación.',
  stats: [
    { valor: '5', etiq: 'Modelos vigentes en catálogo' },
    { valor: 'NFPA 1971', etiq: 'Lion V-Force' },
    { valor: 'EN 15614', etiq: 'Lion ENgage Wildland' },
    { valor: '32', etiq: 'Estados con cobertura' },
  ],
  credenciales: [
    { n: '01', t: 'Distribuidor autorizado', d: 'Disponemos de documentación para evaluar los modelos Lion Apparel vigentes en procesos de compra.' },
    { n: '02', t: 'V-Force', d: 'Lion V-Force incorpora sistema de humedad IsoDri y mangas raglán; se ofrece con shell PBI Max según configuración.' },
    { n: '03', t: 'Modelos estructurales vigentes', d: 'Lion RedZone, Lion V-Force EVO y Lion Super-Deluxe se presentan como trajes estructurales vigentes. Revisa la ficha técnica del modelo exacto antes de especificarlo.' },
    { n: '04', t: 'Documentación por modelo', d: 'Solicita ficha técnica, certificado aplicable y carta de distribuidor autorizado para integrar el expediente de compra.' },
  ],
  linesIntro:
    'El catálogo vigente se divide entre cuatro modelos estructurales y un modelo para incendios forestales y de maleza. No incluye un modelo de proximidad vigente.',
  lineas: [
    { tipo: 'estructural', badge: 'NFPA 1971', titulo: 'Línea estructural', modelos: '4 modelos — Lion V-Force · Lion RedZone · Lion V-Force EVO · Lion Super-Deluxe', desc: 'Modelos estructurales vigentes. Para Lion V-Force, la ficha indica sistema de humedad IsoDri, mangas raglán y shell PBI Max según configuración.', tech: 'IsoDri · mangas raglán · shell PBI Max según configuración' },
    { tipo: 'proximidad', badge: '—', titulo: 'Línea de proximidad', modelos: '—', desc: 'No hay un modelo de proximidad Lion vigente en este catálogo.', tech: '—' },
    { tipo: 'forestal', badge: 'EN 15614', titulo: 'Línea forestal', modelos: '1 modelo — Lion ENgage Wildland', desc: 'Para incendios forestales y de maleza, con shell de sarga de aramida FR.', tech: 'Sarga de aramida FR · EN 15614' },
  ],
  flagship: 'Lion V-Force',
  anatomiaIntro:
    'Lion V-Force integra sistema de humedad IsoDri y mangas raglán. Confirma la configuración del conjunto completo en la ficha técnica del modelo.',
  anatomia: [
    { t: 'Shell exterior', d: 'Lion V-Force se ofrece con shell PBI Max según configuración.' },
    { t: 'Sistema de humedad IsoDri', d: 'Sistema identificado en la ficha de Lion V-Force. Consulta la configuración solicitada para validar sus componentes.' },
    { t: 'Mangas raglán', d: 'Lion V-Force utiliza mangas raglán según su ficha de producto.' },
    { t: 'Barrera de humedad', d: 'En un traje estructural, la barrera de humedad forma parte de la configuración que debe verificarse en la ficha técnica y el certificado del modelo.' },
    { t: 'Forro térmico', d: 'El forro térmico debe revisarse como parte de la configuración completa del traje antes de la compra.' },
    { t: 'Trazabilidad NFPA 1850', d: 'Registra la fecha de fabricación y el historial de limpieza, inspección y reparación conforme a NFPA 1850 (2026).' },
  ],
  comparativa: [
    { modelo: 'Lion V-Force', tipo: 'estructural', shell: 'PBI Max según configuración', tpp: '—', thl: '—', peso: '—', ideal: 'Combate estructural', rec: true },
    { modelo: 'Lion RedZone', tipo: 'estructural', shell: '—', tpp: '—', thl: '—', peso: '—', ideal: 'Combate estructural', rec: false },
    { modelo: 'Lion V-Force EVO', tipo: 'estructural', shell: '—', tpp: '—', thl: '—', peso: '—', ideal: 'Combate estructural', rec: false },
    { modelo: 'Lion Super-Deluxe', tipo: 'estructural', shell: '—', tpp: '—', thl: '—', peso: '—', ideal: 'Combate estructural', rec: false },
    { modelo: 'Lion ENgage Wildland', tipo: 'forestal', shell: 'Sarga de aramida FR', tpp: '—', thl: '—', peso: '—', ideal: 'Incendios forestales y de maleza', rec: false },
    { modelo: 'Lion V-Force', tipo: 'estructural', shell: 'PBI Max según configuración', tpp: '—', thl: '—', peso: '—', ideal: 'Revisar configuración', rec: false },
  ],
  comparativaNote: NOTA_TPP_THL,
  guia: [
    { n: '01', t: 'Define el escenario dominante: combate estructural → Lion V-Force, Lion RedZone, Lion V-Force EVO o Lion Super-Deluxe; incendio forestal o de maleza → Lion ENgage Wildland.' },
    { n: '02', t: 'Para Lion V-Force, revisa el sistema de humedad IsoDri, las mangas raglán y la opción de shell PBI Max según la configuración requerida.' },
    { n: '03', t: 'Solicita la ficha técnica y el certificado aplicable del modelo exacto antes de integrarlo a una especificación.' },
    { n: '04', t: 'Registra la fecha de fabricación y el programa de inspección, limpieza y reparación. NFPA 1850 (2026) exige el retiro a más tardar 10 años después de la fabricación.' },
  ],
  segmentosIntro:
    'Los modelos Lion se seleccionan según el escenario de uso y la documentación disponible para el modelo y configuración requeridos.',
  segmentos: [
    { num: '01', tipo: 'estructural', titulo: 'Combate estructural', desc: 'Lion V-Force y Lion RedZone son opciones estructurales vigentes; valida la ficha del modelo antes de especificarlo.', modelos: 'Lion V-Force · Lion RedZone' },
    { num: '02', tipo: 'industrial', titulo: 'Evaluación de configuración', desc: 'Lion V-Force EVO y Lion Super-Deluxe son modelos estructurales vigentes. Solicita la información técnica de la configuración requerida.', modelos: 'Lion V-Force EVO · Lion Super-Deluxe' },
    { num: '03', tipo: 'forestal', titulo: 'Incendios forestales y de maleza', desc: 'Lion ENgage Wildland usa shell de sarga de aramida FR y se identifica con EN 15614.', modelos: 'Lion ENgage Wildland' },
    { num: '04', tipo: 'cbrn', titulo: 'Procesos de compra', desc: 'Integra la ficha técnica, el certificado aplicable y la carta de distribuidor autorizado al expediente del modelo seleccionado.', modelos: 'Lion V-Force · Lion RedZone · Lion V-Force EVO · Lion Super-Deluxe · Lion ENgage Wildland' },
  ],
  faqs: [
    { q: '¿Qué modelos Lion Apparel están vigentes?', a: 'Lion V-Force, Lion RedZone, Lion V-Force EVO y Lion Super-Deluxe son trajes estructurales vigentes. Lion ENgage Wildland está destinado a incendios forestales y de maleza.' },
    { q: '¿Qué datos se conocen de Lion V-Force?', a: 'Lion V-Force incorpora sistema de humedad IsoDri y mangas raglán; se ofrece con shell PBI Max según configuración. Solicita la ficha técnica y el certificado aplicable de la configuración solicitada.' },
    { q: '¿Qué norma identifica a Lion ENgage Wildland?', a: 'Lion ENgage Wildland se identifica con EN 15614 y usa shell de sarga de aramida FR para incendios forestales y de maleza.' },
    { q: '¿Qué documentación se puede solicitar para un proceso de compra?', a: 'Ficha técnica, certificado aplicable del modelo y carta de distribuidor autorizado para integrar el expediente de compra.' },
    { q: '¿Cuándo debe retirarse un traje según NFPA 1850?', a: 'NFPA 1850 (2026) exige retirar el traje a más tardar 10 años después de su fecha de fabricación. Mantén el registro de fabricación, inspección, limpieza y reparación durante su vida útil.' },
  ],
  ctaKicker: 'Documentación para licitación',
  ctaTitleHtml: 'Trajes estructurales<br/>y forestales.',
  waQuote: 'Hola, quiero cotizar trajes Lion Apparel.',
};

/* ════════════════════════════════════════════════════════════════════════════
   HONEYWELL MORNING PRIDE
   ════════════════════════════════════════════════════════════════════════════ */
const honeywell: EquipmentBrand = {
  categorySlug: 'trajes-bombero',
  slug: 'honeywell-morning-pride',
  brand: 'Morning Pride',
  brandLabel: 'Morning Pride',
  crossDesc: 'PIP · TAILS · VIPER · NFPA 1971',
  eyebrow: 'Morning Pride · PIP · Distribuidor Autorizado MX',
  heroTitleTop: 'Trajes Morning Pride',
  heroTitleAccent: 'estructurales y de proximidad.',
  heroLead:
    'Distribuidor autorizado de Morning Pride en México. Trajes estructurales TAILS y VIPER y sus versiones de proximidad, con stock permanente en CDMX y fichas técnicas para licitación.',
  heroIntro: [
    'Morning Pride es una marca de Protective Industrial Products (PIP), que adquirió el negocio de equipo de protección personal de Honeywell en mayo de 2025.',
    'TAILS y VIPER son trajes estructurales con certificación NFPA 1971; TAILS Proximity y VIPER Proximity integran la línea de proximidad NFPA 1971.',
  ],
  heroBadges: ['PIP', 'NFPA 1971', 'TAILS', 'VIPER', 'Distribuidor autorizado MX'],
  seoTitle: 'Trajes Morning Pride TAILS y VIPER NFPA 1971 — México',
  seoDescription:
    'Trajes Morning Pride en México: TAILS, VIPER, TAILS Proximity y VIPER Proximity con certificación NFPA 1971. Distribuidor autorizado · stock CDMX.',
  parentOrg: { name: 'Protective Industrial Products (PIP)' },
  stats: [
    { valor: 'PIP', etiq: 'Marca de PIP desde 2025' },
    { valor: 'NFPA 1971', etiq: 'Estructural y proximidad' },
    { valor: '4', etiq: 'Modelos en catálogo' },
    { valor: '32', etiq: 'Estados con cobertura' },
  ],
  credenciales: [
    { n: '01', t: 'Marca de PIP', d: 'Honeywell vendió su negocio de equipo de protección personal a Protective Industrial Products (PIP) en mayo de 2025; Morning Pride continúa como marca de PIP. Solicita la ficha técnica y el certificado vigentes de cada modelo.' },
    { n: '02', t: 'Estructural y proximidad', d: 'El catálogo cubre combate estructural (TAILS y VIPER) y proximidad (TAILS Proximity y VIPER Proximity), con una sola relación de distribuidor y un solo expediente documental.' },
    { n: '03', t: 'Zonas reemplazables en TAILS Proximity', d: 'TAILS Proximity permite reemplazar las zonas de entrepierna y asiento, áreas de desgaste frecuente en el uso de proximidad.' },
    { n: '04', t: 'Documentación para licitación', d: 'Entregamos ficha técnica, certificado del modelo y carta de distribuidor autorizado para procesos de compra públicos y corporativos.' },
  ],
  linesIntro:
    'Morning Pride se organiza en dos familias: trajes estructurales (TAILS y VIPER) y trajes de proximidad (TAILS Proximity y VIPER Proximity) para incendios con calor radiante intenso.',
  lineas: [
    { tipo: 'estructural', badge: 'NFPA 1971', titulo: 'Línea Estructural', modelos: '2 modelos — TAILS · VIPER', desc: 'Trajes estructurales Morning Pride vigentes para combate de incendios en edificaciones.', tech: 'Certificación NFPA 1971' },
    { tipo: 'proximidad', badge: 'NFPA 1971', titulo: 'Línea Proximity', modelos: '1 modelo — TAILS Proximity', desc: 'TAILS Proximity cuenta con zonas de entrepierna y asiento reemplazables.', tech: 'Zonas reemplazables' },
    { tipo: 'industrial', badge: 'NFPA 1971', titulo: 'Línea Proximity para líquidos inflamables', modelos: '1 modelo — VIPER Proximity', desc: 'Diseñado para el calor radiante de incendios de líquidos inflamables.', tech: 'Malla TES Nomex' },
    { tipo: 'cbrn', badge: '—', titulo: 'Otras configuraciones', modelos: '—', desc: 'Para requerimientos fuera de estas líneas, consulta la disponibilidad y la ficha técnica del modelo.', tech: '—' },
  ],
  flagship: 'TAILS',
  anatomiaIntro:
    'Un traje estructural se compone de capas que trabajan juntas. Estos seis elementos son los que conviene revisar en la ficha técnica del TAILS antes de especificarlo.',
  anatomia: [
    { t: 'Shell exterior', d: 'Capa externa que enfrenta llama, calor y abrasión. Verifica en la ficha del modelo la tela y el gramaje configurados.' },
    { t: 'Barrera de humedad', d: 'Capa intermedia que limita el paso de agua y líquidos hacia el interior y permite la salida de vapor.' },
    { t: 'Forro térmico', d: 'Capa interior de aislamiento; junto con las otras capas define el desempeño térmico que reporta el certificado.' },
    { t: 'Refuerzos', d: 'Zonas de rodilla, codo y hombro con refuerzo para el desgaste del uso operativo.' },
    { t: 'Certificación NFPA 1971', d: 'La etiqueta del traje identifica el modelo y la norma bajo la que fue certificado.' },
    { t: 'Trazabilidad NFPA 1850', d: 'Registra la fecha de fabricación y el historial de limpieza, inspección y reparación del traje conforme a NFPA 1850 (2026).' },
  ],
  comparativa: [
    { modelo: 'TAILS', tipo: 'estructural', shell: '—', tpp: '—', thl: '—', peso: '—', ideal: 'Combate estructural', rec: true },
    { modelo: 'VIPER', tipo: 'estructural', shell: '—', tpp: '—', thl: '—', peso: '—', ideal: 'Combate estructural', rec: false },
    { modelo: 'TAILS Proximity', tipo: 'proximidad', shell: '—', tpp: '—', thl: '—', peso: '—', ideal: 'Proximidad · zonas reemplazables', rec: false },
    { modelo: 'VIPER Proximity', tipo: 'industrial', shell: '—', tpp: '—', thl: '—', peso: '—', ideal: 'Incendios de líquidos inflamables', rec: false },
    { modelo: 'TAILS', tipo: 'cbrn', shell: '—', tpp: '—', thl: '—', peso: '—', ideal: 'Consultar configuración', rec: false },
    { modelo: 'VIPER Proximity', tipo: 'industrial', shell: 'Con malla TES Nomex', tpp: '—', thl: '—', peso: '—', ideal: 'Calor radiante', rec: false },
  ],
  comparativaNote: NOTA_TPP_THL,
  guia: [
    { n: '01', t: 'Define el escenario dominante: combate estructural → TAILS o VIPER; incendios con calor radiante intenso → TAILS Proximity o VIPER Proximity.' },
    { n: '02', t: 'Revisa en la ficha técnica la configuración de shell, barrera de humedad y forro térmico del modelo.' },
    { n: '03', t: 'Define tallas, capucha y accesorios, y verifica que el conjunto completo esté certificado.' },
    { n: '04', t: 'Exige el certificado del modelo y registra la fecha de fabricación para el programa de cuidado NFPA 1850 (2026).' },
  ],
  segmentosIntro:
    'Morning Pride atiende a cuerpos de bomberos y brigadas que requieren trajes estructurales y de proximidad con documentación por modelo.',
  segmentos: [
    { num: '01', tipo: 'industrial', titulo: 'Instalaciones con líquidos inflamables', desc: 'Las brigadas de instalaciones con almacenamiento o proceso de líquidos inflamables pueden combinar trajes estructurales con VIPER Proximity para el calor radiante de ese tipo de incendios.', modelos: 'TAILS · VIPER Proximity' },
    { num: '02', tipo: 'cbrn', titulo: 'Brigadas con riesgos especiales', desc: 'Para riesgos químicos se requiere equipo específico (ver trajes HAZMAT); el traje estructural no sustituye la protección química.', modelos: 'Consultar' },
    { num: '03', tipo: 'proximidad', titulo: 'Proximidad', desc: 'TAILS Proximity y VIPER Proximity atienden operaciones con calor radiante intenso; verifica en la ficha la configuración aluminizada del modelo.', modelos: 'TAILS Proximity · VIPER Proximity' },
    { num: '04', tipo: 'estructural', titulo: 'Departamentos de bomberos', desc: 'TAILS y VIPER cubren el combate estructural con certificación NFPA 1971 y documentación para licitación.', modelos: 'TAILS · VIPER' },
  ],
  faqs: [
    { q: '¿Cuál es la diferencia entre NFPA 1970 y NFPA 2112?', a: 'NFPA 1970 (2025) consolidó la antigua NFPA 1971, que certifica trajes para combate estructural y de proximidad. NFPA 2112 es una norma industrial para ropa de protección contra flash fire; no sustituye a la certificación de un traje de bombero.' },
    { q: '¿Quién fabrica hoy los trajes Morning Pride?', a: 'Morning Pride es una marca de Protective Industrial Products (PIP), que adquirió el negocio de equipo de protección personal de Honeywell en mayo de 2025.' },
    { q: '¿Qué diferencia hay entre TAILS Proximity y VIPER Proximity?', a: 'Ambos son trajes de proximidad NFPA 1971. TAILS Proximity tiene zonas de entrepierna y asiento reemplazables; VIPER Proximity está diseñado para el calor radiante de incendios de líquidos inflamables e incorpora malla TES Nomex.' },
    { q: '¿Cómo compara el TAILS con el Lion V-Force y el Globe G-XTREME 3.0?', a: 'Los tres son trajes estructurales NFPA 1971. Globe G-XTREME 3.0 usa barrera GORE-TEX CROSSTECH Innovate; Lion V-Force incorpora el sistema de humedad IsoDri y mangas raglán. Compara la ficha técnica de cada modelo con los requisitos del pliego.' },
    { q: '¿Qué documentación entregan con cada traje?', a: 'Ficha técnica del modelo, certificado de la norma aplicable y carta de distribuidor autorizado para el proceso de compra.' },
  ],
  ctaKicker: 'NFPA 1971 · estructural y proximidad',
  ctaTitleHtml: 'Estructural y proximidad.<br/>Un solo proveedor.',
  waQuote: 'Hola, quiero cotizar trajes Morning Pride NFPA 1971.',
};

/* ════════════════════════════════════════════════════════════════════════════
   FIRE-DEX
   ════════════════════════════════════════════════════════════════════════════ */
const fireDex: EquipmentBrand = {
  categorySlug: 'trajes-bombero',
  slug: 'fire-dex',
  brand: 'Fire-Dex',
  brandLabel: 'Fire-Dex',
  crossDesc: 'FXR con TECGEN71 · TECGEN51 · AeroFlex · Proximity Turnouts · Wildland',
  eyebrow: 'Fire-Dex · TECGEN® Technology · Distribuidor Autorizado MX',
  heroTitleTop: 'Trajes Fire-Dex',
  heroTitleAccent: 'estructurales, de proximidad y multifuncionales.',
  heroLead:
    'Distribuidor autorizado de Fire-Dex en México. Consulta disponibilidad en CDMX y documentación técnica para licitación del modelo requerido.',
  heroIntro: [
    'El catálogo vigente incluye Fire-Dex FXR con shell TECGEN71, Fire-Dex TECGEN51 multifuncional, Fire-Dex AeroFlex, Fire-Dex Proximity Turnouts y Fire-Dex Wildland.',
    'FXR con TECGEN71 y AeroFlex son trajes estructurales. TECGEN51 multifuncional y Wildland se identifican con NFPA 1950; Proximity Turnouts se identifica con NFPA 1971 para ARFF y proximidad.',
  ],
  heroBadges: ['NFPA 1970 (2025)', 'NFPA 1950 (2025)', 'NFPA 1971', 'TECGEN71', 'TECGEN51', 'Proximity Turnouts', 'Distribuidor autorizado MX'],
  seoTitle: 'Trajes Fire-Dex NFPA 1970 — TECGEN® · México',
  seoDescription:
    'Catálogo Fire-Dex en México: FXR con shell TECGEN71, TECGEN51 multifuncional, AeroFlex, Proximity Turnouts y Wildland. Documentación técnica para licitación.',
  stats: [
    { valor: '5', etiq: 'Modelos vigentes listados' },
    { valor: '2', etiq: 'Modelos estructurales' },
    { valor: 'NFPA 1950', etiq: 'TECGEN51 y Wildland' },
    { valor: 'NFPA 1971', etiq: 'Proximity Turnouts' },
  ],
  credenciales: [
    { n: '01', t: 'Documentación para licitación', d: 'Se puede solicitar ficha técnica, certificado aplicable y carta de distribuidor autorizado para integrar el expediente del modelo requerido.' },
    { n: '02', t: 'Shell TECGEN71', d: 'El shell TECGEN71 de Fire-Dex, desarrollado con Milliken, combina Nomex, Kevlar y fibra TECGEN en sarga ripstop.' },
    { n: '03', t: 'Modelos por aplicación', d: 'El catálogo reúne opciones estructurales, de proximidad, forestales, de rescate y para servicios no estructurales. La ficha del modelo define la configuración aplicable.' },
    { n: '04', t: 'Ciclo de vida del equipo', d: 'NFPA 1850 (2026) exige retirar el conjunto a más tardar 10 años después de su fecha de fabricación. Registra fabricación, inspección, limpieza y reparación durante su vida útil.' },
  ],
  linesIntro:
    'La línea vigente reúne dos trajes estructurales, una prenda multifuncional, una opción de proximidad para ARFF y una opción forestal. Revisa la ficha técnica antes de definir una configuración.',
  lineas: [
    { tipo: 'estructural', badge: 'NFPA 1970 (2025)', titulo: 'Línea estructural', modelos: '2 modelos — Fire-Dex FXR con shell TECGEN71 · Fire-Dex AeroFlex', desc: 'Fire-Dex FXR con shell TECGEN71 y Fire-Dex AeroFlex son los modelos estructurales vigentes del catálogo.', tech: 'TECGEN71 en FXR · ficha técnica por modelo' },
    { tipo: 'forestal', badge: 'NFPA 1950 (2025)', titulo: 'Línea multifuncional y forestal', modelos: '2 modelos — Fire-Dex TECGEN51 multifuncional · Fire-Dex Wildland', desc: 'TECGEN51 está disponible para rescate, forestal y servicios no estructurales. Wildland se ofrece como chamarra, pantalón y overol para uso forestal.', tech: 'TECGEN51 de una capa · algodón Ultrasoft o Nomex Essential' },
    { tipo: 'proximidad', badge: 'NFPA 1971', titulo: 'Línea de proximidad', modelos: '1 modelo — Fire-Dex Proximity Turnouts', desc: 'Fire-Dex Proximity Turnouts está destinado a ARFF y se basa en el diseño FXR.', tech: 'Newtex Z-Flex II P-202 o Norfab Choice Aluminized AL8' },
    { tipo: 'cbrn', badge: '—', titulo: 'Configuraciones por confirmar', modelos: '—', desc: 'Para requerimientos fuera de las aplicaciones listadas, confirma disponibilidad, configuración y documentación del modelo antes de especificarlo.', tech: '—' },
  ],
  flagship: 'Fire-Dex FXR con shell TECGEN71',
  anatomiaIntro:
    'Fire-Dex FXR con shell TECGEN71 utiliza un shell desarrollado con Milliken. Estos elementos corresponden a los datos disponibles para el modelo y a la revisión de su configuración.',
  anatomia: [
    { t: 'Shell exterior TECGEN71', d: 'El shell exclusivo de Fire-Dex fue desarrollado con Milliken y combina Nomex, Kevlar y fibra TECGEN.' },
    { t: 'Sarga ripstop', d: 'La ficha del shell TECGEN71 identifica una construcción de sarga ripstop.' },
    { t: 'Sin PFAS añadidos intencionalmente', d: 'El shell TECGEN71 se identifica como sin PFAS añadidos intencionalmente.' },
    { t: 'Configuración de capas', d: 'La configuración de las capas del conjunto debe confirmarse en la ficha técnica y el certificado del modelo solicitado.' },
    { t: 'NFPA 1970 (2025)', d: 'Fire-Dex FXR con shell TECGEN71 se identifica con NFPA 1970 (2025) para uso estructural.' },
    { t: 'Trazabilidad NFPA 1850', d: 'Registra la fecha de fabricación y el historial de limpieza, inspección y reparación. NFPA 1850 (2026) exige el retiro a más tardar 10 años después de la fabricación.' },
  ],
  comparativa: [
    { modelo: 'Fire-Dex FXR con shell TECGEN71', tipo: 'estructural', shell: 'Nomex/Kevlar y fibra TECGEN · sarga ripstop', tpp: '—', thl: '—', peso: '—', ideal: 'Combate estructural', rec: true },
    { modelo: 'Fire-Dex TECGEN51 multifuncional', tipo: 'usar', shell: 'TECGEN51 de una capa', tpp: '—', thl: '—', peso: '—', ideal: 'Rescate, forestal y servicios no estructurales', rec: false },
    { modelo: 'Fire-Dex AeroFlex', tipo: 'estructural', shell: '—', tpp: '—', thl: '—', peso: '—', ideal: 'Combate estructural', rec: false },
    { modelo: 'Fire-Dex Proximity Turnouts', tipo: 'proximidad', shell: 'Newtex Z-Flex II P-202 o Norfab Choice Aluminized AL8', tpp: '—', thl: '—', peso: '—', ideal: 'ARFF y proximidad', rec: false },
    { modelo: 'Fire-Dex Wildland', tipo: 'forestal', shell: 'Algodón Ultrasoft o Nomex Essential', tpp: '—', thl: '—', peso: '—', ideal: 'Incendios forestales', rec: false },
    { modelo: 'Fire-Dex FXR con shell TECGEN71', tipo: 'estructural', shell: 'Nomex/Kevlar y fibra TECGEN · sarga ripstop', tpp: '—', thl: '—', peso: '—', ideal: 'Revisar configuración de capas', rec: false },
  ],
  comparativaNote: NOTA_TPP_THL,
  guia: [
    { n: '01', t: 'Define el escenario dominante: combate estructural → Fire-Dex FXR con shell TECGEN71 o Fire-Dex AeroFlex; rescate, forestal o servicios no estructurales → Fire-Dex TECGEN51 multifuncional; ARFF → Fire-Dex Proximity Turnouts.' },
    { n: '02', t: 'Para Fire-Dex FXR con shell TECGEN71, revisa el shell Nomex/Kevlar y fibra TECGEN, la sarga ripstop y la configuración de capas indicada en la ficha técnica.' },
    { n: '03', t: 'Para Fire-Dex Wildland, confirma si se requiere chamarra, pantalón u overol y la opción de algodón Ultrasoft o Nomex Essential. Para Proximity Turnouts, revisa la opción de shell aluminizado requerida.' },
    { n: '04', t: 'Solicita la ficha técnica y el certificado aplicable del modelo exacto. Registra la fecha de fabricación para el programa de cuidado conforme a NFPA 1850 (2026).' },
  ],
  segmentosIntro:
    'Los modelos Fire-Dex se seleccionan según el escenario de uso, la norma indicada y la configuración disponible. La ficha técnica del modelo solicitado permite verificar estos datos antes de integrarlo a una especificación.',
  segmentos: [
    { num: '01', tipo: 'estructural', titulo: 'Combate estructural', desc: 'Fire-Dex FXR con shell TECGEN71 y Fire-Dex AeroFlex son los modelos estructurales vigentes. Solicita la ficha y el certificado aplicable de la configuración requerida.', modelos: 'Fire-Dex FXR con shell TECGEN71 · Fire-Dex AeroFlex' },
    { num: '02', tipo: 'usar', titulo: 'Rescate y servicios no estructurales', desc: 'Fire-Dex TECGEN51 multifuncional está disponible como chamarra, pantalón y overol para rescate, forestal y servicios no estructurales.', modelos: 'Fire-Dex TECGEN51 multifuncional' },
    { num: '03', tipo: 'forestal', titulo: 'Incendios forestales', desc: 'Fire-Dex Wildland está disponible como chamarra, pantalón y overol en algodón Ultrasoft o Nomex Essential.', modelos: 'Fire-Dex Wildland' },
    { num: '04', tipo: 'proximidad', titulo: 'ARFF y proximidad', desc: 'Fire-Dex Proximity Turnouts está basado en el diseño FXR y puede configurarse con shell Newtex Z-Flex II P-202 o Norfab Choice Aluminized AL8.', modelos: 'Fire-Dex Proximity Turnouts' },
  ],
  faqs: [
    { q: '¿Qué modelos Fire-Dex están vigentes?', a: 'Los modelos vigentes listados son Fire-Dex FXR con shell TECGEN71, Fire-Dex TECGEN51 multifuncional, Fire-Dex AeroFlex, Fire-Dex Proximity Turnouts y Fire-Dex Wildland.' },
    { q: '¿Qué datos se conocen de Fire-Dex FXR con shell TECGEN71?', a: 'El shell TECGEN71 exclusivo de Fire-Dex fue desarrollado con Milliken; combina Nomex, Kevlar y fibra TECGEN, utiliza sarga ripstop y se identifica como sin PFAS añadidos intencionalmente. El modelo se identifica con NFPA 1970 (2025).' },
    { q: '¿Para qué aplicaciones sirve Fire-Dex TECGEN51 multifuncional?', a: 'Fire-Dex TECGEN51 multifuncional es una prenda de una capa disponible como chamarra, pantalón y overol para rescate, forestal y servicios no estructurales. Se identifica con NFPA 1950.' },
    { q: '¿Qué opciones tiene Fire-Dex Proximity Turnouts?', a: 'Está destinado a ARFF, se basa en el diseño FXR y se ofrece con shell Newtex Z-Flex II P-202 o Norfab Choice Aluminized AL8. Se identifica con NFPA 1971.' },
    { q: '¿Cuándo debe retirarse un traje según NFPA 1850?', a: 'NFPA 1850 (2026) exige retirar el conjunto a más tardar 10 años después de su fecha de fabricación. Mantén el registro de fabricación, inspección, limpieza y reparación durante su vida útil.' },
  ],
  ctaKicker: 'Documentación técnica por modelo',
  ctaTitleHtml: 'Revisa el modelo.<br/>Solicita su ficha.',
  waQuote: 'Hola, quiero cotizar trajes Fire-Dex.',
};

/* ════════════════════════════════════════════════════════════════════════════
   SKÖLD SAFETY
   ════════════════════════════════════════════════════════════════════════════ */

/* Nota de comparativa específica de Sköld — distingue "certificado" de "equivalente" */
const NOTA_SKOLD =
  '* Sköld no publica valores de laboratorio TPP/THL para sus conjuntos: se indica «s/d fabricante» en lugar de estimarlos. ' +
  'Solo el Herö PBI cuenta con certificación UL verificable (NFPA 1971 Ed. 2018 · laboratorio UL MH60435); las demás líneas declaran ' +
  '«equivalencia» con la norma, lo cual no es lo mismo que una certificación emitida por un laboratorio acreditado. ' +
  'Solicítenos la ficha técnica del fabricante antes de integrar cualquier partida a un pliego de licitación.';

const skold: EquipmentBrand = {
  categorySlug: 'trajes-bombero',
  slug: 'skold',
  brand: 'Sköld',
  brandLabel: 'Sköld Safety',
  crossDesc: 'Fabricante mexicano · Herö certificado UL · 5 modelos vigentes',
  eyebrow: 'Sköld Safety · Empresa mexicana · Documentación por modelo',
  heroTitleTop: 'Trajes Sköld',
  heroTitleAccent: 'de fabricante mexicano.',
  heroLead:
    'Sköld Safety ofrece cinco modelos vigentes para uso estructural, brigadas industriales, incendio forestal, aproximación y rescate.',
  heroIntro: [
    'Sköld Safety es un fabricante mexicano de equipo de protección personal. Para cada modelo, solicita la ficha técnica y la documentación aplicable antes de integrarlo a una especificación.',
    'Sköld Herö cuenta con certificación UL bajo NFPA 1971 (2018). Sköld Defender y Sköld Forestal FPFTJ / FPFTP tienen equivalencia declarada por el fabricante; esta declaración no equivale a una certificación de tercero.',
  ],
  heroBadges: ['NFPA 1971 (2018)', 'Certificado UL', 'Equivalencia declarada', 'NFPA 1977 (2011)', 'NFPA 1950 (2025)', 'NFPA 2112', 'Fabricación mexicana'],
  seoTitle: 'Trajes Sköld — Herö, Defender, Forestal y Rescate | México',
  seoDescription:
    'Catálogo Sköld Safety en México: Herö con certificación UL bajo NFPA 1971 (2018), Defender, Forestal, Aproximación y Overol de Rescate. Fichas técnicas y documentación para licitación.',
  stats: [
    { valor: '5', etiq: 'Modelos vigentes listados' },
    { valor: 'UL', etiq: 'Certificación del Sköld Herö' },
    { valor: 'NFPA 1971', etiq: 'Herö · edición 2018' },
    { valor: 'NFPA 2112', etiq: 'Tela del Overol de Rescate' },
  ],
  credenciales: [
    { n: '01', t: 'Fabricación mexicana', d: 'Sköld Safety es un fabricante mexicano. Solicita la ficha técnica del modelo requerido para confirmar materiales, configuración y alcance de protección.' },
    { n: '02', t: 'Herö con certificación UL', d: 'Sköld Herö cuenta con certificación UL bajo NFPA 1971 (2018). Verifica el certificado vigente y la configuración exacta antes de especificar el conjunto.' },
    { n: '03', t: 'Equivalencia declarada', d: 'Sköld Defender y Sköld Forestal FPFTJ / FPFTP se identifican con equivalencia declarada por el fabricante. No debe presentarse como certificación emitida por un tercero.' },
    { n: '04', t: 'Ciclo de vida del conjunto', d: 'NFPA 1850 (2026) exige retirar el conjunto a más tardar 10 años después de la fabricación. Conserva el registro de fabricación, inspección, limpieza y reparación.' },
  ],
  linesIntro:
    'Los modelos vigentes se organizan por aplicación. La ficha técnica, el certificado o la declaración del fabricante definen el alcance de cada uno.',
  lineas: [
    { tipo: 'estructural', badge: 'NFPA 1971 (2018) · UL', titulo: 'Sköld Herö', familiaLabel: 'Herö', flagship: 'skold-hero-pbi-estructural', modelos: '1 modelo — Sköld Herö', desc: 'Traje estructural con certificación UL bajo NFPA 1971 (2018). La ficha del modelo identifica shell PBI MAX 7.0, barrera Stedair 3000, liner Defender M y DRD.', tech: 'PBI MAX 7.0 · Stedair 3000 · Defender M · DRD' },
    { tipo: 'industrial', badge: 'Equivalencia declarada NFPA 1971 (1991)', titulo: 'Sköld Defender', familiaLabel: 'Defender', flagship: 'skold-defender-brigadista', modelos: '1 modelo — Sköld Defender', desc: 'Modelo para brigadas industriales con shell Nomex IIIA y barrera de neopreno. El fabricante declara equivalencia con NFPA 1971 (1991); no es una certificación de tercero.', tech: 'Nomex IIIA · barrera de neopreno' },
    { tipo: 'forestal', badge: 'Equivalencia declarada NFPA 1977 (2011)', titulo: 'Sköld Forestal FPFTJ / FPFTP', familiaLabel: 'Forestal', flagship: 'skold-forestal-nomex', modelos: '1 conjunto — chamarra FPFTJ · pantalón FPFTP', desc: 'Conjunto forestal en Nomex IIIA con repelente al agua. El fabricante declara equivalencia con NFPA 1977 (2011), consolidada posteriormente en NFPA 1950 (2025).', tech: 'Nomex IIIA · repelente al agua' },
    { tipo: 'proximidad', badge: 'Documentación por confirmar', titulo: 'Sköld Aproximación', familiaLabel: 'Aproximación', flagship: 'skold-aproximacion-aluminizado', modelos: '1 modelo — Sköld Aproximación', desc: 'Traje de aproximación disponible como FPAPROX91 para brigadista y FPAPROX13 profesional con DRD. La ficha identifica shell de Kevlar aluminizado, liner Nomex/Kevlar y barrera configurable.', tech: 'Kevlar aluminizado · liner Nomex/Kevlar · barrera configurable' },
    { tipo: 'usar', badge: 'Tela con NFPA 2112', titulo: 'Sköld Overol de Rescate', familiaLabel: 'Overol de Rescate', flagship: 'skold-overol-rescate', modelos: '1 modelo — Sköld Overol de Rescate', desc: 'Overol de rescate en tela FR con certificación NFPA 2112 y costuras en hilo Kevlar. NFPA 2112 corresponde a ropa industrial para flash fire; no sustituye un traje estructural.', tech: 'Tela FR con NFPA 2112 · hilo Kevlar' },
  ],
  flagship: 'Sköld Herö',
  anatomiaIntro:
    'Sköld Herö cuenta con certificación UL bajo NFPA 1971 (2018). Estos elementos corresponden a la configuración identificada en la ficha del modelo.',
  anatomia: [
    { t: 'Shell exterior PBI MAX 7.0', d: 'La ficha del modelo identifica un shell PBI MAX 7.0, compuesto por 70 % PBI y 30 % Kevlar.' },
    { t: 'Barrera Stedair 3000', d: 'La configuración de Sköld Herö identifica barrera Stedair 3000.' },
    { t: 'Liner Defender M', d: 'La configuración de Sköld Herö identifica liner Defender M.' },
    { t: 'DRD', d: 'La ficha de Sköld Herö identifica un DRD como parte de la configuración del modelo.' },
    { t: 'Opciones de shell', d: 'Además de PBI MAX 7.0, la ficha identifica otras opciones de shell. Confirma la configuración solicitada.' },
    { t: 'Certificación NFPA 1971', d: 'Sköld Herö cuenta con certificación UL bajo NFPA 1971 (2018). Conserva su documentación y registro de cuidado conforme a NFPA 1850 (2026).' },
  ],
  comparativa: [
    { modelo: 'Sköld Herö', tipo: 'estructural', shell: 'PBI MAX 7.0 (70 % PBI / 30 % Kevlar)', tpp: '—', thl: '—', peso: '—', ideal: 'Combate estructural · certificado UL', rec: true },
    { modelo: 'Sköld Defender', tipo: 'industrial', shell: 'Nomex IIIA · barrera de neopreno', tpp: '—', thl: '—', peso: '—', ideal: 'Brigadas industriales · equivalencia declarada', rec: false },
    { modelo: 'Sköld Forestal FPFTJ / FPFTP', tipo: 'forestal', shell: 'Nomex IIIA con repelente al agua', tpp: '—', thl: '—', peso: '—', ideal: 'Incendio forestal · equivalencia declarada', rec: false },
    { modelo: 'Sköld Aproximación', tipo: 'proximidad', shell: 'Kevlar aluminizado · liner Nomex/Kevlar', tpp: '—', thl: '—', peso: '—', ideal: 'Aproximación a calor radiante', rec: false },
    { modelo: 'Sköld Overol de Rescate', tipo: 'usar', shell: 'Tela FR con NFPA 2112', tpp: '—', thl: '—', peso: '—', ideal: 'Rescate', rec: false },
    { modelo: 'Sköld Herö', tipo: 'estructural', shell: '—', tpp: '—', thl: '—', peso: '—', ideal: 'Solicitar ficha y certificado vigentes', rec: false },
  ],
  comparativaLabel: 'Modelos Sköld — certificación y declaración aplicable',
  comparativaNote: NOTA_SKOLD,
  guia: [
    { n: '01', t: 'Define el escenario: combate estructural → Sköld Herö; brigada industrial → Sköld Defender; incendio forestal → Sköld Forestal FPFTJ / FPFTP; aproximación → Sköld Aproximación; rescate → Sköld Overol de Rescate.' },
    { n: '02', t: 'Si el requisito exige certificación de tercero, revisa el certificado UL de Sköld Herö bajo NFPA 1971 (2018). Defender y Forestal tienen equivalencia declarada por el fabricante.' },
    { n: '03', t: 'Revisa los materiales y la configuración documentada para el modelo: PBI MAX 7.0, Stedair 3000, Defender M y DRD en Herö; Nomex IIIA y neopreno en Defender; o los componentes listados para los demás modelos.' },
    { n: '04', t: 'Solicita la ficha técnica, certificado o declaración aplicable antes de la compra. Registra la fecha de fabricación y el historial de cuidado conforme a NFPA 1850 (2026).' },
  ],
  segmentosIntro:
    'La selección debe partir del escenario de uso y del alcance documental requerido para cada modelo.',
  segmentos: [
    { num: '01', tipo: 'industrial', titulo: 'Brigadas industriales', desc: 'Sköld Defender se identifica para brigadas industriales con shell Nomex IIIA y barrera de neopreno. Revisa la declaración de equivalencia del fabricante.', modelos: 'Sköld Defender' },
    { num: '02', tipo: 'estructural', titulo: 'Combate estructural', desc: 'Sköld Herö cuenta con certificación UL bajo NFPA 1971 (2018). Confirma el certificado vigente y la configuración requerida.', modelos: 'Sköld Herö' },
    { num: '03', tipo: 'forestal', titulo: 'Incendio forestal', desc: 'Sköld Forestal FPFTJ / FPFTP incluye chamarra y pantalón en Nomex IIIA con repelente al agua. El fabricante declara equivalencia con NFPA 1977 (2011).', modelos: 'Sköld Forestal FPFTJ / FPFTP' },
    { num: '04', tipo: 'proximidad', titulo: 'Aproximación y rescate', desc: 'Sköld Aproximación se ofrece en configuraciones FPAPROX91 y FPAPROX13. Sköld Overol de Rescate usa tela FR con NFPA 2112 para aplicación industrial.', modelos: 'Sköld Aproximación · Sköld Overol de Rescate' },
  ],
  faqs: [
    { q: '¿Qué modelo Sköld cuenta con certificación UL?', a: 'Sköld Herö cuenta con certificación UL bajo NFPA 1971 (2018). Solicita el certificado vigente y confirma la configuración exacta del conjunto.' },
    { q: '¿Defender y Forestal cuentan con certificación de tercero?', a: 'No. Sköld Defender y Sköld Forestal FPFTJ / FPFTP tienen equivalencia declarada por el fabricante. Esta declaración no equivale a una certificación emitida por un laboratorio acreditado.' },
    { q: '¿Qué norma corresponde al Sköld Forestal?', a: 'El fabricante declara equivalencia con NFPA 1977 (2011). NFPA 1950 (2025) consolidó NFPA 1977 junto con otras normas de protección para rescate y uso forestal.' },
    { q: '¿NFPA 2112 certifica un traje estructural?', a: 'No. En Sköld Overol de Rescate, NFPA 2112 corresponde a la tela FR para protección industrial ante flash fire. No sustituye un traje de bombero estructural certificado.' },
    { q: '¿Qué componentes identifica la ficha de Sköld Herö?', a: 'La ficha identifica shell PBI MAX 7.0, barrera Stedair 3000, liner Defender M y DRD. Confirma las opciones de shell de la configuración solicitada.' },
    { q: '¿Cuándo debe retirarse un traje?', a: 'NFPA 1850 (2026) exige retirar el conjunto a más tardar 10 años después de la fabricación. Mantén el registro de fabricación, inspección, limpieza y reparación.' },
  ],
  ctaKicker: 'Sköld Herö · certificado UL',
  ctaTitleHtml: 'Define el escenario.<br/>Revisa la documentación.',
  waQuote: 'Hola, quiero cotizar trajes Sköld.',
  notaPie:
    'Los rangos de inversión mostrados son precios de referencia en pesos mexicanos observados en distribuidores autorizados (Seguri, Priosa, Grainger México y Mastertec) a agosto de 2026, e incluyen IVA donde el distribuidor lo publica así. No constituyen cotización: el precio final depende de talla, color, configuración y volumen. Datos técnicos tomados de las fichas técnicas publicadas por Sköld Safety.',
};

/* ── Export ────────────────────────────────────────────────────────────────── */
export const trajesBrandList: EquipmentBrand[] = [globe, lion, honeywell, fireDex, skold];
