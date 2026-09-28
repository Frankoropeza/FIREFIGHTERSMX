/**
 * Meta description cerrada: nunca se corta a media palabra ni a media frase.
 *
 * Toma oraciones completas de `base` mientras quepan en `max` y después anexa,
 * en orden, los `extras` (oraciones cortas: fabricante, norma, cotización) que
 * todavía quepan. Si la primera oración de `base` ya no cabe, se corta en el
 * último separador de cláusula (coma, raya, punto medio, dos puntos) y se cierra
 * con punto.
 */
export const META_MAX = 155;
const MIN_UTIL = 110;

const oraciones = (texto: string): string[] =>
  texto.replace(/\s+/g, ' ').trim().split(/(?<=[.!?])\s+/).map((o) => o.trim()).filter(Boolean);

const cerrar = (texto: string): string => {
  const t = texto.trim().replace(/[\s,;:·—–-]+$/, '');
  return /[.!?]$/.test(t) ? t : `${t}.`;
};

function recortarOracion(oracion: string, max: number): string {
  const limite = oracion.slice(0, max - 1);
  const cortes = [', ', ' — ', ' · ', ': ', '; ', ' y ']
    .map((s) => limite.lastIndexOf(s))
    .filter((i) => i > max * 0.5);
  const corte = cortes.length ? Math.max(...cortes) : limite.lastIndexOf(' ');
  return cerrar(limite.slice(0, corte > 0 ? corte : undefined));
}

export function metaCerrada(base: string, extras: (string | false | null | undefined)[] = [], max = META_MAX): string {
  const partes: string[] = [];
  const largo = () => partes.join(' ').length;
  for (const o of oraciones(base)) {
    const c = cerrar(o);
    if (!partes.length && c.length > max) { partes.push(recortarOracion(o, max)); break; }
    if (largo() + (partes.length ? 1 : 0) + c.length > max) {
      /* Meta corta (<110): se aprovecha la siguiente oración hasta su última cláusula completa. */
      const resto = max - largo() - 1;
      if (largo() < MIN_UTIL && resto >= 40) partes.push(recortarOracion(o, resto + 1));
      break;
    }
    partes.push(c);
  }
  for (const e of extras) {
    if (!e) continue;
    const c = cerrar(e);
    const arranque = c.toLowerCase().split(' ').slice(0, 2).join(' ');
    if (partes.join(' ').toLowerCase().includes(arranque)) continue; // no repetir «Ficha técnica…»
    if (largo() + 1 + c.length <= max) partes.push(c);
  }
  return partes.join(' ');
}
