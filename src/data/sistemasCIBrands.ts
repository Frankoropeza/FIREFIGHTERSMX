/**
 * Marcas de Sistemas Contra Incendio — implementan EquipmentBrand (ver brandPages.ts).
 * Renderizadas por src/components/products/BrandPage.astro (mismo componente que el resto).
 *
 * Categoría 'sistemas-ci' (columnas: Norma / Tipo / Cobertura / Listado / Ideal).
 * Familias: rociadores · deteccion · agente-ci · red-hidraulica
 * (TipoKey extendido en brandPages.ts para incluir estos cuatro nuevos valores)
 */
import type { EquipmentBrand } from './brandPages';

const NOTA_SCI =
  '* Sistemas certificados NFPA 13, NFPA 72 y NFPA 2001 según aplique. Cobertura y concentración de diseño en condiciones nominales; el cálculo hidráulico final depende de la clasificación de riesgo, geometría del inmueble y normativa local vigente.';

/* ════════════════════════════════════════════════════════════════════════════
   TYCO VIKING — Rociadores NFPA 13
   ════════════════════════════════════════════════════════════════════════════ */
const tycoViking: EquipmentBrand = {
  categorySlug: 'sistemas-ci',
  slug: 'tyco-viking',
  brand: 'Tyco Viking',
  brandLabel: 'Tyco Viking',
  crossDesc: 'Rociadores automáticos NFPA 13 · UL Listed · FM Approved',
  eyebrow: 'Tyco Viking · Johnson Controls',
  heroTitleTop: 'Rociadores Tyco Viking',
  heroTitleAccent: 'supresión NFPA 13.',
  heroLead:
    'Línea completa de rociadores automáticos Tyco Viking en México. La gama completa —riesgo ligero, ordinario, ESFR de alta estiba y diluvio AFFF— certificada UL Listed y FM Approved, con ingeniería de cálculo hidráulico, suministro y puesta en servicio.',
  heroIntro: [
    'Tyco Viking, bajo la plataforma Johnson Controls International, es uno de los fabricantes de rociadores automáticos más instalados en el mundo. Su catálogo cubre desde el rociador residencial hasta el cabezal ESFR K-25 para almacenes de alta estiba, con listados UL Listed y FM Approved en cada modelo. La ingeniería de fluido detrás de cada cabezal —factor K, temperatura de activación, distancia de protección— garantiza el desempeño proyectado en el cálculo hidráulico NFPA 13.',
    'En México, los parques industriales, centros de distribución, hoteles, hospitales y edificios de oficinas exigen sistemas NFPA 13 para cumplir requisitos de seguros, normativa de Protección Civil y estándares de arrendadores internacionales. Distribuimos Tyco Viking con soporte técnico completo: memoria de cálculo hidráulico, selección de cabezales por tipo de riesgo, suministro de materiales y acompañamiento en la puesta en servicio.',
  ],
  heroBadges: [
    'NFPA 13',
    'UL Listed',
    'FM Approved',
    'ESFR K-25',
    'Diluvio AFFF',
    'Riesgo Ligero / Ordinario',
    'Johnson Controls',
  ],
  seoTitle: 'Rociadores Tyco Viking NFPA 13 — ESFR · Diluvio · México',
  seoDescription:
    'Rociadores automáticos Tyco Viking certificados NFPA 13 en México: riesgo ligero, ordinario, ESFR K-25 para alta estiba y diluvio AFFF. UL Listed · FM Approved. Cálculo hidráulico, suministro y puesta en servicio.',
  founding: '1976',
  parentOrg: { name: 'Johnson Controls International plc', ticker: 'NYSE:JCI' },
  stats: [
    { valor: 'NFPA 13', etiq: 'Norma de diseño e instalación' },
    { valor: 'K-25', etiq: 'Factor K máximo en gama ESFR' },
    { valor: 'UL · FM', etiq: 'Doble listado en cada modelo' },
    { valor: '32', etiq: 'Estados con cobertura en México' },
  ],
  credenciales: [
    {
      n: '01',
      t: 'Líder mundial en rociadores NFPA 13',
      d: 'Tyco Viking, bajo Johnson Controls International, es uno de los fabricantes más instalados globalmente. Su catálogo abarca riesgo ligero, ordinario Grupos 1 y 2, riesgo extra, ESFR y diluvio, con decenas de configuraciones de temperatura, orientación y factor K para cada tipo de ocupación.',
    },
    {
      n: '02',
      t: 'Doble listado UL Listed y FM Approved',
      d: 'Cada modelo Tyco Viking cuenta con listado UL Listed de Underwriters Laboratories y aprobación FM Approved de FM Global, los dos organismos de referencia para aseguradoras internacionales y requisitos de parques industriales, centros de distribución y grandes desarrollos.',
    },
    {
      n: '03',
      t: 'Tecnología ESFR para almacenes de alta estiba',
      d: 'Los cabezales ESFR (Early Suppression Fast Response) de Tyco Viking —K-17, K-22 y K-25— suprimen el incendio directamente en el rack sin requerir rociadores intermedios en el interior de la estantería, simplificando el diseño hidráulico y reduciendo el costo total del sistema en almacenes de clase I a IV y plásticos expandidos.',
    },
    {
      n: '04',
      t: 'Soporte técnico: cálculo, suministro y servicio',
      d: 'Ofrecemos memoria de cálculo hidráulico NFPA 13, selección de cabezales por clasificación de riesgo de la NFPA, suministro de materiales completo y acompañamiento en la puesta en servicio. Para concursos públicos y licitaciones privadas generamos la ficha técnica y el manifiesto de cumplimiento norma por partida.',
    },
  ],
  linesIntro:
    'Tyco Viking cubre el espectro completo de riesgo NFPA 13 desde una sola fuente: riesgo ligero para oficinas y hoteles, ordinario para manufactura, ESFR para almacenes de alta estiba y diluvio AFFF para ocupaciones especiales. Una sola marca, todos los cabezales que el proyecto exige.',
  lineas: [
    {
      tipo: 'rociadores',
      badge: 'NFPA 13 · Respuesta Estándar',
      titulo: 'Riesgo Ligero (Light Hazard)',
      modelos: 'TY-B Pendant / TY-B Upright',
      desc: 'Rociadores de respuesta estándar para ocupaciones de riesgo ligero: oficinas, hoteles, museos, hospitales y centros comerciales. Temperatura de activación nominal 68 °C (155 °F) con área de cobertura de hasta 18.6 m² por cabezal. El modelo TY-B Pendant es el más instalado de la familia para estos usos.',
      tech: 'Factor K 5.6 · Respuesta estándar (RTI ≥ 80) · Cobertura ≤ 18.6 m² · UL Listed · FM Approved',
    },
    {
      tipo: 'industrial',
      badge: 'NFPA 13 · Riesgo Ordinario Grupo 1-2',
      titulo: 'Manufactura y Bodegas',
      modelos: 'TY-FRB Quick Response / TY315',
      desc: 'Rociadores de respuesta rápida (RTI ≤ 50) para riesgo ordinario Grupo 1 (manufactura ligera, estacionamientos) y Grupo 2 (industria general, almacenes de baja estiba). Mayor densidad de descarga que el riesgo ligero; el TY-FRB acorta el tiempo de activación ante fuegos de crecimiento rápido en líneas de producción y bodegas de distribución.',
      tech: 'Factor K 5.6–8.0 · Respuesta rápida (RTI ≤ 50) · Densidad 0.10–0.20 gpm/ft² · UL Listed · FM Approved',
    },
    {
      tipo: 'rociadores',
      badge: 'NFPA 13 · ESFR K-25',
      titulo: 'Almacenes de Alta Estiba (ESFR)',
      modelos: 'TY315 · TY3256 ESFR',
      desc: 'Cabezales ESFR (Early Suppression Fast Response) para almacenes con estiba hasta 12 m de altura, mercancías Clase I–IV y plásticos expandidos. El diseño de supresión actúa directamente sobre la base del fuego antes de que se propague al techo, eliminando la necesidad de rociadores en rack intermedios y simplificando el sistema.',
      tech: 'Factor K 17–25 · ESFR · Presión de diseño ≥ 35 psi · Cobertura ≤ 9 m² · UL Listed · FM Approved',
    },
    {
      tipo: 'red-hidraulica',
      badge: 'NFPA 13 · Especiales',
      titulo: 'Diluvio y Espuma AFFF',
      modelos: 'TY-B Open / TY-UPB AFFF Foam',
      desc: 'Rociadores abiertos para sistemas de diluvio (deluge) y cabezales para espuma AFFF en hangares de aviación, plantas petroquímicas, salas de turbinas y depósitos de combustible. Activación por detección independiente; toda la red descarga simultáneamente para control de alto riesgo en superficie.',
      tech: 'Cabezales abiertos · AFFF compatible · Control por panel diluvio · NFPA 11 / NFPA 13 · UL Listed',
    },
  ],
  flagship: 'TY-B',
  anatomiaIntro:
    'El rociador TY-B es el cabezal más instalado de la familia Tyco Viking. Estos seis componentes explican cómo un elemento de apenas 100 g puede suprimir un incendio en sus primeros minutos antes de que se convierta en un siniestro mayor.',
  anatomia: [
    {
      t: 'Deflector',
      d: 'Lámina de acero inoxidable que fragmenta y distribuye el chorro de agua en el patrón de aspersión diseñado (pendant, upright, sidewall). La geometría del deflector define el área de cobertura y la densidad de descarga según NFPA 13.',
    },
    {
      t: 'Bulbo de vidrio / Elemento fusible',
      d: 'Elemento sensible a la temperatura que retiene el sello del rociador. Los bulbos de vidrio de líquido de colores codifican la temperatura de activación (68 °C naranja, 79 °C rojo, 93 °C amarillo). Al alcanzarse la temperatura de diseño, el bulbo revienta y libera el agua.',
    },
    {
      t: 'Sello de fusión (cap y seat)',
      d: 'Sello hermético que mantiene la presión de la red hidráulica en reposo. Al romperse el bulbo o el elemento fusible, el sello cede y el agua fluye hacia el deflector. La integridad del sello define la ausencia de fugas en la red en espera.',
    },
    {
      t: 'Rosca NPT de conexión',
      d: 'Roscado macho NPT ½" o ¾" para conexión directa a la red de tubería. La rosca se sella con teflón; el torque de apriete especificado en el catálogo Tyco es crítico para evitar fugas sin dañar el cuerpo del rociador.',
    },
    {
      t: 'Marco de deflector',
      d: 'Brazos de latón o acero inoxidable que sostienen el deflector a la distancia correcta de la boquilla. El marco también actúa como protección mecánica durante el transporte e instalación del cabezal.',
    },
    {
      t: 'Marco de soporte (yoke)',
      d: 'Cuerpo principal del rociador que integra la boquilla, la rosca de conexión y la retención del elemento sensible. El yoke de latón cromado Tyco Viking está diseñado para soportar la presión de trabajo de la red (hasta 175 psi típico) sin deformación.',
    },
  ],
  comparativa: [
    {
      modelo: 'TY-B Standard Pendant',
      tipo: 'rociadores',
      rec: false,
      norma: 'NFPA 13',
      tipo_sis: 'Respuesta Estándar',
      cobertura: '≤ 18.6 m²',
      listado: 'UL Listed · FM Approved',
      ideal: 'Oficinas · hoteles · museos',
    },
    {
      modelo: 'TY-FRB Quick Response',
      tipo: 'industrial',
      rec: true,
      norma: 'NFPA 13',
      tipo_sis: 'Respuesta Rápida',
      cobertura: '≤ 12.1 m²',
      listado: 'UL Listed · FM Approved',
      ideal: 'Manufactura · bodegas Grupo 1-2',
    },
    {
      modelo: 'TY315 ESFR K-25',
      tipo: 'rociadores',
      rec: false,
      norma: 'NFPA 13',
      tipo_sis: 'ESFR Supresión',
      cobertura: '≤ 9.3 m²',
      listado: 'UL Listed · FM Approved',
      ideal: 'Almacenes alta estiba ≤ 12 m',
    },
    {
      modelo: 'TY-UPB Diluvio AFFF',
      tipo: 'red-hidraulica',
      rec: false,
      norma: 'NFPA 13 / NFPA 11',
      tipo_sis: 'Diluvio / Espuma',
      cobertura: 'Según diseño',
      listado: 'UL Listed',
      ideal: 'Hangares · petroquímica · turbinas',
    },
  ],
  comparativaNote: NOTA_SCI,
  guia: [
    {
      n: '01',
      t: 'Clasifica el riesgo de la ocupación según NFPA 13: riesgo ligero (oficinas, hoteles, museos) → TY-B estándar; riesgo ordinario Grupo 1-2 (manufactura, bodegas de baja estiba) → TY-FRB rápido; almacén de alta estiba clase I–IV o plásticos → ESFR K-25; ocupación especial con inflamables → sistema de diluvio o espuma AFFF.',
    },
    {
      n: '02',
      t: 'Define el factor K y la presión de diseño en la cabecera: el cálculo hidráulico NFPA 13 parte de la densidad de descarga requerida (gpm/ft²) y el área de operación del sistema (área de diseño). Para ESFR, la presión mínima en el cabezal más desfavorable es el dato crítico; para riesgo ordinario la densidad define el factor K.',
    },
    {
      n: '03',
      t: 'Selecciona la temperatura de activación correcta: 68 °C (155 °F, bulbo naranja) para ocupaciones a temperatura ambiente; 79 °C (174 °F, rojo) para áreas con temperatura elevada; 93 °C (200 °F, amarillo) para cocinas industriales y secadores. Una temperatura incorrecta retrasa la activación o provoca disparos no deseados.',
    },
    {
      n: '04',
      t: 'Integra el proyecto completo: selección de cabezales, red hidráulica, bomba contra incendio NFPA 20, tanque de almacenamiento y válvula de alarma. La puesta en servicio requiere prueba hidrostática de la red a 200 psi por 2 horas (NFPA 13 §24.5) antes de la inspección final con el seguro o la autoridad de Protección Civil.',
    },
  ],
  segmentosIntro:
    'Los rociadores automáticos Tyco Viking son la primera opción de arquitectos, ingenieros de protección contra incendio y contratistas especializados que necesitan un catálogo completo NFPA 13 con doble listado UL/FM, ingeniería de respaldo y suministro confiable en los 32 estados.',
  segmentos: [
    {
      num: '01',
      tipo: 'rociadores',
      titulo: 'Edificios Corporativos y Hoteles',
      desc: 'Desarrolladores y operadores de oficinas, hoteles y centros comerciales que exigen NFPA 13 como condición de seguro y de licencia de uso de suelo. Los rociadores TY-B de riesgo ligero con acabados cromados y de roseta son la solución estética y técnica para estos proyectos.',
      modelos: 'TY-B Pendant · TY-B Concealed',
    },
    {
      num: '02',
      tipo: 'industrial',
      titulo: 'Naves Industriales y Manufactura',
      desc: 'Plantas de producción, líneas de ensamble y bodegas de distribución de riesgo ordinario Grupo 1 y 2. El TY-FRB Quick Response acorta el tiempo de activación y reduce el daño patrimonial en instalaciones donde el fuego puede crecer rápido por materias primas y productos terminados.',
      modelos: 'TY-FRB Quick Response · TY315',
    },
    {
      num: '03',
      tipo: 'rociadores',
      titulo: 'Centros de Distribución y Almacenes',
      desc: 'Parques logísticos y almacenes de alta estiba con racks selectivos, drive-in o push-back hasta 12 m de altura. Los cabezales ESFR TY3256 K-25 suprimen el incendio sin rociadores intermedios en rack, reduciendo el costo total de instalación y simplificando el mantenimiento.',
      modelos: 'TY3256 ESFR · TY315 ESFR',
    },
    {
      num: '04',
      tipo: 'red-hidraulica',
      titulo: 'Petroquímica, Hangares y Uso Especial',
      desc: 'Instalaciones de alto riesgo con almacenamiento de líquidos inflamables, hangares de aviación, salas de generadores y depósitos de combustible donde se requiere sistema de diluvio o espuma AFFF para control de incendio en superficie con descarga simultánea de toda la red.',
      modelos: 'TY-B Open Deluge · TY-UPB AFFF Foam',
    },
  ],
  faqs: [
    {
      q: '¿Qué norma regula el diseño e instalación de un sistema de rociadores en México?',
      a: 'La norma de referencia internacional es la NFPA 13 (Standard for the Installation of Sprinkler Systems), adoptada ampliamente en México para proyectos de Protección Civil, seguros internacionales y requisitos de arrendadores en parques industriales. La NOM-002-STPS-2010 establece la obligatoriedad de sistemas contra incendio en centros de trabajo; para el diseño específico se remite a la NFPA 13. Te entregamos la memoria de cálculo hidráulico firmada por DRO con referencia explícita a NFPA 13 para los trámites de PC.',
    },
    {
      q: '¿Qué es un rociador ESFR y cuándo se usa?',
      a: 'ESFR significa Early Suppression Fast Response (supresión temprana de respuesta rápida). A diferencia de los rociadores de control, un cabezal ESFR está diseñado para suprimir el fuego —no solo controlarlo— en almacenes de alta estiba antes de que el incendio alcance el techo. Esto elimina la necesidad de rociadores intermedios dentro del rack, ahorrando costo y complejidad. Se especifica para almacenes Clase I a IV y plásticos expandidos con estiba de hasta 12 m (40 ft) bajo el NFPA 13. El factor K-25 TY3256 Tyco Viking es el de mayor caudal en la gama y el más usado en centros de distribución de gran volumen.',
    },
    {
      q: '¿Qué diferencia hay entre UL Listed y FM Approved?',
      a: 'UL Listed (Underwriters Laboratories) es el listado de referencia en EE.UU. y México para cumplimiento de NFPA. FM Approved (FM Global) es el listado requerido por las aseguradoras del grupo FM para validar el desempeño en condiciones de incendio real. En proyectos con aseguradora internacional o arrendador de parque industrial Clase A, ambos listados son exigidos simultáneamente. Los rociadores Tyco Viking llevan ambos listados en cada modelo, lo que simplifica la especificación y los trámites con la aseguradora.',
    },
    {
      q: '¿El sistema de rociadores requiere bomba contra incendio?',
      a: 'En la mayoría de los proyectos sí. El suministro de agua para el sistema de rociadores NFPA 13 debe garantizar la presión y el caudal de diseño en el punto más desfavorable de la red. Si la presión de la red municipal no es suficiente —lo que ocurre en la mayoría de los parques industriales en México— se instala una bomba contra incendio certificada NFPA 20, un tanque de almacenamiento de reserva y un sistema de control eléctrico/diesel. Dimensionamos el conjunto completo en la memoria de cálculo.',
    },
  ],
  ctaKicker: 'NFPA 13 · UL Listed · FM Approved',
  ctaTitleHtml: 'Protege tu inmueble<br/>con ingeniería NFPA 13.',
  waQuote: 'Hola, quiero cotizar rociadores Tyco Viking NFPA 13 para mi proyecto.',
};

