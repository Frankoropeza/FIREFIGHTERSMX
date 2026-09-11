/**
 * Enlaces editoriales dentro de la prosa de las colecciones.
 *
 * EL PROBLEMA
 * -----------
 * La prosa de una línea de producto se pinta con `{p}` y Astro escapa el
 * contenido: un `<a>` escrito en el `.md` sale como texto literal. Por eso el
 * único enlace al sitio de la empresa en esas páginas era el botón de plantilla
 * «Ver {línea} en {empresa}», idéntico en las seis líneas de GAMA. Seis anclas
 * del mismo molde son una firma de automatización.
 *
 * POR QUÉ NO `set:html` SOBRE EL CAMPO
 * ------------------------------------
 * Marcar el campo entero como HTML admitiría cualquier etiqueta metida en los
 * datos. Aquí se hace al revés: **se escapa todo**, y sólo el patrón
 * `[ancla](https://destino/)` se convierte en un `<a>`. El HTML lo genera esta
 * función, no el dato.
 *
 * EL CANDADO SIGUE MANDANDO
 * -------------------------
 * `scripts/verificar-enlaces.mjs` corre sobre `dist/` y sólo permite enlace
 * saliente en fichas de plan destacado. Este helper no lo esquiva: un enlace
 * escrito en la prosa de una ficha básica lo caza el gate y rompe el build, que
 * es exactamente lo que debe pasar.
 *
 * FORMATO EN EL DATO
 * ------------------
 *     "…y la línea completa de [boquillas de chorro regulable](https://…) se…"
 *
 * Sólo `https://`. Un enlace mal formado se queda como texto visible, y por eso
 * se detecta al revisar en vez de desaparecer en silencio.
 */

const ESC: Record<string, string> = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;',
};

const esc = (s: string) => s.replace(/[&<>"']/g, (c) => ESC[c]);

/** `[ancla](https://url)`. El ancla no cruza saltos de línea ni anida corchetes. */
const PATRON = /\[([^\]\n]{1,160})\]\((https:\/\/[^\s)<>"']+)\)/g;

/**
 * Convierte un fragmento de prosa en HTML seguro: todo escapado salvo los
 * enlaces del patrón. `rel` lo decide quien llama, para respetar
 * `relEmpresa()` y su distinción entre dominio del grupo y tercero.
 */
export function conEnlaces(texto: string, rel: string | ((url: string) => string) = 'noopener'): string {
  let salida = '';
  let cursor = 0;
  for (const m of texto.matchAll(PATRON)) {
    const i = m.index ?? 0;
    const r = typeof rel === 'function' ? rel(m[2]) : rel;
    salida += esc(texto.slice(cursor, i));
    salida += `<a href="${esc(m[2])}" rel="${esc(r)}" target="_blank">${esc(m[1])}</a>`;
    cursor = i + m[0].length;
  }
  return salida + esc(texto.slice(cursor));
}

/**
 * El texto sin marcado, dejando sólo el ancla.
 *
 * Obligatorio en todo lo que no sea HTML visible: `meta description`, JSON-LD,
 * `alt`, atributos. Si no, el marcado se publica con sus corchetes y paréntesis
 * donde no hay manera de renderizarlo.
 */
export function sinMarcado(texto: string): string {
  return texto.replace(PATRON, '$1');
}

/** ¿Este texto lleva algún enlace del patrón? */
export function llevaEnlace(texto: string): boolean {
  PATRON.lastIndex = 0;
  return PATRON.test(texto);
}
