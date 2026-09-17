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
    'MSA Safety cotiza en la Bolsa de Nueva York (NYSE: MSA). El G1 integra PASS y EOSTI, telemetría y cilindros de 2216, 4500 y 5500 psi.',
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
    { n: '01', t: 'MSA Safety · NYSE', d: 'MSA Safety cotiza en la Bolsa de Nueva York (NYSE: MSA).' },
    { n: '02', t: 'La electrónica más integrada', d: 'La válvula EOSTI (indicador de fin de servicio) va montada en el regulador, sin módulo externo. Suma alarma PASS de movimiento, telemetría ICM y localizador — toda la información de aire y posición del bombero en un solo sistema.' },
    { n: '03', t: 'Servicio técnico autorizado', d: 'Somos servicio autorizado: prueba hidrostática de cilindros, prueba de flujo anual, mantenimiento de reguladores y refacciones originales, con bitácora lista para auditoría NFPA 1850. Tu inversión queda protegida toda la vida útil.' },
    { n: '04', t: 'Integración total del conjunto', d: 'Configuramos el G1 con la máscara full-face, el adaptador de comunicación, la integración nativa con casco MSA Gallet EVOGUARD y el soporte para cámara térmica G1-TIC — sin interferencias y conservando la certificación.' },
  ],
  linesIntro:
    'El G1 cubre los cuatro escenarios de uso desde una sola plataforma: estructural para combate en edificios, larga duración para industria y túneles, CBRN para HAZMAT y RIT para rescate de bombero. Una sola flota interoperable con refacciones comunes.',
  lineas: [
    { tipo: 'estructural', badge: 'NFPA 1970 · 30/45 min', titulo: 'Configuración Estructural', modelos: 'MSA G1 Estructural', desc: 'SCBA de combate estructural: EOSTI integrado, alarma PASS y máscara G1 anti-empañante, con cilindro de 30 ó 45 minutos a 4500 psi. Configuración para cuerpos metropolitanos en México.', tech: 'EOSTI + PASS · Máscara G1 full-face · 4500 psi · NFPA 1970' },
    { tipo: 'industrial', badge: 'NFPA 1970 · 60 min', titulo: 'Configuración Industrial', modelos: 'MSA G1 Industrial 60 min', desc: 'Autonomía extendida de 60 minutos para industria pesada, petroquímica, túneles y espacios confinados. Telemetría ICM para control de aire del equipo y opción antiestática ATEX.', tech: 'Cilindro 60 min · Telemetría ICM · ATEX opcional · NFPA 1970' },
    { tipo: 'cbrn', badge: 'NFPA 1970 · NIOSH CBRN', titulo: 'Configuración CBRN', modelos: 'MSA G1 CBRN', desc: 'Aprobación NIOSH CBRN para respuesta a materiales peligrosos y agentes químicos, biológicos, radiológicos y nucleares. Materiales y conexiones aptos para descontaminación.', tech: 'NIOSH CBRN · Descontaminable · Compatible Nivel A · NFPA 1970' },
    { tipo: 'usar', badge: 'NFPA 1970 · RIT', titulo: 'Configuración RIT / Rescate', modelos: 'MSA G1 RIT', desc: 'Equipo de intervención rápida para rescate de bombero caído: segunda fuente de aire, conexión de transferencia (buddy breathing) y bolsa de despliegue rápido de alta visibilidad.', tech: 'Segunda botella · Transferencia de aire · Despliegue rápido' },
  ],
  flagship: 'G1',
  anatomiaIntro:
    'El G1 es un sistema de soporte vital, no un accesorio. Estos seis elementos describen su electrónica y componentes para operación estructural.',
  anatomia: [
    { t: 'Regulador de presión positiva', d: 'Entrega aire a demanda manteniendo presión positiva dentro de la máscara para impedir la entrada de humo. Integra la válvula EOSTI de fin de servicio, sin módulo externo que se dañe.' },
    { t: 'Máscara full-face G1', d: 'Pieza facial de amplio campo visual con pantalla anti-empañante, sellado certificado y puerto para comunicación y amplificador de voz.' },
    { t: 'Espaldera y arnés', d: 'Estructura ergonómica que distribuye la carga del cilindro sobre cadera y hombros; correas lavables y resistentes a la contaminación química.' },
    { t: 'Cilindro de fibra de carbono 4500 psi', d: 'Suministro de aire en configuraciones de 30, 45 y 60 minutos. Ligero, de alta presión y sujeto a prueba hidrostática periódica conforme a NFPA 1850.' },
    { t: 'Alarma PASS integrada', d: 'Dispositivo de alerta personal por inmovilidad y activación manual, con señal acústica y luminosa para localizar a un bombero en problemas.' },
    { t: 'Telemetría e ICM', d: 'El módulo de control integrado transmite presión de aire y estado del bombero a la cabina de mando, con localizador para operaciones de rescate (RIT).' },
  ],
  comparativa: [
    { modelo: 'G1 Estructural', tipo: 'estructural', autonomia: '30 / 45 min', cilindro: 'Fibra de carbono 4500 psi', electronica: 'EOSTI + PASS', ideal: 'Combate estructural metropolitano', rec: true },
    { modelo: 'G1 Industrial', tipo: 'industrial', autonomia: '60 min', cilindro: 'Fibra de carbono 4500 psi', electronica: 'EOSTI + telemetría ICM', ideal: 'Industria, túneles, confinados', rec: false },
    { modelo: 'G1 CBRN', tipo: 'cbrn', autonomia: '30 / 45 min', cilindro: 'Fibra de carbono 4500 psi', electronica: 'EOSTI + PASS · CBRN', ideal: 'HAZMAT y agentes químicos', rec: false },
    { modelo: 'G1 RIT', tipo: 'usar', autonomia: 'Segunda botella', cilindro: 'Fibra de carbono 4500 psi', electronica: 'EOSTI + transferencia', ideal: 'Rescate de bombero (RIT/RIC)', rec: false },
  ],
  comparativaNote: NOTA_SCBA,
  guia: [
    { n: '01', t: 'Define el escenario dominante: combate estructural  G1 Estructural (30/45 min); industria, túneles o confinados  G1 Industrial (60 min); HAZMAT/CBRN  G1 CBRN; equipo de rescate de bombero  G1 RIT.' },
    { n: '02', t: 'Elige la autonomía según la operación: 30 min para respuesta urbana estándar, 45 min para mayor margen, 60 min para industria y rescate prolongado. A mayor autonomía, mayor peso y volumen del cilindro.' },
    { n: '03', t: 'Define la electrónica: EOSTI y PASS son base; suma telemetría ICM y localizador si quieres control de aire del equipo en cabina de mando y capacidad de búsqueda RIT.' },
    { n: '04', t: 'Asegura el servicio: prueba hidrostática de cilindros, prueba de flujo anual y refacciones originales con servicio autorizado, y verifica la compatibilidad con tu máscara, casco y sistema de comunicación.' },
  ],
  segmentosIntro:
    'El G1 es la primera opción de los cuerpos que requieren la electrónica más integrada, telemetría para control de aire y servicio técnico autorizado, con el respaldo de MSA Safety y soporte en los 32 estados.',
  segmentos: [
    { num: '01', tipo: 'estructural', titulo: 'Departamentos Estructurales Internacionales', desc: 'CDMX, GDL, MTY y cuerpos del país. El G1 Estructural integra EOSTI, máscara anti-empañante y telemetría para visibilidad de aire de la cuadrilla en cabina de mando.', modelos: 'G1 Estructural' },
    { num: '02', tipo: 'industrial', titulo: 'Industria, Petroquímica y Confinados', desc: 'Refinerías, plantas de proceso y rescate en espacios confinados requieren autonomía de 60 minutos y opción antiestática ATEX. El G1 Industrial cubre las jornadas largas con control de aire del equipo.', modelos: 'G1 Industrial 60 min' },
    { num: '03', tipo: 'cbrn', titulo: 'Brigadas HAZMAT / CBRN', desc: 'Equipos de respuesta a materiales peligrosos necesitan aprobación NIOSH CBRN y materiales descontaminables. El G1 CBRN es compatible con máscara CBRN y trajes encapsulados Nivel A.', modelos: 'G1 CBRN' },
    { num: '04', tipo: 'usar', titulo: 'Equipos RIT / Rescate', desc: 'Los equipos de intervención rápida (RIT/RIC) necesitan una segunda fuente de aire y transferencia rápida para rescatar a un bombero caído. El G1 RIT se despliega en segundos e interopera con la flota.', modelos: 'G1 RIT' },
  ],
  faqs: [
    { q: '¿Bajo qué norma debe estar certificado un SCBA de bombero en México?', a: 'Bajo NFPA 1970, la norma que desde 2024 consolidó a la NFPA 1981 (equipos de respiración autónoma), con aprobación NIOSH del National Institute for Occupational Safety and Health. Para respuesta a materiales peligrosos se exige además la aprobación NIOSH CBRN. En licitaciones públicas el pliego suele referenciar directamente NFPA 1970 y NIOSH por edición. El MSA G1 cumple ambas en sus configuraciones correspondientes.' },
    { q: '¿Qué autonomía elijo: 30, 45 o 60 minutos?', a: 'La autonomía nominal asume un consumo de referencia; el tiempo real depende del esfuerzo del usuario. 30 minutos es el estándar de respuesta urbana; 45 minutos da más margen para combate estructural y rescate; 60 minutos es para industria, túneles y espacios confinados donde la salida es larga. A mayor autonomía, mayor presión, peso y volumen del cilindro — por eso conviene dimensionar por escenario, no comprar el más grande "por si acaso".' },
    { q: '¿Qué es la aprobación NIOSH CBRN y cuándo la necesito?', a: 'NIOSH CBRN certifica que el SCBA protege contra agentes químicos, biológicos, radiológicos y nucleares además del humo de incendio. Es imprescindible para brigadas HAZMAT, protección civil con riesgo CBRN y plantas con inventario de sustancias tóxicas. El G1 CBRN usa materiales y conexiones aptos para descontaminación y es compatible con máscara CBRN y trajes encapsulados Nivel A.' },
    { q: '¿Qué diferencia al MSA G1 del Dräger PSS 7000 y del 3M Scott Air-Pak X3 Pro?', a: 'El MSA G1 integra PASS y EOSTI, telemetría y cilindros de 2216, 4500 y 5500 psi. El Dräger PSS 7000 existe en versión europea EN 137 y en versión certificada NFPA para América. El 3M Scott Air-Pak X3 Pro está certificado NFPA 1970 (2025) por SEI con aprobación NIOSH.' },
    { q: '¿Qué mantenimiento exige un SCBA y cada cuánto?', a: 'La NFPA 1850 (edición 2026, antes NFPA 1852) consolidó el mantenimiento de SCBA. La recalificación de cilindros se realiza según su permiso especial y el control de su vida útil de 15 años.' },
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
    'Distribuidor autorizado del SCBA Dräger PSS 7000 en México. Configuraciones estructural, industrial de 60 min y RIT, con placa dorsal ergonómica, monitoreo Sentinel y servicio técnico autorizado.',
  heroIntro: [
    'Dräger, fundada en Lübeck en 1889, ofrece el PSS 7000 en versión europea EN 137 y en versión certificada NFPA para América.',
  ],
  heroBadges: ['Versión certificada NFPA', 'EN 137', 'Fundada en Lübeck en 1889', 'Distribuidor autorizado MX'],
  seoTitle: 'SCBA Dräger PSS 7000 — Aire Autónomo MX',
  seoDescription:
    'Equipo de respiración autónoma Dräger PSS 7000 en versión europea EN 137 y en versión certificada NFPA para América: modelos, arnés y cotización en México.',
  founding: '1889',
  parentOrg: { name: 'Drägerwerk AG & Co. KGaA' },
  stats: [
    { valor: '1889', etiq: 'Ingeniería alemana Dräger' },
    { valor: 'Ergonomía', etiq: 'Placa dorsal flexible' },
    { valor: 'Sentinel', etiq: 'Electrónica y telemetría' },
    { valor: '32', etiq: 'Estados con cobertura' },
  ],
  credenciales: [
    { n: '01', t: 'Dräger desde 1889', d: 'Dräger fue fundada en Lübeck en 1889.' },
    { n: '02', t: 'Arnés con placa dorsal ergonómica', d: 'La placa dorsal flexible del PSS 7000 se adapta a la espalda y transfiere el peso del cilindro a la cadera, reduciendo la fatiga lumbar en operaciones prolongadas — determinante en jornadas largas de industria o rescate.' },
    { n: '03', t: 'Electrónica Sentinel y servicio autorizado', d: 'La electrónica Sentinel integra alarma de inmovilidad, gestión de aire y telemetría opcional. Somos servicio técnico autorizado: prueba de flujo, hidrostática y refacciones originales con bitácora NFPA 1850.' },
    { n: '04', t: 'Versiones EN y NFPA', d: 'El PSS 7000 existe en versión europea EN 137 y en versión certificada NFPA para América.' },
  ],
  linesIntro:
    'El PSS 7000 cubre tres escenarios de uso desde una plataforma ergonómica: estructural para combate, larga duración para industria y RIT para rescate. Una sola flota con el confort de carga como diferenciador.',
  lineas: [
    { tipo: 'estructural', badge: 'Versión certificada NFPA', titulo: 'PSS 7000', modelos: 'PSS 7000', desc: 'Disponible en versión europea EN 137 y en versión certificada NFPA para América.', tech: 'EN 137 · Versión certificada NFPA' },
  ],
  flagship: 'PSS 7000',
  anatomiaIntro:
    'El PSS 7000 está diseñado alrededor del bombero, no al revés. Estos seis elementos explican por qué su ergonomía y su electrónica Sentinel lo convierten en la opción de los cuerpos que valoran el confort de carga y la fiabilidad.',
  anatomia: [
    { t: 'Pulmoautomático de presión positiva', d: 'Entrega aire a demanda manteniendo presión positiva en la máscara; conmutable y de baja resistencia respiratoria para reducir el esfuerzo del usuario.' },
    { t: 'Máscara Dräger FPS 7000', d: 'Pieza facial de amplio campo visual con sellado certificado, visor anti-rayadura y puerto para comunicación y amplificador de voz.' },
    { t: 'Placa dorsal flexible', d: 'El corazón del PSS 7000: se adapta a la espalda y transfiere el peso del cilindro a la cadera, reduciendo la fatiga lumbar en operaciones prolongadas.' },
    { t: 'Cilindro de fibra de carbono', d: 'Suministro de aire en configuraciones de 30, 45 y 60 minutos a 300 bar, ligero y sujeto a prueba hidrostática periódica conforme a NFPA 1850.' },
    { t: 'Electrónica Sentinel', d: 'Gestiona la alarma de inmovilidad, el manómetro electrónico y la telemetría opcional, con transmisión de datos a la cabina de mando.' },
    { t: 'Arnés lavable y descontaminable', d: 'Correas y placa de materiales resistentes a hidrocarburos y aptos para descontaminación, clave en industria.' },
  ],
  comparativa: [
    { modelo: 'PSS 7000 Estructural', tipo: 'estructural', autonomia: '30 / 45 min', cilindro: 'Fibra de carbono 300 bar', electronica: 'Sentinel opcional', ideal: 'Combate estructural · confort de carga', rec: true },
    { modelo: 'PSS 7000 Industrial', tipo: 'industrial', autonomia: '60 min', cilindro: 'Fibra de carbono 300 bar', electronica: 'Sentinel + telemetría', ideal: 'Petroquímica, túneles, ATEX', rec: false },
    { modelo: 'PSS 7000 RIT', tipo: 'usar', autonomia: 'Segunda botella', cilindro: 'Fibra de carbono 300 bar', electronica: 'Sentinel + transferencia', ideal: 'Rescate de bombero (RIT/RIC)', rec: false },
  ],
  comparativaNote: NOTA_SCBA,
  guia: [
    { n: '01', t: 'Define el escenario dominante: combate estructural  PSS 7000 Estructural (30/45 min); industria/túneles  Industrial (60 min); HAZMAT/CBRN  un SCBA con aprobación NIOSH CBRN como el MSA G1 CBRN; equipo de rescate de bombero  RIT.' },
    { n: '02', t: 'Aprovecha la ergonomía: si tu operación implica jornadas largas o mucho desplazamiento con carga, la placa dorsal flexible del PSS 7000 reduce la fatiga frente a arneses rígidos. Define la autonomía (30/45/60) por escenario.' },
    { n: '03', t: 'Define la electrónica Sentinel: alarma de inmovilidad y manómetro electrónico de base; suma telemetría si quieres gestión de aire del equipo en cabina de mando.' },
    { n: '04', t: 'Asegura el servicio: prueba de flujo anual, hidrostática del cilindro y refacciones originales con servicio autorizado, y verifica compatibilidad de máscara FPS 7000 con tu casco y comunicación.' },
  ],
  segmentosIntro:
    'El PSS 7000 es la primera opción de los cuerpos que priorizan el confort de carga y la fiabilidad de la ingeniería alemana, con doble certificación NFPA + EN, electrónica Sentinel y soporte en los 32 estados.',
  segmentos: [
    { num: '01', tipo: 'estructural', titulo: 'Departamentos Estructurales', desc: 'Cuerpos urbanos que valoran la distribución de carga y el confort en operaciones de alta frecuencia. La placa dorsal flexible del PSS 7000 reduce la fatiga lumbar acumulada turno tras turno.', modelos: 'PSS 7000 Estructural' },
    { num: '02', tipo: 'industrial', titulo: 'Industria y Petroquímica', desc: 'Refinerías, plantas de proceso y operaciones en túneles requieren 60 minutos de autonomía, resistencia a hidrocarburos y opción ATEX. El PSS 7000 Industrial es referencia en industria de capital extranjero por su doble norma NFPA + EN.', modelos: 'PSS 7000 Industrial 60 min' },
    { num: '03', tipo: 'estructural', titulo: 'Versiones disponibles', desc: 'El PSS 7000 existe en versión europea EN 137 y en versión certificada NFPA para América.', modelos: 'PSS 7000' },
    { num: '04', tipo: 'usar', titulo: 'Equipos RIT / Rescate', desc: 'Los equipos de intervención rápida necesitan transferencia de aire y despliegue veloz para rescatar a un bombero caído. El PSS 7000 RIT se integra con la flota y la electrónica Sentinel.', modelos: 'PSS 7000 RIT' },
  ],
  faqs: [
    { q: '¿Qué versiones del Dräger PSS 7000 existen?', a: 'Existe una versión europea EN 137 y una versión certificada NFPA para América.' },
    { q: '¿Por qué importa la ergonomía del arnés en un SCBA?', a: 'Porque el bombero carga el SCBA durante toda la intervención y, sumado al traje, casco y herramientas, el peso eleva el estrés cardiovascular — la primera causa de muerte en servicio activo. La placa dorsal flexible del PSS 7000 transfiere la carga del cilindro a la cadera y se adapta a la espalda, reduciendo la fatiga lumbar respecto a arneses rígidos. En jornadas largas de industria o rescate, esa diferencia es de seguridad, no de comodidad.' },
    { q: '¿Cuándo fue fundada Dräger?', a: 'Dräger fue fundada en Lübeck en 1889.' },
    { q: '¿Qué diferencia al Dräger PSS 7000 del MSA G1 y del 3M Scott Air-Pak X3 Pro?', a: 'El Dräger PSS 7000 existe en versión europea EN 137 y en versión certificada NFPA para América. El MSA G1 integra PASS, EOSTI y telemetría. El 3M Scott Air-Pak X3 Pro está certificado NFPA 1970 (2025) por SEI con aprobación NIOSH.' },
    { q: '¿Qué mantenimiento exige un SCBA y cada cuánto?', a: 'La NFPA 1850 (edición 2026, antes NFPA 1852) consolida el mantenimiento de SCBA. La recalificación de cilindros se realiza según su permiso especial y el control de su vida útil de 15 años.' },
    { q: '¿Entregan ficha técnica y servicio para licitación pública?', a: 'Sí. Cada PSS 7000 se cotiza conforme a su versión europea EN 137 o su versión certificada NFPA para América.' },
  ],
  ctaKicker: 'Ergonomía alemana · doble norma NFPA + EN',
  ctaTitleHtml: 'El peso bien repartido.<br/>El aire bien gestionado.',
  waQuote: 'Hola, quiero cotizar equipos SCBA Dräger PSS 7000.',
};

