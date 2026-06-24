/**
 * Marcas de Equipos SCBA — implementan EquipmentBrand (ver brandPages.ts).
 * Renderizadas por src/components/products/BrandPage.astro (mismo componente que cascos/trajes).
 *
 * Categoría 'equipos-scba' (columnas de comparativa: Autonomía/Cilindro/Peso/Electrónica/Ideal).
 * Familias por configuración: estructural · industrial (larga duración) · cbrn · usar (RIT/rescate).
 */
import type { EquipmentBrand } from './brandPages';

const NOTA_SCBA =
  '* SCBA de circuito abierto de presión positiva certificados NFPA 1970 (consolidó la NFPA 1981) y aprobación NIOSH. Cilindros de fibra de carbono; autonomía nominal según configuración y consumo del usuario.';

/* ════════════════════════════════════════════════════════════════════════════
   MSA G1
   ════════════════════════════════════════════════════════════════════════════ */
const msaG1: EquipmentBrand = {
  categorySlug: 'equipos-scba',
  slug: 'msa-g1',
  brand: 'MSA Safety',
  brandLabel: 'MSA G1',
  crossDesc: 'Electrónica integrada · EOSTI · telemetría ICM · NFPA 1970',
  eyebrow: 'MSA Safety · G1 SCBA · Distribuidor Autorizado MX',
  heroTitleTop: 'SCBA MSA G1',
  heroTitleAccent: 'aire autónomo NFPA.',
  heroLead:
    'Distribuidor autorizado del SCBA MSA G1 en México. Las 4 configuraciones —estructural, industrial 60 min, CBRN y RIT— con cilindros de fibra de carbono 4500 psi, entrega en CDMX y servicio técnico autorizado.',
  heroIntro: [
    'MSA Safety —NYSE: MSA— es el grupo industrial de seguridad más grande del mundo. El G1 es su equipo de respiración autónoma insignia: la electrónica más integrada del mercado, con la válvula EOSTI montada en el regulador (sin módulo externo), alarma PASS y telemetría ICM opcional.',
    'Es la pieza más crítica del EPP: de él depende cada minuto dentro de una atmósfera IDLH. Distribuimos el G1 en configuraciones de 30, 45 y 60 minutos con aprobación NFPA 1970 y NIOSH CBRN, y somos servicio técnico autorizado para su mantenimiento.',
  ],
  heroBadges: ['NFPA 1970', 'NIOSH', 'EOSTI integrado', 'Telemetría ICM', '4500 psi', 'MSA Safety · NYSE', 'Distribuidor autorizado MX'],
  seoTitle: 'SCBA MSA G1 NFPA 1970 — Aire Autónomo · México',
  seoDescription:
    'SCBA MSA G1 certificado NFPA 1970 y NIOSH en México: estructural, industrial 60 min, CBRN y RIT. Cilindro de fibra de carbono 4500 psi, electrónica EOSTI integrada. Distribuidor autorizado · servicio técnico.',
  founding: '1914',
  parentOrg: { name: 'MSA Safety Incorporated', ticker: 'NYSE:MSA' },
  stats: [
    { valor: 'NYSE: MSA', etiq: 'Grupo de seguridad global' },
    { valor: 'EOSTI', etiq: 'Electrónica integrada en el regulador' },
    { valor: '4500 psi', etiq: 'Cilindro de fibra de carbono' },
    { valor: '32', etiq: 'Estados con cobertura' },
  ],
  credenciales: [
    { n: '01', t: 'MSA Safety · líder mundial', d: 'El G1 es el SCBA insignia de MSA Safety (NYSE: MSA), el mayor grupo industrial de seguridad del mundo. Continuidad de suministro, refacciones originales y red global de servicio garantizadas.' },
    { n: '02', t: 'La electrónica más integrada', d: 'La válvula EOSTI (indicador de fin de servicio) va montada en el regulador, sin módulo externo. Suma alarma PASS de movimiento, telemetría ICM y localizador — toda la información de aire y posición del bombero en un solo sistema.' },
    { n: '03', t: 'Servicio técnico autorizado', d: 'Somos servicio autorizado: prueba hidrostática de cilindros, prueba de flujo anual, mantenimiento de reguladores y refacciones originales, con bitácora lista para auditoría NFPA 1852. Tu inversión queda protegida toda la vida útil.' },
    { n: '04', t: 'Integración total del conjunto', d: 'Configuramos el G1 con la máscara full-face, el adaptador de comunicación, la integración nativa con casco MSA Gallet EVOGUARD y el soporte para cámara térmica G1-TIC — sin interferencias y conservando la certificación.' },
  ],
  linesIntro:
    'El G1 cubre los cuatro escenarios de uso desde una sola plataforma: estructural para combate en edificios, larga duración para industria y túneles, CBRN para HAZMAT y RIT para rescate de bombero. Una sola flota interoperable con refacciones comunes.',
  lineas: [
    { tipo: 'estructural', badge: 'NFPA 1970 · 30/45 min', titulo: 'Configuración Estructural', modelos: 'MSA G1 Estructural', desc: 'El SCBA de combate estructural metropolitano: EOSTI integrado, alarma PASS y máscara G1 anti-empañante, con cilindro de 30 ó 45 minutos a 4500 psi. El más solicitado en cuerpos tier-1 de México.', tech: 'EOSTI + PASS · Máscara G1 full-face · 4500 psi · NFPA 1970' },
    { tipo: 'industrial', badge: 'NFPA 1970 · 60 min', titulo: 'Configuración Industrial', modelos: 'MSA G1 Industrial 60 min', desc: 'Autonomía extendida de 60 minutos para industria pesada, petroquímica, túneles y espacios confinados. Telemetría ICM para control de aire del equipo y opción antiestática ATEX.', tech: 'Cilindro 60 min · Telemetría ICM · ATEX opcional · NFPA 1970' },
    { tipo: 'cbrn', badge: 'NFPA 1970 · NIOSH CBRN', titulo: 'Configuración CBRN', modelos: 'MSA G1 CBRN', desc: 'Aprobación NIOSH CBRN para respuesta a materiales peligrosos y agentes químicos, biológicos, radiológicos y nucleares. Materiales y conexiones aptos para descontaminación.', tech: 'NIOSH CBRN · Descontaminable · Compatible Nivel A · NFPA 1970' },
    { tipo: 'usar', badge: 'NFPA 1970 · RIT', titulo: 'Configuración RIT / Rescate', modelos: 'MSA G1 RIT', desc: 'Equipo de intervención rápida para rescate de bombero caído: segunda fuente de aire, conexión de transferencia (buddy breathing) y bolsa de despliegue rápido de alta visibilidad.', tech: 'Segunda botella · Transferencia de aire · Despliegue rápido' },
  ],
  flagship: 'G1',
  anatomiaIntro:
    'El G1 es un sistema de soporte vital, no un accesorio. Estos seis elementos explican por qué es el SCBA más solicitado en los cuerpos metropolitanos de México y por qué su electrónica marca la diferencia operativa.',
  anatomia: [
    { t: 'Regulador de presión positiva', d: 'Entrega aire a demanda manteniendo presión positiva dentro de la máscara para impedir la entrada de humo. Integra la válvula EOSTI de fin de servicio, sin módulo externo que se dañe.' },
    { t: 'Máscara full-face G1', d: 'Pieza facial de amplio campo visual con pantalla anti-empañante, sellado certificado y puerto para comunicación y amplificador de voz.' },
    { t: 'Espaldera y arnés', d: 'Estructura ergonómica que distribuye la carga del cilindro sobre cadera y hombros; correas lavables y resistentes a la contaminación química.' },
    { t: 'Cilindro de fibra de carbono 4500 psi', d: 'Suministro de aire en configuraciones de 30, 45 y 60 minutos. Ligero, de alta presión y sujeto a prueba hidrostática periódica conforme a NFPA 1852.' },
    { t: 'Alarma PASS integrada', d: 'Dispositivo de alerta personal por inmovilidad y activación manual, con señal acústica y luminosa para localizar a un bombero en problemas.' },
    { t: 'Telemetría e ICM', d: 'El módulo de control integrado transmite presión de aire y estado del bombero a la cabina de mando, con localizador para operaciones de rescate (RIT).' },
  ],
  comparativa: [
    { modelo: 'G1 Estructural', tipo: 'estructural', autonomia: '30 / 45 min', cilindro: 'Fibra de carbono 4500 psi', peso: '~5.4 kg', electronica: 'EOSTI + PASS', ideal: 'Combate estructural metropolitano', rec: true },
    { modelo: 'G1 Industrial', tipo: 'industrial', autonomia: '60 min', cilindro: 'Fibra de carbono 4500 psi', peso: '~6.6 kg', electronica: 'EOSTI + telemetría ICM', ideal: 'Industria, túneles, confinados', rec: false },
    { modelo: 'G1 CBRN', tipo: 'cbrn', autonomia: '30 / 45 min', cilindro: 'Fibra de carbono 4500 psi', peso: '~5.6 kg', electronica: 'EOSTI + PASS · CBRN', ideal: 'HAZMAT y agentes químicos', rec: false },
    { modelo: 'G1 RIT', tipo: 'usar', autonomia: 'Segunda botella', cilindro: 'Fibra de carbono 4500 psi', peso: '~5.4 kg', electronica: 'EOSTI + transferencia', ideal: 'Rescate de bombero (RIT/RIC)', rec: false },
  ],
  comparativaNote: NOTA_SCBA,
  guia: [
    { n: '01', t: 'Define el escenario dominante: combate estructural → G1 Estructural (30/45 min); industria, túneles o confinados → G1 Industrial (60 min); HAZMAT/CBRN → G1 CBRN; equipo de rescate de bombero → G1 RIT.' },
    { n: '02', t: 'Elige la autonomía según la operación: 30 min para respuesta urbana estándar, 45 min para mayor margen, 60 min para industria y rescate prolongado. A mayor autonomía, mayor peso y volumen del cilindro.' },
    { n: '03', t: 'Define la electrónica: EOSTI y PASS son base; suma telemetría ICM y localizador si quieres control de aire del equipo en cabina de mando y capacidad de búsqueda RIT.' },
    { n: '04', t: 'Asegura el servicio: prueba hidrostática de cilindros, prueba de flujo anual y refacciones originales con servicio autorizado, y verifica la compatibilidad con tu máscara, casco y sistema de comunicación.' },
  ],
  segmentosIntro:
    'El G1 es la primera opción de los cuerpos que requieren la electrónica más integrada, telemetría para control de aire y servicio técnico autorizado, con el respaldo de MSA Safety y soporte en los 32 estados.',
  segmentos: [
    { num: '01', tipo: 'estructural', titulo: 'Departamentos Estructurales Tier-1', desc: 'CDMX, GDL, MTY y los principales cuerpos del país. El G1 Estructural domina por su EOSTI integrado, máscara anti-empañante y la telemetría que da visibilidad de aire de toda la cuadrilla en cabina de mando.', modelos: 'G1 Estructural' },
    { num: '02', tipo: 'industrial', titulo: 'Industria, Petroquímica y Confinados', desc: 'Refinerías, plantas de proceso y rescate en espacios confinados requieren autonomía de 60 minutos y opción antiestática ATEX. El G1 Industrial cubre las jornadas largas con control de aire del equipo.', modelos: 'G1 Industrial 60 min' },
    { num: '03', tipo: 'cbrn', titulo: 'Brigadas HAZMAT / CBRN', desc: 'Equipos de respuesta a materiales peligrosos necesitan aprobación NIOSH CBRN y materiales descontaminables. El G1 CBRN es compatible con máscara CBRN y trajes encapsulados Nivel A.', modelos: 'G1 CBRN' },
    { num: '04', tipo: 'usar', titulo: 'Equipos RIT / Rescate', desc: 'Los equipos de intervención rápida (RIT/RIC) necesitan una segunda fuente de aire y transferencia rápida para rescatar a un bombero caído. El G1 RIT se despliega en segundos e interopera con la flota.', modelos: 'G1 RIT' },
  ],
  faqs: [
    { q: '¿Bajo qué norma debe estar certificado un SCBA de bombero en México?', a: 'Bajo NFPA 1970, la norma que desde 2024 consolidó a la NFPA 1981 (equipos de respiración autónoma), con aprobación NIOSH del National Institute for Occupational Safety and Health. Para respuesta a materiales peligrosos se exige además la aprobación NIOSH CBRN. En licitaciones públicas el pliego suele referenciar directamente NFPA 1970 y NIOSH por edición. El MSA G1 cumple ambas en sus configuraciones correspondientes.' },
    { q: '¿Qué autonomía elijo: 30, 45 o 60 minutos?', a: 'La autonomía nominal asume un consumo de referencia; el tiempo real depende del esfuerzo del usuario. 30 minutos es el estándar de respuesta urbana; 45 minutos da más margen para combate estructural y rescate; 60 minutos es para industria, túneles y espacios confinados donde la salida es larga. A mayor autonomía, mayor presión, peso y volumen del cilindro — por eso conviene dimensionar por escenario, no comprar el más grande "por si acaso".' },
    { q: '¿Qué es la aprobación NIOSH CBRN y cuándo la necesito?', a: 'NIOSH CBRN certifica que el SCBA protege contra agentes químicos, biológicos, radiológicos y nucleares además del humo de incendio. Es imprescindible para brigadas HAZMAT, protección civil con riesgo CBRN y plantas con inventario de sustancias tóxicas. El G1 CBRN usa materiales y conexiones aptos para descontaminación y es compatible con máscara CBRN y trajes encapsulados Nivel A.' },
    { q: '¿Qué diferencia al MSA G1 del Dräger PSS 7000 y del 3M Scott Air-Pak NxG7?', a: 'Los tres son SCBA tier-1 de presión positiva NFPA 1970. La diferencia es de enfoque: el MSA G1 lidera en electrónica integrada (EOSTI en el regulador, telemetría ICM); el Dräger PSS 7000 destaca por la ergonomía del arnés y la distribución de carga; el 3M Scott Air-Pak NxG7 sobresale por su plataforma modular y el localizador Pak-Tracker. Para un cuerpo que prioriza datos y telemetría, el G1 tiene ventaja. Te facilitamos las tres fichas para evaluación comparativa.' },
    { q: '¿Qué mantenimiento exige un SCBA y cada cuánto?', a: 'La NFPA 1852 establece el programa: prueba de flujo (flow test) al menos anual, inspección del usuario antes de cada uso, prueba hidrostática del cilindro de fibra de carbono cada 5 años (con vida útil de 15 años) y mantenimiento de reguladores según el fabricante. Somos servicio técnico autorizado MSA: realizamos estas pruebas con equipo calibrado y entregamos la bitácora para tu expediente de auditoría.' },
    { q: '¿Entregan ficha técnica y servicio para licitación pública?', a: 'Sí. Cada G1 incluye el certificado de conformidad NFPA 1970, la aprobación NIOSH (y NIOSH CBRN cuando aplica) y la ficha técnica por configuración. Para concursos públicos (CompraNet, IMSS, Pemex, gobiernos estatales) generamos el manifiesto de cumplimiento por partida e incluimos el plan de servicio técnico autorizado para la vida útil del equipo.' },
  ],
  ctaKicker: 'El SCBA con la electrónica más integrada',
  ctaTitleHtml: 'Cada minuto cuenta.<br/>Aire en el que confías.',
  waQuote: 'Hola, quiero cotizar equipos SCBA MSA G1 NFPA 1970.',
};

