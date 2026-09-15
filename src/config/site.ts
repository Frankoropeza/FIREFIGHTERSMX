export const SITE = {
  name:        'FIREFIGHTERS MX',
  shortName:   'FFMX',
  // Identidad híbrida (2026-09-15): FIREFIGHTERS MX vende y distribuye equipo
  // (la tienda) y además publica el directorio nacional de empresas y estaciones.
  tagline:     'Venta y distribución de equipo para bomberos y equipo contra incendio en México',
  description: 'Distribuidor de equipo para bomberos y equipo contra incendio en México: trajes, SCBA, cascos, extintores y sistemas contra incendio, con envíos a los 32 estados. Incluye el directorio nacional de empresas y estaciones de bomberos.',
  url:         'https://firefighters.mx',
  // ⚠️ Teléfono / WhatsApp SIN VERIFICAR — ver CONTACTO_DIRECTO_ACTIVO abajo.
  // Los valores anteriores ('55 1234-5678' / '+525512345678' / '525512345678') eran
  // el placeholder del template, no un número real. Se vacían para no publicar
  // contacto fabricado (regla dura OrigenLab: cero contenido fabricado).
  phone:       '',
  phoneE164:   '',
  email:       'firefightersmx50@gmail.com',
  whatsapp:    '',
  hours:       'Lun–Vie 8am–6pm · Sáb 9am–2pm',
  // Domicilio confirmado por Frank Oropeza el 2026-09-15 (oficinas y operación).
  // El valor de la plantilla ('Av. Baja California 255, Condesa') era falso y
  // sigue bloqueado por scripts/verificar-claims.mjs (F-01).
  address: {
    street:     'Av. Homero 229, Piso 5',
    colonia:    'Polanco V Sección',
    delegacion: 'Miguel Hidalgo',
    postalCode: '11560',
    city:       'Ciudad de México',
    country:    'MX',
    full:       'Av. Homero 229, Piso 5, Polanco V Sección, Miguel Hidalgo, 11560 Ciudad de México, CDMX',
  },
  // ⚠️ REDES SIN VERIFICAR — ver REDES_VERIFICADAS abajo.
  // Verificación 2026-09-05: LinkedIn, YouTube y X responden 404; Facebook e
  // Instagram renderizan "contenido/perfil no disponible". Ninguno de los cinco
  // existe. Se vacían para no emitir `sameAs` hacia URLs muertas.
  social: {
    facebook:  '',
    instagram: '',
    linkedin:  '',
    youtube:   '',
    twitter:   '',
  },
  locale: 'es-MX',
} as const;

/**
 * ⚠️ INTERRUPTOR DE CONTACTO DIRECTO
 * ----------------------------------
 * En `false` el sitio NO publica teléfono ni WhatsApp en ningún lado:
 * ni texto visible, ni links `tel:`/`wa.me`, ni `telephone` en JSON-LD.
 * Todos los CTA caen a correo / formulario.
 *
 * Para activarlo cuando Frank entregue el número REAL:
 *   1. Llenar `phone`, `phoneE164` y `whatsapp` en SITE con el número verificado.
 *   2. Cambiar esta constante a `true`.
 * (Mismo patrón ya probado en FIESTAENCASA.)
 */
export const CONTACTO_DIRECTO_ACTIVO = false;

/**
 * ⚠️ INTERRUPTOR DE DOMICILIO
 * En `false` el sitio NO publica domicilio: ni en el footer, ni en /contacto,
 * ni en `address` del JSON-LD (Organization y LocalBusiness).
 * Para activarlo: llenar `SITE.address` con el domicilio real y poner `true`.
 */
export const DOMICILIO_VERIFICADO = true;

/**
 * ⚠️ INTERRUPTOR DE REDES SOCIALES
 * En `false` el sitio NO publica perfiles sociales: ni iconos en el footer, ni
 * `sameAs` en el JSON-LD. Para activarlo: llenar `SITE.social` con los perfiles
 * que existan y poner `true`. `sameAs` filtra los vacíos aunque esté en `true`.
 */
export const REDES_VERIFICADAS = false;

/** Canal de contacto directo, para textos visibles («Cotizar por {CANAL_CONTACTO}») */
export const CANAL_CONTACTO = CONTACTO_DIRECTO_ACTIVO ? 'WhatsApp' : 'correo';

/** Etiqueta del CTA principal de contacto */
export const CTA_CONTACTO = CONTACTO_DIRECTO_ACTIVO
  ? 'Escríbenos por WhatsApp'
  : 'Escríbenos por correo';

/** Genera URL de WhatsApp con mensaje pre-llenado (o mailto si no hay contacto directo) */
export function whatsappUrl(msg: string): string {
  return CONTACTO_DIRECTO_ACTIVO
    ? `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(msg)}`
    : `mailto:${SITE.email}?subject=${encodeURIComponent('Cotización — FIREFIGHTERS MX')}&body=${encodeURIComponent(msg)}`;
}

/**
 * Contacto con asunto propio. Usar SIEMPRE que el motivo no sea una cotización
 * (alta en el directorio, corrección de datos, consulta editorial): whatsappUrl()
 * fuerza el asunto "Cotización" y en /estaciones eso era una promesa falsa.
 */
export function contactoUrl(asunto: string, msg: string): string {
  return CONTACTO_DIRECTO_ACTIVO
    ? `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(msg)}`
    : `mailto:${SITE.email}?subject=${encodeURIComponent(`${asunto} — FIREFIGHTERS MX`)}&body=${encodeURIComponent(msg)}`;
}

/** Link de teléfono (o mailto si no hay contacto directo) */
export function telUrl(): string {
  return CONTACTO_DIRECTO_ACTIVO ? `tel:${SITE.phoneE164}` : `mailto:${SITE.email}`;
}
