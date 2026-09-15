/**
 * Marcas de Herramientas de Rescate — implementan EquipmentBrand (ver brandPages.ts).
 * Renderizadas por src/components/products/BrandPage.astro (mismo componente que el resto).
 *
 * Categoría 'herramientas-rescate' (columnas: Fuerza/Apertura/Peso/Fuente/Ideal).
 * Familias por tipo de herramienta: corte (cizalla) · separacion · combinada · estabilizacion (ariete).
 */
import type { EquipmentBrand } from './brandPages';

const NOTA_HR =
  '* Herramientas hidráulicas de rescate certificadas NFPA 1936 y EN 13204. Fuerzas y rangos nominales según modelo; la clasificación de corte EN 13204 define la capacidad real ante aceros endurecidos.';

/* ════════════════════════════════════════════════════════════════════════════
   HOLMATRO
   ════════════════════════════════════════════════════════════════════════════ */
const holmatro: EquipmentBrand = {
  categorySlug: 'herramientas-rescate',
  slug: 'holmatro',
  brand: 'Holmatro',
  brandLabel: 'Holmatro',
  crossDesc: 'Línea Pentheon a batería · Combi-Tool · NFPA 1936',
  eyebrow: 'Holmatro · Pentheon · Distribuidor Autorizado MX',
  heroTitleTop: 'Herramientas Holmatro',
  heroTitleAccent: 'rescate NFPA 1936.',
  heroLead:
    'Distribuidor autorizado de herramientas de rescate Holmatro en México. La línea completa —cizalla, separador, combinada y ariete— en versión Pentheon a batería, con demostración en sitio, capacitación y mantenimiento certificado.',
  heroIntro: [
    'Holmatro —ingeniería neerlandesa— es una de las referencias mundiales en herramientas hidráulicas de rescate. Su línea Pentheon a batería elimina mangueras y unidad de poder: el equipo se despliega en segundos y se mueve libremente alrededor del vehículo, con velocidad constante bajo carga.',
    'En excarcelación cada minuto cuenta. Distribuimos la gama Holmatro certificada NFPA 1936 y EN 13204, con hojas y geometrías diseñadas para los aceros al boro y endurecidos de los vehículos modernos, más el sistema Combi-Tool de cambio rápido.',
  ],
  heroBadges: ['NFPA 1936', 'EN 13204', 'Pentheon batería', 'Sin mangueras', 'Combi-Tool', 'Distribuidor autorizado MX'],
  seoTitle: 'Herramientas Holmatro NFPA 1936 — Pentheon · México',
  seoDescription:
    'Herramientas de rescate Holmatro certificadas NFPA 1936 en México: cizalla, separador, combinada y ariete Pentheon a batería. Sin mangueras. Demostración, capacitación y mantenimiento. Distribuidor autorizado.',
  founding: '1967',
  parentOrg: { name: 'Holmatro Group' },
  stats: [
    { valor: 'Pentheon', etiq: 'Línea a batería sin mangueras' },
    { valor: '~1,400 kN', etiq: 'Fuerza de corte de referencia' },
    { valor: 'NFPA 1936', etiq: '+ EN 13204 certificadas' },
    { valor: '32', etiq: 'Estados con cobertura' },
  ],
  credenciales: [
    { n: '01', t: 'Referencia mundial en rescate', d: 'Holmatro lleva décadas desarrollando herramientas hidráulicas de rescate con ingeniería neerlandesa. Su tecnología es estándar en cuerpos de bomberos y equipos de excarcelación en todo el mundo.' },
    { n: '02', t: 'Pentheon — sin mangueras, sin bomba', d: 'La línea Pentheon es autocontenida a batería: elimina la unidad de poder y las mangueras. El equipo se despliega en segundos, se mueve libre alrededor del vehículo y mantiene velocidad constante bajo carga.' },
    { n: '03', t: 'Diseñada para vehículos modernos', d: 'Las hojas y geometrías Holmatro cortan los aceros al boro, los postes B reforzados y las estructuras de los autos recientes — donde las herramientas antiguas se atascan o fallan.' },
    { n: '04', t: 'Demostración, capacitación y servicio', d: 'Cada venta institucional incluye demostración en sitio con escenarios reales, capacitación de operación y mantenimiento preventivo anual con refacciones originales para conservar la certificación NFPA 1936.' },
  ],
  linesIntro:
    'Holmatro cubre las cuatro herramientas de excarcelación desde un solo proveedor, todas en versión Pentheon a batería: corte, separación, la combinada 2-en-1 y el ariete de empuje. Una sola flota con baterías comunes y refacciones compartidas.',
  lineas: [
    { tipo: 'corte', badge: 'NFPA 1936 · Corte', titulo: 'Cizallas', modelos: 'Holmatro Pentheon Cizalla', desc: 'La herramienta de corte para aceros al boro y postes B reforzados de los vehículos modernos. Hojas de geometría optimizada, velocidad constante bajo carga y operación silenciosa para triage.', tech: 'Corte ~1,400 kN · Boca ~200 mm · Pentheon batería · EN 13204' },
    { tipo: 'separacion', badge: 'NFPA 1936 · Separación', titulo: 'Separadores', modelos: 'Holmatro Pentheon Separador', desc: 'Apertura de espacios, levantamiento y empuje. Gran apertura de brazos con puntas de retención de carga para desplazar tablero, crear acceso y estabilizar. Cadenas y accesorios para tracción.', tech: 'Separación ~67 kN · Apertura ~850 mm · Pentheon · NFPA 1936' },
    { tipo: 'combinada', badge: 'NFPA 1936 · 2 en 1', titulo: 'Combinadas', modelos: 'Holmatro Pentheon Combinada', desc: 'Corta y separa con una sola herramienta. La solución compacta para primer respondiente y cuerpos que necesitan capacidad de excarcelación en una sola unidad, con menor inversión y logística.', tech: 'Corte + separación · Apertura ~360 mm · Compacta · Pentheon' },
    { tipo: 'estabilizacion', badge: 'NFPA 1936 · Empuje', titulo: 'Arietes', modelos: 'Holmatro Pentheon Ariete', desc: 'Ariete telescópico para empuje de tablero, estabilización de cargas y creación de espacio en habitáculo. Carrera larga y alta fuerza de empuje con accesorios de apoyo y base.', tech: 'Empuje ~135 kN · Carrera ~700 mm · Telescópico · Pentheon' },
  ],
  flagship: 'Pentheon',
  anatomiaIntro:
    'La cizalla Pentheon es la herramienta más solicitada de la línea. Estos seis elementos explican por qué la tecnología a batería de Holmatro cambió la forma de operar en la escena de un accidente.',
  anatomia: [
    { t: 'Hojas de corte de geometría optimizada', d: 'Diseñadas para morder y cortar los aceros al boro y endurecidos de los vehículos modernos sin atascarse, con una clasificación de corte EN 13204 alta.' },
    { t: 'Sistema autocontenido Pentheon', d: 'Sin mangueras ni unidad de poder: el motor, la bomba y la batería viven en la propia herramienta, eliminando el cable umbilical que limita el movimiento.' },
    { t: 'Motor y bomba eléctricos integrados', d: 'Entregan velocidad constante bajo carga y operación silenciosa, ideal para el triage en escenas con varias víctimas sin el ruido de la unidad de poder.' },
    { t: 'Empuñadura de control variable', d: 'Mango ergonómico con rotación y control proporcional de velocidad, operable con guante para precisión en maniobras delicadas cerca de la víctima.' },
    { t: 'Iluminación LED integrada', d: 'Ilumina el punto de corte en operaciones nocturnas o en habitáculos oscuros, sin necesidad de iluminación externa adicional.' },
    { t: 'Batería intercambiable de flota', d: 'Baterías comunes a toda la línea Pentheon, intercambiables en caliente, para mantener la herramienta operativa durante intervenciones prolongadas.' },
  ],
  comparativa: [
    { modelo: 'Pentheon Cizalla', tipo: 'corte', fuerza: 'Corte ~1,400 kN', rango: 'Boca ~200 mm', peso: '~20 kg', fuente: 'Batería Pentheon', ideal: 'Excarcelación · aceros al boro', rec: true },
    { modelo: 'Pentheon Separador', tipo: 'separacion', fuerza: 'Separación ~67 kN', rango: 'Apertura ~850 mm', peso: '~21 kg', fuente: 'Batería Pentheon', ideal: 'Crear acceso · desplazar tablero', rec: false },
    { modelo: 'Pentheon Combinada', tipo: 'combinada', fuerza: 'Corte + separación', rango: 'Apertura ~360 mm', peso: '~18 kg', fuente: 'Batería Pentheon', ideal: 'Primer respondiente · una unidad', rec: false },
    { modelo: 'Pentheon Ariete', tipo: 'estabilizacion', fuerza: 'Empuje ~135 kN', rango: 'Carrera ~700 mm', peso: '~17 kg', fuente: 'Batería Pentheon', ideal: 'Empuje de tablero · estabilización', rec: false },
  ],
  comparativaNote: NOTA_HR,
  guia: [
    { n: '01', t: 'Define el escenario: excarcelación vehicular pesada → cizalla + separador; primer respondiente o una sola unidad → combinada; empuje de tablero y estabilización → ariete.' },
    { n: '02', t: 'Decide la fuente: la línea Pentheon a batería es autocontenida (sin mangueras ni unidad de poder), se despliega en segundos y da movilidad total. Es hoy la opción preferida frente al sistema con unidad de poder y mangueras.' },
    { n: '03', t: 'Dimensiona por los vehículos de tu zona: los autos modernos con acero al boro y postes B reforzados exigen alta clasificación de corte EN 13204 — verifica la categoría de la cizalla antes de especificar.' },
    { n: '04', t: 'Incluye en el proyecto la demostración en sitio con escenarios reales, la capacitación de operación y el mantenimiento preventivo anual con refacciones originales para conservar la certificación.' },
  ],
  segmentosIntro:
    'Holmatro es la primera opción de los cuerpos que buscan la libertad de la tecnología a batería (sin mangueras) con la fiabilidad de una marca de referencia mundial, demostración en sitio y mantenimiento certificado, con soporte en los 32 estados.',
  segmentos: [
    { num: '01', tipo: 'corte', titulo: 'Excarcelación Vehicular', desc: 'Bomberos urbanos y de carretera que atienden accidentes con atrapamiento. La cizalla Pentheon corta los aceros modernos y, junto al separador, abre el habitáculo para liberar a la víctima.', modelos: 'Pentheon Cizalla · Separador' },
    { num: '02', tipo: 'estabilizacion', titulo: 'Rescate Técnico y Estructural', desc: 'Equipos USAR y de rescate técnico que requieren empuje y estabilización en colapsos y maniobras. El ariete Pentheon crea y mantiene espacio con alta fuerza de empuje.', modelos: 'Pentheon Ariete' },
    { num: '03', tipo: 'combinada', titulo: 'Primer Respondiente', desc: 'Unidades ligeras, motos de rescate y cuerpos con presupuesto que necesitan capacidad de excarcelación en una sola herramienta. La combinada Pentheon corta y separa sin cargar dos equipos.', modelos: 'Pentheon Combinada' },
    { num: '04', tipo: 'separacion', titulo: 'Brigadas Industriales', desc: 'Brigadas de planta y atención a atrapamientos en maquinaria que necesitan apertura, levantamiento y empuje. El separador Pentheon crea acceso y desplaza cargas con seguridad.', modelos: 'Pentheon Separador' },
  ],
  faqs: [
    { q: '¿Qué norma certifica una herramienta hidráulica de rescate?', a: 'En el mercado mexicano se referencian la NFPA 1936 (estándar de la NFPA para herramientas de rescate motorizadas) y la EN 13204 (norma europea que además clasifica la capacidad de corte por categorías). La clasificación EN 13204 es clave: define qué tan duros son los aceros que una cizalla puede cortar. Las herramientas Holmatro cumplen ambas; te entregamos la ficha con la clasificación exacta por modelo para licitación.' },
    { q: '¿Batería (Pentheon) o sistema hidráulico con unidad de poder y mangueras?', a: 'La línea Pentheon a batería es autocontenida: sin mangueras ni unidad de poder, se despliega en segundos y el operador se mueve libremente alrededor del vehículo, sin el cable umbilical que limita el alcance. Es hoy la opción preferida para la mayoría de los cuerpos. El sistema con unidad de poder y mangueras sigue teniendo sentido para operación continua muy intensiva con varias herramientas simultáneas desde una sola bomba. Te ayudamos a elegir según tu volumen de operación.' },
    { q: '¿Cizalla, separador, combinada o ariete — qué necesita mi cuerpo?', a: 'La cizalla corta (postes, pilares, pedales); el separador abre, levanta y empuja (puertas, tablero); el ariete empuja en línea recta (desplazamiento de tablero, estabilización); la combinada hace corte y separación en una sola herramienta, ideal como primer respondiente. Un equipo de excarcelación completo suele llevar cizalla + separador + ariete; un cuerpo ligero o de primer respondiente puede empezar con una combinada. Asesoramos la configuración según tus vehículos y operación.' },
    { q: '¿Las herramientas cortan los aceros al boro de los vehículos modernos?', a: 'Sí, siempre que tengan la clasificación de corte adecuada. Los vehículos recientes usan aceros al boro y de alta resistencia en postes B y zonas de seguridad que atascan a las herramientas antiguas. Las cizallas Holmatro Pentheon tienen hojas y geometría diseñadas para estos materiales, con clasificación EN 13204 alta. Para tu zona, dimensionamos la cizalla según los modelos de vehículo más frecuentes.' },
    { q: '¿Qué diferencia a Holmatro de Hurst y Weber Rescue?', a: 'Las tres son marcas tier-1 de rescate con líneas a batería certificadas NFPA 1936 / EN 13204. Holmatro destaca por su línea Pentheon y el sistema Combi-Tool; Hurst es la marca que inventó el Jaws of Life® y su línea eDRAULIC es la más reconocida; Weber Rescue (ingeniería alemana) sobresale por la relación peso-potencia y la maniobrabilidad. La elección depende de preferencia operativa y ecosistema de baterías. Te facilitamos las tres fichas y, cuando es posible, demostración comparativa.' },
    { q: '¿Incluyen demostración, capacitación y mantenimiento para licitación?', a: 'Sí. Cada venta institucional incluye demostración en sitio con escenarios reales, capacitación básica de operación y mantenimiento preventivo anual con refacciones originales. Para concursos públicos (CompraNet, IMSS, gobiernos estatales) generamos el manifiesto de cumplimiento NFPA 1936 / EN 13204 por partida con la clasificación de corte y el plan de servicio para la vida útil del equipo.' },
  ],
  ctaKicker: 'Sin mangueras · libertad en la escena',
  ctaTitleHtml: 'Despliega en segundos.<br/>Corta lo imposible.',
  waQuote: 'Hola, quiero cotizar herramientas de rescate Holmatro Pentheon NFPA 1936.',
};

