/**
 * Marcas de Equipos HAZMAT — implementan EquipmentBrand (ver brandPages.ts).
 * Renderizadas por src/components/products/BrandPage.astro.
 *
 * Categoría 'hazmat' (columnas: Norma / Nivel EPA / Barrera / Gases / Ideal).
 * Familias: traje-nivel-a · traje-nivel-b · detector-multigases · kit-descon
 * (TipoKey extendido en brandPages.ts)
 */
import type { EquipmentBrand } from './brandPages';

const NOTA_HAZMAT =
  '* Niveles EPA de protección personal: el nivel asignado depende del agente específico, la concentración y la ruta de exposición. Siempre consulte las tablas de permeación del fabricante y el plan de respuesta de su brigada antes de seleccionar el nivel de protección.';

/* ════════════════════════════════════════════════════════════════════════════
   DUPONT TYCHEM — Trajes HAZMAT NFPA 1990
   ════════════════════════════════════════════════════════════════════════════ */
const dupontTychem: EquipmentBrand = {
  categorySlug: 'hazmat',
  slug: 'dupont-tychem',
  brand: 'DuPont Tychem',
  brandLabel: 'DuPont Tychem',
  crossDesc: 'Trajes HAZMAT Nivel A y B · NFPA 1990 · Líder mundial en barreras químicas',
  eyebrow: 'DuPont Safety Products · Tychem · Distribuidor Autorizado MX',
  heroTitleTop: 'Trajes DuPont Tychem',
  heroTitleAccent: 'barrera química NFPA 1990.',
  heroLead:
    'Distribuidor autorizado de trajes HAZMAT DuPont Tychem en México. La gama completa: Tychem 10000 (Nivel A encapsulado), Tychem 6000F (FR + barrera química), Tychem 4000S (Nivel B/C) y Tychem 2000 (Nivel C/D) — cada traje con tabla de permeación verificada para selección según el agente específico.',
  heroIntro: [
    'DuPont Safety Products define el estándar global de barreras químicas para respuesta a materiales peligrosos. La línea Tychem cubre el espectro completo de protección: desde el Tychem 10000 —el traje encapsulado con mayor resistencia química disponible, certificado NFPA 1990 y CE Categoría III— hasta el Tychem 2000 para operaciones de post-emergencia y muestreo ambiental de Nivel C/D.',
    'En México, la selección correcta del traje HAZMAT exige tablas de permeación verificadas por agente y concentración — no solo la certificación de nivel. DuPont publica tablas de permeación para más de 280 sustancias en la gama Tychem, y te asesoramos en la selección específica según las sustancias de tu operación: refinería, petroquímica, transporte de químicos, planta de tratamiento o respuesta municipal.',
  ],
  heroBadges: [
    'NFPA 1990',
    'NFPA 1990',
    'CE Categoría III',
    'Nivel A encapsulado',
    'Nivel B/C salpicadura',
    'Tablas de permeación 280+ sustancias',
    'DuPont Safety Products',
    'Distribuidor Autorizado MX',
  ],
  seoTitle: 'Trajes DuPont Tychem HAZMAT NFPA 1990 — Nivel A · B · México',
  seoDescription:
    'Trajes HAZMAT DuPont Tychem certificados NFPA 1990 en México: Tychem 10000 (Nivel A), Tychem 6000F (FR), Tychem 4000S (Nivel B/C), Tychem 2000 (Nivel C/D). Tablas de permeación · asesoría por agente. Distribuidor autorizado.',
  founding: '1802',
  parentOrg: { name: 'DuPont de Nemours Inc.', ticker: 'NYSE:DD' },
  stats: [
    { valor: 'NFPA 1990', etiq: 'Norma máxima Nivel A' },
    { valor: '280+', etiq: 'Sustancias con tabla de permeación' },
    { valor: 'CE III', etiq: 'Categoría de riesgo más alta (Europa)' },
    { valor: '32', etiq: 'Estados con cobertura en México' },
  ],
  credenciales: [
    {
      n: '01',
      t: 'Tychem 10000: la mayor resistencia química disponible',
      d: 'El Tychem 10000 (Saranex-23P laminado sobre Tyvek) es el traje encapsulado con mayor resistencia documentada a vapor y gas en el portafolio DuPont. Certificado NFPA 1990 y CE Categoría III. La primera opción para atmósferas desconocidas, operaciones CBRN y eventos con mezclas de agentes no identificados.',
    },
    {
      n: '02',
      t: 'Tablas de permeación verificadas por agente y concentración',
      d: 'DuPont publica tablas de permeación para más de 280 sustancias en la gama Tychem, con tiempo de ruptura (breakthrough time) y tasa de permeación por nivel de concentración. Es la documentación que exigen los planes de respuesta HAZMAT certificados, las brigadas industriales auditadas y los contratos con aseguradoras internacionales.',
    },
    {
      n: '03',
      t: 'Tychem 6000F: doble protección química + resistencia a flama',
      d: 'El Tychem 6000F combina barrera química de amplio espectro con resistencia a flama certificada NFPA 2112. La única prenda que permite abordar un incidente HAZMAT en entorno con riesgo simultáneo de salpicadura química y fuego repentino — crítico en refinerías, petroquímicas y plantas con vapores inflamables.',
    },
    {
      n: '04',
      t: 'Asesoría de selección por agente específico',
      d: 'La selección de un traje HAZMAT por nivel (A, B, C) es insuficiente sin verificar la compatibilidad con el agente específico. Te entregamos las tablas de permeación correspondientes a las sustancias de tu operación y asesoramos el nivel correcto según concentración, ruta de exposición y duración de la operación.',
    },
  ],
  linesIntro:
    'DuPont Tychem cubre el espectro completo de protección HAZMAT con una sola marca: desde el máximo Nivel A encapsulado hasta el Nivel C/D para post-emergencia. Cada familia tiene tabla de permeación verificada para selección por agente.',
  lineas: [
    {
      tipo: 'traje-nivel-a',
      badge: 'NFPA 1990 · Nivel A Encapsulado',
      familiaLabel: 'Tychem 10000 / 6000F',
      flagship: 'dupont-tychem-10000',
      desc: 'Trajes encapsulados de máxima protección química. Tychem 10000 para vapor/gas (Nivel A puro) y Tychem 6000F con resistencia a flama para entornos con doble riesgo. Ambos certificados NFPA 1990 y CE Categoría III.',
      modelos: [
        { m: 'Tychem 10000',   d: 'Saranex-23P laminado — máxima resistencia a vapor y gas · Nivel A' },
        { m: 'Tychem 6000F',   d: 'FR + barrera química — NFPA 1990 + NFPA 2112 · Nivel A/B' },
      ],
    },
    {
      tipo: 'traje-nivel-b',
      badge: 'NFPA 1990 · Nivel B/C Salpicadura',
      familiaLabel: 'Tychem 4000S / 2000',
      flagship: 'dupont-tychem-4000s',
      desc: 'Trajes de cobertura total para Nivel B, C y D. Tychem 4000S para salpicadura de líquidos industriales y Tychem 2000 para partículas, aerosoles y líquidos de baja presión en post-emergencia.',
      modelos: [
        { m: 'Tychem 4000S',   d: 'Polipropileno laminado — ácidos, bases, solventes · Nivel B/C' },
        { m: 'Tychem 2000',    d: 'SMS laminado — partículas y aerosoles · Nivel C/D post-emergencia' },
      ],
    },
  ],
  comparativaLabel: 'Comparativa familia Tychem',
  comparativa: [
    { modelo: 'Tychem 10000', norma: 'NFPA 1990 · CE III', nivel_haz: 'Nivel A', barrera: 'Saranex-23P laminado',    ideal: 'Atmósferas desconocidas · CBRN' },
    { modelo: 'Tychem 6000F', norma: 'NFPA 1990 · 2112',   nivel_haz: 'Nivel A/B + FR', barrera: 'FR laminado 6 capas', ideal: 'Refinería · petroquímica · gas' },
    { modelo: 'Tychem 4000S', norma: 'NFPA 1990 · EN 14605', nivel_haz: 'Nivel B/C', barrera: 'Polipropileno laminado', ideal: 'Brigadas industriales · transporte' },
    { modelo: 'Tychem 2000',  norma: 'NFPA 1990 · EN 13982', nivel_haz: 'Nivel C/D', barrera: 'SMS laminado',           ideal: 'Post-emergencia · muestreo ambiental' },
  ],
  faq: [
    {
      q: '¿Cuándo usar Tychem 10000 vs Tychem 4000S?',
      a: 'El Tychem 10000 (Nivel A) se usa cuando el agente y la concentración son desconocidos, cuando hay riesgo de exposición a vapor o gas, o cuando el plan de respuesta exige máxima protección antes de identificar el agente. El Tychem 4000S (Nivel B/C) aplica cuando el agente es conocido, su ruta de exposición es por salpicadura de líquido (no vapor), y la tabla de permeación confirma resistencia adecuada.',
    },
    {
      q: '¿Qué son las tablas de permeación y por qué son críticas?',
      a: 'Las tablas de permeación documentan cuánto tiempo tarda un agente químico en atravesar el material del traje (breakthrough time) y a qué tasa lo hace. Sin verificar la tabla para el agente específico, un traje "Nivel A" puede fallar en minutos ante ciertos solventes clorados o ácidos concentrados que atraviesan materiales no compatibles. DuPont publica tablas para más de 280 sustancias en la gama Tychem — te facilitamos la ficha del agente específico de tu operación.',
    },
    {
      q: '¿El Tychem 6000F protege contra fuego?',
      a: 'El Tychem 6000F tiene resistencia a flama certificada (NFPA 2112 y ASTM D6413) — no protege contra fuego directo ni es un traje estructural, pero no se inflama ni propaga la llama en exposición momentánea. Esto es crítico en refinería, petroquímica o plantas con vapores inflamables donde puede haber ignición repentina simultánea con salpicadura química.',
    },
  ],
  ctaWhatsapp: 'Hola, quiero información y tablas de permeación de trajes DuPont Tychem NFPA 1990 para mi brigada HAZMAT.',
  notaPie: NOTA_HAZMAT,
};

