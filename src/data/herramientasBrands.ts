/**
 * Marcas de Herramientas de Rescate — implementan EquipmentBrand (ver brandPages.ts).
 * Renderizadas por src/components/products/BrandPage.astro (mismo componente que el resto).
 *
 * Categoría 'herramientas-rescate' (columnas: Fuerza/Apertura/Peso/Fuente/Ideal).
 * Familias por tipo de herramienta: corte (cizalla) · separacion · combinada · estabilizacion (ariete).
 */
import type { EquipmentBrand } from './brandPages';

const NOTA_HR =
  '* Herramientas hidráulicas de rescate conforme a NFPA 1960 y EN 13204:2025. Fuerzas y rangos nominales según modelo; la clasificación de corte EN 13204:2025 define la capacidad publicada ante aceros endurecidos.';

/* ════════════════════════════════════════════════════════════════════════════
   HOLMATRO
   ════════════════════════════════════════════════════════════════════════════ */
const holmatro: EquipmentBrand = {
  categorySlug: 'herramientas-rescate',
  slug: 'holmatro',
  brand: 'Holmatro',
  brandLabel: 'Holmatro',
  crossDesc: 'Línea Pentheon a batería · puntas desmontables en las combinadas · NFPA 1960',
  eyebrow: 'Holmatro · Pentheon · Distribuidor Autorizado MX',
  heroTitleTop: 'Herramientas Holmatro',
  heroTitleAccent: 'rescate NFPA 1960.',
  heroLead:
    'Distribuidor autorizado de herramientas de rescate Holmatro en México. La línea completa —cizalla, separador, combinada y ariete— en versión Pentheon a batería, con demostración en sitio, capacitación y mantenimiento certificado.',
  heroIntro: [
    'Holmatro —ingeniería neerlandesa— es una de las referencias mundiales en herramientas hidráulicas de rescate. Su línea Pentheon a batería elimina mangueras y unidad de poder: el equipo se despliega en segundos y se mueve libremente alrededor del vehículo, con velocidad constante bajo carga.',
    'En excarcelación cada minuto cuenta. Distribuimos la gama Holmatro con clasificación EN 13204 publicada por modelo, con hojas y geometrías diseñadas para los aceros de alta resistencia de los vehículos modernos, más las puntas desmontables en las combinadas.',
  ],
  heroBadges: ['NFPA 1960', 'EN 13204:2025', 'Pentheon batería', 'Sin mangueras', 'puntas desmontables en las combinadas', 'Distribuidor autorizado MX'],
  seoTitle: 'Herramientas Holmatro NFPA 1960 — Pentheon · México',
  seoDescription:
    'Herramientas de rescate Holmatro en México: cizalla, separador, combinada y ariete Pentheon a batería. Sin mangueras. Demostración, capacitación y mantenimiento. Distribuidor autorizado.',
  founding: '1967',
  parentOrg: { name: 'Holmatro Group' },
  stats: [
    { valor: 'Pentheon', etiq: 'Línea a batería sin mangueras' },
    { valor: 'PCU50', etiq: 'Cizalla Pentheon' },
    { valor: 'EN 13204', etiq: 'Clasificación publicada por modelo' },
    { valor: '32', etiq: 'Estados con cobertura' },
  ],
  credenciales: [
    { n: '01', t: 'Herramientas para rescate', d: 'Holmatro desarrolla herramientas hidráulicas de rescate con ingeniería neerlandesa. Su tecnología se utiliza en cuerpos de bomberos y equipos de excarcelación.' },
    { n: '02', t: 'Pentheon — sin mangueras, sin bomba', d: 'La línea Pentheon es autocontenida a batería: elimina la unidad de poder y las mangueras. El equipo se despliega en segundos, se mueve libre alrededor del vehículo y mantiene velocidad constante bajo carga.' },
    { n: '03', t: 'Diseñada para vehículos modernos', d: 'Las hojas y geometrías Holmatro cortan los aceros al boro, los postes B reforzados y las estructuras de los autos recientes — donde las herramientas antiguas se atascan o fallan.' },
    { n: '04', t: 'Demostración, capacitación y servicio', d: 'Cada venta institucional incluye demostración en sitio con escenarios reales, capacitación de operación y mantenimiento preventivo anual con refacciones originales para conservar la certificación NFPA 1960.' },
  ],
  linesIntro:
    'Holmatro cubre las cuatro herramientas de excarcelación desde un solo proveedor, todas en versión Pentheon a batería: corte, separación, la combinada 2-en-1 y el ariete de empuje. Una sola flota con baterías comunes y refacciones compartidas.',
  lineas: [
    { tipo: 'corte', badge: 'EN 13204 · Corte', titulo: 'Cizallas', modelos: 'PCU50', desc: 'Cizalla para aceros al boro y postes B reforzados de vehículos modernos.', tech: 'Apertura 182 mm · 21.6 kg con batería · Pentheon' },
    { tipo: 'separacion', badge: 'EN 13204 · Separación', titulo: 'Separadores', modelos: 'PSP50', desc: 'Apertura de espacios, levantamiento y empuje con puntas de retención de carga.', tech: 'Máx. 366 kN · Apertura 725 mm · 21 kg' },
    { tipo: 'combinada', badge: 'EN 13204 · 2 en 1', titulo: 'Combinadas', modelos: 'PCT50', desc: 'Herramienta combinada con puntas desmontables.', tech: '20.5 kg · Puntas desmontables · Pentheon' },
    { tipo: 'estabilizacion', badge: 'EN 13204 · Empuje', titulo: 'Arietes', modelos: 'PRA50', desc: 'Ariete para empuje de tablero, estabilización y creación de espacio.', tech: '136 kN · 18.4 kg · Pentheon' },
  ],
  flagship: 'Pentheon',
  anatomiaIntro:
    'La cizalla Pentheon es una herramienta de la línea. Estos seis elementos describen la tecnología a batería de Holmatro para operar en la escena de un accidente.',
  anatomia: [
    { t: 'Hojas de corte de geometría optimizada', d: 'Diseñadas para morder y cortar los aceros de alta resistencia de los vehículos modernos sin atascarse, con una clasificación de corte EN 13204:2025 alta.' },
    { t: 'Sistema autocontenido Pentheon', d: 'Sin mangueras ni unidad de poder: el motor, la bomba y la batería viven en la propia herramienta, eliminando el cable umbilical que limita el movimiento.' },
    { t: 'Motor y bomba eléctricos integrados', d: 'Entregan velocidad constante bajo carga y operación silenciosa, ideal para el triage en escenas con varias víctimas sin el ruido de la unidad de poder.' },
    { t: 'Empuñadura de control variable', d: 'Mango ergonómico con rotación y control proporcional de velocidad, operable con guante para precisión en maniobras delicadas cerca de la víctima.' },
    { t: 'Iluminación LED integrada', d: 'Ilumina el punto de corte en operaciones nocturnas o en habitáculos oscuros, sin necesidad de iluminación externa adicional.' },
    { t: 'Batería intercambiable de flota', d: 'Baterías comunes a toda la línea Pentheon, intercambiables en caliente, para mantener la herramienta operativa durante intervenciones prolongadas.' },
  ],
  comparativa: [
    { modelo: 'PCU50', tipo: 'corte', fuerza: '—', rango: 'Apertura 182 mm', peso: '21.6 kg con batería', fuente: 'Batería Pentheon', ideal: 'Excarcelación · aceros al boro', rec: true },
    { modelo: 'PSP50', tipo: 'separacion', fuerza: 'Máx. 366 kN', rango: 'Apertura 725 mm', peso: '21 kg', fuente: 'Batería Pentheon', ideal: 'Crear acceso · desplazar tablero', rec: false },
    { modelo: 'PCT50', tipo: 'combinada', fuerza: '—', rango: '—', peso: '20.5 kg', fuente: 'Batería Pentheon', ideal: 'Primer respondiente · una unidad', rec: false },
    { modelo: 'PRA50', tipo: 'estabilizacion', fuerza: '136 kN', rango: '—', peso: '18.4 kg', fuente: 'Batería Pentheon', ideal: 'Empuje de tablero · estabilización', rec: false },
  ],
  comparativaNote: NOTA_HR,
  guia: [
    { n: '01', t: 'Define el escenario: excarcelación vehicular pesada → cizalla + separador; primer respondiente o una sola unidad → combinada; empuje de tablero y estabilización → ariete.' },
    { n: '02', t: 'Decide la fuente: la línea Pentheon a batería es autocontenida (sin mangueras ni unidad de poder), se despliega en segundos y da movilidad total. Es hoy la opción preferida frente al sistema con unidad de poder y mangueras.' },
    { n: '03', t: 'Dimensiona por los vehículos de tu zona: los autos modernos con acero al boro y postes B reforzados exigen alta clasificación de corte EN 13204:2025 — verifica la categoría de la cizalla antes de especificar.' },
    { n: '04', t: 'Incluye en el proyecto la demostración en sitio con escenarios reales, la capacitación de operación y el mantenimiento preventivo anual con refacciones originales para conservar la certificación.' },
  ],
  segmentosIntro:
    'Holmatro ofrece tecnología a batería sin mangueras, demostración en sitio y mantenimiento certificado, con soporte en los 32 estados.',
  segmentos: [
    { num: '01', tipo: 'corte', titulo: 'Excarcelación Vehicular', desc: 'Bomberos urbanos y de carretera que atienden accidentes con atrapamiento. La cizalla Pentheon corta los aceros modernos y, junto al separador, abre el habitáculo para liberar a la víctima.', modelos: 'Pentheon Cizalla · Separador' },
    { num: '02', tipo: 'estabilizacion', titulo: 'Rescate Técnico y Estructural', desc: 'Equipos USAR y de rescate técnico que requieren empuje y estabilización en colapsos y maniobras. El ariete Pentheon crea y mantiene espacio con alta fuerza de empuje.', modelos: 'Pentheon Ariete' },
    { num: '03', tipo: 'combinada', titulo: 'Primer Respondiente', desc: 'Unidades ligeras, motos de rescate y cuerpos con presupuesto que necesitan capacidad de excarcelación en una sola herramienta. La combinada Pentheon corta y separa sin cargar dos equipos.', modelos: 'Pentheon Combinada' },
    { num: '04', tipo: 'separacion', titulo: 'Brigadas Industriales', desc: 'Brigadas de planta y atención a atrapamientos en maquinaria que necesitan apertura, levantamiento y empuje. El separador Pentheon crea acceso y desplaza cargas con seguridad.', modelos: 'Pentheon Separador' },
  ],
  faqs: [
    { q: '¿Qué norma certifica una herramienta hidráulica de rescate?', a: 'En el mercado mexicano se referencian la NFPA 1960 (estándar de la NFPA para herramientas de rescate motorizadas) y la EN 13204:2025 (norma europea que además clasifica la capacidad de corte por categorías). La clasificación EN 13204:2025 es clave: define qué tan duros son los aceros que una cizalla puede cortar. Las herramientas Holmatro cumplen ambas; te entregamos la ficha con la clasificación exacta por modelo para licitación.' },
    { q: '¿Batería (Pentheon) o sistema hidráulico con unidad de poder y mangueras?', a: 'La línea Pentheon a batería es autocontenida: sin mangueras ni unidad de poder, se despliega en segundos y el operador se mueve libremente alrededor del vehículo, sin el cable umbilical que limita el alcance. Es hoy la opción preferida para la mayoría de los cuerpos. El sistema con unidad de poder y mangueras sigue teniendo sentido para operación continua muy intensiva con varias herramientas simultáneas desde una sola bomba. Te ayudamos a elegir según tu volumen de operación.' },
    { q: '¿Cizalla, separador, combinada o ariete — qué necesita mi cuerpo?', a: 'La cizalla corta (postes, pilares, pedales); el separador abre, levanta y empuja (puertas, tablero); el ariete empuja en línea recta (desplazamiento de tablero, estabilización); la combinada hace corte y separación en una sola herramienta, ideal como primer respondiente. Un equipo de excarcelación completo suele llevar cizalla + separador + ariete; un cuerpo ligero o de primer respondiente puede empezar con una combinada. Asesoramos la configuración según tus vehículos y operación.' },
    { q: '¿Las herramientas cortan los aceros al boro de los vehículos modernos?', a: 'Sí, siempre que tengan la clasificación de corte adecuada. Los vehículos recientes usan aceros al boro y de alta resistencia en postes B y zonas de seguridad que atascan a las herramientas antiguas. Las cizallas Holmatro Pentheon tienen hojas y geometría diseñadas para estos materiales, con clasificación EN 13204:2025 alta. Para tu zona, dimensionamos la cizalla según los modelos de vehículo más frecuentes.' },
    { q: '¿Qué diferencia a Holmatro de Hurst y Weber Rescue?', a: 'Las tres cuentan con líneas a batería. Holmatro ofrece Pentheon y puntas desmontables en las combinadas; Hurst desarrolló Jaws of Life® y ofrece eDRAULIC; Weber Rescue ofrece E-FORCE3. La elección depende de la operación y el ecosistema de baterías. Te facilitamos las tres fichas para evaluación comparativa.' },
    { q: '¿Incluyen demostración, capacitación y mantenimiento para licitación?', a: 'Sí. Cada venta institucional incluye demostración en sitio con escenarios reales, capacitación básica de operación y mantenimiento preventivo anual con refacciones originales. Para concursos públicos (CompraNet, IMSS, gobiernos estatales) generamos el manifiesto de cumplimiento NFPA 1960 / EN 13204:2025 por partida con la clasificación de corte y el plan de servicio para la vida útil del equipo.' },
  ],
  ctaKicker: 'Sin mangueras · libertad en la escena',
  ctaTitleHtml: 'Despliega en segundos.<br/>Corta lo imposible.',
  waQuote: 'Hola, quiero cotizar herramientas de rescate Holmatro Pentheon NFPA 1960.',
};

