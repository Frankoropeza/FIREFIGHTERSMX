/**
 * Metadatos de los 32 estados: nombre, slug, abreviatura y región.
 *
 * Vive aparte de la colección `estaciones` a propósito: es dato estable y
 * SÍNCRONO, y lo consumen getStaticPaths y el directorio de empresas, que no
 * pueden esperar a un getCollection().
 */

export type Region =
  | 'Norte'
  | 'Noreste'
  | 'Noroeste'
  | 'Centro-Norte'
  | 'Centro'
  | 'Centro-Occidente'
  | 'Sur'
  | 'Sureste'
  | 'Peninsular';

export interface EstadoMeta {
  nombre: string;
  slug: string;
  abreviatura: string;
  region: Region;
}

export const estados: EstadoMeta[] = [
  { nombre: 'Aguascalientes', slug: 'aguascalientes', abreviatura: 'AGS', region: 'Centro-Norte' },
  { nombre: 'Baja California', slug: 'baja-california', abreviatura: 'BC', region: 'Noroeste' },
  { nombre: 'Baja California Sur', slug: 'baja-california-sur', abreviatura: 'BCS', region: 'Noroeste' },
  { nombre: 'Campeche', slug: 'campeche', abreviatura: 'CAM', region: 'Peninsular' },
  { nombre: 'Chiapas', slug: 'chiapas', abreviatura: 'CHIS', region: 'Sur' },
  { nombre: 'Chihuahua', slug: 'chihuahua', abreviatura: 'CHIH', region: 'Norte' },
  { nombre: 'Ciudad de México', slug: 'ciudad-de-mexico', abreviatura: 'CDMX', region: 'Centro' },
  { nombre: 'Coahuila', slug: 'coahuila', abreviatura: 'COAH', region: 'Norte' },
  { nombre: 'Colima', slug: 'colima', abreviatura: 'COL', region: 'Centro-Occidente' },
  { nombre: 'Durango', slug: 'durango', abreviatura: 'DGO', region: 'Norte' },
  { nombre: 'Guanajuato', slug: 'guanajuato', abreviatura: 'GTO', region: 'Centro' },
  { nombre: 'Guerrero', slug: 'guerrero', abreviatura: 'GRO', region: 'Sur' },
  { nombre: 'Hidalgo', slug: 'hidalgo', abreviatura: 'HGO', region: 'Centro' },
  { nombre: 'Jalisco', slug: 'jalisco', abreviatura: 'JAL', region: 'Centro-Occidente' },
  { nombre: 'Estado de México', slug: 'estado-de-mexico', abreviatura: 'MEX', region: 'Centro' },
  { nombre: 'Michoacán', slug: 'michoacan', abreviatura: 'MICH', region: 'Centro-Occidente' },
  { nombre: 'Morelos', slug: 'morelos', abreviatura: 'MOR', region: 'Centro' },
  { nombre: 'Nayarit', slug: 'nayarit', abreviatura: 'NAY', region: 'Centro-Occidente' },
  { nombre: 'Nuevo León', slug: 'nuevo-leon', abreviatura: 'NL', region: 'Noreste' },
  { nombre: 'Oaxaca', slug: 'oaxaca', abreviatura: 'OAX', region: 'Sur' },
  { nombre: 'Puebla', slug: 'puebla', abreviatura: 'PUE', region: 'Centro' },
  { nombre: 'Querétaro', slug: 'queretaro', abreviatura: 'QRO', region: 'Centro' },
  { nombre: 'Quintana Roo', slug: 'quintana-roo', abreviatura: 'QROO', region: 'Peninsular' },
  { nombre: 'San Luis Potosí', slug: 'san-luis-potosi', abreviatura: 'SLP', region: 'Centro-Norte' },
  { nombre: 'Sinaloa', slug: 'sinaloa', abreviatura: 'SIN', region: 'Noroeste' },
  { nombre: 'Sonora', slug: 'sonora', abreviatura: 'SON', region: 'Noroeste' },
  { nombre: 'Tabasco', slug: 'tabasco', abreviatura: 'TAB', region: 'Sur' },
  { nombre: 'Tamaulipas', slug: 'tamaulipas', abreviatura: 'TAMPS', region: 'Noreste' },
  { nombre: 'Tlaxcala', slug: 'tlaxcala', abreviatura: 'TLAX', region: 'Centro' },
  { nombre: 'Veracruz', slug: 'veracruz', abreviatura: 'VER', region: 'Sur' },
  { nombre: 'Yucatán', slug: 'yucatan', abreviatura: 'YUC', region: 'Peninsular' },
  { nombre: 'Zacatecas', slug: 'zacatecas', abreviatura: 'ZAC', region: 'Centro-Norte' },
];

export const totalEstados = estados.length;

export function estadoPorSlug(slug: string): EstadoMeta | undefined {
  return estados.find((e) => e.slug === slug);
}

export const regionesPresentes: Region[] = [...new Set(estados.map((e) => e.region))] as Region[];
