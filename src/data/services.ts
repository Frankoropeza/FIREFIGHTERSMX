export interface Service {
  slug: string;
  title: string;
  /** Etiqueta de norma / respaldo (eyebrow y badges) */
  norm: string;
  /** Meta description (≤160 caracteres) */
  description: string;
  /** Descripción corta para cards (1 línea) */
  shortDesc: string;
  /** Color de acento de la card */
  accent: string;
  /** Ícono SVG inline */
  icon: string;
  href: string;
  /** Párrafos de introducción SEO de la página del servicio */
  intro: string[];
  /** Qué incluye el servicio */
  items: { name: string; detail: string }[];
  /** Módulo destacado (2 columnas) en el hub /servicios */
  spotlight: {
    title: string;
    highlight: string;
    paragraphs: string[];
    subsections: { name: string; detail: string }[];
    image: string;
    imageAlt: string;
  };
  /** FAQs del servicio (texto plano — alimentan FAQPage schema) */
  faqs: { q: string; a: string }[];
}

export const services: Service[] = [
  {
    slug: 'capacitacion',
    title: 'Capacitación Certificada',
    norm: 'DC-3 STPS · NFPA 1001',
    description: 'Capacitación contra incendio con constancia DC-3 STPS: brigadas NOM-002, bombero NFPA 1001, uso de SCBA, rescate y HAZMAT. Cursos en tu planta o estación.',
    shortDesc: 'Cursos NFPA y NOM-002 con constancia DC-3 válida ante STPS e IMSS.',
    accent: '#F75000',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M22 10L12 5 2 10l10 5 10-5z"/><path d="M6 12v5c0 1.7 2.7 3 6 3s6-1.3 6-3v-5"/><path d="M22 10v6"/></svg>`,
    href: '/servicios/capacitacion',
    intro: [
      'Una brigada solo responde como fue entrenada. Impartimos cursos teórico-prácticos con fuego real controlado, alineados a NOM-002-STPS-2010 y a los estándares NFPA 1001 y 1041, en tu planta, estación o en campo de entrenamiento.',
      'Toda formación entrega constancia DC-3 válida ante la STPS e IMSS, lista de asistencia firmada y reporte fotográfico — la evidencia documental exacta que pide el inspector en una revisión.',
    ],
    items: [
      { name: 'Brigadas NOM-002-STPS', detail: 'Formación inicial y recurrente de brigadas contra incendio, evacuación y primeros auxilios con simulacro final.' },
      { name: 'Bombero NFPA 1001 I y II', detail: 'Programa profesional por niveles para cuerpos de bomberos y brigadas industriales avanzadas.' },
      { name: 'Uso y mantenimiento de SCBA', detail: 'Colocación rápida, manejo de aire, emergencias y cuidado diario del equipo de respiración.' },
      { name: 'Rescate y HAZMAT awareness', detail: 'Rescate vehicular, espacios confinados y primera respuesta a materiales peligrosos.' },
    ],
    spotlight: {
      title: 'Capacitación que tu brigada',
      highlight: 'puede demostrar ante la STPS',
      paragraphs: [
        'La diferencia entre un curso y una capacitación certificada es la evidencia: constancias DC-3 registradas, temario alineado a NOM-002-STPS y un instructor con registro vigente ante la STPS. Eso es lo que entregamos en cada formación.',
        'Entrenamos con el equipo que tu gente usará en la realidad: extintores con fuego vivo, SCBA presurizados y escenarios montados en tu propia instalación para que el simulacro final refleje tu riesgo real.',
      ],
      subsections: [
        { name: 'Instructores con registro STPS', detail: 'Agente capacitador externo registrado; constancias DC-3 válidas en inspecciones de STPS e IMSS.' },
        { name: 'Práctica con fuego real', detail: 'Bandejas de fuego controlado, extintores de práctica y humo de adiestramiento — no solo teoría.' },
        { name: 'Programas por nivel', detail: 'Desde brigadista básico hasta bombero NFPA 1001 II, con rutas de formación anuales para tu personal.' },
        { name: 'Evidencia documental completa', detail: 'DC-3, listas, temario, reporte fotográfico y diploma — expediente listo para auditoría.' },
      ],
      image: '/images/servicios/capacitacion.avif',
      imageAlt: 'Ilustración técnica de instructor de brigada contra incendio con constancia DC-3 y extintor de práctica',
    },
    faqs: [
      { q: '¿La constancia DC-3 es válida ante la STPS?', a: 'Sí. Somos agente capacitador externo con registro vigente ante la STPS; las constancias DC-3 que emitimos son válidas en inspecciones de la Secretaría del Trabajo y ante el IMSS.' },
      { q: '¿Cuánta gente puede tomar el curso por grupo?', a: 'Recomendamos grupos de 10 a 20 personas por instructor para mantener la práctica individual con extintores y SCBA. Para plantas grandes programamos varios grupos el mismo día.' },
      { q: '¿El curso se imparte en nuestras instalaciones?', a: 'Sí, la mayoría de los cursos se imparten en tu planta con escenarios montados sobre tu riesgo real. También coordinamos campo de entrenamiento con fuego estructural para niveles avanzados.' },
    ],
  },
  {
    slug: 'mantenimiento',
    title: 'Mantenimiento y Recarga',
    norm: 'NFPA 1850 · NOM-154',
    description: 'Mantenimiento y recarga certificada: extintores con collar de garantía, SCBA con prueba de flujo, herramientas Holmatro y EPP conforme NFPA 1850 en México.',
    shortDesc: 'Extintores, SCBA, herramientas hidráulicas y EPP — con reporte para auditoría.',
    accent: '#F5A623',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>`,
    href: '/servicios/mantenimiento',
    intro: [
      'Un equipo sin mantenimiento es un riesgo disfrazado de protección. Damos servicio certificado a extintores (recarga y prueba hidrostática NOM-154-SCFI), equipos SCBA (prueba de flujo anual y cilindros), herramientas hidráulicas Holmatro y EPP estructural conforme NFPA 1850.',
      'Cada servicio entrega etiqueta de inspección vigente, collar de garantía cuando aplica y reporte documental para tu expediente ante Protección Civil, STPS o tu aseguradora.',
    ],
    items: [
      { name: 'Extintores NOM-154-SCFI', detail: 'Recarga de todos los agentes, collar de garantía, etiqueta vigente y prueba hidrostática programada.' },
      { name: 'SCBA y cilindros', detail: 'Prueba de flujo anual, mantenimiento de reguladores, prueba hidrostática de cilindros y refacciones originales.' },
      { name: 'Herramientas hidráulicas', detail: 'Servicio preventivo y correctivo Holmatro con refacciones de fábrica para conservar la certificación.' },
      { name: 'EPP estructural NFPA 1850', detail: 'Inspección avanzada, lavado técnico, reparación certificada y retiro documentado al fin de vida útil.' },
    ],
    spotlight: {
      title: 'Mantenimiento que conserva',
      highlight: 'la certificación de tu equipo',
      paragraphs: [
        'El mantenimiento no certificado anula garantías y certificaciones. Nuestro taller trabaja con refacciones originales y procedimientos de fábrica para que cada extintor, SCBA o herramienta conserve su conformidad — y tú conserves la evidencia.',
        'Programamos tu calendario anual completo: recargas, pruebas hidrostáticas, pruebas de flujo e inspecciones NFPA 1850, con recordatorios automáticos para que ningún vencimiento te tome por sorpresa.',
      ],
      subsections: [
        { name: 'Taller y servicio en sitio', detail: 'Unidades móviles para recarga y servicio en tu instalación, o recolección y entrega en taller.' },
        { name: 'Pólizas anuales', detail: 'Contrato de mantenimiento con calendario, precios fijos y reportes trimestrales para auditorías.' },
        { name: 'Trazabilidad total', detail: 'Cada equipo queda registrado: fechas, técnico, refacciones y próxima intervención.' },
        { name: 'Recordatorios de vencimiento', detail: 'Te avisamos antes de cada recarga anual, prueba hidrostática o inspección de EPP.' },
      ],
      image: '/images/servicios/mantenimiento.avif',
      imageAlt: 'Ilustración técnica de mantenimiento de extintor con collar de garantía y herramienta de servicio',
    },
    faqs: [
      { q: '¿Cada cuánto se recarga un extintor?', a: 'La NOM-154-SCFI exige servicio de mantenimiento y recarga anual, y prueba hidrostática cada 5 años para cilindros de alta presión (CO₂, agua) o cada 12 años para PQS. Si un extintor se disparó, aunque sea parcialmente, se recarga completo.' },
      { q: '¿El collar de garantía es obligatorio?', a: 'Sí. El collar acredita que la recarga la hizo una empresa con verificación vigente; sin él, Protección Civil puede rechazar el equipo en inspección. Todos nuestros servicios lo incluyen.' },
      { q: '¿Dan servicio a equipos comprados con otro proveedor?', a: 'Sí. Damos mantenimiento a extintores, SCBA, herramientas y EPP de cualquier procedencia, siempre que el equipo sea original y reparable con refacciones de fábrica.' },
    ],
  },
  {
    slug: 'instalacion-sistemas-ci',
    title: 'Instalación de Sistemas CI',
    norm: 'NFPA 13 · 72 · 2001',
    description: 'Diseño e instalación de sistemas contra incendio: rociadores NFPA 13, detección y alarma NFPA 72, supresión FM-200/Novec. Memoria de cálculo y llave en mano.',
    shortDesc: 'Rociadores, detección y alarma, y agentes limpios — proyecto llave en mano.',
    accent: '#34D399',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M12 2a10 10 0 1 0 0 20A10 10 0 0 0 12 2z"/><path d="M8 12h8M12 8v8"/></svg>`,
    href: '/servicios/instalacion-sistemas-ci',
    intro: [
      'Diseñamos e instalamos sistemas fijos de protección contra incendio llave en mano: rociadores automáticos NFPA 13, detección y alarma NFPA 72 con tableros direccionables, redes hidráulicas con bombas NFPA 20 y supresión por agente limpio NFPA 2001 para activos críticos.',
      'Cada proyecto entrega memoria de cálculo hidráulico, planos as-built, protocolo de pruebas de aceptación y capacitación a tu personal — el expediente completo para tu aseguradora, tu DRO y la autoridad.',
    ],
    items: [
      { name: 'Ingeniería y memoria de cálculo', detail: 'Diseño por densidad de riesgo, cálculo hidráulico y planos firmados listos para revisión de tu DRO.' },
      { name: 'Rociadores y red hidráulica', detail: 'Tubería, rociadores Tyco/Viking, bombas certificadas y tomas siamesas conforme NFPA 13 y 20.' },
      { name: 'Detección y alarma NFPA 72', detail: 'Paneles direccionables, detectores, estaciones manuales y notificación audible/visible por zonas.' },
      { name: 'Supresión con agente limpio', detail: 'FM-200 y Novec 1230 para data centers, archivos y salas eléctricas, con prueba de hermeticidad.' },
    ],
    spotlight: {
      title: 'Sistemas contra incendio',
      highlight: 'llave en mano y documentados',
      paragraphs: [
        'Un sistema fijo es tan bueno como su ingeniería: el cálculo hidráulico, la zonificación de detección y la selección del agente correcto definen si el sistema controla el fuego o solo hace ruido. Nuestro equipo técnico diseña sobre NFPA y norma mexicana, y construye con supervisión propia.',
        'Trabajamos oficinas, naves industriales, hoteles, hospitales y centros de datos — desde el diagnóstico y el anteproyecto para presupuesto, hasta las pruebas de aceptación con tu aseguradora presente.',
      ],
      subsections: [
        { name: 'Proyecto ejecutivo completo', detail: 'Levantamiento, memoria de cálculo, planos, catálogo de conceptos y cronograma de obra.' },
        { name: 'Instalación con supervisión propia', detail: 'Cuadrillas certificadas y un residente técnico responsable de principio a fin.' },
        { name: 'Pruebas de aceptación', detail: 'Protocolo documentado de flujo, presión, detección y descarga ante tu DRO o aseguradora.' },
        { name: 'Mantenimiento posterior', detail: 'Pólizas trimestrales o anuales del sistema instalado, con bitácora NFPA 25.' },
      ],
      image: '/images/servicios/instalacion-sistemas-ci.avif',
      imageAlt: 'Ilustración técnica de rociador automático y panel de control de detección de incendios NFPA',
    },
    faqs: [
      { q: '¿Cuánto tarda la instalación de un sistema contra incendio?', a: 'Detección y alarma en oficina mediana: 1 a 3 semanas. Rociadores en nave industrial: 4 a 8 semanas según metros cuadrados y trazo. Red hidráulica completa con bomba: 6 a 10 semanas. La memoria de cálculo y el anteproyecto se entregan antes de iniciar obra.' },
      { q: '¿Trabajan con nuestro DRO o corresponsable?', a: 'Sí. Entregamos memoria de cálculo y planos para su revisión, atendemos observaciones y ejecutamos las pruebas de aceptación en su presencia.' },
      { q: '¿Qué sistema necesita mi edificio?', a: 'Depende del uso, la superficie y la carga de fuego: la NOM-002-STPS y los códigos NFPA definen el equipamiento mínimo. Hacemos un diagnóstico sin costo y te entregamos el anteproyecto con presupuesto.' },
    ],
  },
  {
    slug: 'auditoria-seguridad',
    title: 'Auditoría NOM-002',
    norm: 'NOM-002-STPS-2010',
    description: 'Auditoría de cumplimiento NOM-002-STPS-2010: diagnóstico de instalaciones, brigada y documentación contra incendio, con plan de cierre de brechas priorizado.',
    shortDesc: 'Diagnóstico integral de planta + plan de cierre de brechas priorizado.',
    accent: '#F75000',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/><path d="m9 15 2 2 4-4"/></svg>`,
    href: '/servicios/auditoria-seguridad',
    intro: [
      'Antes de que llegue la inspección, conviene saber exactamente qué va a encontrar. Nuestra auditoría evalúa tu instalación contra la NOM-002-STPS-2010 punto por punto: clasificación de riesgo, equipamiento, señalización, brigada, simulacros y expediente documental.',
      'El entregable es un informe ejecutivo con semáforo de cumplimiento, plan de cierre de brechas priorizado por riesgo y costo, y seguimiento a 90 días para verificar avances.',
    ],
    items: [
      { name: 'Diagnóstico de instalaciones', detail: 'Recorrido técnico: extintores, hidrantes, detección, rutas de evacuación y señalización NOM-026.' },
      { name: 'Revisión documental', detail: 'Programa interno de PC, bitácoras de mantenimiento, constancias DC-3, simulacros y croquis.' },
      { name: 'Evaluación de brigada', detail: 'Estructura, capacitación vigente, equipamiento y tiempos de respuesta en simulacro.' },
      { name: 'Plan de cierre de brechas', detail: 'Acciones priorizadas con responsable, costo estimado y fecha objetivo; seguimiento a 90 días.' },
    ],
    spotlight: {
      title: 'Pasa la inspección',
      highlight: 'antes de que llegue el inspector',
      paragraphs: [
        'La mayoría de las multas de STPS y Protección Civil no son por falta de equipo, sino por falta de evidencia: bitácoras incompletas, constancias vencidas, simulacros sin documentar. La auditoría revisa lo físico y lo documental con la misma lupa que usa la autoridad.',
        'Auditamos plantas industriales, hoteles, hospitales, oficinas corporativas y centros logísticos. El informe te dice qué está bien, qué es crítico y cuánto cuesta cerrarlo — sin venderte lo que no necesitas.',
      ],
      subsections: [
        { name: 'Checklist de autoridad', detail: 'Evaluamos con los mismos criterios de la inspección STPS y los términos de referencia de PC local.' },
        { name: 'Semáforo de cumplimiento', detail: 'Informe ejecutivo visual para dirección: crítico, observación y conforme, por área.' },
        { name: 'Plan priorizado por riesgo', detail: 'Qué cerrar primero según exposición legal y seguridad real, con costos estimados.' },
        { name: 'Seguimiento a 90 días', detail: 'Segunda visita de verificación incluida para validar el cierre de brechas.' },
      ],
      image: '/images/servicios/auditoria-seguridad.avif',
      imageAlt: 'Ilustración técnica de auditoría de seguridad contra incendio con lista de verificación y semáforo de cumplimiento',
    },
    faqs: [
      { q: '¿Qué revisa exactamente la auditoría NOM-002?', a: 'Clasificación del riesgo de incendio, cantidad y ubicación de extintores, detección y alarma, rutas y señalización NOM-026, brigada y sus constancias DC-3, simulacros documentados, y el expediente del programa interno de Protección Civil.' },
      { q: '¿Cuánto dura una auditoría?', a: 'Una planta mediana toma 1 a 2 días de trabajo en campo más una semana para el informe ejecutivo. Sitios multiedificio o corporativos con varias sedes se cotizan por programa.' },
      { q: '¿La auditoría me compromete a comprarles equipo?', a: 'No. El informe es independiente: te dice qué falta y su costo estimado de mercado. Si quieres que nosotros cerremos las brechas, cotizamos por separado.' },
    ],
  },
  {
    slug: 'brigadas-empresariales',
    title: 'Brigadas Empresariales',
    norm: 'NOM-002 · DC-3',
    description: 'Diseño, equipamiento y capacitación de brigadas contra incendio empresariales llave en mano: estructura, EPP, protocolos y DC-3 STPS incluido.',
    shortDesc: 'Diseño, equipamiento y capacitación de tu brigada — llave en mano.',
    accent: '#F5A623',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
    href: '/servicios/brigadas-empresariales',
    intro: [
      'Formar una brigada desde cero implica diseño organizacional, equipamiento correcto y entrenamiento certificado. Lo entregamos llave en mano: definimos la estructura según tu plantilla y riesgo, equipamos con EPP conforme a norma y capacitamos con constancia DC-3.',
      'El resultado es una brigada operativa y documentada: organigrama, protocolos de respuesta, equipo asignado por brigadista y programa anual de entrenamiento y simulacros.',
    ],
    items: [
      { name: 'Diseño organizacional', detail: 'Estructura de brigada según NOM-002 y tu plantilla: jefes de brigada, roles y suplencias por turno.' },
      { name: 'Equipamiento completo', detail: 'EPP por brigadista, puntos de equipamiento, lámparas, radios y señalización de brigada.' },
      { name: 'Capacitación DC-3', detail: 'Formación inicial y recurrente con fuego real y simulacro de evacuación documentado.' },
      { name: 'Protocolos y programa anual', detail: 'Procedimientos de respuesta por escenario y calendario de entrenamientos y simulacros.' },
    ],
    spotlight: {
      title: 'Tu brigada operativa',
      highlight: 'en un solo proyecto llave en mano',
      paragraphs: [
        'Una brigada de papel no responde emergencias. Construimos brigadas que funcionan: dimensionadas a tu riesgo real, equipadas con EPP certificado y entrenadas con escenarios de tu propia instalación — todo documentado para STPS y Protección Civil.',
        'Trabajamos por fases para que el presupuesto no detenga el proyecto: primero estructura y capacitación básica, después equipamiento completo y especialización. Cada fase deja evidencia documental utilizable de inmediato.',
      ],
      subsections: [
        { name: 'Dimensionada a tu riesgo', detail: 'Número de brigadistas, roles y equipamiento según superficie, plantilla y clasificación NOM-002.' },
        { name: 'EPP asignado y trazable', detail: 'Cada brigadista con su equipo identificado, talla correcta y bitácora de inspección.' },
        { name: 'Simulacros documentados', detail: 'Escenarios con observadores, tiempos medidos y reporte fotográfico para tu expediente.' },
        { name: 'Programa anual incluido', detail: 'Calendario de entrenamientos recurrentes y refrescos DC-3 para mantener la vigencia.' },
      ],
      image: '/images/servicios/brigadas-empresariales.avif',
      imageAlt: 'Ilustración técnica de brigada contra incendio empresarial con jefe de brigada y equipo de protección',
    },
    faqs: [
      { q: '¿Cuántos brigadistas necesita mi empresa?', a: 'La NOM-002 no fija un número único: depende de la superficie, la plantilla por turno y la clasificación de riesgo. Como referencia práctica se dimensiona para que cada área ocupada tenga cobertura en menos de 3 minutos; el diseño organizacional lo define con precisión.' },
      { q: '¿Qué EPP necesita un brigadista contra incendio?', a: 'Para riesgo ordinario: casco con barbiquejo, guantes, lámpara y chaleco de identificación. Para riesgo alto se suma chaquetón ligero o traje estructural, botas y, según el escenario, equipo de respiración SCBA.' },
      { q: '¿En cuánto tiempo queda operativa la brigada?', a: 'Una brigada básica (estructura + capacitación inicial + EPP esencial) queda operativa en 4 a 6 semanas. El programa completo con especialización y simulacro general toma un trimestre.' },
    ],
  },
  {
    slug: 'licitaciones',
    title: 'Soporte para Licitaciones',
    norm: 'CompraNet · PEMEX · CFE',
    description: 'Soporte técnico para licitaciones de equipo contra incendio: fichas técnicas NOM/NFPA, manifiestos, juntas de aclaraciones y plantillas CompraNet, PEMEX y CFE.',
    shortDesc: 'Fichas técnicas, manifiestos y acompañamiento en CompraNet, PEMEX y CFE.',
    accent: '#34D399',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6M16 13H8M16 17H8M10 9H8"/></svg>`,
    href: '/servicios/licitaciones',
    intro: [
      'Ganar una licitación de equipo contra incendio se decide en los detalles técnicos: fichas alineadas al anexo, manifiestos de cumplimiento de normas y respuestas precisas en junta de aclaraciones. Acompañamos procesos federales, estatales y municipales.',
      'Te apoyamos como tu área técnica externa: documentación lista para CompraNet, gestión de las cartas de fabricante que pide el anexo y soporte en la evaluación técnica de tu propuesta.',
    ],
    items: [
      { name: 'Fichas técnicas formato licitación', detail: 'Documentación de cada partida alineada al anexo técnico, con normas NFPA/NOM citadas correctamente.' },
      { name: 'Manifiestos y cartas', detail: 'Cartas de fabricante, garantía y cumplimiento de normas, gestionadas y firmadas.' },
      { name: 'Junta de aclaraciones', detail: 'Análisis del anexo, preguntas estratégicas y soporte técnico durante el proceso.' },
      { name: 'Plantillas CompraNet', detail: 'Propuesta técnica y económica estructurada según los formatos del procedimiento.' },
    ],
    spotlight: {
      title: 'Gana licitaciones con',
      highlight: 'respaldo técnico de fábrica',
      paragraphs: [
        'Las propuestas se descalifican por papeles, no por precio: una ficha que no cita la edición correcta de la norma, una carta de fabricante faltante o una partida mal interpretada. Nuestro equipo arma el expediente técnico como lo lee el evaluador.',
        'Si eres integrador o comercializador, te respaldamos con la documentación de fábrica, stock comprometido y tiempos de entrega reales — para que cotices con seguridad en procesos de PEMEX, CFE, gobiernos estatales y municipios.',
      ],
      subsections: [
        { name: 'Expediente a prueba de evaluador', detail: 'Cada requisito del anexo cruzado contra tu propuesta, sin huecos descalificables.' },
        { name: 'Respaldo documental', detail: 'Cartas de fábrica y nuestra firma como respaldo de suministro y garantía.' },
        { name: 'Experiencia federal y estatal', detail: 'CompraNet, PEMEX, CFE, ASA y dependencias estatales — conocemos sus formatos y criterios.' },
        { name: 'Entrega comprometida', detail: 'Programa de suministro realista con stock verificado antes de que firmes el contrato.' },
      ],
      image: '/images/servicios/licitaciones.avif',
      imageAlt: 'Ilustración técnica de expediente de licitación con sello de cumplimiento y documentos CompraNet',
    },
    faqs: [
      { q: '¿Apoyan aunque la licitación ya esté publicada?', a: 'Sí, mientras haya tiempo antes de la junta de aclaraciones o de la presentación de propuestas. Con 5 días hábiles armamos fichas y manifiestos de la mayoría de las partidas de equipo contra incendio.' },
      { q: '¿Trabajan con integradores o solo venta directa?', a: 'Ambos. Respaldamos a integradores y comercializadores con cartas de distribuidor, precios de mayoreo y stock comprometido, o participamos directamente según el proceso.' },
      { q: '¿Qué documentos de fabricante pueden conseguir?', a: 'Cartas de fabricante, certificados de conformidad NFPA/NOM/UL, fichas técnicas oficiales en español y cartas de garantía — la paquetería documental estándar de los anexos técnicos.' },
    ],
  },
];