/* ════════════════════════════════════════════════════════════════════════════
   HONEYWELL NOTIFIER — Detección y Alarma NFPA 72
   ════════════════════════════════════════════════════════════════════════════ */
const honeywellNotifier: EquipmentBrand = {
  categorySlug: 'sistemas-ci',
  slug: 'honeywell-notifier',
  brand: 'Honeywell Notifier',
  brandLabel: 'Honeywell Notifier',
  crossDesc: 'Detección y alarma NFPA 72 · Direccionable · UL Listed',
  eyebrow: 'Honeywell Notifier · NFPA 72',
  heroTitleTop: 'Sistemas Notifier',
  heroTitleAccent: 'detección NFPA 72.',
  heroLead:
    'Línea completa de sistemas de detección y alarma de incendio Honeywell Notifier en México. Desde paneles convencionales para edificios pequeños hasta FACPs direccionables de gran capacidad para hospitales, torres y campus universitarios, con integración BMS y soporte técnico en los 32 estados.',
  heroIntro: [
    'Honeywell Notifier es la plataforma de detección y alarma de incendio de referencia en proyectos institucionales, hospitalarios y de infraestructura crítica en México. Su gama —desde el panel convencional Fire-Lite ES-200X hasta el FACP NFS2-3030 de 3,000 puntos— cubre el espectro completo de la NFPA 72 (National Fire Alarm and Signaling Code), desde edificios de oficinas de 5 pisos hasta hospitales de alta especialidad y campus universitarios.',
    'La detección temprana es la primera línea de defensa de un sistema de protección contra incendio. Los detectores fotoeléctricos, de calor, de monóxido y el ASD (Air Sampling Detection) de Honeywell Notifier permiten identificar el incendio en su etapa incipiente, activar la evacuación, iniciar la supresión automática y notificar a los servicios de emergencia, todo desde una sola plataforma de gestión centralizada ONYXWorks.',
  ],
  heroBadges: [
    'NFPA 72',
    'UL Listed',
    'cUL Canadá',
    'Direccionable',
    'NFS2-3030',
    'ONYXWorks BMS',
    'SWIFT Wireless',
    'Honeywell International',
  ],
  seoTitle: 'Detección Incendio Honeywell Notifier NFPA 72 — NFS2-3030 · México',
  seoDescription:
    'Sistemas de detección y alarma de incendio Honeywell Notifier NFPA 72 en México: paneles convencionales, FACPs direccionables NFS2-3030, integración BMS ONYXWorks y wireless SWIFT. UL Listed.',
  founding: '1949',
  parentOrg: { name: 'Honeywell International Inc.', ticker: 'NASDAQ:HON' },
  stats: [
    { valor: 'NFPA 72', etiq: 'Norma de detección y alarma' },
    { valor: '3,000', etiq: 'Puntos máx. panel NFS2-3030' },
    { valor: 'UL · cUL', etiq: 'Doble listado por modelo' },
    { valor: '32', etiq: 'Estados con cobertura en México' },
  ],
  credenciales: [
    {
      n: '01',
      t: 'Referencia mundial en detección NFPA 72',
      d: 'Honeywell Notifier es una de las marcas de detección y alarma de incendio más instaladas globalmente. Su plataforma cubre el espectro completo: paneles convencionales para edificios pequeños hasta FACPs de gran capacidad para infraestructura crítica, todos bajo la NFPA 72 y con listado UL Listed.',
    },
    {
      n: '02',
      t: 'Arquitectura direccionable — identificación punto a punto',
      d: 'Los paneles direccionables NFS2-640 y NFS2-3030 identifican cada detector, módulo y dispositivo de salida de forma individual en el loop SLC. En caso de alarma, el panel reporta el número exacto de dispositivo y la zona afectada, acortando el tiempo de respuesta y facilitando la evacuación dirigida.',
    },
    {
      n: '03',
      t: 'Gestión centralizada ONYXWorks y BACnet',
      d: 'La plataforma de software ONYXWorks permite supervisar múltiples paneles NFS2-3030 desde una sola consola de gestión: mapas del edificio en tiempo real, historial de eventos, integración con BMS vía BACnet y generación automática de reportes de mantenimiento NFPA 72. Ideal para hospitales, campus y torres corporativas.',
    },
    {
      n: '04',
      t: 'Integración inalámbrica SWIFT y multi-marca',
      d: 'El sistema SWIFT Wireless de Notifier permite extender el sistema de detección a zonas donde el cableado es costoso o impráctivo —áreas históricas, almacenes temporales, expansiones— sin comprometer la confiabilidad NFPA 72. La plataforma también se integra con sistemas de supresión, control de acceso y CCTV para una respuesta coordinada ante emergencias.',
    },
  ],
  linesIntro:
    'Honeywell Notifier cubre el ciclo completo de detección: desde el panel convencional de 2 zonas para una bodega pequeña hasta el FACP de 3,000 puntos para un hospital de alta especialidad. Una sola plataforma, escalable, con la misma familia de detectores y módulos en toda la gama.',
  lineas: [
    {
      tipo: 'deteccion',
      badge: 'NFPA 72 · Convencional',
      titulo: 'Sistemas Convencionales',
      modelos: 'Fire-Lite ES-200X / Honeywell 5000',
      desc: 'Paneles convencionales de 2 a 20 zonas para edificios pequeños y medianos: bodegas, locales comerciales, clínicas, escuelas y oficinas de hasta 3 niveles. Cada zona agrupa varios detectores; al activarse cualquiera, el panel indica la zona afectada. Instalación sencilla y costo de inversión inicial más bajo para proyectos donde la identificación punto a punto no es requerida.',
      tech: 'Hasta 20 zonas · NFPA 72 · UL Listed · 24 VDC · Batería de respaldo',
    },
    {
      tipo: 'deteccion',
      badge: 'NFPA 72 · Direccionable',
      titulo: 'FACP Direccionable',
      modelos: 'NFS2-640 · NFS-320',
      desc: 'Paneles direccionables de capacidad media (320–640 puntos por loop SLC) para edificios de oficinas, hoteles, hospitales de segundo nivel y naves industriales. Identificación individual de cada detector, módulo de entrada/salida y dispositivo de notificación. Programación flexible en campo con la plataforma VeriFire Tools; compatibles con detectores analógicos de humo, calor y CO de la familia Notifier.',
      tech: '320–640 puntos · Loop SLC direccionable · UL Listed · cUL · VeriFire Tools',
    },
    {
      tipo: 'deteccion',
      badge: 'NFPA 72 · Alta Capacidad',
      titulo: 'FACP Gran Capacidad',
      modelos: 'NFS2-3030 · NCA-2',
      desc: 'Paneles de hasta 3,000 puntos direccionables para edificios de gran altura, hospitales de alta especialidad, campus universitarios y aeropuertos. Arquitectura de red con hasta 64 paneles NFS2-3030 en nodo NCA-2 para supervisión centralizada. Compatible con redundancia de alimentación, impresora de eventos, sincronización de dispositivos de notificación y gestión remota ONYXWorks.',
      tech: 'Hasta 3,000 puntos · Red de paneles NCA-2 · ONYXWorks · BACnet · UL Listed',
    },
    {
      tipo: 'industrial',
      badge: 'NFPA 72 · Integración',
      titulo: 'Integración BMS / BACnet',
      modelos: 'NFS2-3030 con ONYXWorks · SWIFT Wireless',
      desc: 'Integración del sistema de detección de incendio con el Building Management System (BMS) del inmueble vía BACnet/IP o Modbus, así como extensión inalámbrica SWIFT para zonas sin cableado. Permite la coordinación automática de sistemas: apagado de HVAC por zona, cierre de compuertas cortafuego, activación de presurización de escaleras y notificación al puesto de vigilancia, todo desde un solo punto de gestión.',
      tech: 'BACnet/IP · Modbus · SWIFT Wireless · ONYXWorks · Integración multi-sistema',
    },
  ],
  flagship: 'NFS2-3030',
  anatomiaIntro:
    'El sistema Honeywell Notifier NFS2-3030 es el FACP de referencia para proyectos de gran escala. Estos cinco componentes forman el núcleo del sistema y explican por qué la detección temprana y la identificación punto a punto marcan la diferencia en la respuesta a emergencias.',
  anatomia: [
    {
      t: 'FACP — Panel de Control Central (NFS2-3030)',
      d: 'El cerebro del sistema: recibe las señales de todos los detectores y módulos del loop SLC, procesa la lógica de alarma programada, activa los dispositivos de notificación y genera el registro de eventos. El NFS2-3030 soporta hasta 3,000 puntos y puede interconectarse en red con hasta 64 paneles bajo el nodo NCA-2.',
    },
    {
      t: 'Tarjeta de loop direccionable (SLC card)',
      d: 'Módulo de comunicación que gestiona el loop SLC (Signaling Line Circuit): se comunica con cada detector y módulo usando el protocolo propietario CLIP de Notifier, identificando el dispositivo exacto que genera la alarma. Cada tarjeta SLC en el NFS2-3030 soporta hasta 318 puntos.',
    },
    {
      t: 'Detector de humo fotoeléctrico (FSP-851)',
      d: 'El detector más utilizado en la plataforma Notifier. Usa dispersión de luz (principio Tyndall) para detectar partículas de humo visible en la cámara de medición. Sensibilidad ajustable por software; compensa la deriva por envejecimiento y reporta el nivel de sensibilidad real al panel para el mantenimiento predictivo NFPA 72.',
    },
    {
      t: 'Detector de calor fijo / combinado (FD851HT)',
      d: 'Detector termistor de temperatura fija (58 °C ó 70 °C) y tasa de cambio para áreas donde el humo no es el indicador primario: cocinas, áreas de manufactura con vapores, zonas de pintura. El modelo combinado FD851HT suma detección de calor y humo en un solo cabezal para máxima cobertura.',
    },
    {
      t: 'Módulo de control de salida (relay module)',
      d: 'Dispositivo del loop SLC que activa cargas externas: supresión limpia, compuertas cortafuego, elevadores de emergencia, sistemas de presurización, alarmas visuales y sonoras. El módulo de salida se identifica individualmente en el panel y su estado (activo/normal/falla) se monitorea en tiempo real desde el FACP y ONYXWorks.',
    },
  ],
  comparativa: [
    {
      modelo: 'Fire-Lite ES-200X',
      tipo: 'deteccion',
      rec: false,
      norma: 'NFPA 72',
      tipo_sis: 'Convencional',
      cobertura: 'Hasta 20 zonas',
      listado: 'UL Listed · cUL',
      ideal: 'Bodegas · locales · escuelas',
    },
    {
      modelo: 'NFS2-640',
      tipo: 'deteccion',
      rec: false,
      norma: 'NFPA 72',
      tipo_sis: 'Direccionable SLC',
      cobertura: 'Hasta 640 puntos',
      listado: 'UL Listed · cUL',
      ideal: 'Hoteles · hospitales 2° nivel',
    },
    {
      modelo: 'NFS2-3030',
      tipo: 'deteccion',
      rec: true,
      norma: 'NFPA 72',
      tipo_sis: 'Direccionable alta cap.',
      cobertura: 'Hasta 3,000 puntos',
      listado: 'UL Listed · cUL',
      ideal: 'Hospitales · campus · torres',
    },
    {
      modelo: 'NFS2-3030 + ONYXWorks',
      tipo: 'industrial',
      rec: false,
      norma: 'NFPA 72',
      tipo_sis: 'Red + BMS integrado',
      cobertura: 'Hasta 64 paneles en red',
      listado: 'UL Listed · cUL',
      ideal: 'Aeropuertos · infraestructura crítica',
    },
  ],
  comparativaNote: NOTA_SCI,
  guia: [
    {
      n: '01',
      t: 'Define el nivel de identificación requerido: zona (convencional) o punto individual (direccionable). Para edificios de hasta 20 zonas sin requisito de identificación individual, el panel convencional Fire-Lite ES-200X es suficiente y más económico. Para hospitales, hoteles, edificios de más de 5 pisos o cualquier proyecto que exija identificación punto a punto, el sistema direccionable NFS2-640 o NFS2-3030 es el camino correcto según NFPA 72.',
    },
    {
      n: '02',
      t: 'Dimensiona la capacidad del panel por el número de puntos totales del proyecto: detectores + módulos de entrada + módulos de salida + dispositivos de notificación. Cada punto SLC consume una dirección del loop; el NFS2-640 soporta 640 por panel y el NFS2-3030 hasta 3,000, con red de hasta 64 paneles para mega-proyectos.',
    },
    {
      n: '03',
      t: 'Selecciona el tipo de detector correcto por área: fotoeléctrico (FSP-851) para humo visible en oficinas, pasillos y cuartos; iónico para humo invisible de llama limpia; calor fijo para cocinas y áreas de manufactura con vapores; multicriterio o ASD para salas de cómputo, data centers y áreas de misión crítica donde se requiere detección incipiente antes de que el humo sea visible.',
    },
    {
      n: '04',
      t: 'Integra el plan de verificación y mantenimiento NFPA 72 desde el diseño: la norma exige prueba anual de todos los detectores y dispositivos de notificación, con registro documentado. El sistema Notifier genera el registro de eventos automáticamente; el mantenimiento preventivo anual con tu distribuidor autorizado garantiza el cumplimiento y la vigencia del listado UL.',
    },
  ],
  segmentosIntro:
    'Honeywell Notifier es la primera opción de ingenieros de protección contra incendio, contratistas especializados y propietarios institucionales que requieren detección NFPA 72 confiable, con soporte técnico local, integración BMS y una marca con presencia global respaldada por Honeywell International.',
  segmentos: [
    {
      num: '01',
      tipo: 'deteccion',
      titulo: 'Hospitales y Clínicas',
      desc: 'Hospitales de alta especialidad, clínicas privadas y centros médicos donde la detección temprana y la evacuación dirigida son críticas. El NFS2-3030 con ONYXWorks permite mapas en tiempo real por piso, activación selectiva de alarmas y coordinación con sistemas de gases medicinales, HVAC y elevadores de emergencia.',
      modelos: 'NFS2-3030 · NCA-2 · FSP-851 · ONYXWorks',
    },
    {
      num: '02',
      tipo: 'deteccion',
      titulo: 'Torres Corporativas y Desarrollos Mixtos',
      desc: 'Edificios de oficinas de más de 5 pisos, desarrollos de uso mixto y centros comerciales con múltiples arrendatarios donde la identificación punto a punto permite conocer el piso y la zona exacta de la alarma y activar la evacuación selectiva sin desalojar todo el edificio innecesariamente.',
      modelos: 'NFS2-640 · NFS2-3030 · FD851HT · SWIFT Wireless',
    },
    {
      num: '03',
      tipo: 'industrial',
      titulo: 'Industria y Manufactura',
      desc: 'Naves de manufactura, plantas de proceso y parques industriales donde coexisten áreas de oficina, producción y almacén con distintos niveles de riesgo. El sistema direccionable Notifier permite zonificar la detección por tipo de riesgo, integrar con la supresión automática y conectar al BMS de planta.',
      modelos: 'NFS2-640 · Fire-Lite ES-200X · FD851HT · Módulos de salida',
    },
    {
      num: '04',
      tipo: 'deteccion',
      titulo: 'Universidades y Espacios Educativos',
      desc: 'Campus universitarios, tecnológicos y complejos escolares con múltiples edificios y requerimiento de supervisión centralizada. La red de paneles NFS2-3030 bajo NCA-2 y el software ONYXWorks permiten gestionar todos los edificios desde un solo punto de monitoreo con generación automática de reportes NFPA 72.',
      modelos: 'NFS2-3030 · NCA-2 · ONYXWorks · SWIFT Wireless',
    },
  ],
  faqs: [
    {
      q: '¿Qué norma regula los sistemas de detección y alarma de incendio en México?',
      a: 'La NFPA 72 (National Fire Alarm and Signaling Code) es la norma de referencia internacional adoptada en México para el diseño, instalación, prueba y mantenimiento de sistemas de detección y alarma de incendio. La NOM-002-STPS-2010 exige sistemas de alarma en centros de trabajo y remite a la NFPA 72 para los requisitos técnicos. Los listados UL Listed y cUL de los equipos Notifier son reconocidos por las autoridades de Protección Civil y por las aseguradoras que operan en el país.',
    },
    {
      q: '¿Cuál es la diferencia entre un sistema convencional y uno direccionable?',
      a: 'En un sistema convencional, el panel identifica la zona (un circuito con varios detectores) donde se activó la alarma, pero no el detector específico. En un sistema direccionable, cada detector, módulo y dispositivo tiene una dirección única en el loop SLC: el panel indica exactamente cuál dispositivo generó la alarma, en qué piso y en qué zona. Esto acelera la respuesta, permite la evacuación selectiva y facilita el mantenimiento predictivo. Para edificios de más de 20 zonas, hospitales o cualquier proyecto donde se requiera identificación punto a punto, el sistema direccionable es obligatorio bajo NFPA 72.',
    },
    {
      q: '¿El sistema Notifier se integra con el BMS del edificio?',
      a: 'Sí. El NFS2-3030 con módulo de red y el software ONYXWorks se integran con sistemas BMS vía BACnet/IP o Modbus. Esto permite que ante una alarma de incendio el sistema coordine automáticamente: apagado de HVAC en la zona afectada, cierre de compuertas cortafuego, envío de elevadores al nivel de recepción, activación de presurización de escaleras y notificación al puesto de vigilancia y a la central de monitoreo. La integración debe diseñarse desde el inicio del proyecto para asegurar la compatibilidad de protocolos.',
    },
    {
      q: '¿Qué mantenimiento requiere un sistema de detección NFPA 72?',
      a: 'La NFPA 72 (Capítulo 14) exige prueba e inspección de todos los detectores y dispositivos de notificación al menos una vez al año, con registro documentado de cada prueba. Los sistemas Notifier generan el registro de eventos automáticamente en el historial del panel; sin embargo, la prueba física de cada detector —limpieza, prueba de sensibilidad y verificación de comunicación al panel— debe realizarse por un técnico certificado. Realizamos el mantenimiento preventivo anual con refacciones originales y entregamos el informe NFPA 72 para los trámites de PC y aseguradoras.',
    },
  ],
  ctaKicker: 'NFPA 72 · UL Listed · Direccionable',
  ctaTitleHtml: 'Detecta el incendio<br/>antes de que crezca.',
  waQuote: 'Hola, quiero cotizar un sistema de detección Honeywell Notifier NFPA 72 para mi proyecto.',
};

