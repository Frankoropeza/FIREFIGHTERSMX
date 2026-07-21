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
  '* TPP = Thermal Protective Performance · THL = Total Heat Loss · Valores mínimos certificados NFPA 1970 / NFPA 1950 según modelo.';

/* ════════════════════════════════════════════════════════════════════════════
   GLOBE MANUFACTURING
   ════════════════════════════════════════════════════════════════════════════ */
const globe: EquipmentBrand = {
  categorySlug: 'trajes-bombero',
  slug: 'globe-manufacturing',
  brand: 'Globe Manufacturing',
  brandLabel: 'Globe Manufacturing',
  crossDesc: 'La más licitada en MX · G-XTREME 3.0 · GORE-TEX PFAS-free',
  eyebrow: 'Globe Manufacturing · MSA Safety · Distribuidor Autorizado MX',
  heroTitleTop: 'Trajes Globe',
  heroTitleAccent: 'NFPA 1970.',
  heroLead:
    'Distribuidor autorizado de Globe Manufacturing en México. Stock permanente de los 6 modelos en tallas S–4XL — entrega en 24–48 h en CDMX con ficha técnica completa para licitación.',
  heroIntro: [
    'Globe Manufacturing — fundada en 1887 y parte del grupo MSA Safety — es el fabricante de trajes para bomberos más solicitado en licitaciones mexicanas tier-1. Más de 110 años fabricando el traje en el que confían departamentos en los 32 estados.',
    'Su línea cubre los tres tipos de riesgo: trajes estructurales (NFPA 1970) para combate en edificios, traje de proximidad aluminizado para aeropuertos ARFF y refinerías, y traje forestal (NFPA 1950) para incendio de interfaz urbano-forestal.',
  ],
  heroBadges: ['NFPA 1971-2018', 'NFPA 1950', 'PBI Matrix', 'GORE-TEX CrossTech', 'MSA Safety', '110+ años', 'Distribuidor autorizado MX'],
  seoTitle: 'Trajes Globe Manufacturing NFPA 1970 — Distribuidor MX',
  seoDescription:
    'Catálogo completo de trajes Globe Manufacturing certificados NFPA 1970 en México. G-XTREME 3.0, ATHLETIX, CLASSIX, G-XCEL, Proximity ARFF y Warrior Wildland. Distribuidor autorizado con stock en CDMX.',
  founding: '1887',
  parentOrg: { name: 'MSA Safety Incorporated', ticker: 'NYSE:MSA' },
  stats: [
    { valor: '1887', etiq: 'Año de fundación' },
    { valor: '#1', etiq: 'Marca más licitada en México' },
    { valor: 'MSA Safety', etiq: 'Grupo industrial · NYSE: MSA' },
    { valor: '32', etiq: 'Estados con cobertura' },
  ],
  credenciales: [
    { n: '01', t: '110+ años fabricando EPP', d: 'Globe fue fundada en 1887 en Pittsfield, Massachusetts. Hoy forma parte del grupo MSA Safety — la empresa de seguridad industrial más grande del mundo. Más de un siglo de innovación en protección de bomberos.' },
    { n: '02', t: 'La marca más licitada en MX', d: 'En departamentos tier-1 de México (CDMX, Guadalajara, Monterrey, Pemex) Globe es el fabricante de trajes estructurales con mayor presencia en concursos públicos y adquisiciones directas, según datos de CompraNet 2020-2024.' },
    { n: '03', t: 'Trazabilidad completa NFPA 1850', d: 'Cada traje Globe incluye etiqueta con número de lote, fecha de fabricación y certificación del laboratorio acreditado. Documentación completa para auditorías NFPA 1850, licitaciones y procesos de acreditación institucional.' },
    { n: '04', t: 'Stock permanente en CDMX', d: 'Mantenemos inventario de los modelos principales en tallas S–4XL en nuestro almacén en CDMX. Entrega en 24–48 horas para emergencias operativas y reposición de trajes dañados o retirados por vida útil.' },
  ],
  linesIntro:
    'Globe cubre los tres escenarios de riesgo NFPA desde un solo proveedor: estructural para combate en edificios e instalaciones, proximidad para aeropuertos y refinerías, y forestal para interfaz urbano-forestal. Una sola relación de distribución para toda la flota.',
  lineas: [
    { tipo: 'estructural', badge: 'NFPA 1970', titulo: 'Línea Estructural', modelos: '4 modelos — G-XTREME 3.0 · ATHLETIX · CLASSIX · G-XCEL', desc: 'La gama estructural más completa del mercado mexicano. Desde el modelo más licitado en tier-1 (G-XTREME 3.0 con GORE-TEX CrossTech® PFAS-free) hasta la entrada más competitiva en licitaciones municipales (G-XCEL).', tech: 'PBI Matrix · Nomex NXT · GORE-TEX CrossTech® PFAS-free · Nomex IIIA' },
    { tipo: 'proximidad', badge: 'NFPA 1970 Proximity + ICAO', titulo: 'Línea Proximity ARFF', modelos: '1 modelo — Globe Proximity ARFF', desc: 'Certificado ICAO Annex 14 para operaciones de rescate en pista. Shell aluminizado de tres capas con reflectividad >90%. Referencia en AICM, NAIM y aeropuertos regionales bajo normativa AFAC.', tech: 'Shell aluminizado 3 capas · Reflectividad >90% · ICAO Annex 14' },
    { tipo: 'forestal', badge: 'NFPA 1950', titulo: 'Línea Forestal / Interfaz', modelos: '1 modelo — Warrior Wildland', desc: 'Para brigadas forestales y de interfaz urbano-forestal. THL ≥ 200 W/m² para máxima respirabilidad en operaciones prolongadas. Compatible con los estándares CONAFOR S-130/S-190.', tech: 'Nomex/Kevlar blend · THL ≥ 200 W/m² · NFPA 1950 · S-130/S-190' },
  ],
  flagship: 'G-XTREME 3.0',
  anatomiaIntro:
    'El G-XTREME 3.0 es un sistema de tres capas más interfaces y refuerzos. Estos seis elementos explican por qué es el traje estructural más licitado en los departamentos tier-1 de México.',
  anatomia: [
    { t: 'Shell exterior PBI Matrix', d: 'Tejido exterior de PBI/Kevlar con máxima resistencia a la llama, la abrasión y el desgarre, y excelente estabilidad dimensional bajo calor extremo y de alta frecuencia.' },
    { t: 'Barrera GORE-TEX CrossTech®', d: 'La capa media impermeable al agua líquida pero transpirable al vapor de sudor, disponible en versión PFAS-free para departamentos con políticas de sustancias eternas.' },
    { t: 'Forro térmico Nomex Nano', d: 'La capa interior que aporta el aislamiento térmico (TPP) sin penalizar el peso ni la flexibilidad, controlando la transferencia de calor hacia el bombero.' },
    { t: 'Costuras de doble aguja', d: 'Uniones reforzadas con hilo Nomex de doble aguja que conservan la integridad estructural del conjunto y la barrera de humedad ante esfuerzo mecánico.' },
    { t: 'Trim reflejante 3M Scotchlite', d: 'Bandas retroreflejantes y fluorescentes en configuración NFPA para visibilidad de 360° en humo, noche y baja iluminación.' },
    { t: 'Trazabilidad NFPA 1850', d: 'Etiqueta con número de lote, fecha de fabricación y laboratorio acreditado para auditoría, control de vida útil y reposición a los 10 años.' },
  ],
  comparativa: [
    { modelo: 'G-XTREME 3.0', tipo: 'estructural', shell: 'PBI Matrix', tpp: '≥ 35', thl: '≥ 130', peso: '~4.5 kg', ideal: 'Licitaciones tier-1, uso intensivo', rec: true },
    { modelo: 'ATHLETIX', tipo: 'estructural', shell: 'PBI/Kevlar Kombat', tpp: '≥ 35', thl: '≥ 155', peso: '~4.1 kg', ideal: 'Rescate técnico, alta movilidad', rec: false },
    { modelo: 'CLASSIX', tipo: 'estructural', shell: 'Nomex NXT', tpp: '≥ 35', thl: '≥ 130', peso: '~4.7 kg', ideal: 'Servicio estándar, alta rotación', rec: false },
    { modelo: 'G-XCEL', tipo: 'estructural', shell: 'Nomex IIIA', tpp: '≥ 35', thl: '≥ 130', peso: '~4.6 kg', ideal: 'Presupuesto estatal ajustado', rec: false },
    { modelo: 'Proximity ARFF', tipo: 'proximidad', shell: 'Aluminizado 3 capas', tpp: '>90% refl.', thl: '—', peso: '—', ideal: 'Aeropuertos ARFF, refinerías', rec: false },
    { modelo: 'Warrior Wildland', tipo: 'forestal', shell: 'Nomex/Kevlar blend', tpp: '≥ 20', thl: '≥ 200', peso: '~2.8 kg', ideal: 'Interfaz urbano-forestal, PC', rec: false },
  ],
  comparativaNote: NOTA_TPP_THL,
  guia: [
    { n: '01', t: 'Define el escenario dominante: combate estructural en edificios → línea estructural NFPA 1970; aproximación a combustible/ARFF → Proximity; incendio de vegetación → Warrior Wildland NFPA 1950. La norma correcta sale de aquí.' },
    { n: '02', t: 'Elige el shell según riesgo y presupuesto: PBI Matrix (G-XTREME 3.0, ATHLETIX) para uso intensivo tier-1; Nomex NXT (CLASSIX) para servicio estándar; Nomex IIIA (G-XCEL) como entrada competitiva en licitaciones municipales.' },
    { n: '03', t: 'Configura la barrera de humedad GORE-TEX CrossTech® (opción PFAS-free), el trim reflejante, el tallaje S–4XL con asesoría de ajuste y la capucha de bloqueo de partículas obligatoria bajo NFPA 1970.' },
    { n: '04', t: 'Exige certificación de laboratorio acreditado con valores TPP/THL del modelo exacto, número de lote para NFPA 1850 y el programa de inspección, lavado técnico y reparación certificada.' },
  ],
  segmentosIntro:
    'Globe es la primera opción en departamentos que requieren trazabilidad NFPA 1850, documentación para licitaciones públicas y stock garantizado en México. Su presencia en los 32 estados lo convierte en el fabricante con mayor red de servicio postventa.',
  segmentos: [
    { num: '01', tipo: 'estructural', titulo: 'Departamentos Metropolitanos Tier-1', desc: 'CDMX, GDL, MTY, PUE y los principales cuerpos de bomberos del país. El G-XTREME 3.0 domina las licitaciones tier-1 por su trazabilidad NFPA 1850, barrera GORE-TEX CrossTech® y desempeño en operaciones de alta frecuencia.', modelos: 'G-XTREME 3.0 · ATHLETIX' },
    { num: '02', tipo: 'estructural', titulo: 'Brigadas Municipales y Estatales', desc: 'Protección Civil y cuerpos municipales con presupuestos estatales. CLASSIX y G-XCEL ofrecen cumplimiento NFPA 1970 con costo de ciclo de vida optimizado para equipamiento de flotas completas.', modelos: 'CLASSIX · G-XCEL' },
    { num: '03', tipo: 'proximidad', titulo: 'Aeropuertos ARFF', desc: 'AICM, NAIM, GDL, MTY y aeropuertos regionales. El Globe Proximity ARFF cumple ICAO Annex 14 y las especificaciones BOMBA-SEP de la SCT, bajo normativa de la AFAC.', modelos: 'Globe Proximity ARFF' },
    { num: '04', tipo: 'forestal', titulo: 'Brigadas Forestales / Protección Civil', desc: 'CONAFOR, brigadas de interfaz urbano-forestal y Protección Civil con riesgo de incendio. El Warrior Wildland cumple NFPA 1950 y los estándares S-130/S-190 requeridos por organismos federales.', modelos: 'Warrior Wildland' },
  ],
  faqs: [
    { q: '¿Cuál es el traje Globe más solicitado en licitaciones mexicanas?', a: 'El Globe G-XTREME 3.0 es consistentemente el modelo más licitado en departamentos tier-1 de México (CDMX, Guadalajara, Monterrey, Pemex). Su combinación de shell PBI Matrix, barrera GORE-TEX CrossTech y liner Nomex Nano lo posicionan como el estándar de referencia para procesos competitivos públicos y privados.' },
    { q: '¿Qué diferencia hay entre shell PBI Matrix y Nomex NXT en los trajes Globe?', a: 'PBI Matrix (G-XTREME 3.0, ATHLETIX) ofrece mayor resistencia química, mejor estabilidad dimensional bajo calor extremo y larga vida útil — es la opción premium para servicios de alta frecuencia. Nomex NXT (CLASSIX) tiene décadas de servicio comprobado con excelente relación costo-durabilidad y es el estándar de comparación del sector. Nomex IIIA (G-XCEL) es la entrada a la línea Globe con menor costo inicial manteniendo la certificación NFPA 1970.' },
    { q: '¿Qué es la barrera GORE-TEX CrossTech® y por qué importa?', a: 'La barrera CrossTech® es la capa media del traje — la que impide que el agua líquida penetre pero permite que el vapor de sudor escape, controlando el estrés térmico. Globe la usa en modelos G-XTREME 3.0 y CLASSIX. La versión CrossTech® Black es la más robusta y también existe en formato PFAS-free certificado para departamentos con políticas de sustancias eternas.' },
    { q: '¿Cuánto dura un traje Globe y qué establece la NFPA 1850?', a: 'La NFPA 1850 establece un retiro máximo a los 10 años desde la fecha de fabricación, independientemente del estado visual. Antes de ese límite, se retira si hay daño estructural, contaminación irreversible, falla de la barrera de humedad o deformación del shell. Globe facilita trazabilidad completa por número de lote para auditorías NFPA 1850.' },
    { q: '¿Globe ofrece trajes con certificación PFAS-free disponibles en México?', a: 'Sí. Los modelos G-XTREME 3.0 y ATHLETIX están disponibles con barrera GORE-TEX CrossTech® PFAS-free, que elimina los compuestos per y polifluoroalquilo de la capa impermeable. Esta opción es solicitada por departamentos con políticas de sustancias eternas y por organismos que operan cerca de fuentes de agua potable.' },
  ],
  ctaKicker: 'La marca más licitada en México',
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
  crossDesc: 'V-Force® movilidad · Quantum · 135+ años · NFPA 1970+1977',
  eyebrow: 'Lion Apparel · Fundada 1889 · Distribuidor Autorizado MX',
  heroTitleTop: 'Trajes Lion',
  heroTitleAccent: 'certificados NFPA.',
  heroLead:
    'Distribuidor autorizado de Lion Apparel en México. Stock permanente de los 6 modelos en tallas S–4XL — entrega en 24–48 h en CDMX con fichas técnicas completas y manifiesto de cumplimiento para licitación pública o adquisición directa.',
  heroIntro: [
    'Lion Apparel — fundada en 1889 en Dayton, Ohio — es el segundo fabricante de trajes de bombero más licitado en México. Su presencia es especialmente fuerte en departamentos metropolitanos, corporativos industriales y brigadas ARFF en aeropuertos internacionales.',
    'La línea cubre los tres escenarios de riesgo certificados por NFPA: trajes estructurales con tecnología V-Force® para máxima movilidad, traje de proximidad aluminizado para ARFF, y traje forestal NFPA 1950 para interfaz urbano-forestal.',
  ],
  heroBadges: ['NFPA 1971-2018', 'NFPA 1950', 'PBI Matrix', 'V-Force®', 'Kombat Stretch', '135+ años', 'Distribuidor autorizado MX'],
  seoTitle: 'Trajes Lion Apparel NFPA 1970 — Distribuidor México',
  seoDescription:
    'Catálogo completo Lion Apparel certificados NFPA 1970 en México. Quantum, Alpha, Stealth, Commander, ARFF Proximity e Interface Wildland NFPA 1950. Distribuidor autorizado · stock CDMX · fichas para licitación.',
  founding: '1889',
  stats: [
    { valor: '1889', etiq: 'Año de fundación' },
    { valor: 'NFPA 1970', etiq: '+ NFPA 1950 certificados' },
    { valor: '2°', etiq: 'Marca más licitada en MX' },
    { valor: '32', etiq: 'Estados con cobertura' },
  ],
  credenciales: [
    { n: '01', t: '135 años fabricando EPP de primera línea', d: 'Fundada en 1889 en Dayton, Ohio. Lion es uno de los fabricantes de EPP para bomberos más antiguos del mundo — más de 13 décadas desarrollando trajes en los que confían cuerpos de bomberos en cuatro continentes.' },
    { n: '02', t: '2° fabricante más licitado en México', d: 'En departamentos metropolitanos, brigadas corporativas y protocolos ARFF en aeropuertos, Lion Apparel ocupa consistentemente el segundo lugar en adquisiciones públicas y privadas de trajes estructurales en México.' },
    { n: '03', t: 'V-Force® — movilidad patentada', d: 'El sistema V-Force® de Lion incorpora paneles preformados en articulaciones críticas. Reduce hasta un 18 % la resistencia al movimiento en maniobras de rescate técnico — determinante en operaciones de larga duración.' },
    { n: '04', t: 'Cobertura de riesgo completa', d: 'La línea Lion cubre los tres escenarios NFPA: estructural (NFPA 1970), proximidad ARFF (NFPA 1970 Proximity) y forestal/interfaz (NFPA 1950). Una sola relación de distribuidor para todo el catálogo de riesgos.' },
  ],
  linesIntro:
    'Lion cubre los tres escenarios de riesgo NFPA desde un solo proveedor: estructural con movilidad V-Force®, proximidad ARFF para aeropuertos y forestal NFPA 1950 para interfaz. Una sola relación de distribución para todo el catálogo de riesgos.',
  lineas: [
    { tipo: 'estructural', badge: 'NFPA 1970', titulo: 'Línea Estructural', modelos: '4 modelos — Quantum · Alpha · Stealth · Commander', desc: 'Cubre desde el traje de alta performance con PBI Matrix hasta la opción de mayor relación costo-durabilidad con Nomex IIIA. El sistema V-Force® aporta movilidad en los modelos premium.', tech: 'V-Force® · PBI Matrix · Nomex NXT · Kombat Stretch' },
    { tipo: 'proximidad', badge: 'NFPA 1970 Proximity', titulo: 'Línea ARFF Proximity', modelos: '1 modelo — ARFF Proximity', desc: 'Shell aluminizado de 3 capas con reflectividad > 90 %, diseñado para combate de incendios en aeronaves y derrames de combustible en pista. Certificado ICAO Annex 14.', tech: 'Aluminizado 3 capas · ICAO Annex 14 · Alta reflectividad' },
    { tipo: 'forestal', badge: 'NFPA 1950', titulo: 'Línea Forestal / Interfaz', modelos: '1 modelo — Interface Wildland', desc: 'Shell Nomex/Kevlar blend optimizado para incendio forestal e interfaz urbano-forestal. Mayor THL (transpirabilidad) para operaciones de larga duración en campo.', tech: 'Nomex/Kevlar blend · Alta transpirabilidad · Peso ~2.9 kg' },
  ],
  flagship: 'Quantum',
  anatomiaIntro:
    'El Quantum combina la construcción de tres capas con el sistema de articulación V-Force®. Estos seis elementos explican por qué Lion es la segunda marca más licitada en México.',
  anatomia: [
    { t: 'Shell exterior PBI Matrix', d: 'Tejido exterior PBI/Kevlar de alta resistencia a la llama y la abrasión, con estabilidad térmica para combate estructural intensivo.' },
    { t: 'Sistema V-Force®', d: 'Paneles preformados en rodillas, codos y entrepierna que reducen hasta un 18 % la resistencia al movimiento — el bombero se agacha, escala y se arrodilla sin que el traje pelee contra él.' },
    { t: 'Barrera de humedad', d: 'Capa media impermeable al agua y transpirable al vapor, que controla el estrés térmico manteniendo la protección contra líquidos y vapor a presión.' },
    { t: 'Forro térmico', d: 'Capa interior de aislamiento que aporta el TPP certificado NFPA 1970 sin penalizar el peso ni la flexibilidad del conjunto.' },
    { t: 'Trim reflejante 3M Scotchlite', d: 'Bandas retroreflejantes y fluorescentes en configuración NFPA para visibilidad de 360° en humo, noche y baja iluminación.' },
    { t: 'Trazabilidad NFPA 1850', d: 'Etiqueta con lote de fabricación para auditoría NFPA 1850, control de vida útil y reportes de ciclo de vida.' },
  ],
  comparativa: [
    { modelo: 'Quantum', tipo: 'estructural', shell: 'PBI Matrix', tpp: '≥ 35', thl: '≥ 155', peso: '~4.3 kg', ideal: 'Tier-1, alto riesgo, uso intensivo', rec: true },
    { modelo: 'Alpha', tipo: 'estructural', shell: 'Nomex NXT', tpp: '≥ 35', thl: '≥ 130', peso: '~4.6 kg', ideal: 'Municipal estándar, licitación base', rec: false },
    { modelo: 'Stealth', tipo: 'estructural', shell: 'Kombat Stretch', tpp: '≥ 35', thl: '≥ 145', peso: '~4.2 kg', ideal: 'Rescate técnico, alta movilidad', rec: false },
    { modelo: 'Commander', tipo: 'estructural', shell: 'Nomex IIIA', tpp: '≥ 35', thl: '≥ 130', peso: '~4.8 kg', ideal: 'Alta rotación, presupuesto ajustado', rec: false },
    { modelo: 'ARFF Proximity', tipo: 'proximidad', shell: 'Aluminizado 3 capas', tpp: '>90% refl.', thl: '—', peso: '—', ideal: 'Aeropuertos ARFF, AICM, NAIM', rec: false },
    { modelo: 'Interface Wildland', tipo: 'forestal', shell: 'Nomex/Kevlar blend', tpp: '≥ 20', thl: '≥ 200', peso: '~2.9 kg', ideal: 'CONAFOR, PC estatal, interfaz forestal', rec: false },
  ],
  comparativaNote: NOTA_TPP_THL,
  guia: [
    { n: '01', t: 'Define el escenario dominante: combate estructural → línea Quantum/Alpha/Stealth/Commander; aproximación a combustible/ARFF → ARFF Proximity; incendio de vegetación → Interface Wildland NFPA 1950.' },
    { n: '02', t: 'Elige el shell y la movilidad: PBI Matrix con V-Force® (Quantum) para alto rendimiento; Kombat Stretch (Stealth) para rescate técnico; Nomex NXT (Alpha) o Nomex IIIA (Commander) para servicio estándar y presupuesto.' },
    { n: '03', t: 'Configura la barrera de humedad, el trim reflejante, el tallaje S–4XL —con opción de medidas a medida 8–12 semanas— y la capucha de bloqueo de partículas obligatoria bajo NFPA 1970.' },
    { n: '04', t: 'Exige certificación de laboratorio acreditado con valores TPP/THL del modelo exacto, número de lote para NFPA 1850 y el programa de inspección, lavado técnico y reparación certificada.' },
  ],
  segmentosIntro:
    'Lion es la primera opción de departamentos metropolitanos, brigadas ARFF y corporativos industriales que valoran la movilidad V-Force® y la cobertura de riesgo completa, con trazabilidad NFPA 1850 y soporte en los 32 estados.',
  segmentos: [
    { num: '01', tipo: 'estructural', titulo: 'Departamentos Metropolitanos', desc: 'Los departamentos urbanos de alta demanda eligen el Quantum y el Alpha por su balance entre protección NFPA 1970, durabilidad bajo ciclos intensivos y disponibilidad en stock para reposición inmediata.', modelos: 'Lion Quantum · Lion Alpha' },
    { num: '02', tipo: 'proximidad', titulo: 'Brigadas ARFF', desc: 'El Lion ARFF Proximity cumple NFPA 1970 Proximity e ICAO Annex 14, cubriendo los requisitos de los aeropuertos más exigentes en México para combate de incendios en aeronaves.', modelos: 'Lion ARFF Proximity' },
    { num: '03', tipo: 'industrial', titulo: 'Corporativos Industriales', desc: 'Brigadas industriales en refinerías y plantas petroquímicas requieren trajes con alta resistencia química superficial y movilidad para intervención en espacios confinados. El Stealth y el Commander cubren este perfil.', modelos: 'Lion Stealth · Lion Commander' },
    { num: '04', tipo: 'forestal', titulo: 'Protección Civil / Forestal', desc: 'El Interface Wildland NFPA 1950 cubre el escenario de interfaz urbano-forestal con bajo peso (~2.9 kg), alta transpirabilidad THL ≥ 200 W/m² y aprobación para quemas controladas y combate directo.', modelos: 'Lion Interface Wildland' },
  ],
  faqs: [
    { q: '¿Cuál es el traje Lion más recomendado para licitaciones municipales en México?', a: 'El Lion Alpha es el modelo de mayor penetración en departamentos municipales mid-tier: cumple NFPA 1970 con shell Nomex NXT, THL ≥ 130 W/m² y precio competitivo para presupuestos estatales. Para departamentos tier-1 (CDMX, GDL, MTY, Pemex) el Lion Quantum con PBI Matrix eleva el TPP y extiende la vida útil bajo uso intensivo. Asesoramos el modelo correcto según el escenario de riesgo y el pliego de condiciones de cada licitación.' },
    { q: '¿Qué es el sistema V-Force® de Lion Apparel y qué ventaja operativa da?', a: 'V-Force® es el sistema de articulación patentado de Lion que incorpora paneles preformados en rodillas, codos y entrepierna, permitiendo al bombero moverse en cuclillas, escalar y arrodillarse sin que el traje genere resistencia. En pruebas controladas reduce la fatiga muscular hasta un 18 % en maniobras de rescate técnico comparado con trajes de corte recto. El sistema está disponible en los modelos Quantum y Stealth.' },
    { q: '¿En qué se diferencia el Lion Quantum del Globe G-XTREME 3.0?', a: 'Ambos son trajes estructurales premium NFPA 1970 con shell PBI Matrix. La diferencia principal está en la movilidad: el Quantum usa V-Force® (preformado ergonómico) versus el G-XTREME 3.0 que prioriza la construcción de capas y la barrera GORE-TEX CrossTech®. En términos de protección térmica los dos superan ampliamente los mínimos NFPA 1970 (TPP ≥ 35, THL ≥ 130). La elección suele depender de la preferencia operacional del cuerpo: mayor movilidad (Lion) o barrera de humedad premium PFAS-free (Globe). Podemos facilitarte ambas fichas técnicas para evaluación comparativa.' },
    { q: '¿Lion Apparel ofrece tallaje a medida para brigadas corporativas o industriales en México?', a: 'Sí. Lion ofrece medidas especiales (tallaje custom) con tiempo de entrega de 8–12 semanas desde su planta en Dayton, Ohio. Para proyectos corporativos de 10 o más trajes gestionamos el proceso completo: hoja de medidas por elemento, revisión de ergonomía para el tipo de operación (rescate, ARFF, industrial), opciones de retroreflectivos y bordado institucional. Contacta a nuestro equipo técnico para iniciar el proceso.' },
    { q: '¿Cuánto tiempo dura un traje Lion Apparel según NFPA 1850?', a: 'La NFPA 1850 establece un retiro máximo de 10 años desde la fecha de fabricación, independientemente del estado aparente del traje. Antes de ese límite se retira por: daño estructural al shell, contaminación química irreversible, falla de la barrera de humedad (prueba de penetración de agua) o deformación por exposición térmica extrema. Cada traje Lion incluye etiqueta de trazabilidad con lote de fabricación para auditorías NFPA 1850 y reportes de ciclo de vida.' },
  ],
  ctaKicker: '2° marca más licitada en México',
  ctaTitleHtml: 'Movilidad V-Force®.<br/>Certificación NFPA.',
  waQuote: 'Hola, quiero cotizar trajes Lion Apparel NFPA 1970.',
};

