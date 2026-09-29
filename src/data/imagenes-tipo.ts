/**
 * Imagen de referencia por TIPO de equipo (auditoría del catálogo 2026-09-28).
 *
 * Las imágenes de /images/productos/tipos/ son ilustraciones generadas del tipo
 * de equipo —sin marcas ni logotipos—, no fotografías del modelo. Sustituyen a la
 * imagen genérica de la categoría y la plantilla las rotula como «imagen de
 * referencia del tipo de equipo». Una ficha con fotografía propia y única del
 * modelo conserva la suya.
 */
type Regla = [RegExp, string];

const REGLAS: Record<string, Regla[]> = {
  'Trajes Bombero': [[/proximity|proximidad|aproximaci/i, 'traje-proximidad'], [/wildland|forestal|tecgen51/i, 'traje-forestal'], [/overol/i, 'overol-rescate'], [/./, 'traje-estructural']],
  'Cascos NFPA': [[/gallet f1|hps 7000|heros titan/i, 'casco-europeo'], [/f2|h10|wildfire/i, 'casco-forestal-rescate'], [/n6a|houston/i, 'casco-cuero'], [/ust|1836|880/i, 'casco-tradicional'], [/./, 'casco-moderno']],
  'Equipos SCBA': [[/rit/i, 'scba-rit'], [/./, 'scba']],
  'Cámaras Térmicas': [[/itic|integrada/i, 'camara-termica-integrada'], [/t560|inspecci|dxt/i, 'camara-termica-inspeccion'], [/./, 'camara-termica']],
  'Herramientas Rescate': [[/cizalla/i, 'cizalla-rescate'], [/separador/i, 'separador-rescate'], [/combinada/i, 'combinada-rescate'], [/ariete/i, 'ariete-rescate']],
  'Extintores': [[/auto|vehic/i, 'extintor-auto'], [/ruedas.*co[₂2]/i, 'extintor-ruedas-co2'], [/ruedas/i, 'extintor-ruedas'], [/tipo k|k-guard/i, 'extintor-tipo-k'], [/fm-200|agente limpio/i, 'extintor-agente-limpio'], [/co[₂2]/i, 'extintor-co2'], [/afff|espuma|aditivo/i, 'extintor-afff'], [/agua/i, 'extintor-agua'], [/./, 'extintor-pqs']],
  'Sistemas CI': [[/oculto/i, 'rociador-oculto'], [/colgante|pendant/i, 'rociador-colgante'], [/rociador/i, 'rociador-vertical'], [/panel facp/i, 'panel-facp'], [/liberaci/i, 'panel-liberacion'], [/detector fotoel/i, 'detector-direccionable'], [/t[ée]rmico/i, 'detector-termico'], [/sirena/i, 'sirena-estrobo'], [/m[óo]dulo/i, 'modulo-monitor'], [/r-102|cocina/i, 'sistema-cocina'], [/co[₂2]/i, 'sistema-co2'], [/fm-200|fluoro-k|ads/i, 'sistema-agente-limpio'], [/gabinete/i, 'gabinete-ci'], [/jockey/i, 'bomba-jockey'], [/bomba/i, 'bomba-ci'], [/v[áa]lvula|os&y/i, 'valvula-osy']],
  'Equipos HAZMAT': [[/estaci[óo]n|galaxy/i, 'estacion-calibracion'], [/monog[áa]s|pac 6500|altair 2x/i, 'detector-monogas'], [/detector|monitor|clip4|ventis|x-am|altair/i, 'detector-multigas'], [/nivel a|encapsulado|frontline 500|zytron 500/i, 'traje-nivel-a'], [/micromax|zytron 100|tychem 2000|part[íi]cul/i, 'traje-particulas'], [/./, 'traje-nivel-b']],
  'Drones Emergencia': [[/dock/i, 'dron-dock'], [/./, 'dron-termico']],
  'Señalización y Emergencia': [[/l[áa]mpara/i, 'lampara-emergencia'], [/letrero/i, 'letrero-salida'], [/se[ñn]al/i, 'senal-fotoluminiscente'], [/gabinete/i, 'gabinete-botiquin'], [/botiqu[íi]n/i, 'botiquin']],
  'Detectores de Humo': [[/co\b|humo y co/i, 'detector-humo-co'], [/./, 'detector-humo']],
  'Desfibriladores DEA': [[/./, 'dea']],
  'EPP Bombero': [[/bota/i, 'bota-bombero'], [/guante/i, 'guantes-bombero'], [/capucha|hood/i, 'capucha-bombero'], [/hacha/i, 'hacha-bombero'], [/halligan/i, 'halligan']],
  'Rescate Vertical': [[/arn[ée]s/i, 'arnes-rescate'], [/descensor|mpd/i, 'descensor'], [/polea/i, 'polea-rescate'], [/split/i, 'camilla-split'], [/camilla/i, 'camilla-canastilla']],
  'Equipo Forestal': [[/mcleod/i, 'mcleod'], [/pulaski/i, 'pulaski'], [/rastrillo/i, 'rastrillo-forestal'], [/batefuegos/i, 'batefuegos'], [/mochila/i, 'bomba-mochila']],
};

/** Ruta de la imagen del tipo de equipo, o undefined si no hay regla. */
export function imagenTipo(categoria: string, titulo: string): string | undefined {
  const regla = REGLAS[categoria]?.find(([re]) => re.test(titulo));
  return regla ? `/images/productos/tipos/${regla[1]}.avif` : undefined;
}

/** Archivos que la lista de reglas espera encontrar (para verificar el lote de imágenes). */
export const TIPOS_ESPERADOS = [...new Set(Object.values(REGLAS).flat().map(([, a]) => a))];
