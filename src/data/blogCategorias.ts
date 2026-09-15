type BlogCategoryIntro = {
  intro: string[];
  enlaces: { href: string; label: string }[];
};

export const blogCategorias: Record<string, BlogCategoryIntro> = {
  "auditoria-nom-002": {
    intro: [
      "Esta categoría reúne artículos para revisar documentos, condiciones del inmueble y hallazgos vinculados con la preparación contra incendio. Ayuda a responsables de seguridad, brigadas y administradores a reconocer los temas que conviene revisar antes de una inspección o una corrección interna.",
      "Aquí encontrarás explicaciones sobre evidencias, recorridos, registros y criterios prácticos para ordenar una revisión. El contenido sirve para entender qué información consultar y cómo relacionar los hallazgos con acciones de prevención dentro de cada centro de trabajo de forma ordenada.",
    ],
    enlaces: [
      {
        href: "/certificaciones/",
        label: "Consulta criterios de normatividad y certificaciones",
      },
    ],
  },
  "brigadas-empresariales": {
    intro: [
      "Los artículos de esta categoría explican la organización y las responsabilidades de una brigada empresarial ante una emergencia. Están dirigidos a quienes coordinan seguridad, integran brigadas o necesitan entender cómo se conectan la capacitación, los roles y la respuesta inicial dentro de un inmueble.",
      "El lector encontrará guías para identificar necesidades de equipo, distribución de funciones y prácticas de preparación. Son útiles para convertir dudas operativas en preguntas concretas para el programa interno de protección civil, sin sustituir la evaluación particular de cada instalación.",
    ],
    enlaces: [
      {
        href: "/servicios/",
        label: "Conoce servicios para brigadas y protección contra incendio",
      },
    ],
  },
  "camaras-termicas": {
    intro: [
      "Esta categoría concentra información sobre cámaras térmicas para bomberos, brigadas y personal de respuesta. Explica cómo interpretar sus características, dónde pueden apoyar la búsqueda, la inspección de puntos calientes y la toma de decisiones cuando la visibilidad está comprometida.",
      "Las guías están pensadas para quienes comparan equipos o quieren entender sus límites de uso. Encontrarás criterios sobre sensores, imagen, compatibilidad y operación en escena, con lenguaje claro para relacionar especificaciones técnicas con necesidades reales de respuesta durante una emergencia concreta.",
    ],
    enlaces: [
      {
        href: "/productos/camaras-termicas/",
        label: "Explora cámaras térmicas para respuesta a emergencias",
      },
    ],
  },
  "cascos-nfpa": {
    intro: [
      "Aquí se agrupan artículos sobre cascos para bomberos y los elementos que influyen en su selección. El contenido ayuda a distinguir estilos, materiales, accesorios y compatibilidad con otros componentes de protección personal para trabajo estructural o de rescate.",
      "Es una lectura útil para mandos, responsables de compras y usuarios que necesitan comparar opciones con criterio técnico. Los textos abordan ajuste, protección facial, suspensión y relación con equipos respiratorios para que cada decisión considere la actividad prevista y el conjunto completo.",
    ],
    enlaces: [
      {
        href: "/productos/cascos-nfpa/",
        label: "Revisa el catálogo de cascos para bomberos",
      },
    ],
  },
  "capacitacion-certificada": {
    intro: [
      "Esta categoría reúne contenidos sobre formación para respuesta a incendios, simulacros y preparación de brigadas. Está dirigida a personal de seguridad, líderes de equipo y responsables que buscan comprender qué habilidades se practican y por qué la documentación forma parte del proceso.",
      "Los artículos explican cómo vincular ejercicios, participación del personal y seguimiento de resultados. Sirven para preparar conversaciones internas sobre capacitación y para ubicar los temas que deben revisarse antes de llevar una práctica a las condiciones específicas del centro de trabajo.",
    ],
    enlaces: [
      {
        href: "/servicios/",
        label: "Consulta servicios de capacitación y seguridad contra incendio",
      },
    ],
  },
  "equipos-epp": {
    intro: [
      "En esta categoría encontrarás guías sobre equipo de protección personal para respuesta a incendios y rescate. Los textos explican la función de prendas, capas y accesorios, así como los factores que influyen al evaluar protección, movilidad y compatibilidad entre componentes.",
      "Está pensada para brigadas, cuerpos de bomberos y responsables que deben documentar una selección de EPP. El contenido ayuda a formular criterios técnicos y a reconocer cuándo un equipo corresponde a un tipo de exposición, sin reemplazar la evaluación de riesgos de cada operación.",
    ],
    enlaces: [
      {
        href: "/productos/trajes-bombero/",
        label: "Conoce trajes y equipo de protección para bomberos",
      },
    ],
  },
  "equipos-hazmat": {
    intro: [
      "Esta categoría trata sobre equipos para incidentes con materiales peligrosos y los criterios que ayudan a comprender su uso. Reúne explicaciones sobre niveles de protección, detección de gases y compatibilidad de materiales para personal que participa en la planeación o respuesta HAZMAT.",
      "El lector encontrará referencias para distinguir riesgos, limitaciones del equipo y datos técnicos que deben revisarse antes de una intervención. Es útil para brigadas especializadas, supervisores y compradores que necesitan relacionar una sustancia o escenario con la protección requerida.",
    ],
    enlaces: [
      {
        href: "/productos/hazmat/",
        label: "Explora equipos HAZMAT para respuesta especializada",
      },
    ],
  },
  "equipos-scba": {
    intro: [
      "Los artículos de esta categoría explican los equipos de respiración autónoma y los componentes que intervienen en su selección y cuidado. Están orientados a bomberos, brigadistas y responsables de seguridad que necesitan entender cilindros, máscaras, arneses y autonomía de operación.",
      "Aquí encontrarás comparativas y criterios para revisar compatibilidad, mantenimiento y configuración del conjunto respiratorio. El contenido ayuda a interpretar fichas técnicas y a preparar una evaluación del equipo según las tareas previstas, la capacitación del usuario y el resto del EPP.",
    ],
    enlaces: [
      {
        href: "/productos/equipos-scba/",
        label: "Revisa equipos de respiración autónoma para bomberos",
      },
    ],
  },
  extintores: {
    intro: [
      "Esta categoría reúne guías para entender los tipos de extintor, los agentes disponibles y su relación con las clases de fuego. Está dirigida a responsables de inmuebles, brigadas y personas que necesitan distinguir qué información considerar al revisar una dotación o un equipo portátil.",
      "Los artículos explican criterios de selección, identificación y uso básico con enfoque técnico. Son útiles para relacionar el riesgo presente con el agente adecuado, reconocer datos de la etiqueta y preparar preguntas para una revisión de seguridad o un programa de mantenimiento.",
    ],
    enlaces: [
      {
        href: "/productos/extintores/",
        label: "Consulta tipos de extintores y sus aplicaciones",
      },
    ],
  },
  "guias-de-compra": {
    intro: [
      "En esta categoría se concentran comparativas y criterios para evaluar equipo contra incendio antes de elegirlo. El contenido está pensado para quienes participan en una compra técnica y necesitan pasar de una lista de productos a una revisión basada en uso, compatibilidad y documentación.",
      "Aquí encontrarás explicaciones de especificaciones, diferencias entre familias de equipo y preguntas que conviene resolver antes de decidir. Las guías ayudan a ordenar una evaluación para brigadas, corporaciones o instalaciones, con atención a las condiciones concretas de operación.",
    ],
    enlaces: [
      {
        href: "/productos/",
        label: "Explora las categorías de equipo contra incendio",
      },
    ],
  },
  "herramientas-rescate": {
    intro: [
      "Esta categoría aborda herramientas para rescate y excarcelación, con explicaciones sobre sus funciones, configuraciones y criterios de comparación. Está dirigida a cuerpos de bomberos, equipos de rescate y responsables que necesitan relacionar la capacidad de una herramienta con el escenario de trabajo.",
      "Los artículos ayudan a interpretar datos de fuerza, apertura, alimentación y accesorios. También ofrecen contexto para revisar la integración del equipo dentro de un sistema de respuesta, considerando la capacitación del personal, el mantenimiento y la seguridad durante las maniobras.",
    ],
    enlaces: [
      {
        href: "/productos/herramientas-rescate/",
        label: "Explora herramientas hidráulicas y de rescate",
      },
    ],
  },
  "instalacion-de-sistemas-ci": {
    intro: [
      "Los contenidos de esta categoría explican elementos de diseño e instalación de sistemas contra incendio. Están dirigidos a administradores, responsables de seguridad y equipos técnicos que necesitan comprender cómo se relacionan rociadores, detección, redes hidráulicas y documentación del proyecto.",
      "Aquí encontrarás guías para ubicar conceptos, revisar planos y entender las preguntas que acompañan una obra o una modificación. El enfoque es informativo: ayuda a identificar componentes y dependencias antes de evaluar las necesidades particulares de un edificio, planta o comercio.",
    ],
    enlaces: [
      {
        href: "/productos/sistemas-ci/",
        label: "Consulta sistemas fijos de protección contra incendio",
      },
    ],
  },
  "mantenimiento-y-recarga": {
    intro: [
      "Esta categoría reúne información sobre inspección, mantenimiento y recarga de equipo contra incendio. Es útil para personas encargadas de instalaciones, brigadas y seguridad que necesitan identificar los registros, revisiones y condiciones que forman parte del cuidado de extintores y equipos asociados.",
      "Los artículos explican qué observar en componentes, etiquetas y bitácoras, además de por qué el seguimiento periódico importa para conservar la disponibilidad del equipo. Sirven para organizar una revisión interna y comprender qué datos deben documentarse durante el ciclo de servicio.",
    ],
    enlaces: [
      {
        href: "/productos/extintores/",
        label: "Revisa equipos portátiles contra incendio",
      },
    ],
  },
  normatividad: {
    intro: [
      "Esta categoría ofrece artículos para comprender el lenguaje y el alcance de la normatividad relacionada con protección contra incendio. Está dirigida a responsables de seguridad, brigadas, compradores técnicos y administradores que necesitan ubicar documentos de referencia dentro de sus decisiones y procedimientos.",
      "El lector encontrará explicaciones de conceptos, obligaciones documentales y relaciones entre requisitos técnicos. Los textos ayudan a preparar una lectura más informada de la normativa aplicable y a distinguir qué puntos requieren revisión con el responsable técnico de cada inmueble u operación.",
    ],
    enlaces: [
      {
        href: "/certificaciones/",
        label: "Consulta referencias de normatividad y certificaciones",
      },
    ],
  },
  "sistemas-ci": {
    intro: [
      "Esta categoría agrupa artículos sobre sistemas fijos contra incendio y sus principales soluciones. El contenido ayuda a entender el papel de la detección, los rociadores, las redes y los agentes limpios dentro de una estrategia de protección para distintos tipos de inmuebles.",
      "Está orientada a responsables de instalaciones, seguridad y proyectos que requieren un panorama técnico antes de revisar alternativas. Las guías explican componentes, aplicaciones y relaciones entre sistemas, para que el lector pueda identificar los temas que debe analizar según el uso del espacio.",
    ],
    enlaces: [
      {
        href: "/productos/sistemas-ci/",
        label: "Explora sistemas contra incendio para inmuebles",
      },
    ],
  },
  "soporte-para-licitaciones": {
    intro: [
      "Esta categoría reúne información sobre documentación técnica para procesos de licitación y adquisición de equipo contra incendio. Está pensada para áreas de compras, responsables técnicos y participantes que necesitan entender cómo se relacionan fichas, requisitos, comparativas y evidencias en una propuesta.",
      "Los artículos explican qué revisar al preparar expedientes y al interpretar especificaciones solicitadas. Son útiles para ordenar preguntas, detectar información faltante y distinguir entre datos de producto, condiciones de entrega y criterios que deben validarse en cada procedimiento formal.",
    ],
    enlaces: [
      {
        href: "/licitaciones/",
        label:
          "Consulta información para licitaciones de equipo contra incendio",
      },
    ],
  },
  "trajes-bombero": {
    intro: [
      "Los artículos de esta categoría explican los trajes para bomberos y los elementos que determinan su desempeño dentro de un conjunto de protección. Están dirigidos a usuarios, mandos y responsables de selección que necesitan comparar capas, materiales, ajuste y compatibilidad con otros equipos.",
      "Aquí encontrarás criterios para interpretar especificaciones y diferenciar necesidades de combate estructural, proximidad o labores forestales. El contenido sirve para relacionar el tipo de exposición con el traje adecuado y preparar una evaluación técnica antes de integrar el equipo a una operación.",
    ],
    enlaces: [
      {
        href: "/productos/trajes-bombero/",
        label: "Explora trajes para bomberos y sus configuraciones",
      },
    ],
  },
};