/* ════════════════════════════════════════════════════════════════════════════
   LAKELAND INDUSTRIES — ChemMax NFPA 1990
   ════════════════════════════════════════════════════════════════════════════ */
const lakelandChemMax: EquipmentBrand = {
  categorySlug: 'hazmat',
  slug: 'lakeland-chemmax',
  brand: 'Lakeland Industries',
  brandLabel: 'Lakeland Industries',
  crossDesc: 'Trajes HAZMAT Nivel A y B · NFPA 1990 · ChemMax 4 · AlphaTec',
  eyebrow: 'Lakeland Industries · ChemMax · Distribuidor Autorizado MX',
  heroTitleTop: 'Trajes Lakeland ChemMax',
  heroTitleAccent: 'protección Nivel A certificada.',
  heroLead:
    'Distribuidor autorizado de trajes HAZMAT Lakeland Industries en México. ChemMax 4 (Nivel A encapsulado NFPA 1990), ChemMax 3 (Nivel A optimizado en peso), AlphaTec 5000 (Nivel B salpicadura) y Pyrolon CRFR (doble protección química + FR) — con tablas de permeación para 350+ sustancias.',
  heroIntro: [
    'Lakeland Industries es el mayor fabricante independiente de EPP de protección química del mundo. Su línea ChemMax define el estándar de trajes encapsulados Nivel A certificados NFPA 1990 como alternativa técnicamente equivalente a DuPont Tychem, con tablas de permeación para más de 350 sustancias y compatibilidad documentada con SCBA de los principales fabricantes.',
    'La ventaja de Lakeland en el mercado mexicano es la profundidad de su portafolio: desde el ChemMax 4 de máxima protección hasta el Pyrolon CRFR para entornos con doble riesgo (salpicadura química + fuego), con costuras selladas por RF, cierres de entrada verificados y visor panorámico antifog en todos sus modelos encapsulados.',
  ],
  heroBadges: [
    'NFPA 1990',
    'NFPA 1990',
    'EN 943-1 Tipo 1',
    'ChemMax 4 Nivel A',
    'AlphaTec Nivel B',
    'Tablas de permeación 350+ sustancias',
    'Lakeland Industries',
    'Distribuidor Autorizado MX',
  ],
  seoTitle: 'Trajes Lakeland ChemMax HAZMAT NFPA 1990 — Nivel A · B · México',
  seoDescription:
    'Trajes HAZMAT Lakeland ChemMax certificados NFPA 1990 en México: ChemMax 4 (Nivel A), ChemMax 3 (Nivel A ligero), AlphaTec 5000 (Nivel B), Pyrolon CRFR (FR + químico). Tablas de permeación · 350+ sustancias. Distribuidor autorizado.',
  founding: '1982',
  parentOrg: { name: 'Lakeland Industries Inc.', ticker: 'NASDAQ:LAKE' },
  stats: [
    { valor: 'NFPA 1990', etiq: 'Norma máxima Nivel A' },
    { valor: '350+', etiq: 'Sustancias con tabla de permeación' },
    { valor: 'EN 943-1', etiq: 'Tipo 1 — equivalente europeo Nivel A' },
    { valor: '32', etiq: 'Estados con cobertura en México' },
  ],
  credenciales: [
    {
      n: '01',
      t: 'ChemMax 4: 350+ sustancias documentadas',
      d: 'El ChemMax 4 (laminado de 4 capas) tiene tablas de permeación verificadas para más de 350 sustancias — el mayor catálogo de documentación química de la categoría. Para brigadas HAZMAT industriales con múltiples agentes posibles, mayor cobertura documental significa menor riesgo de selección incorrecta.',
    },
    {
      n: '02',
      t: 'ChemMax 3: mismo Nivel A, menor peso',
      d: 'El ChemMax 3 ofrece protección Nivel A NFPA 1990 en un laminado de 3 capas optimizado en peso. Menor resistencia al calor radiante = mayor tiempo de trabajo seguro dentro del traje antes de alcanzar el límite de estrés térmico — crítico en operaciones HAZMAT de larga duración o en climas cálidos.',
    },
    {
      n: '03',
      t: 'Pyrolon CRFR: doble certificación química + FR',
      d: 'El Pyrolon CRFR combina resistencia a salpicadura química NFPA 1990 con resistencia a flama NFPA 2112. El tejido FR laminado no propaga llama, lo que protege al técnico ante ignición repentina en entornos con vapores inflamables. La opción preferida en refinerías y plantas petroquímicas donde el doble riesgo es simultáneo.',
    },
    {
      n: '04',
      t: 'Compatible con todos los SCBA certificados',
      d: 'Los trajes encapsulados Lakeland ChemMax están diseñados y probados con SCBA de los principales fabricantes: MSA G1, Dräger PSS 7000, 3M Scott Air-Pak NxG7 y Honeywell Sperian. La compatibilidad está documentada en las fichas técnicas de cada modelo — no requiere adaptadores no originales que comprometan la hermeticidad.',
    },
  ],
  linesIntro:
    'Lakeland ChemMax cubre el espectro completo Nivel A a C con una sola marca: ChemMax 4 para máxima protección, ChemMax 3 para operaciones prolongadas, AlphaTec para Nivel B industrial y Pyrolon CRFR para el doble riesgo químico-flama.',
  lineas: [
    {
      tipo: 'traje-nivel-a',
      badge: 'NFPA 1990 · Nivel A Encapsulado',
      familiaLabel: 'ChemMax 4 / ChemMax 3',
      flagship: 'lakeland-chemmax-4',
      desc: 'Trajes encapsulados Nivel A NFPA 1990 para atmósferas desconocidas o con riesgo de vapor y gas. ChemMax 4 para máxima cobertura documental (350+ sustancias), ChemMax 3 para operaciones de mayor duración con menor estrés térmico.',
      modelos: [
        { m: 'ChemMax 4',       d: '4 capas laminadas — 350+ sustancias documentadas · Nivel A NFPA 1990' },
        { m: 'ChemMax 3',       d: '3 capas optimizadas — menor peso · operaciones prolongadas · Nivel A NFPA 1990' },
      ],
    },
    {
      tipo: 'traje-nivel-b',
      badge: 'NFPA 1990 · Nivel B/C Salpicadura',
      familiaLabel: 'AlphaTec 5000 / Pyrolon CRFR',
      flagship: 'lakeland-alphatec-5000',
      desc: 'Trajes de cobertura para Nivel B y C. AlphaTec 5000 para salpicadura química industrial con ergonomía optimizada y Pyrolon CRFR para entornos con riesgo simultáneo de salpicadura química y fuego repentino.',
      modelos: [
        { m: 'AlphaTec 5000',   d: 'Microporous laminado · articulaciones preformadas · Nivel B NFPA 1990' },
        { m: 'Pyrolon CRFR',    d: 'FR + químico · NFPA 1990 + NFPA 2112 · Nivel B/C doble riesgo' },
      ],
    },
  ],
  comparativaLabel: 'Comparativa familia ChemMax / AlphaTec',
  comparativa: [
    { modelo: 'ChemMax 4',     norma: 'NFPA 1990 · EN 943-1', nivel_haz: 'Nivel A',          barrera: 'Laminado 4 capas',        ideal: 'Máxima cobertura documental · CBRN' },
    { modelo: 'ChemMax 3',     norma: 'NFPA 1990 · EN 943-1', nivel_haz: 'Nivel A ligero',    barrera: 'Laminado 3 capas opt.',   ideal: 'Operaciones prolongadas · climas cálidos' },
    { modelo: 'AlphaTec 5000', norma: 'NFPA 1990 · EN 14605', nivel_haz: 'Nivel B',           barrera: 'Microporous laminado',   ideal: 'Brigadas industriales · respuesta química' },
    { modelo: 'Pyrolon CRFR',  norma: 'NFPA 1990 · NFPA 2112', nivel_haz: 'Nivel B/C + FR',  barrera: 'Tejido FR laminado',     ideal: 'Refinería · petroquímica · doble riesgo' },
  ],
  faq: [
    {
      q: '¿ChemMax 4 o DuPont Tychem 10000 — cuál elegir?',
      a: 'Ambos son Nivel A NFPA 1990 técnicamente equivalentes con tablas de permeación verificadas. La diferencia está en la documentación: Tychem 10000 tiene 280+ sustancias; ChemMax 4 tiene 350+. Para brigadas con mayor variedad de agentes posibles, ChemMax 4 ofrece mayor cobertura documental. Para licitaciones que especifican DuPont por nombre, el Tychem 10000 es la opción directa. Te asesoramos según las sustancias específicas de tu operación.',
    },
    {
      q: '¿Qué ventaja tiene el ChemMax 3 frente al ChemMax 4?',
      a: 'El ChemMax 3 pesa menos que el ChemMax 4 — en un traje encapsulado con SCBA interno, el peso total puede superar los 15 kg. Menos peso significa menor estrés metabólico y mayor tiempo de trabajo dentro del traje antes de alcanzar el límite de temperatura corporal. Para operaciones HAZMAT en climas cálidos o de larga duración, el ChemMax 3 permite más tiempo de trabajo efectivo con protección Nivel A equivalente.',
    },
    {
      q: '¿Con qué SCBA es compatible el ChemMax 4?',
      a: 'El ChemMax 4 está probado y documentado como compatible con MSA G1, Dräger PSS 7000, 3M Scott Air-Pak NxG7, Honeywell Sperian y otros SCBA de 30 y 45 min. La compatibilidad implica que el puerto de entrada del SCBA puede acoplarse al traje de forma hermética sin adaptadores adicionales. Te facilitamos la ficha de compatibilidad específica para el SCBA de tu brigada.',
    },
  ],
  ctaWhatsapp: 'Hola, quiero información sobre trajes Lakeland ChemMax NFPA 1990 para mi brigada HAZMAT.',
  notaPie: NOTA_HAZMAT,
};