/* ════════════════════════════════════════════════════════════════════════════
   HURST — JAWS OF LIFE
   ════════════════════════════════════════════════════════════════════════════ */
const hurst: EquipmentBrand = {
  categorySlug: 'herramientas-rescate',
  slug: 'hurst',
  brand: 'Hurst',
  brandLabel: 'Hurst Jaws of Life',
  crossDesc: 'Inventor del Jaws of Life® · eDRAULIC batería · NFPA 1936',
  eyebrow: 'Hurst · Jaws of Life® · Distribuidor Autorizado MX',
  heroTitleTop: 'Herramientas Hurst',
  heroTitleAccent: 'Jaws of Life®.',
  heroLead:
    'Distribuidor autorizado de herramientas de rescate Hurst Jaws of Life® en México. La línea completa —cizalla, separador, combinada y ariete— en versión eDRAULIC a batería, con demostración en sitio, capacitación y mantenimiento certificado.',
  heroIntro: [
    'Hurst inventó el Jaws of Life® en 1972 y desde entonces define el rescate vehicular. Su línea eDRAULIC es autocontenida a batería —sin mangueras ni bomba— y es la herramienta de excarcelación más reconocida del mundo, presente en miles de cuerpos de bomberos.',
    'Distribuimos la gama Hurst certificada NFPA 1936 y EN 13204, con cizallas de alta capacidad para los aceros endurecidos de los vehículos modernos, iluminación LED integrada y la fiabilidad que hizo de Jaws of Life® un nombre genérico del rescate.',
  ],
  heroBadges: ['NFPA 1936', 'EN 13204', 'Jaws of Life®', 'eDRAULIC batería', 'Sin mangueras', 'Distribuidor autorizado MX'],
  seoTitle: 'Herramientas Hurst Jaws of Life NFPA 1936 — México',
  seoDescription:
    'Herramientas de rescate Hurst Jaws of Life® certificadas NFPA 1936 en México: cizalla, separador, combinada y ariete eDRAULIC a batería. El inventor del rescate vehicular. Distribuidor autorizado · demo y servicio.',
  founding: '1972',
  parentOrg: { name: 'IDEX Corporation' },
  stats: [
    { valor: '1972', etiq: 'Inventor del Jaws of Life®' },
    { valor: 'eDRAULIC', etiq: 'Línea a batería autocontenida' },
    { valor: '~1,500 kN', etiq: 'Fuerza de corte de referencia' },
    { valor: '32', etiq: 'Estados con cobertura' },
  ],
  credenciales: [
    { n: '01', t: 'El inventor del Jaws of Life®', d: 'Hurst creó la primera herramienta de excarcelación en 1972 y desde entonces es sinónimo de rescate vehicular. "Jaws of Life" es hoy un nombre genérico del oficio, respaldado por décadas de evolución.' },
    { n: '02', t: 'eDRAULIC — la batería que marcó época', d: 'La línea eDRAULIC fue de las primeras herramientas de rescate totalmente a batería, autocontenidas, sin mangueras ni unidad de poder. El operador se mueve libre por la escena con la herramienta en la mano.' },
    { n: '03', t: 'Alta capacidad para vehículos modernos', d: 'Las cizallas Hurst cortan los aceros al boro y los postes B reforzados de los autos recientes, con clasificación de corte EN 13204 alta e iluminación LED integrada para operaciones nocturnas.' },
    { n: '04', t: 'Demostración, capacitación y servicio', d: 'Cada venta institucional incluye demostración en sitio, capacitación de operación y mantenimiento preventivo anual con refacciones originales, con bitácora para conservar la certificación NFPA 1936.' },
  ],
  linesIntro:
    'Hurst cubre las cuatro herramientas de excarcelación, todas en versión eDRAULIC a batería: corte, separación, la combinada 2-en-1 y el ariete de empuje. Una sola flota Jaws of Life® con baterías comunes y la fiabilidad del inventor del rescate.',
  lineas: [
    { tipo: 'corte', badge: 'NFPA 1936 · Corte', titulo: 'Cizallas', modelos: 'Hurst eDRAULIC S 700', desc: 'La cizalla Jaws of Life® de referencia mundial. Alta capacidad de corte para aceros al boro y postes B reforzados, autocontenida eDRAULIC sin mangueras, con iluminación LED y batería intercambiable.', tech: 'Corte ~1,500 kN · Boca ~205 mm · eDRAULIC · EN 13204' },
    { tipo: 'separacion', badge: 'NFPA 1936 · Separación', titulo: 'Separadores', modelos: 'Hurst eDRAULIC SP 555', desc: 'Apertura, levantamiento y empuje con alta fuerza de separación. Puntas intercambiables con retención de carga para desplazar tablero, crear acceso y estabilizar, con accesorios de cadena para tracción.', tech: 'Separación ~70 kN · Apertura ~830 mm · eDRAULIC · NFPA 1936' },
    { tipo: 'combinada', badge: 'NFPA 1936 · 2 en 1', titulo: 'Combinadas', modelos: 'Hurst eDRAULIC SC 357', desc: 'Corte y separación Jaws of Life® en una sola herramienta. Ligera y compacta para primer respondiente, con la capacidad de excarcelación de una marca de referencia en una unidad autocontenida.', tech: 'Corte + separación · Apertura ~350 mm · Ligera · eDRAULIC' },
    { tipo: 'estabilizacion', badge: 'NFPA 1936 · Empuje', titulo: 'Arietes', modelos: 'Hurst eDRAULIC R 421', desc: 'Ariete telescópico para empuje de tablero y estabilización. Carrera larga y alta fuerza de empuje con accesorios de apoyo, autocontenido y fácil de desplegar por un solo operador.', tech: 'Empuje ~145 kN · Carrera ~720 mm · Telescópico · eDRAULIC' },
  ],
  flagship: 'eDRAULIC S 700',
  anatomiaIntro:
    'La cizalla eDRAULIC S 700 es la Jaws of Life® más reconocida del rescate. Estos seis elementos explican por qué el invento de 1972 sigue siendo la referencia, ahora a batería.',
  anatomia: [
    { t: 'Hojas de corte de alta capacidad', d: 'Geometría diseñada para cortar aceros al boro y postes B reforzados sin atascarse, con una clasificación de corte EN 13204 alta — la herencia técnica del inventor del Jaws of Life®.' },
    { t: 'Sistema autocontenido eDRAULIC', d: 'Motor, bomba y batería en la propia herramienta: sin mangueras ni unidad de poder, eliminando el cable umbilical que limita el movimiento en la escena.' },
    { t: 'Motor eléctrico de alto par', d: 'Entrega fuerza y velocidad constantes en el corte, con operación más silenciosa que la unidad de poder de combustión interna.' },
    { t: 'Empuñadura ergonómica de control', d: 'Mango con control proporcional y rotación, operable con guante, para precisión cerca de la víctima y maniobras delicadas.' },
    { t: 'Iluminación LED integrada', d: 'Ilumina el punto de corte en operaciones nocturnas y en habitáculos oscuros, sin iluminación externa adicional.' },
    { t: 'Batería intercambiable de flota', d: 'Baterías comunes a la línea eDRAULIC, intercambiables, para mantener la herramienta operativa durante intervenciones prolongadas.' },
  ],
  comparativa: [
    { modelo: 'eDRAULIC S 700', tipo: 'corte', fuerza: 'Corte ~1,500 kN', rango: 'Boca ~205 mm', peso: '~21 kg', fuente: 'Batería eDRAULIC', ideal: 'Excarcelación · aceros al boro', rec: true },
    { modelo: 'eDRAULIC SP 555', tipo: 'separacion', fuerza: 'Separación ~70 kN', rango: 'Apertura ~830 mm', peso: '~22 kg', fuente: 'Batería eDRAULIC', ideal: 'Crear acceso · desplazar tablero', rec: false },
    { modelo: 'eDRAULIC SC 357', tipo: 'combinada', fuerza: 'Corte + separación', rango: 'Apertura ~350 mm', peso: '~17 kg', fuente: 'Batería eDRAULIC', ideal: 'Primer respondiente · una unidad', rec: false },
    { modelo: 'eDRAULIC R 421', tipo: 'estabilizacion', fuerza: 'Empuje ~145 kN', rango: 'Carrera ~720 mm', peso: '~16 kg', fuente: 'Batería eDRAULIC', ideal: 'Empuje de tablero · estabilización', rec: false },
  ],
  comparativaNote: NOTA_HR,
  guia: [
    { n: '01', t: 'Define el escenario: excarcelación vehicular pesada → cizalla + separador; primer respondiente o una sola unidad → combinada; empuje de tablero y estabilización → ariete.' },
    { n: '02', t: 'Aprovecha la herencia eDRAULIC: la línea a batería es autocontenida y de despliegue inmediato, con la fiabilidad del inventor del Jaws of Life®. Define la autonomía con baterías de repuesto para intervenciones largas.' },
    { n: '03', t: 'Dimensiona por los vehículos de tu zona: verifica la clasificación de corte EN 13204 de la cizalla S 700 ante los aceros al boro y postes B reforzados de los autos modernos.' },
    { n: '04', t: 'Incluye demostración en sitio, capacitación de operación y mantenimiento preventivo anual con refacciones originales para conservar la certificación NFPA 1936.' },
  ],
  segmentosIntro:
    'Hurst es la primera opción de los cuerpos que quieren la marca que inventó el rescate vehicular y su línea eDRAULIC a batería, con la fiabilidad probada del Jaws of Life®, demostración en sitio y soporte en los 32 estados.',
  segmentos: [
    { num: '01', tipo: 'corte', titulo: 'Excarcelación Vehicular', desc: 'Bomberos urbanos y de carretera con atención a accidentes con atrapamiento. La cizalla eDRAULIC S 700 corta los aceros modernos y, con el separador, abre el habitáculo para liberar a la víctima.', modelos: 'eDRAULIC S 700 · SP 555' },
    { num: '02', tipo: 'estabilizacion', titulo: 'Rescate Técnico y Estructural', desc: 'Equipos USAR y de rescate técnico que requieren empuje y estabilización en colapsos. El ariete eDRAULIC R 421 crea y mantiene espacio con alta fuerza de empuje.', modelos: 'eDRAULIC R 421' },
    { num: '03', tipo: 'combinada', titulo: 'Primer Respondiente', desc: 'Unidades ligeras y motos de rescate que necesitan capacidad de excarcelación en una sola herramienta. La combinada eDRAULIC SC 357 corta y separa sin cargar dos equipos.', modelos: 'eDRAULIC SC 357' },
    { num: '04', tipo: 'separacion', titulo: 'Brigadas Industriales', desc: 'Brigadas de planta y atención a atrapamientos en maquinaria que necesitan apertura, levantamiento y empuje. El separador eDRAULIC SP 555 crea acceso y desplaza cargas con seguridad.', modelos: 'eDRAULIC SP 555' },
  ],
  faqs: [
    { q: '¿Qué norma certifica una herramienta hidráulica de rescate?', a: 'Se referencian la NFPA 1936 (estándar de la NFPA para herramientas de rescate motorizadas) y la EN 13204 (norma europea que clasifica además la capacidad de corte por categorías). Las herramientas Hurst Jaws of Life® cumplen ambas; te entregamos la ficha con la clasificación EN 13204 por modelo, que es la que define qué aceros puede cortar la cizalla.' },
    { q: '¿Por qué se le llama "Jaws of Life" a las herramientas de rescate?', a: 'Porque Hurst inventó la primera herramienta de excarcelación en 1972 con ese nombre comercial, y se volvió tan icónica que hoy "Jaws of Life" se usa como término genérico para cualquier separador/cizalla de rescate. Comprar Hurst es comprar la marca original; su línea eDRAULIC a batería es la evolución moderna de aquel invento, certificada NFPA 1936 / EN 13204.' },
    { q: '¿Batería (eDRAULIC) o sistema hidráulico con unidad de poder?', a: 'La línea eDRAULIC a batería es autocontenida: sin mangueras ni bomba, se despliega en segundos y el operador se mueve libre por la escena. Es hoy la opción preferida de la mayoría de los cuerpos. El sistema con unidad de poder y mangueras conserva sentido para operación continua muy intensiva con varias herramientas simultáneas. Te ayudamos a elegir según tu volumen de operación.' },
    { q: '¿Las cizallas cortan los aceros al boro de los vehículos modernos?', a: 'Sí, con la clasificación de corte adecuada. Los autos recientes usan acero al boro y de alta resistencia en postes B y zonas de seguridad. La cizalla eDRAULIC S 700 tiene hojas y geometría para estos materiales con clasificación EN 13204 alta. Dimensionamos la herramienta según los modelos de vehículo más frecuentes en tu zona.' },
    { q: '¿Qué diferencia a Hurst de Holmatro y Weber Rescue?', a: 'Las tres son marcas tier-1 de rescate con líneas a batería NFPA 1936 / EN 13204. Hurst es la marca que inventó el Jaws of Life® y su línea eDRAULIC es la más reconocida del mundo; Holmatro destaca por su línea Pentheon y el sistema Combi-Tool; Weber Rescue (ingeniería alemana) por la relación peso-potencia y maniobrabilidad. La elección depende de preferencia operativa y ecosistema de baterías. Te facilitamos las tres fichas y, cuando es posible, demostración comparativa.' },
    { q: '¿Incluyen demostración, capacitación y mantenimiento para licitación?', a: 'Sí. Cada venta institucional incluye demostración en sitio con escenarios reales, capacitación básica de operación y mantenimiento preventivo anual con refacciones originales. Para concursos públicos generamos el manifiesto de cumplimiento NFPA 1936 / EN 13204 por partida con la clasificación de corte y el plan de servicio para la vida útil del equipo.' },
  ],
  ctaKicker: 'La marca que inventó el rescate vehicular',
  ctaTitleHtml: 'Jaws of Life®.<br/>La original, a batería.',
  waQuote: 'Hola, quiero cotizar herramientas de rescate Hurst Jaws of Life eDRAULIC NFPA 1936.',
};