/* ════════════════════════════════════════════════════════════════════════════
   DRÄGER PSS 7000
   ════════════════════════════════════════════════════════════════════════════ */
const dragerPss: EquipmentBrand = {
  categorySlug: 'equipos-scba',
  slug: 'drager-pss',
  brand: 'Dräger',
  brandLabel: 'Dräger PSS 7000',
  crossDesc: 'Arnés ergonómico premium · Sentinel · EN 137 + NFPA 1970',
  eyebrow: 'Dräger · PSS 7000 · Distribuidor Autorizado MX',
  heroTitleTop: 'SCBA Dräger',
  heroTitleAccent: 'PSS 7000 NFPA.',
  heroLead:
    'Distribuidor autorizado del SCBA Dräger PSS 7000 en México. Las 4 configuraciones —estructural, industrial 60 min, CBRN y RIT— con el arnés más ergonómico de su clase, electrónica Sentinel y servicio técnico autorizado.',
  heroIntro: [
    'Dräger —ingeniería alemana desde 1889— es una de las referencias mundiales en tecnología de respiración y protección. El PSS 7000 es su SCBA de alta gama: una placa dorsal flexible que distribuye la carga sobre cadera y hombros para reducir la fatiga en jornadas largas.',
    'Suma el pulmoautomático de presión positiva, la electrónica Sentinel con telemetría opcional y la máscara FPS 7000 de amplio campo visual. Certificado NFPA 1970 y EN 137, con aprobación NIOSH CBRN en su configuración HAZMAT.',
  ],
  heroBadges: ['NFPA 1970', 'EN 137', 'NIOSH', 'Arnés ergonómico', 'Sentinel', 'Ingeniería alemana', 'Distribuidor autorizado MX'],
  seoTitle: 'SCBA Dräger PSS 7000 NFPA 1970 — Aire Autónomo MX',
  seoDescription:
    'SCBA Dräger PSS 7000 certificado NFPA 1970 y EN 137 en México: estructural, industrial 60 min, CBRN y RIT. Arnés ergonómico, electrónica Sentinel. Distribuidor autorizado · servicio técnico.',
  founding: '1889',
  parentOrg: { name: 'Drägerwerk AG & Co. KGaA' },
  stats: [
    { valor: '1889', etiq: 'Ingeniería alemana Dräger' },
    { valor: 'Ergonomía', etiq: 'Placa dorsal flexible' },
    { valor: 'Sentinel', etiq: 'Electrónica y telemetría' },
    { valor: '32', etiq: 'Estados con cobertura' },
  ],
  credenciales: [
    { n: '01', t: 'Ingeniería alemana desde 1889', d: 'Dräger es una de las referencias mundiales en tecnología de respiración y protección, con más de 130 años de ingeniería. El PSS 7000 hereda esa precisión en cada componente del soporte vital.' },
    { n: '02', t: 'El arnés más ergonómico de su clase', d: 'La placa dorsal flexible del PSS 7000 se adapta a la espalda y transfiere el peso del cilindro a la cadera, reduciendo la fatiga lumbar en operaciones prolongadas — determinante en jornadas largas de industria o rescate.' },
    { n: '03', t: 'Electrónica Sentinel y servicio autorizado', d: 'La electrónica Sentinel integra alarma de inmovilidad, gestión de aire y telemetría opcional. Somos servicio técnico autorizado: prueba de flujo, hidrostática y refacciones originales con bitácora NFPA 1852.' },
    { n: '04', t: 'Doble norma NFPA + EN', d: 'El PSS 7000 cumple NFPA 1970 y EN 137 con aprobación NIOSH (y NIOSH CBRN en su versión HAZMAT), lo que facilita su aceptación en operaciones con estándares mixtos y en industria de capital extranjero.' },
  ],
  linesIntro:
    'El PSS 7000 cubre los cuatro escenarios de uso desde una plataforma ergonómica: estructural para combate, larga duración para industria, CBRN para HAZMAT y RIT para rescate. Una sola flota con el confort de carga como diferenciador.',
  lineas: [
    { tipo: 'estructural', badge: 'NFPA 1970 · 30/45 min', titulo: 'Configuración Estructural', modelos: 'PSS 7000 Estructural', desc: 'El SCBA estructural con la mejor distribución de carga del mercado. Placa dorsal flexible, pulmoautomático de presión positiva y máscara FPS 7000 de amplio campo visual, con cilindro de 30 ó 45 minutos.', tech: 'Placa dorsal ergonómica · FPS 7000 · Presión positiva · NFPA 1970' },
    { tipo: 'industrial', badge: 'NFPA 1970 · 60 min', titulo: 'Configuración Industrial', modelos: 'PSS 7000 Industrial 60 min', desc: 'Autonomía de 60 minutos para industria pesada, petroquímica y túneles, con materiales resistentes a hidrocarburos, opción antiestática ATEX y telemetría Sentinel para control del equipo.', tech: 'Cilindro 60 min · Resistente a HC · ATEX opcional · Sentinel' },
    { tipo: 'cbrn', badge: 'NFPA 1970 · NIOSH CBRN', titulo: 'Configuración CBRN', modelos: 'PSS 7000 CBRN', desc: 'Aprobación NIOSH CBRN para brigadas HAZMAT y respuesta a agentes químicos. Conexiones de seguridad, acoplamiento de aire en línea y materiales validados para descontaminación.', tech: 'NIOSH CBRN · Aire en línea · Descontaminable · NFPA 1970' },
    { tipo: 'usar', badge: 'NFPA 1970 · RIT', titulo: 'Configuración RIT / Rescate', modelos: 'PSS 7000 RIT', desc: 'Kit de intervención rápida para rescate de bombero: segunda fuente de aire, conexión de transferencia rápida y bolsa de despliegue de alta visibilidad, interoperable con la flota PSS 7000.', tech: 'Segunda botella · Transferencia rápida · Despliegue RIT' },
  ],
  flagship: 'PSS 7000',
  anatomiaIntro:
    'El PSS 7000 está diseñado alrededor del bombero, no al revés. Estos seis elementos explican por qué su ergonomía y su electrónica Sentinel lo convierten en la opción de los cuerpos que valoran el confort de carga y la fiabilidad.',
  anatomia: [
    { t: 'Pulmoautomático de presión positiva', d: 'Entrega aire a demanda manteniendo presión positiva en la máscara; conmutable y de baja resistencia respiratoria para reducir el esfuerzo del usuario.' },
    { t: 'Máscara Dräger FPS 7000', d: 'Pieza facial de amplio campo visual con sellado certificado, visor anti-rayadura y puerto para comunicación y amplificador de voz.' },
    { t: 'Placa dorsal flexible', d: 'El corazón del PSS 7000: se adapta a la espalda y transfiere el peso del cilindro a la cadera, reduciendo la fatiga lumbar en operaciones prolongadas.' },
    { t: 'Cilindro de fibra de carbono', d: 'Suministro de aire en configuraciones de 30, 45 y 60 minutos a 300 bar, ligero y sujeto a prueba hidrostática periódica conforme a NFPA 1852.' },
    { t: 'Electrónica Sentinel', d: 'Gestiona la alarma de inmovilidad, el manómetro electrónico y la telemetría opcional, con transmisión de datos a la cabina de mando.' },
    { t: 'Arnés lavable y descontaminable', d: 'Correas y placa de materiales resistentes a hidrocarburos y aptos para descontaminación, clave en industria y respuesta CBRN.' },
  ],
  comparativa: [
    { modelo: 'PSS 7000 Estructural', tipo: 'estructural', autonomia: '30 / 45 min', cilindro: 'Fibra de carbono 300 bar', peso: '~5.5 kg', electronica: 'Sentinel opcional', ideal: 'Combate estructural · confort de carga', rec: true },
    { modelo: 'PSS 7000 Industrial', tipo: 'industrial', autonomia: '60 min', cilindro: 'Fibra de carbono 300 bar', peso: '~6.7 kg', electronica: 'Sentinel + telemetría', ideal: 'Petroquímica, túneles, ATEX', rec: false },
    { modelo: 'PSS 7000 CBRN', tipo: 'cbrn', autonomia: '30 / 45 min', cilindro: 'Fibra de carbono 300 bar', peso: '~5.7 kg', electronica: 'Sentinel · CBRN', ideal: 'HAZMAT y agentes químicos', rec: false },
    { modelo: 'PSS 7000 RIT', tipo: 'usar', autonomia: 'Segunda botella', cilindro: 'Fibra de carbono 300 bar', peso: '~5.5 kg', electronica: 'Sentinel + transferencia', ideal: 'Rescate de bombero (RIT/RIC)', rec: false },
  ],
  comparativaNote: NOTA_SCBA,
  guia: [
    { n: '01', t: 'Define el escenario dominante: combate estructural → PSS 7000 Estructural (30/45 min); industria/túneles → Industrial (60 min); HAZMAT/CBRN → CBRN; equipo de rescate de bombero → RIT.' },
    { n: '02', t: 'Aprovecha la ergonomía: si tu operación implica jornadas largas o mucho desplazamiento con carga, la placa dorsal flexible del PSS 7000 reduce la fatiga frente a arneses rígidos. Define la autonomía (30/45/60) por escenario.' },
    { n: '03', t: 'Define la electrónica Sentinel: alarma de inmovilidad y manómetro electrónico de base; suma telemetría si quieres gestión de aire del equipo en cabina de mando.' },
    { n: '04', t: 'Asegura el servicio: prueba de flujo anual, hidrostática del cilindro y refacciones originales con servicio autorizado, y verifica compatibilidad de máscara FPS 7000 con tu casco y comunicación.' },
  ],
  segmentosIntro:
    'El PSS 7000 es la primera opción de los cuerpos que priorizan el confort de carga y la fiabilidad de la ingeniería alemana, con doble certificación NFPA + EN, electrónica Sentinel y soporte en los 32 estados.',
  segmentos: [
    { num: '01', tipo: 'estructural', titulo: 'Departamentos Estructurales', desc: 'Cuerpos urbanos que valoran la distribución de carga y el confort en operaciones de alta frecuencia. La placa dorsal flexible del PSS 7000 reduce la fatiga lumbar acumulada turno tras turno.', modelos: 'PSS 7000 Estructural' },
    { num: '02', tipo: 'industrial', titulo: 'Industria y Petroquímica', desc: 'Refinerías, plantas de proceso y operaciones en túneles requieren 60 minutos de autonomía, resistencia a hidrocarburos y opción ATEX. El PSS 7000 Industrial es referencia en industria de capital extranjero por su doble norma NFPA + EN.', modelos: 'PSS 7000 Industrial 60 min' },
    { num: '03', tipo: 'cbrn', titulo: 'Brigadas HAZMAT / CBRN', desc: 'La respuesta a materiales peligrosos exige aprobación NIOSH CBRN, acoplamiento de aire en línea y materiales descontaminables. El PSS 7000 CBRN es compatible con trajes encapsulados Nivel A.', modelos: 'PSS 7000 CBRN' },
    { num: '04', tipo: 'usar', titulo: 'Equipos RIT / Rescate', desc: 'Los equipos de intervención rápida necesitan transferencia de aire y despliegue veloz para rescatar a un bombero caído. El PSS 7000 RIT se integra con la flota y la electrónica Sentinel.', modelos: 'PSS 7000 RIT' },
  ],
  faqs: [
    { q: '¿Bajo qué norma debe estar certificado un SCBA de bombero en México?', a: 'Bajo NFPA 1970, la norma que desde 2024 consolidó a la NFPA 1981, con aprobación NIOSH. El Dräger PSS 7000 cumple además EN 137 (el estándar europeo), lo que facilita su aceptación en industria de capital extranjero y operaciones con estándares mixtos. Para HAZMAT se requiere la aprobación NIOSH CBRN, disponible en su configuración correspondiente.' },
    { q: '¿Por qué importa la ergonomía del arnés en un SCBA?', a: 'Porque el bombero carga el SCBA durante toda la intervención y, sumado al traje, casco y herramientas, el peso eleva el estrés cardiovascular — la primera causa de muerte en servicio activo. La placa dorsal flexible del PSS 7000 transfiere la carga del cilindro a la cadera y se adapta a la espalda, reduciendo la fatiga lumbar respecto a arneses rígidos. En jornadas largas de industria o rescate, esa diferencia es de seguridad, no de comodidad.' },
    { q: '¿Qué es la aprobación NIOSH CBRN y cuándo la necesito?', a: 'NIOSH CBRN certifica que el SCBA protege contra agentes químicos, biológicos, radiológicos y nucleares además del humo. Es imprescindible para brigadas HAZMAT, protección civil con riesgo CBRN y plantas con sustancias tóxicas. El PSS 7000 CBRN usa conexiones de seguridad, acoplamiento de aire en línea y materiales validados para descontaminación, compatible con trajes encapsulados Nivel A.' },
    { q: '¿Qué diferencia al Dräger PSS 7000 del MSA G1 y del 3M Scott Air-Pak NxG7?', a: 'Los tres son SCBA tier-1 de presión positiva NFPA 1970. El Dräger PSS 7000 destaca por la ergonomía del arnés y la doble certificación NFPA + EN; el MSA G1 lidera en electrónica integrada (EOSTI, telemetría ICM); el 3M Scott Air-Pak NxG7 sobresale por su plataforma modular y el localizador Pak-Tracker. Para un cuerpo que prioriza el confort de carga y la compatibilidad con estándares europeos, el PSS 7000 tiene ventaja. Te facilitamos las tres fichas para evaluación comparativa.' },
    { q: '¿Qué mantenimiento exige un SCBA y cada cuánto?', a: 'La NFPA 1852 establece el programa: prueba de flujo al menos anual, inspección del usuario antes de cada uso, prueba hidrostática del cilindro de fibra de carbono cada 5 años (vida útil de 15 años) y mantenimiento de pulmoautomáticos según fabricante. Somos servicio técnico autorizado Dräger: realizamos estas pruebas con equipo calibrado y entregamos la bitácora para auditoría.' },
    { q: '¿Entregan ficha técnica y servicio para licitación pública?', a: 'Sí. Cada PSS 7000 incluye el certificado NFPA 1970, la conformidad EN 137, la aprobación NIOSH (y NIOSH CBRN cuando aplica) y la ficha técnica por configuración. Para concursos públicos generamos el manifiesto de cumplimiento por partida e incluimos el plan de servicio técnico autorizado para la vida útil del equipo.' },
  ],
  ctaKicker: 'Ergonomía alemana · doble norma NFPA + EN',
  ctaTitleHtml: 'El peso bien repartido.<br/>El aire bien gestionado.',
  waQuote: 'Hola, quiero cotizar equipos SCBA Dräger PSS 7000 NFPA 1970.',
};