/* ════════════════════════════════════════════════════════════════════════════
   KIDDE FENWAL — Supresión Agente Limpio NFPA 2001
   ════════════════════════════════════════════════════════════════════════════ */
const kiddeFenwal: EquipmentBrand = {
  categorySlug: 'sistemas-ci',
  slug: 'fm200-novec',
  brand: 'Kidde Fenwal',
  brandLabel: 'Kidde Fenwal',
  crossDesc: 'Supresión agente limpio FM-200 · Novec 1230 · NFPA 2001',
  eyebrow: 'Kidde Fenwal · Carrier Global',
  heroTitleTop: 'Sistemas de Agente Limpio',
  heroTitleAccent: 'supresión NFPA 2001.',
  heroLead:
    'Línea completa de sistemas de supresión por agente limpio Kidde Fenwal en México. FM-200, Novec 1230, Ecaro-25 y CO₂ para protección de data centers, salas de UPS, cuartos de control, archivos y activos de misión crítica sin daño colateral al equipo protegido.',
  heroIntro: [
    'Los sistemas de supresión por agente limpio son la solución cuando el agua y la espuma no son una opción: data centers, cuartos de UPS, salas de control, archivos históricos, laboratorios y centros de cómputo donde el agente extintor debe suprimir el incendio sin dañar el equipo, sin dejar residuo y sin requerir desalojo prolongado para limpieza. Kidde Fenwal, bajo Carrier Global Corporation, es uno de los fabricantes de referencia en agentes limpios NFPA 2001 con más de un siglo de historia en protección contra incendio.',
    'La selección del agente correcto —FM-200 (HFC-227ea), Novec 1230 (FK-5-1-12) o Ecaro-25 (HFC-125)— depende de la concentración de diseño requerida, el volumen del espacio protegido, los compromisos ESG de la organización y el régimen de inspección NFPA 2001. En México, los data centers de colocación (colocation), los bancos, las aseguradoras y la industria farmacéutica son los principales usuarios de estos sistemas. Asesoramos la selección del agente, dimensionamos el sistema y ejecutamos la puesta en servicio con prueba de descarga documentada.',
  ],
  heroBadges: [
    'NFPA 2001',
    'UL Listed',
    'FM Approved',
    'FM-200 HFC-227ea',
    'Novec 1230 FK-5-1-12',
    'Sin residuo',
    'Misión crítica',
    'Carrier Global',
  ],
  seoTitle: 'Agente Limpio FM-200 · Novec 1230 Kidde Fenwal NFPA 2001 — México',
  seoDescription:
    'Sistemas de supresión agente limpio Kidde Fenwal en México: FM-200 HFC-227ea, Novec 1230 FK-5-1-12, Ecaro-25 HFC-125 y CO₂. NFPA 2001. Sin residuo, sin daño al equipo. Data centers, salas de control, archivos.',
  founding: '1917',
  parentOrg: { name: 'Carrier Global Corporation', ticker: 'NYSE:CARR' },
  stats: [
    { valor: 'NFPA 2001', etiq: 'Norma de diseño agente limpio' },
    { valor: '< 10 s', etiq: 'Tiempo de descarga típico' },
    { valor: '0', etiq: 'Residuo tras la descarga' },
    { valor: '32', etiq: 'Estados con cobertura en México' },
  ],
  credenciales: [
    {
      n: '01',
      t: 'Pioneros en supresión por agente limpio',
      d: 'Kidde Fenwal lleva más de un siglo en protección contra incendio y fue uno de los primeros fabricantes en desarrollar alternativas al halón tras el Protocolo de Montreal. Su gama FM-200, Novec 1230 y Ecaro-25 define el estándar en sistemas de agente limpio para misión crítica bajo la NFPA 2001.',
    },
    {
      n: '02',
      t: 'Cero residuo — sin daño al equipo protegido',
      d: 'A diferencia del agua, la espuma y el polvo químico, los agentes limpios se evaporan sin dejar residuo tras la descarga. El equipo de cómputo, los servidores, los archivos físicos y los instrumentos de precisión quedan intactos y el espacio puede reutilizarse sin limpieza prolongada, minimizando el tiempo de inactividad.',
    },
    {
      n: '03',
      t: 'Portafolio completo: FM-200, Novec 1230 y Ecaro-25',
      d: 'Kidde Fenwal ofrece los tres agentes limpios dominantes: FM-200 (HFC-227ea, el más instalado globalmente), Novec 1230 (FK-5-1-12, el de menor GWP, preferido para proyectos ESG) y Ecaro-25 (HFC-125, económico para transición de halon). La selección depende del volumen, la concentración de diseño NFPA 2001 y los compromisos ambientales del cliente.',
    },
    {
      n: '04',
      t: 'Diseño, suministro y puesta en servicio certificada',
      d: 'Realizamos el cálculo de diseño NFPA 2001 (concentración de diseño, volumen corregido por temperatura, tubing sizing y presión de descarga), el suministro completo de cilindros, válvulas, tubing y boquillas, y la puesta en servicio con prueba de descarga documentada. Para data centers y ambientes regulados generamos el informe de cumplimiento NFPA 2001 por partida.',
    },
  ],
  linesIntro:
    'Kidde Fenwal ofrece el portafolio más completo de agentes limpios NFPA 2001: el FM-200 como estándar de industria, el Novec 1230 para proyectos con compromiso ESG de GWP bajo, el Ecaro-25 como alternativa económica y el CO₂ para aplicaciones de alto riesgo industrial. Un solo proveedor, todos los agentes.',
  lineas: [
    {
      tipo: 'agente-ci',
      badge: 'NFPA 2001 · HFC-227ea',
      titulo: 'FM-200 (HFC-227ea)',
      modelos: 'Kidde FM-200 · SHP-Pro',
      desc: 'El agente limpio más instalado en el mundo. El FM-200 (heptafluoropropano, HFC-227ea) actúa por enfriamiento químico y dilución de oxígeno, suprimiendo el incendio en menos de 10 segundos a concentraciones de diseño de 7–8 % v/v según NFPA 2001. Protege datos, electrónica, archivos y activos de valor sin dañar ni dejar residuo. Miles de instalaciones activas en México en data centers, bancos, hospitales y plantas industriales.',
      tech: 'Concentración diseño 7–8% v/v · Descarga < 10 s · ODP = 0 · UL Listed · FM Approved · NFPA 2001',
    },
    {
      tipo: 'agente-ci',
      badge: 'NFPA 2001 · FK-5-1-12',
      titulo: 'Novec 1230 (FK-5-1-12)',
      modelos: 'Kidde Sapphire · Fike Novec',
      desc: 'El agente limpio de menor Potencial de Calentamiento Global (GWP = 1 vs. 3,220 del FM-200). El Novec 1230 (perfluoro-2-metil-3-pentanona, FK-5-1-12) actúa principalmente por enfriamiento físico y se evapora sin residuo a una concentración de diseño de 5–6 % v/v. Es la opción preferida para proyectos con metas ESG, certificaciones LEED y organizaciones que buscan reducir su huella de carbono sin comprometer la protección.',
      tech: 'Concentración diseño 5–6% v/v · GWP = 1 · ODP = 0 · Descarga < 10 s · UL Listed · FM Approved · NFPA 2001',
    },
    {
      tipo: 'agente-ci',
      badge: 'NFPA 2001 · HFC-125',
      titulo: 'Ecaro-25 (HFC-125)',
      modelos: 'Kidde Ecaro-25 · Fike FE-25',
      desc: 'Pentafluoroetano (HFC-125) en sistema de supresión de alta presión. El Ecaro-25 ofrece una concentración de diseño de 8.7 % v/v y es una alternativa económicamente competitiva al FM-200 para nuevas instalaciones o para la transición de sistemas Halón 1301. Actúa por enfriamiento físico y dilución de oxígeno, con descarga rápida y sin residuo, en espacios de servidores, cuartos de control y archivos de tamaño medio.',
      tech: 'Concentración diseño 8.7% v/v · Alta presión · Transición de Halón · UL Listed · FM Approved · NFPA 2001',
    },
    {
      tipo: 'cbrn',
      badge: 'NFPA 2001 · Misión Crítica',
      titulo: 'CO₂ y Sistemas de Alta Integridad',
      modelos: 'Kidde CO₂ Total Flooding · AutoPulse',
      desc: 'Sistemas de dióxido de carbono (CO₂) en inundación total para protección de turbinas, generadores, transformadores de gran potencia, bodegas de pintura y ocupaciones de alto riesgo industrial donde otros agentes no son efectivos. El CO₂ actúa por sofocación a concentraciones del 34 % v/v; requiere diseño de integridad de recinto NFPA 2001 (door fan test) y protocolo estricto de evacuación antes de la descarga.',
      tech: 'Concentración 34% v/v · Inundación total / parcial · NFPA 12 / NFPA 2001 · UL Listed · Protocolo de evacuación requerido',
    },
  ],
  flagship: 'FM-200',
  anatomiaIntro:
    'Un sistema de agente limpio FM-200 de Kidde Fenwal tiene cinco componentes clave que trabajan juntos para detectar, decidir y descargar el agente en menos de 30 segundos desde la ignición. Conocer cada componente es fundamental para diseñar un sistema confiable y verificable bajo NFPA 2001.',
  anatomia: [
    {
      t: 'Cilindro de almacenamiento a presión',
      d: 'Recipiente de acero inoxidable o de alta resistencia presurizado con nitrógeno (en FM-200 a 360 psi o 600 psi según variante) que almacena el agente líquido. El tamaño del cilindro se calcula en función del volumen del recinto, la concentración de diseño NFPA 2001 y la temperatura mínima de operación. Los cilindros Kidde tienen sello de fábrica UL y FM con fecha de prueba hidrostática.',
    },
    {
      t: 'Válvula de piloto (solenoid valve)',
      d: 'Válvula eléctrica que retiene el agente en el cilindro en condición de espera. Al recibir la señal de activación del panel AutoPulse, la válvula solenoide libera el agente en < 0.5 s. El diseño de válvula Kidde incluye actuador manual de emergencia, puerto de alivio de sobrepresión y indicador visual de posición abierto/cerrado.',
    },
    {
      t: 'Sistema de tubing y boquillas de descarga',
      d: 'Red de tuberías de acero inoxidable (o cobre en instalaciones especiales) y boquillas de orificio calibrado que distribuyen el agente uniformemente en el volumen del recinto dentro del tiempo de descarga especificado en NFPA 2001 (≤ 10 s para FM-200). El cálculo de tubing —diámetros, longitudes, pérdidas, distribución de boquillas— es el proceso central del diseño del sistema y se realiza con software de fabricante.',
    },
    {
      t: 'Panel de control AutoPulse',
      d: 'Panel de control dedicado al sistema de supresión que recibe la señal de detección (doble knock de dos detectores independientes), activa la secuencia de pre-descarga (alarma de evacuación, cierre de compuertas y HVAC) y da la señal de activación al solenoid tras el retardo programado (típicamente 30 s). El AutoPulse registra todos los eventos con marca de tiempo para el informe de cumplimiento NFPA 2001.',
    },
    {
      t: 'Sistema de detección VESDA/ASD para disparo dual-knock',
      d: 'La protección de misión crítica (data centers, salas de UPS) utiliza detección por aspiración (Air Sampling Detection, ASD) tipo VESDA que detecta partículas de combustión en etapa incipiente —mucho antes de que el humo sea visible— para activar el primer nivel de alarma. Un segundo detector de respaldo confirma la alarma (protocolo dual-knock) antes de iniciar la secuencia de descarga, eliminando los disparos accidentales por falsas alarmas.',
    },
  ],
  comparativa: [
    {
      modelo: 'FM-200 HFC-227ea',
      tipo: 'agente-ci',
      rec: true,
      norma: 'NFPA 2001',
      tipo_sis: 'HFC — Enfriamiento químico',
      cobertura: '7–8% v/v',
      listado: 'UL Listed · FM Approved',
      ideal: 'Data centers · bancos · salas de control',
    },
    {
      modelo: 'Novec 1230 FK-5-1-12',
      tipo: 'agente-ci',
      rec: false,
      norma: 'NFPA 2001',
      tipo_sis: 'FK — Enfriamiento físico',
      cobertura: '5–6% v/v',
      listado: 'UL Listed · FM Approved',
      ideal: 'Proyectos ESG · LEED · GWP mínimo',
    },
    {
      modelo: 'HFC-125 Ecaro-25',
      tipo: 'agente-ci',
      rec: false,
      norma: 'NFPA 2001',
      tipo_sis: 'HFC — Alta presión',
      cobertura: '8.7% v/v',
      listado: 'UL Listed · FM Approved',
      ideal: 'Transición de Halón · costo optimizado',
    },
    {
      modelo: 'CO₂ Total Flooding',
      tipo: 'cbrn',
      rec: false,
      norma: 'NFPA 12 / NFPA 2001',
      tipo_sis: 'Inorgánico — Sofocación',
      cobertura: '34% v/v',
      listado: 'UL Listed · FM Approved',
      ideal: 'Turbinas · generadores · alto riesgo industrial',
    },
  ],
  comparativaNote: NOTA_SCI,
  guia: [
    {
      n: '01',
      t: 'Verifica primero que el recinto es apto para agente limpio: el diseño NFPA 2001 requiere un recinto con integridad suficiente para retener el agente durante el tiempo de retención (típicamente 10 min). Antes de seleccionar el agente, realiza el door fan test (prueba de presurización del recinto) para confirmar que las pérdidas de aire son menores al umbral NFPA 2001. Un recinto con fugas excesivas no puede protegerse eficazmente con agente limpio.',
    },
    {
      n: '02',
      t: 'Selecciona el agente según los criterios del proyecto: FM-200 si el objetivo es el agente más instalado y con mayor soporte de refacción en México; Novec 1230 si el proyecto tiene metas ESG o certificación LEED y GWP mínimo es prioritario; Ecaro-25 si el presupuesto es el factor principal o si se sustituye un sistema de Halón 1301 existente. Los tres son NFPA 2001 y UL/FM.',
    },
    {
      n: '03',
      t: 'Diseña el sistema de detección para protocolo dual-knock: la NFPA 2001 y las mejores prácticas de la industria exigen que la activación de la descarga requiera la confirmación de al menos dos detectores independientes (cross-zoning o dual-knock) para evitar disparos accidentales. En data centers y salas de UPS, considera detección por aspiración (ASD/VESDA) como primer nivel por su capacidad de detección incipiente.',
    },
    {
      n: '04',
      t: 'Documenta el sistema completo para cumplimiento NFPA 2001 y auditorías: memoria de cálculo hidráulico firmada, resultado del door fan test, certificado de peso de cilindros (carga del agente), registro de la prueba de descarga (real o simulada) y plan de mantenimiento anual. Para ambientes regulados (bancos, CNBV, farmacéutica, IMSS) el expediente técnico es requisito de la auditoría regulatoria.',
    },
  ],
  segmentosIntro:
    'Los sistemas de agente limpio Kidde Fenwal son la primera opción de ingenieros de protección contra incendio, operadores de data centers, bancos, aseguradoras y empresas industriales que necesitan suprimir el incendio en espacios de misión crítica sin dañar el equipo ni interrumpir la operación más allá del tiempo de descarga.',
  segmentos: [
    {
      num: '01',
      tipo: 'agente-ci',
      titulo: 'Data Centers y Colocation',
      desc: 'Data centers propios y de colocación (colocation) donde los servidores, el almacenamiento y la red son activos de alto valor y la interrupción del servicio tiene costo por segundo. El FM-200 o Novec 1230 suprime el incendio en < 10 s sin dañar el hardware, sin residuo y sin requerir evacuación de la sala de cómputo por limpieza tras la descarga.',
      modelos: 'Kidde FM-200 · Kidde Sapphire Novec · AutoPulse · VESDA ASD',
    },
    {
      num: '02',
      tipo: 'agente-ci',
      titulo: 'Bancos, Aseguradoras y Fintech',
      desc: 'Instituciones financieras con salas de servidores, bóvedas de cintas de respaldo, cuartos de UPS y archivos físicos de valor legal. Las aseguradoras internacionales exigen sistemas de agente limpio UL Listed y FM Approved en las pólizas de grandes riesgos; el FM-200 Kidde es el agente más aceptado en las especificaciones de FM Global.',
      modelos: 'Kidde FM-200 · Kidde Ecaro-25 · AutoPulse · Detección dual-knock',
    },
    {
      num: '03',
      tipo: 'agente-ci',
      titulo: 'Industria Farmacéutica y Laboratorios',
      desc: 'Plantas de manufactura farmacéutica, laboratorios de investigación y áreas de almacenamiento de materias primas de alto valor donde la contaminación por agua, polvo o espuma destruiría el lote y activaría protocolos de retiro de producto. El agente limpio suprime sin contaminar y permite continuar operaciones tras verificar el recinto.',
      modelos: 'Kidde Sapphire Novec 1230 · Kidde FM-200 · AutoPulse · ASD',
    },
    {
      num: '04',
      tipo: 'cbrn',
      titulo: 'Infraestructura Eléctrica y Turbinas',
      desc: 'Subestaciones eléctricas, salas de transformadores de gran potencia, cuartos de generadores y turbinas a gas donde el CO₂ de inundación total es el agente estándar por su capacidad de sofocación ante combustibles de alta densidad energética. El diseño incluye protocolo estricto de evacuación, interlock de HVAC y alarmas previas a la descarga.',
      modelos: 'Kidde CO₂ Total Flooding · AutoPulse · Detección de calor de alta temperatura',
    },
  ],
  faqs: [
    {
      q: '¿Qué norma rige los sistemas de supresión por agente limpio en México?',
      a: 'La NFPA 2001 (Standard on Clean Agent Fire Extinguishing Systems) es la norma de referencia para el diseño, instalación, prueba y mantenimiento de sistemas de agente limpio en México. Define los requisitos de concentración de diseño de cada agente (FM-200, Novec 1230, Ecaro-25), el procedimiento de door fan test para verificar la integridad del recinto, y los requisitos de prueba de descarga y mantenimiento. La NFPA 12 aplica adicionalmente para sistemas de CO₂. Los equipos Kidde Fenwal cuentan con listado UL Listed y FM Approved, reconocidos por las aseguradoras y por Protección Civil.',
    },
    {
      q: '¿FM-200 o Novec 1230 — cuál elijo?',
      a: 'Ambos son agentes limpios NFPA 2001 sin residuo y con listado UL/FM. La diferencia clave es el impacto ambiental y la concentración de diseño. El FM-200 tiene un GWP de ~3,220 y una concentración de diseño de 7–8% v/v; es el más instalado globalmente y el más disponible en México para recarga y refacciones. El Novec 1230 tiene un GWP de apenas 1 (prácticamente neutro) y diseña a 5–6% v/v, lo que puede reducir el número de cilindros en recintos grandes. Si tu organización tiene metas ESG, certificación LEED o políticas de reducción de GWP, el Novec 1230 es la opción correcta. Si priorizas costo de instalación y mayor disponibilidad de recarga en el mercado mexicano, el FM-200 es la opción dominante.',
    },
    {
      q: '¿Qué es el door fan test y por qué es obligatorio?',
      a: 'El door fan test (prueba de infiltración/exfiltración) es un procedimiento que mide la tasa de pérdida de aire de un recinto presurizado para determinar si el espacio puede retener el agente limpio durante el tiempo de retención mínimo especificado en la NFPA 2001 (generalmente 10 minutos). Si el recinto tiene fugas excesivas por ductos de HVAC sin compuertas, huecos en losas, pasos de cables sin sellar o puertas sin empaque, el agente se disipará antes de suprimir el incendio. El door fan test es el primer paso del diseño: si el recinto no pasa, hay que sellar antes de dimensionar el sistema.',
    },
    {
      q: '¿Los sistemas de agente limpio requieren evacuación antes de la descarga?',
      a: 'Sí, siempre. Los agentes limpios HFC (FM-200, Ecaro-25) y el Novec 1230 suprimen el incendio a concentraciones que pueden causar desorientación o pérdida de conciencia si el personal permanece en el recinto durante la descarga. El panel AutoPulse activa una alarma de evacuación previa al disparo (pre-descarga) con un retardo programable (30–60 s) para permitir que el personal salga antes de la descarga. El CO₂, por su parte, actúa por sofocación y es letal a la concentración de diseño (34% v/v), por lo que requiere un protocolo de evacuación estricto e interlocks de inhabilitación del sistema si hay personal en el recinto. En todos los casos, el diseño debe incluir señalización de emergencia, alarmas acústicas y visuales, y capacitación del personal de las instalaciones.',
    },
  ],
  ctaKicker: 'NFPA 2001 · Sin residuo · Misión crítica',
  ctaTitleHtml: 'Protege tus activos críticos<br/>sin dañar lo que proteges.',
  waQuote: 'Hola, quiero cotizar un sistema de agente limpio FM-200 o Novec 1230 NFPA 2001 para mi proyecto.',
};