/* ════════════════════════════════════════════════════════════════════════════
   WEBER RESCUE
   ════════════════════════════════════════════════════════════════════════════ */
const weber: EquipmentBrand = {
  categorySlug: 'herramientas-rescate',
  slug: 'weber-rescue',
  brand: 'Weber Rescue',
  brandLabel: 'Weber Rescue',
  crossDesc: 'Ingeniería alemana · E-FORCE · relación peso-potencia · NFPA 1936',
  eyebrow: 'Weber Rescue · E-FORCE · Distribuidor Autorizado MX',
  heroTitleTop: 'Herramientas Weber',
  heroTitleAccent: 'Rescue NFPA 1936.',
  heroLead:
    'Distribuidor autorizado de herramientas de rescate Weber Rescue en México. La línea completa —cizalla, separador, combinada y ariete— en versión E-FORCE a batería, con la mejor relación peso-potencia y maniobrabilidad de su clase.',
  heroIntro: [
    'Weber Rescue —ingeniería alemana del grupo Weber-Hydraulik— es una de las marcas de referencia en herramientas hidráulicas de rescate. Su línea E-FORCE a batería destaca por una relación peso-potencia sobresaliente: equipos compactos y ligeros sin sacrificar fuerza de corte.',
    'Distribuimos la gama Weber certificada NFPA 1936 y EN 13204, ideal para cuerpos que priorizan la maniobrabilidad en espacios reducidos, las motos de rescate y las operaciones donde cada kilogramo importa, con la precisión alemana en cada componente.',
  ],
  heroBadges: ['NFPA 1936', 'EN 13204', 'E-FORCE batería', 'Ingeniería alemana', 'Ligera', 'Distribuidor autorizado MX'],
  seoTitle: 'Herramientas Weber Rescue NFPA 1936 — E-FORCE · México',
  seoDescription:
    'Herramientas de rescate Weber Rescue certificadas NFPA 1936 en México: cizalla, separador, combinada y ariete E-FORCE a batería. Ingeniería alemana, la mejor relación peso-potencia. Distribuidor autorizado · demo y servicio.',
  founding: '1939',
  parentOrg: { name: 'Weber-Hydraulik GmbH' },
  stats: [
    { valor: '1939', etiq: 'Ingeniería alemana Weber' },
    { valor: 'E-FORCE', etiq: 'Línea a batería ligera' },
    { valor: 'Peso-potencia', etiq: 'La mejor de su clase' },
    { valor: '32', etiq: 'Estados con cobertura' },
  ],
  credenciales: [
    { n: '01', t: 'Ingeniería alemana de precisión', d: 'Weber Rescue es parte del grupo Weber-Hydraulik, con raíces que se remontan a 1939. Su ingeniería alemana se traduce en herramientas precisas, fiables y con tolerancias estrictas en cada componente.' },
    { n: '02', t: 'La mejor relación peso-potencia', d: 'La línea E-FORCE destaca por entregar alta fuerza de corte en equipos notablemente compactos y ligeros — clave para maniobrar en espacios reducidos y para reducir la fatiga del operador en intervenciones largas.' },
    { n: '03', t: 'Autocontenida y maniobrable', d: 'E-FORCE es a batería, sin mangueras ni unidad de poder. Su tamaño compacto y bajo peso la hacen ideal para motos de rescate, unidades ligeras y operación en habitáculos estrechos.' },
    { n: '04', t: 'Demostración, capacitación y servicio', d: 'Cada venta institucional incluye demostración en sitio, capacitación de operación y mantenimiento preventivo anual con refacciones originales, con bitácora para conservar la certificación NFPA 1936.' },
  ],
  linesIntro:
    'Weber Rescue cubre las cuatro herramientas de excarcelación, todas en versión E-FORCE a batería: corte, separación, la combinada 2-en-1 y el ariete de empuje. Una sola flota ligera con la precisión alemana y baterías comunes.',
  lineas: [
    { tipo: 'corte', badge: 'NFPA 1936 · Corte', titulo: 'Cizallas', modelos: 'Weber Rescue RSX', desc: 'Cizalla compacta de ingeniería alemana con alta capacidad de corte y excelente relación peso-potencia. Para cuerpos que priorizan maniobrabilidad en espacios reducidos sin sacrificar fuerza ante aceros modernos.', tech: 'Corte ~1,450 kN · Boca ~190 mm · E-FORCE · EN 13204' },
    { tipo: 'separacion', badge: 'NFPA 1936 · Separación', titulo: 'Separadores', modelos: 'Weber Rescue SPS', desc: 'Separador E-FORCE para apertura, levantamiento y empuje, con gran apertura y la precisión alemana. Excelente relación peso-fuerza para maniobras prolongadas y puntas con retención de carga.', tech: 'Separación ~64 kN · Apertura ~800 mm · E-FORCE · NFPA 1936' },
    { tipo: 'combinada', badge: 'NFPA 1936 · 2 en 1', titulo: 'Combinadas', modelos: 'Weber Rescue RSX 200', desc: 'La combinada más ligera de su clase: corta y separa en una sola herramienta E-FORCE. Maniobrabilidad superior para primer respondiente, motos de rescate y operación en espacios estrechos.', tech: 'Corte + separación · Apertura ~345 mm · Ultraligera · E-FORCE' },
    { tipo: 'estabilizacion', badge: 'NFPA 1936 · Empuje', titulo: 'Arietes', modelos: 'Weber Rescue RZT', desc: 'Ariete telescópico E-FORCE para empuje de tablero, estabilización y creación de espacio. Carrera larga y fuerza de empuje con bajo peso, operable por un solo bombero con la fiabilidad alemana.', tech: 'Empuje ~130 kN · Carrera ~715 mm · Ligero · E-FORCE' },
  ],
  flagship: 'RSX 200',
  anatomiaIntro:
    'La combinada RSX 200 resume la filosofía Weber: máxima capacidad en el menor peso posible. Estos seis elementos explican por qué la ingeniería alemana es la opción de los cuerpos que priorizan la maniobrabilidad.',
  anatomia: [
    { t: 'Hojas de corte de precisión', d: 'Geometría de ingeniería alemana para cortar aceros al boro y de alta resistencia con clasificación EN 13204 alta, en un cabezal compacto que maniobra en espacios reducidos.' },
    { t: 'Sistema autocontenido E-FORCE', d: 'Motor, bomba y batería integrados: sin mangueras ni unidad de poder, con un diseño optimizado para reducir peso y volumen sin perder fuerza.' },
    { t: 'Relación peso-potencia optimizada', d: 'El sello Weber: alta fuerza de corte en uno de los equipos más ligeros de su clase, reduciendo la fatiga del operador en intervenciones largas.' },
    { t: 'Empuñadura ergonómica de control', d: 'Control proporcional y rotación, operable con guante, equilibrada para un manejo cómodo y preciso cerca de la víctima.' },
    { t: 'Iluminación LED integrada', d: 'Ilumina el punto de trabajo en operaciones nocturnas y habitáculos oscuros, sin iluminación externa adicional.' },
    { t: 'Batería intercambiable de flota', d: 'Baterías comunes a la línea E-FORCE, intercambiables, para mantener la herramienta operativa durante intervenciones prolongadas.' },
  ],
  comparativa: [
    { modelo: 'RSX (Cizalla)', tipo: 'corte', fuerza: 'Corte ~1,450 kN', rango: 'Boca ~190 mm', peso: '~19 kg', fuente: 'Batería E-FORCE', ideal: 'Excarcelación · espacios reducidos', rec: true },
    { modelo: 'SPS (Separador)', tipo: 'separacion', fuerza: 'Separación ~64 kN', rango: 'Apertura ~800 mm', peso: '~20 kg', fuente: 'Batería E-FORCE', ideal: 'Crear acceso · maniobras largas', rec: false },
    { modelo: 'RSX 200 (Combinada)', tipo: 'combinada', fuerza: 'Corte + separación', rango: 'Apertura ~345 mm', peso: '~16 kg', fuente: 'Batería E-FORCE', ideal: 'Primer respondiente · motos de rescate', rec: false },
    { modelo: 'RZT (Ariete)', tipo: 'estabilizacion', fuerza: 'Empuje ~130 kN', rango: 'Carrera ~715 mm', peso: '~16 kg', fuente: 'Batería E-FORCE', ideal: 'Empuje de tablero · estabilización', rec: false },
  ],
  comparativaNote: NOTA_HR,
  guia: [
    { n: '01', t: 'Define el escenario: excarcelación vehicular pesada → cizalla + separador; primer respondiente, motos de rescate o espacios estrechos → combinada RSX 200; empuje de tablero y estabilización → ariete.' },
    { n: '02', t: 'Prioriza el peso y la maniobrabilidad: si tu operación implica espacios reducidos, unidades ligeras o intervenciones largas, la relación peso-potencia E-FORCE reduce la fatiga sin sacrificar fuerza.' },
    { n: '03', t: 'Dimensiona por los vehículos de tu zona: verifica la clasificación de corte EN 13204 de la cizalla ante los aceros al boro y postes B reforzados de los autos modernos.' },
    { n: '04', t: 'Incluye demostración en sitio, capacitación de operación y mantenimiento preventivo anual con refacciones originales para conservar la certificación NFPA 1936.' },
  ],
  segmentosIntro:
    'Weber Rescue es la primera opción de los cuerpos que priorizan la maniobrabilidad y el bajo peso con la precisión de la ingeniería alemana — motos de rescate, unidades ligeras y espacios reducidos —, con demostración en sitio y soporte en los 32 estados.',
  segmentos: [
    { num: '01', tipo: 'corte', titulo: 'Excarcelación Vehicular', desc: 'Bomberos urbanos y de carretera que necesitan cortar aceros modernos con equipos maniobrables. La cizalla RSX entrega alta capacidad de corte en un cabezal compacto.', modelos: 'Weber RSX · SPS' },
    { num: '02', tipo: 'estabilizacion', titulo: 'Rescate Técnico y Estructural', desc: 'Equipos USAR y de rescate técnico que requieren empuje y estabilización ligeros y precisos. El ariete RZT crea y mantiene espacio con bajo peso y fiabilidad alemana.', modelos: 'Weber RZT' },
    { num: '03', tipo: 'combinada', titulo: 'Primer Respondiente y Motos', desc: 'Unidades ligeras, motos de rescate y cuerpos que operan en espacios estrechos. La combinada RSX 200, la más ligera de su clase, lleva capacidad de excarcelación a donde otras herramientas no caben.', modelos: 'Weber RSX 200' },
    { num: '04', tipo: 'separacion', titulo: 'Brigadas Industriales', desc: 'Brigadas de planta y atención a atrapamientos en maquinaria que valoran precisión y maniobrabilidad. El separador SPS crea acceso y desplaza cargas con la ingeniería alemana.', modelos: 'Weber SPS' },
  ],
  faqs: [
    { q: '¿Qué norma certifica una herramienta hidráulica de rescate?', a: 'Se referencian la NFPA 1936 y la EN 13204 (que clasifica la capacidad de corte por categorías). Las herramientas Weber Rescue cumplen ambas; te entregamos la ficha con la clasificación EN 13204 por modelo, que define qué aceros puede cortar la cizalla — el dato técnico clave para licitación.' },
    { q: '¿Por qué se destaca a Weber por su relación peso-potencia?', a: 'Porque la ingeniería alemana de Weber-Hydraulik optimiza cada componente para entregar alta fuerza de corte en equipos notablemente compactos y ligeros. Eso importa por dos razones: maniobrabilidad (cabe y opera en espacios reducidos, motos de rescate, habitáculos estrechos) y menor fatiga del operador en intervenciones prolongadas. La RSX 200 combinada es de las más ligeras de su clase manteniendo capacidad de excarcelación completa.' },
    { q: '¿Batería (E-FORCE) o sistema hidráulico con unidad de poder?', a: 'La línea E-FORCE a batería es autocontenida: sin mangueras ni bomba, se despliega en segundos y el operador se mueve libre por la escena. Es hoy la opción preferida de la mayoría de los cuerpos, especialmente los que priorizan ligereza. El sistema con unidad de poder conserva sentido para operación continua muy intensiva. Te ayudamos a elegir según tu volumen de operación.' },
    { q: '¿Las cizallas cortan los aceros al boro de los vehículos modernos?', a: 'Sí, con la clasificación de corte adecuada. Los autos recientes usan acero al boro y de alta resistencia en postes B y zonas de seguridad. Las cizallas Weber RSX tienen geometría de precisión para estos materiales con clasificación EN 13204 alta. Dimensionamos la herramienta según los modelos de vehículo más frecuentes en tu zona.' },
    { q: '¿Qué diferencia a Weber Rescue de Holmatro y Hurst?', a: 'Las tres son marcas tier-1 de rescate con líneas a batería NFPA 1936 / EN 13204. Weber Rescue (ingeniería alemana) sobresale por la relación peso-potencia y la maniobrabilidad; Hurst es la marca que inventó el Jaws of Life® y su línea eDRAULIC es la más reconocida; Holmatro destaca por su línea Pentheon y el sistema Combi-Tool. Para cuerpos que priorizan ligereza y espacios reducidos, Weber tiene ventaja. Te facilitamos las tres fichas y, cuando es posible, demostración comparativa.' },
    { q: '¿Incluyen demostración, capacitación y mantenimiento para licitación?', a: 'Sí. Cada venta institucional incluye demostración en sitio con escenarios reales, capacitación básica de operación y mantenimiento preventivo anual con refacciones originales. Para concursos públicos generamos el manifiesto de cumplimiento NFPA 1936 / EN 13204 por partida con la clasificación de corte y el plan de servicio para la vida útil del equipo.' },
  ],
  ctaKicker: 'Ingeniería alemana · máxima maniobrabilidad',
  ctaTitleHtml: 'Más potencia.<br/>Menos peso.',
  waQuote: 'Hola, quiero cotizar herramientas de rescate Weber Rescue E-FORCE NFPA 1936.',
};

/* ── Export ────────────────────────────────────────────────────────────────── */
export const herramientasBrandList: EquipmentBrand[] = [holmatro, hurst, weber];