/* ════════════════════════════════════════════════════════════════════════════
   MSA SAFETY — Detección Multi-Gas HAZMAT
   ════════════════════════════════════════════════════════════════════════════ */
const msaDeteccion: EquipmentBrand = {
  categorySlug: 'hazmat',
  slug: 'msa-deteccion',
  brand: 'MSA Safety',
  brandLabel: 'MSA Safety',
  crossDesc: 'Detección Multi-Gas HAZMAT · Altair 5X · ATEX · Clase I Div 1',
  eyebrow: 'MSA Safety · Altair · Detección Multi-Gas HAZMAT · Distribuidor Autorizado MX',
  heroTitleTop: 'Monitores MSA Altair',
  heroTitleAccent: 'detección HAZMAT certificada.',
  heroLead:
    'Distribuidor autorizado de monitores multi-gas MSA Altair en México. Altair 5X (5 gases con bomba aspirada), Altair 4XR (4 gases resistente a golpes), Altair io360 (display 360° + Bluetooth) y estación GALAXY GX2 de calibración automática — todos certificados ATEX y Clase I División 1 para atmósferas potencialmente explosivas.',
  heroIntro: [
    'MSA Safety —NYSE: MSA— fabrica los monitores de gas portátiles más utilizados en respuesta HAZMAT, espacios confinados y plantas industriales de América Latina. La línea Altair combina sensores XCell de larga vida con alarmas de triple modo (audio 95 dB + vibración + LED estrobo) detectables con EPP completo — crítico en entornos HAZMAT donde el ruido ambiente puede superar los 90 dB.',
    'El reconocimiento de escena HAZMAT exige identificar el agente antes de seleccionar el nivel de protección. El Altair 5X con bomba aspirada permite muestrear el ambiente a distancia (hasta 27 m) sin exponer al técnico antes de caracterizar el evento — el protocolo correcto antes de seleccionar el traje y establecer las zonas de control.',
  ],
  heroBadges: [
    'ATEX',
    'Clase I División 1',
    'UL Listed',
    'O₂ · LEL · CO · H₂S',
    'Altair 5X Bomba Aspirada',
    'Altair 4XR',
    'Bluetooth GALAXY GX2',
    'Distribuidor Autorizado MX',
  ],
  seoTitle: 'Monitores Multi-Gas MSA Altair HAZMAT — ATEX · Cl I Div 1 · México',
  seoDescription:
    'Monitores multi-gas MSA Altair para HAZMAT y espacios confinados en México: Altair 5X (5 gases + bomba), Altair 4XR, Altair io360 (Bluetooth), GALAXY GX2 (calibración automática). ATEX · Clase I Div 1. Distribuidor autorizado.',
  founding: '1914',
  parentOrg: { name: 'MSA Safety Incorporated', ticker: 'NYSE:MSA' },
  stats: [
    { valor: 'ATEX', etiq: 'Certificado para atmósferas explosivas' },
    { valor: '5+', etiq: 'Gases detectables simultáneamente' },
    { valor: '27 m', etiq: 'Alcance bomba aspirada Altair 5X' },
    { valor: '4 años', etiq: 'Garantía sensores XCell sin calibración' },
  ],
  credenciales: [
    {
      n: '01',
      t: 'Altair 5X: reconocimiento de escena a distancia',
      d: 'El Altair 5X con bomba de aspiración permite muestrear el ambiente a hasta 27 m sin acercar al técnico a la zona de riesgo. El reconocimiento de escena sin exposición es el primer paso del protocolo de respuesta HAZMAT: caracterizar el agente antes de seleccionar el nivel de protección y establecer las zonas de control caliente, templado y frío.',
    },
    {
      n: '02',
      t: 'Sensores XCell: 4 años de garantía sin calibración de fábrica',
      d: 'Los sensores XCell de MSA tienen garantía de 4 años sin necesidad de calibración de fábrica —a diferencia de los sensores estándar que requieren reemplazo anual. El costo operativo por 4 años de un Altair con sensores XCell es significativamente menor que equipos comparables de otras marcas.',
    },
    {
      n: '03',
      t: 'ATEX / Clase I División 1: el único autorizado en atmósferas explosivas',
      d: 'Todos los Altair están certificados ATEX (Europa) y Clase I División 1 (OSHA / NOM) para uso en presencia de gases o vapores inflamables. Sin esta certificación, un monitor de gas no está autorizado para uso en zonas explosivas — una violación grave de las normas de seguridad industrial que puede invalidar seguros y responsabilidades legales.',
    },
    {
      n: '04',
      t: 'GALAXY GX2: trazabilidad de calibración automática',
      d: 'La estación GALAXY GX2 calibra y realiza prueba de choque automática sin intervención manual, registra resultados con fecha y alerta si un instrumento no supera la prueba. Para brigadas HAZMAT bajo auditoría OSHA, NOM-027-STPS o ISO 45001, la trazabilidad documental de calibración es un requisito explícito — no opcional.',
    },
  ],
  linesIntro:
    'MSA Altair cubre el espectro completo de detección HAZMAT: reconocimiento de escena con bomba aspirada (5X), monitoreo continuo resistente (4XR), coordinación táctica con Bluetooth (io360) e infraestructura de calibración automática (GALAXY GX2).',
  lineas: [
    {
      tipo: 'detector-multigases',
      badge: 'ATEX · Cl I Div 1 · Multi-Gas',
      familiaLabel: 'Altair 5X / 4XR / io360',
      flagship: 'msa-altair-5x',
      desc: 'Monitores portátiles para reconocimiento de escena, monitoreo continuo y coordinación táctica. Altair 5X con bomba aspirada para muestreo a distancia, 4XR para uso cotidiano robusto e io360 para transmisión en tiempo real al puesto de mando.',
      modelos: [
        { m: 'Altair 5X',   d: '5 gases + bomba aspirada 27 m · O₂ LEL CO H₂S + tóxico configurable · ATEX' },
        { m: 'Altair 4XR',  d: '4 gases · resistente a golpes · 24 h autonomía · ATEX Cl I Div 1' },
        { m: 'Altair io360', d: 'Display 360° · Bluetooth mando · 4 gases · ATEX' },
      ],
    },
    {
      tipo: 'kit-descon',
      badge: 'Infraestructura · Calibración',
      familiaLabel: 'GALAXY GX2',
      flagship: 'msa-galaxy-gx2',
      desc: 'Estación de calibración automática GALAXY GX2 para gestión de flota de instrumentos Altair. Calibración sin intervención manual, registro histórico y alerta automática ante fallo de sensor — la infraestructura que exigen las auditorías OSHA y NOM-027-STPS.',
      modelos: [
        { m: 'GALAXY GX2',  d: 'Calibración automática · registro histórico · alerta de fallo · OSHA/NOM compliant' },
      ],
    },
  ],
  comparativaLabel: 'Comparativa monitores MSA Altair',
  comparativa: [
    { modelo: 'Altair 5X',    norma: 'ATEX · Cl I Div 1 · UL', nivel_haz: 'Reconocimiento de escena', gases: 'O₂ LEL CO H₂S + configurable', ideal: 'Ingreso / muestreo a distancia' },
    { modelo: 'Altair 4XR',   norma: 'ATEX · Cl I Div 1 · UL', nivel_haz: 'Monitoreo continuo',       gases: 'O₂ LEL CO H₂S',                ideal: 'Uso cotidiano · espacios confinados' },
    { modelo: 'Altair io360', norma: 'ATEX · Cl I Div 1',       nivel_haz: 'Coordinación táctica',    gases: 'O₂ LEL CO H₂S + Bluetooth',    ideal: 'Mando · transmisión en tiempo real' },
    { modelo: 'GALAXY GX2',   norma: 'OSHA · NOM-027-STPS',     nivel_haz: 'Infraestructura',         gases: 'Calibración automática',        ideal: 'Brigadas con flota de instrumentos' },
  ],
  faq: [
    {
      q: '¿Por qué necesito un detector ATEX para HAZMAT?',
      a: 'ATEX (Europa) y Clase I División 1 (OSHA / NOM) certifican que el instrumento puede operar de forma segura en presencia de gases o vapores inflamables sin convertirse en fuente de ignición. En un reconocimiento de escena HAZMAT, el agente puede ser inflamable antes de identificarse — usar un detector no certificado para atmósferas explosivas viola la NOM-027-STPS y puede causar una ignición secundaria.',
    },
    {
      q: '¿Qué diferencia hay entre Altair 5X, 4XR e io360?',
      a: 'El Altair 5X tiene bomba de aspiración y detecta 5 gases — es el instrumento para reconocimiento de escena a distancia y cuando hay un agente tóxico específico además de O₂/LEL/CO/H₂S. El 4XR detecta 4 gases con la carcasa más resistente a golpes — el instrumento de uso cotidiano para entradas a espacios confinados. El io360 agrega display 360° y Bluetooth para transmisión en tiempo real al mando — la opción táctica para coordinación avanzada.',
    },
    {
      q: '¿Cada cuánto se calibra un MSA Altair?',
      a: 'La norma OSHA 1910.146 (entrada a espacios confinados) y la NOM-027-STPS exigen prueba de choque (bump test) antes de cada uso y calibración completa periódica según las instrucciones del fabricante — típicamente mensual con el gas patrón certificado. La estación GALAXY GX2 automatiza ambos procesos y genera el registro documental que exige la auditoría.',
    },
  ],
  ctaWhatsapp: 'Hola, quiero información sobre monitores multi-gas MSA Altair para mi brigada HAZMAT o espacio confinado.',
  notaPie: NOTA_HAZMAT,
};