/* ════════════════════════════════════════════════════════════════════════════
   HURST — JAWS OF LIFE
   ════════════════════════════════════════════════════════════════════════════ */
const hurst: EquipmentBrand = {
  categorySlug: 'herramientas-rescate',
  slug: 'hurst',
  brand: 'Hurst',
  brandLabel: 'Hurst Jaws of Life',
  crossDesc: 'Inventor del Jaws of Life® · eDRAULIC batería · NFPA 1960',
  eyebrow: 'Hurst · Jaws of Life® · Distribuidor Autorizado MX',
  heroTitleTop: 'Herramientas Hurst',
  heroTitleAccent: 'Jaws of Life®.',
  heroLead:
    'Distribuidor autorizado de herramientas de rescate Hurst Jaws of Life® en México. La línea completa —cizalla, separador, combinada y ariete— en versión eDRAULIC a batería, con demostración en sitio, capacitación y mantenimiento certificado.',
  heroIntro: [
    'Hurst presentó Jaws of Life® en 1971 y lanzó su primer modelo de producción, el JL-32, en 1972. Su línea eDRAULIC es autocontenida a batería —sin mangueras ni bomba— y es la herramienta de excarcelación reconocida en rescate vehicular, presente en miles de cuerpos de bomberos.',
    'Distribuimos la gama Hurst con clasificación EN 13204 publicada por modelo, con cizallas de alta capacidad para los aceros endurecidos de los vehículos modernos, iluminación LED integrada y la fiabilidad que hizo de Jaws of Life® un nombre genérico del rescate.',
  ],
  heroBadges: ['NFPA 1960', 'EN 13204:2025', 'Jaws of Life®', 'eDRAULIC batería', 'Sin mangueras', 'Distribuidor autorizado MX'],
  seoTitle: 'Herramientas Hurst Jaws of Life NFPA 1960 — México',
  seoDescription:
    'Herramientas de rescate Hurst Jaws of Life® en México: cizalla, separador, combinada y ariete eDRAULIC a batería. Creador de Jaws of Life®. Distribuidor autorizado · demo y servicio.',
  founding: '1972',
  parentOrg: { name: 'IDEX Corporation' },
  stats: [
    { valor: '1972', etiq: 'Inventor del Jaws of Life®' },
    { valor: 'eDRAULIC', etiq: 'Línea a batería autocontenida' },
    { valor: 'S 789 E3', etiq: 'Cizalla eDRAULIC' },
    { valor: '32', etiq: 'Estados con cobertura' },
  ],
  credenciales: [
    { n: '01', t: 'El inventor del Jaws of Life®', d: 'Hurst creó la primera herramienta de excarcelación en 1972 y desde entonces es sinónimo de rescate vehicular. "Jaws of Life" es hoy un nombre genérico del oficio, respaldado por décadas de evolución.' },
    { n: '02', t: 'eDRAULIC — la batería que marcó época', d: 'La línea eDRAULIC fue de las primeras herramientas de rescate totalmente a batería, autocontenidas, sin mangueras ni unidad de poder. El operador se mueve libre por la escena con la herramienta en la mano.' },
    { n: '03', t: 'Alta capacidad para vehículos modernos', d: 'Las cizallas Hurst cortan los aceros al boro y los postes B reforzados de los autos recientes, con clasificación de corte EN 13204:2025 alta e iluminación LED integrada para operaciones nocturnas.' },
    { n: '04', t: 'Demostración, capacitación y servicio', d: 'Cada venta institucional incluye demostración en sitio, capacitación de operación y mantenimiento preventivo anual con refacciones originales, con bitácora para conservar la certificación NFPA 1960.' },
  ],
  linesIntro:
    'Hurst cubre las cuatro herramientas de excarcelación, todas en versión eDRAULIC a batería: corte, separación, la combinada 2-en-1 y el ariete de empuje. Una sola flota Jaws of Life® con baterías comunes y la fiabilidad del inventor del rescate.',
  lineas: [
    { tipo: 'corte', badge: 'EN 13204 · Corte', titulo: 'Cizallas', modelos: 'Hurst eDRAULIC S 789 E3', desc: 'Cizalla para aceros al boro y postes B reforzados, autocontenida eDRAULIC.', tech: 'NFPA A8/B9/C8/D9/E9/F5 · Apertura ≈205 mm · 22.5 kg' },
    { tipo: 'separacion', badge: 'EN 13204 · Separación', titulo: 'Separadores', modelos: 'Hurst eDRAULIC SP 555 E3', desc: 'Separador para apertura, levantamiento y empuje.', tech: 'Apertura ≈729 mm · 18.4 kg · eDRAULIC' },
    { tipo: 'combinada', badge: 'EN 13204 · 2 en 1', titulo: 'Combinadas', modelos: 'Hurst eDRAULIC SC 358 E3', desc: 'Corte y separación Jaws of Life® en una sola herramienta.', tech: 'NFPA A7/B8/C7/D8/E7/F4 · Separación 368 mm · corte 309 mm · 18.3 kg' },
    { tipo: 'estabilizacion', badge: 'EN 13204 · Empuje', titulo: 'Arietes', modelos: 'Hurst eDRAULIC R 521 E3', desc: 'Ariete para empuje de tablero y estabilización.', tech: 'Cerrado 579 mm · 18.9 kg · eDRAULIC' },
  ],
  flagship: 'eDRAULIC S 789 E3',
  anatomiaIntro:
    'La cizalla eDRAULIC S 789 E3 forma parte de la línea Jaws of Life®. Estos seis elementos explican por qué el invento de 1972 sigue siendo la referencia, ahora a batería.',
  anatomia: [
    { t: 'Hojas de corte de alta capacidad', d: 'Geometría diseñada para cortar aceros al boro y postes B reforzados sin atascarse, con una clasificación de corte EN 13204:2025 alta — la herencia técnica del inventor del Jaws of Life®.' },
    { t: 'Sistema autocontenido eDRAULIC', d: 'Motor, bomba y batería en la propia herramienta: sin mangueras ni unidad de poder, eliminando el cable umbilical que limita el movimiento en la escena.' },
    { t: 'Motor eléctrico de alto par', d: 'Entrega fuerza y velocidad constantes en el corte, con operación más silenciosa que la unidad de poder de combustión interna.' },
    { t: 'Empuñadura ergonómica de control', d: 'Mango con control proporcional y rotación, operable con guante, para precisión cerca de la víctima y maniobras delicadas.' },
    { t: 'Iluminación LED integrada', d: 'Ilumina el punto de corte en operaciones nocturnas y en habitáculos oscuros, sin iluminación externa adicional.' },
    { t: 'Batería intercambiable de flota', d: 'Baterías comunes a la línea eDRAULIC, intercambiables, para mantener la herramienta operativa durante intervenciones prolongadas.' },
  ],
  comparativa: [
    { modelo: 'S 789 E3', tipo: 'corte', fuerza: 'NFPA A8/B9/C8/D9/E9/F5', rango: 'Apertura ≈205 mm', peso: '22.5 kg', fuente: 'Batería eDRAULIC', ideal: 'Excarcelación · aceros al boro', rec: true },
    { modelo: 'SP 555 E3', tipo: 'separacion', fuerza: '—', rango: 'Apertura ≈729 mm', peso: '18.4 kg', fuente: 'Batería eDRAULIC', ideal: 'Crear acceso · desplazar tablero', rec: false },
    { modelo: 'SC 358 E3', tipo: 'combinada', fuerza: 'NFPA A7/B8/C7/D8/E7/F4', rango: 'Separación 368 mm · corte 309 mm', peso: '18.3 kg', fuente: 'Batería eDRAULIC', ideal: 'Primer respondiente · una unidad', rec: false },
    { modelo: 'R 521 E3', tipo: 'estabilizacion', fuerza: '—', rango: 'Cerrado 579 mm', peso: '18.9 kg', fuente: 'Batería eDRAULIC', ideal: 'Empuje de tablero · estabilización', rec: false },
  ],
  comparativaNote: NOTA_HR,
  guia: [
    { n: '01', t: 'Define el escenario: excarcelación vehicular pesada → cizalla + separador; primer respondiente o una sola unidad → combinada; empuje de tablero y estabilización → ariete.' },
    { n: '02', t: 'Aprovecha la herencia eDRAULIC: la línea a batería es autocontenida y de despliegue inmediato, con la fiabilidad del inventor del Jaws of Life®. Define la autonomía con baterías de repuesto para intervenciones largas.' },
    { n: '03', t: 'Dimensiona por los vehículos de tu zona: verifica la clasificación de corte EN 13204:2025 de la cizalla S 789 E3 ante los aceros al boro y postes B reforzados de los autos modernos.' },
    { n: '04', t: 'Incluye demostración en sitio, capacitación de operación y mantenimiento preventivo anual con refacciones originales para conservar la certificación NFPA 1960.' },
  ],
  segmentosIntro:
    'Hurst es la primera opción de los cuerpos que quieren la marca creadora de Jaws of Life® y su línea eDRAULIC a batería, con la fiabilidad probada del Jaws of Life®, demostración en sitio y soporte en los 32 estados.',
  segmentos: [
    { num: '01', tipo: 'corte', titulo: 'Excarcelación Vehicular', desc: 'Bomberos urbanos y de carretera con atención a accidentes con atrapamiento. La cizalla eDRAULIC S 789 E3 corta los aceros modernos y, con el separador, abre el habitáculo para liberar a la víctima.', modelos: 'eDRAULIC S 789 E3 · SP 555 E3' },
    { num: '02', tipo: 'estabilizacion', titulo: 'Rescate Técnico y Estructural', desc: 'Equipos USAR y de rescate técnico que requieren empuje y estabilización en colapsos. El ariete eDRAULIC R 521 E3 crea y mantiene espacio con alta fuerza de empuje.', modelos: 'eDRAULIC R 521 E3' },
    { num: '03', tipo: 'combinada', titulo: 'Primer Respondiente', desc: 'Unidades ligeras y motos de rescate que necesitan capacidad de excarcelación en una sola herramienta. La combinada eDRAULIC SC 358 E3 corta y separa sin cargar dos equipos.', modelos: 'eDRAULIC SC 358 E3' },
    { num: '04', tipo: 'separacion', titulo: 'Brigadas Industriales', desc: 'Brigadas de planta y atención a atrapamientos en maquinaria que necesitan apertura, levantamiento y empuje. El separador eDRAULIC SP 555 E3 crea acceso y desplaza cargas con seguridad.', modelos: 'eDRAULIC SP 555 E3' },
  ],
  faqs: [
    { q: '¿Qué norma certifica una herramienta hidráulica de rescate?', a: 'Se referencian la NFPA 1960 (estándar de la NFPA para herramientas de rescate motorizadas) y la EN 13204:2025 (norma europea que clasifica además la capacidad de corte por categorías). Las herramientas Hurst Jaws of Life® cumplen ambas; te entregamos la ficha con la clasificación EN 13204:2025 por modelo, que es la que define qué aceros puede cortar la cizalla.' },
    { q: '¿Por qué se le llama "Jaws of Life" a las herramientas de rescate?', a: 'Porque Hurst presentó la herramienta Jaws of Life® en 1971 (primer modelo de producción JL-32 en 1972), y se volvió tan icónica que hoy "Jaws of Life" se usa como término genérico para cualquier separador/cizalla de rescate. Comprar Hurst es comprar la marca original; su línea eDRAULIC a batería es la evolución moderna de aquel invento, certificada NFPA 1960 / EN 13204:2025.' },
    { q: '¿Batería (eDRAULIC) o sistema hidráulico con unidad de poder?', a: 'La línea eDRAULIC a batería es autocontenida: sin mangueras ni bomba, se despliega en segundos y el operador se mueve libre por la escena. Es hoy la opción preferida de la mayoría de los cuerpos. El sistema con unidad de poder y mangueras conserva sentido para operación continua muy intensiva con varias herramientas simultáneas. Te ayudamos a elegir según tu volumen de operación.' },
    { q: '¿Las cizallas cortan los aceros al boro de los vehículos modernos?', a: 'Sí, con la clasificación de corte adecuada. Los autos recientes usan acero al boro y de alta resistencia en postes B y zonas de seguridad. La cizalla eDRAULIC S 789 E3 tiene hojas y geometría para estos materiales con clasificación EN 13204:2025 alta. Dimensionamos la herramienta según los modelos de vehículo más frecuentes en tu zona.' },
    { q: '¿Qué diferencia a Hurst de Holmatro y Weber Rescue?', a: 'Las tres fabrican herramientas de rescate a batería con clasificación EN 13204 publicada por modelo. Hurst es la marca creadora de Jaws of Life® y su línea eDRAULIC es la reconocida en rescate vehicular; Holmatro destaca por su línea Pentheon y las puntas desmontables en las combinadas; Weber Rescue (ingeniería alemana) por la relación peso-potencia y maniobrabilidad. La elección depende de preferencia operativa y ecosistema de baterías. Te facilitamos las tres fichas y, cuando es posible, demostración comparativa.' },
    { q: '¿Incluyen demostración, capacitación y mantenimiento para licitación?', a: 'Sí. Cada venta institucional incluye demostración en sitio con escenarios reales, capacitación básica de operación y mantenimiento preventivo anual con refacciones originales. Para concursos públicos generamos el manifiesto de cumplimiento NFPA 1960 / EN 13204:2025 por partida con la clasificación de corte y el plan de servicio para la vida útil del equipo.' },
  ],
  ctaKicker: 'Jaws of Life® desde 1971',
  ctaTitleHtml: 'Jaws of Life®.<br/>La original, a batería.',
  waQuote: 'Hola, quiero cotizar herramientas de rescate Hurst Jaws of Life eDRAULIC NFPA 1960.',
};