/* ════════════════════════════════════════════════════════════════════════════
   3M SCOTT AIR-PAK NxG7
   ════════════════════════════════════════════════════════════════════════════ */
const scottAirPak: EquipmentBrand = {
  categorySlug: 'equipos-scba',
  slug: 'scott-air-pak',
  brand: '3M Scott',
  brandLabel: '3M Scott Air-Pak NxG7',
  crossDesc: 'Plataforma modular · Pak-Tracker · EPIC 3 · NFPA 1970',
  eyebrow: '3M Scott · Air-Pak NxG7 · Distribuidor Autorizado MX',
  heroTitleTop: 'SCBA 3M Scott',
  heroTitleAccent: 'Air-Pak NxG7.',
  heroLead:
    'Distribuidor autorizado del SCBA 3M Scott Air-Pak NxG7 en México. Las 4 configuraciones —estructural, industrial 60 min, CBRN y RIT— con plataforma modular, localizador Pak-Tracker integrado y servicio técnico autorizado.',
  heroIntro: [
    'Scott Safety —hoy parte de 3M— lleva desde 1932 fabricando equipos de respiración para bomberos. El Air-Pak NxG7 es su plataforma de nueva generación: modular y actualizable por componentes, para que el SCBA crezca con el departamento sin reemplazar toda la flota.',
    'Integra de serie el localizador Pak-Tracker para búsqueda de bombero caído y el amplificador de voz EPIC 3. Certificado NFPA 1970 con aprobación NIOSH y NIOSH CBRN en su configuración HAZMAT, sobre cilindros de fibra de carbono 4500 psi.',
  ],
  heroBadges: ['NFPA 1970', 'NIOSH', 'Pak-Tracker', 'EPIC 3', 'Modular', '4500 psi', 'Distribuidor autorizado MX'],
  seoTitle: 'SCBA 3M Scott Air-Pak NxG7 NFPA 1970 — México',
  seoDescription:
    'SCBA 3M Scott Air-Pak NxG7 certificado NFPA 1970 y NIOSH en México: estructural, industrial 60 min, CBRN y RIT. Plataforma modular, localizador Pak-Tracker y EPIC 3. Distribuidor autorizado · servicio técnico.',
  founding: '1932',
  parentOrg: { name: '3M Company' },
  stats: [
    { valor: '1932', etiq: 'Scott · hoy parte de 3M' },
    { valor: 'Pak-Tracker', etiq: 'Localizador RIT integrado' },
    { valor: 'Modular', etiq: 'Plataforma actualizable' },
    { valor: '32', etiq: 'Estados con cobertura' },
  ],
  credenciales: [
    { n: '01', t: 'Scott desde 1932 · respaldo 3M', d: 'Scott Safety lleva casi un siglo fabricando equipos de respiración para bomberos y hoy forma parte de 3M, uno de los mayores grupos industriales del mundo — continuidad de suministro y refacciones originales aseguradas.' },
    { n: '02', t: 'Plataforma modular y actualizable', d: 'El Air-Pak NxG7 se actualiza por componentes: el departamento puede sumar electrónica, telemetría o nuevas máscaras sin reemplazar la flota completa, protegiendo la inversión a largo plazo.' },
    { n: '03', t: 'Pak-Tracker y EPIC 3 de serie', d: 'Integra el localizador Pak-Tracker para encontrar a un bombero caído en humo denso y el amplificador de voz EPIC 3 para comunicación clara con la máscara puesta — herramientas de seguridad de serie, no opcionales.' },
    { n: '04', t: 'Servicio técnico autorizado', d: 'Somos servicio autorizado: prueba de flujo anual, hidrostática de cilindros, mantenimiento de reguladores y refacciones originales con bitácora NFPA 1852 para tu expediente de auditoría.' },
  ],
  linesIntro:
    'El Air-Pak NxG7 cubre los cuatro escenarios de uso desde una plataforma modular: estructural para combate, larga duración para industria, CBRN para HAZMAT y RIT para rescate, con el localizador Pak-Tracker como diferenciador en seguridad.',
  lineas: [
    { tipo: 'estructural', badge: 'NFPA 1970 · 30/45 min', titulo: 'Configuración Estructural', modelos: 'Air-Pak NxG7 Estructural', desc: 'El SCBA modular de combate estructural con Pak-Tracker y EPIC 3 de serie. Máscara AV-3000 HT de alto confort y cilindro de 30 ó 45 minutos a 4500 psi. La plataforma que crece con el departamento.', tech: 'Pak-Tracker + EPIC 3 · AV-3000 HT · 4500 psi · NFPA 1970' },
    { tipo: 'industrial', badge: 'NFPA 1970 · 60 min', titulo: 'Configuración Industrial', modelos: 'Air-Pak NxG7 Industrial 60 min', desc: 'Autonomía de 60 minutos para industria, refinería y rescate en espacios confinados, con telemetría y el localizador Pak-Tracker para control y ubicación del equipo en planta.', tech: 'Cilindro 60 min · Pak-Tracker + telemetría · NFPA 1970' },
    { tipo: 'cbrn', badge: 'NFPA 1970 · NIOSH CBRN', titulo: 'Configuración CBRN', modelos: 'Air-Pak NxG7 CBRN', desc: 'Aprobación NIOSH CBRN para HAZMAT y respuesta a agentes químicos. Materiales y sellos aptos para descontaminación y compatibilidad con máscara CBRN y trajes encapsulados Nivel A.', tech: 'NIOSH CBRN · Descontaminable · Compatible Nivel A · NFPA 1970' },
    { tipo: 'usar', badge: 'NFPA 1970 · RIT', titulo: 'Configuración RIT / Rescate', modelos: 'Air-Pak NxG7 RIT', desc: 'Kit de intervención rápida con el localizador Pak-Tracker que facilita encontrar al bombero caído. Segunda fuente de aire, transferencia rápida y bolsa de despliegue de alta visibilidad.', tech: 'Pak-Tracker · Segunda botella · Transferencia · Despliegue RIT' },
  ],
  flagship: 'Air-Pak NxG7',
  anatomiaIntro:
    'El Air-Pak NxG7 se diseñó para crecer y para encontrar. Estos seis elementos explican por qué su modularidad y el localizador Pak-Tracker lo convierten en la opción de los cuerpos que piensan a largo plazo y priorizan el rescate.',
  anatomia: [
    { t: 'Regulador de presión positiva', d: 'Entrega aire a demanda manteniendo presión positiva en la máscara; de baja resistencia respiratoria y montaje rápido en la pieza facial.' },
    { t: 'Máscara AV-3000 HT', d: 'Pieza facial de alto confort y sellado, con arnés de cabeza Kevlar/Nomex y compatibilidad con el amplificador de voz EPIC 3.' },
    { t: 'Plataforma modular', d: 'Espaldera y electrónica configurables por componentes: el departamento actualiza telemetría, máscaras o módulos sin reemplazar toda la flota.' },
    { t: 'Cilindro de fibra de carbono 4500 psi', d: 'Suministro de aire en configuraciones de 30, 45 y 60 minutos, ligero y sujeto a prueba hidrostática periódica conforme a NFPA 1852.' },
    { t: 'Localizador Pak-Tracker', d: 'Sistema de localización por radiofrecuencia que guía al equipo RIT hacia el bombero caído en condiciones de humo y visibilidad cero.' },
    { t: 'Amplificador de voz EPIC 3', d: 'Amplifica y aclara la voz del bombero con la máscara puesta, mejorando la comunicación en la zona caliente y la coordinación del equipo.' },
  ],
  comparativa: [
    { modelo: 'Air-Pak NxG7 Estructural', tipo: 'estructural', autonomia: '30 / 45 min', cilindro: 'Fibra de carbono 4500 psi', peso: '~5.5 kg', electronica: 'Pak-Tracker + EPIC 3', ideal: 'Combate estructural · plataforma modular', rec: true },
    { modelo: 'Air-Pak NxG7 Industrial', tipo: 'industrial', autonomia: '60 min', cilindro: 'Fibra de carbono 4500 psi', peso: '~6.8 kg', electronica: 'Pak-Tracker + telemetría', ideal: 'Industria, refinería, confinados', rec: false },
    { modelo: 'Air-Pak NxG7 CBRN', tipo: 'cbrn', autonomia: '30 / 45 min', cilindro: 'Fibra de carbono 4500 psi', peso: '~5.7 kg', electronica: 'Pak-Tracker · CBRN', ideal: 'HAZMAT y agentes químicos', rec: false },
    { modelo: 'Air-Pak NxG7 RIT', tipo: 'usar', autonomia: 'Segunda botella', cilindro: 'Fibra de carbono 4500 psi', peso: '~5.5 kg', electronica: 'Pak-Tracker + transferencia', ideal: 'Rescate de bombero (RIT/RIC)', rec: false },
  ],
  comparativaNote: NOTA_SCBA,
  guia: [
    { n: '01', t: 'Define el escenario dominante: combate estructural → Air-Pak NxG7 Estructural (30/45 min); industria/confinados → Industrial (60 min); HAZMAT/CBRN → CBRN; equipo de rescate de bombero → RIT.' },
    { n: '02', t: 'Piensa a largo plazo con la modularidad: si planeas escalar la flota o añadir telemetría por etapas, la plataforma NxG7 te permite actualizar por componentes sin reemplazar todo. Define la autonomía (30/45/60) por escenario.' },
    { n: '03', t: 'Aprovecha Pak-Tracker y EPIC 3: el localizador es clave si tu cuerpo prioriza la capacidad de rescate RIT; el amplificador de voz mejora la coordinación en la zona caliente. Vienen de serie.' },
    { n: '04', t: 'Asegura el servicio: prueba de flujo anual, hidrostática del cilindro y refacciones originales con servicio autorizado, y verifica la compatibilidad de la máscara AV-3000 con tu casco y comunicación.' },
  ],
  segmentosIntro:
    'El Air-Pak NxG7 es la primera opción de los cuerpos que piensan a largo plazo —plataforma modular— y priorizan la capacidad de rescate con el localizador Pak-Tracker, con el respaldo de 3M y soporte en los 32 estados.',
  segmentos: [
    { num: '01', tipo: 'estructural', titulo: 'Departamentos Estructurales', desc: 'Cuerpos urbanos que buscan una plataforma que crezca con ellos y que integre localización y amplificación de voz de serie. El NxG7 Estructural protege la inversión con su arquitectura modular.', modelos: 'Air-Pak NxG7 Estructural' },
    { num: '02', tipo: 'industrial', titulo: 'Industria y Confinados', desc: 'Refinerías y operaciones en espacios confinados requieren 60 minutos de autonomía y localización del personal en planta. El NxG7 Industrial suma Pak-Tracker y telemetría para el control del equipo.', modelos: 'Air-Pak NxG7 Industrial 60 min' },
    { num: '03', tipo: 'cbrn', titulo: 'Brigadas HAZMAT / CBRN', desc: 'La respuesta a materiales peligrosos exige aprobación NIOSH CBRN y materiales descontaminables. El NxG7 CBRN es compatible con máscara CBRN y trajes encapsulados Nivel A.', modelos: 'Air-Pak NxG7 CBRN' },
    { num: '04', tipo: 'usar', titulo: 'Equipos RIT / Rescate', desc: 'El localizador Pak-Tracker hace del NxG7 RIT una de las mejores opciones para encontrar y rescatar a un bombero caído en visibilidad cero, con transferencia de aire y despliegue rápido.', modelos: 'Air-Pak NxG7 RIT' },
  ],
  faqs: [
    { q: '¿Bajo qué norma debe estar certificado un SCBA de bombero en México?', a: 'Bajo NFPA 1970, la norma que desde 2024 consolidó a la NFPA 1981, con aprobación NIOSH. Para respuesta a materiales peligrosos se exige además NIOSH CBRN. El 3M Scott Air-Pak NxG7 cumple ambas en sus configuraciones correspondientes, y en licitaciones públicas el pliego suele referenciar NFPA 1970 y NIOSH por edición.' },
    { q: '¿Qué ventaja real da una plataforma SCBA modular?', a: 'Que protege la inversión a largo plazo. Con el Air-Pak NxG7, el departamento puede actualizar la electrónica, sumar telemetría o cambiar máscaras por componentes, en lugar de reemplazar toda la flota cuando aparece una nueva función o cambia un requisito de licitación. Para un cuerpo que renueva por etapas o crece, la modularidad reduce el costo total de propiedad a lo largo de la vida útil del equipo.' },
    { q: '¿Qué es el Pak-Tracker y por qué importa para el rescate?', a: 'El Pak-Tracker es un sistema de localización por radiofrecuencia integrado en el Air-Pak NxG7 que guía al equipo de intervención rápida (RIT) hacia un bombero caído en condiciones de humo y visibilidad cero. Combinado con la alarma de inmovilidad, reduce drásticamente el tiempo de localización — y en un rescate, cada segundo de aire cuenta. Por eso viene de serie en la plataforma, no como opción.' },
    { q: '¿Qué diferencia al 3M Scott Air-Pak NxG7 del MSA G1 y del Dräger PSS 7000?', a: 'Los tres son SCBA tier-1 de presión positiva NFPA 1970. El 3M Scott Air-Pak NxG7 destaca por su plataforma modular y el localizador Pak-Tracker de serie; el MSA G1 lidera en electrónica integrada (EOSTI, telemetría ICM); el Dräger PSS 7000 sobresale por la ergonomía del arnés. Para un cuerpo que prioriza la capacidad de rescate RIT y la actualización por etapas, el NxG7 tiene ventaja. Te facilitamos las tres fichas para evaluación comparativa.' },
    { q: '¿Qué mantenimiento exige un SCBA y cada cuánto?', a: 'La NFPA 1852 establece el programa: prueba de flujo al menos anual, inspección del usuario antes de cada uso, prueba hidrostática del cilindro de fibra de carbono cada 5 años (vida útil de 15 años) y mantenimiento de reguladores según fabricante. Somos servicio técnico autorizado: realizamos estas pruebas con equipo calibrado y entregamos la bitácora para tu expediente de auditoría.' },
    { q: '¿Entregan ficha técnica y servicio para licitación pública?', a: 'Sí. Cada Air-Pak NxG7 incluye el certificado NFPA 1970, la aprobación NIOSH (y NIOSH CBRN cuando aplica) y la ficha técnica por configuración. Para concursos públicos (CompraNet, IMSS, Pemex, gobiernos estatales) generamos el manifiesto de cumplimiento por partida e incluimos el plan de servicio técnico autorizado para la vida útil del equipo.' },
  ],
  ctaKicker: 'Plataforma modular · localizador Pak-Tracker de serie',
  ctaTitleHtml: 'Crece con tu flota.<br/>Encuentra a tu equipo.',
  waQuote: 'Hola, quiero cotizar equipos SCBA 3M Scott Air-Pak NxG7 NFPA 1970.',
};

/* ── Export ────────────────────────────────────────────────────────────────── */
export const scbaBrandList: EquipmentBrand[] = [msaG1, dragerPss, scottAirPak];
