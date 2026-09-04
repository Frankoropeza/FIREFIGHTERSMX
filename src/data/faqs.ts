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
    q: '¿Cuánto cuesta un traje de bombero estructural NFPA 1970 en México?',
    a: 'Un traje estructural completo certificado NFPA 1970 (chaquetón y pantalón con sus tres capas) va de $45,000 a $95,000 MXN según marca, tejido exterior y configuración. Un casco NFPA 1970 ronda $6,500–$18,000 MXN; botas estructurales $3,500–$8,000 MXN; y un SCBA NFPA 1970 de 30 minutos, $85,000–$140,000 MXN. Envíanos por WhatsApp tallas y cantidades y regresamos cotización formal con ficha técnica el mismo día hábil.',
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
    a: 'La NOM-002-STPS-2010 obliga a clasificar el riesgo de incendio del centro de trabajo (ordinario o alto), contar con extintores del agente adecuado a menos de 15 m de recorrido, señalización conforme a NOM-026-STPS, brigada capacitada con constancia DC-3 y simulacros documentados. Para riesgo alto se suman detección automática, hidrantes y plan de atención a emergencias. Hacemos auditoría de cumplimiento y entregamos el plan de cierre de brechas.',
  },
  {
    q: '¿Cuánto tarda una cotización formal?',
    a: 'Respondemos toda cotización en menos de 24 horas hábiles con precios, disponibilidad, tiempos de entrega y fichas técnicas. Para proyectos complejos (licitaciones, brigadas completas, ARFF/HAZMAT) entregamos propuesta detallada en 48 horas.',
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
