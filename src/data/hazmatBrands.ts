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
  crossDesc: 'Trajes HAZMAT Nivel A y B · NFPA 1990 · Tablas de permeación',
  eyebrow: 'DuPont Safety Products · Tychem · Distribuidor Autorizado MX',
  heroTitleTop: 'Trajes DuPont Tychem',
  heroTitleAccent: 'barrera química NFPA 1990.',
  heroLead:
    'Distribuidor autorizado de trajes HAZMAT DuPont Tychem en México. Tychem 10000 (Nivel A encapsulado), Tychem 6000 FR (Nivel B), Tychem 4000S (salpicaduras) y Tychem 2000 (salpicadura ligera) — cada selección requiere tabla de permeación por agente específico.',
  heroIntro: [
    'DuPont Safety Products ofrece barreras químicas para respuesta a materiales peligrosos. La línea Tychem incluye el Tychem 10000 TK612T/TK613T, encapsulado Nivel A con NFPA 1990 (1994 Clase 2), y opciones de cobertura para salpicaduras y partículas cuya compatibilidad debe verificarse por agente.',
    'En México, la selección correcta del traje HAZMAT exige tablas de permeación verificadas por agente y concentración — no solo la certificación de nivel. DuPont publica tablas de permeación por sustancia para la gama Tychem, y te asesoramos en la selección específica según las sustancias de tu operación: refinería, petroquímica, transporte de químicos, planta de tratamiento o respuesta municipal.',
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
    'Trajes HAZMAT DuPont Tychem en México: Tychem 10000 TK612T/TK613T (Nivel A, NFPA 1990 1994 Clase 2), Tychem 6000 FR TP198T/TP199T (Nivel B, NFPA 1990 1992), Tychem 4000S y Tychem 2000. Tablas de permeación · asesoría por agente. Distribuidor autorizado.',
  founding: '1802',
  parentOrg: { name: 'DuPont de Nemours Inc.', ticker: 'NYSE:DD' },
  stats: [
    { valor: 'NFPA 1990', etiq: 'Tychem 10000 TK612T/TK613T' },
    { valor: '280+', etiq: 'Sustancias con tabla de permeación' },
    { valor: 'CE III', etiq: 'Categoría de riesgo III (Europa)' },
    { valor: '32', etiq: 'Estados con cobertura en México' },
  ],
  credenciales: [
    {
      n: '01',
      t: 'Tychem 10000: la mayor resistencia química disponible',
      d: 'Los Tychem 10000 TK612T y TK613T son trajes encapsulados Nivel A con NFPA 1990 (1994 Clase 2). La selección para atmósferas desconocidas o exposiciones a vapor y gas debe confirmarse con la tabla de permeación del modelo y el agente.',
    },
    {
      n: '02',
      t: 'Tablas de permeación verificadas por agente y concentración',
      d: 'DuPont publica tablas de permeación por sustancia para la gama Tychem, con tiempo de ruptura (breakthrough time) y tasa de permeación por nivel de concentración. Es la documentación que exigen los planes de respuesta HAZMAT certificados, las brigadas industriales auditadas y los contratos con aseguradoras internacionales.',
    },
    {
      n: '03',
      t: 'Tychem 6000 FR: protección para salpicaduras',
      d: 'Los Tychem 6000 FR TP198T y TP199T cuentan con NFPA 1990 (1992). Verifica siempre el número de modelo antes de seleccionar.',
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
      familiaLabel: 'Tychem 10000 / 6000 FR',
      flagship: 'dupont-tychem-10000',
      desc: 'Tychem 10000 TK612T/TK613T es un traje encapsulado Nivel A con NFPA 1990 (1994 Clase 2). Tychem 6000 FR TP198T/TP199T es una opción Nivel B con NFPA 1990 (1992).',
      modelos: [
        { m: 'Tychem 10000',   d: 'TK612T/TK613T — encapsulado · NFPA 1990 (1994 Clase 2) · Nivel A' },
        { m: 'Tychem 6000 FR', d: 'TP198T/TP199T — NFPA 1990 (1992) · Nivel B' },
      ],
    },
    {
      tipo: 'traje-nivel-b',
      badge: 'Salpicaduras · Selección por agente',
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
    { modelo: 'Tychem 10000 TK612T/TK613T', norma: 'NFPA 1990 (1994 Clase 2)', nivel_haz: 'Nivel A', barrera: '—', ideal: 'Atmósferas desconocidas · CBRN' },
    { modelo: 'Tychem 6000 FR TP198T/TP199T', norma: 'NFPA 1990 (1992)', nivel_haz: 'Nivel B', barrera: '—', ideal: 'Salpicaduras químicas' },
    { modelo: 'Tychem 4000S', norma: '—', nivel_haz: 'Según evaluación', barrera: '—', ideal: 'Salpicaduras industriales' },
    { modelo: 'Tychem 2000', norma: '—', nivel_haz: 'Según evaluación', barrera: '—', ideal: 'Partículas y salpicadura ligera' },
  ],
  faq: [
    {
      q: '¿Cuándo usar Tychem 10000 vs Tychem 4000S?',
      a: 'El Tychem 10000 (Nivel A) se usa cuando el agente y la concentración son desconocidos, cuando hay riesgo de exposición a vapor o gas, o cuando el plan de respuesta exige máxima protección antes de identificar el agente. El Tychem 4000S (Nivel B/C) aplica cuando el agente es conocido, su ruta de exposición es por salpicadura de líquido (no vapor), y la tabla de permeación confirma resistencia adecuada.',
    },
    {
      q: '¿Qué son las tablas de permeación y por qué son críticas?',
      a: 'Las tablas de permeación documentan cuánto tiempo tarda un agente químico en atravesar el material del traje (breakthrough time) y a qué tasa lo hace. Sin verificar la tabla para el agente específico, un traje "Nivel A" puede fallar en minutos ante ciertos solventes clorados o ácidos concentrados que atraviesan materiales no compatibles. DuPont publica tablas de permeación por sustancia para la gama Tychem; te facilitamos la ficha del agente específico de tu operación.',
    },
    {
      q: '¿Qué protección ofrece Tychem 6000 FR?',
      a: 'Los Tychem 6000 FR TP198T y TP199T cuentan con NFPA 1990 (1992). Consulta la ficha del modelo y el análisis de riesgos antes de usarlo en una operación con exposición química o eléctrica.',
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
  crossDesc: 'Trajes HAZMAT Nivel A y B · ChemMax · Pyrolon CRFR',
  eyebrow: 'Lakeland Industries · ChemMax · Distribuidor Autorizado MX',
  heroTitleTop: 'Trajes Lakeland ChemMax',
  heroTitleAccent: 'protección química por modelo.',
  heroLead:
    'Distribuidor autorizado de trajes HAZMAT Lakeland Industries en México. ChemMax 4 Plus y ChemMax 3 para Nivel B, Interceptor Plus encapsulado Nivel A conforme a EN 943 tipo 1a, MicroMax NS y Pyrolon CRFR para necesidades específicas de protección química.',
  heroIntro: [
    'Lakeland Industries ofrece un portafolio de EPP de protección química. ChemMax 4 Plus y ChemMax 3 se usan para Nivel B; la selección debe confirmar compatibilidad por sustancia, concentración y ruta de exposición.',
    'Interceptor Plus es un traje encapsulado Nivel A conforme a EN 943 tipo 1a. Pyrolon CRFR aporta resistencia secundaria a la flama sobre ropa FR primaria y cumple los requisitos de NFPA 2113, norma de selección.',
  ],
  heroBadges: [
    'EN 943-1 Tipo 1',
    'Interceptor Plus Nivel A',
    'ChemMax 4 Plus Nivel B',
    'ChemMax 3 Nivel B',
    'Pyrolon CRFR',
    'Lakeland Industries',
    'Distribuidor Autorizado MX',
  ],
  seoTitle: 'Trajes Lakeland ChemMax HAZMAT — Nivel A · B · México',
  seoDescription:
    'Trajes HAZMAT Lakeland ChemMax en México: ChemMax 4 Plus y ChemMax 3 para Nivel B, Interceptor Plus encapsulado Nivel A conforme a EN 943 tipo 1a y Pyrolon CRFR con resistencia secundaria a la flama. Distribuidor autorizado.',
  founding: '1982',
  parentOrg: { name: 'Lakeland Industries Inc.', ticker: 'NASDAQ:LAKE' },
  stats: [
    { valor: 'EN 943', etiq: 'Interceptor Plus Tipo 1a' },
    { valor: 'Nivel B', etiq: 'ChemMax 4 Plus · ChemMax 3' },
    { valor: 'NFPA 2113', etiq: 'Pyrolon CRFR: requisitos de selección' },
    { valor: '32', etiq: 'Estados con cobertura en México' },
  ],
  credenciales: [
    {
      n: '01',
      t: 'ChemMax 4 Plus: selección por agente',
      d: 'ChemMax 4 Plus es una opción de Nivel B. Antes de usarlo, confirma la tabla de permeación y la compatibilidad con el agente, la concentración y la ruta de exposición.',
    },
    {
      n: '02',
      t: 'ChemMax 3: protección Nivel B',
      d: 'ChemMax 3 es una opción de Nivel B. La evaluación de riesgos y la tabla de permeación del fabricante determinan si corresponde a la sustancia y a la operación.',
    },
    {
      n: '03',
      t: 'Pyrolon CRFR: resistencia secundaria a la flama',
      d: 'Pyrolon CRFR está diseñado para aportar resistencia secundaria a la flama sobre ropa FR primaria y cumple los requisitos de NFPA 2113, norma de selección. Verifica la ficha técnica para el riesgo químico de la operación.',
    },
    {
      n: '04',
      t: 'Compatible con todos los SCBA certificados',
      d: 'Para la compatibilidad con SCBA, consulta la ficha técnica del modelo de traje y del equipo respiratorio. El 3M Scott Air-Pak X3 Pro está certificado NFPA 1970 (2025) por SEI con aprobación NIOSH.',
    },
  ],
  linesIntro:
    'Lakeland ofrece opciones para distintos escenarios: Interceptor Plus encapsulado Nivel A conforme a EN 943 tipo 1a; ChemMax 4 Plus y ChemMax 3 para Nivel B; y Pyrolon CRFR como capa con resistencia secundaria a la flama.',
  lineas: [
    {
      tipo: 'traje-nivel-a',
      badge: 'Nivel B · Selección por agente',
      familiaLabel: 'ChemMax 4 Plus / ChemMax 3',
      flagship: 'lakeland-chemmax-4',
      desc: 'ChemMax 4 Plus y ChemMax 3 son opciones de Nivel B. La tabla de permeación y la evaluación de la exposición determinan su selección.',
      modelos: [
        { m: 'ChemMax 4 Plus',  d: 'Nivel B · tabla de permeación por agente' },
        { m: 'ChemMax 3',       d: 'Nivel B · tabla de permeación por agente' },
      ],
    },
    {
      tipo: 'traje-nivel-b',
      badge: 'EN 943 Tipo 1a · Nivel A',
      familiaLabel: 'Interceptor Plus / Pyrolon CRFR',
      flagship: 'lakeland-pyrolon-crfr',
      desc: 'Interceptor Plus es un traje encapsulado Nivel A conforme a EN 943 tipo 1a. Pyrolon CRFR aporta resistencia secundaria a la flama sobre ropa FR primaria; selecciona ambos con la documentación del fabricante.',
      modelos: [
        { m: 'Interceptor Plus', d: 'Encapsulado Nivel A · EN 943 tipo 1a' },
        { m: 'Pyrolon CRFR',    d: 'Resistencia secundaria a la flama · requisitos NFPA 2113' },
      ],
    },
  ],
  comparativaLabel: 'Comparativa familia ChemMax / Lakeland',
  comparativa: [
    { modelo: 'ChemMax 4 Plus', norma: '—', nivel_haz: 'Nivel B', barrera: '—', ideal: 'Selección por agente' },
    { modelo: 'ChemMax 3', norma: '—', nivel_haz: 'Nivel B', barrera: '—', ideal: 'Selección por agente' },
    { modelo: 'Interceptor Plus', norma: 'EN 943 tipo 1a', nivel_haz: 'Nivel A encapsulado', barrera: '—', ideal: 'Vapor y gas según evaluación' },
    { modelo: 'Pyrolon CRFR', norma: 'NFPA 2113 (selección)', nivel_haz: 'Capa secundaria FR', barrera: '—', ideal: 'Sobre ropa FR primaria' },
  ],
  faq: [
    {
      q: '¿ChemMax 4 o DuPont Tychem 10000 — cuál elegir?',
      a: 'Tychem 10000 TK612T/TK613T cuenta con NFPA 1990 (1994 Clase 2). ChemMax 4 Plus es una opción de Nivel B. No son equivalentes: selecciona el modelo según la sustancia, la ruta de exposición, la tabla de permeación y el nivel de protección requerido.',
    },
    {
      q: '¿Qué ventaja tiene el ChemMax 3 frente al ChemMax 4?',
      a: 'ChemMax 3 y ChemMax 4 Plus son opciones de Nivel B. Compara las fichas técnicas y las tablas de permeación del agente específico antes de decidir entre ambos.',
    },
    {
      q: '¿Con qué SCBA es compatible el ChemMax 4?',
      a: 'La compatibilidad entre un traje encapsulado y un SCBA debe verificarse en las fichas técnicas de ambos modelos. El 3M Scott Air-Pak X3 Pro está certificado NFPA 1970 (2025) por SEI con aprobación NIOSH.',
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
  productSlugs: ['msa-altair-4xr', 'msa-altair-2x-detector-monogas', 'msa-altair-5x', 'msa-altair-io-360', 'msa-galaxy-gx2'],
  crossDesc: 'Detección de gas HAZMAT · ALTAIR 4XR y 2X',
  eyebrow: 'MSA Safety · Altair · Detección Multi-Gas HAZMAT · Distribuidor Autorizado MX',
  heroTitleTop: 'Monitores MSA Altair',
  heroTitleAccent: 'detección HAZMAT certificada.',
  heroLead:
    'Distribuidor autorizado de detectores de gas MSA ALTAIR en México. ALTAIR 4XR para detección multigás y ALTAIR 2X para detección monogás: selecciona sensores y configuración conforme al gas y al análisis de riesgos de tu operación.',
  heroIntro: [
    'MSA Safety fabrica detectores portátiles para respuesta HAZMAT, espacios confinados y plantas industriales. ALTAIR 4XR mide gases combustibles, oxígeno y pares tóxicos según la configuración; ALTAIR 2X está disponible para detección monogás o combinaciones específicas.',
    'El reconocimiento de escena HAZMAT exige caracterizar el peligro antes de seleccionar el nivel de protección. Usa el detector configurado para los gases esperados y sigue el procedimiento de medición, prueba funcional y calibración indicado por el fabricante.',
  ],
  heroBadges: [
    'ATEX',
    'ALTAIR 4XR multigás',
    'ALTAIR 2X monogás',
    'Configuración por gas',
    'Prueba funcional y calibración',
    'Distribuidor Autorizado MX',
  ],
  seoTitle: 'Detectores de gas MSA ALTAIR HAZMAT — 4XR y 2X · México',
  seoDescription:
    'Detectores de gas MSA ALTAIR para HAZMAT y espacios confinados en México: ALTAIR 4XR multigás y ALTAIR 2X monogás. Selección de sensores, prueba funcional y calibración. Distribuidor autorizado.',
  founding: '1914',
  parentOrg: { name: 'MSA Safety Incorporated', ticker: 'NYSE:MSA' },
  stats: [
    { valor: 'ALTAIR 4XR', etiq: 'Detector multigás' },
    { valor: 'ALTAIR 2X', etiq: 'Detector monogás' },
    { valor: 'LEL · O₂', etiq: 'Variables según configuración' },
    { valor: '—', etiq: 'Verificar certificación por modelo' },
  ],
  credenciales: [
    {
      n: '01',
      t: 'ALTAIR 4XR: detección multigás',
      d: 'ALTAIR 4XR es un detector multigás para combustibles (LEL), oxígeno y pares tóxicos según la configuración. La caracterización del peligro debe realizarse antes de seleccionar el nivel de protección.',
    },
    {
      n: '02',
      t: 'ALTAIR 2X: detección monogás',
      d: 'ALTAIR 2X es un detector monogás que se configura con el sensor del gas de interés. Selecciona el sensor de acuerdo con el riesgo identificado.',
    },
    {
      n: '03',
      t: 'Certificación y configuración por modelo',
      d: 'Confirma la certificación aplicable, los sensores instalados y los límites de alarma en la ficha del ALTAIR seleccionado antes de entrar a una zona de riesgo.',
    },
    {
      n: '04',
      t: 'Prueba funcional y calibración',
      d: 'Realiza la prueba funcional, la calibración con gas patrón y el mantenimiento conforme al manual del fabricante. Sin esa verificación, el detector puede no alertar de forma oportuna.',
    },
  ],
  linesIntro:
    'MSA ALTAIR ofrece detección portátil para HAZMAT: ALTAIR 4XR para gases múltiples y ALTAIR 2X para un gas o configuraciones específicas.',
  lineas: [
    {
      tipo: 'detector-multigases',
      badge: 'Detección portátil',
      familiaLabel: 'ALTAIR 4XR / ALTAIR 2X',
      flagship: 'msa-altair-4xr',
      desc: 'Detectores portátiles para monitoreo de atmósferas. ALTAIR 4XR mide varios gases según configuración; ALTAIR 2X se selecciona para el gas o par de gases de la operación.',
      modelos: [
        { m: 'ALTAIR 4XR', d: 'Multigás: LEL, O₂ y pares tóxicos según configuración' },
        { m: 'ALTAIR 2X', d: 'Monogás: sensor según el gas de interés' },
      ],
    },
    {
      tipo: 'kit-descon',
      badge: 'Mantenimiento · Calibración',
      familiaLabel: 'Prueba funcional y calibración',
      flagship: 'msa-altair-2x-detector-monogas',
      desc: 'Mantén los detectores con prueba funcional y calibración de acuerdo con el manual del fabricante, usando gas patrón cuando corresponda.',
      modelos: [
        { m: 'ALTAIR 2X', d: 'Verificación conforme al manual del fabricante' },
      ],
    },
  ],
  comparativaLabel: 'Comparativa detectores MSA ALTAIR',
  comparativa: [
    { modelo: 'ALTAIR 4XR', norma: 'Verificar por modelo', nivel_haz: 'Monitoreo portátil', gases: 'LEL · O₂ · pares tóxicos', ideal: 'Espacios confinados y HAZMAT' },
    { modelo: 'ALTAIR 2X', norma: 'Verificar por modelo', nivel_haz: 'Monitoreo portátil', gases: 'Monogás o configuraciones dobles', ideal: 'Riesgo de gas específico' },
  ],
  faq: [
    {
      q: '¿Por qué necesito un detector ATEX para HAZMAT?',
      a: 'ATEX (Europa) y Clase I División 1 (Norteamérica) certifican que el instrumento puede operar de forma segura en presencia de gases o vapores inflamables sin convertirse en fuente de ignición. En un reconocimiento de escena HAZMAT, el agente puede ser inflamable antes de identificarse; un detector sin certificación para atmósferas explosivas puede convertirse en fuente de ignición.',
    },
    {
      q: '¿Qué diferencia hay entre ALTAIR 4XR y ALTAIR 2X?',
      a: 'ALTAIR 4XR es un detector multigás para combustibles, oxígeno y pares tóxicos según la configuración. ALTAIR 2X se usa para detección monogás o ciertas configuraciones dobles. Elige el equipo por los gases identificados en la evaluación de riesgos.',
    },
    {
      q: '¿Cada cuánto se calibra un MSA Altair?',
      a: 'Realiza la prueba funcional, la calibración con gas patrón y el mantenimiento según las instrucciones del fabricante y el procedimiento de seguridad de tu operación. Conserva el registro de esas verificaciones.',
    },
  ],
  ctaWhatsapp: 'Hola, quiero información sobre monitores multi-gas MSA Altair para mi brigada HAZMAT o espacio confinado.',
  notaPie: NOTA_HAZMAT,
};

/* ════════════════════════════════════════════════════════════════════════════
   KAPPLER — Trajes HAZMAT Zytron · Frontline
   ════════════════════════════════════════════════════════════════════════════ */
const kapplerHazmat: EquipmentBrand = {
  categorySlug: 'hazmat',
  slug: 'kappler',
  brand: 'Kappler',
  brandLabel: 'Kappler Zytron',
  crossDesc: 'Trajes HAZMAT Nivel A/B/C · Zytron 500 CBRN · Frontline FR · Kits completos Nivel B',
  eyebrow: 'Kappler Inc. · NFPA 1990 por modelo · Distribuidor Autorizado MX',
  heroTitleTop: 'Kappler Zytron',
  heroTitleAccent: 'CBRN y NFPA 1990.',
  heroLead: 'La gama de trajes HAZMAT Kappler incluye Zytron 500 y Zytron 300 para protección química, Frontline 500 encapsulado Nivel A de vapor y Zytron 100XP para partículas y salpicadura ligera. La certificación NFPA 1990 aplica según el modelo.',
  heroIntro: [
    'Kappler produce trajes HAZMAT para respuesta a materiales peligrosos y operaciones industriales. Zytron 500 Z5H577-92 cuenta con NFPA 1990 (1992), mientras que los Z5H582/583-94C2RPBC cuentan con NFPA 1994 Clase 2. Los modelos Zytron 300 terminados en -92 cuentan con NFPA 1990 (1992).',
    'Frontline 500 F5H582-91/F5H583-91 es un traje encapsulado de vapor Nivel A con NFPA 1990 (1991), con opciones de flash fire solo para escape y gas licuado. La certificación debe confirmarse siempre por número de modelo.',
  ],
  heroBadges: ['NFPA 1990 (1991)', 'NFPA 1990 (1992)', 'NFPA 1994 Clase 2', 'Nivel A · B · D', 'Zytron 500', 'Frontline 500', 'Selección por modelo'],
  seoTitle: 'Trajes HAZMAT Kappler Zytron — Nivel A/B NFPA 1990 · México',
  seoDescription: 'Distribuidor de trajes HAZMAT Kappler en México: Zytron 500, Zytron 300 y Frontline 500 encapsulado de vapor Nivel A. NFPA 1990 o NFPA 1994 Clase 2 según el modelo.',
  stats: [
    { valor: 'NFPA 1990', etiq: 'Frontline 500 F5H582-91/F5H583-91' },
    { valor: 'NFPA 1990', etiq: 'Zytron 500 Z5H577-92' },
    { valor: 'NFPA 1994', etiq: 'Z5H582/583-94C2RPBC Clase 2' },
    { valor: '—', etiq: 'Zytron 100XP sin NFPA' },
  ],
  credenciales: [
    {
      n: '01',
      t: 'Zytron 500: certificación según modelo',
      d: 'Zytron 500 Z5H577-92 cuenta con NFPA 1990 (1992). Los modelos Z5H582/583-94C2RPBC cuentan con NFPA 1994 Clase 2. Confirma el número de modelo y su etiqueta antes de seleccionarlo.',
    },
    {
      n: '02',
      t: 'Tablas de permeación verificadas por sustancia',
      d: 'Kappler publica tablas de permeación para el tiempo de ruptura (breakthrough time) y la tasa de permeación para más de 370 sustancias en la gama Zytron. Sin tabla de permeación verificada, no es posible confirmar que un traje determinado es adecuado para una sustancia específica — solo la certificación de nivel no es suficiente para selección técnica.',
    },
    {
      n: '03',
      t: 'Frontline 500: encapsulado de vapor Nivel A',
      d: 'Frontline 500 F5H582-91/F5H583-91 es un traje encapsulado de vapor, gas-tight, Nivel A, con NFPA 1990 (1991). Tiene opciones de flash fire solo para escape y gas licuado.',
    },
    {
      n: '04',
      t: 'Alternativa calificada para licitaciones con dos fabricantes',
      d: 'Las especificaciones de una licitación deben citar el número de modelo y la certificación aplicable. Kappler Zytron 500 y DuPont Tychem 10000 tienen configuraciones distintas; compara sus fichas y tablas de permeación para el agente de la operación.',
    },
  ],
  linesIntro: 'La gama Kappler se estructura por nivel de protección EPA, tipo de operación y número de modelo: Zytron para protección química y Frontline 500 para protección encapsulada de vapor Nivel A.',
  lineas: [
    {
      tipo: 'traje-nivel-a',
      badge: 'NFPA 1990 / NFPA 1994 según modelo',
      titulo: 'Zytron 500 — protección química encapsulada',
      modelos: 'Zytron 500 Z5H577-92 · Z5H582/583-94C2RPBC',
      desc: 'Zytron 500 Z5H577-92 cuenta con NFPA 1990 (1992). Los Z5H582/583-94C2RPBC cuentan con NFPA 1994 Clase 2. Selecciona por la exposición y la tabla de permeación.',
      tech: 'Barrera Zytron 500 · certificación según número de modelo',
    },
    {
      tipo: 'traje-nivel-b',
      badge: 'NFPA 1990',
      titulo: 'Zytron 300 — Nivel B zona cálida',
      modelos: 'Zytron 300 modelos -92',
      desc: 'Los modelos Zytron 300 terminados en -92 cuentan con NFPA 1990 (1992). Verifica el número de modelo y la tabla de permeación antes de seleccionar el nivel de protección.',
      tech: 'Zytron 300 · certificación en modelos -92',
    },
    {
      tipo: 'traje-nivel-b',
      badge: 'NFPA 1990 (1991) · Nivel A',
      titulo: 'Frontline 500 — encapsulado de vapor',
      modelos: 'Frontline 500 F5H582-91/F5H583-91',
      desc: 'Traje encapsulado de vapor, gas-tight, Nivel A, con NFPA 1990 (1991). Hay opciones de flash fire solo para escape y gas licuado.',
      tech: 'Encapsulado de vapor · selección por modelo',
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
  anatomiaIntro: 'Kappler Zytron 500 se selecciona por modelo y configuración. Cada componente del traje influye en la barrera química y debe revisarse junto con la etiqueta, la certificación aplicable y la tabla de permeación.',
  anatomia: [
    { t: 'Tela Zytron 500 — barrera multicapa laminada', d: 'La certificación aplica a la combinación específica de material, costuras y cierres del modelo. Cambiar componentes puede afectar el desempeño; usa las piezas y procedimientos indicados por Kappler.' },
    { t: 'Costuras termoselladas de cuatro capas', d: 'Las costuras son el punto más vulnerable de cualquier traje de protección química. Una costura sin sellar permite la penetración de vapores aunque la tela sea impermeable. Las cuatro capas del sellado Kappler (hilo + dos capas de cinta + adhesivo) son el estándar de la industria para NFPA 1990.' },
    { t: 'Cierre de cremallera hermético con guardapolvo', d: 'El cierre frontal es el componente que más frecuentemente falla en las pruebas NFPA 1990. Kappler usa una cremallera de dientes de plástico (no metálica) con guardapolvo interno — el metal puede crear microfisuras que permiten la permeación de vapores en los ciclos de prueba.' },
    { t: 'Visor de policarbonato panorámico', d: 'El visor es un componente de sacrificio — no tiene la misma resistencia química que la tela Zytron 500. Para operaciones con solventes que atacan el policarbonato (acetona, tolueno), Kappler ofrece visor alternativo en polimetilpenteno (TPX) con mayor resistencia química.' },
    { t: 'Compatibilidad con SCBA', d: 'La compatibilidad entre el traje y el equipo de respiración debe verificarse en las fichas técnicas de ambos modelos. Revisa las interfaces y el procedimiento de vestido antes de la operación.' },
    { t: 'Prueba de campo con detector de partículas', d: 'Antes de cualquier operación con Nivel A, la brigada debe realizar una prueba de integridad del traje con aerosol de dioctilsebacato (DEHS) o nebulizador Fit-Test. Un traje NFPA 1990 que no pasa la prueba de campo no debe usarse — la certificación de fábrica no sustituye la verificación de integridad antes del incidente.' },
  ],
  comparativa: [
    { modelo: 'Zytron 500 Z5H577-92', tipo: 'traje-nivel-a', rec: true, norma: 'NFPA 1990 (1992)', nivel_haz: 'Según evaluación', barrera: 'Zytron 500', gases: '—', ideal: 'Protección química por modelo' },
    { modelo: 'Zytron 500 Z5H582/583-94C2RPBC', tipo: 'traje-nivel-b', norma: 'NFPA 1994 Clase 2', nivel_haz: 'Según evaluación', barrera: 'Zytron 500', gases: '—', ideal: 'Protección CBRN por modelo' },
    { modelo: 'Zytron 300 modelos -92', tipo: 'traje-nivel-b', norma: 'NFPA 1990 (1992)', nivel_haz: 'Nivel B', barrera: 'Zytron 300', gases: '—', ideal: 'Selección por agente' },
    { modelo: 'Frontline 500 F5H582-91/F5H583-91', tipo: 'traje-nivel-b', norma: 'NFPA 1990 (1991)', nivel_haz: 'Nivel A encapsulado', barrera: '—', gases: 'Vapor y gas', ideal: 'Opciones de flash fire para escape y gas licuado' },
    { modelo: 'Zytron 100 Nivel D', tipo: 'traje-nivel-b', norma: 'NFPA 1950', nivel_haz: 'Nivel D desechable', barrera: 'Zytron 100 polipropileno', gases: 'Partículas · polvos', ideal: 'Apoyo · post-emergencia' },
  ],
  comparativaLabel: 'Kappler — modelos por certificación y exposición',
  comparativaNote: ' Recomendado = seleccionar el Zytron 500 por número de modelo, certificación y tabla de permeación.',
  guia: [
    { n: '01', t: 'Nivel A (NFPA 1990): cuando el agente es desconocido o cuando la concentración del vapor supera el TLV — cualquier duda sobre el agente  Nivel A, nunca Nivel B.' },
    { n: '02', t: 'Nivel B (NFPA 1990): cuando el agente es conocido y el vapor no es el vector principal — zona cálida con salpicaduras pero sin saturación de vapor que requiera encapsulamiento.' },
    { n: '03', t: 'Nivel C: solo cuando el agente, la concentración y las condiciones atmosféricas están completamente caracterizadas y el respirador de purificación de aire es adecuado — nunca como primera respuesta.' },
    { n: '04', t: 'Verifica las tablas de permeación de Kappler para el agente específico antes de seleccionar el nivel — la certificación NFPA no garantiza resistencia a toda sustancia, solo a las de las pruebas de certificación.' },
  ],
  segmentosIntro: 'Los trajes Kappler cubren cuatro segmentos según el tipo de operación y el perfil de riesgo de la instalación.',
  segmentos: [
    { num: '01', tipo: 'traje-nivel-a', titulo: 'Brigadas HAZMAT municipales y Protección Civil', desc: 'Zytron 500 permite seleccionar configuraciones con NFPA 1990 (1992) o NFPA 1994 Clase 2 según el número de modelo. Confirma el riesgo y la tabla de permeación antes de integrar el traje a la dotación.', modelos: 'Zytron 500 Z5H577-92 · Z5H582/583-94C2RPBC' },
    { num: '02', tipo: 'traje-nivel-b', titulo: 'Refinería y petroquímica', desc: 'Frontline 500 F5H582-91/F5H583-91 es un encapsulado de vapor Nivel A con NFPA 1990 (1991). Sus opciones de flash fire son solo para escape; la selección requiere evaluación del riesgo.', modelos: 'Frontline 500 · Zytron 300 modelos -92' },
    { num: '03', tipo: 'traje-nivel-b', titulo: 'Industria química y plantas de proceso', desc: 'Los Zytron 300 terminados en -92 cuentan con NFPA 1990 (1992). Verifica la tabla de permeación y el plan de respuesta antes de emplearlos ante ácidos, álcalis o solventes.', modelos: 'Zytron 300 · Zytron 100XP' },
    { num: '04', tipo: 'traje-nivel-b', titulo: 'Licitaciones con requisito de doble fabricante', desc: 'La especificación debe identificar modelo, certificación y desempeño requerido. Compara las fichas de Kappler y DuPont para la sustancia, la ruta de exposición y el nivel de protección solicitados.', modelos: 'Zytron 500 · Tychem 10000' },
  ],
  faqs: [
    { q: '¿En qué se diferencia el Kappler Zytron 500 del DuPont Tychem 10000?', a: 'La certificación depende del modelo: Zytron 500 Z5H577-92 cuenta con NFPA 1990 (1992) y Z5H582/583-94C2RPBC con NFPA 1994 Clase 2; Tychem 10000 TK612T/TK613T cuenta con NFPA 1990 (1994 Clase 2). Compara la ficha técnica y la tabla de permeación para la sustancia de la operación.' },
    { q: '¿Cómo verifico la certificación de un traje Kappler?', a: 'Revisa el número de modelo y la etiqueta del traje. Zytron 500 Z5H577-92 cuenta con NFPA 1990 (1992); Z5H582/583-94C2RPBC cuenta con NFPA 1994 Clase 2; Frontline 500 F5H582-91/F5H583-91 cuenta con NFPA 1990 (1991). La certificación aplica al modelo específico, no a toda la familia.' },
    { q: '¿Cómo verifico la integridad de un traje Kappler antes de usarlo?', a: 'La NFPA 1990 exige una prueba de integridad del traje antes de cada uso. El método estándar es la prueba de presión de aire (inflation test): se infla el traje con aire limpio y se verifica que no hay caída de presión en 60 segundos. Alternativamente, se puede usar un aerosol DEHS (dioctilsebacato) o humo de prueba — cualquier pérdida detectada con detector de partículas indica una falla de sellado. Un traje que falla la prueba de integridad no debe usarse en zona caliente aunque tenga certificación NFPA 1990 vigente.' },
    { q: '¿Cuántas veces puede usarse un traje Kappler Zytron antes de descartarlo?', a: 'Los trajes Kappler no tienen un número fijo de usos — su vida útil depende del tipo de agente con que tuvo contacto, la limpieza y descontaminación post-uso, y el resultado de las inspecciones visuales y pruebas de integridad. Kappler recomienda: inspección visual después de cada uso, prueba de integridad antes de cada uso, y desecho inmediato si hay desgarro, costuras separadas, visor rayado o cambio de color de la tela. Para los trajes con exposición a agentes de guerra química, el protocolo es descarte inmediato después de una sola exposición real.' },
  ],
  ctaKicker: 'NFPA 1990 por modelo · Selección por agente',
  ctaTitleHtml: 'Kappler Zytron: protección HAZMAT<br/>certificada para cada nivel de riesgo.',
  waQuote: 'Hola, quiero información sobre trajes HAZMAT Kappler Zytron para mi brigada — operamos en Nivel B y ocasionalmente Nivel A.',
  notaPie: '* La selección del nivel de protección EPA (A/B/C/D) debe basarse en la identificación del agente, las tablas de permeación del fabricante y el plan de respuesta de la brigada. La certificación NFPA no garantiza protección ante toda sustancia — siempre verificar la tabla de permeación específica.',
};

const detectoresDeGas: EquipmentBrand = {
  tipoPagina: 'linea',
  categorySlug: 'hazmat',
  slug: 'detectores-de-gas',
  brand: 'MSA Safety',
  brandLabel: 'Detectores de gas',
  productSlugs: [
    'msa-altair-4xr',
    'msa-altair-2x-detector-monogas',
    'drager-pac-6500-detector-monogas',
    'drager-x-am-5600-detector-multigas',
    'drager-x-am-5800-detector-multigas',
    'honeywell-bw-clip4-detector-4-gases',
    'industrial-scientific-ventis-pro5',
  ],
  crossDesc: 'Detectores personales, monogás y multigás.',
  eyebrow: 'Detección de gases · NOM-010-STPS-2014',
  heroTitleTop: 'Detectores de gas',
  heroTitleAccent: 'personales y multigás.',
  heroLead: 'Un detector de gas es un instrumento con sensor que mide la concentración de un gas en el aire y activa una alarma cuando se alcanza un nivel peligroso. Sirve para detectar fugas de gas natural o LP, monóxido de carbono y gases tóxicos antes de que alguien respire una dosis dañina o se forme una mezcla explosiva. Suministramos detectores de gases personales y multigás de MSA, Dräger, Honeywell e Industrial Scientific para la industria, la brigada y los cuerpos de bomberos.',
  heroIntro: [],
  heroBadges: ['NOM-010-STPS-2014'],
  seoTitle: 'Detector de gas portátil y multigás: detecta fugas y gases tóxicos',
  seoDescription: 'Detectores de gas MSA, Dräger, Honeywell e Industrial Scientific: cómo funciona un detector de gas, tipos, dónde instalarlo y qué hacer ante una fuga de gas.',
  stats: [],
  credenciales: [],
  bloques: [
    {
      id: 'como-funciona-un-detector-de-gas',
      titulo: '¿Cómo funciona un detector de gas?',
      parrafos: ['El detector toma el aire del ambiente y lo hace pasar por su sensor. Según la tecnología, el sensor responde a la presencia de gases combustibles, de gases tóxicos o a la falta de oxígeno, y el equipo traduce esa señal a una concentración en ppm o en % LEL. Si la concentración de gas supera el nivel de alarma configurado, enciende luces LED, suena una alerta sonora y vibra.'],
      items: [
        { t: 'Electroquímico', d: 'para gases tóxicos como monóxido de carbono (CO) y sulfuro de hidrógeno (H₂S).' },
        { t: 'Catalítico', d: 'para combustibles como metano, propano y gas LP.' },
        { t: 'Infrarrojo', d: 'para combustibles y CO₂.' },
        { t: 'PID (fotoionización)', d: 'para compuestos orgánicos volátiles.' },
      ],
    },
    {
      id: 'tipos-de-detectores-de-gas',
      titulo: 'Tipos de detectores de gas',
      tabla: {
        cols: ['Tipo', 'Para qué sirve', 'Modelos'],
        filas: [
          ['Monogás personal', 'Cuando el riesgo se reduce a un solo gas (CO, H₂S, SO₂, O₂)', 'MSA ALTAIR 2X, Dräger Pac 6500'],
          ['Multigás portátil', 'Varios gases a la vez: combustibles, O₂, CO, H₂S y otros tóxicos', 'MSA ALTAIR 4XR, Dräger X-am 5600 y X-am 5800, Honeywell BW Clip4, Industrial Scientific Ventis Pro5'],
          ['Detector fijo', 'Monitoreo permanente de un área, cuarto de máquinas o cocina', 'Se integra al sistema de alarma del inmueble'],
        ],
      },
    },
    {
      id: 'detectores-de-gas-que-manejamos',
      titulo: 'Detectores de gas que manejamos',
      items: [
        { t: 'MSA ALTAIR 4XR', d: 'multigás para combustibles (LEL), O₂ y pares tóxicos; IP68, resiste caídas de 7.5 m sobre concreto, batería recargable de 20 h y alertas MotionAlert e InstantAlert.' },
        { t: 'Dräger X-am 5800', d: '4 puertos para 1 a 6 gases, incluidos inflamables y COV por PID; IP68.' },
        { t: 'Honeywell BW Clip4', d: 'H₂S, CO, O₂ y combustibles; 2 años de operación continua sin cargar ni cambiar batería; IP68.' },
        { t: 'Industrial Scientific Ventis Pro5', d: 'hasta 5 gases simultáneos con conectividad inalámbrica, LTE y satelital; IP68.' },
      ],
    },
    {
      id: 'detector-de-gas-fijo-o-portatil-cual-elegir',
      titulo: 'Detector de gas fijo o portátil: cuál elegir',
      parrafos: ['El detector fijo vigila un solo punto las 24 horas: cocinas industriales, cuartos de calefacción, calderas y áreas de almacenamiento de combustible. El detector portátil acompaña al trabajador y detecta fugas donde esté, lo que lo hace indispensable en mantenimiento, espacios confinados, respuesta a emergencias y trabajos con materiales peligrosos. En el hogar, un detector de gas doméstico cerca de la cocina y del calentador es una medida de seguridad básica para prevenir intoxicaciones y explosiones.'],
    },
    {
      id: 'limites-de-exposicion-en-mexico',
      titulo: 'Límites de exposición en México',
      parrafos: ['La NOM-010-STPS-2014 fija valores límite de exposición para agentes químicos en el ambiente laboral. Para el monóxido de carbono el promedio ponderado en tiempo es de 25 ppm, y para el sulfuro de hidrógeno de 1 ppm, con un valor de corto tiempo de 5 ppm. Un detector bien configurado avisa antes de llegar a esos niveles.'],
    },
    {
      id: 'donde-instalar-un-detector-de-gas-para-fugas-de-gas-natural-o-lp',
      titulo: '¿Dónde instalar un detector de gas para fugas de gas natural o LP?',
      parrafos: ['Depende de la densidad del gas. El gas natural (metano) es más ligero que el aire y se acumula arriba, por lo que el detector fijo va cerca del techo. El gas LP (propano y butano) es más pesado y se acumula abajo, así que el detector va cerca del piso. El detector personal se porta en la zona de respiración del trabajador.'],
    },
    {
      id: 'que-hacer-si-suena-la-alarma',
      titulo: 'Qué hacer si suena la alarma',
      pasos: [
        'Sal del área y aleja a las personas.',
        'No enciendas luces ni aparatos eléctricos si sospechas una fuga de gas combustible.',
        'Cierra la válvula de suministro si puedes hacerlo sin riesgo.',
        'Llama a los servicios de emergencia al 911 y ventila solo si es seguro.',
      ],
    },
    {
      id: 'calibracion-y-mantenimiento',
      titulo: 'Calibración y mantenimiento',
      parrafos: ['Todo detector de gas requiere prueba funcional, calibración con gas patrón y cambio de sensores según el manual del fabricante. Sin esa verificación, la lectura pierde sensibilidad y el equipo puede no dar aviso a tiempo.'],
    },
  ],
  linesIntro: '',
  lineas: [],
  comparativa: [],
  faq: [
    { q: '¿Qué diferencia hay entre un detector monogás y uno multigás?', a: 'El monogás mide un solo gas y se usa cuando el riesgo se reduce a ese gas; el multigás mide varios gases a la vez, por ejemplo combustibles, oxígeno, CO y H₂S.' },
    { q: '¿Qué límite de monóxido de carbono fija la NOM-010-STPS-2014?', a: 'Un valor límite de exposición promedio ponderado en tiempo de 25 ppm.' },
    { q: '¿Dónde se coloca un detector de gas LP?', a: 'Cerca del piso, porque el gas LP es más pesado que el aire; el de gas natural va cerca del techo.' },
  ],
  ctaKicker: 'Detectores de gas',
  ctaTitleHtml: 'Cotiza tu detector de gas con un especialista y recibe la configuración de sensores para tu operación.',
  waQuote: 'Cotiza tu detector de gas con un especialista y recibe la configuración de sensores para tu operación.',
};

export const hazmatBrandList: EquipmentBrand[] = [dupontTychem, lakelandChemMax, msaDeteccion, kapplerHazmat, detectoresDeGas];
