/**
 * Marcas de Drones de Emergencia — implementan EquipmentBrand (ver brandPages.ts).
 * Renderizadas por src/components/products/BrandPage.astro.
 *
 * Categoría 'drones-emergencia' (columnas: Autonomía / Sensor / Alcance / Peso / Ideal).
 * Familias por misión: usar (SAR) · industrial (compacto rápido) · mando (autónomo/ISR).
 */
import type { EquipmentBrand } from './brandPages';

/* ════════════════════════════════════════════════════════════════════════════
   DJI ENTERPRISE
   ════════════════════════════════════════════════════════════════════════════ */
const djiEnterprise: EquipmentBrand = {
  categorySlug: 'drones-emergencia',
  slug: 'dji-enterprise',
  brand: 'DJI Enterprise',
  brandLabel: 'DJI Enterprise',
  crossDesc: 'La plataforma de drones más usada por bomberos y protección civil · Matrice 30T · AFAC',
  eyebrow: 'DJI Enterprise · AFAC',
  heroTitleTop: 'Drones DJI',
  heroTitleAccent: 'para emergencias.',
  heroLead:
    'Línea completa de DJI Enterprise en México. Matrice 30T con térmica radiométrica, Mavic 3 Thermal compacto y Dock 2 autónomo — más capacitación de piloto y trámite AFAC incluidos en un solo paquete llave en mano.',
  heroIntro: [
    'DJI Enterprise es la plataforma de drones más utilizada por cuerpos de bomberos y protección civil a nivel mundial. Sus aeronaves integran cámara térmica radiométrica y RGB en una sola unidad, con alcance de 15 km y autonomías de hasta 45 minutos — la herramienta de reconocimiento aéreo de referencia para la primera respuesta.',
    'Distribuimos los tres modelos de referencia para emergencias con soporte técnico, refacciones en stock, capacitación de piloto certificada y acompañamiento completo en el trámite ante la AFAC para operación institucional legal en México.',
  ],
  heroBadges: ['DJI Matrice 30T', 'Mavic 3 Thermal', 'Dock 2', 'AFAC México', 'Térmica radiométrica'],
  seoTitle: 'Drones DJI Enterprise para Bomberos y Protección Civil — Matrice 30T · México',
  seoDescription:
    'Drones DJI Enterprise en México: Matrice 30T con cámara térmica radiométrica, Mavic 3 Thermal compacto y Dock 2 autónomo. Capacitación de piloto y trámite AFAC incluidos.',
  founding: '2006',
  parentOrg: { name: 'DJI — Da-Jiang Innovations' },
  stats: [
    { valor: '#1', etiq: 'Plataforma de drones para emergencias a nivel mundial' },
    { valor: '15 km', etiq: 'Alcance de transmisión Matrice 30T' },
    { valor: '41 min', etiq: 'Autonomía de vuelo Matrice 30T' },
    { valor: 'IP55', etiq: 'Protección aeronave y estación de carga' },
  ],
  credenciales: [
    {
      n: '01',
      t: 'El estándar mundial en drones de emergencia',
      d: 'DJI Enterprise equipa a los principales cuerpos de bomberos, protección civil y fuerzas de seguridad pública en más de 100 países. La plataforma Matrice es la referencia de licitaciones tier-1 en México y América Latina.',
    },
    {
      n: '02',
      t: 'Térmica radiométrica real, no paleta de colores',
      d: 'Los modelos que distribuimos integran sensores radiométricos que miden la temperatura de cada píxel en grados reales — indispensable para búsqueda y rescate, detección de puntos calientes en incendios y evaluación HAZMAT sin contacto.',
    },
    {
      n: '03',
      t: 'Trámite AFAC y capacitación incluidos',
      d: 'Acompañamos el registro ante la Agencia Federal de Aviación Civil en la figura de Operador Aéreo No Tripulado Institucional. Capacitación de piloto, protocolos de misión y documentación completa para licitaciones en un solo contrato.',
    },
    {
      n: '04',
      t: 'Solución llave en mano con soporte local',
      d: 'Aeronave + cámara + baterías adicionales + capacitación + AFAC en un solo proveedor. Refacciones, baterías y hélices en stock CDMX con entrega en 24–48 h para mantener tu flota operativa en todo momento.',
    },
  ],
  linesIntro:
    'Tres plataformas para tres escenarios: el Matrice 30T para operación institucional completa, el Mavic 3 Thermal para respuesta rápida y el Dock 2 para patrullaje autónomo 24/7. Un solo proveedor para toda la flota.',
  lineas: [
    {
      tipo: 'usar',
      badge: 'AFAC · Radiométrica · IP55',
      familiaLabel: 'Operación Institucional',
      flagship: 'dji-matrice-30t-termico',
      desc: 'La plataforma de referencia para cuerpos de bomberos y protección civil. Sensor térmico radiométrico 640×512 + cámara RGB 48 MP + laser rangefinder en una sola aeronave IP55 certificada. La herramienta de reconocimiento aéreo más completa para la primera respuesta en México.',
      modelos: [
        { m: 'DJI Matrice 30T', d: 'Cámara térmica 640×512 + RGB + laser · IP55 · 41 min · 15 km — referencia para SAR e ISR institucional.' },
        { m: 'DJI Matrice 350 RTK', d: 'Plataforma grande de uso profesional con mayor payload y RTK integrado para operaciones de precisión.' },
      ],
    },
    {
      tipo: 'industrial',
      badge: 'Compacto · Despliegue rápido',
      familiaLabel: 'Respuesta Rápida',
      flagship: 'dji-mavic-3-thermal',
      desc: 'El dron de respuesta rápida para la brigada de campo. Despliega en menos de 2 minutos desde la camioneta. Sensor FLIR 640×512 integrado, 45 min de vuelo y cámara RGB 4K — térmica real en un cuerpo compacto que cabe en una mochila.',
      modelos: [
        { m: 'DJI Mavic 3 Thermal', d: 'Sensor FLIR 640×512 · 45 min · 15 km · 920 g — la opción más accesible con cámara térmica real.' },
        { m: 'DJI Mavic 3 Enterprise', d: 'Versión con cámara RGB 48 MP + zoom óptico 28× para reconocimiento visual de alta resolución.' },
      ],
    },
    {
      tipo: 'mando',
      badge: 'Autónomo · Sin piloto · 24/7',
      familiaLabel: 'Vigilancia Autónoma',
      flagship: 'dji-dock-2-autonomo',
      desc: 'La estación de vuelo autónomo para patrullaje continuo sin piloto en sitio. El Dock 2 despega, ejecuta la misión y regresa solo a cargar. Integrado con FlightHub 2 para gestión de misiones en tiempo real desde el centro de mando.',
      modelos: [
        { m: 'DJI Dock 2', d: 'Vuelo autónomo sin piloto · 7 km radio · IP55 estación · FlightHub 2 — patrullaje y respuesta 24/7.' },
        { m: 'DJI FlightHub 2', d: 'Plataforma SaaS de gestión de flotas, misiones y streaming para coordinar múltiples drones desde un centro de mando.' },
      ],
    },
  ],
  flagship: 'dji-matrice-30t-termico',
  anatomiaIntro:
    'El DJI Matrice 30T es la aeronave que más cuerpos de bomberos y coordinaciones de protección civil eligen para SAR e ISR. Estos seis elementos explican por qué su sensor radiométrico y su diseño IP55 marcan la diferencia en la emergencia real.',
  anatomia: [
    { t: 'Sensor térmico radiométrico 640×512', d: 'Mide la temperatura de cada píxel en grados reales — no solo asigna colores. Detecta firmas de calor humanas de noche, entre vegetación o en estructuras colapsadas. La diferencia entre buscar y encontrar.' },
    { t: 'Cámara RGB 48 MP + zoom óptico', d: 'Imagen visual de alta resolución para lectura de placas HAZMAT, documentación de escena y transmisión en tiempo real al puesto de mando — en la misma aeronave que la cámara térmica.' },
    { t: 'Laser rangefinder integrado', d: 'Medición de distancia y altitud láser para geocoding de coordenadas GPS precisas sobre los puntos de interés detectados, sin necesidad de RTK externo en la mayoría de misiones.' },
    { t: 'Certificación IP55 aeronave y estación', d: 'Resiste lluvia y polvo en operaciones de campo — condición habitual en emergencias reales. La estación de carga también es IP55, operando bajo condiciones adversas sin protección adicional.' },
    { t: 'Alcance 15 km · autonomía 41 min', d: 'Permite cubrir perímetros amplios de incendios forestales, inundaciones o zonas de búsqueda sin necesidad de relocalizar el punto de control — clave en el primer reconocimiento de una emergencia masiva.' },
    { t: 'Integración FlightHub 2', d: 'Transmisión de video térmico y RGB al puesto de mando en tiempo real. El comandante ve lo que ve el dron sin estar en campo — la conciencia situacional completa que mejora la toma de decisiones.' },
  ],
  comparativa: [
    { modelo: 'DJI Matrice 30T',    tipo: 'usar',       autonomia: '41 min',       sensor: 'Radiométrica 640×512',  rango: '15 km',     peso: 'IP55',            ideal: 'SAR · ISR · incendios · institucional', rec: true },
    { modelo: 'DJI Mavic 3 Thermal',tipo: 'industrial', autonomia: '45 min',       sensor: 'FLIR 640×512',          rango: '15 km',     peso: 'Sin cert. IP',    ideal: 'Respuesta rápida · compacto · móvil',   rec: false },
    { modelo: 'DJI Dock 2',         tipo: 'mando',      autonomia: 'Ilimitada',    sensor: 'Via M30T (payload)',    rango: '7 km radio', peso: 'IP55 estación',   ideal: 'Patrullaje 24/7 · sin piloto',          rec: false },
  ],
  comparativaLabel: 'Matrice 30T · Mavic 3 Thermal · Dock 2',
  comparativaNote: '* Autonomía y alcance nominales bajo condiciones óptimas. En operaciones urbanas con interferencias, reducir alcance 30–40 %. AFAC y capacitación requeridos para operación institucional legal en México.',
  guia: [
    { n: '01', t: 'Define la misión dominante: evaluación táctica de incendios y SAR → Matrice 30T; respuesta rápida de campo → Mavic 3 Thermal; patrullaje continuo sin piloto → Dock 2.' },
    { n: '02', t: 'Verifica que el sensor sea radiométrico real: la medición de temperatura en grados es lo que diferencia un dron de rescate de uno con filtro de color. Pregunta el rango y la resolución del sensor antes de comprar.' },
    { n: '03', t: 'Tramita el permiso AFAC antes de operar. Para instituciones existe la figura de Operador Aéreo No Tripulado Institucional que simplifica el proceso y permite operar en zonas restringidas cerca de aeropuertos.' },
    { n: '04', t: 'Incluye capacitación de piloto y protocolos de misión en el presupuesto. La aeronave más avanzada no va a la emergencia si el piloto no tiene entrenamiento operacional certificado y procedimientos escritos.' },
  ],
  faq: [
    { q: '¿Necesito permiso para volar el dron en una emergencia activa?', a: 'Sí. En México toda operación de RPAS (Remotely Piloted Aircraft Systems) requiere autorización AFAC. Para instituciones existe la figura de Operador Aéreo No Tripulado que simplifica el trámite y puede incluir autorizaciones en zonas restringidas cerca de aeropuertos. Incluimos acompañamiento completo en el proceso.' },
    { q: '¿Cuál es la diferencia entre el Matrice 30T y el Mavic 3 Thermal?', a: 'El Matrice 30T es la plataforma institucional completa: mayor sensor térmico radiométrico, laser rangefinder, IP55 y mayor resistencia al viento — diseñado para operaciones prolongadas. El Mavic 3 Thermal es más compacto y ligero (920 g), despliega en menos de 2 min y es ideal como segunda aeronave de respuesta rápida o para brigadas con presupuesto más ajustado.' },
    { q: '¿El Matrice 30T puede volar bajo lluvia?', a: 'Sí. Tanto la aeronave como la estación de carga del Matrice 30T tienen certificación IP55, lo que permite operación bajo lluvia moderada — condición habitual en emergencias reales. El Mavic 3 Thermal no tiene certificación IP formal.' },
    { q: '¿Cuánto tarda implementar el programa de drones en un cuerpo de bomberos?', a: 'Con el paquete completo (aeronave + capacitación + AFAC), el tiempo promedio es 6–8 semanas desde la firma del pedido hasta el primer vuelo operacional certificado. El trámite AFAC institucional toma 3–4 semanas en condiciones normales.' },
    { q: '¿Manejan baterías y refacciones de repuesto?', a: 'Sí. Mantenemos stock de baterías, hélices y módulos de sensor para los modelos que distribuimos, con entrega en 24–48 h en CDMX. Para corporaciones fuera de la ZMVM enviamos por paquetería el mismo día del pedido.' },
  ],
  ctaKicker: 'DJI Matrice 30T · Mavic 3 Thermal · Dock 2 · Capacitación + AFAC · Stock CDMX',
  ctaTitleHtml: 'Cámara térmica radiométrica.<br/>Llave en mano con AFAC.',
  ctaWhatsapp: 'Hola, quiero cotizar drones DJI Enterprise con cámara térmica para mi corporación de bomberos/protección civil.',
};

export const dronesBrandList: EquipmentBrand[] = [djiEnterprise];
