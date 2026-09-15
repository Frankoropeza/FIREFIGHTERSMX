export interface FAQ {
  q: string;
  a: string;
}

/**
 * FAQ del home — fuente única para el acordeón visible y el schema FAQPage (JSON-LD).
 * Mantener `a` en texto plano (sin HTML) para que el schema sea válido.
 */
export const homeFaqs: FAQ[] = [
  {
    q: '¿Cuáles son los equipos contra incendios?',
    a: 'Se agrupan por función. De detección: detectores de humo y calor, paneles y alarmas contra incendio. De combate: extintores portátiles y sobre ruedas, hidrantes, gabinetes con manguera, rociadores automáticos y sistemas de supresión con agentes limpios. De evacuación: señalamientos de protección civil y lámparas de emergencia. Y de protección personal: el equipo para bomberos y brigadistas, desde el traje y el casco hasta el equipo de respiración autónoma.',
  },
  {
    q: '¿Qué elementos conforman un sistema contra incendio?',
    a: 'Un sistema contra incendio completo combina detección y alarma (panel, detectores y estaciones manuales), suministro de agua (cisterna, bomba principal, bomba jockey y red hidráulica), elementos de descarga (rociadores, hidrantes y gabinetes con manguera) y, en áreas donde el agua causaría daño, supresión con FM-200 o Novec 1230. Se diseña según el nivel de riesgo del inmueble y las normas NFPA 13, NFPA 20 y NFPA 72.',
  },
  {
    q: '¿Cuánto cuesta un sistema contra incendio?',
    a: 'Depende de la superficie, el nivel de riesgo, el tipo de ocupación y el alcance: no cuesta lo mismo un sistema de detección para oficinas que una red de rociadores con cuarto de bombas para una nave industrial. Por eso cotizamos por proyecto: con el plano o una visita técnica definimos el equipo contra incendio necesario y enviamos la propuesta con fichas técnicas.',
  },
  {
    q: '¿Por qué es importante contar con equipo contra incendio?',
    a: 'Porque un incendio es mucho más fácil de controlar en su etapa inicial: la detección temprana alerta a los ocupantes, el extintor o el rociador actúa en los primeros minutos y la señalización ordena la evacuación. Además, la NOM-002-STPS-2010 obliga a todo centro de trabajo a contar con el equipo que corresponde a su grado de riesgo, y Protección Civil y las aseguradoras lo revisan en cada inspección.',
  },
  {
    q: '¿Cuáles son los 4 tipos de brigadas de emergencia?',
    a: 'En el Programa Interno de Protección Civil suelen integrarse cuatro brigadas: prevención y combate de incendios, evacuación, primeros auxilios y búsqueda y rescate; algunos programas sustituyen esta última por la de comunicación. En la NOM-002-STPS-2010, la brigada contra incendio es obligatoria en los centros de trabajo de riesgo alto. Equipamos y capacitamos a cada brigada con constancia DC-3.',
  },
  {
    q: '¿Cómo se llama el equipo que usan los bomberos?',
    a: 'Se llama equipo de protección personal (EPP) para bomberos. Para combate estructural, la NFPA 1970 lo define como un conjunto: traje estructural (chaquetón y pantalón), casco, capucha, guantes, botas y protección respiratoria con equipo de respiración autónoma (SCBA) y dispositivo PASS. Para incendio forestal se usa ropa ligera específica y para HAZMAT, trajes de protección química.',
  },
  {
    q: '¿Cuáles son los 7 equipos de protección personal de un bombero?',
    a: 'En el combate estructural son siete piezas que trabajan como sistema: casco, capucha, chaquetón, pantalón, guantes, botas y equipo de respiración autónoma (SCBA) con su pieza facial. El dispositivo PASS, que alerta si el bombero queda inmóvil, suele integrarse al SCBA. Todas deben ser compatibles entre sí y estar certificadas bajo NFPA 1970.',
  },
  {
    q: '¿Cuánto cuesta un equipo de bombero completo?',
    a: 'Depende de la marca, el tejido exterior del traje estructural, la configuración del casco y del SCBA, las tallas y el volumen, por eso no publicamos una lista fija. Envíanos por WhatsApp, correo o desde la página de cotización qué piezas necesitas, tallas y cantidades, y te enviamos la cotización formal del equipo completo con ficha técnica.',
  },
  {
    q: '¿Son distribuidores autorizados de las marcas que mencionan?',
    a: 'Sí. Mantenemos contratos vigentes de distribución con las principales marcas internacionales: Globe, MSA, Dräger, Bullard, Holmatro, 3M Scott y Honeywell, entre otras. Cada producto incluye número de serie verificable directamente con el fabricante y certificado de origen.',
  },
  {
    q: '¿Pueden facturar a gobierno y participar en licitaciones?',
    a: 'Por supuesto. Tenemos más de 15 años trabajando con dependencias federales, estatales y municipales. Apoyamos con fichas técnicas formato licitación, manifiestos de normas NFPA/NOM, asistencia a juntas de aclaraciones y plantillas CompraNet. Facturación CFDI 4.0.',
  },
  {
    q: '¿Qué equipo contra incendio exige la NOM-002-STPS-2010 a una empresa?',
    a: 'La NOM-002-STPS-2010 obliga a clasificar el riesgo de incendio del centro de trabajo (ordinario o alto), contar con extintores del agente adecuado (distancia máxima de recorrido de 23 m, menor para fuegos clase B y K), señalización conforme a NOM-026-STPS y simulacros documentados. En riesgo alto se suman la brigada contra incendio capacitada, sistemas fijos de protección contra incendios y plan de atención a emergencias. Hacemos auditoría de cumplimiento y entregamos el plan de cierre de brechas.',
  },
  {
    q: '¿Cuánto tarda una cotización formal?',
    a: 'Respondemos con cotización formal en menos de 24 horas hábiles: precios, disponibilidad, tiempos de entrega y fichas técnicas. Para proyectos complejos (licitaciones, brigadas completas, ARFF o HAZMAT) acordamos por escrito el plazo de la propuesta detallada.',
  },
  {
    q: '¿Hacen envíos a toda la República Mexicana?',
    a: 'Sí, cubrimos los 32 estados. Tiempos: 24–48 horas en CDMX y zona metropolitana, 3–5 días hábiles al resto del país. Embalaje especializado y seguro de envío incluido en todos los pedidos institucionales.',
  },
  {
    q: '¿Ofrecen capacitación con constancia DC-3 STPS?',
    a: 'Sí. Cursos de brigadas NOM-002-STPS, NFPA 1001 (bombero nivel I y II), uso y mantenimiento de SCBA, rescate vehicular y HAZMAT awareness. Todos con constancia DC-3 STPS válida ante IMSS y revisiones de la Secretaría del Trabajo.',
  },
  {
    q: '¿Qué garantía manejan en los equipos?',
    a: 'Garantía directa de fábrica: hasta 10 años en trajes estructurales premium, 5 años en SCBA, 2 años en cascos y guantes, 1 año en extintores. Disponemos de refacciones originales y servicio técnico autorizado para mantenimiento programado conforme NFPA 1850.',
  },
  {
    q: '¿Manejan precios preferenciales para cuerpos de bomberos?',
    a: 'Sí. Tenemos esquemas de precio preferencial para H. Cuerpos de Bomberos, Protección Civil, dependencias gubernamentales y compras por volumen (5+ unidades). Consultar por programa de equipamiento integral con financiamiento.',
  },
  {
    q: '¿Tienen equipo en stock para entrega inmediata?',
    a: 'Mantenemos inventario permanente de trajes estructurales (tallas S–2XL), cascos, guantes, botas, capuchas y linternas. SCBA, herramientas hidráulicas y HAZMAT Nivel A pueden tomar 2–4 semanas según especificación técnica.',
  },
];

