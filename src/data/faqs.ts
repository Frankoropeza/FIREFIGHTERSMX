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
