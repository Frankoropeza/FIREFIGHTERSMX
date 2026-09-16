/**
 * Marcas de Cámaras Térmicas — implementan EquipmentBrand (ver brandPages.ts).
 * Renderizadas por src/components/products/BrandPage.astro (mismo componente que el resto).
 *
 * Categoría 'camaras-termicas' (columnas: Resolución/Sensor/Autonomía/Peso/Ideal).
 * Familias por uso: estructural (búsqueda y rescate) · usar (personal) · mando (grabación) · industrial (inspección).
 */
import type { EquipmentBrand } from './brandPages';

const NOTA_TIC =
  '* NFPA 1930 (2025) integró a la NFPA 1801; la certificación aplica por modelo (p. ej. FLIR K85-N y Bullard NXT Pro). Resolución del sensor en píxeles; rango de temperatura y autonomía nominales según modelo y uso.';

/* ════════════════════════════════════════════════════════════════════════════
   FLIR
   ════════════════════════════════════════════════════════════════════════════ */
const flir: EquipmentBrand = {
  categorySlug: 'camaras-termicas',
  slug: 'flir',
  brand: 'FLIR',
  brandLabel: 'FLIR',
  crossDesc: 'Imagen térmica · K-Series · FSX · NFPA 1930',
  eyebrow: 'FLIR · Imagen Térmica · Distribuidor Autorizado MX',
  heroTitleTop: 'Cámaras FLIR',
  heroTitleAccent: 'imagen térmica NFPA.',
  heroLead:
    'Distribuidor autorizado de cámaras térmicas FLIR en México. Las 4 categorías —búsqueda y rescate, personal, mando e inspección industrial— con tecnología FSX, certificación NFPA 1930 y entrega en CDMX.',
  heroIntro: [
    'FLIR —parte de Teledyne— desarrolla sensores para defensa, industria y bomberos. Su línea K para el servicio de incendios incorpora FSX (Flexible Scene Enhancement), que añade detalle de bordes en tiempo real sobre la imagen térmica.',
    'En visibilidad cero, la imagen térmica es la diferencia entre buscar y encontrar. Distribuimos la gama FLIR para bomberos —K75 y K85-N, esta última certificada NFPA 1930— más la T560 para inspección industrial.',
  ],
  heroBadges: ['NFPA 1930', 'FSX', '320×240 px', 'Grabación', 'Imagen térmica', 'Distribuidor autorizado MX'],
  seoTitle: 'Cámaras Térmicas FLIR NFPA 1930 — K-Series · México',
  seoDescription:
    'Cámaras térmicas FLIR en México: K75 búsqueda y rescate, K75 para uso operativo, K85-N para mando e inspección industrial T560. Tecnología FSX. Distribuidor autorizado · stock CDMX.',
  founding: '1978',
  parentOrg: { name: 'Teledyne FLIR LLC' },
  stats: [
    { valor: 'FLIR', etiq: 'Imagen térmica' },
    { valor: 'FSX', etiq: 'Realce de escena en tiempo real' },
    { valor: 'NFPA 1930', etiq: 'Certificación de imagen térmica' },
    { valor: '32', etiq: 'Estados con cobertura' },
  ],
  credenciales: [
    { n: '01', t: 'Imagen térmica para múltiples usos', d: 'FLIR (Teledyne) desarrolla sensores térmicos para defensa, industria y bomberos. Su línea incluye cámaras para servicio de incendios e inspección industrial.' },
    { n: '02', t: 'FSX — detalle que salva tiempo', d: 'La tecnología FSX (Flexible Scene Enhancement) añade detalle de bordes en tiempo real sobre la imagen térmica, mejorando la percepción de estructuras, víctimas y rutas en humo denso sin perder la lectura de calor.' },
    { n: '03', t: 'Gama completa, una sola marca', d: 'Desde la K75 para búsqueda y rescate hasta la K85-N de mando, más cámaras de inspección industrial de alta resolución. Una sola relación de distribuidor para todo el espectro.' },
    { n: '04', t: 'Certificación NFPA 1930 y stock CDMX', d: 'Los modelos estructurales cumplen NFPA 1930 —el estándar que garantiza legibilidad, durabilidad e interfaz uniforme en combate. Stock de los modelos clave con entrega en 24–48 h y demostración en sitio sin costo.' },
  ],
  linesIntro:
    'FLIR cubre el espectro de imagen térmica desde un solo proveedor: búsqueda y rescate estructural, cámara personal por bombero, modelo de mando con grabación e inspección industrial de alta resolución. Una sola relación de distribución para toda la flota de cámaras.',
  lineas: [
    { tipo: 'estructural', badge: '320×240 · FSX', titulo: 'Búsqueda y Rescate', modelos: 'FLIR K75', desc: 'Cámara estructural para localización de víctimas y orientación en humo. Sensor de 320×240 px con FSX y rango de −20 a 650 °C.', tech: 'FSX · 320×240 px · −20 a 650 °C · ~4 h' },
    { tipo: 'usar', badge: 'Wi-Fi · Personal', titulo: 'Cámara Personal', modelos: 'FLIR K75', desc: 'Cámara para visión en humo y transmisión Wi-Fi a la app Flir Responder. Conciencia situacional por elemento.', tech: 'FSX · 320×240 px · Wi-Fi · ~4 h' },
    { tipo: 'mando', badge: 'NFPA 1930 · 640×480', titulo: 'Mando y Documentación', modelos: 'FLIR K85-N', desc: 'Cámara con transmisión Wi-Fi a Flir Responder y certificación NFPA 1930 (2025). Rango de −20 a 650 °C para operaciones de mando.', tech: 'Wi-Fi · 640×480 px · −20 a 650 °C · NFPA 1930' },
    { tipo: 'industrial', badge: 'Inspección · 640×480', titulo: 'Inspección Industrial', modelos: 'FLIR T560', desc: 'Cámara de inspección industrial de alta resolución para brigadas de instalaciones, refinería y mantenimiento predictivo. Lente giratoria, enfoque automático láser y medición de temperatura precisa.', tech: '640×480 px · Lente giratoria · Enfoque láser · Informes' },
  ],
  flagship: 'K85-N',
  anatomiaIntro:
    'La FLIR K85-N combina sensor y FSX para búsqueda y rescate. Estos seis elementos explican su funcionamiento en visibilidad cero.',
  anatomia: [
    { t: 'Sensor microbolómetro VOx', d: 'Detecta la radiación infrarroja sin contacto y la convierte en imagen térmica, con un rango de -20 a 650 °C que cubre desde la víctima hasta el fuego desarrollado.' },
    { t: 'Tecnología FSX', d: 'Añade detalle de bordes y textura en tiempo real sobre la imagen térmica, mejorando la percepción de estructuras y rutas sin perder la lectura de temperatura.' },
    { t: 'Pantalla de alto brillo', d: 'Legible en humo denso y a plena luz, con modos de color (escala de grises, hierro, arcoíris) para búsqueda, sobrehaul e identificación de puntos calientes.' },
    { t: 'Carcasa para servicio', d: 'Diseñada para el uso de una cámara térmica en operaciones de servicio de incendios.' },
    { t: 'Operación con guante', d: 'Botón único y ergonomía pensada para operarse con guante estructural puesto, sin menús complejos que distraigan en la zona caliente.' },
    { t: 'Batería de servicio', d: 'Autonomía de referencia de ~4 horas con baterías intercambiables y cargador vehicular opcional para mantener la cámara siempre lista en la unidad.' },
  ],
  comparativa: [
    { modelo: 'FLIR K75', tipo: 'estructural', resolucion: '320×240 px', sensor: '−20 a 650 °C', autonomia: '~4 h', peso: '—', ideal: 'Búsqueda y rescate estructural', rec: false },
    { modelo: 'FLIR K75', tipo: 'usar', resolucion: '320×240 px', sensor: '−20 a 650 °C', autonomia: '~4 h', peso: '—', ideal: 'Transmisión Wi-Fi a la app Flir Responder', rec: false },
    { modelo: 'FLIR K85-N', tipo: 'mando', resolucion: '640×480 px', sensor: '−20 a 650 °C', autonomia: '~4 h', peso: '—', ideal: 'Mando y documentación', rec: true },
    { modelo: 'FLIR T560', tipo: 'industrial', resolucion: '640×480 px', sensor: '−20 a 120 / 0 a 650 / 300 a 1500 °C', autonomia: '~4 h', peso: '1.4 kg', ideal: 'Inspección industrial de detalle', rec: false },
  ],
  comparativaNote: NOTA_TIC,
  guia: [
    { n: '01', t: 'Define el uso dominante: búsqueda y rescate estructural → K75; transmisión Wi-Fi → K75; mando y análisis → K85-N; inspección industrial y mantenimiento → T560.' },
    { n: '02', t: 'Elige la resolución por la tarea: 320×240 px para búsqueda y rescate; 640×480 px para mando e inspección industrial de detalle.' },
    { n: '03', t: 'Decide el modelo de despliegue: una cámara compartida por cuadrilla (K75) o una cámara de mando (K85-N) según la operación.' },
    { n: '04', t: 'Verifica certificación NFPA 1930 en los modelos estructurales, define grabación/streaming si necesitas documentación, y agenda demostración en sitio sin costo para que la brigada la pruebe antes de decidir.' },
  ],
  segmentosIntro:
    'FLIR ofrece una gama para búsqueda y rescate, mando e inspección industrial, con detalle de escena FSX y soporte autorizado.',
  segmentos: [
    { num: '01', tipo: 'estructural', titulo: 'Búsqueda y Rescate Estructural', desc: 'Cuerpos que necesitan localizar víctimas en humo denso. La K75 con FSX apoya la orientación en condiciones de visibilidad cero.', modelos: 'FLIR K75' },
    { num: '02', tipo: 'usar', titulo: 'Conciencia Situacional Personal', desc: 'Equipos que requieren transmisión Wi-Fi a la app Flir Responder durante la operación.', modelos: 'FLIR K75' },
    { num: '03', tipo: 'mando', titulo: 'Mando y Documentación', desc: 'Comandantes que requieren una cámara con transmisión Wi-Fi y certificación NFPA 1930.', modelos: 'FLIR K85-N' },
    { num: '04', tipo: 'industrial', titulo: 'Inspección Industrial', desc: 'Brigadas de instalaciones, refinería y mantenimiento que verifican puntos calientes en equipos y procesos. La T560 de alta resolución detecta anomalías térmicas antes de que se conviertan en incendio.', modelos: 'FLIR T560' },
  ],
  faqs: [
    { q: '¿Qué norma certifica una cámara térmica para el servicio de bomberos?', a: 'La NFPA 1930 es el estándar para cámaras de imagen térmica del servicio de incendios: define requisitos de imagen, legibilidad, durabilidad (caída, calor, agua) e interfaz uniforme para que cualquier bombero pueda operar cualquier cámara certificada bajo estrés. Los modelos estructurales FLIR K cumplen NFPA 1930; las cámaras de inspección industrial (serie T) siguen estándares de medición industrial, no NFPA 1930, porque su uso es distinto.' },
    { q: '¿Qué resolución necesito?', a: 'Depende de la tarea. La K75 ofrece 320×240 px para búsqueda y rescate; la K85-N y la T560 ofrecen 640×480 px para mando e inspección industrial.' },
    { q: '¿Conviene una cámara por bombero o una por cuadrilla?', a: 'La K75 apoya la búsqueda por cuadrilla y la transmisión Wi-Fi a la app Flir Responder. Te ayudamos a dimensionar la mezcla según el tamaño y presupuesto del cuerpo.' },
    { q: '¿Qué diferencia a FLIR de MSA Evolution y Bullard?', a: 'Las tres ofrecen cámaras térmicas para distintos usos. FLIR incorpora FSX; MSA ofrece la G1 iTIC integrada al módulo de control del SCBA G1; Bullard ofrece modelos TXS, QXT Pro, NXT Pro y DXT. Te facilitamos las tres fichas para evaluación comparativa.' },
    { q: '¿Las cámaras térmicas sirven para sobrehaul y verificación de extinción?', a: 'Sí. Tras el ataque, la cámara detecta combustión oculta y puntos calientes en muros, techos y entrepisos que el ojo no ve, apoyando la verificación de extinción.' },
    { q: '¿Entregan ficha técnica, demostración y servicio para licitación?', a: 'Sí. Cada cámara FLIR incluye la ficha técnica con especificaciones de sensor, la certificación NFPA 1930 (modelos estructurales) y carta de garantía. Ofrecemos demostración en sitio sin costo para que la brigada la pruebe, y para concursos públicos (CompraNet, IMSS, Pemex, gobiernos estatales) generamos el manifiesto de cumplimiento por partida y el plan de calibración y verificación.' },
  ],
  ctaKicker: 'Imagen térmica para emergencias',
  ctaTitleHtml: 'Ver es decidir.<br/>Imagen que encuentra.',
  waQuote: 'Hola, quiero cotizar cámaras térmicas FLIR NFPA 1930.',
};