/* ════════════════════════════════════════════════════════════════════════════
   WEBER RESCUE
   ════════════════════════════════════════════════════════════════════════════ */
const weber: EquipmentBrand = {
  categorySlug: 'herramientas-rescate',
  slug: 'weber-rescue',
  brand: 'Weber Rescue',
  brandLabel: 'Weber Rescue',
  crossDesc: 'Ingeniería alemana · E-FORCE · relación peso-potencia · NFPA 1960',
  eyebrow: 'Weber Rescue · E-FORCE · Distribuidor Autorizado MX',
  heroTitleTop: 'Herramientas Weber',
  heroTitleAccent: 'Rescue NFPA 1960.',
  heroLead:
    'Distribuidor autorizado de herramientas de rescate Weber Rescue en México. La línea completa —cizalla, separador, combinada y ariete— en versión E-FORCE a batería, con una relación peso-potencia equilibrada y maniobrabilidad de la línea.',
  heroIntro: [
    'Weber Rescue —ingeniería alemana del grupo Weber-Hydraulik— es una de las marcas de referencia en herramientas hidráulicas de rescate. Su línea E-FORCE a batería destaca por una relación peso-potencia sobresaliente: equipos compactos y ligeros sin sacrificar fuerza de corte.',
    'Distribuimos la gama Weber con clasificación EN 13204 publicada por modelo, ideal para cuerpos que priorizan la maniobrabilidad en espacios reducidos, las motos de rescate y las operaciones donde cada kilogramo importa, con la precisión alemana en cada componente.',
  ],
  heroBadges: ['NFPA 1960', 'EN 13204:2025', 'E-FORCE batería', 'Ingeniería alemana', 'Ligera', 'Distribuidor autorizado MX'],
  seoTitle: 'Herramientas Weber Rescue NFPA 1960 — E-FORCE · México',
  seoDescription:
    'Herramientas de rescate Weber Rescue en México: cizalla, separador, combinada y ariete E-FORCE a batería. Ingeniería alemana, una relación peso-potencia equilibrada. Distribuidor autorizado · demo y servicio.',
  founding: '1939',
  parentOrg: { name: 'Weber-Hydraulik GmbH' },
  stats: [
    { valor: '1939', etiq: 'Ingeniería alemana Weber' },
    { valor: 'E-FORCE', etiq: 'Línea a batería ligera' },
    { valor: 'Peso-potencia', etiq: 'Relación de la línea' },
    { valor: '32', etiq: 'Estados con cobertura' },
  ],
  credenciales: [
    { n: '01', t: 'Ingeniería alemana de precisión', d: 'Weber Rescue es parte del grupo Weber-Hydraulik, con raíces que se remontan a 1939. Su ingeniería alemana se traduce en herramientas precisas, fiables y con tolerancias estrictas en cada componente.' },
    { n: '02', t: 'Relación peso-potencia', d: 'La línea E-FORCE destaca por entregar alta fuerza de corte en equipos notablemente compactos y ligeros — clave para maniobrar en espacios reducidos y para reducir la fatiga del operador en intervenciones largas.' },
    { n: '03', t: 'Autocontenida y maniobrable', d: 'E-FORCE es a batería, sin mangueras ni unidad de poder. Su tamaño compacto y bajo peso la hacen ideal para motos de rescate, unidades ligeras y operación en habitáculos estrechos.' },
    { n: '04', t: 'Demostración, capacitación y servicio', d: 'Cada venta institucional incluye demostración en sitio, capacitación de operación y mantenimiento preventivo anual con refacciones originales, con bitácora para conservar la certificación NFPA 1960.' },
  ],
  linesIntro:
    'Weber Rescue cubre las cuatro herramientas de excarcelación, todas en versión E-FORCE a batería: corte, separación, la combinada 2-en-1 y el ariete de empuje. Una sola flota ligera con la precisión alemana y baterías comunes.',
  lineas: [
    { tipo: 'corte', badge: 'EN 13204:2025 · Corte', titulo: 'Cizallas', modelos: 'Weber Rescue RSC 190 E-FORCE3', desc: 'Cizalla E-FORCE3 para aceros modernos.', tech: 'EN 13204:2025 1K-2K-3K-4K-5K · Apertura 187 mm · 20.6 kg' },
    { tipo: 'separacion', badge: 'EN 13204 · Separación', titulo: 'Separadores', modelos: 'Weber Rescue SP 54 AS E-FORCE3', desc: 'Separador E-FORCE3 para apertura, levantamiento y empuje.', tech: '55–501 kN · Apertura 735 mm · 20.7 kg' },
    { tipo: 'combinada', badge: 'EN 13204:2025 · 2 en 1', titulo: 'Combinadas', modelos: 'Weber Rescue SPS 400 MK2 E-FORCE3', desc: 'Combinada E-FORCE3 para corte y separación.', tech: 'Corte 1I-2K-3J-4K-5J · Apertura 405 mm · 20.8 kg' },
    { tipo: 'estabilizacion', badge: 'EN 13204 · Empuje', titulo: 'Arietes', modelos: 'Weber Rescue RZT 2-1360 E-FORCE3', desc: 'Ariete telescópico E-FORCE3 para empuje y estabilización.', tech: '108 / 62 kN · Cerrado 587 mm · extendido 1,387 mm · 20.5 kg' },
  ],
  flagship: 'SP 54 AS E-FORCE3 400 MK2 E-FORCE3',
  anatomiaIntro:
    'La combinada SP 54 AS E-FORCE3 400 MK2 E-FORCE3 resume la filosofía Weber: máxima capacidad en el menor peso posible. Estos seis elementos explican por qué la ingeniería alemana es la opción de los cuerpos que priorizan la maniobrabilidad.',
  anatomia: [
    { t: 'Hojas de corte de precisión', d: 'Geometría de ingeniería alemana para cortar aceros al boro y de alta resistencia con clasificación EN 13204:2025 alta, en un cabezal compacto que maniobra en espacios reducidos.' },
    { t: 'Sistema autocontenido E-FORCE', d: 'Motor, bomba y batería integrados: sin mangueras ni unidad de poder, con un diseño optimizado para reducir peso y volumen sin perder fuerza.' },
    { t: 'Relación peso-potencia optimizada', d: 'El sello Weber: alta fuerza de corte en uno de los equipos más ligeros de la línea, reduciendo la fatiga del operador en intervenciones largas.' },
    { t: 'Empuñadura ergonómica de control', d: 'Control proporcional y rotación, operable con guante, equilibrada para un manejo cómodo y preciso cerca de la víctima.' },
    { t: 'Iluminación LED integrada', d: 'Ilumina el punto de trabajo en operaciones nocturnas y habitáculos oscuros, sin iluminación externa adicional.' },
    { t: 'Batería intercambiable de flota', d: 'Baterías comunes a la línea E-FORCE, intercambiables, para mantener la herramienta operativa durante intervenciones prolongadas.' },
  ],
  comparativa: [
    { modelo: 'RSC 190 E-FORCE3', tipo: 'corte', fuerza: 'NFPA A8-B9-C7-D9-E9-F4', rango: 'Apertura 187 mm', peso: '20.6 kg', fuente: 'Batería E-FORCE', ideal: 'Excarcelación · espacios reducidos', rec: true },
    { modelo: 'SP 54 AS E-FORCE3', tipo: 'separacion', fuerza: '55–501 kN', rango: 'Apertura 735 mm', peso: '20.7 kg', fuente: 'Batería E-FORCE', ideal: 'Crear acceso · maniobras largas', rec: false },
    { modelo: 'SP 54 AS E-FORCE3 400 MK2 E-FORCE3', tipo: 'combinada', fuerza: '—', rango: 'Apertura 405 mm', peso: '20.8 kg', fuente: 'Batería E-FORCE', ideal: 'Primer respondiente · motos de rescate', rec: false },
    { modelo: 'RZT 2-1360 E-FORCE3', tipo: 'estabilizacion', fuerza: '108 / 62 kN', rango: 'Cerrado 587 mm · extendido 1,387 mm', peso: '20.5 kg', fuente: 'Batería E-FORCE', ideal: 'Empuje de tablero · estabilización', rec: false },
  ],
  comparativaNote: NOTA_HR,
  guia: [
    { n: '01', t: 'Define el escenario: excarcelación vehicular pesada → cizalla + separador; primer respondiente, motos de rescate o espacios estrechos → combinada SP 54 AS E-FORCE3 400 MK2 E-FORCE3; empuje de tablero y estabilización → ariete.' },
    { n: '02', t: 'Prioriza el peso y la maniobrabilidad: si tu operación implica espacios reducidos, unidades ligeras o intervenciones largas, la relación peso-potencia E-FORCE reduce la fatiga sin sacrificar fuerza.' },
    { n: '03', t: 'Dimensiona por los vehículos de tu zona: verifica la clasificación de corte EN 13204:2025 de la cizalla ante los aceros al boro y postes B reforzados de los autos modernos.' },
    { n: '04', t: 'Incluye demostración en sitio, capacitación de operación y mantenimiento preventivo anual con refacciones originales para conservar la certificación NFPA 1960.' },
  ],
  segmentosIntro:
    'Weber Rescue es la primera opción de los cuerpos que priorizan la maniobrabilidad y el bajo peso con la precisión de la ingeniería alemana — motos de rescate, unidades ligeras y espacios reducidos —, con demostración en sitio y soporte en los 32 estados.',
  segmentos: [
    { num: '01', tipo: 'corte', titulo: 'Excarcelación Vehicular', desc: 'Bomberos urbanos y de carretera que necesitan cortar aceros modernos con equipos maniobrables. La cizalla RSC 190 E-FORCE3 entrega alta capacidad de corte en un cabezal compacto.', modelos: 'Weber RSC 190 E-FORCE3 · SP 54 AS E-FORCE3' },
    { num: '02', tipo: 'estabilizacion', titulo: 'Rescate Técnico y Estructural', desc: 'Equipos USAR y de rescate técnico que requieren empuje y estabilización ligeros y precisos. El ariete RZT 2-1360 E-FORCE3 crea y mantiene espacio con bajo peso y fiabilidad alemana.', modelos: 'Weber RZT 2-1360 E-FORCE3' },
    { num: '03', tipo: 'combinada', titulo: 'Primer Respondiente y Motos', desc: 'Unidades ligeras, motos de rescate y cuerpos que operan en espacios estrechos. La combinada SP 54 AS E-FORCE3 400 MK2 E-FORCE3, la compacta, lleva capacidad de excarcelación a donde otras herramientas no caben.', modelos: 'Weber SP 54 AS E-FORCE3 400 MK2 E-FORCE3' },
    { num: '04', tipo: 'separacion', titulo: 'Brigadas Industriales', desc: 'Brigadas de planta y atención a atrapamientos en maquinaria que valoran precisión y maniobrabilidad. El separador SP 54 AS E-FORCE3 crea acceso y desplaza cargas con la ingeniería alemana.', modelos: 'Weber SP 54 AS E-FORCE3' },
  ],
  faqs: [
    { q: '¿Qué norma certifica una herramienta hidráulica de rescate?', a: 'Se referencian la NFPA 1960 y la EN 13204:2025 (que clasifica la capacidad de corte por categorías). Las herramientas Weber Rescue cumplen ambas; te entregamos la ficha con la clasificación EN 13204:2025 por modelo, que define qué aceros puede cortar la cizalla — el dato técnico clave para licitación.' },
    { q: '¿Por qué se destaca a Weber por su relación peso-potencia?', a: 'Porque la ingeniería alemana de Weber-Hydraulik optimiza cada componente para entregar alta fuerza de corte en equipos notablemente compactos y ligeros. Eso importa por dos razones: maniobrabilidad (cabe y opera en espacios reducidos, motos de rescate, habitáculos estrechos) y menor fatiga del operador en intervenciones prolongadas. La SP 54 AS E-FORCE3 400 MK2 E-FORCE3 combinada es de las más ligeras de la línea manteniendo capacidad de excarcelación completa.' },
    { q: '¿Batería (E-FORCE) o sistema hidráulico con unidad de poder?', a: 'La línea E-FORCE a batería es autocontenida: sin mangueras ni bomba, se despliega en segundos y el operador se mueve libre por la escena. Es hoy la opción preferida de la mayoría de los cuerpos, especialmente los que priorizan ligereza. El sistema con unidad de poder conserva sentido para operación continua muy intensiva. Te ayudamos a elegir según tu volumen de operación.' },
    { q: '¿Las cizallas cortan los aceros al boro de los vehículos modernos?', a: 'Sí, con la clasificación de corte adecuada. Los autos recientes usan acero al boro y de alta resistencia en postes B y zonas de seguridad. Las cizallas Weber RSC 190 E-FORCE3 tienen geometría de precisión para estos materiales con clasificación EN 13204:2025 alta. Dimensionamos la herramienta según los modelos de vehículo más frecuentes en tu zona.' },
    { q: '¿Qué diferencia a Weber Rescue de Holmatro y Hurst?', a: 'Las tres cuentan con líneas a batería. Weber Rescue ofrece E-FORCE3; Hurst desarrolló Jaws of Life® y ofrece eDRAULIC; Holmatro ofrece Pentheon y puntas desmontables en las combinadas. Te facilitamos las tres fichas para evaluación comparativa.' },
    { q: '¿Incluyen demostración, capacitación y mantenimiento para licitación?', a: 'Sí. Cada venta institucional incluye demostración en sitio con escenarios reales, capacitación básica de operación y mantenimiento preventivo anual con refacciones originales. Para concursos públicos generamos el manifiesto de cumplimiento NFPA 1960 / EN 13204:2025 por partida con la clasificación de corte y el plan de servicio para la vida útil del equipo.' },
  ],
  ctaKicker: 'Ingeniería alemana · máxima maniobrabilidad',
  ctaTitleHtml: 'Más potencia.<br/>Menos peso.',
  waQuote: 'Hola, quiero cotizar herramientas de rescate Weber Rescue E-FORCE NFPA 1960.',
};

/* ── Export ────────────────────────────────────────────────────────────────── */
export const herramientasBrandList: EquipmentBrand[] = [holmatro, hurst, weber];
