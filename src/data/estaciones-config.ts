/**
 * Configuración y vocabularios del directorio de estaciones de bomberos.
 *
 * Los DATOS viven en la colección `estaciones` (src/content/estaciones/…);
 * aquí solo está lo que no es dato: tipos, colores y el vocabulario
 * controlado de capacidades operativas.
 */

export type TipoEstacion =
  | 'Municipal'
  | 'Estatal'
  | 'Industrial'
  | 'Aeropuerto'
  | 'PEMEX'
  | 'CFE'
  | 'Voluntarios';

/** Nivel de verificación editorial del registro. Independiente de cualquier plan comercial. */
export type Confianza = 'alta' | 'media' | 'baja';

/**
 * Rol de la ficha dentro de su corporación. La unidad del directorio es la
 * ESTACIÓN FÍSICA (decisión 2026-09-04): una corporación con varios cuarteles
 * tiene una ficha por cuartel.
 */
export type RolEstacion = 'central' | 'subestacion' | 'unica';

export const TIPOS: TipoEstacion[] = ['Municipal', 'Estatal', 'Voluntarios', 'Industrial', 'Aeropuerto', 'PEMEX', 'CFE'];

/** Número único de emergencias en todo México. No es un dato por estación. */
export const TELEFONO_EMERGENCIAS = '911';

/** Configuración visual de cada tipo */
export const tipoConfig: Record<TipoEstacion, { label: string; color: string; bgColor: string }> = {
  Municipal:    { label: 'Municipal',    color: '#C8102E', bgColor: 'rgba(200,16,46,0.1)' },
  Estatal:      { label: 'Estatal',      color: '#B54708', bgColor: 'rgba(181,71,8,0.1)' },
  Industrial:   { label: 'Industrial',   color: '#667085', bgColor: '#E4E7EC' },
  Aeropuerto:   { label: 'Aeropuerto',   color: '#067647', bgColor: 'rgba(6,118,71,0.1)' },
  PEMEX:        { label: 'PEMEX',        color: '#175CD3', bgColor: 'rgba(96,165,250,0.1)' },
  CFE:          { label: 'CFE',          color: '#6941C6', bgColor: 'rgba(167,139,250,0.1)' },
  Voluntarios:  { label: 'Voluntarios',  color: '#475467', bgColor: 'rgba(148,163,184,0.1)' },
};

/** Configuración visual de los niveles de confianza/verificación */
export const confianzaConfig: Record<Confianza, { label: string; color: string; bgColor: string }> = {
  alta:  { label: 'Verificado',    color: '#067647', bgColor: 'rgba(6,118,71,0.1)' },
  media: { label: 'Confirmado',    color: '#B54708', bgColor: 'rgba(181,71,8,0.1)' },
  baja:  { label: 'Por confirmar', color: '#475467', bgColor: 'rgba(148,163,184,0.12)' },
};

/**
 * Vocabulario controlado de capacidades operativas.
 *
 * Sustituye a las 681 etiquetas libres que tenía estaciones.ts, donde
 * "Incendios", "Incendios estructurales" y "Combate de incendios" convivían
 * como categorías distintas y hacían imposible filtrar. El texto tal cual lo
 * publica la fuente se conserva íntegro en `serviciosDetalle`.
 */
export const CAPACIDADES = [
  { slug: 'incendios-estructurales',  label: 'Incendios estructurales' },
  { slug: 'incendios-vehiculares',    label: 'Incendios vehiculares' },
  { slug: 'incendios-forestales',     label: 'Incendios forestales y de pastizal' },
  { slug: 'rescate-vehicular',        label: 'Rescate vehicular' },
  { slug: 'rescate-altura',           label: 'Rescate en altura' },
  { slug: 'rescate-acuatico',         label: 'Rescate acuático' },
  { slug: 'espacios-confinados',      label: 'Espacios confinados' },
  { slug: 'hazmat',                   label: 'Materiales peligrosos (HAZMAT)' },
  { slug: 'fugas-gas',                label: 'Fugas de gas LP' },
  { slug: 'atencion-prehospitalaria', label: 'Atención prehospitalaria' },
  { slug: 'enjambres-fauna',          label: 'Enjambres y fauna' },
  { slug: 'proteccion-civil',         label: 'Protección civil preventiva' },
  { slug: 'capacitacion',             label: 'Capacitación y brigadas' },
  { slug: 'arff',                     label: 'ARFF aeroportuario' },
] as const;

export type CapacidadSlug = (typeof CAPACIDADES)[number]['slug'];

export const CAPACIDAD_SLUGS = CAPACIDADES.map((c) => c.slug) as CapacidadSlug[];

export const capacidadLabel = (slug: string): string =>
  CAPACIDADES.find((c) => c.slug === slug)?.label ?? slug;