/* ════════════════════════════════════════════════════════════════════════════
   MSA EVOLUTION
   ════════════════════════════════════════════════════════════════════════════ */
const msaEvolution: EquipmentBrand = {
  categorySlug: 'camaras-termicas',
  slug: 'msa-evolution',
  brand: 'MSA Safety',
  brandLabel: 'MSA Evolution',
  crossDesc: 'Integración SCBA G1 · manos libres · NFPA 1930',
  eyebrow: 'MSA Safety · Evolution · Distribuidor Autorizado MX',
  heroTitleTop: 'Cámaras MSA',
  heroTitleAccent: 'Evolution NFPA.',
  heroLead:
    'Distribuidor autorizado de cámaras térmicas MSA Evolution en México. Las 4 categorías —búsqueda y rescate, integrada en SCBA G1, mando e industrial— con certificación NFPA 1930 y servicio técnico autorizado.',
  heroIntro: [
    'MSA Safety cotiza en la Bolsa de Nueva York (NYSE: MSA).',
    'Su mayor diferenciador es la G1 iTIC: una cámara térmica integrada al módulo de control del SCBA G1, que usa su pantalla a color y su energía. Distribuimos la Evolution 6000 (NFPA 1801 en versiones certificadas) con servicio técnico autorizado.',
  ],
  heroBadges: ['NFPA 1930', 'Integración G1', 'Manos libres', 'Ecosistema MSA', 'MSA Safety · NYSE', 'Distribuidor autorizado MX'],
  seoTitle: 'Cámaras Térmicas MSA Evolution NFPA 1930 — México',
  seoDescription:
    'Cámaras térmicas MSA Evolution en México: Evolution 6000 para búsqueda, G1 iTIC integrada al módulo de control del SCBA G1 y usos de mando e industriales. Ecosistema MSA. Distribuidor autorizado · servicio.',
  founding: '1914',
  parentOrg: { name: 'MSA Safety Incorporated', ticker: 'NYSE:MSA' },
  stats: [
    { valor: 'NYSE: MSA', etiq: 'Grupo de seguridad global' },
    { valor: 'G1 iTIC', etiq: 'Cámara integrada en la máscara' },
    { valor: 'Manos libres', etiq: 'Para rescate y avance' },
    { valor: '32', etiq: 'Estados con cobertura' },
  ],
  credenciales: [
    { n: '01', t: 'MSA Safety · NYSE', d: 'MSA Safety cotiza en la Bolsa de Nueva York (NYSE: MSA).' },
    { n: '02', t: 'Integración con el ecosistema MSA', d: 'La cámara Evolution se integra con el casco Gallet, el SCBA G1 y la telemetría MSA. Una sola marca para todo el conjunto del bombero, con compatibilidad y soporte unificados.' },
    { n: '03', t: 'G1 iTIC — integrada al SCBA', d: 'La G1 iTIC integra la cámara térmica al módulo de control del SCBA G1 y muestra la imagen en su pantalla a color. El bombero consulta la imagen sin cargar una cámara aparte: ambas manos quedan libres para el rescate y el avance.' },
    { n: '04', t: 'Servicio técnico autorizado', d: 'Somos servicio autorizado MSA: calibración, verificación de imagen NFPA 1930 y refacciones originales con bitácora para auditoría. Tu inversión queda protegida toda la vida útil del equipo.' },
  ],
  linesIntro:
    'Evolution cubre el espectro de imagen térmica integrado al ecosistema MSA: búsqueda y rescate estructural, la cámara G1 iTIC manos libres en la máscara, el modelo de mando con grabación y una opción industrial accesible.',
  lineas: [
    { tipo: 'estructural', badge: '320×240', titulo: 'Búsqueda y Rescate', modelos: 'MSA Evolution 6000', desc: 'La cámara estructural de la línea Evolution: sensor de 320×240 px, pantalla de alto contraste legible en humo denso y diseño robusto para combate, operable con un solo botón y con guante puesto.', tech: 'Evolution 6000 · 320×240 px · Alto contraste · NFPA 1930' },
    { tipo: 'usar', badge: 'Integrada G1 · 220×176', titulo: 'Integrada en SCBA G1', modelos: 'MSA G1 iTIC', desc: 'La diferencia MSA: cámara térmica integrada al módulo de control del SCBA G1, con la imagen en su pantalla a color. Manos libres para rescate y avance, sin equipo adicional que cargar o soltar.', tech: 'En máscara G1 · Manos libres · 160×120 px · Alimentación G1' },
    { tipo: 'mando', badge: 'Alta y baja sensibilidad', titulo: 'Mando y Documentación', modelos: 'MSA Evolution 6000', desc: 'Versión de mando con grabación de incidentes y transmisión inalámbrica para conciencia situacional del comandante. Rango extendido y modos de color para documentación y sobrehaul.', tech: 'Grabación · Transmisión · 320×240 px · -20 a 1000 °C' },
    { tipo: 'industrial', badge: 'Industria · Protección Civil', titulo: 'Industrial / Acceso', modelos: 'MSA Evolution 6000', desc: 'Cámara confiable de la línea Evolution para brigadas industriales y de Protección Civil con presupuesto controlado. Imagen térmica para búsqueda y verificación de puntos calientes en planta.', tech: 'Evolution 6000 · 160×120 px · Costo accesible · NFPA 1930' },
  ],
  flagship: 'Evolution 6000',
  anatomiaIntro:
    'La línea Evolution está diseñada para integrarse con el resto del conjunto MSA. Estos seis elementos explican por qué es la opción de los cuerpos que ya operan casco Gallet y SCBA G1 y quieren una sola marca.',
  anatomia: [
    { t: 'Sensor microbolómetro', d: 'Convierte la radiación infrarroja en imagen térmica con rango de -20 a 650 °C, suficiente para localizar víctimas y leer el desarrollo del fuego en combate estructural.' },
    { t: 'Pantalla de alto contraste', d: 'Optimizada para ser legible en humo denso, con modos de color para búsqueda, sobrehaul e identificación de fuentes de calor por umbral.' },
    { t: 'Integración G1 iTIC', d: 'En la configuración G1 iTIC, la cámara va en el módulo de control del SCBA G1, usa su pantalla a color y su energía, y agrega 4.2 oz al módulo.' },
    { t: 'Ecosistema MSA', d: 'Compatibilidad y soporte unificados con el casco Gallet, el SCBA G1 y la telemetría MSA: una sola marca y un solo proveedor para todo el conjunto del bombero.' },
    { t: 'Carcasa robusta', d: 'Diseño resistente a caída, calor y agua para sobrevivir al ambiente de combate, con operación de un solo botón y con guante puesto.' },
    { t: 'Servicio y calibración', d: 'Verificación de imagen NFPA 1930, calibración y refacciones originales con servicio técnico autorizado y bitácora para auditoría.' },
  ],
  comparativa: [
    { modelo: 'Evolution 6000', tipo: 'estructural', resolucion: '320×240 px', sensor: '−40 a 160 / −40 a 550 °C', autonomia: '2.5–3.5 h', peso: '1.25 kg', ideal: 'Búsqueda y rescate estructural', rec: true },
    { modelo: 'G1 iTIC', tipo: 'usar', resolucion: '220×176 px', sensor: '0 a 500 °C', autonomia: 'Energía del G1', peso: '—', ideal: 'Módulo de control del G1', rec: false },
    { modelo: 'Evolution 6000', tipo: 'mando', resolucion: '320×240 px', sensor: '−40 a 160 / −40 a 550 °C', autonomia: '2.5–3.5 h', peso: '1.25 kg', ideal: 'Modos de alta y baja sensibilidad', rec: false },
    { modelo: 'Evolution 6000', tipo: 'industrial', resolucion: '320×240 px', sensor: '−40 a 160 / −40 a 550 °C', autonomia: '2.5–3.5 h', peso: '1.25 kg', ideal: 'Brigadas industriales y Protección Civil', rec: false },
  ],
  comparativaNote: NOTA_TIC,
  guia: [
    { n: '01', t: 'Define el uso dominante: búsqueda y rescate → Evolution 6000; manos libres integrada en el SCBA → G1 iTIC; mando, grabación y análisis → Evolution 6000; industrial con presupuesto controlado → Evolution 6000.' },
    { n: '02', t: 'Aprovecha el ecosistema MSA: si tu cuerpo ya opera casco Gallet y SCBA G1, la integración G1 iTIC y la compatibilidad de marca reducen complejidad, capacitación y soporte. Define el modelo por la tarea: Evolution 6000 (320×240) o G1 iTIC (220×176).' },
    { n: '03', t: 'Decide el despliegue: cámara compartida de búsqueda (Evolution 6000) y/o la solución manos libres por elemento (G1 iTIC) para que cada bombero conserve visión sin sostener nada.' },
    { n: '04', t: 'Asegura la verificación NFPA 1930, la calibración periódica con servicio autorizado y la compatibilidad con tu casco, SCBA y comunicación. Agenda demostración en sitio sin costo.' },
  ],
  segmentosIntro:
    'MSA Evolution es la primera opción de los cuerpos que ya operan el ecosistema MSA (casco Gallet, SCBA G1) y quieren una cámara integrada —incluida la solución manos libres G1 iTIC— con servicio técnico autorizado y soporte en los 32 estados.',
  segmentos: [
    { num: '01', tipo: 'estructural', titulo: 'Búsqueda y Rescate Estructural', desc: 'Cuerpos que necesitan localizar víctimas en humo denso con una cámara robusta y de alto contraste. La Evolution 6000 cubre el combate estructural con la confiabilidad MSA.', modelos: 'MSA Evolution 6000' },
    { num: '02', tipo: 'usar', titulo: 'Operación Manos Libres', desc: 'Equipos que quieren visión térmica sin renunciar al uso de las manos. La G1 iTIC integra la cámara en el módulo de control del SCBA G1: el bombero ve el calor mientras avanza, fuerza puertas y rescata.', modelos: 'MSA G1 iTIC' },
    { num: '03', tipo: 'mando', titulo: 'Mando y Documentación', desc: 'Comandantes que requieren grabación del incidente y conciencia situacional remota. La Evolution 6000 transmite y registra para análisis y revisión táctica.', modelos: 'MSA Evolution 6000' },
    { num: '04', tipo: 'industrial', titulo: 'Industria y Protección Civil', desc: 'Brigadas industriales y de Protección Civil con presupuesto controlado que necesitan imagen térmica confiable para búsqueda y verificación de puntos calientes. La Evolution 6000 es la entrada de la línea.', modelos: 'MSA Evolution 6000' },
  ],
  faqs: [
    { q: '¿Qué norma certifica una cámara térmica para el servicio de bomberos?', a: 'La NFPA 1930, que define requisitos de imagen, legibilidad, durabilidad e interfaz uniforme para que cualquier bombero pueda operar cualquier cámara certificada bajo estrés. Los modelos estructurales MSA Evolution cumplen NFPA 1930. La configuración G1 iTIC se integra al SCBA G1 conforme al ecosistema MSA.' },
    { q: '¿Qué es la G1 iTIC y por qué es diferente?', a: 'La G1 iTIC es una cámara de imagen térmica de 220×176 px integrada al módulo de control del SCBA MSA G1, que muestra la imagen en la pantalla a color del módulo. A diferencia de una cámara de mano, deja ambas manos libres: el bombero ve el calor mientras avanza, fuerza una puerta, arrastra una manguera o rescata a una víctima. Es el mayor diferenciador de MSA frente a las cámaras tradicionales, especialmente para cuerpos que ya operan el SCBA G1.' },
    { q: '¿Conviene una cámara por bombero o una por cuadrilla?', a: 'Cada vez más cuerpos combinan ambas: una cámara principal de búsqueda (Evolution 6000) por cuadrilla y una solución personal —la G1 iTIC integrada en el SCBA— por elemento. La integración G1 iTIC es especialmente atractiva porque no añade un equipo extra que cargar: aprovecha el SCBA que el bombero ya lleva. Te ayudamos a dimensionar la mezcla según el tamaño y presupuesto del cuerpo.' },
    { q: '¿Qué diferencia a MSA Evolution de FLIR y Bullard?', a: 'Las tres fabrican cámaras térmicas para bomberos; la certificación NFPA 1930 se revisa por modelo. MSA Evolution sobresale por la integración con el ecosistema MSA, en particular la G1 iTIC integrada al módulo de control del SCBA; FLIR destaca por el realce FSX y la K85-N certificada NFPA 1930; Bullard, que también fabrica cascos, ofrece operación directa y la NXT Pro certificada NFPA 1930. Para un cuerpo que ya opera SCBA G1 y casco Gallet, MSA tiene la ventaja de la integración total. Te facilitamos las tres fichas para evaluación comparativa.' },
    { q: '¿Las cámaras térmicas sirven para sobrehaul y verificación de extinción?', a: 'Sí. Tras el ataque, la cámara detecta combustión oculta y puntos calientes en muros, techos y entrepisos que el ojo no ve, evitando reignición y verificando la extinción total. Los modos de color de la Evolution resaltan las fuentes por encima de un umbral de temperatura, lo que también es útil para inspección industrial con la Evolution 6000.' },
    { q: '¿Entregan ficha técnica, demostración y servicio para licitación?', a: 'Sí. Cada cámara MSA Evolution incluye la ficha técnica, la certificación NFPA 1930 (modelos estructurales) y carta de garantía. Ofrecemos demostración en sitio sin costo y, para concursos públicos, generamos el manifiesto de cumplimiento por partida e incluimos el plan de servicio técnico autorizado y calibración para la vida útil del equipo.' },
  ],
  ctaKicker: 'Integrada al ecosistema MSA · manos libres',
  ctaTitleHtml: 'Ve el calor.<br/>Conserva las manos.',
  waQuote: 'Hola, quiero cotizar cámaras térmicas MSA Evolution NFPA 1930.',
};

