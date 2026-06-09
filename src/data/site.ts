export const SITE = {
  name:        'FIREFIGHTERS MX',
  shortName:   'FFMX',
  tagline:     'Equipos para bomberos certificados NFPA en México',
  description: 'Portal líder en México para venta de equipos para bomberos certificados NFPA y NOM. Trajes estructurales, SCBA, herramientas de rescate, extintores y sistemas contra incendio. Distribuidores autorizados en los 32 estados.',
  url:         'https://firefighters.mx',
  phone:       '55 1234-5678',
  phoneE164:   '+525512345678',
  email:       'contacto@firefightersmx.com',
  whatsapp:    '525512345678',
  yearsInMarket: 15,
  locale: 'es-MX',
} as const;

/** Genera URL de WhatsApp con mensaje pre-llenado */
export function whatsappUrl(msg: string): string {
  return `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(msg)}`;
}
