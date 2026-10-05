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
  /** Texto del botón principal de la card (palabra clave, sin «ver»/«ir») */
  cta: string;
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
  /** Bloques de profundidad técnica para el hub individual del servicio */
  sections?: { id: string; title: string; paragraphs: string[]; bullets?: string[] }[];
  /** Secuencia de trabajo desde la solicitud hasta la entrega */
  process?: { step: string; detail: string }[];
  /** Evidencia documental que el cliente debe recibir */
  deliverables?: string[];
  /** Normativa aplicable al alcance; el enlace es interno cuando existe */
  normas?: { code: string; scope: string; href?: string }[];
  /** Enlaces contextuales internos del servicio */
  related?: { label: string; href: string }[];
}

export const services: Service[] = [
  {
    slug: 'capacitacion',
    title: 'Capacitación Certificada',
    norm: 'DC-3 STPS · NFPA 1001',
    description: 'Capacitación contra incendio con constancia DC-3 STPS: brigadas NOM-002, bombero NFPA 1001, uso de SCBA, rescate y HAZMAT. Cursos en tu planta o estación.',
    shortDesc: 'Cursos NFPA y NOM-002 con constancia DC-3 válida ante STPS e IMSS.',
    accent: '#C8102E',
    icon: ``,
    href: '/servicios/capacitacion',
    cta: 'Capacitación contra incendio',
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
      imageAlt: 'Instructor mostrando el uso de un extintor portátil a una brigada contra incendio',
    },
    sections: [
      {
        id: 'alcance',
        title: 'Qué debe cubrir una capacitación contra incendios',
        paragraphs: [
          'Un programa de capacitación contra incendios parte de los riesgos presentes en el centro de trabajo: combustibles, fuentes de ignición, procesos, rutas de evacuación y equipo disponible. La NOM-002-STPS-2010 pide integrar a la brigada, capacitarla y conservar la evidencia de esa formación; un temario genérico no sustituye ese análisis.',
          'La formación combina conocimientos teóricos con habilidades prácticas. El personal debe reconocer la clasificación del fuego, decidir si enfrenta un conato sin exponerse, seleccionar el extintor compatible y activar el procedimiento de emergencia cuando la condición excede su capacidad de respuesta.',
        ],
        bullets: [
          'Prevención de incendios y reconocimiento de condiciones inseguras.',
          'Uso correcto de extintores y límites de actuación ante un conato.',
          'Comunicación, alarma, evacuación y coordinación con la brigada.',
        ],
      },
      {
        id: 'practica',
        title: 'Prácticas y evaluación de brigadistas',
        paragraphs: [
          'La práctica debe corresponder al nivel del participante y al equipo que habrá disponible durante una emergencia. Para una brigada de prevención y combate de incendios, el ejercicio permite observar postura, distancia de operación, ruta de retirada, comunicación y control del agente extintor; no consiste sólo en descargar un extintor.',
          'El cierre de la sesión debe registrar asistencia, temario, evaluación y observaciones para reforzar. Cuando el centro de trabajo realiza simulacros, esos resultados ayudan a ajustar el programa de capacitación y a identificar si hacen falta cambios en señalización, equipo o procedimientos.',
        ],
      },
      {
        id: 'modalidad',
        title: 'Cómo definir modalidad y alcance del curso',
        paragraphs: [
          'La duración y modalidad dependen del riesgo, número de turnos, perfiles a capacitar y prácticas previstas. Antes de solicitar una cotización conviene compartir el giro del centro de trabajo, la cantidad de participantes, el equipo existente, los horarios disponibles y si se requiere integrar el ejercicio a un simulacro.',
          'La capacitación puede ser inicial, de actualización o especializada. El cliente debe pedir que se distingan los contenidos de brigadista, personal de evacuación y personal que sólo requiere conocer las medidas preventivas, para no asignar responsabilidades que el puesto no puede cumplir.',
        ],
      },
    ],
    process: [
      { step: 'Levantamiento de necesidades', detail: 'Se revisan riesgo, turnos, participantes, equipo disponible y objetivo documental del curso.' },
      { step: 'Definición de temario', detail: 'Se delimita la formación teórica, las prácticas y los criterios de evaluación aplicables al grupo.' },
      { step: 'Impartición y práctica', detail: 'Se desarrolla el curso con medidas de seguridad y ejercicios acordes con el alcance definido.' },
      { step: 'Registro de evidencia', detail: 'Se integran listas, temario, evaluaciones y constancias que correspondan a la capacitación realizada.' },
    ],
    deliverables: [
      'Temario y programa de capacitación del grupo.',
      'Lista de asistencia y registro de evaluación.',
      'Constancias DC-3 cuando el alcance contratado aplique.',
      'Reporte de práctica y observaciones de mejora.',
      'Evidencia documental para integrar al expediente interno.',
    ],
    normas: [
      { code: 'NOM-002-STPS-2010', scope: 'Prevención y protección contra incendios en los centros de trabajo; incluye capacitación de brigadas y registros.', href: '/certificaciones/' },
      { code: 'NOM-030-STPS-2009', scope: 'Servicios preventivos de seguridad y salud en el trabajo y sus funciones de diagnóstico y seguimiento.', href: '/certificaciones/' },
      { code: 'NFPA 10', scope: 'Selección, instalación, inspección y mantenimiento de extintores portátiles que deben conocerse en la práctica.' },
    ],
    related: [
      { label: 'Guía completa de NOM-002-STPS', href: '/blog/nom-002-stps-guia-completa/' },
      { label: 'Diferencias entre NOM-002 y DC-3', href: '/blog/nom-002-vs-dc3-capacitacion-brigadas/' },
      { label: 'Cómo documentar un simulacro', href: '/blog/simulacro-incendio-stps-como-documentarlo/' },
      { label: 'Equipos SCBA para brigadas', href: '/productos/equipos-scba/' },
      { label: 'Brigadas industriales capacitadas', href: '/industrias/brigadas-industriales/' },
      { label: 'Solicitar propuesta técnica', href: '/cotizacion/' },
    ],
    faqs: [
      { q: '¿La constancia DC-3 es válida ante la STPS?', a: 'Sí. Somos agente capacitador externo con registro vigente ante la STPS; las constancias DC-3 que emitimos son válidas en inspecciones de la Secretaría del Trabajo y ante el IMSS.' },
      { q: '¿Cuánta gente puede tomar el curso por grupo?', a: 'Recomendamos grupos de 10 a 20 personas por instructor para mantener la práctica individual con extintores y SCBA. Para plantas grandes programamos varios grupos el mismo día.' },
      { q: '¿El curso se imparte en nuestras instalaciones?', a: 'Sí, la mayoría de los cursos se imparten en tu planta con escenarios montados sobre tu riesgo real. También coordinamos campo de entrenamiento con fuego estructural para niveles avanzados.' },
      { q: '¿Cómo se llama el curso contra incendios?', a: 'El nombre debe describir el alcance: capacitación de brigada de prevención y combate de incendios, uso de extintores, evacuación o una especialidad técnica. Lo relevante es que el temario, la práctica y la constancia correspondan a las responsabilidades asignadas.' },
      { q: '¿Qué se enseña en una capacitación contra incendios?', a: 'Puede incluir prevención, clases de fuego, selección y uso de extintores, alarma, evacuación, comunicación y actuación ante un conato. Las habilidades prácticas se definen según el riesgo y el equipo disponible en el centro de trabajo.' },
      { q: '¿Cuánto cuesta un curso de combate contra incendios?', a: 'El costo depende del número de participantes, duración, nivel técnico, prácticas requeridas, sede, equipo y evidencia documental solicitada. Para comparar propuestas, conviene pedir que separen temario, práctica, materiales y entregables.' },
      { q: '¿Qué hacer si se presenta una emergencia?', a: 'Active el procedimiento de emergencia, avise a las personas expuestas y siga las rutas de evacuación. Sólo una persona capacitada debe intentar controlar un conato con el equipo adecuado y siempre con una salida segura; si el fuego crece, se debe evacuar y solicitar apoyo de emergencia.' },
    ],
  },
  {
    slug: 'mantenimiento',
    title: 'Mantenimiento y Recarga',
    norm: 'NFPA 1850 · NOM-154',
    description: 'Mantenimiento de equipo contra incendio: SCBA con prueba de flujo, EPP conforme NFPA 1850, herramientas hidráulicas, sistemas fijos y extintores en México.',
    shortDesc: 'Extintores, SCBA, herramientas hidráulicas y EPP — con reporte para auditoría.',
    accent: '#B54708',
    icon: ``,
    href: '/servicios/mantenimiento',
    cta: 'Mantenimiento de extintores',
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
        { name: 'Recordatorios de vencimiento', detail: 'Te avisamos antes de cada mantenimiento anual, prueba hidrostática o inspección de EPP.' },
      ],
      image: '/images/servicios/mantenimiento.avif',
      imageAlt: 'Técnico revisando manómetros y válvulas de extintores en banco de servicio',
    },
    sections: [
      {
        id: 'alcance',
        title: 'Mantenimiento de equipo contra incendio con trazabilidad',
        paragraphs: [
          'El mantenimiento de equipo contra incendio busca conservar la disponibilidad del equipo entre una inspección y otra. Su alcance cambia según se trate de sistemas fijos, extintores, equipos de respiración autónoma, herramientas de rescate o EPP: cada familia tiene componentes, pruebas, intervalos y criterios de retiro distintos.',
          'Una inspección identifica condiciones visibles y verifica que el equipo esté accesible; el mantenimiento interviene el equipo conforme a instrucciones aplicables y registra el resultado. La diferencia importa porque una etiqueta sin información verificable no demuestra qué se revisó, qué hallazgo se encontró ni qué decisión se tomó.',
        ],
        bullets: [
          'Identificación del equipo, número de serie o ubicación controlada.',
          'Revisión de condición, compatibilidad y funcionamiento según la familia.',
          'Registro de hallazgos, acciones correctivas y próxima intervención.',
        ],
      },
      {
        id: 'equipos',
        title: 'Equipo, sistemas y condiciones que se revisan',
        paragraphs: [
          'En SCBA, el control debe considerar cilindro, válvula, regulador, pieza facial, arnés y evidencia de las pruebas que correspondan a la configuración. Para EPP estructural, NFPA 1850 reúne criterios de selección, cuidado y mantenimiento; la inspección ayuda a decidir si una prenda continúa en servicio, requiere reparación o debe retirarse.',
          'En herramientas hidráulicas o a batería se verifica la condición de mangueras, conexiones, controles, baterías y accesorios. En sistemas contra incendio, los procedimientos de inspección, prueba y mantenimiento cambian entre rociadores, bombas, detección, alarma y agentes limpios; el programa debe identificar con claridad qué sistema cubre.',
        ],
      },
      {
        id: 'proveedor',
        title: 'Qué pedir a un proveedor de mantenimiento',
        paragraphs: [
          'Antes de autorizar un servicio, solicite alcance por familia de equipo, método de identificación, criterios de aceptación, piezas o consumibles previstos y formato de reporte. Para comparar propuestas, no basta con el nombre genérico de mantenimiento: deben quedar claros los equipos incluidos, exclusiones y pruebas aplicables.',
          'Conserve los reportes junto con manuales, certificados y bitácoras de inspección. Esa carpeta permite planear sustituciones, revisar vencimientos y demostrar ante una auditoría qué equipo fue atendido, cuándo se evaluó y qué condición presentó al cerrar el servicio.',
        ],
      },
    ],
    process: [
      { step: 'Inventario y alcance', detail: 'Se identifica el equipo, sistema o lote a revisar y se confirma el servicio solicitado.' },
      { step: 'Inspección inicial', detail: 'Se documenta condición física, identificación y hallazgos antes de intervenir cada unidad.' },
      { step: 'Servicio y pruebas', detail: 'Se realizan las actividades y pruebas que correspondan a la familia y al alcance contratado.' },
      { step: 'Cierre documental', detail: 'Se entregan registros de servicio, hallazgos y recomendaciones para la siguiente intervención.' },
    ],
    deliverables: [
      'Inventario o relación de equipos atendidos.',
      'Reporte de inspección y mantenimiento por equipo o sistema.',
      'Registro de pruebas aplicables y resultados.',
      'Relación de hallazgos, equipo fuera de servicio y recomendaciones.',
      'Bitácora para integrar al programa de mantenimiento.',
    ],
    normas: [
      { code: 'NOM-154-SCFI-2005', scope: 'Servicio de mantenimiento y recarga para extintores portátiles y sobre ruedas; es un componente del programa, no todo el alcance.', href: '/blog/collar-garantia-extintores-nom-154/' },
      { code: 'NFPA 25', scope: 'Inspección, prueba y mantenimiento de sistemas de protección contra incendio basados en agua.' },
      { code: 'NFPA 1850', scope: 'Selección, cuidado y mantenimiento de conjuntos de protección, SCBA y equipos relacionados para respuesta a emergencias.', href: '/productos/trajes-bombero/' },
    ],
    related: [
      { label: 'Prueba hidrostática de cilindros SCBA', href: '/blog/prueba-hidrostatica-cilindros-scba-nfpa/' },
      { label: 'Inspección y vida útil de traje', href: '/blog/inspeccion-cuidado-vida-util-traje-bombero/' },
      { label: 'Equipos SCBA con soporte técnico', href: '/productos/equipos-scba/' },
      { label: 'Herramientas de rescate disponibles', href: '/productos/herramientas-rescate/' },
      { label: 'Equipo de protección para bomberos', href: '/productos/epp-bombero/' },
      { label: 'Solicitar revisión de equipo', href: '/cotizacion/' },
    ],
    faqs: [
      { q: '¿Cada cuánto se recarga un extintor?', a: 'La NOM-002-STPS exige revisión mensual con registro y mantenimiento al menos una vez al año conforme a la NOM-154-SCFI-2005. La recarga se realiza después de cada uso y, en su caso, por resultado del mantenimiento. Los cilindros de CO₂ requieren prueba hidrostática cada 5 años.' },
      { q: '¿El collar de garantía es obligatorio?', a: 'Sí. El collar acredita que la recarga la hizo una empresa con verificación vigente; sin él, Protección Civil puede rechazar el equipo en inspección. Todos nuestros servicios lo incluyen.' },
      { q: '¿Dan servicio a equipos comprados con otro proveedor?', a: 'Sí. Damos mantenimiento a extintores, SCBA, herramientas y EPP de cualquier procedencia, siempre que el equipo sea original y reparable con refacciones de fábrica.' },
      { q: '¿Qué tipos de mantenimiento existen?', a: 'El preventivo se programa para conservar condiciones de funcionamiento; el correctivo atiende una falla o daño identificado. El predictivo usa datos o mediciones para anticipar una condición; su aplicación depende de que el equipo y el programa cuenten con los datos necesarios.' },
      { q: '¿Qué diferencia hay entre inspección y mantenimiento?', a: 'La inspección revisa condición, acceso, identificación y señales visibles para detectar desviaciones. El mantenimiento comprende las acciones técnicas y pruebas que corresponden a cada equipo o sistema, con un registro que permita conocer qué se hizo y cuál fue el resultado.' },
      { q: '¿Qué pide la NOM-002-STPS sobre protección contra incendios?', a: 'La NOM-002-STPS-2010 establece condiciones de prevención y protección en los centros de trabajo, incluido el mantenimiento del equipo y sistemas contra incendio conforme a las normas o procedimientos aplicables. El expediente debe conservar los registros que demuestren el programa.' },
      { q: '¿Cómo se verifica a un proveedor de mantenimiento?', a: 'Pida alcance escrito, identificación de los equipos, normas o manuales de referencia, reportes de pruebas y evidencia de las actividades realizadas. También conviene confirmar que el proveedor distinga entre inspección visual, servicio preventivo y reparación correctiva.' },
    ],
  },
  {
    slug: 'instalacion-sistemas-ci',
    title: 'Instalación de Sistemas Contra Incendio',
    norm: 'NFPA 13 · 72 · 2001',
    description: 'Diseño e instalación de sistemas contra incendio: rociadores NFPA 13, detección y alarma NFPA 72, supresión FM-200/Novec. Memoria de cálculo y llave en mano.',
    shortDesc: 'Rociadores, detección y alarma, y agentes limpios — proyecto llave en mano.',
    accent: '#067647',
    icon: ``,
    href: '/servicios/instalacion-sistemas-ci',
    cta: 'Sistemas contra incendio',
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
      imageAlt: 'Instalación de tubería de rociadores contra incendio en el techo de un almacén',
    },
    sections: [
      {
        id: 'seleccion',
        title: 'Cómo se define un sistema contra incendio',
        paragraphs: [
          'La instalación de sistemas contra incendio inicia con el uso de la edificación, los procesos, los materiales, la carga de fuego, la ocupación y las rutas de evacuación. Esos datos permiten identificar si se requiere detección, alarma, rociadores, red hidráulica, bomba, supresión por agente limpio u otra combinación; no todos los edificios necesitan la misma solución.',
          'La protección contra incendio debe coordinar detección temprana, notificación, control o supresión y evacuación. Elegir un equipo por catálogo sin revisar el riesgo puede dejar áreas sin cobertura o generar incompatibilidades entre suministro de agua, alarmas, rociadores y operación del inmueble.',
        ],
        bullets: [
          'Levantamiento de condiciones existentes y áreas de riesgo.',
          'Criterios de diseño y normativa aplicable al proyecto.',
          'Compatibilidad entre detección, alarma, supresión y evacuación.',
        ],
      },
      {
        id: 'ingenieria',
        title: 'Ingeniería, instalación y pruebas de aceptación',
        paragraphs: [
          'El proyecto ejecutivo traduce el riesgo en planos, memoria de cálculo, selección de equipos, trazos y criterios de prueba. En una red de rociadores, la memoria hidráulica verifica que el suministro y las conexiones respondan a la demanda de diseño; en detección y alarma, la documentación define dispositivos, circuitos, zonas y notificación.',
          'Durante la instalación se deben controlar cambios de obra, ubicaciones finales y pruebas. Las pruebas de aceptación documentan que componentes, señales, presiones y secuencias operan conforme al alcance del proyecto; sus resultados no sustituyen el programa posterior de inspección y mantenimiento de los sistemas.',
        ],
      },
      {
        id: 'cliente',
        title: 'Información necesaria para cotizar e instalar',
        paragraphs: [
          'Para una propuesta técnica útil, comparta planos disponibles, uso de cada área, altura de la edificación, inventario de materiales, sistemas existentes, requerimientos de aseguradora y restricciones de operación. Si el proyecto está sujeto a revisión de un DRO, también conviene definir desde el inicio qué documentos deben integrarse.',
          'El cliente debe pedir que la cotización diferencie ingeniería, suministro, instalación, pruebas, documentación y mantenimiento posterior. Esto facilita comparar alcances equivalentes y evita asumir que una partida cubre elementos que no aparecen descritos en los planos o en el catálogo de conceptos.',
        ],
      },
    ],
    process: [
      { step: 'Diagnóstico del inmueble', detail: 'Se reúnen datos de uso, riesgo, sistemas existentes, planos y restricciones de operación.' },
      { step: 'Ingeniería del proyecto', detail: 'Se desarrollan criterios de diseño, planos, memoria de cálculo y catálogo de conceptos del alcance.' },
      { step: 'Suministro e instalación', detail: 'Se coordinan equipos, trayectorias, conexiones y cambios de obra conforme a la documentación aprobada.' },
      { step: 'Pruebas y entrega', detail: 'Se ejecutan pruebas de aceptación y se integra la documentación final del sistema instalado.' },
    ],
    deliverables: [
      'Memoria de cálculo y criterios de diseño aplicables.',
      'Planos de instalación y planos conforme a obra cuando proceda.',
      'Catálogo de conceptos y relación de equipos instalados.',
      'Protocolos y resultados de pruebas de aceptación.',
      'Manual documental para operación y mantenimiento posterior.',
    ],
    normas: [
      { code: 'NOM-002-STPS-2010', scope: 'Condiciones de prevención y protección contra incendios que ayudan a definir medidas en los centros de trabajo.', href: '/certificaciones/' },
      { code: 'NFPA 13', scope: 'Diseño e instalación de sistemas de rociadores automáticos.' },
      { code: 'NFPA 72', scope: 'Sistemas de alarma y señalización de incendio, incluidos criterios de detección y notificación.' },
      { code: 'NFPA 2001', scope: 'Sistemas de extinción por agentes limpios para riesgos y recintos que justifiquen esa solución.' },
    ],
    related: [
      { label: 'Memoria hidráulica de rociadores', href: '/blog/memoria-calculo-hidraulico-rociadores-nfpa-13/' },
      { label: 'Detección, alarma y supresión', href: '/blog/deteccion-alarma-supresion-nfpa-72-2001/' },
      { label: 'Sistemas contra incendio disponibles', href: '/productos/sistemas-ci/' },
      { label: 'Detectores de humo para edificios', href: '/productos/detectores-de-humo/' },
      { label: 'Protección para bodegas y almacenes', href: '/blog/proteccion-contra-incendio-bodegas-almacenes/' },
      { label: 'Solicitar propuesta de instalación', href: '/cotizacion/' },
    ],
    faqs: [
      { q: '¿Cuánto tarda la instalación de un sistema contra incendio?', a: 'Detección y alarma en oficina mediana: 1 a 3 semanas. Rociadores en nave industrial: 4 a 8 semanas según metros cuadrados y trazo. Red hidráulica completa con bomba: 6 a 10 semanas. La memoria de cálculo y el anteproyecto se entregan antes de iniciar obra.' },
      { q: '¿Trabajan con nuestro DRO o corresponsable?', a: 'Sí. Entregamos memoria de cálculo y planos para su revisión, atendemos observaciones y ejecutamos las pruebas de aceptación en su presencia.' },
      { q: '¿Qué sistema necesita mi edificio?', a: 'Depende del uso, la superficie y la carga de fuego: la NOM-002-STPS y los códigos NFPA definen el equipamiento mínimo. Hacemos un diagnóstico sin costo y te entregamos el anteproyecto con presupuesto.' },
      { q: '¿Cuánto cuesta instalar un sistema contra incendios?', a: 'El costo depende del riesgo, superficie, altura, sistema existente, suministro disponible, ingeniería, equipos y restricciones de obra. Una propuesta comparable debe indicar qué incluye en diseño, materiales, instalación, pruebas y documentación.' },
      { q: '¿Cuándo se requiere un sistema fijo contra incendios?', a: 'La necesidad se determina por el riesgo de incendio, uso y características del inmueble, así como por requisitos de autoridad, aseguradora o proyecto. Un diagnóstico debe revisar medidas de prevención, medios de detección, extintores y sistemas fijos de forma conjunta.' },
      { q: '¿Qué incluye la instalación de un sistema contra incendio?', a: 'El alcance puede incluir ingeniería, suministro, montaje, conexiones, programación, pruebas de aceptación y expediente documental. Debe especificarse por sistema: por ejemplo, rociadores y red hidráulica no tienen los mismos componentes que detección, alarma o agente limpio.' },
      { q: '¿Es necesario capacitar al personal para usar los sistemas?', a: 'El personal debe conocer los procedimientos de alarma, evacuación, reporte de fallas y actuación asignada en el plan de emergencia. La capacitación de brigadas y usuarios no reemplaza la inspección, prueba y mantenimiento técnico del sistema.' },
    ],
  },
  {
    slug: 'auditoria-seguridad',
    title: 'Auditoría NOM-002',
    norm: 'NOM-002-STPS-2010',
    description: 'Auditoría de cumplimiento NOM-002-STPS-2010: diagnóstico de instalaciones, brigada y documentación contra incendio, con plan de cierre de brechas priorizado.',
    shortDesc: 'Diagnóstico integral de planta + plan de cierre de brechas priorizado.',
    accent: '#C8102E',
    icon: ``,
    href: '/servicios/auditoria-seguridad',
    cta: 'Auditoría NOM-002-STPS',
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
      imageAlt: 'Auditor revisando extintor, señal de salida y estación manual de alarma',
    },
    sections: [
      {
        id: 'revision',
        title: 'Qué revisa una auditoría NOM-002-STPS',
        paragraphs: [
          'Una auditoría NOM-002-STPS-2010 compara las condiciones del centro de trabajo y su evidencia documental con las obligaciones aplicables. La revisión parte de la clasificación del riesgo de incendio y abarca medidas de prevención, medios de detección, equipo contra incendio, señalización, rutas de evacuación, brigadas y plan de atención a emergencias.',
          'El recorrido no debe limitarse a contar extintores. También se revisan accesibilidad, identificación, conservación de pasillos, almacenamiento de materiales, instrucciones de seguridad, coordinación con contratistas y visitantes, así como la correspondencia entre el inmueble, sus riesgos y los documentos que se presentan como evidencia.',
        ],
        bullets: [
          'Clasificación del riesgo de incendio y condiciones de seguridad.',
          'Equipo, sistemas fijos, medios de detección y señalización.',
          'Brigada, capacitación, simulacro, evacuación y expediente documental.',
        ],
      },
      {
        id: 'expediente',
        title: 'Expediente documental para demostrar cumplimiento',
        paragraphs: [
          'El expediente debe permitir relacionar cada obligación con una evidencia vigente y localizable. Según el centro de trabajo, esto puede incluir croquis, clasificación del riesgo, programa de revisión, bitácoras de mantenimiento, registros de capacitación, integración de brigadas, simulacros y procedimientos para atención de emergencias.',
          'Una buena auditoría separa documentos inexistentes, documentos vencidos y documentos que no corresponden a la instalación actual. Esa distinción permite priorizar acciones: corregir una ruta obstruida no se resuelve con un formato, y una constancia aislada no prueba que la brigada está organizada ni que el simulacro se documentó.',
        ],
      },
      {
        id: 'cierre',
        title: 'Cómo cerrar hallazgos sin perder trazabilidad',
        paragraphs: [
          'Los hallazgos deben describir condición observada, requisito relacionado, evidencia revisada, riesgo asociado y acción requerida. Un plan de cierre útil asigna responsable, fecha objetivo y forma de verificación; evita recomendaciones genéricas que no permiten saber si una brecha quedó realmente atendida.',
          'Antes de una inspección, conviene revisar que las acciones físicas y documentales coincidan. Si se sustituye equipo, cambia una ruta de evacuación o se modifica una zona de almacenamiento, los croquis, procedimientos, capacitación y registros deben actualizarse para que el expediente refleje la condición del inmueble.',
        ],
      },
    ],
    process: [
      { step: 'Solicitud de información', detail: 'Se reúnen datos del centro de trabajo, clasificación disponible, planos y documentos del expediente.' },
      { step: 'Recorrido y revisión', detail: 'Se contrastan condiciones de campo, equipo, rutas y sistemas con la evidencia documental existente.' },
      { step: 'Matriz de hallazgos', detail: 'Se documentan brechas, prioridades y evidencia faltante para cada requisito revisado.' },
      { step: 'Plan de cierre', detail: 'Se ordenan acciones, responsables y medios de verificación para dar seguimiento al cumplimiento.' },
    ],
    deliverables: [
      'Checklist de revisión por requisito aplicable.',
      'Matriz de hallazgos y evidencia revisada.',
      'Registro fotográfico de condiciones observadas cuando aplique.',
      'Plan de cierre con responsables y medios de verificación.',
      'Índice documental para el expediente de seguridad.',
    ],
    normas: [
      { code: 'NOM-002-STPS-2010', scope: 'Prevención y protección contra incendios en los centros de trabajo; establece obligaciones, clasificación y registros.', href: '/blog/nom-002-stps-guia-completa/' },
      { code: 'NOM-026-STPS-2008', scope: 'Colores y señales de seguridad e higiene, e identificación de riesgos por fluidos conducidos en tuberías.', href: '/productos/senalizacion-emergencia/' },
      { code: 'NOM-030-STPS-2009', scope: 'Servicios preventivos de seguridad y salud en el trabajo y sus actividades de diagnóstico y programa de seguridad.' },
    ],
    related: [
      { label: 'Checklist documental de NOM-002', href: '/blog/expediente-documental-nom-002-stps-checklist/' },
      { label: 'No conformidades frecuentes de STPS', href: '/blog/no-conformidades-stps-nom-002-plantas-mexico/' },
      { label: 'Dotación de extintores NOM-002', href: '/blog/nom-002-stps-dotacion-extintores/' },
      { label: 'Señalización para rutas de evacuación', href: '/productos/senalizacion-emergencia/' },
      { label: 'Sistemas contra incendio documentados', href: '/productos/sistemas-ci/' },
      { label: 'Solicitar diagnóstico de cumplimiento', href: '/cotizacion/' },
    ],
    faqs: [
      { q: '¿Qué revisa exactamente la auditoría NOM-002?', a: 'Clasificación del riesgo de incendio, cantidad y ubicación de extintores, detección y alarma, rutas y señalización NOM-026, brigada y sus constancias DC-3, simulacros documentados, y el expediente del programa interno de Protección Civil.' },
      { q: '¿Cuánto dura una auditoría?', a: 'Una planta mediana toma 1 a 2 días de trabajo en campo más una semana para el informe ejecutivo. Sitios multiedificio o corporativos con varias sedes se cotizan por programa.' },
      { q: '¿La auditoría me compromete a comprarles equipo?', a: 'No. El informe es independiente: te dice qué falta y su costo estimado de mercado. Si quieres que nosotros cerremos las brechas, cotizamos por separado.' },
      { q: '¿Qué son las brigadas de emergencia de la STPS?', a: 'Son grupos de trabajadores organizados y capacitados para apoyar las acciones previstas ante una emergencia. Sus funciones deben definirse en el plan del centro de trabajo e incluir, según corresponda, prevención y combate de incendios, evacuación, primeros auxilios, comunicación, búsqueda y rescate.' },
      { q: '¿Cómo se clasifica el riesgo de incendio en un centro de trabajo?', a: 'La NOM-002-STPS-2010 establece criterios para determinar el grado de riesgo a partir de características del centro de trabajo, superficie, inventarios, procesos y materiales inflamables o combustibles. La clasificación debe sustentarse y mantenerse congruente con las condiciones reales.' },
      { q: '¿Qué documentos ayudan a demostrar cumplimiento de NOM-002?', a: 'Se requieren los documentos y registros aplicables al centro de trabajo: clasificación de riesgo, procedimientos, croquis, programas de revisión, capacitación, brigadas, simulacros y mantenimiento. La auditoría debe verificar contenido, vigencia y relación con las condiciones observadas.' },
      { q: '¿Qué medidas preventivas ayudan a evitar incendios?', a: 'Controlar fuentes de ignición, ordenar y separar materiales combustibles, mantener instalaciones y equipo, conservar rutas libres y capacitar al personal son medidas básicas. La medida específica depende del proceso, materiales y clasificación de riesgo del centro de trabajo.' },
    ],
  },
  {
    slug: 'brigadas-empresariales',
    title: 'Brigadas Empresariales',
    norm: 'NOM-002 · DC-3',
    description: 'Diseño, equipamiento y capacitación de brigadas contra incendio empresariales llave en mano: estructura, EPP, protocolos y DC-3 STPS incluido.',
    shortDesc: 'Diseño, equipamiento y capacitación de tu brigada — llave en mano.',
    accent: '#B54708',
    icon: ``,
    href: '/servicios/brigadas-empresariales',
    cta: 'Brigadas contra incendio',
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
      imageAlt: 'Brigada empresarial practicando un simulacro de evacuación en una planta',
    },
    sections: [
      {
        id: 'organizacion',
        title: 'Cómo se organiza una brigada contra incendio',
        paragraphs: [
          'Una brigada contra incendio forma parte de la organización para atención a emergencias del centro de trabajo. Su integración debe considerar los turnos, áreas ocupadas, clasificación del riesgo, personas que requieren apoyo y los medios disponibles; no existe una cantidad única de brigadistas que funcione para todos los inmuebles.',
          'Las funciones deben asignarse por escrito y practicarse. La brigada de prevención y combate de incendios identifica condiciones de riesgo, verifica equipo asignado, apoya el control inicial cuando es seguro y comunica la situación; su actuación debe coordinarse con evacuación, primeros auxilios, comunicación y, cuando aplique, búsqueda y rescate.',
        ],
        bullets: [
          'Responsables, suplencias y cobertura por turno.',
          'Roles claros durante alarma, evacuación y atención de un conato.',
          'Medios de comunicación y punto de reunión definidos.',
        ],
      },
      {
        id: 'equipo',
        title: 'Equipamiento y protección personal por escenario',
        paragraphs: [
          'El equipamiento se selecciona a partir de las maniobras que la brigada está autorizada a realizar, no por una lista universal. Un casco, guantes, calzado, lámpara, chaleco de identificación, extintor o equipo de respiración tienen alcances distintos y deben ser compatibles con el riesgo, la capacitación y el procedimiento de respuesta.',
          'La NOM-017-STPS-2008 sirve para identificar y seleccionar equipo de protección personal frente a los riesgos presentes. Cuando el escenario requiere protección estructural o respiración autónoma, se deben definir también inspección, cuidado, capacitación y límites de uso; entregar EPP sin esas condiciones no vuelve segura una maniobra.',
        ],
      },
      {
        id: 'simulacros',
        title: 'Capacitación, simulacros y mejora continua',
        paragraphs: [
          'La capacitación prepara a la brigada para reconocer riesgos de incendio, usar correctamente el equipo y actuar de manera segura. El simulacro permite probar el plan de emergencia: alarma, comunicación, desalojo, rutas de evacuación, punto de reunión, reporte y coordinación entre brigadas.',
          'Después de cada ejercicio deben registrarse los objetivos, participantes, escenario, tiempos observados, incidencias y acciones de mejora. Ese reporte ayuda a corregir problemas de señalización, accesos, comunicación o asignación de roles antes de que se presente una emergencia real.',
        ],
      },
    ],
    process: [
      { step: 'Diagnóstico de organización', detail: 'Se revisan turnos, áreas, riesgos, procedimientos existentes y cobertura requerida para la brigada.' },
      { step: 'Definición de roles', detail: 'Se asignan funciones, suplencias, medios de comunicación y límites de actuación por escenario.' },
      { step: 'Equipamiento y capacitación', detail: 'Se determina el equipo de protección, los recursos de emergencia y la formación necesaria para usarlo.' },
      { step: 'Simulacro y ajuste', detail: 'Se prueba el protocolo y se documentan mejoras para el programa anual de la brigada.' },
    ],
    deliverables: [
      'Organigrama de brigada con roles y suplencias.',
      'Relación de equipo asignado por función o brigadista.',
      'Procedimientos de respuesta y comunicación.',
      'Programa de capacitación y simulacros.',
      'Reporte de simulacro con oportunidades de mejora.',
    ],
    normas: [
      { code: 'NOM-002-STPS-2010', scope: 'Organización, capacitación y actuación de brigadas para prevención y protección contra incendios.', href: '/blog/nom-002-stps-guia-completa/' },
      { code: 'NOM-017-STPS-2008', scope: 'Selección, uso y manejo de equipo de protección personal en los centros de trabajo.', href: '/productos/epp-bombero/' },
      { code: 'NOM-003-SEGOB-2011', scope: 'Señales y avisos para protección civil; útil para apoyar la identificación de rutas y recursos de emergencia.', href: '/productos/senalizacion-emergencia/' },
    ],
    related: [
      { label: 'Dimensionamiento de brigadistas NOM-002', href: '/blog/cuantos-brigadistas-nom-002-dimensionamiento/' },
      { label: 'EPP para brigadistas contra incendio', href: '/blog/epp-brigadista-contra-incendio-que-necesitas/' },
      { label: 'Traje de bombero para brigadista', href: '/blog/traje-de-bombero-brigadista/' },
      { label: 'Trajes para respuesta a incendios', href: '/productos/trajes-bombero/' },
      { label: 'Señalización para emergencias', href: '/productos/senalizacion-emergencia/' },
      { label: 'Capacitación contra incendios', href: '/servicios/capacitacion/' },
    ],
    faqs: [
      { q: '¿Cuántos brigadistas necesita mi empresa?', a: 'La NOM-002 no fija un número único: depende de la superficie, la plantilla por turno y la clasificación de riesgo. Como referencia práctica se dimensiona para que cada área ocupada tenga cobertura en menos de 3 minutos; el diseño organizacional lo define con precisión.' },
      { q: '¿Qué EPP necesita un brigadista contra incendio?', a: 'Para riesgo ordinario: casco con barbiquejo, guantes, lámpara y chaleco de identificación. Para riesgo alto se suma chaquetón ligero o traje estructural, botas y, según el escenario, equipo de respiración SCBA.' },
      { q: '¿En cuánto tiempo queda operativa la brigada?', a: 'Una brigada básica (estructura + capacitación inicial + EPP esencial) queda operativa en 4 a 6 semanas. El programa completo con especialización y simulacro general toma un trimestre.' },
      { q: '¿Cuántas clases de brigadas existen?', a: 'La organización se define según los riesgos y el programa interno del centro de trabajo. De forma habitual se asignan funciones de prevención y combate de incendios, evacuación, primeros auxilios, comunicación y, cuando el análisis lo requiere, búsqueda y rescate; no todas tienen el mismo alcance en cada inmueble.' },
      { q: '¿Qué hace la brigada de combate contra incendios?', a: 'Previene condiciones que favorecen un incendio, revisa el equipo asignado, comunica riesgos y puede actuar ante un conato dentro de los límites de su capacitación y del procedimiento. También debe reconocer cuándo no es seguro intervenir, activar la alarma y apoyar la evacuación.' },
      { q: '¿Qué capacitación necesita un brigadista?', a: 'La capacitación debe corresponder a sus funciones, riesgos y equipo asignado. Para prevención y combate de incendios incluye medidas preventivas, tipos de fuego, manejo de extintores, comunicación y límites de actuación; otras brigadas requieren contenidos de evacuación, primeros auxilios o búsqueda y rescate según su función.' },
      { q: '¿Qué medidas debe tomar una brigada ante un incendio?', a: 'Debe seguir el plan de emergencia: comunicar y activar la alarma, evaluar si se trata de un conato que puede atenderse con seguridad, apoyar la evacuación, mantener rutas despejadas y solicitar ayuda externa cuando el escenario lo requiera. La prioridad es salvaguardar vidas, no conservar bienes.' },
    ],
  },
  {
    slug: 'licitaciones',
    title: 'Soporte para Licitaciones',
    norm: 'Compras MX (antes CompraNet) · PEMEX · CFE',
    description: 'Soporte técnico para licitaciones de equipo contra incendio: fichas NOM/NFPA, manifiestos, juntas de aclaraciones y formatos de Compras MX (antes CompraNet).',
    shortDesc: 'Fichas técnicas, manifiestos y acompañamiento para Compras MX (antes CompraNet).',
    accent: '#067647',
    icon: ``,
    href: '/servicios/licitaciones',
    cta: 'Licitaciones de equipo contra incendio',
    intro: [
      'Ganar una licitación de equipo contra incendio se decide en los detalles técnicos: fichas alineadas al anexo, manifiestos de cumplimiento de normas y respuestas precisas en junta de aclaraciones. Llevamos más de 45 años acompañando procesos federales, estatales y municipales.',
      'Te apoyamos como fabricante/distribuidor respaldo o como tu área técnica externa: documentación para procedimientos de Compras MX (antes CompraNet), cartas de distribuidor autorizado y soporte en la evaluación técnica de tu propuesta.',
    ],
    items: [
      { name: 'Fichas técnicas formato licitación', detail: 'Documentación de cada partida alineada al anexo técnico, con normas NFPA/NOM citadas correctamente.' },
      { name: 'Manifiestos y cartas', detail: 'Cartas de fabricante, distribuidor autorizado, garantía y cumplimiento de normas, firmadas.' },
      { name: 'Junta de aclaraciones', detail: 'Análisis del anexo, preguntas estratégicas y soporte técnico durante el proceso.' },
      { name: 'Formatos Compras MX', detail: 'Propuesta técnica y económica estructurada según los formatos del procedimiento.' },
    ],
    spotlight: {
      title: 'Gana licitaciones con',
      highlight: 'respaldo técnico de fábrica',
      paragraphs: [
        'Las propuestas se descalifican por papeles, no por precio: una ficha que no cita la edición correcta de la norma, una carta de fabricante faltante o una partida mal interpretada. Nuestro equipo arma el expediente técnico como lo lee el evaluador.',
        'Si eres integrador o comercializador, te respaldamos con cartas de distribuidor, stock comprometido y tiempos de entrega reales — para que cotices con seguridad en procesos de PEMEX, CFE, gobiernos estatales y municipios.',
      ],
      subsections: [
        { name: 'Expediente a prueba de evaluador', detail: 'Cada requisito del anexo cruzado contra tu propuesta, sin huecos descalificables.' },
        { name: 'Respaldo de distribuidor autorizado', detail: 'Cartas de fábrica y nuestra firma como respaldo de suministro y garantía.' },
        { name: 'Experiencia federal y estatal', detail: 'Experiencia en procedimientos de CompraNet, PEMEX, CFE, ASA y dependencias estatales, con revisión de formatos y criterios de cada proceso.' },
        { name: 'Entrega comprometida', detail: 'Programa de suministro realista con stock verificado antes de que firmes el contrato.' },
      ],
      image: '/images/servicios/licitaciones.avif',
      imageAlt: 'Fichas técnicas, carpetas y certificados preparados para una licitación',
    },
    sections: [
      {
        id: 'expediente',
        title: 'Cómo se integra una propuesta para licitación',
        paragraphs: [
          'Una licitación de equipo contra incendio se responde a partir de la convocatoria, anexos, junta de aclaraciones y formatos del procedimiento. El expediente técnico debe relacionar cada partida con una ficha del modelo ofertado, norma o certificación solicitada, evidencia documental, cantidades, accesorios y condiciones de suministro; no basta con presentar un folleto comercial genérico.',
          'Antes de cotizar, conviene crear una matriz de cumplimiento. Esa matriz identifica requisitos técnicos, administrativos y de entrega, y permite separar lo que está expresamente solicitado de lo que requiere aclaración. También ayuda a detectar referencias a normas desactualizadas o especificaciones que no permiten comparar ofertas de manera objetiva.',
        ],
        bullets: [
          'Análisis de bases, anexos técnicos y formatos de propuesta.',
          'Matriz por partida con evidencia y aclaraciones necesarias.',
          'Fichas técnicas, cartas y manifiestos consistentes entre sí.',
        ],
      },
      {
        id: 'plataforma',
        title: 'Compras MX y procedimientos documentales',
        paragraphs: [
          'Las convocatorias federales se consultan y gestionan hoy en Compras MX (antes CompraNet). El proveedor debe verificar en cada procedimiento los requisitos vigentes de registro, firma, archivos, fechas y medios de presentación; una plantilla de un proceso anterior no sustituye las instrucciones publicadas para una convocatoria concreta.',
          'Cada propuesta debe sustentarse en los documentos del procedimiento, las aclaraciones emitidas y evidencia verificable para cada equipo ofertado: fichas técnicas oficiales, certificados de conformidad vigentes y cartas del fabricante cuando las bases las soliciten.',
        ],
      },
      {
        id: 'evaluacion',
        title: 'Cómo reducir observaciones técnicas',
        paragraphs: [
          'La revisión técnica suele comparar la oferta contra el anexo, no contra una descripción comercial. Por eso cada ficha debe identificar fabricante, modelo, características medibles, norma solicitada, accesorios incluidos, manuales y cualquier condición que aplique a la partida. Si una característica no está acreditada en la documentación, no debe afirmarse como equivalente.',
          'La junta de aclaraciones es el momento para pedir precisión sobre requisitos ambiguos, compatibilidades, entregables o criterios de evaluación. Las preguntas deben referirse a un numeral o partida concreta y buscar que todas las personas licitantes puedan preparar una propuesta comparable, sin asumir modificaciones que no consten en el acta.',
        ],
      },
    ],
    process: [
      { step: 'Lectura de convocatoria', detail: 'Se identifican fechas, requisitos, partidas, anexos y condiciones de presentación del procedimiento.' },
      { step: 'Matriz de cumplimiento', detail: 'Se cruza cada requisito con la ficha, carta, certificado o aclaración que debe respaldarlo.' },
      { step: 'Integración de propuesta', detail: 'Se ordenan documentos técnicos y administrativos conforme a los formatos y archivos solicitados.' },
      { step: 'Revisión final', detail: 'Se verifica congruencia entre partidas, anexos, firmas, vigencias y evidencia entregada.' },
    ],
    deliverables: [
      'Matriz de cumplimiento técnico por partida.',
      'Fichas técnicas y comparativo contra el anexo.',
      'Relación de cartas, manifiestos y certificados requeridos.',
      'Preguntas técnicas para junta de aclaraciones.',
      'Índice de expediente y control de archivos de propuesta.',
    ],
    normas: [
      { code: 'NOM-002-STPS-2010', scope: 'Referencia de prevención y protección contra incendios cuando el anexo técnico solicita medidas o equipo para centros de trabajo.', href: '/certificaciones/' },
      { code: 'NOM-017-STPS-2008', scope: 'Referencia para selección de equipo de protección personal cuando la partida define riesgos y protección requerida.', href: '/productos/epp-bombero/' },
      { code: 'NFPA 1970', scope: 'Referencia para conjuntos de protección de bomberos y emergencias cuando una partida exige desempeño o configuración aplicable.' },
    ],
    related: [
      { label: 'Licitaciones de equipo contra incendio', href: '/blog/licitaciones-equipo-contra-incendio-mexico-nom-nfpa/' },
      { label: 'Preparar junta de aclaraciones', href: '/blog/junta-aclaraciones-licitacion-equipo-ci/' },
      { label: 'Fichas técnicas para procedimientos', href: '/blog/fichas-tecnicas-compranet-equipo-contra-incendio/' },
      { label: 'Especificaciones de traje bombero', href: '/blog/especificaciones-traje-bombero-licitaciones/' },
      { label: 'Catálogo de sistemas contra incendio', href: '/productos/sistemas-ci/' },
      { label: 'Solicitar propuesta técnica', href: '/cotizacion/' },
    ],
    faqs: [
      { q: '¿Apoyan aunque la licitación ya esté publicada?', a: 'Sí, mientras haya tiempo antes de la junta de aclaraciones o de la presentación de propuestas. Con 5 días hábiles armamos fichas y manifiestos de la mayoría de las partidas de equipo contra incendio.' },
      { q: '¿Trabajan con integradores o solo venta directa?', a: 'Ambos. Respaldamos a integradores y comercializadores con cartas de distribuidor, precios de mayoreo y stock comprometido, o participamos directamente según el proceso.' },
      { q: '¿Qué documentos de fabricante pueden conseguir?', a: 'Cartas de fabricante y distribuidor autorizado, certificados de conformidad NFPA/NOM/UL, fichas técnicas oficiales en español y cartas de garantía — la paquetería documental estándar de los anexos técnicos.' },
      { q: '¿Dónde encontrar licitaciones de equipo contra incendio en México?', a: 'Revise las convocatorias de las dependencias y el medio oficial indicado para cada procedimiento. Para procesos federales, la plataforma vigente es Compras MX (antes CompraNet); también existen convocatorias estatales y municipales con sus propios portales y requisitos.' },
      { q: '¿Cómo participa un proveedor en una licitación?', a: 'Debe revisar las bases, cumplir los requisitos de registro y presentación del procedimiento, integrar la propuesta y atender las fechas de junta de aclaraciones y entrega. Cada convocatoria define las condiciones de participación, documentos y medios electrónicos o físicos aplicables.' },
      { q: '¿Qué documentos suelen pedir las convocatorias?', a: 'Además de documentación administrativa, suelen solicitar propuesta técnica, fichas, cartas de fabricante o distribuidor cuando procedan, manifiestos, certificados o normas aplicables, garantías y condiciones de entrega. La lista exacta depende de las bases y sus anexos.' },
      { q: '¿Qué equipo contra incendio se solicita en licitaciones?', a: 'Las partidas pueden abarcar extintores, sistemas contra incendio, equipo de protección personal, SCBA, cascos, herramientas, señalización, capacitación o mantenimiento. La selección depende de la necesidad de la dependencia y de la especificación publicada para el procedimiento.' },
    ],
  },
];