/* ════════════════════════════════════════════════════════════════════════════
   BULLARD
   ════════════════════════════════════════════════════════════════════════════ */
const bullardTxs: EquipmentBrand = {
  categorySlug: 'camaras-termicas',
  slug: 'bullard-txs',
  brand: 'Bullard',
  brandLabel: 'Bullard TXS',
  crossDesc: 'Interfaz de operación directa · TXS · QXT Pro · NXT Pro',
  eyebrow: 'Bullard · Cámaras Térmicas · Distribuidor Autorizado MX',
  heroTitleTop: 'Cámaras Bullard',
  heroTitleAccent: 'imagen térmica NFPA.',
  heroLead:
    'Distribuidor autorizado de cámaras térmicas Bullard en México. Las 4 categorías —búsqueda y rescate, personal, mando e industrial— con una interfaz de operación directa, operación manual.',
  heroIntro: [
    'Bullard fabrica protección para bomberos desde 1898 y es uno de los pioneros de la imagen térmica en el servicio de incendios. Como también fabrica cascos, sus cámaras —encabezadas por la TXS— ofrecen un operación manual.',
    'Su sello es la interfaz: operación directa, para que cualquier elemento opere la cámara bajo estrés sin menús complejos. Distribuimos la gama Bullard vigente: TXS, QXT Pro, DXT y NXT Pro, esta última certificada NFPA 1930.',
  ],
  heroBadges: ['NFPA 1930', 'Operación manual', 'Pantalla', 'Distribuidor autorizado MX'],
  seoTitle: 'Cámaras Térmicas Bullard NFPA 1930 — TXS · México',
  seoDescription:
    'Cámaras térmicas Bullard en México (NXT Pro certificada NFPA 1930): TXS modelo estructural, QXT Pro personal, NXT Pro mando y DXT industrial. Interfaz de operación directa. Distribuidor autorizado · stock CDMX.',
  founding: '1898',
  parentOrg: { name: 'E.D. Bullard Company' },
  stats: [
    { valor: '1898', etiq: 'Pionera en EPP y TIC' },
    { valor: 'Montaje', etiq: 'En casco Bullard · manos libres' },
    { valor: 'Intuitiva', etiq: 'La interfaz de operación directa' },
    { valor: '32', etiq: 'Estados con cobertura' },
  ],
  credenciales: [
    { n: '01', t: 'Pionera desde 1898', d: 'Bullard fabrica protección para bomberos desde 1898 y fue de las primeras en llevar la imagen térmica al servicio de incendios. Más de un siglo de ingeniería de protección respalda cada cámara.' },
    { n: '02', t: 'Operación manual', d: 'Las cámaras Bullard se utilizan como equipos de mano en operaciones de servicio de incendios.' },
    { n: '03', t: 'Interfaz de operación directa', d: 'El sello Bullard es la simplicidad: operación directa, para que cualquier elemento opere la cámara bajo estrés con guante puesto, sin menús que distraigan en la zona caliente.' },
    { n: '04', t: 'Certificación NFPA 1930 y stock CDMX', d: 'Los modelos estructurales cumplen NFPA 1930. Stock de los modelos clave con entrega en 24–48 h, demostración en sitio sin costo y servicio de calibración y verificación.' },
  ],
  linesIntro:
    'Bullard cubre el espectro de imagen térmica desde un solo proveedor: búsqueda y rescate con la TXS modelo estructural, cámara personal QXT Pro, modelo de mando NXT Pro con grabación e inspección industrial DXT. Una sola relación de distribución.',
  lineas: [
    { tipo: 'estructural', badge: '320×240 · 30 Hz', titulo: 'Búsqueda y Rescate', modelos: 'Bullard TXS', desc: 'El modelo estructural Bullard: pantalla de 3.5\" de alta resolución, sensor de 320×240 px y una interfaz de operación directa. Mango ergonómico intercambiable y operación manual.', tech: 'TXS · Pantalla 3.5" · 320×240 px · Operación manual · NFPA 1930' },
    { tipo: 'usar', badge: '640×480 · 60 Hz', titulo: 'Cámara Personal', modelos: 'Bullard QXT Pro', desc: 'Cámara compacta y económica para dotar a más elementos del cuerpo manteniendo la calidad de imagen Bullard. Operación de un botón con guante y resistente a impactos y agua.', tech: 'QXT Pro · Compacta · 160×120 px · Económica · NFPA 1930' },
    { tipo: 'mando', badge: 'NFPA 1930 · Grabación', titulo: 'Mando y Documentación', modelos: 'Bullard NXT Pro', desc: 'Cámara con grabación de video e imágenes para mando y análisis. Pantalla amplia, modos de color y captura de incidentes para documentación y revisión táctica posterior.', tech: 'NXT Pro · Grabación · 320×240 px · Modos de color' },
    { tipo: 'industrial', badge: 'Inspección', titulo: 'Inspección Industrial', modelos: 'Bullard DXT', desc: 'Cámara robusta para inspección industrial y verificación de puntos calientes en instalaciones, equipos y procesos. Operación sencilla para brigadas de planta y mantenimiento.', tech: 'DXT · 240×180 px · Robusta · Inspección de planta' },
  ],
  flagship: 'TXS',
  anatomiaIntro:
    'Pantalla Bullard para operaciones de búsqueda con su interfaz característica y el operación manual. Estos seis elementos explican por qué es la opción de los cuerpos que valoran la simplicidad y ya operan cascos Bullard.',
  anatomia: [
    { t: 'Sensor microbolómetro', d: 'Convierte la radiación infrarroja en imagen térmica con rango de -20 a 650 °C, cubriendo desde la víctima hasta el fuego en combate estructural.' },
    { t: 'Pantalla de 3.5" alta resolución', d: 'La pantalla amplia y brillante de la gama Bullard, legible en humo y a plena luz, con modos de color para búsqueda y sobrehaul.' },
    { t: 'Interfaz de operación directa', d: 'El sello Bullard: operación de un botón con operación directa, pensada para usarse con guante y bajo estrés sin menús complejos.' },
    { t: 'Operación manual', d: 'La cámara se opera como equipo de mano para apoyar la orientación y la búsqueda en humo.' },
    { t: 'Mango ergonómico intercambiable', d: 'Empuñadura cómoda y reemplazable que facilita el agarre con guante y el mantenimiento de la cámara a lo largo de su vida útil.' },
    { t: 'Carcasa robusta', d: 'Resistente a caída, calor y agua para sobrevivir al ambiente de combate, con batería de servicio intercambiable y autonomía de referencia de ~4 horas.' },
  ],
  comparativa: [
    { modelo: 'Bullard TXS', tipo: 'estructural', resolucion: '320×240 px', sensor: '—', autonomia: 'Hasta 6 h', peso: '0.73 kg con batería', ideal: 'Búsqueda y rescate estructural', rec: false },
    { modelo: 'Bullard QXT Pro', tipo: 'usar', resolucion: '640×480 px', sensor: '—', autonomia: 'Hasta 6.5 h', peso: '—', ideal: 'Uso operativo', rec: false },
    { modelo: 'Bullard NXT Pro', tipo: 'mando', resolucion: '640×480 px', sensor: 'NFPA 1930', autonomia: '—', peso: '—', ideal: 'Mando y documentación', rec: true },
    { modelo: 'Bullard DXT', tipo: 'industrial', resolucion: '320×240 px', sensor: '—', autonomia: 'Hasta 8.5 h', peso: '—', ideal: 'Inspección industrial', rec: false },
  ],
  comparativaNote: NOTA_TIC,
  guia: [
    { n: '01', t: 'Define el uso dominante: búsqueda y rescate → TXS; una cámara por bombero → QXT Pro personal; mando, grabación y análisis → NXT Pro; inspección industrial → DXT.' },
    { n: '02', t: 'Define el uso operativo y la capacitación requerida para integrar la cámara a tu respuesta.' },
    { n: '03', t: 'Decide el despliegue: cámara compartida de búsqueda (TXS) y/o cámara personal por elemento (QXT Pro). Define la resolución (320×240 o 640×480) según la tarea.' },
    { n: '04', t: 'Verifica certificación NFPA 1930 en los modelos estructurales, agenda demostración en sitio sin costo y define el plan de calibración y verificación con servicio autorizado.' },
  ],
  segmentosIntro:
    'Bullard ofrece cámaras térmicas para cuerpos que priorizan la simplicidad de uso, con certificación NFPA 1930 y soporte en los 32 estados.',
  segmentos: [
    { num: '01', tipo: 'estructural', titulo: 'Búsqueda y Rescate Estructural', desc: 'Cuerpos que priorizan una cámara fácil de operar bajo estrés y con operación manual. La TXS ofrece pantalla Bullard y una interfaz de operación directa para localizar víctimas en humo.', modelos: 'Bullard TXS' },
    { num: '02', tipo: 'usar', titulo: 'Conciencia Situacional Personal', desc: 'Departamentos que dotan a cada bombero de una cámara propia con presupuesto controlado. La QXT Pro compacta entrega calidad Bullard a un costo que permite más cámaras por cuerpo.', modelos: 'Bullard QXT Pro' },
    { num: '03', tipo: 'mando', titulo: 'Mando y Documentación', desc: 'Comandantes que requieren grabación del incidente para análisis y revisión táctica. La NXT Pro captura video e imágenes con la simplicidad característica de Bullard.', modelos: 'Bullard NXT Pro' },
    { num: '04', tipo: 'industrial', titulo: 'Inspección Industrial', desc: 'Brigadas de instalaciones y mantenimiento que verifican puntos calientes en equipos y procesos. La DXT robusta y sencilla detecta anomalías térmicas en planta.', modelos: 'Bullard DXT' },
  ],
  faqs: [
    { q: '¿Qué norma certifica una cámara térmica para el servicio de bomberos?', a: 'La NFPA 1930, que define requisitos de imagen, legibilidad, durabilidad e interfaz uniforme para que cualquier bombero pueda operar cualquier cámara certificada bajo estrés. Los modelos estructurales Bullard (TXS, QXT Pro, NXT Pro) cumplen NFPA 1930; la DXT de inspección industrial sigue estándares de medición industrial por su uso distinto.' },
    { q: '¿Cómo se usa una cámara térmica Bullard?', a: 'La cámara térmica se opera como equipo de mano para apoyar la orientación, la búsqueda y la revisión de puntos calientes.' },
    { q: '¿Por qué se insiste tanto en la interfaz de la cámara?', a: 'Porque en la zona caliente, con guante, humo y estrés, una interfaz compleja cuesta segundos que el bombero no tiene. El sello Bullard es operación directa: operación de un botón y menús mínimos, para que cualquier elemento use la cámara correctamente bajo presión. La NFPA 1930 precisamente busca esa uniformidad y simplicidad de operación.' },
    { q: '¿Qué diferencia a Bullard de FLIR y MSA Evolution?', a: 'Las tres fabrican cámaras térmicas para bomberos; la certificación NFPA 1930 se revisa por modelo. Bullard destaca por la simplicidad de su interfaz y su operación directa; FLIR sobresale por la calidad pura de sensor y FSX; MSA Evolution por la integración con el SCBA G1 (manos libres en la máscara). Para un cuerpo que prioriza facilidad de uso y ya opera cascos Bullard, esta marca tiene la ventaja. Te facilitamos las tres fichas para evaluación comparativa.' },
    { q: '¿Las cámaras térmicas sirven para sobrehaul y verificación de extinción?', a: 'Sí. Tras el ataque, la cámara detecta combustión oculta y puntos calientes en muros, techos y entrepisos que el ojo no ve, evitando reignición y verificando la extinción total. Los modos de color de la TXS y la NXT Pro resaltan las fuentes por encima de un umbral, y la DXT aplica el mismo principio a la inspección industrial.' },
    { q: '¿Entregan ficha técnica, demostración y servicio para licitación?', a: 'Sí. Cada cámara Bullard incluye la ficha técnica, la certificación NFPA 1930 (modelos estructurales) y carta de garantía. Ofrecemos demostración en sitio sin costo y, para concursos públicos (CompraNet, IMSS, Pemex, gobiernos estatales), generamos el manifiesto de cumplimiento por partida y el plan de calibración y verificación.' },
  ],
  ctaKicker: 'Operación directa',
  ctaTitleHtml: 'Simple de usar.<br/>Imposible de soltar.',
  waQuote: 'Hola, quiero cotizar cámaras térmicas Bullard NFPA 1930.',
};

/* ── Export ────────────────────────────────────────────────────────────────── */
export const camarasBrandList: EquipmentBrand[] = [flir, msaEvolution, bullardTxs];