/* ════════════════════════════════════════════════════════════════════════════
   HONEYWELL MORNING PRIDE
   ════════════════════════════════════════════════════════════════════════════ */
const honeywell: EquipmentBrand = {
  categorySlug: 'trajes-bombero',
  slug: 'honeywell-morning-pride',
  brand: 'Honeywell Morning Pride',
  brandLabel: 'Honeywell Morning Pride',
  crossDesc: '4 normas · BioClad® CBRN · CarbonX® · Pemex/CFE',
  eyebrow: 'Honeywell Morning Pride · Honeywell International · Distribuidor Autorizado MX',
  heroTitleTop: 'Trajes Honeywell',
  heroTitleAccent: 'certificados NFPA.',
  heroLead:
    'Distribuidor autorizado de Honeywell Morning Pride en México. La única línea que cubre simultáneamente estructural, ARFF, industrial flash fire y CBRN — con stock permanente en CDMX y fichas técnicas para Pemex, CFE y aeropuertos.',
  heroIntro: [
    'Honeywell Morning Pride — parte del conglomerado Honeywell International — es la marca de referencia para operaciones de alto riesgo en petroquímica, refinerías y brigadas HAZMAT. Con presencia documentada en Pemex Refinación, CFE y los principales aeropuertos internacionales de México.',
    'A diferencia de otras marcas estructurales, Morning Pride cubre cuatro normas NFPA en un mismo catálogo: NFPA 1970 estructural, NFPA 2112 flash fire industrial, NFPA 1990 HAZMAT y NFPA 1970 Proximity para ARFF — más la certificación ICAO Annex 14 para aeropuertos internacionales.',
  ],
  heroBadges: ['NFPA 1971-2018', 'NFPA 2112', 'NFPA 1990', 'ICAO Annex 14', 'PBI Gold', 'CarbonX®', 'BioClad® CBRN', 'Distribuidor autorizado MX'],
  seoTitle: 'Trajes Honeywell Morning Pride NFPA 1970 — México',
  seoDescription:
    'Catálogo completo Honeywell Morning Pride certificados NFPA 1970 en México. TechGen, HP Series, GenII, ARFF Proximity, BioClad CBRN y CarbonX Proximity para Pemex, CFE y aeropuertos. Distribuidor autorizado · stock CDMX.',
  parentOrg: { name: 'Honeywell International' },
  stats: [
    { valor: '1920s', etiq: 'Origen de Morning Pride' },
    { valor: '4 normas', etiq: 'NFPA 1970 · 2112 · 1990 · ICAO' },
    { valor: 'Pemex / CFE', etiq: 'Referencia en instalaciones MX' },
    { valor: '32', etiq: 'Estados con cobertura' },
  ],
  credenciales: [
    { n: '01', t: 'Honeywell International', d: 'Morning Pride es la línea de EPP para bomberos de Honeywell International — uno de los conglomerados industriales más grandes del mundo con presencia en más de 100 países. Su espalda tecnológica y financiera garantiza continuidad de suministro, certificaciones vigentes e I+D constante.' },
    { n: '02', t: '4 líneas de riesgo en un solo catálogo', d: 'Ninguna otra marca en el catálogo FIREFIGHTERSMX cubre simultáneamente estructural, ARFF, industrial flash fire y CBRN. Honeywell permite gestionar todos los escenarios de riesgo de una instalación compleja con una sola relación de distribuidor y una sola cadena de trazabilidad NFPA 1850.' },
    { n: '03', t: 'PBI Gold + CarbonX® — la cima de la fibra', d: 'PBI Gold es la fibra de mayor estabilidad térmica disponible en trajes estructurales — sin degradación ni encogimiento hasta 700 °C. CarbonX® agrega resistencia química superior. Ambas tecnologías están disponibles exclusivamente en la línea Honeywell Morning Pride.' },
    { n: '04', t: 'Validada en Pemex, CFE y aeropuertos MX', d: 'Morning Pride tiene historial documentado de uso en instalaciones Pemex Refinación, CFE y aeropuertos internacionales en México. Brindamos fichas técnicas con especificaciones de las plantas donde el modelo ha sido aprobado para soportar procesos de evaluación de proveedores.' },
  ],
  linesIntro:
    'Ninguna otra marca cubre simultáneamente estructural, ARFF, industrial flash fire y CBRN. Honeywell permite gestionar todos los escenarios de riesgo de una instalación compleja con una sola relación de distribuidor y una sola cadena de trazabilidad NFPA 1850.',
  lineas: [
    { tipo: 'estructural', badge: 'NFPA 1970', titulo: 'Línea Estructural', modelos: '3 modelos — TechGen · HP Series · GenII', desc: 'Trajes estructurales para combate directo de incendios en edificios e instalaciones industriales. Shell desde Nomex IIIA hasta PBI Gold según el nivel de riesgo y presupuesto.', tech: 'PBI Gold · Nomex NXT · Nomex IIIA · Suspensión de capas Honeywell' },
    { tipo: 'proximidad', badge: 'NFPA 1970 Proximity + ICAO', titulo: 'Línea ARFF Proximity', modelos: '1 modelo — ARFF Proximity', desc: 'Traje aluminizado de 3 capas para rescate aeronáutico y plantas petroquímicas. Alta reflectividad ante combustibles de alto poder calorífico. Certificado ICAO Annex 14.', tech: 'Aluminizado 3 capas · Reflectividad > 90% · ICAO Annex 14' },
    { tipo: 'industrial', badge: 'NFPA 1970 Proximity · ATEX', titulo: 'Línea Proximity Industrial', modelos: '1 modelo — CarbonX® Proximity', desc: 'Traje de proximidad con fibra CarbonX® para refinerías, plantas de proceso y plataformas offshore. Resistencia química superior a hidrocarburos y Jet-A. Referencia en Pemex y CENAGAS.', tech: 'CarbonX® · Resistencia HC+Jet-A · ATEX Zona 1/2 (opcional)' },
    { tipo: 'cbrn', badge: 'NFPA 1970 · NFPA 1990 · CBRN', titulo: 'Línea CBRN / HAZMAT', modelos: '1 modelo — BioClad® CBRN', desc: 'Traje estructural con barrera química BioClad® integrada. Protección contra agentes biológicos, vapores químicos y exposición CBRN. Compatible con descontaminación NFPA 1990 y NOM.', tech: 'BioClad® · Barrera química · Descontaminación NOM/NFPA 1990' },
  ],
  flagship: 'TechGen',
  anatomiaIntro:
    'El TechGen combina el shell PBI Gold con el sistema de suspensión de capas Honeywell, y admite barreras BioClad® y CarbonX®. Estos seis elementos explican por qué Honeywell es la referencia en petroquímica y CBRN de México.',
  anatomia: [
    { t: 'Shell exterior PBI Gold', d: 'La fibra de mayor estabilidad térmica disponible en trajes estructurales — sin degradación ni encogimiento hasta 700 °C. La cima de la protección al calor radiante.' },
    { t: 'Suspensión de capas Honeywell', d: 'Sistema de separación entre shell, barrera de humedad y forro térmico que crea una cámara de aire aislante y mejora el TPP sin añadir peso.' },
    { t: 'Barrera de humedad', d: 'Capa media impermeable y transpirable que controla el estrés térmico, base sobre la que se integran las barreras químicas BioClad® o CarbonX®.' },
    { t: 'Forro térmico', d: 'Capa interior de aislamiento que aporta el TPP certificado NFPA 1970 en combate estructural directo de larga duración.' },
    { t: 'Opción BioClad® / CarbonX®', d: 'Barrera química integrada para HAZMAT/CBRN (BioClad®) o resistencia a hidrocarburos y Jet-A (CarbonX®), sin separar al elemento de su certificación NFPA 1970.' },
    { t: 'Trazabilidad NFPA 1850', d: 'Etiqueta con lote de fabricación y especificaciones de planta para auditoría NFPA 1850 y procesos de evaluación de proveedores Pemex/CFE.' },
  ],
  comparativa: [
    { modelo: 'TechGen', tipo: 'estructural', shell: 'PBI Gold', tpp: '≥ 35', thl: '≥ 155', peso: '~4.4 kg', ideal: 'Pemex, petroquímica, brigadas tier-1', rec: true },
    { modelo: 'HP Series', tipo: 'estructural', shell: 'Nomex NXT', tpp: '≥ 35', thl: '≥ 145', peso: '~4.5 kg', ideal: 'Municipal tier-1, alta rotación', rec: false },
    { modelo: 'GenII', tipo: 'estructural', shell: 'Nomex IIIA', tpp: '≥ 35', thl: '≥ 130', peso: '~4.7 kg', ideal: 'Presupuesto estatal, entrada NFPA', rec: false },
    { modelo: 'ARFF Proximity', tipo: 'proximidad', shell: 'Aluminizado 3 capas', tpp: '>90% refl.', thl: '—', peso: '—', ideal: 'Aeropuertos ARFF, AICM, NAIM', rec: false },
    { modelo: 'BioClad CBRN', tipo: 'cbrn', shell: 'PBI + barrera química', tpp: '≥ 35', thl: 'CBRN', peso: '~5.0 kg', ideal: 'HAZMAT, respuesta química, PC', rec: false },
    { modelo: 'CarbonX Proximity', tipo: 'industrial', shell: 'CarbonX®', tpp: '>90% refl.', thl: 'HC+Jet-A', peso: '—', ideal: 'Refinerías, offshore, CENAGAS', rec: false },
  ],
  comparativaNote: NOTA_TPP_THL,
  guia: [
    { n: '01', t: 'Define el escenario dominante: combate estructural → TechGen/HP/GenII; rescate aeronáutico → ARFF Proximity; refinería e hidrocarburo → CarbonX® Proximity; respuesta CBRN/HAZMAT → BioClad® CBRN.' },
    { n: '02', t: 'Elige el shell según riesgo: PBI Gold (TechGen) para la cima térmica y petroquímica; Nomex NXT (HP Series) para alta rotación municipal; Nomex IIIA (GenII) como entrada NFPA con presupuesto estatal.' },
    { n: '03', t: 'Integra la barrera adecuada: BioClad® para agentes químicos/biológicos, CarbonX® para hidrocarburos y Jet-A, y la opción antiestática EN 1149-5 para zonas ATEX 1/2. Define el trim, el tallaje y la capucha de partículas NFPA 1970.' },
    { n: '04', t: 'Exige certificación de laboratorio acreditado por norma (1971/2112/1992/ICAO), número de lote para NFPA 1850 y la ficha con la planta donde el modelo fue aprobado para evaluación de proveedores Pemex/CFE.' },
  ],
  segmentosIntro:
    'Honeywell es la primera opción de refinerías, brigadas HAZMAT/CBRN y aeropuertos que necesitan cubrir riesgos complejos con un solo proveedor — con respaldo Honeywell International, trazabilidad NFPA 1850 y soporte en los 32 estados.',
  segmentos: [
    { num: '01', tipo: 'industrial', titulo: 'Refinería & Petroquímica', desc: 'Las refinerías combinan riesgo estructural (incendios en equipos y edificaciones) con flash fire por nube de hidrocarburo. La brigada interna requiere TechGen para combate directo y CarbonX Proximity para operadores en zonas de proceso y derrames.', modelos: 'TechGen · CarbonX Proximity' },
    { num: '02', tipo: 'cbrn', titulo: 'Brigadas HAZMAT & CBRN', desc: 'Los equipos de respuesta a incidentes con materiales peligrosos necesitan una barrera química sobre el traje estructural. BioClad® integra esa protección sin separar al elemento de su certificación NFPA 1970 estructural.', modelos: 'BioClad CBRN' },
    { num: '03', tipo: 'proximidad', titulo: 'Aeropuertos & Brigadas ARFF', desc: 'El rescate aeronáutico exige alta reflectividad ante la intensa irradiación de un incendio de aeronave con Jet-A o Avgas. El ARFF Proximity de Honeywell cumple NFPA 1970 Proximity e ICAO Annex 14 para operar en pista sin restricciones.', modelos: 'ARFF Proximity' },
    { num: '04', tipo: 'estructural', titulo: 'Departamentos & Brigadas Industriales', desc: 'Departamentos municipales con cobertura de polígonos industriales y brigadas de CFE requieren trajes de alta durabilidad para ciclos intensivos. HP Series y GenII ofrecen NFPA 1970 completo con menor inversión inicial y alta disponibilidad de tallas.', modelos: 'HP Series · GenII' },
  ],
  faqs: [
    { q: '¿Cuál es la diferencia entre NFPA 1970 y NFPA 2112, y cuándo necesita su brigada las dos?', a: 'NFPA 1970 certifica trajes para combate directo de incendios estructurales — el estándar de los cuerpos de bomberos. NFPA 2112 certifica ropa de protección para trabajadores industriales expuestos a flash fire (ignición de nube de gas o vapor inflamable) — el estándar de las refinerías y plantas petroquímicas. Una brigada industrial en una refinería de Pemex o CFE normalmente requiere ambas: NFPA 1970 para la brigada de respuesta de emergencias y NFPA 2112 para los trabajadores en planta. La línea Honeywell Morning Pride cubre las dos normas dentro del mismo portafolio.' },
    { q: '¿Qué es BioClad® y en qué operaciones es imprescindible?', a: 'BioClad® es la tecnología de barrera química de Honeywell Morning Pride integrada sobre el shell estructural. Agrega resistencia a agentes biológicos, vapores químicos y productos peligrosos clasificados CBRN (Chemical, Biological, Radiological, Nuclear). Es imprescindible para brigadas de respuesta a incidentes con materiales peligrosos (HAZMAT), protección civil con riesgo CBRN, fuerzas de seguridad en instalaciones estratégicas y plantas con inventario de agentes corrosivos o tóxicos. El BioClad mantiene la certificación NFPA 1970 estructural y es compatible con procedimientos de descontaminación NOM y NFPA 1990.' },
    { q: '¿CarbonX® es mejor que PBI Gold para una refinería?', a: 'Son fibras para escenarios diferentes. PBI Gold (TechGen) está optimizado para combate estructural continuo con alta TPP y THL — el traje de trabajo del bombero. CarbonX® (Honeywell CarbonX Proximity) está formulado para exposición a hidrocarburos líquidos y vapores de Jet-A, con resistencia química superior y reflectividad para refinerías y plantas de proceso. En una instalación Pemex la combinación correcta es TechGen para la brigada estructural y CarbonX Proximity para los operadores en zonas de derrames y procesos con hidrocarburo.' },
    { q: '¿Cómo compara el TechGen con el Lion Quantum y el Globe G-XTREME 3.0?', a: 'Los tres son trajes estructurales NFPA 1970 con shell PBI premium y THL ≥ 155 W/m² (TechGen y Quantum) o ≥ 130 W/m² (G-XTREME 3.0 base). La diferencia operacional: Globe G-XTREME 3.0 prioriza la barrera GORE-TEX CrossTech PFAS-free y es el más licitado en MX; Lion Quantum introduce el sistema V-Force® para movilidad; Honeywell TechGen es la referencia para entornos industriales con exposición a hidrocarburos y petroquímica, gracias a su sistema de suspensión de capas optimizado para Pemex y CFE. Para un departamento municipal es una decisión de preferencia operacional; para una brigada industrial el TechGen tiene ventaja clara.' },
    { q: '¿Honeywell Morning Pride está disponible para ambientes ATEX (zonas potencialmente explosivas)?', a: 'Sí. Los modelos TechGen y CarbonX Proximity de Honeywell Morning Pride están disponibles en configuración con propiedades antiestáticas certificadas según EN 1149-5, requeridas para operar en zonas ATEX Zona 1 y Zona 2 (atmósferas potencialmente explosivas en refinería, almacenamiento de gas y plataformas offshore). Esta especificación se solicita al momento de la cotización e impacta en el proceso de fabricación — disponible con tiempo de entrega de 10–14 semanas desde planta.' },
  ],
  ctaKicker: '4 normas NFPA · Pemex y CFE',
  ctaTitleHtml: 'Riesgo complejo.<br/>Un solo proveedor.',
  waQuote: 'Hola, quiero cotizar trajes Honeywell Morning Pride NFPA 1970.',
};