/* ════════════════════════════════════════════════════════════════════════════
   RED HIDRÁULICA — Gabinetes CI, Bombas NFPA 20 y Válvulas de Control
   ════════════════════════════════════════════════════════════════════════════ */
const redHidraulica: EquipmentBrand = {
  categorySlug: 'sistemas-ci',
  slug: 'red-hidraulica',
  brand: 'Red Hidráulica',
  brandLabel: 'Red Hidráulica CI',
  crossDesc: 'Gabinetes CI · Bombas NFPA 20 · Válvulas OS&Y — Red hidráulica completa',
  eyebrow: 'NFPA 20 · NFPA 14 · NOM-002-STPS · UL Listed · FM Approved',
  heroTitleTop: 'Red Hidráulica',
  heroTitleAccent: 'completa NFPA 20.',
  heroLead: 'La red hidráulica es la columna vertebral de cualquier sistema contra incendio: gabinetes con manguera, bombas NFPA 20 y válvulas de control supervisadas. Sin una red hidráulica correctamente dimensionada, diseñada y supervisada, los rociadores y los sistemas de agente limpio no pueden funcionar. Seis componentes clave para el proyecto completo.',
  heroIntro: [
    'El diseño de la red hidráulica define la presión y el caudal disponibles para cada rociador, gabinete y sistema de agente limpio del proyecto. Una bomba subdimensionada o una válvula sin supervisión puede invalidar toda la certificación del sistema y dejar expuesta la instalación ante aseguradoras y autoridades. La NFPA 20 establece los criterios de diseño, instalación y prueba de la bomba; la NFPA 14 los de la red de gabinetes; y la NOM-002-STPS los requisitos mínimos de dotación en el mercado mexicano.',
    'Ofrecemos la red hidráulica completa: gabinetes Tipo I y Tipo II con manguera certificada NMX-N-009, bombas jockey, principal eléctrica y diesel de emergencia con controladores UL 218, y válvulas OS&Y supervisadas con switch tamper. Diseño hidráulico, suministro de materiales, instalación y pruebas de aceptación NFPA 20 en un solo proveedor.',
  ],
  heroBadges: ['NFPA 20', 'NFPA 14', 'NOM-002-STPS', 'UL Listed', 'FM Approved', 'Gabinetes · Bombas · Válvulas', 'Diseño + Suministro + Instalación'],
  seoTitle: 'Red Hidráulica Contra Incendio — Gabinetes CI, Bombas NFPA 20 y Válvulas · México',
  seoDescription: 'Red hidráulica contra incendio en México: gabinetes CI Tipo I y II (NOM-002-STPS), bombas jockey, eléctrica y diesel NFPA 20 (UL Listed/FM Approved) y válvulas OS&Y supervisadas. Diseño, suministro e instalación.',
  stats: [
    { valor: 'NFPA 20', etiq: 'Norma de bombas CI' },
    { valor: 'UL · FM', etiq: 'Doble listado en equipos principales' },
    { valor: '8 h', etiq: 'Autonomía mínima diesel NFPA 20' },
    { valor: '30 s', etiq: 'Arranque máx. bomba principal NFPA 20' },
  ],
  credenciales: [
    {
      n: '01',
      t: 'Diseño hidráulico NFPA 20 con memoria de cálculo',
      d: 'La selección de la bomba y el dimensionamiento de la red requieren una memoria de cálculo que relacione el caudal de demanda (de los rociadores, gabinetes o sistemas especiales), las pérdidas de presión en la red y la curva de la bomba. Generamos la memoria firmada por DRO para cumplimiento ante aseguradoras y Protección Civil.',
    },
    {
      n: '02',
      t: 'Bombas UL Listed y FM Approved',
      d: 'La NFPA 20 exige que todas las bombas contra incendio estén listadas por UL o aprobadas por FM. Sin el listado, la bomba no puede acreditarse ante aseguradoras internacionales. Suministramos únicamente bombas con listado vigente y controladores UL 218.',
    },
    {
      n: '03',
      t: 'Supervisión de válvulas con tamper switch',
      d: 'La NFPA 13, 14 y 25 exigen que todas las válvulas de control estén supervisadas — conectadas al panel FACP para generar alarma si se cierran sin autorización. El tamper switch es el requisito que más frecuentemente falta en sistemas existentes y que las aseguradoras detectan en auditorías.',
    },
    {
      n: '04',
      t: 'Prueba de aceptación NFPA 20 documentada',
      d: 'Al terminar la instalación realizamos la prueba de aceptación NFPA 20: medición de caudal y presión en la curva de la bomba, verificación de arranque automático, prueba del diesel bajo carga y reporte firmado. El reporte es el entregable que solicita el inspector de la aseguradora.',
    },
  ],
  linesIntro: 'La red hidráulica se compone de tres subsistemas independientes pero complementarios: gabinetes de manguera para primera respuesta, sala de bombas NFPA 20 para presión y caudal sostenidos, y válvulas de control supervisadas para sectorización y monitoreo. Los tres deben diseñarse juntos para garantizar el desempeño del sistema completo.',
  lineas: [
    {
      tipo: 'red-hidraulica',
      badge: 'NFPA 14 · NOM-002-STPS',
      titulo: 'Gabinetes de manguera CI',
      modelos: 'Tipo I 30 m · Tipo II 20 m',
      desc: 'Primera respuesta manual ante un incendio incipiente. El gabinete Tipo I con manguera 38mm × 30m para naves industriales y bodegas; el Tipo II con manguera 25mm × 20m para pasillos, hoteles y hospitales. Certificados NOM-002-STPS y NMX-N-009.',
      tech: 'Manguera NMX-N-009 · Válvula ángulo bronce · Pitón regulable 3 posiciones',
    },
    {
      tipo: 'red-hidraulica',
      badge: 'NFPA 20 · UL Listed',
      titulo: 'Sala de bombas NFPA 20',
      modelos: 'Jockey 5 HP · Eléctrica 20 HP · Diesel 40 HP',
      desc: 'El corazón de cualquier sistema de rociadores o agente limpio. Bomba jockey para mantenimiento de presión, bomba eléctrica principal para operación normal y bomba diesel de emergencia para blackout. La NFPA 20 define la selección y los tiempos de arranque para cada una.',
      tech: 'Controlador UL 218 · Arranque < 30 s · Registrador de eventos · Prueba NFPA 20',
    },
    {
      tipo: 'red-hidraulica',
      badge: 'NFPA 20 · NFPA 13',
      titulo: 'Válvulas de control supervisadas',
      modelos: 'OS&Y 2" a 12" · Tamper switch UL',
      desc: 'Toda válvula de control de la red CI debe estar supervisada — conectada al FACP para detectar cierres no autorizados. La válvula OS&Y con tamper switch es el estándar NFPA 13, 14 y 25. Sin supervisión, la aseguradora no puede emitir la póliza.',
      tech: 'Vástago exterior visible · Tamper UL Listed · Hierro dúctil epoxi · 2" a 12"',
    },
  ],
  flagship: 'bomba-principal-electrica-20hp',
  anatomiaIntro: 'La bomba principal eléctrica NFPA 20 es el equipo más crítico de la sala de bombas — su correcto dimensionamiento, instalación y prueba determinan si el sistema completo cumple o no la norma. Un error en la curva de la bomba invalida toda la memoria de cálculo.',
  anatomia: [
    { t: 'Controlador UL 218 listado', d: 'El controlador es tan importante como la bomba. La NFPA 20 exige que el controlador sea UL Listed independientemente de la bomba — un controlador genérico invalida el listado del conjunto aunque la bomba sea UL Listed.' },
    { t: 'Arranque en menos de 30 segundos', d: 'La NFPA 20 exige arranque completo en menos de 30 segundos desde la caída de presión que activa el presostato. En la prueba de aceptación, el inspector cronometra este arranque — si supera los 30 s, el sistema no pasa la prueba.' },
    { t: 'Registrador de arranques', d: 'El controlador UL 218 registra cada arranque con fecha, hora y duración. El registro es evidencia documental para las pruebas semanales de arranque manual que la NFPA 25 requiere para el programa de mantenimiento.' },
    { t: 'Curva de la bomba UL Listed', d: 'La curva de la bomba (caudal vs presión) debe estar dentro de los parámetros listados por UL. Si la instalación cambia el diámetro de la descarga o agrega pérdidas no previstas, la bomba puede operar fuera de su curva listada, invalidando el listado.' },
    { t: 'Carcasa de hierro fundido con impulsor de bronce', d: 'El hierro fundido resiste la corrosión del agua estancada de la red; el bronce del impulsor es compatible con agua con cloro y sin tratamiento. La combinación es el estándar para bombas contra incendio en México.' },
    { t: 'Prueba de aceptación NFPA 20', d: 'Al terminar la instalación se realiza la prueba de aceptación: medición a caudal cero, caudal nominal (100%) y caudal de sobrecarga (150%). Los tres puntos de la curva medida deben coincidir con la curva listada. El reporte firmado es el entregable para la aseguradora.' },
  ],
  comparativa: [
    { modelo: 'Gabinete Tipo I 30m', tipo: 'red-hidraulica', norma: 'NFPA 14 · NOM-002-STPS', tipo_sis: 'Gabinete manguera 38mm', cobertura: '36 m de alcance', listado: 'NOM-002-STPS', ideal: 'Naves · bodegas industriales' },
    { modelo: 'Gabinete Tipo II 20m', tipo: 'red-hidraulica', norma: 'NFPA 14 · NOM-002-STPS', tipo_sis: 'Gabinete manguera 25mm', cobertura: '24 m de alcance', listado: 'NOM-002-STPS', ideal: 'Hoteles · hospitales · pasillos' },
    { modelo: 'Bomba Jockey 5 HP', tipo: 'red-hidraulica', norma: 'NFPA 20', tipo_sis: 'Bomba mantenimiento presión', cobertura: 'Red completa', listado: 'UL Listed', ideal: 'Presurización stand-by permanente' },
    { modelo: 'Bomba Eléctrica 20 HP', tipo: 'red-hidraulica', rec: true, norma: 'NFPA 20', tipo_sis: 'Bomba principal eléctrica', cobertura: 'Según memoria de cálculo', listado: 'UL Listed · FM Approved', ideal: 'Operación normal · rociadores · gabinetes' },
    { modelo: 'Bomba Diesel 40 HP', tipo: 'red-hidraulica', norma: 'NFPA 20', tipo_sis: 'Bomba emergencia diesel', cobertura: 'Según memoria de cálculo', listado: 'UL Listed · FM Approved', ideal: 'Blackout · fuente eléctrica no confiable' },
    { modelo: 'Válvula OS&Y + Tamper', tipo: 'red-hidraulica', norma: 'NFPA 20 · NFPA 13', tipo_sis: 'Válvula control supervisada', cobertura: '2" a 12" según red', listado: 'UL Listed · FM Approved', ideal: 'Control principal y sectorización CI' },
  ],
  comparativaLabel: 'Red Hidráulica completa — Gabinetes · Bombas · Válvulas',
  comparativaNote: '★ Recomendado = Bomba principal eléctrica, el equipo central de la sala de bombas NFPA 20 del que depende el funcionamiento de todo el sistema.',
  guia: [
    { n: '01', t: 'Define el tipo de riesgo y el área a proteger: el caudal y la presión requeridos por los rociadores o gabinetes determinan el dimensionamiento de la bomba principal conforme NFPA 20.' },
    { n: '02', t: 'Evalúa la confiabilidad de la fuente eléctrica: si el suministro eléctrico no es confiable (cortes frecuentes, zona sísmica, generador compartido), la NFPA 20 exige bomba diesel adicional.' },
    { n: '03', t: 'Verifica que todas las válvulas de control estén supervisadas con tamper switch conectado al FACP — es el requisito que las aseguradoras detectan primero en auditorías de sistemas existentes.' },
    { n: '04', t: 'Agenda las pruebas NFPA 25 anuales: arranque semanal manual, inspección trimestral de válvulas y prueba anual completa de la curva de la bomba. El incumplimiento puede invalidar la póliza de seguro.' },
  ],
  segmentosIntro: 'La red hidráulica es obligatoria en cualquier instalación con rociadores NFPA 13 o gabinetes NFPA 14. Cuatro segmentos de aplicación según la escala del proyecto y los requisitos de la aseguradora.',
  segmentos: [
    { num: '01', tipo: 'red-hidraulica', titulo: 'Edificios comerciales y de oficinas', desc: 'Centros comerciales, edificios de oficinas y hoteles donde la NOM-002-STPS y los requisitos de la aseguradora exigen gabinetes en cada nivel y bomba supervisada.', modelos: 'Gabinetes Tipo I · Tipo II · Jockey · Eléctrica' },
    { num: '02', tipo: 'red-hidraulica', titulo: 'Parques industriales y bodegas', desc: 'Naves de manufactura, almacenes de alta estiba y centros de distribución donde los arrendadores internacionales exigen NFPA 13 con sala de bombas UL Listed y FM Approved.', modelos: 'Bomba eléctrica 20 HP · Diesel · OS&Y supervisadas' },
    { num: '03', tipo: 'red-hidraulica', titulo: 'Hospitales y sector salud', desc: 'Los hospitales en México deben cumplir NOM-016-SSA3 que incluye sistema contra incendio con bomba supervisada y gabinetes en cada nivel. La continuidad de la operación exige bomba diesel de respaldo.', modelos: 'Gabinetes Tipo II · Bomba diesel · Válvulas supervisadas' },
    { num: '04', tipo: 'red-hidraulica', titulo: 'Instalaciones con requisito de seguro internacional', desc: 'Plantas con aseguradora del grupo FM Global, AIG, Swiss Re o MAPFRE donde los ingenieros de riesgo auditan la sala de bombas contra NFPA 20 y exigen listados UL y FM en cada equipo.', modelos: 'Sistema completo UL Listed · FM Approved · Prueba NFPA 20' },
  ],
  faqs: [
    { q: '¿Cuándo exige la NFPA 20 bomba diesel además de la eléctrica?', a: 'La NFPA 20 exige bomba diesel cuando: (1) la fuente de energía eléctrica no es confiable, (2) el inmueble supera una determinada clasificación de riesgo según la aseguradora, o (3) el proyecto tiene requisitos especiales de continuidad de operación. En la práctica, la mayoría de las aseguradoras internacionales (FM Global, AIG) exigen bomba diesel en todos los proyectos industriales sin excepción. La bomba diesel debe arrancar en menos de 30 segundos y tener autonomía mínima de 8 horas según NFPA 20.' },
    { q: '¿Cada cuánto deben hacerse las pruebas de la bomba NFPA 25?', a: 'La NFPA 25 establece tres niveles de prueba: (1) arranque manual semanal de 10 minutos — para verificar que la bomba arranca y no hay fugas; (2) inspección trimestral de válvulas y conexiones; (3) prueba anual completa de la curva de la bomba con medición de caudal y presión en tres puntos. Los registros de todas las pruebas deben conservarse mínimo 1 año y estar disponibles para el inspector de la aseguradora.' },
    { q: '¿Por qué todas las válvulas deben estar supervisadas?', a: 'Si una válvula de control se cierra (accidentalmente o por vandalismo) y el sistema de rociadores activa, el agua no llegará al incendio. La supervisi­ón con tamper switch conectado al FACP genera una alarma inmediata si cualquier válvula se cierra sin autorización, antes de que haya un incendio. La NFPA 13, 14 y 25 exigen supervisión en todas las válvulas de control — es el requisito que más frecuentemente falta en sistemas existentes y que las aseguradoras detectan en cada auditoría.' },
    { q: '¿Qué pasa si la bomba no pasa la prueba de aceptación NFPA 20?', a: 'Si la bomba no entrega el caudal y la presión especificados en la memoria de cálculo durante la prueba de aceptación, el sistema no puede certificarse ni entregarse al cliente. Las causas más frecuentes son: bomba subdimensionada, pérdidas de presión no calculadas en la red, o válvulas parcialmente cerradas. La corrección puede implicar sustituir la bomba o rediseñar parte de la red — un costo significativo que se evita con un diseño hidráulico correcto desde el inicio.' },
  ],
  ctaKicker: 'NFPA 20 · UL Listed · FM Approved · Diseño + Suministro + Instalación',
  ctaTitleHtml: 'La red hidráulica que certifica<br/>cualquier aseguradora internacional.',
  waQuote: 'Hola, quiero cotizar una red hidráulica contra incendio: bomba NFPA 20, gabinetes CI y válvulas supervisadas.',
};

/* ── Exportaciones ─────────────────────────────────────────────────────────── */
export const sistemasCIBrandList: EquipmentBrand[] = [tycoViking, honeywellNotifier, kiddeFenwal, redHidraulica];