/**
 * FAQ del portal-directorio (home v3, 2026-09). Fuente única para el acordeón
 * y el schema FAQPage. Texto plano, sin HTML. Cero cifras de precio propias:
 * el sitio ya no habla como vendedor.
 */
export const directorioFaqs: FAQ[] = [
  {
    q: '¿Qué es el directorio de FIREFIGHTERS MX?',
    a: 'Es el directorio nacional de empresas de equipo contra incendio en México: distribuidores de equipo para bomberos y EPP, empresas de venta, recarga y mantenimiento de extintores, ingenierías e instaladoras de sistemas contra incendio, y centros de capacitación de brigadas. Cubre los 32 estados, clasifica a cada empresa por giro y especialidad, y cita la fuente de cada registro. Se complementa con el directorio de cuerpos de bomberos del país.',
  },
  {
    q: '¿De dónde salen los datos de las empresas?',
    a: 'Los registros básicos provienen del Directorio Estadístico Nacional de Unidades Económicas (DENUE) del INEGI, con enlace a la ficha original. Cada registro se filtra y clasifica editorialmente por giro y especialidad, porque el SCIAN no tiene una clase propia para este sector. Las fichas verificadas suman el sitio web de la empresa, padrones de distribuidores publicados por los fabricantes y adjudicaciones en CompraNet.',
  },
  {
    q: '¿Qué significan los niveles de verificación?',
    a: 'Registro público: la empresa aparece en el DENUE y fue clasificada por nuestra redacción, pero no ha confirmado sus datos. Datos confirmados: existencia y giro confirmados en una segunda fuente; contacto pendiente. Datos verificados: contacto y giro confirmados contra fuente oficial y sitio propio, normalmente porque la empresa reclamó su ficha. El nivel lo otorga la redacción y no cambia por contratar un plan.',
  },
  {
    q: '¿Cómo busco un proveedor en mi estado?',
    a: 'Usa el buscador de la portada: elige el giro, el estado o escribe el nombre de la empresa, la ciudad o el producto. Cada combinación de giro y estado tiene su propia página con mapa, buscador y filtros por especialidad. También puedes entrar por estado para ver todos los giros disponibles en tu entidad.',
  },
  {
    q: 'Mi empresa aparece en el directorio, ¿cómo reclamo la ficha?',
    a: 'Entra a la ficha y usa el botón Reclamar ficha, o ve directo a la página de registro. Te pediremos confirmar el contacto desde un correo o teléfono de la empresa. Al verificar puedes completar la ficha con logo, descripción, marcas que distribuyes, certificaciones y cobertura, y obtienes el sello de datos verificados.',
  },
  {
    q: 'Mi empresa no aparece, ¿cómo la registro?',
    a: 'Desde la página de registro, eligiendo Registrar una empresa nueva. El alta básica es gratuita: nombre, giro, ciudad y ubicación. Revisamos que la empresa exista y opere en el giro declarado antes de publicarla. Respondemos en uno o dos días hábiles.',
  },
  {
    q: '¿Qué diferencia hay entre una ficha básica, verificada y destacada?',
    a: 'La ficha básica es el registro público tal como viene de la fuente. La verificada es una ficha reclamada y confirmada, con datos completos e indexable en buscadores. La destacada aparece primero en su giro y estado, incluye galería y contacto directo, y se muestra de forma cruzada en las guías de compra y en las fichas de los cuerpos de bomberos de su zona. Ninguno de los planes modifica el nivel de verificación de los datos.',
  },
  {
    q: '¿Un registro está mal o la empresa ya no opera?',
    a: 'Escríbenos desde la página de contacto con la URL de la ficha y lo que hay que corregir. Los registros públicos del DENUE tienen rezago y algunas unidades económicas cierran; corregimos o retiramos el registro en cuanto lo confirmamos.',
  },
  {
    q: '¿Qué equipo contra incendio exige la NOM-002-STPS-2010 a un centro de trabajo?',
    a: 'Clasificar el riesgo de incendio del centro de trabajo, contar con extintores del agente adecuado a distancias de recorrido reglamentarias y con mantenimiento vigente, señalización conforme a NOM-026-STPS, brigada capacitada con constancia DC-3 y simulacros documentados. Para riesgo alto se suman detección automática, red de hidrantes y plan de atención a emergencias. Las guías del sitio detallan cada punto y el directorio muestra qué empresas atienden cada uno en tu estado.',
  },
  {
    q: '¿Sirve el directorio para licitaciones y compras de gobierno?',
    a: 'Sí. Las guías de compra explican cómo especificar bases técnicas por desempeño y norma —NFPA o NOM— en lugar de por marca, y el directorio permite ubicar proveedores por giro en la entidad de la convocante. La sección de licitaciones reúne el material de apoyo para CompraNet, juntas de aclaraciones y fichas técnicas.',
  },
];