/* ════════════════════════════════════════════════════════════════════════════
   KAPPLER — Trajes HAZMAT Zytron · Frontline · Responder CST
   ════════════════════════════════════════════════════════════════════════════ */
const kapplerHazmat: EquipmentBrand = {
  categorySlug: 'hazmat',
  slug: 'kappler',
  brand: 'Kappler',
  brandLabel: 'Kappler Zytron',
  crossDesc: 'Trajes HAZMAT Nivel A/B/C · Zytron 500 CBRN · Frontline FR · Kits completos Nivel B',
  eyebrow: 'Kappler Inc. · NFPA 1990 · CBRN-C · Distribuidor Autorizado MX',
  heroTitleTop: 'Kappler Zytron',
  heroTitleAccent: 'CBRN y NFPA 1990.',
  heroLead: 'La gama completa de trajes HAZMAT Kappler para brigadas que operan en múltiples niveles de riesgo: Zytron 500 XP encapsulado Nivel A con certificación CBRN, Zytron 300 Nivel B para zona cálida de larga duración, Frontline 500 FR con doble certificación química y llama, kits completos Nivel B y trajes Nivel D para consumo masivo.',
  heroIntro: [
    'Kappler produce trajes HAZMAT para respuesta a materiales peligrosos, defensa civil y operaciones industriales. La línea Zytron cubre el espectro completo: el Zytron 500 XP es el traje encapsulado de mayor protección de la marca, con doble certificación NFPA 1990 y CBRN-C para agentes de guerra química. El Zytron 300 es el traje no encapsulado de Nivel B para zona cálida de larga duración. El Zytron 100 es la opción económica para brigadas de apoyo y Nivel D.',
    'En México, Kappler es una alternativa certificada a DuPont Tychem que permite cumplir requisitos de licitaciones con dos fabricantes distintos — ambos certificados NFPA 1990. El Frontline 500 FR es el único traje del mercado con doble certificación NFPA 1990 y NFPA 2112, relevante para operaciones en instalaciones con riesgo combinado químico y eléctrico.',
  ],
  heroBadges: ['NFPA 1990', 'NFPA 1990', 'NFPA 2112', 'CBRN-C', 'Nivel A · B · C · D', 'Kits completos', 'Alternativa certificada licitación'],
  seoTitle: 'Trajes HAZMAT Kappler Zytron — Nivel A/B/C NFPA 1990 CBRN · México',
  seoDescription: 'Distribuidor de trajes HAZMAT Kappler en México: Zytron 500 XP (Nivel A CBRN), Zytron 300 (Nivel B) y Frontline 500 FR (salpicadura), bajo NFPA 1990 y NFPA 2112 y kits completos. Alternativa certificada DuPont para licitaciones.',
  stats: [
    { valor: '370+', etiq: 'Sustancias con tabla de permeación Zytron' },
    { valor: 'CBRN-C', etiq: 'Certificación agentes de guerra química' },
    { valor: 'NFPA 2112', etiq: 'FR — único Nivel C con doble cert.' },
    { valor: 'Kit', etiq: 'Completo Nivel B listo para despliegue' },
  ],
  credenciales: [
    {
      n: '01',
      t: 'Zytron 500 XP — Nivel A NFPA 1990 + CBRN-C simultáneos',
      d: 'La certificación CBRN-C incluye pruebas de permeación con agentes de guerra química: gas mostaza (HD), VX, sarin (GB) y otros. La mayoría de los trajes NFPA 1990 no tienen CBRN-C. El Zytron 500 XP es uno de los pocos que combina ambas certificaciones, lo que lo hace el traje de referencia para brigadas de defensa civil y contratos de protección civil con requisito CBRN.',
    },
    {
      n: '02',
      t: 'Tablas de permeación verificadas por sustancia',
      d: 'Kappler publica tablas de permeación para el tiempo de ruptura (breakthrough time) y la tasa de permeación para más de 370 sustancias en la gama Zytron. Sin tabla de permeación verificada, no es posible confirmar que un traje determinado es adecuado para una sustancia específica — solo la certificación de nivel no es suficiente para selección técnica.',
    },
    {
      n: '03',
      t: 'Frontline 500 — única doble certificación NFPA 1990 + NFPA 2112',
      d: 'El Frontline 500 FR es el único traje de Nivel C del mercado con certificación simultánea NFPA 1990 (protección química) y NFPA 2112 (resistencia a la llama industrial). Esto lo hace obligatorio en instalaciones donde el riesgo combinado químico y de llama flash es real: refinerías, petroquímicas y plantas de manufactura con disolventes inflamables.',
    },
    {
      n: '04',
      t: 'Alternativa calificada para licitaciones con dos fabricantes',
      d: 'Las licitaciones de Pemex, CFE y Protección Civil frecuentemente exigen que la especificación técnica permita dos fabricantes distintos certificados NFPA para garantizar competencia. Kappler Zytron 500 XP es la alternativa calificada al DuPont Tychem 10000 que permite estructurar la licitación con dos opciones verificadas — diferenciadas en precio sin diferencia en certificación.',
    },
  ],
  linesIntro: 'La gama Kappler se estructura por nivel de protección EPA y tipo de operación. Tres líneas principales: Zytron para protección química máxima, Frontline para riesgo combinado FR+químico, y los kits completos de despliegue para brigadas que necesitan equipo listo sin armar piezas de distintos proveedores.',
  lineas: [
    {
      tipo: 'traje-nivel-a',
      badge: 'NFPA 1990 · CBRN-C',
      titulo: 'Zytron 500 XP — Nivel A encapsulado CBRN',
      modelos: 'Zytron 500 XP · Responder CST',
      desc: 'Nivel A encapsulado con la mayor protección química de Kappler. El Zytron 500 XP agrega la certificación CBRN-C sobre la base NFPA 1990. El Responder CST es el encapsulado de Nivel B para primera respuesta rápida sin encapsulamiento total del SCBA.',
      tech: 'Costuras termoselladas 4 capas · >370 sustancias · SCBA ext./int.',
    },
    {
      tipo: 'traje-nivel-b',
      badge: 'NFPA 1990',
      titulo: 'Zytron 300 — Nivel B zona cálida',
      modelos: 'Zytron 300 · SUIT-PACK Kit completo',
      desc: 'Traje no encapsulado de Nivel B para operaciones de larga duración en zona cálida. Menor carga térmica que el encapsulado de Nivel A. Disponible como kit completo SUIT-PACK con guantes, botas y cinta de sellado.',
      tech: 'Zytron 300 tres capas · capucha integrada · kit listo para despliegue',
    },
    {
      tipo: 'traje-nivel-b',
      badge: 'NFPA 1990 · NFPA 2112',
      titulo: 'Frontline 500 — Nivel C FR doble certificación',
      modelos: 'Frontline 500 FR',
      desc: 'El único traje de Nivel C con doble certificación química y resistencia a la llama. Para instalaciones con riesgo combinado: salpicaduras químicas + llama flash + arco eléctrico. Compatible con PAPR.',
      tech: 'FR laminada · 8 cal/cm² arco · PAPR compatible · costuras selladas',
    },
    {
      tipo: 'traje-nivel-b',
      badge: 'NFPA 1950',
      titulo: 'Zytron 100 — Nivel D desechable',
      modelos: 'Zytron 100 · MicroMax alternativo',
      desc: 'Traje de cobertura total desechable para Nivel D. Mayor resistencia a la abrasión que los trajes SMS de marca blanca. Para muestreo, post-emergencia y brigadas de apoyo donde el costo por traje es el factor determinante.',
      tech: 'Zytron 100 polipropileno laminado · desechable · XS a 5XL',
    },
  ],
  flagship: 'kappler-zytron-500-nivel-a',
  anatomiaIntro: 'El Kappler Zytron 500 XP es el traje de referencia de la marca — la única unidad con doble certificación NFPA 1990 y CBRN-C. Cada componente del traje tiene una función específica que determina si el sistema completo pasa o falla las pruebas de certificación.',
  anatomia: [
    { t: 'Tela Zytron 500 — barrera multicapa laminada', d: 'La tela es el elemento certificado, no el traje completo. La certificación NFPA 1990 y CBRN-C aplica a la combinación específica de tela + costuras + cierres del traje. Cambiar cualquier componente puede invalidar la certificación — los repuestos deben ser partes originales Kappler.' },
    { t: 'Costuras termoselladas de cuatro capas', d: 'Las costuras son el punto más vulnerable de cualquier traje de protección química. Una costura sin sellar permite la penetración de vapores aunque la tela sea impermeable. Las cuatro capas del sellado Kappler (hilo + dos capas de cinta + adhesivo) son el estándar de la industria para NFPA 1990.' },
    { t: 'Cierre de cremallera hermético con guardapolvo', d: 'El cierre frontal es el componente que más frecuentemente falla en las pruebas NFPA 1990. Kappler usa una cremallera de dientes de plástico (no metálica) con guardapolvo interno — el metal puede crear microfisuras que permiten la permeación de vapores en los ciclos de prueba.' },
    { t: 'Visor de policarbonato panorámico', d: 'El visor es un componente de sacrificio — no tiene la misma resistencia química que la tela Zytron 500. Para operaciones con solventes que atacan el policarbonato (acetona, tolueno), Kappler ofrece visor alternativo en polimetilpenteno (TPX) con mayor resistencia química.' },
    { t: 'Soporte externo de SCBA', d: 'El Zytron 500 XP usa soporte externo de SCBA — el equipo de respiración va fuera del traje. Esto simplifica el vestido y el ajuste del traje, pero requiere que las interfaces de brazos y cintura sellen correctamente sobre el arnés del SCBA durante toda la operación.' },
    { t: 'Prueba de campo con detector de partículas', d: 'Antes de cualquier operación con Nivel A, la brigada debe realizar una prueba de integridad del traje con aerosol de dioctilsebacato (DEHS) o nebulizador Fit-Test. Un traje NFPA 1990 que no pasa la prueba de campo no debe usarse — la certificación de fábrica no sustituye la verificación de integridad antes del incidente.' },
  ],
  comparativa: [
    { modelo: 'Zytron 500 XP Nivel A CBRN', tipo: 'traje-nivel-a', rec: true, norma: 'NFPA 1990 · CBRN-C', nivel_haz: 'Nivel A encapsulado', barrera: 'Zytron 500 multicapa', gases: '370+ sus. · agentes guerra', ideal: 'Brigadas HAZMAT Nivel 1 · CBRN' },
    { modelo: 'Responder CST Nivel B Encapsulado', tipo: 'traje-nivel-b', norma: 'NFPA 1990', nivel_haz: 'Nivel B encapsulado', barrera: 'CST multicapa', gases: 'Vapores · cloro · gases ácidos', ideal: 'Primera respuesta HAZMAT' },
    { modelo: 'Zytron 300 Nivel B', tipo: 'traje-nivel-b', norma: 'NFPA 1990', nivel_haz: 'Nivel B no encapsulado', barrera: 'Zytron 300 tres capas', gases: 'Vapores · ácidos · solventes', ideal: 'Zona cálida · larga duración' },
    { modelo: 'SUIT-PACK Kit Nivel B', tipo: 'traje-nivel-b', norma: 'NFPA 1990', nivel_haz: 'Nivel B kit completo', barrera: 'Zytron 300 + butilo + PVC', gases: 'Configuración completa', ideal: 'Brigadas sin equipo previo' },
    { modelo: 'Frontline 500 FR Nivel C', tipo: 'traje-nivel-b', norma: 'NFPA 1990 · NFPA 2112', nivel_haz: 'Nivel C FR doble cert.', barrera: 'Frontline FR laminada', gases: 'Salpicaduras · llama flash', ideal: 'Refinería · petroquímica · arco' },
    { modelo: 'Zytron 100 Nivel D', tipo: 'traje-nivel-b', norma: 'NFPA 1950', nivel_haz: 'Nivel D desechable', barrera: 'Zytron 100 polipropileno', gases: 'Partículas · polvos', ideal: 'Apoyo · post-emergencia' },
  ],
  comparativaLabel: 'Kappler — gama completa Nivel A · B · C · D',
  comparativaNote: '★ Recomendado = Zytron 500 XP con CBRN-C, el traje de mayor nivel de protección de la marca.',
  guia: [
    { n: '01', t: 'Nivel A (NFPA 1990): cuando el agente es desconocido o cuando la concentración del vapor supera el TLV — cualquier duda sobre el agente → Nivel A, nunca Nivel B.' },
    { n: '02', t: 'Nivel B (NFPA 1990): cuando el agente es conocido y el vapor no es el vector principal — zona cálida con salpicaduras pero sin saturación de vapor que requiera encapsulamiento.' },
    { n: '03', t: 'Nivel C: solo cuando el agente, la concentración y las condiciones atmosféricas están completamente caracterizadas y el respirador de purificación de aire es adecuado — nunca como primera respuesta.' },
    { n: '04', t: 'Verifica las tablas de permeación de Kappler para el agente específico antes de seleccionar el nivel — la certificación NFPA no garantiza resistencia a toda sustancia, solo a las de las pruebas de certificación.' },
  ],
  segmentosIntro: 'Los trajes Kappler cubren cuatro segmentos según el tipo de operación y el perfil de riesgo de la instalación.',
  segmentos: [
    { num: '01', tipo: 'traje-nivel-a', titulo: 'Brigadas HAZMAT municipales y Protección Civil', desc: 'El Zytron 500 XP con CBRN-C es el traje requerido por los contratos de protección civil que incluyen respuesta a incidentes con agentes de guerra química. Compatible con la dotación NFPA 1990 que exige la Ley de Protección Civil.', modelos: 'Zytron 500 XP · Responder CST' },
    { num: '02', tipo: 'traje-nivel-b', titulo: 'Refinería y petroquímica', desc: 'El Frontline 500 FR es la opción para instalaciones con riesgo combinado: salpicaduras de hidrocarburos o ácidos + llama flash + arco eléctrico. Pemex y los parques petroquímicos que exigen NFPA 2112 en toda la ropa de trabajo industrial lo adoptan para la brigada HAZMAT.', modelos: 'Frontline 500 FR · Zytron 300 Nivel B' },
    { num: '03', tipo: 'traje-nivel-b', titulo: 'Industria química y plantas de proceso', desc: 'El Zytron 300 de Nivel B es el traje de brigada para plantas con ácidos concentrados, álcalis o solventes clorados donde el riesgo es salpicadura en zona cálida sin saturación de vapor. El kit SUIT-PACK permite dotar a la brigada completa con equipo compatible y trazable.', modelos: 'Zytron 300 · SUIT-PACK Kit · Zytron 100' },
    { num: '04', tipo: 'traje-nivel-b', titulo: 'Licitaciones con requisito de doble fabricante', desc: 'Pemex, CFE y las secretarías de Protección Civil frecuentemente requieren que la especificación acepte mínimo dos fabricantes certificados NFPA 1990. Kappler Zytron 500 XP es la alternativa calificada al DuPont Tychem 10000 — misma certificación, diferente precio, diferente proveedor.', modelos: 'Zytron 500 XP (alternativa a Tychem 10000)' },
  ],
  faqs: [
    { q: '¿En qué se diferencia el Kappler Zytron 500 XP del DuPont Tychem 10000?', a: 'Ambos son trajes encapsulados de Nivel A certificados NFPA 1990. Las diferencias clave son: (1) el Zytron 500 XP tiene soporte externo de SCBA estándar (el Tychem 10000 usa soporte interno), lo que cambia el procedimiento de vestido; (2) los materiales de tela son distintos — Zytron 500 vs Tychem 10000 — con tablas de permeación diferentes para algunas sustancias; (3) el precio por traje del Kappler es generalmente menor. Para licitaciones con dos fabricantes certificados, son las dos opciones estándar del mercado mexicano.' },
    { q: '¿Qué significa la certificación CBRN-C y cuándo es obligatoria?', a: 'CBRN-C (Chemical, Biological, Radiological, Nuclear — Chemical focus) es una certificación adicional a NFPA 1990 que incluye pruebas de permeación con agentes de guerra química (mostaza HD, VX, sarin GB, lewisite). No todos los trajes NFPA 1990 tienen CBRN-C — es una certificación adicional que el fabricante obtiene voluntariamente. Es obligatoria en contratos de defensa, brigadas de respuesta CBRN del ejército y algunos contratos de protección civil. Para incidentes de materiales peligrosos civiles, la NFPA 1990 sin CBRN es generalmente suficiente.' },
    { q: '¿Cómo verifico la integridad de un traje Kappler antes de usarlo?', a: 'La NFPA 1990 exige una prueba de integridad del traje antes de cada uso. El método estándar es la prueba de presión de aire (inflation test): se infla el traje con aire limpio y se verifica que no hay caída de presión en 60 segundos. Alternativamente, se puede usar un aerosol DEHS (dioctilsebacato) o humo de prueba — cualquier pérdida detectada con detector de partículas indica una falla de sellado. Un traje que falla la prueba de integridad no debe usarse en zona caliente aunque tenga certificación NFPA 1990 vigente.' },
    { q: '¿Cuántas veces puede usarse un traje Kappler Zytron antes de descartarlo?', a: 'Los trajes Kappler no tienen un número fijo de usos — su vida útil depende del tipo de agente con que tuvo contacto, la limpieza y descontaminación post-uso, y el resultado de las inspecciones visuales y pruebas de integridad. Kappler recomienda: inspección visual después de cada uso, prueba de integridad antes de cada uso, y desecho inmediato si hay desgarro, costuras separadas, visor rayado o cambio de color de la tela. Para los trajes con exposición a agentes de guerra química, el protocolo es descarte inmediato después de una sola exposición real.' },
  ],
  ctaKicker: 'NFPA 1990 · CBRN-C · Alternativa certificada para licitaciones',
  ctaTitleHtml: 'Kappler Zytron: protección HAZMAT<br/>certificada para cada nivel de riesgo.',
  waQuote: 'Hola, quiero información sobre trajes HAZMAT Kappler Zytron para mi brigada — operamos en Nivel B y ocasionalmente Nivel A.',
  notaPie: '* La selección del nivel de protección EPA (A/B/C/D) debe basarse en la identificación del agente, las tablas de permeación del fabricante y el plan de respuesta de la brigada. La certificación NFPA no garantiza protección ante toda sustancia — siempre verificar la tabla de permeación específica.',
};

export const hazmatBrandList: EquipmentBrand[] = [dupontTychem, lakelandChemMax, msaDeteccion, kapplerHazmat];
