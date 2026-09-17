/**
 * titulo-seo — deja todo <title> en TITULO_MAX caracteres o menos.
 *
 * Ahrefs (crawl 2026-09-16) marcó 141 títulos largos: el umbral que aplica es
 * 70 caracteres. El <h1> de cada página no se toca; esto sólo afecta a la
 * etiqueta <title>. Pasos, del menos al más invasivo:
 *   1. quita repeticiones pegadas («NFPA 72 NFPA 72»  «NFPA 72»);
 *   2. corta en el último separador (— · | : /) si lo que queda es sustancial;
 *   3. abrevia términos institucionales largos (Coordinación  Coord., …);
 *   4. corta en frontera de palabra, sin dejar conectores colgando.
 */
export const TITULO_MAX = 70;

const ABREVIATURAS: [RegExp, string][] = [
  [/Cuerpo de Rescate y Extinción de Incendios del /g, ''],
  [/Cuerpo de Rescate y Extinción de Incendios/g, 'CREI'],
  [/Servicio de Salvamento y Extinción de Incendios/g, 'SSEI'],
  [/Gestión Integral de(l)? Riesgos?/g, 'GIR'],
  [/Protección Civil/g, 'PC'],
  [/Aeropuerto Internacional/g, 'Aeropuerto Intl.'],
  [/Heroico Cuerpo de Bomberos/g, 'H. Cuerpo de Bomberos'],
  [/Coordinación/g, 'Coord.'],
  [/Dirección General/g, 'Dir. Gral.'],
  [/Dirección/g, 'Dir.'],
  [/Municipal/g, 'Mpal.'],
  [/H\. Ayuntamiento de /g, ''],
  [/Subsecretaría/g, 'Subsecr.'],
  [/Secretaría/g, 'Secr.'],
];

const SEPARADORES = [' — ', ' | ', ' · ', ': ', ' / ', ' - '];
const COLGANTES = /[\s,;:·—|/-]+$|\s+(de|del|la|las|el|los|y|o|e|en|con|para|por|a|al|que|sin|su|sus|un|una|vs)$/i;

const limpiar = (t: string) => {
  let s = t.replace(/\s+/g, ' ').trim();
  // nunca dejar un paréntesis abierto
  const ab = s.lastIndexOf('(');
  if (ab > -1 && s.indexOf(')', ab) === -1) s = s.slice(0, ab);
  let prev;
  do { prev = s; s = s.replace(COLGANTES, '').trim(); } while (s !== prev);
  return s;
};

export function acortarTitulo(titulo: string, max = TITULO_MAX): string {
  // 1. repeticiones pegadas de 1 a 3 palabras
  let t = titulo.replace(/\s+/g, ' ').trim()
    .replace(/\b((?:[\wÁÉÍÓÚÑáéíóúñ.-]+\s){0,2}[\wÁÉÍÓÚÑáéíóúñ.-]+)(?:\s(?:·\s)?\1\b)+/g, '$1');
  if (t.length <= max) return t;

  // 1b. paréntesis aclaratorios: «(TLC / MMTO)», «(con función Bomberos)»
  const sinParen = t.replace(/\s*\([^)]*\)/g, '').replace(/\s+/g, ' ').trim();
  if (sinParen.length >= 35) t = sinParen;
  if (t.length <= max) return t;

  // 2. separador: el último que deja un prefijo de al menos 35 caracteres
  let mejor = '';
  for (const sep of SEPARADORES) {
    let i = t.lastIndexOf(sep, max);
    while (i > 0) {
      const pre = t.slice(0, i);
      if (pre.length <= max && pre.length >= 35 && pre.length > mejor.length) { mejor = pre; break; }
      i = t.lastIndexOf(sep, i - 1);
    }
  }
  if (mejor) return limpiar(mejor);

  // 3. abreviaturas institucionales
  for (const [re, rep] of ABREVIATURAS) {
    t = t.replace(re, rep).replace(/\s+/g, ' ').trim();
    if (t.length <= max) return t;
  }

  // 4. corte en frontera de palabra
  const corte = t.slice(0, max + 1);
  const i = corte.lastIndexOf(' ');
  return limpiar(i > 0 ? corte.slice(0, i) : t.slice(0, max));
}

/**
 * Meta description en DESC_MAX caracteres o menos (umbral de Ahrefs: 160).
 * Corta en el último fin de frase que deje al menos 110 caracteres; si no hay,
 * en frontera de palabra y cierra con punto.
 */
export const DESC_MAX = 160;

export function acortarDescripcion(desc: string, max = DESC_MAX): string {
  const d = desc.replace(/\s+/g, ' ').trim();
  if (d.length <= max) return d;
  const trozo = d.slice(0, max);
  const fin = Math.max(trozo.lastIndexOf('. '), trozo.endsWith('.') ? max - 1 : -1);
  if (fin >= 110) return d.slice(0, fin + 1);
  const i = d.slice(0, max).lastIndexOf(' ');
  return limpiar(d.slice(0, i > 0 ? i : max - 1)) + '.';
}