/* ════════════════════════════════════════════════════════════════════════════
   FIRE-DEX
   ════════════════════════════════════════════════════════════════════════════ */
const fireDex: EquipmentBrand = {
  categorySlug: 'trajes-bombero',
  slug: 'fire-dex',
  brand: 'Fire-Dex',
  brandLabel: 'Fire-Dex',
  crossDesc: 'TECGEN® · el más ligero · PFAS-free nativo · #1 crecimiento',
  eyebrow: 'Fire-Dex · TECGEN® Technology · Distribuidor Autorizado MX',
  heroTitleTop: 'Trajes Fire-Dex',
  heroTitleAccent: 'certificados NFPA.',
  heroLead:
    'Distribuidor autorizado de Fire-Dex en México. La única línea con fibra TECGEN® nativa — más ligera, más transpirable y PFAS-free sin opciones adicionales. Stock permanente en CDMX con fichas técnicas para licitación.',
  heroIntro: [
    'Fire-Dex es la marca de mayor crecimiento en licitaciones tier-1 de México (2023-2025). No por inercia institucional — sino porque sus especificaciones técnicas ganan en comparativa directa: mejor THL que Nomex NXT, menor peso que PBI Matrix, PFAS-free nativo en toda la línea TECGEN® y precio de adquisición más competitivo.',
    'TECGEN® es una fibra sintética de segunda generación que supera a Nomex en transpirabilidad manteniendo el mismo nivel de protección certificado NFPA 1970. Cuando los departamentos empiezan a medir THL junto con TPP, Fire-Dex gana.',
  ],
  heroBadges: ['NFPA 1971-2018', 'NFPA 2112', 'TECGEN® 71', 'TECGEN® 51', 'PBI/TECGEN Hybrid', 'PFAS-free', 'Distribuidor autorizado MX'],
  seoTitle: 'Trajes Fire-Dex NFPA 1970 — TECGEN® · México',
  seoDescription:
    'Catálogo completo Fire-Dex certificados NFPA 1970 en México. TECGEN71, TECGEN51 (el más ligero), H71 Hybrid, FXR Proximity y Kombat. La marca de mayor crecimiento en licitaciones tier-1 MX 2023-2025. Distribuidor autorizado · stock CDMX.',
  stats: [
    { valor: '3.5 kg', etiq: 'Traje NFPA 1970 más ligero (TECGEN51)' },
    { valor: '165 W/m²', etiq: 'THL más alto del segmento estructural' },
    { valor: 'PFAS-free', etiq: 'Nativo en toda la línea TECGEN®' },
    { valor: '#1 crecimiento', etiq: 'Licitaciones MX 2023-2025' },
  ],
  credenciales: [
    { n: '01', t: 'La marca que más crece en MX', d: 'Fire-Dex registró el mayor crecimiento porcentual en licitaciones tier-1 en México (2023-2025) entre las 4 marcas del catálogo. No por herencia institucional, sino porque sus especificaciones técnicas ganan en comparativa directa contra Nomex NXT con menor costo de adquisición.' },
    { n: '02', t: 'TECGEN® — la fibra que supera a Nomex en THL', d: 'TECGEN® 51 alcanza THL ≥ 165 W/m² — 27% más transpirable que el Nomex estándar (≥ 130 W/m²). A igual TPP (≥ 35 cal/cm²), mayor THL significa menor acumulación de calor en el bombero, menor estrés cardiovascular y menor riesgo de golpe de calor durante la intervención.' },
    { n: '03', t: 'El traje más ligero de su clase NFPA 1970', d: 'TECGEN51 a ~3.5 kg es el traje estructural certificado NFPA 1970 más ligero disponible en el mercado mexicano. Esa diferencia frente al promedio Nomex (~4.6 kg) equivale a 1.1 kg menos de carga — un 24% de reducción que impacta directamente en la fatiga operacional.' },
    { n: '04', t: 'PFAS-free nativo en toda la línea TECGEN®', d: 'TECGEN® no requiere tratamiento DWR con PFAS — los compuestos per y polifluoroalquilo que organismos internacionales están restringiendo en trajes de bombero. La línea Fire-Dex TECGEN cumple las políticas de sustancias eternas sin opciones adicionales ni sobrecosto.' },
  ],
  linesIntro:
    'Fire-Dex cubre el escenario estructural con la mejor relación peso/THL del mercado y suma una línea de proximidad industrial. Del TECGEN51 ultraligero al H71 híbrido premium y el FXR para flash fire, con PFAS-free nativo en toda la fibra TECGEN®.',
  lineas: [
    { tipo: 'estructural', badge: 'NFPA 1970 · Ultra ligero', titulo: 'Línea TECGEN® Puro', modelos: '2 modelos — TECGEN71 · TECGEN51', desc: 'La línea con mejor THL del mercado y el menor peso en su clase NFPA 1970. TECGEN71 para servicio intensivo; TECGEN51 para el departamento que necesita el mínimo estrés térmico posible.', tech: 'TECGEN® 71 / 51 · THL ≥ 165 W/m² · ~3.5–3.8 kg · PFAS-free nativo' },
    { tipo: 'estructural', badge: 'NFPA 1970 · Alto rendimiento', titulo: 'Línea Híbrida', modelos: '2 modelos — H71 Hybrid · Kombat', desc: 'Lo mejor de PBI y TECGEN en una sola construcción. H71 para operaciones de alta frecuencia con protección premium; Kombat para rescate técnico con tejido Stretch en zonas articulares.', tech: 'PBI/TECGEN® blend · Kombat Stretch · THL ≥ 145–150 W/m² · ~4.0–4.1 kg' },
    { tipo: 'estructural', badge: 'NFPA 1970 · Acceso', titulo: 'Línea 1971 Clásica', modelos: '1 modelo — 1971 Series', desc: 'La puerta de entrada a la calidad Fire-Dex. Shell Nomex IIIA con certificación NFPA 1970 completa y sistema de calidad Fire-Dex. Ideal para departamentos con presupuesto estatal ajustado.', tech: 'Nomex IIIA · THL ≥ 130 W/m² · ~4.5 kg · Precio competitivo' },
    { tipo: 'industrial', badge: 'NFPA 1970 Proximity', titulo: 'Línea FXR Proximity', modelos: '1 modelo — FXR Proximity', desc: 'Traje de proximidad FXR aluminizado para supresión industrial, petroquímica y flash fire. Reflexividad > 85 % con sistema tricapa optimizado para planta química y almacenes de combustible.', tech: 'FXR aluminizado · Reflexividad > 85% · Resistencia flash fire HC' },
  ],
  flagship: 'TECGEN71',
  anatomiaIntro:
    'El TECGEN71 reemplaza el Nomex por fibra TECGEN® de segunda generación en una construcción de tres capas más ligera. Estos seis elementos explican por qué Fire-Dex es la marca que más crece en México.',
  anatomia: [
    { t: 'Shell exterior TECGEN® 71', d: 'Fibra sintética de segunda generación que iguala el TPP del Nomex (≥ 35 cal/cm²) con mayor THL (transpirabilidad) y menor peso — el corazón de la ventaja Fire-Dex.' },
    { t: 'PFAS-free nativo', d: 'La fibra TECGEN® no requiere tratamiento DWR con PFAS; el traje cumple las políticas de sustancias eternas sin opciones adicionales ni sobrecosto, a diferencia de los trajes que dependen de recubrimientos.' },
    { t: 'Barrera de humedad', d: 'Capa media impermeable y transpirable que controla el estrés térmico manteniendo la protección contra líquidos y vapor a presión en combate estructural.' },
    { t: 'Forro térmico ligero', d: 'Capa interior de aislamiento optimizada para aportar el TPP certificado NFPA 1970 con el menor peso de su clase (~3.5–3.8 kg).' },
    { t: 'Trim reflejante 3M Scotchlite', d: 'Bandas retroreflejantes y fluorescentes en configuración NFPA para visibilidad de 360° en humo, noche y baja iluminación.' },
    { t: 'Trazabilidad NFPA 1850', d: 'Etiqueta con lote de fabricación y el análisis comparativo TECGEN® vs Nomex para auditoría NFPA 1850 y procesos de licitación CompraNet.' },
  ],
  comparativa: [
    { modelo: 'TECGEN71', tipo: 'estructural', shell: 'TECGEN® 71', tpp: '≥ 35', thl: '≥ 155', peso: '~3.8 kg', ideal: 'Licitaciones tier-1, alto rendimiento', rec: true },
    { modelo: 'TECGEN51', tipo: 'estructural', shell: 'TECGEN® 51', tpp: '≥ 35', thl: '≥ 165', peso: '~3.5 kg', ideal: 'Máxima ligereza, climas cálidos', rec: false },
    { modelo: 'H71 Hybrid', tipo: 'estructural', shell: 'PBI/TECGEN® blend', tpp: '≥ 35', thl: '≥ 150', peso: '~4.0 kg', ideal: 'Premium, alta frecuencia operacional', rec: false },
    { modelo: 'Kombat', tipo: 'estructural', shell: 'TECGEN/PBI + Stretch', tpp: '≥ 35', thl: '≥ 145', peso: '~4.1 kg', ideal: 'Rescate técnico, SAR, movilidad max', rec: false },
    { modelo: '1971 Series', tipo: 'estructural', shell: 'Nomex IIIA', tpp: '≥ 35', thl: '≥ 130', peso: '~4.5 kg', ideal: 'Entrada NFPA, presupuesto ajustado', rec: false },
    { modelo: 'FXR Proximity', tipo: 'industrial', shell: 'FXR aluminizado', tpp: '>85% refl.', thl: 'Flash fire', peso: '—', ideal: 'Industria, petroquímica, almacenes', rec: false },
  ],
  comparativaNote: NOTA_TPP_THL,
  guia: [
    { n: '01', t: 'Define el escenario dominante: combate estructural urbano → TECGEN71/TECGEN51; alta frecuencia premium → H71 Hybrid; rescate técnico/SAR → Kombat; flash fire industrial → FXR Proximity.' },
    { n: '02', t: 'Prioriza peso o tecnología: TECGEN51 (~3.5 kg) para máxima ligereza y climas cálidos; TECGEN71 para mejor THL en servicio intensivo; H71 híbrido PBI/TECGEN para protección premium; 1971 Series Nomex IIIA para presupuesto ajustado.' },
    { n: '03', t: 'Aprovecha el PFAS-free nativo: la fibra TECGEN® cumple políticas de sustancias eternas sin recubrimiento. Configura barrera de humedad, trim reflejante, tallaje S–4XL y capucha de partículas NFPA 1970.' },
    { n: '04', t: 'Para licitación CompraNet, solicita la ficha bilingüe por partida, el certificado de laboratorio con número de lote y el análisis comparativo de laboratorio TECGEN® vs Nomex IIIA/NXT.' },
  ],
  segmentosIntro:
    'Fire-Dex es la primera opción de departamentos con alta frecuencia de servicio, equipos de rescate técnico y brigadas que renuevan por vencimiento NFPA 1850 y evalúan con evidencia técnica — peso, THL y PFAS-free — más que por inercia de marca.',
  segmentos: [
    { num: '01', tipo: 'estructural', titulo: 'Alta frecuencia de servicio', desc: 'Un bombero urbano puede responder 6-10 llamados diarios. Cada kilogramo de EPP se acumula en fatiga y riesgo cardíaco. TECGEN71 y TECGEN51 son la elección de los departamentos que priorizan la seguridad del bombero tanto como la protección ante el fuego.', modelos: 'TECGEN71 · TECGEN51' },
    { num: '02', tipo: 'usar', titulo: 'Rescate Técnico & SAR', desc: 'El Kombat con tejido TECGEN/PBI Stretch en zonas articulares permite al elemento moverse sin restricción dentro de estructuras colapsadas, ductos y espacios confinados. El traje no pelea contra el bombero.', modelos: 'Fire-Dex Kombat' },
    { num: '03', tipo: 'estructural', titulo: 'Brigadas con renovación NFPA 1850', desc: 'Los departamentos que renuevan trajes por vencimiento NFPA 1850 (10 años) evalúan hoy marcas con tecnología actual. TECGEN71 ofrece mejor THL que Nomex NXT al mismo nivel NFPA 1970 — y a menor costo de adquisición que PBI Matrix.', modelos: 'TECGEN71 · 1971 Series' },
    { num: '04', tipo: 'industrial', titulo: 'Industria & Flash Fire', desc: 'El FXR Proximity cubre supresión industrial con alta reflectividad y resistencia a flash fire por hidrocarburo. La 1971 Series ofrece una opción Nomex IIIA dentro del portafolio Fire-Dex para brigadas industriales con requerimientos de presupuesto.', modelos: 'FXR Proximity · 1971 Series' },
  ],
  faqs: [
    { q: '¿TECGEN® es igual de seguro que Nomex? ¿Por qué no es tan conocido?', a: 'Sí — TECGEN® cumple todos los requisitos de la norma NFPA 1970 con el mismo TPP mínimo (≥ 35 cal/cm²) que Nomex. Su menor reconocimiento se debe únicamente a que es una fibra sintética de segunda generación desarrollada en los 2000s, mientras Nomex existe desde los años 60 y Dupont invirtió décadas en posicionarla. En pruebas comparativas de laboratorio certificadas NFPA, TECGEN® 71 y 51 superan a Nomex NXT en THL (transpirabilidad): TECGEN51 alcanza ≥ 165 W/m² frente a ≥ 130 W/m² del Nomex estándar. El reconocimiento no equivale a rendimiento.' },
    { q: '¿Por qué Fire-Dex crece tan rápido si Globe y Lion llevan décadas en México?', a: 'Tres razones concretas: (1) Precio de adquisición — sin la prima de marca que cargan Globe y Lion, Fire-Dex puede ofrecer NFPA 1970 completo con mejor THL a menor costo inicial. (2) TECGEN® ofrece mejor transpirabilidad que Nomex NXT al mismo nivel de protección — eso se traduce en menos fatiga y menor riesgo de golpe de calor en el bombero. (3) Los departamentos que renuevan trajes por vencimiento NFPA 1850 están evaluando marcas con evidencia técnica, no solo con historia. Fire-Dex gana en ambas comparativas. En licitaciones municipales de CDMX, GDL y MTY (2023-2025), Fire-Dex registró el crecimiento porcentual más alto entre las 4 marcas del catálogo.' },
    { q: '¿El TECGEN51 es realmente el traje estructural NFPA 1970 más ligero del mercado?', a: 'Sí, dentro del segmento de trajes con certificación NFPA 1970 completa. El TECGEN51 pesa ~3.5 kg — aproximadamente 1.0–1.3 kg menos que los modelos Nomex estándar (4.5–4.8 kg) y 0.6 kg menos que el promedio de los trajes PBI premium. Esa diferencia no es cosmética: estudios de NIOSH y la propia NFPA documentan que cada kilogramo adicional de EPP eleva el estrés cardiovascular y la temperatura corporal del bombero en operaciones de 30+ minutos, incrementando el riesgo cardíaco — la primera causa de muerte en servicio activo en América del Norte. Para departamentos con alta frecuencia de atención y climas cálidos, el peso del traje es una decisión de seguridad, no de preferencia.' },
    { q: '¿El H71 Hybrid es mejor que un PBI Matrix puro?', a: 'Depende del uso. PBI Matrix puro (Globe G-XTREME, Lion Quantum) ofrece la mayor estabilidad térmica en exposiciones extremas y sostenidas — es la mejor opción para combate de larga duración en condiciones de máxima temperatura. El H71 Hybrid combina PBI en el frente y torso con TECGEN en laterales y mangas, reduciendo el peso total ~0.5 kg con respecto a un PBI puro y mejorando el THL. El resultado es un traje con menor fatiga acumulada en servicio de alta frecuencia, manteniendo el nivel de protección estructural completo NFPA 1970. Para bomberos que responden múltiples veces al día, el H71 suele ser la elección técnicamente más inteligente.' },
    { q: '¿Fire-Dex tiene soporte documental para licitaciones CompraNet en México?', a: 'Sí. Proporcionamos el paquete completo para procesos de adquisición pública: ficha técnica bilingüe (español/inglés) con especificaciones por partida, certificado del laboratorio acreditado con número de lote, manifiesto de cumplimiento NFPA 1970, hoja de datos de seguridad y carta de garantía del fabricante. El paquete se entrega en formato PDF y editable según los requisitos del pliego de condiciones. Para licitaciones que requieran equivalencias entre TECGEN® y Nomex IIIA/NXT, también preparamos el análisis comparativo de laboratorio certificado.' },
  ],
  ctaKicker: 'La marca que más crece en México',
  ctaTitleHtml: 'Menos peso.<br/>Mismo NFPA 1970.',
  waQuote: 'Hola, quiero cotizar trajes Fire-Dex NFPA 1970 con fibra TECGEN.',
};

/* ── Export ────────────────────────────────────────────────────────────────── */
export const trajesBrandList: EquipmentBrand[] = [globe, lion, honeywell, fireDex];
