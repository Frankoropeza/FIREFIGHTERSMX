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
  crossDesc: 'Ficha técnica para licitación · G-XTREME 3.0 · GORE-TEX CROSSTECH Innovate',
  eyebrow: 'Globe Manufacturing · MSA Safety · Distribuidor Autorizado MX',
  heroTitleTop: 'Trajes Globe',
  heroTitleAccent: 'NFPA 1970.',
  heroLead:
    'Distribuidor autorizado de Globe Manufacturing en México. Stock permanente de los 6 modelos en tallas S–4XL — entrega en 24–48 h en CDMX con ficha técnica completa para licitación.',
  heroIntro: [
    'Globe Manufacturing — fundada en 1887 y parte del grupo MSA Safety — fabrica trajes para bomberos con fichas técnicas para licitaciones mexicanas. Su catálogo incluye opciones para distintos escenarios operativos.',
    'Su línea cubre los tres tipos de riesgo: trajes estructurales (NFPA 1970) para combate en edificios, traje de proximidad aluminizado para aeropuertos ARFF y refinerías, y traje forestal (NFPA 1950) para incendio de interfaz urbano-forestal.',
  ],
  heroBadges: ['NFPA 1970', 'NFPA 1950', 'PBI MAX', 'GORE-TEX CROSSTECH Innovate', 'MSA Safety', '110+ años', 'Distribuidor autorizado MX'],
  seoTitle: 'Trajes Globe Manufacturing NFPA 1970 — Distribuidor MX',
  seoDescription:
    'Catálogo de trajes Globe Manufacturing en México. G-XTREME 3.0, ATHLETIX, CLASSIX, G-XCEL y Globe Proximity. Distribuidor autorizado con stock en CDMX.',
  founding: '1887',
  parentOrg: { name: 'MSA Safety Incorporated', ticker: 'NYSE:MSA' },
  stats: [
    { valor: '1887', etiq: 'Año de fundación' },
    { valor: 'NFPA 1970', etiq: 'Línea estructural certificada' },
    { valor: 'MSA Safety', etiq: 'Grupo industrial · NYSE: MSA' },
    { valor: '32', etiq: 'Estados con cobertura' },
  ],
  credenciales: [
    { n: '01', t: '110+ años fabricando EPP', d: 'Globe fue fundada en 1887 en Pittsfield, New Hampshire. Hoy forma parte del grupo MSA Safety — una empresa de seguridad industrial que cotiza en NYSE como MSA. Más de un siglo de innovación en protección de bomberos.' },
    { n: '02', t: 'Especificación para licitaciones', d: 'Para concursos públicos y adquisiciones directas, te entregamos la ficha técnica y el certificado NFPA 1970 del modelo Globe que especifiques.' },
    { n: '03', t: 'Trazabilidad completa NFPA 1850', d: 'Cada traje Globe incluye etiqueta con número de lote, fecha de fabricación y certificación del laboratorio acreditado. Documentación completa para auditorías NFPA 1850, licitaciones y procesos de acreditación institucional.' },
    { n: '04', t: 'Stock permanente en CDMX', d: 'Mantenemos inventario de los modelos principales en tallas S–4XL en nuestro almacén en CDMX. Entrega en 24–48 horas para emergencias operativas y reposición de trajes dañados o retirados por vida útil.' },
  ],
  linesIntro:
    'Globe cubre los tres escenarios de riesgo NFPA desde un solo proveedor: estructural para combate en edificios e instalaciones, proximidad para aeropuertos y refinerías, y forestal para interfaz urbano-forestal. Una sola relación de distribución para toda la flota.',
  lineas: [
    { tipo: 'estructural', badge: 'NFPA 1970', titulo: 'Línea Estructural', modelos: '4 modelos — G-XTREME 3.0 · ATHLETIX · CLASSIX · G-XCEL', desc: 'La gama estructural reúne opciones para distintos escenarios operativos. G-XTREME 3.0 usa barrera GORE-TEX CROSSTECH Innovate.', tech: 'PBI MAX · GORE-TEX CROSSTECH Innovate' },
    { tipo: 'proximidad', badge: '—', titulo: 'Línea Proximity', modelos: '1 modelo — Globe Proximity', desc: 'Para aproximación a calor radiante. Shell de tejido de punto con mezcla PBI y película aluminizada laminada.', tech: 'Mezcla PBI · película aluminizada laminada' },
    { tipo: 'forestal', badge: 'NFPA 1950', titulo: 'Línea Forestal / Interfaz', modelos: '1 modelo — Fire-Dex Wildland', desc: 'Para brigadas forestales y de interfaz urbano-forestal.', tech: 'Algodón Ultrasoft o Nomex Essential · NFPA 1977 (hoy NFPA 1950)' },
  ],
  flagship: 'G-XTREME 3.0',
  anatomiaIntro:
    'El G-XTREME 3.0 es un sistema de tres capas más interfaces y refuerzos. Estos seis elementos describen su configuración estructural para operaciones de uso intensivo.',
  anatomia: [
    { t: 'Shell exterior PBI MAX', d: 'Disponible en PBI MAX 7.0 o 6.0 oz, o PBI MAX LP según la configuración.' },
    { t: 'Barrera GORE-TEX CROSSTECH Innovate', d: 'Barrera de humedad GORE-TEX CROSSTECH Innovate; flúor ≤100 ppm en certificación.' },
    { t: 'Forro térmico', d: '—' },
    { t: 'Costuras de doble aguja', d: 'Uniones reforzadas con hilo Nomex de doble aguja que conservan la integridad estructural del conjunto y la barrera de humedad ante esfuerzo mecánico.' },
    { t: 'Trim reflejante 3M Scotchlite', d: 'Bandas retroreflejantes y fluorescentes en configuración NFPA para visibilidad de 360° en humo, noche y baja iluminación.' },
    { t: 'Trazabilidad NFPA 1850', d: 'Etiqueta con número de lote, fecha de fabricación y laboratorio acreditado para auditoría, control de vida útil y reposición a los 10 años.' },
  ],
  comparativa: [
    { modelo: 'G-XTREME 3.0', tipo: 'estructural', shell: 'PBI MAX 7.0 / 6.0 oz o PBI MAX LP', tpp: '—', thl: '—', peso: '—', ideal: 'Uso estructural', rec: true },
    { modelo: 'ATHLETIX', tipo: 'estructural', shell: '—', tpp: '—', thl: '—', peso: '—', ideal: 'Uso estructural', rec: false },
    { modelo: 'CLASSIX', tipo: 'estructural', shell: '—', tpp: '—', thl: '—', peso: '—', ideal: 'Uso estructural', rec: false },
    { modelo: 'G-XCEL', tipo: 'estructural', shell: '—', tpp: '—', thl: '—', peso: '—', ideal: 'Uso estructural', rec: false },
    { modelo: 'Globe Proximity', tipo: 'proximidad', shell: 'Mezcla PBI y película aluminizada laminada', tpp: '—', thl: '—', peso: '—', ideal: 'Calor radiante', rec: false },
    { modelo: 'Fire-Dex Wildland', tipo: 'forestal', shell: 'Algodón Ultrasoft o Nomex Essential', tpp: '—', thl: '—', peso: '—', ideal: 'Incendio forestal', rec: false },
  ],
  comparativaNote: NOTA_TPP_THL,
  guia: [
    { n: '01', t: 'Define el escenario dominante: combate estructural en edificios → línea estructural NFPA 1970; aproximación a combustible → Globe Proximity; incendio de vegetación → Fire-Dex Wildland NFPA 1977 (hoy NFPA 1950).' },
    { n: '02', t: 'Elige la configuración del G-XTREME 3.0: PBI MAX 7.0, 6.0 oz o PBI MAX LP.' },
    { n: '03', t: 'Configura la barrera de humedad GORE-TEX CROSSTECH Innovate, el trim reflejante, el tallaje S–4XL con asesoría de ajuste y la capucha de bloqueo de partículas obligatoria bajo NFPA 1970.' },
    { n: '04', t: 'Exige certificación de laboratorio acreditado con valores TPP/THL del modelo exacto, número de lote para NFPA 1850 y el programa de inspección, lavado técnico y reparación certificada.' },
  ],
  segmentosIntro:
    'Globe es la primera opción en departamentos que requieren trazabilidad NFPA 1850, documentación para licitaciones públicas y stock garantizado en México. Su presencia en los 32 estados lo convierte en el fabricante con mayor red de servicio postventa.',
  segmentos: [
    { num: '01', tipo: 'estructural', titulo: 'Departamentos Metropolitanos', desc: 'CDMX, GDL, MTY, PUE y otros cuerpos de bomberos del país. El G-XTREME 3.0 se especifica para operaciones de alta frecuencia por su trazabilidad NFPA 1850 y barrera GORE-TEX CrossTech®.', modelos: 'G-XTREME 3.0 · ATHLETIX' },
    { num: '02', tipo: 'estructural', titulo: 'Brigadas Municipales y Estatales', desc: 'Protección Civil y cuerpos municipales con presupuestos estatales. CLASSIX y G-XCEL ofrecen cumplimiento NFPA 1970 con costo de ciclo de vida optimizado para equipamiento de flotas completas.', modelos: 'CLASSIX · G-XCEL' },
    { num: '03', tipo: 'proximidad', titulo: 'Aeropuertos ARFF', desc: 'AICM, NAIM, GDL, MTY y aeropuertos regionales. El Globe Proximity ARFF cumple ICAO Annex 14 y las especificaciones BOMBA-SEP de la SCT, bajo normativa de la AFAC.', modelos: 'Globe Proximity ARFF' },
    { num: '04', tipo: 'forestal', titulo: 'Brigadas Forestales / Protección Civil', desc: 'Brigadas de interfaz urbano-forestal y Protección Civil con riesgo de incendio. Fire-Dex Wildland se ofrece en algodón Ultrasoft o Nomex Essential bajo NFPA 1977 (hoy NFPA 1950).', modelos: 'Fire-Dex Wildland' },
  ],
  faqs: [
    { q: '¿Qué traje Globe se puede especificar en licitaciones mexicanas?', a: 'El Globe G-XTREME 3.0 se configura con shell PBI MAX y barrera GORE-TEX CROSSTECH Innovate. Su ficha técnica puede revisarse para procesos competitivos públicos y privados.' },
    { q: '¿Qué opciones de shell tiene el G-XTREME 3.0?', a: 'El G-XTREME 3.0 se ofrece con shell PBI MAX 7.0 o 6.0 oz, o PBI MAX LP según la configuración. Para CLASSIX y G-XCEL, consulta la ficha técnica del modelo.' },
    { q: '¿Qué es la barrera GORE-TEX CROSSTECH Innovate y por qué importa?', a: 'La barrera CROSSTECH Innovate es la capa media del G-XTREME 3.0 y ATHLETIX. Su certificación declara flúor ≤100 ppm.' },
    { q: '¿Cuánto dura un traje Globe y qué establece la NFPA 1850?', a: 'La NFPA 1850 establece un retiro máximo a los 10 años desde la fecha de fabricación, independientemente del estado visual. Antes de ese límite, se retira si hay daño estructural, contaminación irreversible, falla de la barrera de humedad o deformación del shell. Globe facilita trazabilidad completa por número de lote para auditorías NFPA 1850.' },
    { q: '¿Qué dato de flúor declara CROSSTECH Innovate?', a: 'La certificación de GORE-TEX CROSSTECH Innovate declara flúor ≤100 ppm.' },
  ],
  ctaKicker: 'Ficha técnica para licitación',
  ctaTitleHtml: 'Stock permanente.<br/>Ficha técnica lista.',
  waQuote: 'Hola, quiero cotizar trajes Globe Manufacturing NFPA 1970.',
};

