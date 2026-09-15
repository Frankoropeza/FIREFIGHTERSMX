export interface Industry {
  slug: string;
  name: string;
  /** Marco normativo del sector (eyebrow y badges) */
  norm: string;
  /** Meta description (≤160 caracteres) */
  description: string;
  /** Descripción corta para cards (1 línea) */
  shortDesc: string;
  accent: string;
  icon: string;
  href: string;
  /** Párrafos de introducción SEO */
  intro: string[];
  /** Riesgos / retos típicos del sector */
  risks: { name: string; detail: string }[];
  /** Módulo solución (2 columnas) */
  spotlight: {
    title: string;
    highlight: string;
    paragraphs: string[];
    subsections: { name: string; detail: string }[];
    image: string;
    imageAlt: string;
  };
  /** Slugs de categorías de producto recomendadas (categories.ts) */
  recommendedCategories: string[];
  /** Slugs de servicios recomendados (services.ts) */
  recommendedServices: string[];
  /** FAQs del sector (FAQPage schema) */
  faqs: { q: string; a: string }[];
}

export const industries: Industry[] = [
  {
    slug: 'bomberos-municipales',
    name: 'Bomberos Municipales',
    norm: 'NFPA 1970 · CompraNet',
    description: 'Equipamiento integral para cuerpos de bomberos municipales: trajes NFPA 1970, SCBA, herramientas de rescate y soporte completo para licitaciones públicas.',
    shortDesc: 'Equipamiento integral y soporte para licitaciones de cuerpos de bomberos.',
    accent: '#F75000',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M12 22s8-4 8-10V6l-8-3-8 3v6c0 6 8 10 8 10z"/><path d="M12 8c0 0-3.5 2.8-2 5.6.8 1.4 2 1.4 2 1.4s-.7-1.4 0-2.8c.7-1.4 2-1.4 2-1.4s-.7 2 .7 3.5c.6.6.7 1.4.7 1.4"/></svg>`,
    href: '/industrias/bomberos-municipales',
    intro: [
      'Equipar un cuerpo de bomberos municipal es un proyecto de adquisición pública con presupuesto acotado, anexos técnicos exigentes y vidas de por medio. Llevamos más de 15 años acompañando H. Cuerpos de Bomberos en todo el país: del anexo técnico a la entrega con número de serie verificable.',
      'Trabajamos con esquema de precio preferencial para cuerpos de bomberos y programas de equipamiento por fases, para que el presupuesto anual rinda sin sacrificar certificación ni garantía.',
    ],
    risks: [
      { name: 'Combate estructural', detail: 'Incendios en vivienda y comercio que exigen EPP NFPA 1970 completo y SCBA con aire suficiente para búsqueda primaria.' },
      { name: 'Rescate vehicular', detail: 'Extracción en accidentes carreteros con vehículos modernos de aceros endurecidos.' },
      { name: 'Presupuesto público', detail: 'Procesos de licitación con anexos técnicos estrictos y comprobación ante el órgano fiscalizador.' },
      { name: 'Equipo heredado', detail: 'Inventarios mixtos y fuera de vida útil NFPA 1850 que comprometen la seguridad del personal.' },
    ],
    spotlight: {
      title: 'Equipa a tu cuerpo de bomberos',
      highlight: 'con respaldo de fábrica',
      paragraphs: [
        'Un cuerpo de bomberos no compra equipo: invierte presupuesto público en la seguridad de su gente. Por eso cada partida que entregamos lleva certificado de laboratorio acreditado, número de serie verificable y carta de fabricante — la documentación que el órgano fiscalizador y el ayuntamiento pueden auditar.',
        'Armamos programas de equipamiento por etapas: primero EPP estructural completo, después aire autónomo y herramientas de rescate, con capacitación NFPA 1001 incluida para que la inversión se traduzca en capacidad operativa real.',
      ],
      subsections: [
        { name: 'Precio preferencial bomberos', detail: 'Esquema especial para H. Cuerpos de Bomberos y patronatos, con financiamiento por etapas.' },
        { name: 'Soporte de licitación completo', detail: 'Fichas técnicas, manifiestos NFPA y cartas de fabricante listos para CompraNet.' },
        { name: 'Tallaje en estación', detail: 'Visitamos tu estación para tallar a todo el personal antes de fabricar.' },
        { name: 'Capacitación NFPA 1001', detail: 'Programa bombero I y II con constancia, para estrenar equipo y técnica al mismo tiempo.' },
      ],
      image: '/images/industrias/bomberos-municipales.avif',
      imageAlt: 'Ilustración técnica de estación de bomberos municipal con equipo estructural NFPA',
    },
    recommendedCategories: ['trajes-bombero', 'equipos-scba', 'herramientas-rescate', 'camaras-termicas'],
    recommendedServices: ['capacitacion', 'licitaciones', 'mantenimiento'],
    faqs: [
      { q: '¿Manejan precios especiales para cuerpos de bomberos?', a: 'Sí. Tenemos esquema de precio preferencial para H. Cuerpos de Bomberos, patronatos y Protección Civil, además de programas de equipamiento por fases para ajustarse al presupuesto anual disponible.' },
      { q: '¿Pueden participar en nuestra licitación municipal?', a: 'Sí. Participamos directamente o respaldamos a tu proveedor local con cartas de distribuidor autorizado, fichas técnicas formato CompraNet y stock comprometido antes de la firma.' },
      { q: '¿El equipo usado o de donación cumple la norma?', a: 'El EPP estructural tiene vida útil máxima de 10 años desde fabricación según NFPA 1850, y el equipo donado usado rara vez la cumple o carece de trazabilidad. Podemos inspeccionar tu inventario actual y decirte qué es utilizable y qué debe retirarse.' },
    ],
  },
  {
    slug: 'brigadas-industriales',
    name: 'Brigadas Industriales',
    norm: 'NOM-002-STPS · DC-3',
    description: 'Equipamiento y capacitación para brigadas industriales conforme NOM-002-STPS: EPP, extintores, detección y constancias DC-3. Llave en mano para tu planta.',
    shortDesc: 'NOM-002 llave en mano: equipo, capacitación DC-3 y documentación.',
    accent: '#F5A623',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>`,
    href: '/industrias/brigadas-industriales',
    intro: [
      'Toda planta con empleados en México debe cumplir la NOM-002-STPS-2010: clasificar su riesgo, equipar contra incendio, formar brigada y documentarlo todo. Resolvemos el paquete completo para plantas manufactureras, centros logísticos y parques industriales.',
      'Nuestro enfoque es el expediente: no solo entregamos extintores y EPP, entregamos la evidencia documental — constancias DC-3, bitácoras, reportes de simulacro — que el inspector de la STPS va a pedir.',
    ],
    risks: [
      { name: 'Cumplimiento NOM-002', detail: 'Clasificación de riesgo, equipamiento mínimo y simulacros documentados ante inspección STPS.' },
      { name: 'Fuegos de proceso', detail: 'Líquidos inflamables, tableros energizados y montacargas: cada clase de fuego exige su agente.' },
      { name: 'Rotación de personal', detail: 'Brigadas que pierden vigencia de capacitación con cada cambio de plantilla.' },
      { name: 'Auditorías corporativas', detail: 'Matrices extranjeras y aseguradoras que auditan contra NFPA además de la norma mexicana.' },
    ],
    spotlight: {
      title: 'Tu planta en regla',
      highlight: 'con un solo proveedor',
      paragraphs: [
        'Coordinar al proveedor de extintores, al capacitador y al de señalización para un mismo expediente es la receta del hueco documental. Integramos equipo, brigada y documentación en un solo contrato con calendario anual.',
        'Diseñamos sobre tu clasificación de riesgo real: agentes por clase de fuego presente, EPP dimensionado a tu brigada y programa de simulacros que cumple tanto a la STPS como al auditor corporativo de tu matriz.',
      ],
      subsections: [
        { name: 'Diagnóstico NOM-002 sin costo', detail: 'Visitamos tu planta y te decimos exactamente qué falta para cumplir, con costos.' },
        { name: 'Brigada llave en mano', detail: 'Estructura, EPP asignado y capacitación DC-3 — operativa en 4 a 6 semanas.' },
        { name: 'Calendario anual integrado', detail: 'Recargas, simulacros y refrescos DC-3 programados con recordatorios.' },
        { name: 'Doble estándar NOM + NFPA', detail: 'Cumplimiento mexicano con respaldo NFPA para auditorías corporativas.' },
      ],
      image: '/images/industrias/brigadas-industriales.avif',
      imageAlt: 'Ilustración técnica de planta industrial con brigada contra incendio y extintores NOM-002',
    },
    recommendedCategories: ['extintores', 'equipos-scba', 'sistemas-ci', 'cascos-nfpa'],
    recommendedServices: ['brigadas-empresariales', 'auditoria-seguridad', 'capacitacion', 'mantenimiento'],
    faqs: [
      { q: '¿Qué exige la NOM-002-STPS a una planta industrial?', a: 'Clasificar el riesgo de incendio (ordinario o alto), tener extintores del agente correcto a menos de 15 m de recorrido, brigada capacitada con DC-3, simulacros al menos anuales documentados y, en riesgo alto, sistemas fijos y plan de atención a emergencias.' },
      { q: '¿Cada cuánto debe capacitarse la brigada?', a: 'La constancia DC-3 no caduca legalmente, pero la NOM-002 exige programa anual de capacitación y simulacros. La práctica estándar es refresco anual y reentrenamiento inmediato cuando hay rotación en la brigada.' },
      { q: '¿Pueden atender varias plantas en distintos estados?', a: 'Sí. Operamos programas multi-sitio con calendario nacional, mismo estándar documental en cada planta y un solo contrato corporativo.' },
    ],
  },
  {
    slug: 'aeropuertos-arff',
    name: 'Aeropuertos ARFF',
    norm: 'NFPA 403 · OACI',
    description: 'Equipamiento ARFF para aeropuertos: trajes de proximidad aluminizados, SCBA 60 min, espuma AFFF y capacitación para rescate y extinción en aeronaves.',
    shortDesc: 'Trajes de proximidad, SCBA de 60 min y espuma para rescate en aeronaves.',
    accent: '#F75000',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M17.8 19.2 16 11l3.5-3.5C21 6 21 4 19 4s-2 1-3.5 2.5L11 8 2.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 3.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"/></svg>`,
    href: '/industrias/aeropuertos-arff',
    intro: [
      'El rescate y extinción en aeronaves (ARFF) opera bajo los estándares más exigentes: NFPA 403, los criterios de la OACI y los tiempos de respuesta que audita la AFAC. El equipamiento debe soportar combustible en llamas y exposición radiante extrema.',
      'Suministramos trajes de proximidad aluminizados, SCBA de autonomía extendida, espumas y equipo de rescate para aeropuertos comerciales, aeródromos y bases aéreas — con la documentación de conformidad que exige el verificador.',
    ],
    risks: [
      { name: 'Fuego de combustible', detail: 'Jet A-1 en derrame: exposición radiante que un traje estructural común no soporta.' },
      { name: 'Tiempos de respuesta OACI', detail: 'Llegar al punto medio de pista en menos de 3 minutos con agente suficiente.' },
      { name: 'Rescate en cabina', detail: 'Entrada a fuselaje con SCBA y protección térmica para evacuación de pasajeros.' },
      { name: 'Verificaciones AFAC', detail: 'Auditorías de categoría ARFF que revisan equipo, agente y vigencias.' },
    ],
    spotlight: {
      title: 'Categoría ARFF cumplida',
      highlight: 'con equipo de proximidad certificado',
      paragraphs: [
        'La categoría ARFF de tu aeropuerto define el equipo mínimo: cantidad de agente, vehículos y protección del personal. Suministramos el componente de EPP y respiración que el verificador AFAC revisa pieza por pieza: trajes aluminizados de proximidad, SCBA de 60 minutos y cascos con protección integral.',
        'Complementamos con espuma AFFF/AR-AFFF por tambo o tote, equipo de rescate en fuselaje y capacitación específica ARFF para tu estación — todo con ficha técnica y certificado de conformidad.',
      ],
      subsections: [
        { name: 'Trajes de proximidad aluminizados', detail: 'Reflejan hasta 90 % del calor radiante para aproximación a fuego de combustible.' },
        { name: 'SCBA 60 minutos', detail: 'Autonomía extendida para entrada a fuselaje y operaciones prolongadas.' },
        { name: 'Espumas AFFF / AR-AFFF', detail: 'Concentrados al 3 % y 6 % con certificado, en presentación de tambo o tote.' },
        { name: 'Capacitación ARFF', detail: 'Programas teórico-prácticos alineados a NFPA 403 y circulares AFAC.' },
      ],
      image: '/images/industrias/aeropuertos-arff.avif',
      imageAlt: 'Ilustración técnica de bombero ARFF con traje aluminizado de proximidad frente a aeronave',
    },
    recommendedCategories: ['trajes-bombero', 'equipos-scba', 'camaras-termicas', 'extintores'],
    recommendedServices: ['capacitacion', 'mantenimiento', 'licitaciones'],
    faqs: [
      { q: '¿Qué equipo exige la categoría ARFF de mi aeropuerto?', a: 'Depende de la categoría OACI (1 a 10) determinada por la aeronave crítica: define cantidad de agente extintor, vehículos y personal equipado. El EPP de proximidad y SCBA por elemento es constante desde categorías medias; te ayudamos a mapear tu requerimiento exacto.' },
      { q: '¿El traje estructural sirve para ARFF?', a: 'No para aproximación a fuego de combustible: el traje estructural absorbe calor radiante mientras el de proximidad aluminizado lo refleja. La operación ARFF requiere traje de proximidad certificado; el estructural queda para soporte y rescate interior.' },
      { q: '¿Suministran espuma certificada para aeropuertos?', a: 'Sí, concentrados AFFF y AR-AFFF al 3 % y 6 % con certificado de conformidad y ficha técnica, en tambos de 200 L o totes de 1,000 L, con logística a pie de estación.' },
    ],
  },
  {
    slug: 'hospitales',
    name: 'Hospitales y Salud',
    norm: 'NFPA 101 · NOM-002',
    description: 'Protección contra incendio para hospitales: agentes limpios, detección y alarma por zonas, brigadas con evacuación de pacientes y cumplimiento COFEPRIS.',
    shortDesc: 'Agentes limpios, alarmas por zona y brigadas con evacuación de pacientes.',
    accent: '#34D399',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><path d="M12 9v6M9 12h6"/></svg>`,
    href: '/industrias/hospitales',
    intro: [
      'Un hospital no puede evacuar como una oficina: hay pacientes en terapia intensiva, quirófanos en uso y oxígeno medicinal en red. La protección contra incendio hospitalaria se diseña para defender en el lugar y evacuar por etapas, como pide el Life Safety Code NFPA 101.',
      'Equipamos hospitales, clínicas y laboratorios con agentes limpios para áreas críticas, detección con notificación selectiva, extintores que no contaminan áreas estériles y brigadas entrenadas en movilización de pacientes.',
    ],
    risks: [
      { name: 'Pacientes no ambulatorios', detail: 'Evacuación horizontal por compartimentos: la brigada mueve camas, no solo personas.' },
      { name: 'Oxígeno medicinal', detail: 'Atmósferas enriquecidas que aceleran cualquier conato cerca de tomas y ductos.' },
      { name: 'Equipo biomédico crítico', detail: 'Resonadores, servidores PACS y laboratorio: extinción sin residuo ni daño.' },
      { name: 'Pánico en pacientes', detail: 'Notificación de alarma selectiva por zona para no alarmar pisos completos.' },
    ],
    spotlight: {
      title: 'Protección hospitalaria que defiende',
      highlight: 'sin detener la operación',
      paragraphs: [
        'En un hospital, la estrategia es defender en el lugar: compartimentar, suprimir localmente y mover pacientes solo lo necesario. Eso exige ingeniería fina — detección por zonas con notificación selectiva, agentes limpios en áreas críticas y rociadores calculados por compartimento.',
        'Nuestra propuesta cubre el ciclo completo: diagnóstico contra NFPA 101 y NOM-002, instalación de sistemas, extintores correctos por área (CO₂ y agente limpio donde el PQS haría daño) y brigada entrenada en evacuación de pacientes con simulacro documentado para COFEPRIS y Protección Civil.',
      ],
      subsections: [
        { name: 'Agentes limpios en áreas críticas', detail: 'Novec 1230 / FM-200 para site, imagenología y archivo clínico — extinción sin residuo.' },
        { name: 'Notificación selectiva', detail: 'Alarma por zonas y código interno para alertar al personal sin provocar pánico.' },
        { name: 'Brigada hospitalaria', detail: 'Entrenamiento en evacuación horizontal, triage de movilización y manejo de O₂.' },
        { name: 'Expediente COFEPRIS + PC', detail: 'Documentación de sistemas, simulacros y mantenimiento lista para ambas autoridades.' },
      ],
      image: '/images/industrias/hospitales.avif',
      imageAlt: 'Ilustración técnica de hospital con sistema de supresión de agente limpio y evacuación por compartimentos',
    },
    recommendedCategories: ['sistemas-ci', 'extintores', 'cascos-nfpa'],
    recommendedServices: ['instalacion-sistemas-ci', 'brigadas-empresariales', 'auditoria-seguridad', 'mantenimiento'],
    faqs: [
      { q: '¿Qué extintor es correcto cerca de equipo médico?', a: 'CO₂ o agente limpio: no dejan residuo y no dañan electrónica ni contaminan áreas estériles. El PQS se reserva para áreas generales, talleres y estacionamientos; nunca en quirófano, TI o imagenología.' },
      { q: '¿Cómo evacúa un hospital en un incendio?', a: 'Por etapas: primero evacuación horizontal al compartimento contiguo del mismo piso (las puertas cortafuego compartimentan), después vertical solo si el incidente escala. La brigada se entrena en mover pacientes en cama y priorizar por movilidad.' },
      { q: '¿El sistema de alarma despierta a todo el hospital?', a: 'No debe. Se diseña notificación selectiva: señal codificada al personal del compartimento afectado y a brigada, sin alarma general en pisos de hospitalización, conforme a NFPA 72 y al protocolo interno.' },
    ],
  },
  {
    slug: 'hoteles',
    name: 'Hoteles y Turismo',
    norm: 'NFPA 101 · NOM-002',
    description: 'Protección contra incendio para hoteles: rociadores, detección en habitaciones, señalización de evacuación multilingüe y brigadas — cumplimiento PC y aseguradoras.',
    shortDesc: 'Rociadores, detección en habitaciones y brigadas para huéspedes seguros.',
    accent: '#F5A623',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M2 9V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4"/><path d="M2 13h20"/><path d="M5 13v8M19 13v8"/></svg>`,
    href: '/industrias/hoteles',
    intro: [
      'Un hotel duerme cada noche a cientos de personas que no conocen el edificio. La protección contra incendio hotelera se juega en la detección temprana en habitación, rutas de evacuación señalizadas para extranjeros y una brigada nocturna que sabe tocar puerta por puerta.',
      'Trabajamos con hoteles urbanos y de playa: sistemas de detección y rociadores, extintores por área (cocinas Tipo K incluidas), señalización fotoluminiscente multilingüe y brigadas por turno con simulacro documentado.',
    ],
    risks: [
      { name: 'Huéspedes dormidos', detail: 'Detección temprana en habitación y alarma audible que despierte — la diferencia crítica.' },
      { name: 'Cocinas industriales', detail: 'Campanas y freidoras: fuego clase K con sistema de supresión y extintor específico.' },
      { name: 'Turnos nocturnos reducidos', detail: 'Brigada mínima de madrugada que debe verificar pisos completos.' },
      { name: 'Auditoría de aseguradora', detail: 'Primas condicionadas a rociadores, detección y mantenimiento documentado.' },
    ],
    spotlight: {
      title: 'Huéspedes protegidos',
      highlight: 'y aseguradora satisfecha',
      paragraphs: [
        'Las aseguradoras hoteleras auditan duro: rociadores en habitaciones, detección direccionable, bitácoras de mantenimiento NFPA 25. Cumplir baja la prima; no cumplir puede anular la póliza tras un siniestro. Nuestro diagnóstico te dice exactamente dónde estás parado.',
        'Equipamos el ciclo completo del hotel: detección en habitación y pasillo, supresión en cocina (sistema de campana + extintor K), señalización fotoluminiscente bilingüe y brigada por turno entrenada en barrido de pisos y punto de reunión.',
      ],
      subsections: [
        { name: 'Detección en habitación', detail: 'Detectores direccionables que ubican el cuarto exacto en el panel de recepción.' },
        { name: 'Cocina protegida', detail: 'Supresión de campana, extintor Tipo K y capacitación al personal de cocina.' },
        { name: 'Señalización multilingüe', detail: 'Rutas fotoluminiscentes con pictogramas — legibles para huéspedes extranjeros.' },
        { name: 'Brigada por turno', detail: 'Protocolos de barrido nocturno y simulacros con personal real de cada turno.' },
      ],
      image: '/images/industrias/hoteles.avif',
      imageAlt: 'Ilustración técnica de hotel con detección de incendio en habitaciones y ruta de evacuación señalizada',
    },
    recommendedCategories: ['sistemas-ci', 'extintores', 'cascos-nfpa'],
    recommendedServices: ['instalacion-sistemas-ci', 'brigadas-empresariales', 'mantenimiento', 'auditoria-seguridad'],
    faqs: [
      { q: '¿Qué pide Protección Civil a un hotel?', a: 'Programa interno de PC, extintores por área y piso, detección y alarma, señalización de evacuación NOM-003, brigada capacitada por turno y simulacros documentados. En edificios de varios niveles se suman hidrantes y, según el municipio, rociadores.' },
      { q: '¿Necesito extintor Tipo K en la cocina?', a: 'Sí, si hay freidoras o cocción con aceites: el fuego clase K reenciende con extintores comunes. Va acompañado del sistema de supresión de campana y de capacitación específica al personal de cocina.' },
      { q: '¿La aseguradora puede negar un siniestro por mantenimiento?', a: 'Las pólizas suelen condicionar cobertura a sistemas funcionando y mantenimiento documentado. Una bitácora NFPA 25 al día y recargas vigentes son tu mejor defensa ante el ajustador; nuestras pólizas de mantenimiento generan esa evidencia.' },
    ],
  },
  {
    slug: 'refinerias-pemex',
    name: 'Refinerías y Petroquímica',
    norm: 'NFPA · ASEA · PEMEX',
    description: 'Equipamiento contra incendio para refinerías y petroquímica: HAZMAT Nivel A, SCBA 60 min, detección de gases, espumas y cumplimiento de anexos PEMEX.',
    shortDesc: 'HAZMAT, SCBA de autonomía extendida y detección para hidrocarburos.',
    accent: '#F75000',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><path d="M12 9v4M12 17h.01"/></svg>`,
    href: '/industrias/refinerias-pemex',
    intro: [
      'La industria del hidrocarburo opera con los anexos técnicos más estrictos del país: especificaciones PEMEX, regulación ASEA y estándares NFPA en simultáneo. El equipo que entra a una refinería se audita contra los tres marcos.',
      'Suministramos a refinerías, terminales de almacenamiento y plantas petroquímicas: trajes HAZMAT con compatibilidad química documentada, SCBA de autonomía extendida, detección multi-gas certificada para atmósferas explosivas y espumas para hidrocarburos.',
    ],
    risks: [
      { name: 'Atmósferas explosivas', detail: 'Vapores de hidrocarburo que exigen detección certificada y equipo sin fuente de ignición.' },
      { name: 'Químicos agresivos', detail: 'H₂S, amoniaco y ácidos: trajes con tabla de permeación específica por sustancia.' },
      { name: 'Fuegos de gran volumen', detail: 'Tanques y diques que requieren espuma AR-AFFF y monitores de alto caudal.' },
      { name: 'Anexos PEMEX/ASEA', detail: 'Documentación de conformidad auditada partida por partida antes de entrar a planta.' },
    ],
    spotlight: {
      title: 'Equipo que pasa el anexo técnico',
      highlight: 'de PEMEX y ASEA',
      paragraphs: [
        'En el sector hidrocarburos, un equipo sin la documentación correcta simplemente no entra a planta. Cada partida que suministramos llega con certificado de conformidad, tabla de compatibilidad química cuando aplica y trazabilidad de fábrica — armado para el formato del anexo que te rige.',
        'Conocemos los procesos de PEMEX y sus contratistas: tiempos de residencia, libranzas y paros programados. Coordinamos entregas y servicios de mantenimiento dentro de tus ventanas operativas, con personal acreditado para acceso a instalaciones.',
      ],
      subsections: [
        { name: 'HAZMAT con permeación documentada', detail: 'Nivel A y B con tablas del fabricante por sustancia específica de tu proceso.' },
        { name: 'Detección multi-gas certificada', detail: 'O₂, LEL, H₂S y CO con certificación para zonas clasificadas.' },
        { name: 'Espumas para hidrocarburos', detail: 'AR-AFFF y fluorprotéicas para tanques, diques y cargaderas.' },
        { name: 'Servicio en ventana de libranza', detail: 'Mantenimiento y recargas programados dentro de tus paros operativos.' },
      ],
      image: '/images/industrias/refinerias-pemex.avif',
      imageAlt: 'Ilustración técnica de refinería con brigadista HAZMAT y detección de gases en zona de proceso',
    },
    recommendedCategories: ['hazmat', 'equipos-scba', 'trajes-bombero', 'sistemas-ci'],
    recommendedServices: ['mantenimiento', 'capacitacion', 'licitaciones', 'auditoria-seguridad'],
    faqs: [
      { q: '¿Cumplen los anexos técnicos de PEMEX?', a: 'Sí. Armamos la documentación partida por partida contra el anexo específico de tu contrato: certificados de conformidad, cartas de fabricante, tablas de compatibilidad y trazabilidad de fábrica en el formato requerido.' },
      { q: '¿Qué nivel HAZMAT necesita mi brigada?', a: 'Depende de las sustancias y la tarea: Nivel A (encapsulado, máxima protección a gas/vapor) para sustancias desconocidas o IDLH; Nivel B para salpicadura con SCBA; Nivel C con purificador para riesgos caracterizados. La selección se documenta con las tablas de permeación.' },
      { q: '¿El equipo de detección sirve en zona clasificada?', a: 'Solo si está certificado para atmósferas explosivas (marcado para la zona/división correspondiente). Todos los detectores multi-gas que suministramos para hidrocarburos llevan esa certificación y su documento de respaldo.' },
    ],
  },
  {
    slug: 'mineria',
    name: 'Minería',
    norm: 'NOM-023-STPS · NOM-032',
    description: 'Equipamiento contra incendio y rescate para minería: SCBA para espacios confinados, detección multi-gas NOM-032, autorrescatadores y brigadas de rescate minero.',
    shortDesc: 'SCBA, detección multi-gas y rescate para tiro y tajo abierto.',
    accent: '#F5A623',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M2 17a10 10 0 0 1 20 0"/><path d="M2 17h20v3H2z"/><circle cx="12" cy="10" r="2.5"/></svg>`,
    href: '/industrias/mineria',
    intro: [
      'La minería combina los riesgos más difíciles de la respuesta a emergencias: espacios confinados, atmósferas irrespirables, distancias largas y, en carbón, gas explosivo regulado por la NOM-032-STPS. El equipo se selecciona para funcionar donde no hay segundo intento.',
      'Equipamos minas de tajo abierto y subterráneas: SCBA y autorrescatadores, detección multi-gas, brigadas de rescate minero con capacitación específica y equipo contra incendio para talleres, polvorines y bandas transportadoras.',
    ],
    risks: [
      { name: 'Atmósferas irrespirables', detail: 'CO, gases nitrosos post-voladura y deficiencia de O₂ en frentes y obras antiguas.' },
      { name: 'Gas metano (carbón)', detail: 'NOM-032-STPS: detección continua y equipo certificado para atmósfera explosiva.' },
      { name: 'Distancias de escape', detail: 'Kilómetros de rampa: autorrescatadores y estaciones de relevo dimensionadas.' },
      { name: 'Incendio en banda y taller', detail: 'Bandas transportadoras, llantas gigantes y talleres con hidráulico a presión.' },
    ],
    spotlight: {
      title: 'Rescate minero y contra incendio',
      highlight: 'para tiro y tajo abierto',
      paragraphs: [
        'Bajo tierra, el aire es el recurso crítico: autorrescatadores en el frente, SCBA de larga duración para la brigada y detección continua que avise antes de que el ambiente sea letal. Dimensionamos el sistema completo según tus distancias de escape reales.',
        'Para superficie y talleres: supresión en bandas transportadoras y equipos móviles, extintores de gran capacidad y brigadas entrenadas en rescate con cuerda y espacios confinados — con la evidencia documental para STPS y tu corporativo.',
      ],
      subsections: [
        { name: 'Autorrescatadores y SCBA', detail: 'Escape y rescate dimensionados a tus distancias de evacuación subterránea.' },
        { name: 'Detección NOM-032', detail: 'Multi-gas certificado para metano, CO y O₂ con bitácora de calibración.' },
        { name: 'Brigada de rescate minero', detail: 'Capacitación en espacios confinados, cuerda y atmósferas IDLH.' },
        { name: 'Supresión en equipos móviles', detail: 'Sistemas para camiones de acarreo, cargadores y bandas transportadoras.' },
      ],
      image: '/images/industrias/mineria.avif',
      imageAlt: 'Ilustración técnica de mina subterránea con brigadista de rescate, SCBA y detección de gases',
    },
    recommendedCategories: ['equipos-scba', 'hazmat', 'camaras-termicas', 'extintores'],
    recommendedServices: ['capacitacion', 'mantenimiento', 'brigadas-empresariales'],
    faqs: [
      { q: '¿Qué exige la NOM-023-STPS en materia de incendio y rescate?', a: 'Para minas subterráneas: brigadas de emergencia capacitadas, equipo de rescate y primeros auxilios, sistemas de detección según el riesgo, autorrescatadores donde la evacuación lo requiera y simulacros documentados. En carbón se suma la NOM-032 con detección continua de metano.' },
      { q: '¿Cada cuánto se calibran los detectores multi-gas?', a: 'Prueba funcional (bump test) antes de cada uso y calibración completa según fabricante — típicamente cada 30 a 180 días. Llevamos el programa de calibración con bitácora y certificados por equipo.' },
      { q: '¿Capacitan brigadas de rescate minero?', a: 'Sí: espacios confinados, manejo de SCBA de larga duración, rescate con cuerda y atención prehospitalaria en interior mina, con constancia DC-3 y prácticas en tu propia operación.' },
    ],
  },
  {
    slug: 'proteccion-civil',
    name: 'Protección Civil',
    norm: 'SINAPROC · NFPA',
    description: 'Equipamiento para unidades de Protección Civil estatal y municipal: EPP de respondiente, rescate urbano USAR, drones térmicos y capacitación certificada.',
    shortDesc: 'EPP, rescate USAR y drones para coordinaciones estatales y municipales.',
    accent: '#34D399',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>`,
    href: '/industrias/proteccion-civil',
    intro: [
      'Las coordinaciones de Protección Civil responden a todo: incendios, sismos, inundaciones y materiales peligrosos, casi siempre con presupuesto limitado y comprobación pública. El equipamiento debe ser versátil, certificado y justificable ante el órgano fiscalizador.',
      'Equipamos unidades estatales y municipales con EPP de respondiente, equipo de rescate urbano y vertical, drones con cámara térmica, atención prehospitalaria y la capacitación que convierte el equipo en capacidad operativa.',
    ],
    risks: [
      { name: 'Respuesta multiamenaza', detail: 'El mismo equipo responde incendio urbano, sismo y jornada de inundación.' },
      { name: 'Rescate en estructura colapsada', detail: 'USAR: apuntalamiento, búsqueda con equipos técnicos y extracción segura.' },
      { name: 'Presupuesto fiscalizado', detail: 'Adquisiciones públicas que se comprueban partida por partida.' },
      { name: 'Personal voluntario rotativo', detail: 'Capacitación continua para mantener la capacidad con voluntariado cambiante.' },
    ],
    spotlight: {
      title: 'Capacidad de respuesta real',
      highlight: 'para tu coordinación de PC',
      paragraphs: [
        'Un buen equipamiento de Protección Civil prioriza la versatilidad: EPP que sirve en incendio urbano y en sismo, herramienta de rescate multiuso y tecnología — como el dron térmico — que multiplica el alcance de poco personal.',
        'Armamos paquetes por nivel de capacidad (búsqueda y rescate básico, intermedio, USAR) alineados a SINAPROC, con documentación de adquisición lista para comprobación y capacitación incluida para personal de base y voluntarios.',
      ],
      subsections: [
        { name: 'Paquetes por nivel de capacidad', detail: 'Equipamiento escalonado: respuesta básica, intermedia y USAR completo.' },
        { name: 'Drones con cámara térmica', detail: 'Búsqueda de personas, evaluación de daños y reconocimiento con registro AFAC.' },
        { name: 'Rescate urbano y vertical', detail: 'Cuerda, arneses, camillas canastilla, trípodes y herramienta de estabilización.' },
        { name: 'Capacitación a voluntarios', detail: 'Programas DC-3 y NFPA adaptados a personal mixto base/voluntario.' },
      ],
      image: '/images/industrias/proteccion-civil.avif',
      imageAlt: 'Ilustración técnica de unidad de Protección Civil con respondiente, dron térmico y equipo de rescate urbano',
    },
    recommendedCategories: ['drones-emergencia', 'herramientas-rescate', 'cascos-nfpa', 'equipos-scba'],
    recommendedServices: ['capacitacion', 'licitaciones', 'brigadas-empresariales'],
    faqs: [
      { q: '¿Qué equipo básico necesita una unidad municipal de PC?', a: 'Como base: EPP de respondiente por elemento (casco, guantes, botas, lámpara), extintores y herramienta básica de rescate, botiquín prehospitalario, radios y señalización de escena. A partir de ahí se escala según las amenazas del municipio: rescate acuático, vertical o USAR.' },
      { q: '¿Apoyan con la justificación de la compra?', a: 'Sí. Entregamos fichas técnicas, comparativos y la documentación de adquisición que facilita la comprobación ante el órgano fiscalizador, además de soporte en procesos de licitación o adjudicación.' },
      { q: '¿El dron térmico requiere permisos para operar?', a: 'Sí, registro de aeronave y operador ante la AFAC para operación institucional. Lo tramitamos como parte del paquete, junto con la capacitación de piloto y los protocolos de operación.' },
    ],
  },
];