/* ════════════════════════════════════════════════════════════════════════════
   3M SCOTT AIR-PAK X3 PRO
   ════════════════════════════════════════════════════════════════════════════ */
const scottAirPak: EquipmentBrand = {
  categorySlug: 'equipos-scba',
  slug: 'scott-air-pak',
  brand: '3M Scott',
  brandLabel: '3M Scott Air-Pak X3 Pro',
  crossDesc: 'NFPA 1970 (2025) · SEI · NIOSH',
  eyebrow: '3M Scott · Air-Pak X3 Pro · Distribuidor Autorizado MX',
  heroTitleTop: 'SCBA 3M Scott',
  heroTitleAccent: 'Air-Pak X3 Pro.',
  heroLead:
    'Distribuidor autorizado del SCBA 3M Scott Air-Pak X3 Pro en México.',
  heroIntro: [
    'El Air-Pak X3 Pro está certificado NFPA 1970 (2025) por SEI con aprobación NIOSH.',
    'Su EOSTI está recalibrado al 31 % en 4500 psi conforme NFPA 1970.',
  ],
  heroBadges: ['NFPA 1970 (2025)', 'SEI', 'NIOSH', 'EOSTI al 31 %', '4500 psi', 'Distribuidor autorizado MX'],
  seoTitle: 'SCBA 3M Scott Air-Pak X3 Pro NFPA 1970 — México',
  seoDescription:
    'SCBA 3M Scott Air-Pak X3 Pro certificado NFPA 1970 (2025) por SEI con aprobación NIOSH. EOSTI recalibrado al 31 % en 4500 psi.',
  stats: [
    { valor: 'NFPA 1970', etiq: 'Edición 2025' },
    { valor: 'SEI', etiq: 'Certificación por tercero' },
    { valor: 'NIOSH', etiq: 'Aprobación' },
    { valor: '31 %', etiq: 'EOSTI en 4500 psi' },
  ],
  credenciales: [
    { n: '01', t: 'Certificación NFPA 1970 (2025)', d: 'El Air-Pak X3 Pro está certificado por SEI con aprobación NIOSH.' },
    { n: '02', t: 'Alarma de fin de servicio', d: 'Su EOSTI está recalibrado al 31 % en 4500 psi conforme NFPA 1970.' },
  ],
  linesIntro:
    'El Air-Pak X3 Pro está certificado NFPA 1970 (2025) por SEI con aprobación NIOSH.',
  lineas: [
    { tipo: 'estructural', badge: 'NFPA 1970 (2025)', titulo: 'Air-Pak X3 Pro', modelos: 'Air-Pak X3 Pro', desc: 'Certificado NFPA 1970 (2025) por SEI con aprobación NIOSH. EOSTI recalibrado al 31 % en 4500 psi.', tech: 'SEI · NIOSH · EOSTI 31 % · 4500 psi' },
  ],
  flagship: 'scba-3m-scott-air-pak-x3-pro',
  comparativa: [
    { modelo: 'Air-Pak X3 Pro', tipo: 'estructural', cilindro: '4500 psi', electronica: 'EOSTI al 31 %', ideal: 'NFPA 1970 (2025)', rec: true },
  ],
  comparativaNote: NOTA_SCBA,
  guia: [
    { n: '01', t: 'Verifica la certificación NFPA 1970 (2025) por SEI y la aprobación NIOSH.' },
    { n: '02', t: 'En 4500 psi, verifica el EOSTI recalibrado al 31 % conforme NFPA 1970.' },
  ],
  faqs: [
    { q: '¿Qué certificaciones tiene el Air-Pak X3 Pro?', a: 'Está certificado NFPA 1970 (2025) por SEI con aprobación NIOSH.' },
    { q: '¿Cuándo se activa su EOSTI?', a: 'En 4500 psi, su EOSTI está recalibrado al 31 % conforme NFPA 1970.' },
  ],
  ctaKicker: 'NFPA 1970 (2025) · SEI · NIOSH',
  ctaTitleHtml: 'Air-Pak X3 Pro.<br/>Certificación verificable.',
  waQuote: 'Hola, quiero cotizar equipos SCBA 3M Scott Air-Pak X3 Pro.',
};

/* ── Export ────────────────────────────────────────────────────────────────── */
export const scbaBrandList: EquipmentBrand[] = [msaG1, dragerPss, scottAirPak];
