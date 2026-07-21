/**
 * Marcas de Cámaras Térmicas — implementan EquipmentBrand (ver brandPages.ts).
 * Renderizadas por src/components/products/BrandPage.astro (mismo componente que el resto).
 *
 * Categoría 'camaras-termicas' (columnas: Resolución/Sensor/Autonomía/Peso/Ideal).
 * Familias por uso: estructural (búsqueda y rescate) · usar (personal) · mando (grabación) · industrial (inspección).
 */
import type { EquipmentBrand } from './brandPages';

const NOTA_TIC =
  '* Cámaras de imagen térmica para servicio de bomberos certificadas NFPA 1930 (modelos estructurales). Resolución del sensor en píxeles; rango de temperatura y autonomía nominales según modelo y uso.';

/* ════════════════════════════════════════════════════════════════════════════
   FLIR
   ════════════════════════════════════════════════════════════════════════════ */
const flir: EquipmentBrand = {
  categorySlug: 'camaras-termicas',
  slug: 'flir',
  brand: 'FLIR',
  brandLabel: 'FLIR',
  crossDesc: 'Líder mundial en imagen térmica · K-Series · FSX · NFPA 1930',
  eyebrow: 'FLIR · Imagen Térmica · Distribuidor Autorizado MX',
  heroTitleTop: 'Cámaras FLIR',
  heroTitleAccent: 'imagen térmica NFPA.',
  heroLead:
    'Distribuidor autorizado de cámaras térmicas FLIR en México. Las 4 categorías —búsqueda y rescate, personal, mando e inspección industrial— con tecnología FSX, certificación NFPA 1930 y entrega en CDMX.',
  heroIntro: [
    'FLIR —parte de Teledyne— es el líder mundial en imagen térmica, con décadas desarrollando sensores para defensa, industria y bomberos. Su línea K para el servicio de incendios incorpora FSX (Flexible Scene Enhancement), que añade detalle de bordes en tiempo real sobre la imagen térmica.',
    'En visibilidad cero, la imagen térmica es la diferencia entre buscar y encontrar. Distribuimos la gama FLIR certificada NFPA 1930 —desde la cámara personal de bolsillo hasta el modelo de mando con grabación— más cámaras de inspección industrial de alta resolución.',
  ],
  heroBadges: ['NFPA 1930', 'FSX', '320×240 px', 'Grabación', 'Líder mundial TIC', 'Distribuidor autorizado MX'],
  seoTitle: 'Cámaras Térmicas FLIR NFPA 1930 — K-Series · México',
  seoDescription:
    'Cámaras térmicas FLIR certificadas NFPA 1930 en México: K45 búsqueda y rescate, K1 personal, K65 mando e inspección industrial T560. Tecnología FSX. Distribuidor autorizado · stock CDMX.',
  founding: '1978',
  parentOrg: { name: 'Teledyne FLIR LLC' },
  stats: [
    { valor: 'Líder', etiq: 'Mundial en imagen térmica' },
    { valor: 'FSX', etiq: 'Realce de escena en tiempo real' },
    { valor: 'NFPA 1930', etiq: 'Certificación de imagen térmica' },
    { valor: '32', etiq: 'Estados con cobertura' },
  ],
  credenciales: [
    { n: '01', t: 'El líder mundial en imagen térmica', d: 'FLIR (Teledyne) lleva décadas desarrollando sensores térmicos para defensa, industria y bomberos. Esa base tecnológica se traduce en una imagen más nítida y un rango de temperatura más amplio en sus cámaras para el servicio de incendios.' },
    { n: '02', t: 'FSX — detalle que salva tiempo', d: 'La tecnología FSX (Flexible Scene Enhancement) añade detalle de bordes en tiempo real sobre la imagen térmica, mejorando la percepción de estructuras, víctimas y rutas en humo denso sin perder la lectura de calor.' },
    { n: '03', t: 'Gama completa, una sola marca', d: 'Desde la K1 de bolsillo para dotar a cada bombero hasta la K65 de mando con grabación y streaming, más cámaras de inspección industrial de alta resolución. Una sola relación de distribuidor para todo el espectro.' },
    { n: '04', t: 'Certificación NFPA 1930 y stock CDMX', d: 'Los modelos estructurales cumplen NFPA 1930 —el estándar que garantiza legibilidad, durabilidad e interfaz uniforme en combate. Stock de los modelos clave con entrega en 24–48 h y demostración en sitio sin costo.' },
  ],
  linesIntro:
    'FLIR cubre el espectro de imagen térmica desde un solo proveedor: búsqueda y rescate estructural, cámara personal por bombero, modelo de mando con grabación e inspección industrial de alta resolución. Una sola relación de distribución para toda la flota de cámaras.',
  lineas: [
    { tipo: 'estructural', badge: 'NFPA 1930 · 320×240', titulo: 'Búsqueda y Rescate', modelos: 'FLIR K45', desc: 'La cámara estructural de referencia para localización de víctimas y orientación en humo. Sensor de 320×240 px con FSX, pantalla de alto brillo y carcasa que resiste caída de 2 m e inmersión IP67.', tech: 'FSX · 320×240 px · -20 a 650 °C · IP67 · NFPA 1930' },
    { tipo: 'usar', badge: 'NFPA 1930 · Personal', titulo: 'Cámara Personal', modelos: 'FLIR K1', desc: 'Cámara de bolsillo para dotar a cada bombero de visión en humo. Compacta, con linterna LED de 500 lúmenes integrada y encendido en menos de 5 segundos. Conciencia situacional por elemento.', tech: 'Bolsillo · 160×120 px · LED 500 lm · IP67 · NFPA 1930' },
    { tipo: 'mando', badge: 'NFPA 1930 · Grabación', titulo: 'Mando y Documentación', modelos: 'FLIR K65', desc: 'El modelo premium con grabación de video e imágenes y transmisión Bluetooth a tablet de mando. Rango extendido hasta 1000 °C para fuego desarrollado y modos de color para sobrehaul.', tech: 'Grabación · Bluetooth · 320×240 px · -20 a 1000 °C' },
    { tipo: 'industrial', badge: 'Inspección · 640×480', titulo: 'Inspección Industrial', modelos: 'FLIR T560', desc: 'Cámara de inspección industrial de alta resolución para brigadas de instalaciones, refinería y mantenimiento predictivo. Lente giratoria, enfoque automático láser y medición de temperatura precisa.', tech: '640×480 px · Lente giratoria · Enfoque láser · Informes' },
  ],
  flagship: 'K45',
  anatomiaIntro:
    'La FLIR K45 es la cámara que más cuerpos eligen para búsqueda y rescate. Estos seis elementos explican por qué su sensor y su FSX marcan la diferencia entre buscar y encontrar en visibilidad cero.',
  anatomia: [
    { t: 'Sensor microbolómetro VOx', d: 'Detecta la radiación infrarroja sin contacto y la convierte en imagen térmica, con un rango de -20 a 650 °C que cubre desde la víctima hasta el fuego desarrollado.' },
    { t: 'Tecnología FSX', d: 'Añade detalle de bordes y textura en tiempo real sobre la imagen térmica, mejorando la percepción de estructuras y rutas sin perder la lectura de temperatura.' },
    { t: 'Pantalla de alto brillo', d: 'Legible en humo denso y a plena luz, con modos de color (escala de grises, hierro, arcoíris) para búsqueda, sobrehaul e identificación de puntos calientes.' },
    { t: 'Carcasa robusta IP67', d: 'Resiste caída de 2 metros e inmersión, con sellado contra agua y partículas para sobrevivir al ambiente de combate estructural.' },
    { t: 'Operación con guante', d: 'Botón único y ergonomía pensada para operarse con guante estructural puesto, sin menús complejos que distraigan en la zona caliente.' },
    { t: 'Batería de servicio', d: 'Autonomía de referencia de ~4 horas con baterías intercambiables y cargador vehicular opcional para mantener la cámara siempre lista en la unidad.' },
  ],
  comparativa: [
    { modelo: 'FLIR K45', tipo: 'estructural', resolucion: '320×240 px', sensor: 'VOx · -20 a 650 °C', autonomia: '~4 h', peso: '~0.95 kg', ideal: 'Búsqueda y rescate estructural', rec: true },
    { modelo: 'FLIR K1', tipo: 'usar', resolucion: '160×120 px', sensor: 'VOx · -20 a 400 °C', autonomia: '~5 h', peso: '~0.34 kg', ideal: 'Personal · una por bombero', rec: false },
    { modelo: 'FLIR K65', tipo: 'mando', resolucion: '320×240 px', sensor: 'VOx · -20 a 1000 °C', autonomia: '~4 h', peso: '~1.0 kg', ideal: 'Mando, grabación, fuego desarrollado', rec: false },
    { modelo: 'FLIR T560', tipo: 'industrial', resolucion: '640×480 px', sensor: '-20 a 1500 °C', autonomia: '~4 h', peso: '~1.0 kg', ideal: 'Inspección industrial de detalle', rec: false },
  ],
  comparativaNote: NOTA_TIC,
  guia: [
    { n: '01', t: 'Define el uso dominante: búsqueda y rescate estructural → K45; una cámara por bombero → K1 personal; mando, grabación y análisis → K65; inspección industrial y mantenimiento → T560.' },
    { n: '02', t: 'Elige la resolución por la tarea: 320×240 px para búsqueda y rescate y mando; 160×120 px es suficiente para conciencia situacional personal; 640×480 px para inspección industrial de detalle.' },
    { n: '03', t: 'Decide el modelo de despliegue: una cámara compartida por cuadrilla (K45) o una cámara personal por elemento (K1). Cada vez más cuerpos combinan ambas: una K45 de búsqueda + K1 por bombero.' },
    { n: '04', t: 'Verifica certificación NFPA 1930 en los modelos estructurales, define grabación/streaming si necesitas documentación, y agenda demostración en sitio sin costo para que la brigada la pruebe antes de decidir.' },
  ],
  segmentosIntro:
    'FLIR es la primera opción de los cuerpos que priorizan la calidad de imagen y el detalle de escena (FSX), con una gama que va de la cámara personal al mando, más inspección industrial — con certificación NFPA 1930 y soporte en los 32 estados.',
  segmentos: [
    { num: '01', tipo: 'estructural', titulo: 'Búsqueda y Rescate Estructural', desc: 'Cuerpos metropolitanos que necesitan localizar víctimas en humo denso. La K45 con FSX ofrece la imagen más nítida para orientarse y encontrar en condiciones de visibilidad cero.', modelos: 'FLIR K45' },
    { num: '02', tipo: 'usar', titulo: 'Conciencia Situacional Personal', desc: 'Departamentos que dotan a cada bombero de una cámara propia. La K1 de bolsillo permite que cada elemento tome decisiones tácticas inmediatas sin esperar al equipo de búsqueda.', modelos: 'FLIR K1' },
    { num: '03', tipo: 'mando', titulo: 'Mando y Documentación', desc: 'Comandantes que requieren grabación del incidente y conciencia situacional remota. La K65 transmite a tablet y registra el evento para análisis y revisión táctica posterior.', modelos: 'FLIR K65' },
    { num: '04', tipo: 'industrial', titulo: 'Inspección Industrial', desc: 'Brigadas de instalaciones, refinería y mantenimiento que verifican puntos calientes en equipos y procesos. La T560 de alta resolución detecta anomalías térmicas antes de que se conviertan en incendio.', modelos: 'FLIR T560' },
  ],
  faqs: [
    { q: '¿Qué norma certifica una cámara térmica para el servicio de bomberos?', a: 'La NFPA 1930 es el estándar para cámaras de imagen térmica del servicio de incendios: define requisitos de imagen, legibilidad, durabilidad (caída, calor, agua) e interfaz uniforme para que cualquier bombero pueda operar cualquier cámara certificada bajo estrés. Los modelos estructurales FLIR K cumplen NFPA 1930; las cámaras de inspección industrial (serie T) siguen estándares de medición industrial, no NFPA 1930, porque su uso es distinto.' },
    { q: '¿Qué resolución necesito: 160×120 o 320×240?', a: 'Depende de la tarea. 320×240 px (K45, K65) ofrece una imagen más detallada para búsqueda y rescate, orientación en estructuras grandes y mando — es el estándar de las cámaras principales. 160×120 px (K1) es suficiente para conciencia situacional personal: ver el calor, ubicar la puerta, decidir el avance. Para inspección industrial de detalle conviene 640×480 px (T560). No siempre "más es mejor": la cámara personal prioriza tamaño y precio sobre resolución.' },
    { q: '¿Conviene una cámara por bombero o una por cuadrilla?', a: 'Cada vez más cuerpos combinan ambas. Una cámara principal de búsqueda (K45) por cuadrilla para la localización sistemática de víctimas, y una cámara personal (K1) por elemento para que cada bombero mantenga conciencia situacional sin depender del operador de la cámara principal. La cámara personal cambia la táctica: decisión inmediata en el interior. Te ayudamos a dimensionar la mezcla según el tamaño y presupuesto del cuerpo.' },
    { q: '¿Qué diferencia a FLIR de MSA Evolution y Bullard?', a: 'Las tres son marcas tier-1 de imagen térmica certificada NFPA 1930. FLIR destaca por ser el líder mundial en sensores térmicos y por FSX (realce de escena); MSA Evolution sobresale por la integración con el SCBA G1 (cámara en la máscara, manos libres); Bullard, que también fabrica cascos, ofrece montaje en casco e interfaz muy intuitiva. Para un cuerpo que prioriza la calidad pura de imagen y el rango de temperatura, FLIR tiene ventaja. Te facilitamos las tres fichas para evaluación comparativa.' },
    { q: '¿Las cámaras térmicas sirven para sobrehaul y verificación de extinción?', a: 'Sí, y es uno de sus usos más valiosos. Tras el ataque, la cámara detecta combustión oculta y puntos calientes en muros, techos y entrepisos que el ojo no ve, evitando reignición y verificando la extinción total. Los modos de color (como el modo de detección de calor) resaltan las fuentes por encima de un umbral de temperatura. La K45 y la K65 incluyen modos optimizados para sobrehaul.' },
    { q: '¿Entregan ficha técnica, demostración y servicio para licitación?', a: 'Sí. Cada cámara FLIR incluye la ficha técnica con especificaciones de sensor, la certificación NFPA 1930 (modelos estructurales) y carta de garantía. Ofrecemos demostración en sitio sin costo para que la brigada la pruebe, y para concursos públicos (CompraNet, IMSS, Pemex, gobiernos estatales) generamos el manifiesto de cumplimiento por partida y el plan de calibración y verificación.' },
  ],
  ctaKicker: 'El líder mundial en imagen térmica',
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
    'MSA Safety —NYSE: MSA— es el grupo industrial de seguridad más grande del mundo. Su línea Evolution de cámaras de imagen térmica está pensada para integrarse con el resto del ecosistema MSA: casco Gallet, SCBA G1 y telemetría, una sola marca para todo el conjunto.',
    'Su mayor diferenciador es la G1-TIC: una cámara térmica montada en la máscara del SCBA G1 que proyecta la imagen en la pieza facial y deja ambas manos libres para el rescate. Distribuimos la gama Evolution certificada NFPA 1930 con servicio técnico autorizado.',
  ],
  heroBadges: ['NFPA 1930', 'Integración G1', 'Manos libres', 'Ecosistema MSA', 'MSA Safety · NYSE', 'Distribuidor autorizado MX'],
  seoTitle: 'Cámaras Térmicas MSA Evolution NFPA 1930 — México',
  seoDescription:
    'Cámaras térmicas MSA Evolution certificadas NFPA 1930 en México: Evolution 6000 búsqueda, G1-TIC integrada en SCBA, mando 6000 Plus e industrial 5200. Ecosistema MSA. Distribuidor autorizado · servicio.',
  founding: '1914',
  parentOrg: { name: 'MSA Safety Incorporated', ticker: 'NYSE:MSA' },
  stats: [
    { valor: 'NYSE: MSA', etiq: 'Grupo de seguridad global' },
    { valor: 'G1-TIC', etiq: 'Cámara integrada en la máscara' },
    { valor: 'Manos libres', etiq: 'Para rescate y avance' },
    { valor: '32', etiq: 'Estados con cobertura' },
  ],
  credenciales: [
    { n: '01', t: 'MSA Safety · líder mundial', d: 'La línea Evolution es parte de MSA Safety (NYSE: MSA), el mayor grupo industrial de seguridad del mundo. Continuidad de suministro, refacciones originales y servicio técnico autorizado garantizados.' },
    { n: '02', t: 'Integración con el ecosistema MSA', d: 'La cámara Evolution se integra con el casco Gallet, el SCBA G1 y la telemetría MSA. Una sola marca para todo el conjunto del bombero, con compatibilidad y soporte unificados.' },
    { n: '03', t: 'G1-TIC — manos libres en la máscara', d: 'La G1-TIC monta la cámara térmica en la máscara del SCBA G1 y proyecta la imagen en la pieza facial. El bombero ve el calor sin sostener nada: ambas manos quedan libres para el rescate y el avance.' },
    { n: '04', t: 'Servicio técnico autorizado', d: 'Somos servicio autorizado MSA: calibración, verificación de imagen NFPA 1930 y refacciones originales con bitácora para auditoría. Tu inversión queda protegida toda la vida útil del equipo.' },
  ],
  linesIntro:
    'Evolution cubre el espectro de imagen térmica integrado al ecosistema MSA: búsqueda y rescate estructural, la cámara G1-TIC manos libres en la máscara, el modelo de mando con grabación y una opción industrial accesible.',
  lineas: [
    { tipo: 'estructural', badge: 'NFPA 1930 · 320×240', titulo: 'Búsqueda y Rescate', modelos: 'MSA Evolution 6000', desc: 'La cámara estructural de la línea Evolution: sensor de 320×240 px, pantalla de alto contraste legible en humo denso y diseño robusto para combate, operable con un solo botón y con guante puesto.', tech: 'Evolution 6000 · 320×240 px · Alto contraste · NFPA 1930' },
    { tipo: 'usar', badge: 'NFPA 1930 · Integrada G1', titulo: 'Integrada en SCBA G1', modelos: 'MSA G1-TIC', desc: 'La diferencia MSA: cámara térmica montada en la máscara del SCBA G1, con la imagen proyectada en la pieza facial. Manos libres para rescate y avance, sin equipo adicional que cargar o soltar.', tech: 'En máscara G1 · Manos libres · 160×120 px · Alimentación G1' },
    { tipo: 'mando', badge: 'NFPA 1930 · Grabación', titulo: 'Mando y Documentación', modelos: 'MSA Evolution 6000 Plus', desc: 'Versión de mando con grabación de incidentes y transmisión inalámbrica para conciencia situacional del comandante. Rango extendido y modos de color para documentación y sobrehaul.', tech: 'Grabación · Transmisión · 320×240 px · -20 a 1000 °C' },
    { tipo: 'industrial', badge: 'NFPA 1930 · Acceso', titulo: 'Industrial / Acceso', modelos: 'MSA Evolution 5200', desc: 'Cámara confiable de la línea Evolution para brigadas industriales y de Protección Civil con presupuesto controlado. Imagen NFPA 1930 para búsqueda y verificación de puntos calientes en planta.', tech: 'Evolution 5200 · 160×120 px · Costo accesible · NFPA 1930' },
  ],
  flagship: 'Evolution 6000',
  anatomiaIntro:
    'La línea Evolution está diseñada para integrarse con el resto del conjunto MSA. Estos seis elementos explican por qué es la opción de los cuerpos que ya operan casco Gallet y SCBA G1 y quieren una sola marca.',
  anatomia: [
    { t: 'Sensor microbolómetro', d: 'Convierte la radiación infrarroja en imagen térmica con rango de -20 a 650 °C, suficiente para localizar víctimas y leer el desarrollo del fuego en combate estructural.' },
    { t: 'Pantalla de alto contraste', d: 'Optimizada para ser legible en humo denso, con modos de color para búsqueda, sobrehaul e identificación de fuentes de calor por umbral.' },
    { t: 'Integración G1-TIC', d: 'En la configuración G1-TIC, la cámara se monta en la máscara del SCBA G1 y proyecta la imagen en la pieza facial, dejando ambas manos libres — el mayor diferenciador de MSA.' },
    { t: 'Ecosistema MSA', d: 'Compatibilidad y soporte unificados con el casco Gallet, el SCBA G1 y la telemetría MSA: una sola marca y un solo proveedor para todo el conjunto del bombero.' },
    { t: 'Carcasa robusta', d: 'Diseño resistente a caída, calor y agua para sobrevivir al ambiente de combate, con operación de un solo botón y con guante puesto.' },
    { t: 'Servicio y calibración', d: 'Verificación de imagen NFPA 1930, calibración y refacciones originales con servicio técnico autorizado y bitácora para auditoría.' },
  ],
  comparativa: [
    { modelo: 'Evolution 6000', tipo: 'estructural', resolucion: '320×240 px', sensor: 'Microbolómetro · -20 a 650 °C', autonomia: '~4 h', peso: '~1.0 kg', ideal: 'Búsqueda y rescate estructural', rec: true },
    { modelo: 'G1-TIC', tipo: 'usar', resolucion: '160×120 px', sensor: 'Microbolómetro · -20 a 550 °C', autonomia: 'Alimentación G1', peso: 'En máscara G1', ideal: 'Manos libres integrada en SCBA', rec: false },
    { modelo: 'Evolution 6000 Plus', tipo: 'mando', resolucion: '320×240 px', sensor: 'Microbolómetro · -20 a 1000 °C', autonomia: '~4 h', peso: '~1.05 kg', ideal: 'Mando, grabación y documentación', rec: false },
    { modelo: 'Evolution 5200', tipo: 'industrial', resolucion: '160×120 px', sensor: 'Microbolómetro · -20 a 560 °C', autonomia: '~4 h', peso: '~0.9 kg', ideal: 'Industrial / presupuesto controlado', rec: false },
  ],
  comparativaNote: NOTA_TIC,
  guia: [
    { n: '01', t: 'Define el uso dominante: búsqueda y rescate → Evolution 6000; manos libres integrada en el SCBA → G1-TIC; mando, grabación y análisis → 6000 Plus; industrial con presupuesto controlado → Evolution 5200.' },
    { n: '02', t: 'Aprovecha el ecosistema MSA: si tu cuerpo ya opera casco Gallet y SCBA G1, la integración G1-TIC y la compatibilidad de marca reducen complejidad, capacitación y soporte. Define la resolución (160×120 o 320×240) por la tarea.' },
    { n: '03', t: 'Decide el despliegue: cámara compartida de búsqueda (Evolution 6000) y/o la solución manos libres por elemento (G1-TIC) para que cada bombero conserve visión sin sostener nada.' },
    { n: '04', t: 'Asegura la verificación NFPA 1930, la calibración periódica con servicio autorizado y la compatibilidad con tu casco, SCBA y comunicación. Agenda demostración en sitio sin costo.' },
  ],
  segmentosIntro:
    'MSA Evolution es la primera opción de los cuerpos que ya operan el ecosistema MSA (casco Gallet, SCBA G1) y quieren una cámara integrada —incluida la solución manos libres G1-TIC— con servicio técnico autorizado y soporte en los 32 estados.',
  segmentos: [
    { num: '01', tipo: 'estructural', titulo: 'Búsqueda y Rescate Estructural', desc: 'Cuerpos que necesitan localizar víctimas en humo denso con una cámara robusta y de alto contraste. La Evolution 6000 cubre el combate estructural con la confiabilidad MSA.', modelos: 'MSA Evolution 6000' },
    { num: '02', tipo: 'usar', titulo: 'Operación Manos Libres', desc: 'Equipos que quieren visión térmica sin renunciar al uso de las manos. La G1-TIC integra la cámara en la máscara del SCBA G1: el bombero ve el calor mientras avanza, fuerza puertas y rescata.', modelos: 'MSA G1-TIC' },
    { num: '03', tipo: 'mando', titulo: 'Mando y Documentación', desc: 'Comandantes que requieren grabación del incidente y conciencia situacional remota. La 6000 Plus transmite y registra para análisis y revisión táctica.', modelos: 'MSA Evolution 6000 Plus' },
    { num: '04', tipo: 'industrial', titulo: 'Industria y Protección Civil', desc: 'Brigadas industriales y de Protección Civil con presupuesto controlado que necesitan imagen NFPA 1930 confiable para búsqueda y verificación de puntos calientes. La 5200 es la entrada de la línea.', modelos: 'MSA Evolution 5200' },
  ],
  faqs: [
    { q: '¿Qué norma certifica una cámara térmica para el servicio de bomberos?', a: 'La NFPA 1930, que define requisitos de imagen, legibilidad, durabilidad e interfaz uniforme para que cualquier bombero pueda operar cualquier cámara certificada bajo estrés. Los modelos estructurales MSA Evolution cumplen NFPA 1930. La configuración G1-TIC se integra al SCBA G1 conforme al ecosistema MSA.' },
    { q: '¿Qué es la G1-TIC y por qué es diferente?', a: 'La G1-TIC es una cámara de imagen térmica que se monta en la máscara del SCBA MSA G1 y proyecta la imagen en una pantalla integrada en la pieza facial. A diferencia de una cámara de mano, deja ambas manos libres: el bombero ve el calor mientras avanza, fuerza una puerta, arrastra una manguera o rescata a una víctima. Es el mayor diferenciador de MSA frente a las cámaras tradicionales, especialmente para cuerpos que ya operan el SCBA G1.' },
    { q: '¿Conviene una cámara por bombero o una por cuadrilla?', a: 'Cada vez más cuerpos combinan ambas: una cámara principal de búsqueda (Evolution 6000) por cuadrilla y una solución personal —la G1-TIC integrada en el SCBA— por elemento. La integración G1-TIC es especialmente atractiva porque no añade un equipo extra que cargar: aprovecha el SCBA que el bombero ya lleva. Te ayudamos a dimensionar la mezcla según el tamaño y presupuesto del cuerpo.' },
    { q: '¿Qué diferencia a MSA Evolution de FLIR y Bullard?', a: 'Las tres son marcas tier-1 de imagen térmica NFPA 1930. MSA Evolution sobresale por la integración con el ecosistema MSA, en particular la G1-TIC manos libres en la máscara del SCBA; FLIR destaca por la calidad pura de sensor y FSX; Bullard, que también fabrica cascos, ofrece montaje en casco e interfaz muy intuitiva. Para un cuerpo que ya opera SCBA G1 y casco Gallet, MSA tiene la ventaja de la integración total. Te facilitamos las tres fichas para evaluación comparativa.' },
    { q: '¿Las cámaras térmicas sirven para sobrehaul y verificación de extinción?', a: 'Sí. Tras el ataque, la cámara detecta combustión oculta y puntos calientes en muros, techos y entrepisos que el ojo no ve, evitando reignición y verificando la extinción total. Los modos de color de la Evolution resaltan las fuentes por encima de un umbral de temperatura, lo que también es útil para inspección industrial con la 5200.' },
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
  crossDesc: 'Interfaz intuitiva · montaje en casco · NFPA 1930',
  eyebrow: 'Bullard · Cámaras Térmicas · Distribuidor Autorizado MX',
  heroTitleTop: 'Cámaras Bullard',
  heroTitleAccent: 'imagen térmica NFPA.',
  heroLead:
    'Distribuidor autorizado de cámaras térmicas Bullard en México. Las 4 categorías —búsqueda y rescate, personal, mando e industrial— con la interfaz más intuitiva del mercado, montaje en casco Bullard y certificación NFPA 1930.',
  heroIntro: [
    'Bullard fabrica protección para bomberos desde 1898 y es uno de los pioneros de la imagen térmica en el servicio de incendios. Como también fabrica cascos, sus cámaras —encabezadas por la TXS— ofrecen un montaje en casco nativo que libera las manos del bombero.',
    'Su sello es la interfaz: la curva de aprendizaje más corta del mercado, para que cualquier elemento opere la cámara bajo estrés sin menús complejos. Distribuimos la gama Bullard certificada NFPA 1930, de la TXS tope de gama a la QXT personal.',
  ],
  heroBadges: ['NFPA 1930', 'Montaje en casco', 'Interfaz intuitiva', 'Pantalla 3.5"', 'Desde 1898', 'Distribuidor autorizado MX'],
  seoTitle: 'Cámaras Térmicas Bullard NFPA 1930 — TXS · México',
  seoDescription:
    'Cámaras térmicas Bullard certificadas NFPA 1930 en México: TXS tope de gama, QXT personal, T4MAX mando y Eclipse industrial. Interfaz intuitiva y montaje en casco. Distribuidor autorizado · stock CDMX.',
  founding: '1898',
  parentOrg: { name: 'E.D. Bullard Company' },
  stats: [
    { valor: '1898', etiq: 'Pionera en EPP y TIC' },
    { valor: 'Montaje', etiq: 'En casco Bullard · manos libres' },
    { valor: 'Intuitiva', etiq: 'La interfaz más simple del mercado' },
    { valor: '32', etiq: 'Estados con cobertura' },
  ],
  credenciales: [
    { n: '01', t: 'Pionera desde 1898', d: 'Bullard fabrica protección para bomberos desde 1898 y fue de las primeras en llevar la imagen térmica al servicio de incendios. Más de un siglo de ingeniería de protección respalda cada cámara.' },
    { n: '02', t: 'Montaje en casco nativo', d: 'Como Bullard también fabrica cascos, sus cámaras ofrecen un montaje en casco diseñado de fábrica que libera las manos del bombero — una ventaja única para corporaciones que ya operan cascos Bullard.' },
    { n: '03', t: 'La interfaz más intuitiva', d: 'El sello Bullard es la simplicidad: la curva de aprendizaje más corta del mercado, para que cualquier elemento opere la cámara bajo estrés con guante puesto, sin menús que distraigan en la zona caliente.' },
    { n: '04', t: 'Certificación NFPA 1930 y stock CDMX', d: 'Los modelos estructurales cumplen NFPA 1930. Stock de los modelos clave con entrega en 24–48 h, demostración en sitio sin costo y servicio de calibración y verificación.' },
  ],
  linesIntro:
    'Bullard cubre el espectro de imagen térmica desde un solo proveedor: búsqueda y rescate con la TXS tope de gama, cámara personal QXT, modelo de mando T4MAX con grabación e inspección industrial Eclipse. Una sola relación de distribución.',
  lineas: [
    { tipo: 'estructural', badge: 'NFPA 1930 · 320×240', titulo: 'Búsqueda y Rescate', modelos: 'Bullard TXS', desc: 'El tope de gama Bullard: pantalla de 3.5\" de alta resolución, sensor de 320×240 px y la interfaz más intuitiva del mercado. Mango ergonómico intercambiable y montaje compatible con casco Bullard.', tech: 'TXS · Pantalla 3.5" · 320×240 px · Montaje casco · NFPA 1930' },
    { tipo: 'usar', badge: 'NFPA 1930 · Personal', titulo: 'Cámara Personal', modelos: 'Bullard QXT', desc: 'Cámara compacta y económica para dotar a más elementos del cuerpo manteniendo la calidad de imagen Bullard. Operación de un botón con guante y resistente a impactos y agua.', tech: 'QXT · Compacta · 160×120 px · Económica · NFPA 1930' },
    { tipo: 'mando', badge: 'NFPA 1930 · Grabación', titulo: 'Mando y Documentación', modelos: 'Bullard T4MAX', desc: 'Cámara con grabación de video e imágenes para mando y análisis. Pantalla amplia, modos de color y captura de incidentes para documentación y revisión táctica posterior.', tech: 'T4MAX · Grabación · 320×240 px · Modos de color' },
    { tipo: 'industrial', badge: 'Inspección', titulo: 'Inspección Industrial', modelos: 'Bullard Eclipse', desc: 'Cámara robusta para inspección industrial y verificación de puntos calientes en instalaciones, equipos y procesos. Operación sencilla para brigadas de planta y mantenimiento.', tech: 'Eclipse · 240×180 px · Robusta · Inspección de planta' },
  ],
  flagship: 'TXS',
  anatomiaIntro:
    'La Bullard TXS combina la mejor pantalla de la marca con su interfaz característica y el montaje en casco nativo. Estos seis elementos explican por qué es la opción de los cuerpos que valoran la simplicidad y ya operan cascos Bullard.',
  anatomia: [
    { t: 'Sensor microbolómetro', d: 'Convierte la radiación infrarroja en imagen térmica con rango de -20 a 650 °C, cubriendo desde la víctima hasta el fuego en combate estructural.' },
    { t: 'Pantalla de 3.5" alta resolución', d: 'La pantalla más grande y brillante de la gama Bullard, legible en humo y a plena luz, con modos de color para búsqueda y sobrehaul.' },
    { t: 'Interfaz intuitiva', d: 'El sello Bullard: operación de un botón con la curva de aprendizaje más corta del mercado, pensada para usarse con guante y bajo estrés sin menús complejos.' },
    { t: 'Montaje en casco nativo', d: 'Diseñado de fábrica para acoplarse al casco Bullard, libera las manos del bombero — una ventaja única para corporaciones que ya operan cascos de la marca.' },
    { t: 'Mango ergonómico intercambiable', d: 'Empuñadura cómoda y reemplazable que facilita el agarre con guante y el mantenimiento de la cámara a lo largo de su vida útil.' },
    { t: 'Carcasa robusta', d: 'Resistente a caída, calor y agua para sobrevivir al ambiente de combate, con batería de servicio intercambiable y autonomía de referencia de ~4 horas.' },
  ],
  comparativa: [
    { modelo: 'Bullard TXS', tipo: 'estructural', resolucion: '320×240 px', sensor: 'Microbolómetro · -20 a 650 °C', autonomia: '~4 h', peso: '~0.86 kg', ideal: 'Búsqueda y rescate · montaje en casco', rec: true },
    { modelo: 'Bullard QXT', tipo: 'usar', resolucion: '160×120 px', sensor: 'Microbolómetro · -20 a 560 °C', autonomia: '~4 h', peso: '~0.6 kg', ideal: 'Personal · más cámaras por presupuesto', rec: false },
    { modelo: 'Bullard T4MAX', tipo: 'mando', resolucion: '320×240 px', sensor: 'Microbolómetro · -20 a 650 °C', autonomia: '~4 h', peso: '~0.9 kg', ideal: 'Mando, grabación y documentación', rec: false },
    { modelo: 'Bullard Eclipse', tipo: 'industrial', resolucion: '240×180 px', sensor: 'Microbolómetro · -20 a 600 °C', autonomia: '~4 h', peso: '~0.8 kg', ideal: 'Inspección industrial de planta', rec: false },
  ],
  comparativaNote: NOTA_TIC,
  guia: [
    { n: '01', t: 'Define el uso dominante: búsqueda y rescate → TXS; una cámara por bombero → QXT personal; mando, grabación y análisis → T4MAX; inspección industrial → Eclipse.' },
    { n: '02', t: 'Aprovecha el montaje en casco: si tu corporación ya opera cascos Bullard, la TXS se acopla de fábrica y libera las manos. Prioriza la interfaz intuitiva si tu prioridad es minimizar la capacitación.' },
    { n: '03', t: 'Decide el despliegue: cámara compartida de búsqueda (TXS) y/o cámara personal por elemento (QXT). Define la resolución (160×120 o 320×240) según la tarea.' },
    { n: '04', t: 'Verifica certificación NFPA 1930 en los modelos estructurales, agenda demostración en sitio sin costo y define el plan de calibración y verificación con servicio autorizado.' },
  ],
  segmentosIntro:
    'Bullard es la primera opción de los cuerpos que valoran la simplicidad de uso y ya operan cascos Bullard —por el montaje en casco nativo y la interfaz más intuitiva del mercado—, con certificación NFPA 1930 y soporte en los 32 estados.',
  segmentos: [
    { num: '01', tipo: 'estructural', titulo: 'Búsqueda y Rescate Estructural', desc: 'Cuerpos que priorizan una cámara fácil de operar bajo estrés y con montaje en casco. La TXS ofrece la mejor pantalla Bullard y la interfaz más intuitiva para localizar víctimas en humo.', modelos: 'Bullard TXS' },
    { num: '02', tipo: 'usar', titulo: 'Conciencia Situacional Personal', desc: 'Departamentos que dotan a cada bombero de una cámara propia con presupuesto controlado. La QXT compacta entrega calidad Bullard a un costo que permite más cámaras por cuerpo.', modelos: 'Bullard QXT' },
    { num: '03', tipo: 'mando', titulo: 'Mando y Documentación', desc: 'Comandantes que requieren grabación del incidente para análisis y revisión táctica. La T4MAX captura video e imágenes con la simplicidad característica de Bullard.', modelos: 'Bullard T4MAX' },
    { num: '04', tipo: 'industrial', titulo: 'Inspección Industrial', desc: 'Brigadas de instalaciones y mantenimiento que verifican puntos calientes en equipos y procesos. La Eclipse robusta y sencilla detecta anomalías térmicas en planta.', modelos: 'Bullard Eclipse' },
  ],
  faqs: [
    { q: '¿Qué norma certifica una cámara térmica para el servicio de bomberos?', a: 'La NFPA 1930, que define requisitos de imagen, legibilidad, durabilidad e interfaz uniforme para que cualquier bombero pueda operar cualquier cámara certificada bajo estrés. Los modelos estructurales Bullard (TXS, QXT, T4MAX) cumplen NFPA 1930; la Eclipse de inspección industrial sigue estándares de medición industrial por su uso distinto.' },
    { q: '¿Qué ventaja real da el montaje en casco de Bullard?', a: 'Como Bullard también fabrica cascos, sus cámaras se acoplan al casco de la marca con un montaje diseñado de fábrica, no un adaptador de terceros. Eso libera las manos del bombero para avanzar, forzar puertas y rescatar mientras conserva la visión térmica en su campo visual. Para una corporación que ya opera cascos Bullard, es la integración más natural y económica.' },
    { q: '¿Por qué se insiste tanto en la interfaz de la cámara?', a: 'Porque en la zona caliente, con guante, humo y estrés, una interfaz compleja cuesta segundos que el bombero no tiene. El sello Bullard es la curva de aprendizaje más corta del mercado: operación de un botón y menús mínimos, para que cualquier elemento use la cámara correctamente bajo presión. La NFPA 1930 precisamente busca esa uniformidad y simplicidad de operación.' },
    { q: '¿Qué diferencia a Bullard de FLIR y MSA Evolution?', a: 'Las tres son marcas tier-1 de imagen térmica NFPA 1930. Bullard destaca por la simplicidad de su interfaz y por el montaje en casco nativo (también fabrica cascos); FLIR sobresale por la calidad pura de sensor y FSX; MSA Evolution por la integración con el SCBA G1 (manos libres en la máscara). Para un cuerpo que prioriza facilidad de uso y ya opera cascos Bullard, esta marca tiene la ventaja. Te facilitamos las tres fichas para evaluación comparativa.' },
    { q: '¿Las cámaras térmicas sirven para sobrehaul y verificación de extinción?', a: 'Sí. Tras el ataque, la cámara detecta combustión oculta y puntos calientes en muros, techos y entrepisos que el ojo no ve, evitando reignición y verificando la extinción total. Los modos de color de la TXS y la T4MAX resaltan las fuentes por encima de un umbral, y la Eclipse aplica el mismo principio a la inspección industrial.' },
    { q: '¿Entregan ficha técnica, demostración y servicio para licitación?', a: 'Sí. Cada cámara Bullard incluye la ficha técnica, la certificación NFPA 1930 (modelos estructurales) y carta de garantía. Ofrecemos demostración en sitio sin costo y, para concursos públicos (CompraNet, IMSS, Pemex, gobiernos estatales), generamos el manifiesto de cumplimiento por partida y el plan de calibración y verificación.' },
  ],
  ctaKicker: 'La interfaz más simple · montaje en casco',
  ctaTitleHtml: 'Simple de usar.<br/>Imposible de soltar.',
  waQuote: 'Hola, quiero cotizar cámaras térmicas Bullard NFPA 1930.',
};

/* ── Export ────────────────────────────────────────────────────────────────── */
export const camarasBrandList: EquipmentBrand[] = [flir, msaEvolution, bullardTxs];