/* ════════════════════════════════════════════════════════════════════════════
   LION APPAREL
   ════════════════════════════════════════════════════════════════════════════ */
const lion: EquipmentBrand = {
  categorySlug: 'trajes-bombero',
  slug: 'lion-apparel',
  brand: 'Lion Apparel',
  brandLabel: 'Lion Apparel',
  crossDesc: 'V-Force® · ENgage Wildland EN 15614',
  eyebrow: 'Lion Apparel · Sede en Dayton, Ohio · Distribuidor Autorizado MX',
  heroTitleTop: 'Trajes Lion',
  heroTitleAccent: 'certificados NFPA.',
  heroLead:
    'Distribuidor autorizado de Lion Apparel en México. Stock permanente de los 6 modelos en tallas S–4XL — entrega en 24–48 h en CDMX con fichas técnicas completas y manifiesto de cumplimiento para licitación pública o adquisición directa.',
  heroIntro: [
    'Lion Apparel — con sede en Dayton, Ohio — fabrica trajes de bombero con presencia en departamentos metropolitanos, corporativos industriales y brigadas ARFF en aeropuertos internacionales.',
    'La línea cubre los tres escenarios de riesgo certificados por NFPA: trajes estructurales con tecnología V-Force® para máxima movilidad, traje de proximidad aluminizado para ARFF, y traje forestal NFPA 1950 para interfaz urbano-forestal.',
  ],
  heroBadges: ['NFPA 1971', 'EN 15614', 'V-Force®', 'Sede en Dayton, Ohio', 'Distribuidor autorizado MX'],
  seoTitle: 'Trajes Lion Apparel NFPA 1970 — Distribuidor México',
  seoDescription:
    'Catálogo Lion Apparel en México. V-Force, RedZone, V-Force EVO, Super-Deluxe y ENgage Wildland EN 15614. Distribuidor autorizado · stock CDMX · fichas para licitación.',
  stats: [
    { valor: 'NFPA 1970', etiq: 'Norma de trajes estructurales' },
    { valor: 'NFPA 1970', etiq: '+ NFPA 1950 certificados' },
    { valor: 'NFPA 1970', etiq: 'Línea estructural certificada' },
    { valor: '32', etiq: 'Estados con cobertura' },
  ],
  credenciales: [
    { n: '01', t: 'Trayectoria en EPP para bomberos', d: 'Con sede en Dayton, Ohio. Lion es un fabricante de EPP para bomberos — con trayectoria en el desarrollo de trajes en los que confían cuerpos de bomberos en cuatro continentes.' },
    { n: '02', t: 'Fabricante para licitaciones en México', d: 'Lion Apparel ofrece trajes estructurales para departamentos metropolitanos, brigadas corporativas y protocolos ARFF en aeropuertos.' },
    { n: '03', t: 'V-Force® — movilidad patentada', d: 'El sistema V-Force® de Lion incorpora paneles preformados en articulaciones críticas. Reduce hasta un 18 % la resistencia al movimiento en maniobras de rescate técnico — determinante en operaciones de larga duración.' },
    { n: '04', t: 'Cobertura de riesgo completa', d: 'La línea Lion cubre los tres escenarios NFPA: estructural (NFPA 1970), proximidad ARFF (NFPA 1970 Proximity) y forestal/interfaz (NFPA 1950). Una sola relación de distribuidor para todo el catálogo de riesgos.' },
  ],
  linesIntro:
    'Lion cubre los tres escenarios de riesgo NFPA desde un solo proveedor: estructural con movilidad V-Force®, proximidad ARFF para aeropuertos y forestal NFPA 1950 para interfaz. Una sola relación de distribución para todo el catálogo de riesgos.',
  lineas: [
    { tipo: 'estructural', badge: 'NFPA 1971', titulo: 'Línea Estructural', modelos: '4 modelos — V-Force · RedZone · V-Force EVO · Super-Deluxe', desc: 'Trajes estructurales Lion vigentes. V-Force incorpora sistema de humedad IsoDri y mangas raglán.', tech: 'V-Force® · IsoDri · mangas raglán' },
    { tipo: 'proximidad', badge: '—', titulo: 'Línea Proximity', modelos: '—', desc: 'Consulta el catálogo Lion Apparel para opciones de proximidad.', tech: '—' },
    { tipo: 'forestal', badge: 'EN 15614', titulo: 'Línea Forestal / Interfaz', modelos: '1 modelo — ENgage Wildland', desc: 'Shell de sarga de aramida FR para incendios forestales y de maleza.', tech: 'Sarga de aramida FR · EN 15614' },
  ],
  flagship: 'V-Force',
  anatomiaIntro:
    'El V-Force integra el sistema de humedad IsoDri y mangas raglán para operaciones estructurales.',
  anatomia: [
    { t: 'Shell exterior', d: 'V-Force se ofrece con shell PBI Max.' },
    { t: 'Sistema V-Force®', d: 'Paneles preformados en rodillas, codos y entrepierna que reducen hasta un 18 % la resistencia al movimiento — el bombero se agacha, escala y se arrodilla sin que el traje pelee contra él.' },
    { t: 'Barrera de humedad', d: 'Capa media impermeable al agua y transpirable al vapor, que controla el estrés térmico manteniendo la protección contra líquidos y vapor a presión.' },
    { t: 'Forro térmico', d: 'Capa interior de aislamiento que aporta el TPP certificado NFPA 1970 sin penalizar el peso ni la flexibilidad del conjunto.' },
    { t: 'Trim reflejante 3M Scotchlite', d: 'Bandas retroreflejantes y fluorescentes en configuración NFPA para visibilidad de 360° en humo, noche y baja iluminación.' },
    { t: 'Trazabilidad NFPA 1850', d: 'Etiqueta con lote de fabricación para auditoría NFPA 1850, control de vida útil y reportes de ciclo de vida.' },
  ],
  comparativa: [
    { modelo: 'V-Force', tipo: 'estructural', shell: 'PBI Max según configuración', tpp: '—', thl: '—', peso: '—', ideal: 'Uso estructural', rec: true },
    { modelo: 'RedZone', tipo: 'estructural', shell: '—', tpp: '—', thl: '—', peso: '—', ideal: 'Uso estructural', rec: false },
    { modelo: 'V-Force EVO', tipo: 'estructural', shell: '—', tpp: '—', thl: '—', peso: '—', ideal: 'Uso estructural', rec: false },
    { modelo: 'Super-Deluxe', tipo: 'estructural', shell: '—', tpp: '—', thl: '—', peso: '—', ideal: 'Uso estructural', rec: false },
    { modelo: 'Lion Apparel', tipo: 'proximidad', shell: '—', tpp: '—', thl: '—', peso: '—', ideal: '—', rec: false },
    { modelo: 'ENgage Wildland', tipo: 'forestal', shell: 'Sarga de aramida FR', tpp: '—', thl: '—', peso: '—', ideal: 'Incendio forestal y de maleza', rec: false },
  ],
  comparativaNote: NOTA_TPP_THL,
  guia: [
    { n: '01', t: 'Define el escenario dominante: combate estructural → V-Force, RedZone, V-Force EVO o Super-Deluxe; incendio de vegetación → ENgage Wildland EN 15614.' },
    { n: '02', t: 'Elige el modelo estructural según el escenario; V-Force se ofrece con shell PBI Max y sistema de humedad IsoDri.' },
    { n: '03', t: 'Configura la barrera de humedad, el trim reflejante, el tallaje S–4XL —con opción de medidas a medida 8–12 semanas— y la capucha de bloqueo de partículas obligatoria bajo NFPA 1970.' },
    { n: '04', t: 'Exige certificación de laboratorio acreditado con valores TPP/THL del modelo exacto, número de lote para NFPA 1850 y el programa de inspección, lavado técnico y reparación certificada.' },
  ],
  segmentosIntro:
    'Lion es la primera opción de departamentos metropolitanos, brigadas ARFF y corporativos industriales que valoran la movilidad V-Force® y la cobertura de riesgo completa, con trazabilidad NFPA 1850 y soporte en los 32 estados.',
  segmentos: [
    { num: '01', tipo: 'estructural', titulo: 'Departamentos Metropolitanos', desc: 'Los departamentos urbanos pueden considerar V-Force y RedZone para uso estructural.', modelos: 'Lion V-Force · Lion RedZone' },
    { num: '02', tipo: 'proximidad', titulo: 'Brigadas ARFF', desc: 'El Lion ARFF Proximity cumple NFPA 1970 Proximity e ICAO Annex 14, cubriendo los requisitos de los aeropuertos más exigentes en México para combate de incendios en aeronaves.', modelos: 'Lion ARFF Proximity' },
    { num: '03', tipo: 'industrial', titulo: 'Corporativos Industriales', desc: 'Brigadas industriales pueden revisar V-Force EVO y Super-Deluxe según su escenario de uso.', modelos: 'Lion V-Force EVO · Lion Super-Deluxe' },
    { num: '04', tipo: 'forestal', titulo: 'Protección Civil / Forestal', desc: 'ENgage Wildland cuenta con shell de sarga de aramida FR y norma EN 15614 para incendios forestales y de maleza.', modelos: 'Lion ENgage Wildland' },
  ],
  faqs: [
    { q: '¿Qué traje Lion se puede considerar para licitaciones municipales en México?', a: 'Lion V-Force, RedZone, V-Force EVO y Super-Deluxe son trajes estructurales vigentes. Asesoramos el modelo según el escenario de riesgo y el pliego de condiciones de cada licitación.' },
    { q: '¿Qué es el sistema V-Force® de Lion Apparel?', a: 'V-Force incorpora sistema de humedad IsoDri y mangas raglán. Consulta la ficha técnica de la configuración solicitada.' },
    { q: '¿En qué se diferencia Lion V-Force del Globe G-XTREME 3.0?', a: 'V-Force incorpora sistema de humedad IsoDri y mangas raglán; G-XTREME 3.0 se configura con shell PBI MAX y barrera GORE-TEX CROSSTECH Innovate. Podemos facilitarte ambas fichas técnicas para evaluación comparativa.' },
    { q: '¿Lion Apparel ofrece tallaje a medida para brigadas corporativas o industriales en México?', a: 'Sí. Lion ofrece medidas especiales (tallaje custom) con tiempo de entrega de 8–12 semanas desde su planta en Dayton, Ohio. Para proyectos corporativos de 10 o más trajes gestionamos el proceso completo: hoja de medidas por elemento, revisión de ergonomía para el tipo de operación (rescate, ARFF, industrial), opciones de retroreflectivos y bordado institucional. Contacta a nuestro equipo técnico para iniciar el proceso.' },
    { q: '¿Cuánto tiempo dura un traje Lion Apparel según NFPA 1850?', a: 'La NFPA 1850 establece un retiro máximo de 10 años desde la fecha de fabricación, independientemente del estado aparente del traje. Antes de ese límite se retira por: daño estructural al shell, contaminación química irreversible, falla de la barrera de humedad (prueba de penetración de agua) o deformación por exposición térmica extrema. Cada traje Lion incluye etiqueta de trazabilidad con lote de fabricación para auditorías NFPA 1850 y reportes de ciclo de vida.' },
  ],
  ctaKicker: 'Documentación para licitación',
  ctaTitleHtml: 'Movilidad V-Force®.<br/>Certificación NFPA.',
  waQuote: 'Hola, quiero cotizar trajes Lion Apparel NFPA 1970.',
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
  crossDesc: 'TECGEN® · de peso reducido · sin PFAS añadidos intencionalmente nativo · Tecnología TECGEN®',
  eyebrow: 'Fire-Dex · TECGEN® Technology · Distribuidor Autorizado MX',
  heroTitleTop: 'Trajes Fire-Dex',
  heroTitleAccent: 'certificados NFPA.',
  heroLead:
    'Distribuidor autorizado de Fire-Dex en México. Línea con fibra TECGEN® nativa y opciones sin PFAS añadidos intencionalmente. Stock permanente en CDMX con fichas técnicas para licitación.',
  heroIntro: [
    'Fire-Dex ofrece fichas técnicas para licitaciones en México. La línea TECGEN® incluye valores THL documentados por modelo y opciones sin PFAS añadidos intencionalmente.',
    'TECGEN® es una fibra sintética de segunda generación que supera a Nomex en transpirabilidad manteniendo el mismo nivel de protección certificado NFPA 1970. Cuando los departamentos empiezan a medir THL junto con TPP, Fire-Dex gana.',
  ],
  heroBadges: ['NFPA 1970', 'NFPA 2112', 'TECGEN® 71', 'TECGEN® 51', 'PBI/TECGEN Hybrid', 'sin PFAS añadidos intencionalmente', 'Distribuidor autorizado MX'],
  seoTitle: 'Trajes Fire-Dex NFPA 1970 — TECGEN® · México',
  seoDescription:
    'Catálogo completo Fire-Dex certificados NFPA 1970 en México. TECGEN71, TECGEN51 (de peso reducido), AeroFlex Hybrid, FXR Proximity y Wildland. Fichas técnicas para licitación. Distribuidor autorizado · stock CDMX.',
  stats: [
    { valor: '3.5 kg', etiq: 'Traje NFPA 1970 de peso reducido (TECGEN51)' },
    { valor: 'NFPA 1970', etiq: 'Norma de trajes estructurales' },
    { valor: 'sin PFAS añadidos intencionalmente', etiq: 'Nativo en toda la línea TECGEN®' },
    { valor: 'Tecnología TECGEN®', etiq: 'Licitaciones MX 2023-2025' },
  ],
  credenciales: [
    { n: '01', t: 'Fichas técnicas para licitación', d: 'Fire-Dex ofrece documentación técnica para comparar configuraciones TECGEN® y Nomex NXT según los requisitos del pliego.' },
    { n: '02', t: 'TECGEN® — la fibra que supera a Nomex en THL', d: 'TECGEN® 51 alcanza valores THL del certificado del modelo — con enfoque en transpirabilidad que el Nomex estándar (≥ 130 W/m²). A igual TPP (≥ 35 cal/cm²), mayor THL significa menor acumulación de calor en el bombero, menor estrés cardiovascular y menor riesgo de golpe de calor durante la intervención.' },
    { n: '03', t: 'El traje de peso reducido de su clase NFPA 1970', d: 'TECGEN51 a peso conforme a ficha técnica es el traje estructural certificado NFPA 1970 de peso reducido disponible en el mercado mexicano. Esa diferencia frente al promedio Nomex (peso conforme a ficha técnica) equivale a 1.1 kg menos de carga — un 24% de reducción que impacta directamente en la fatiga operacional.' },
    { n: '04', t: 'sin PFAS añadidos intencionalmente nativo en toda la línea TECGEN®', d: 'TECGEN® no requiere tratamiento DWR con PFAS — los compuestos per y polifluoroalquilo que organismos internacionales están restringiendo en trajes de bombero. La línea Fire-Dex TECGEN cumple las políticas de sustancias eternas sin opciones adicionales ni sobrecosto.' },
  ],
  linesIntro:
    'Fire-Dex cubre el escenario estructural con valores de peso y THL por modelo, además de una línea de proximidad industrial. Incluye TECGEN51, AeroFlex Hybrid y FXR para flash fire, con opciones sin PFAS añadidos intencionalmente en la fibra TECGEN®.',
  lineas: [
    { tipo: 'estructural', badge: 'NFPA 1970 · Ultra ligero', titulo: 'Línea TECGEN® Puro', modelos: '2 modelos — TECGEN71 · TECGEN51', desc: 'La línea con valores THL documentados por modelo y el menor peso en su clase NFPA 1970. TECGEN71 para servicio intensivo; TECGEN51 para el departamento que necesita el mínimo estrés térmico posible.', tech: 'TECGEN® 71 / 51 · valores THL del certificado del modelo · ~3.5–3.8 kg · sin PFAS añadidos intencionalmente nativo' },
    { tipo: 'estructural', badge: 'NFPA 1970 · Alto rendimiento', titulo: 'Línea Híbrida', modelos: '2 modelos — AeroFlex Hybrid · Wildland', desc: 'Lo mejor de PBI y TECGEN en una sola construcción. AeroFlex para operaciones de alta frecuencia con protección premium; Wildland para rescate técnico con tejido Stretch en zonas articulares.', tech: 'PBI/TECGEN® blend · Wildland Stretch · valores THL del certificado · peso conforme a ficha técnica' },
    { tipo: 'estructural', badge: 'NFPA 1970 · Acceso', titulo: 'Línea 1971 Clásica', modelos: '1 modelo — TECGEN71', desc: 'La puerta de entrada a la calidad Fire-Dex. Shell Nomex IIIA con certificación NFPA 1970 completa y sistema de calidad Fire-Dex. Ideal para departamentos con presupuesto estatal ajustado.', tech: 'Nomex IIIA · valores THL del certificado del modelo · peso conforme a ficha técnica · Precio competitivo' },
    { tipo: 'industrial', badge: 'NFPA 1970 Proximity', titulo: 'Línea FXR Proximity', modelos: '1 modelo — FXR Proximity', desc: 'Traje de proximidad FXR aluminizado para supresión industrial, petroquímica y flash fire. Reflexividad > 85 % con sistema tricapa optimizado para planta química y almacenes de combustible.', tech: 'FXR aluminizado · Reflexividad > 85% · Resistencia flash fire HC' },
  ],
  flagship: 'TECGEN71',
  anatomiaIntro:
    'El TECGEN71 reemplaza el Nomex por fibra TECGEN® de segunda generación en una construcción de tres capas más ligera. Estos seis elementos explican por qué Fire-Dex es la marca que más crece en México.',
  anatomia: [
    { t: 'Shell exterior TECGEN® 71', d: 'Fibra sintética de segunda generación que iguala el TPP del Nomex (≥ 35 cal/cm²) con mayor THL (transpirabilidad) y menor peso — el corazón de la ventaja Fire-Dex.' },
    { t: 'sin PFAS añadidos intencionalmente nativo', d: 'La fibra TECGEN® no requiere tratamiento DWR con PFAS; el traje cumple las políticas de sustancias eternas sin opciones adicionales ni sobrecosto, a diferencia de los trajes que dependen de recubrimientos.' },
    { t: 'Barrera de humedad', d: 'Capa media impermeable y transpirable que controla el estrés térmico manteniendo la protección contra líquidos y vapor a presión en combate estructural.' },
    { t: 'Forro térmico ligero', d: 'Capa interior de aislamiento optimizada para aportar el TPP certificado NFPA 1970 con el menor peso de su clase (~3.5–3.8 kg).' },
    { t: 'Trim reflejante 3M Scotchlite', d: 'Bandas retroreflejantes y fluorescentes en configuración NFPA para visibilidad de 360° en humo, noche y baja iluminación.' },
    { t: 'Trazabilidad NFPA 1850', d: 'Etiqueta con lote de fabricación y el análisis comparativo TECGEN® vs Nomex para auditoría NFPA 1850 y procesos de licitación CompraNet.' },
  ],
  comparativa: [
    { modelo: 'TECGEN71', tipo: 'estructural', shell: 'TECGEN® 71', tpp: '—', thl: '—', peso: '—', ideal: 'Licitaciones, alto rendimiento', rec: true },
    { modelo: 'TECGEN51', tipo: 'estructural', shell: 'TECGEN® 51', tpp: '—', thl: '—', peso: '—', ideal: 'Máxima ligereza, climas cálidos', rec: false },
    { modelo: 'AeroFlex Hybrid', tipo: 'estructural', shell: 'PBI/TECGEN® blend', tpp: '—', thl: '—', peso: '—', ideal: 'Premium, alta frecuencia operacional', rec: false },
    { modelo: 'Wildland', tipo: 'estructural', shell: 'TECGEN/PBI + Stretch', tpp: '—', thl: '—', peso: '—', ideal: 'Rescate técnico, SAR, movilidad max', rec: false },
    { modelo: 'TECGEN71', tipo: 'estructural', shell: 'Nomex IIIA', tpp: '—', thl: '—', peso: '—', ideal: 'Entrada NFPA, presupuesto ajustado', rec: false },
    { modelo: 'FXR Proximity', tipo: 'industrial', shell: 'FXR aluminizado', tpp: '—', thl: '—', peso: '—', ideal: 'Industria, petroquímica, almacenes', rec: false },
  ],
  comparativaNote: NOTA_TPP_THL,
  guia: [
    { n: '01', t: 'Define el escenario dominante: combate estructural urbano → TECGEN71/TECGEN51; alta frecuencia premium → AeroFlex Hybrid; rescate técnico/SAR → Wildland; flash fire industrial → FXR Proximity.' },
    { n: '02', t: 'Prioriza peso o tecnología: TECGEN51 (peso conforme a ficha técnica) para máxima ligereza y climas cálidos; TECGEN71 para THL documentado en servicio intensivo; AeroFlex híbrido PBI/TECGEN para protección premium; TECGEN71 Nomex IIIA para presupuesto ajustado.' },
    { n: '03', t: 'Aprovecha el sin PFAS añadidos intencionalmente nativo: la fibra TECGEN® cumple políticas de sustancias eternas sin recubrimiento. Configura barrera de humedad, trim reflejante, tallaje S–4XL y capucha de partículas NFPA 1970.' },
    { n: '04', t: 'Para licitación CompraNet, solicita la ficha bilingüe por partida, el certificado de laboratorio con número de lote y el análisis comparativo de laboratorio TECGEN® vs Nomex IIIA/NXT.' },
  ],
  segmentosIntro:
    'Fire-Dex es la primera opción de departamentos con alta frecuencia de servicio, equipos de rescate técnico y brigadas que renuevan por vencimiento NFPA 1850 y evalúan con evidencia técnica — peso, THL y sin PFAS añadidos intencionalmente — más que por inercia de marca.',
  segmentos: [
    { num: '01', tipo: 'estructural', titulo: 'Alta frecuencia de servicio', desc: 'Un bombero urbano puede responder 6-10 llamados diarios. Cada kilogramo de EPP se acumula en fatiga y riesgo cardíaco. TECGEN71 y TECGEN51 son la elección de los departamentos que priorizan la seguridad del bombero tanto como la protección ante el fuego.', modelos: 'TECGEN71 · TECGEN51' },
    { num: '02', tipo: 'usar', titulo: 'Rescate Técnico & SAR', desc: 'El Wildland con tejido TECGEN/PBI Stretch en zonas articulares permite al elemento moverse sin restricción dentro de estructuras colapsadas, ductos y espacios confinados. El traje no pelea contra el bombero.', modelos: 'Fire-Dex Wildland' },
    { num: '03', tipo: 'estructural', titulo: 'Brigadas con renovación NFPA 1850', desc: 'Los departamentos que renuevan trajes por vencimiento NFPA 1850 (10 años) evalúan hoy marcas con tecnología actual. TECGEN71 ofrece THL documentado que Nomex NXT al mismo nivel NFPA 1970 — y a menor costo de adquisición que PBI MAX.', modelos: 'TECGEN71 · TECGEN71' },
    { num: '04', tipo: 'industrial', titulo: 'Industria & Flash Fire', desc: 'El FXR Proximity cubre supresión industrial con alta reflectividad y resistencia a flash fire por hidrocarburo. La TECGEN71 ofrece una opción Nomex IIIA dentro del portafolio Fire-Dex para brigadas industriales con requerimientos de presupuesto.', modelos: 'FXR Proximity · TECGEN71' },
  ],
  faqs: [
    { q: '¿TECGEN® es igual de seguro que Nomex? ¿Por qué no es tan conocido?', a: 'Sí — TECGEN® cumple todos los requisitos de la norma NFPA 1970 con el mismo TPP mínimo (≥ 35 cal/cm²) que Nomex. Su menor reconocimiento se debe únicamente a que es una fibra sintética de segunda generación desarrollada en los 2000s, mientras Nomex existe desde los años 60 y Dupont invirtió décadas en posicionarla. En pruebas comparativas de laboratorio certificadas NFPA, TECGEN® 71 y 51 superan a Nomex NXT en THL (transpirabilidad): TECGEN51 alcanza ≥ 165 W/m² frente a ≥ 130 W/m² del Nomex estándar. El reconocimiento no equivale a rendimiento.' },
    { q: '¿Por qué Fire-Dex crece tan rápido si Globe y Lion llevan décadas en México?', a: 'Tres razones concretas: (1) Precio de adquisición — sin la prima de marca que cargan Globe y Lion, Fire-Dex puede ofrecer NFPA 1970 completo con THL documentado a menor costo inicial. (2) TECGEN® ofrece mejor transpirabilidad que Nomex NXT al mismo nivel de protección — eso se traduce en menos fatiga y menor riesgo de golpe de calor en el bombero. (3) Los departamentos que renuevan trajes por vencimiento NFPA 1850 están evaluando marcas con evidencia técnica, no solo con historia. Fire-Dex gana en ambas comparativas. En licitaciones municipales de CDMX, GDL y MTY (2023-2025), Fire-Dex registró el crecimiento porcentual más alto entre las 4 marcas del catálogo.' },
    { q: '¿El TECGEN51 es realmente el traje estructural NFPA 1970 de peso reducido del mercado?', a: 'Sí, dentro del segmento de trajes con certificación NFPA 1970 completa. El TECGEN51 pesa peso conforme a ficha técnica — aproximadamente 1.0–1.3 kg menos que los modelos Nomex estándar (4.5–4.8 kg) y 0.6 kg menos que el promedio de los trajes PBI premium. Esa diferencia no es cosmética: estudios de NIOSH y la propia NFPA documentan que cada kilogramo adicional de EPP eleva el estrés cardiovascular y la temperatura corporal del bombero en operaciones de 30+ minutos, incrementando el riesgo cardíaco — la primera causa de muerte en servicio activo en América del Norte. Para departamentos con alta frecuencia de atención y climas cálidos, el peso del traje es una decisión de seguridad, no de preferencia.' },
    { q: '¿Cómo se compara el AeroFlex Hybrid con un PBI MAX puro?', a: 'Depende del uso. PBI MAX puro (Globe G-XTREME, Lion V-Force) se usa en exposiciones extremas y sostenidas. El AeroFlex Hybrid combina PBI en el frente y torso con TECGEN en laterales y mangas; consulta los valores de peso y THL del certificado del modelo. La selección debe considerar el nivel de protección estructural NFPA 1970 y el escenario de servicio.' },
    { q: '¿Fire-Dex tiene soporte documental para licitaciones CompraNet en México?', a: 'Sí. Proporcionamos el paquete completo para procesos de adquisición pública: ficha técnica bilingüe (español/inglés) con especificaciones por partida, certificado del laboratorio acreditado con número de lote, manifiesto de cumplimiento NFPA 1970, hoja de datos de seguridad y carta de garantía del fabricante. El paquete se entrega en formato PDF y editable según los requisitos del pliego de condiciones. Para licitaciones que requieran equivalencias entre TECGEN® y Nomex IIIA/NXT, también preparamos el análisis comparativo de laboratorio certificado.' },
  ],
  ctaKicker: 'La marca que más crece en México',
  ctaTitleHtml: 'Menos peso.<br/>Mismo NFPA 1970.',
  waQuote: 'Hola, quiero cotizar trajes Fire-Dex NFPA 1970 con fibra TECGEN.',
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
  crossDesc: 'Fabricante mexicano · Herö certificado UL · 5 líneas de traje',
  eyebrow: 'Sköld Safety · Fabricación mexicana · Monterrey, N.L.',
  heroTitleTop: 'Trajes Sköld',
  heroTitleAccent: 'fabricados en México.',
  heroLead:
    'Sköld Safety fabrica en Monterrey, N.L. las cinco líneas de traje que cubren el ciclo completo de respuesta: estructural, brigadista industrial, forestal, aproximación aluminizado y overol de rescate. Fichas técnicas, tallaje y refacciones desde planta nacional.',
  heroIntro: [
    'Sköld Safety es un fabricante mexicano de equipo de protección personal con oficina en Monterrey, Nuevo León, y oficina en Monterrey, Nuevo León. Produce en territorio nacional y ofrece contenido nacional para licitaciones, refacciones y opciones para brigada industrial.',
    'Su portafolio de bomberos es el más amplio del catálogo por número de familias: cinco líneas de traje que cubren cinco de los siete tipos de riesgo del sistema. El Herö —su modelo profesional con shell PBI Max 7.0— cuenta con certificación UL bajo NFPA 1971 Edición 2018 (laboratorio MH60435). Las demás líneas se fabrican bajo declaración de equivalencia con la norma, un matiz que documentamos con precisión en cada ficha.',
  ],
  heroBadges: ['NFPA 1971 Ed. 2018', 'UL MH60435', 'NFPA 2112', 'Equiv. NFPA 1977:2011', 'PBI Max 7.0', 'Nomex IIIA', 'Fabricación mexicana'],
  seoTitle: 'Trajes Sköld — fabricante mexicano NFPA | México',
  seoDescription:
    'Catálogo Sköld Safety en México: Herö (NFPA 1971 Ed. 2018 certificado UL), Defender brigadista, Forestal, Aproximación aluminizado y Overol de Rescate. Fabricación nacional en Monterrey, N.L. — contenido nacional para licitación.',
  stats: [
    { valor: 'Monterrey', etiq: 'Planta de fabricación en N.L.' },
    { valor: 'UL MH60435', etiq: 'Laboratorio que certifica el Herö PBI' },
    { valor: '5 líneas', etiq: 'Estructural · industrial · forestal · ARFF · rescate' },
    { valor: 'SKÖLDTracker', etiq: 'Trazabilidad de EPP del fabricante' },
  ],
  credenciales: [
    { n: '01', t: 'Fabricación en territorio nacional', d: 'Sköld produce en su planta de Monterrey, Nuevo León. Para dependencias que ponderan contenido nacional en el fallo de una licitación, puede presentar documentación de fabricación y opciones de refacciones, tallas especiales y reparaciones.' },
    { n: '02', t: 'Herö — certificación UL verificable', d: 'El Herö con shell PBI Max 7.0 está certificado bajo NFPA 1971 Edición 2018 por UL, laboratorio MH60435. Es un número verificable, no una declaración del fabricante. Las demás líneas Sköld declaran equivalencia con la norma correspondiente; esa diferencia se documenta explícitamente en cada ficha de este catálogo.' },
    { n: '03', t: 'SKÖLDTracker — trazabilidad del ciclo de vida', d: 'Sköld opera un sistema propio de trazabilidad de EPP que registra el traje desde la fabricación. Facilita el expediente de inspección, lavado técnico y retiro por vida útil que exige NFPA 1850, y da soporte documental a auditorías de Protección Civil y de cliente industrial.' },
    { n: '04', t: 'Taller propio y reparación express', d: 'El fabricante mantiene taller de confección propio con servicio de reparación express, bordado e impresión personalizada. Un traje dañado en servicio se repara en el país en lugar de salir a planta extranjera — la diferencia entre semanas y meses de un elemento sin equipo.' },
  ],
  linesIntro:
    'Sköld cubre cinco escenarios de riesgo desde una sola planta: combate estructural profesional, brigada industrial, incendio forestal, aproximación a llama directa y rescate. Es la marca con el mayor número de familias del catálogo — cinco de los siete tipos de riesgo del sistema.',
  lineas: [
    { tipo: 'estructural', badge: 'NFPA 1971 Ed. 2018 · UL MH60435', titulo: 'Línea Herö — Profesional', familiaLabel: 'Herö', flagship: 'skold-hero-pbi-estructural', modelos: '2 configuraciones — Herö PBI · Herö', desc: 'El traje profesional de Sköld con certificación UL verificable. Sistema de tres capas con DRD integrado, cuello escudo de cobertura 360° y refuerzos Stedshield en mangas, hombros, codos, rodillas y tobillos. Tallas S–4XL en oro y negro.', tech: 'PBI Max 7.0 (70 PBI / 30 Kevlar) · Stedair 3000 · Defender M · S–4XL' },
    { tipo: 'industrial', badge: 'Equivalencia declarada NFPA 1971 (1991)', titulo: 'Línea Defender — Brigadista industrial', familiaLabel: 'Defender', flagship: 'skold-defender-brigadista', modelos: '1 modelo, 6 colores — combo, kit y piezas sueltas', desc: 'El traje de brigada industrial de la marca. Shell Nomex IIIA con 2% de fibra antiestática, refuerzos UltraShield y una suite de normas europeas poco común en el segmento: antiestática EN 1149-3/5, químicos EN 13034, arco eléctrico IEC 61482-2 clase II y térmico ISO 11612. Disponible con o sin DRD.', tech: 'Nomex IIIA 93/5/2 · Neopreno · Chambray · 6 colores' },
    { tipo: 'forestal', badge: 'Equivalencia NFPA 1977:2011', titulo: 'Línea Forestal', familiaLabel: 'Forestal', flagship: 'skold-forestal-nomex', modelos: '2 piezas — FPFTJ chaquetón · FPFTP pantalón', desc: 'Conjunto de dos piezas en Nomex IIIA de 6.0 oz con acabado repelente al agua: fibra inherentemente resistente a la flama que no funde, no gotea y no flamea durante toda la vida útil de la prenda. Cierre de broches ocultos en chaquetón y cremallera en pantalón, banda reflejante Orafol.', tech: 'Nomex IIIA 6.0 oz hidrorrepelente · reflejante Orafol' },
    { tipo: 'proximidad', badge: 'FPAPROX91 / FPAPROX13 · referencia NFPA 1971 del fabricante', titulo: 'Línea Aproximación', familiaLabel: 'Aproximación', flagship: 'skold-aproximacion-aluminizado', modelos: '1 modelo — conjunto aluminizado FPAPROX91', desc: 'Traje aluminizado para exposición a llama directa e irradiación intensa. Shell de cinco capas sobre tejido rip-stop de para-aramida, forro interior desmontable de dos capas y pantalón 100% Kevlar. Incluye DRD en Kevlar de 1½" y zíper de escape.', tech: 'Aluminizado 5 capas · rip-stop 7.0 oz/yd² · Aralite NP + Stedair 3000' },
    { tipo: 'usar', badge: 'Tela certificada NFPA 2112', titulo: 'Línea Overol de Rescate', familiaLabel: 'Overol de Rescate', flagship: 'skold-overol-rescate', modelos: '1 modelo — —, configurable', desc: 'Overol de una pieza para extricación, rescate vehicular y USAR, donde el traje estructural es excesivo y la ropa de trabajo insuficiente. Tela y reflejante con certificación NFPA 2112, costuras en hilo Kevlar y bolsa de radio con presillas para lámpara y micrófono.', tech: 'Tela FR NFPA 2112 · reflejante 1"/2"/3" plata o amarillo lima' },
  ],
  flagship: 'Herö',
  anatomiaIntro:
    'El Herö PBI cuenta con certificación UL de tercero. Estos seis elementos, tomados de la ficha técnica del fabricante, explican qué está comprando una dependencia cuando especifica un Herö PBI.',
  anatomia: [
    { t: 'Shell exterior PBI Max 7.0', d: 'Tejido de 70% PBI y 30% Kevlar en 7 oz. El PBI no se encoge ni se rompe al carbonizarse, lo que conserva la integridad de la prenda tras la exposición térmica; el Kevlar aporta la resistencia mecánica al desgarre y la abrasión.' },
    { t: 'Barrera de humedad Stedair 3000', d: 'Capa media impermeable al agua líquida y a los fluidos corporales, pero permeable al vapor. Es la que impide la quemadura por vapor a presión sin bloquear la evacuación del sudor.' },
    { t: 'Barrera térmica Defender M', d: 'Forro interior que aporta el aislamiento del conjunto. En el Herö, las barreras interiores están declaradas como resistentes a agentes químicos, bacteriológicos, radiológicos y nucleares.' },
    { t: 'Refuerzos Stedshield', d: 'Zonas de refuerzo en mangas, hombros, codos, rodillas y tobillos — los cinco puntos donde el traje se destruye primero al arrastrarse, escalar y trabajar apoyado sobre escombro.' },
    { t: 'DRD y cuello escudo 360°', d: 'Drag Rescue Device integrado en la espalda para extracción de un elemento caído, y cuello tipo escudo con cobertura completa de 360° sin áreas descubiertas entre casco, escafandra y chaquetón.' },
    { t: 'Trim ORALITE Ultra Brilliance', d: 'Banda reflejante ORALITE FTP2575-S de 3" en amarillo verdoso fluorescente, más bies plata en pecho, espalda, brazos, bolsas y tobillos para visibilidad de 360° en humo y baja iluminación.' },
  ],
  comparativa: [
    { modelo: 'Herö PBI', tipo: 'estructural', shell: 'PBI Max 7.0 (70/30 PBI-Kevlar)', tpp: '—', thl: '—', peso: '—', ideal: 'Bomberos municipales · única con UL', rec: true },
    { modelo: 'Herö', tipo: 'estructural', shell: 'Nomex IIIA', tpp: '—', thl: '—', peso: '—', ideal: 'Herö de menor costo de adquisición', rec: false },
    { modelo: 'Defender', tipo: 'industrial', shell: 'Nomex IIIA 93/5/2 antiestático', tpp: '—', thl: '—', peso: '—', ideal: 'Brigadas industriales, refinerías', rec: false },
    { modelo: 'Forestal FPFTJ/FPFTP', tipo: 'forestal', shell: 'Nomex IIIA 6.0 oz hidrorrepelente', tpp: '—', thl: '—', peso: '—', ideal: 'CONAFOR, interfaz urbano-forestal', rec: false },
    { modelo: 'Aproximación FPAPROX91', tipo: 'proximidad', shell: 'Aluminizado 5 capas + para-aramida', tpp: '—', thl: '—', peso: '—', ideal: 'ARFF, fundición, petroquímica', rec: false },
    { modelo: 'Overol de Rescate —', tipo: 'usar', shell: 'Tela FR certificada NFPA 2112', tpp: '—', thl: '—', peso: '—', ideal: 'Extricación, rescate vehicular, USAR', rec: false },
  ],
  comparativaLabel: 'Las 5 líneas Sköld — norma real, no norma declarada',
  comparativaNote: NOTA_SKOLD,
  guia: [
    { n: '01', t: 'Define el escenario dominante: combate estructural profesional → Herö; brigada de planta industrial → Defender; incendio de vegetación e interfaz → Forestal; exposición a llama directa e irradiación → Aproximación; extricación y rescate vehicular → Overol de Rescate.' },
    { n: '02', t: 'Decide si necesita certificación o le basta la equivalencia. Si el pliego exige "certificado NFPA por laboratorio acreditado", el Herö PBI cuenta con UL MH60435. Si el requisito es de cumplimiento técnico para brigada interna, revisa la declaración de equivalencia de cada línea.' },
    { n: '03', t: 'Configure el conjunto: talla (Herö S–4XL, Defender S/M–2XL), color (Herö en oro o negro, Defender en seis colores), DRD sí o no en el Defender, ancho y color del reflejante en el Overol, y refuerzos de rodilla y bolsas cargo opcionales en el Forestal.' },
    { n: '04', t: 'Solicite la documentación completa antes de firmar: ficha técnica del fabricante, número de certificación UL cuando aplique, declaración de equivalencia por escrito cuando no aplique, y el registro SKÖLDTracker para el expediente de vida útil NFPA 1850.' },
  ],
  segmentosIntro:
    'Sköld ofrece opciones para brigadas industriales, municipios con presupuesto acotado y dependencias que ponderan contenido nacional. La selección debe partir del nivel de certificación requerido en cada operación.',
  segmentos: [
    { num: '01', tipo: 'industrial', titulo: 'Brigadas Industriales & Refinería', desc: 'Plantas, almacenes, refinerías y petroquímica con brigada interna de respuesta. El Defender combina el shell Nomex IIIA con fibra antiestática para zonas ATEX y una suite de normas EN —químicos, arco eléctrico, agua y frío— que ninguna otra línea del catálogo cubre a este precio.', modelos: 'Defender · Overol de Rescate' },
    { num: '02', tipo: 'estructural', titulo: 'Municipios & Protección Civil', desc: 'Cuerpos municipales y direcciones de Protección Civil que deben equipar una plantilla completa con presupuesto estatal. El Herö cuenta con certificación UL bajo NFPA 1971 Ed. 2018, con opciones de refacción y reparación en el país.', modelos: 'Herö PBI · Herö' },
    { num: '03', tipo: 'forestal', titulo: 'Brigadas Forestales & Interfaz', desc: 'CONAFOR, brigadas estatales y voluntarios de interfaz urbano-forestal. El conjunto de dos piezas en Nomex IIIA de 6.0 oz con repelente al agua ofrece equivalencia NFPA 1977:2011 en el rango de precio en el que estas brigadas realmente compran.', modelos: 'Forestal FPFTJ · FPFTP' },
    { num: '04', tipo: 'proximidad', titulo: 'ARFF, Fundición & Llama Directa', desc: 'Aeropuertos regionales, fundidoras, vidrieras y plantas con horno donde la exposición es de irradiación e llama directa, no de humo. El conjunto aluminizado de cinco capas con pantalón 100% Kevlar y DRD integrado cubre ese escenario dentro del mismo proveedor.', modelos: 'Aproximación FPAPROX91' },
  ],
  faqs: [
    { q: '¿Un traje Sköld sirve para una licitación que pide "certificado NFPA"?', a: 'Depende del modelo, y la distinción es importante. El Herö con shell PBI Max 7.0 está certificado bajo NFPA 1971 Edición 2018 por UL, laboratorio MH60435 — ese número es verificable y sostiene un requisito de certificación por laboratorio acreditado. Las demás líneas (Defender, Forestal, Aproximación) declaran equivalencia con la norma correspondiente, lo cual es una declaración del fabricante y no una certificación de tercero. Si el pliego exige literalmente certificación de laboratorio acreditado, considera el Herö PBI. Si el requisito es de cumplimiento técnico para una brigada interna, revisa la documentación correspondiente de cada línea.' },
    { q: '¿Qué factores influyen en el costo de un traje Sköld?', a: 'Influyen la fabricación nacional, el alcance de certificación y los materiales. El Herö sostiene una certificación UL de tercero; el Defender usa Nomex IIIA con barrera de neopreno y forro chambray. Revisa la ficha técnica y la configuración solicitada para comparar productos destinados al mismo escenario.' },
    { q: '¿Cuánto cuesta un traje Sköld en México?', a: 'No publicamos precios fijos: cada partida se cotiza por escrito. El importe depende de la línea (Herö, Defender, Forestal, Aproximación u Overol de Rescate), la talla, el color, la configuración con o sin DRD y el volumen; un pedido de flota completa se cotiza distinto que una pieza. Envíanos tallas, cantidades y línea desde la página de cotización.' },
    { q: '¿Por qué la comparativa dice "s/d fabricante" en TPP y THL?', a: 'Porque Sköld no publica los valores de laboratorio de TPP (Thermal Protective Performance) ni THL (Total Heat Loss) de sus conjuntos, y preferimos declararlo antes que estimar un número que usted podría llevar a un pliego de licitación. Lo que sí está documentado y verificado son los datos mecánicos del Defender —resistencia al desgarre de 55×35 lbf, fuerza de tensión de 260×230 lbf, contracción térmica de 2.5×2.5 in y flamabilidad vertical de 0.0 segundos— junto con la composición exacta de cada capa. Estamos solicitando las fichas de laboratorio directamente al fabricante y actualizaremos esta tabla en cuanto las tengamos. Si su proceso requiere TPP y THL certificados hoy, las líneas Globe, Lion, Honeywell y Fire-Dex del catálogo sí los publican.' },
    { q: '¿Qué diferencia hay entre el Defender y el Herö, más allá del precio?', a: 'Son trajes para usuarios distintos. El Herö es el traje del bombero profesional: shell PBI Max 7.0, barrera Stedair 3000, forro Defender M, refuerzos Stedshield, DRD integrado, tallas S a 4XL y certificación UL bajo NFPA 1971 Edición 2018. El Defender es el traje del brigadista industrial: shell Nomex IIIA con 2% de fibra antiestática, barrera de neopreno, forro chambray, refuerzos UltraShield, seis colores y una batería de normas europeas de químicos, arco eléctrico y antiestática que el Herö no declara. Un bombero municipal de tiempo completo que entra a estructuras a diario necesita el Herö. Una brigada de planta que responde a conatos y derrames, y que necesita protección antiestática y contra arco eléctrico, está mejor servida con el Defender.' },
    { q: '¿Sköld da soporte de refacciones y reparación en México?', a: 'Sí, y es su ventaja más concreta frente a las marcas de importación. El fabricante opera taller de confección propio en Monterrey con servicio de reparación express, además de bordado e impresión personalizada de la corporación. Un chaquetón dañado en servicio se repara dentro del país en lugar de salir a planta extranjera, y las piezas se venden por separado —chaquetón FPJ01, pantalón FP001 y tirantes FPT01 en la línea Defender— de modo que una prenda dañada no obliga a reponer el conjunto. El fabricante también opera SKÖLDTracker, su sistema de trazabilidad, que sostiene el expediente de inspección y retiro por vida útil bajo NFPA 1850.' },
  ],
  ctaKicker: 'Fabricación mexicana · 5 líneas de traje',
  ctaTitleHtml: 'Hecho en México.<br/>Documentado sin ambigüedad.',
  waQuote: 'Hola, quiero cotizar trajes Sköld de fabricación mexicana.',
  notaPie:
    'Los rangos de inversión mostrados son precios de referencia en pesos mexicanos observados en distribuidores autorizados (Seguri, Priosa, Grainger México y Mastertec) a agosto de 2026, e incluyen IVA donde el distribuidor lo publica así. No constituyen cotización: el precio final depende de talla, color, configuración y volumen. Datos técnicos tomados de las fichas técnicas publicadas por Sköld Safety.',
};

/* ── Export ────────────────────────────────────────────────────────────────── */
export const trajesBrandList: EquipmentBrand[] = [globe, lion, honeywell, fireDex, skold];
