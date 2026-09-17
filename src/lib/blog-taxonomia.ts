/**
 * Cuándo una página de taxonomía del blog merece estar en el índice.
 *
 * EL PROBLEMA, MEDIDO EL 2026-09-11
 * ---------------------------------
 * El blog tiene 48 artículos y generaba 176 páginas de etiqueta más 21 de
 * categoría, todas indexables. El reparto de artículos por página era:
 *
 *   etiquetas    1 artículo  140   2  21   3 o más  15
 *   categorías   1 artículo    4   2  13   3 o más   4
 *
 * **140 de las 176 etiquetas agrupaban un solo artículo.** Una etiqueta con un
 * artículo no agrupa nada: su único contenido propio es el título de ese
 * artículo, y compite con él. Para «agente limpio» el sitio ofrecía una página
 * de 85 palabras y un artículo de 1,500 sobre lo mismo; si gana la página de
 * etiqueta, el usuario aterriza en una lista de un elemento.
 *
 * Las que sí agrupan son otra cosa: `nom-002-stps` reúne 8 artículos en 414
 * palabras, `trajes-bomberos` 7 en 375, `proteccion-civil` 6 en 330.
 *
 * LA REGLA
 * --------
 * Se indexa la taxonomía que agrupa MIN_ARTICULOS_INDEXABLE artículos o más.
 * Por debajo, `noindex, follow`: la página sigue navegable y sigue repartiendo
 * enlaces internos —el grafo no cambia—, sólo deja de ofrecerse como resultado
 * de búsqueda.
 *
 * Es el mismo principio que gobierna el directorio de empresas y el de
 * estaciones: no publicar como destino lo que no tiene con qué serlo.
 *
 * Y se corrige sola. El umbral se evalúa sobre el número de artículos, así que
 * una etiqueta que hoy tiene 1 y mañana tiene 3 vuelve al índice sin que nadie
 * la toque.
 */

/**
 * DOS UMBRALES, PORQUE NO SON LA MISMA PIEZA
 * ------------------------------------------
 * La **categoría** es la taxonomía primaria y exclusiva: cada artículo declara
 * una y sólo una, y son 21 para 48 artículos (media 2.3). Es la navegación del
 * blog. Desindexar las de dos artículos dejaría fuera al 81% de esa navegación,
 * que es desproporcionado: una categoría con dos artículos sigue siendo un nodo
 * real de la estructura.
 *
 * La **etiqueta** es secundaria y múltiple: un artículo lleva varias, y son 176
 * para 48 artículos. Ahí sí, con uno o dos artículos no hay agrupación que
 * ofrecer.
 */

/** Etiquetas: múltiples por artículo, 176 para 48. Hace falta que agrupen. */
export const MIN_ARTICULOS_TAG = 3;

/** Categorías: una por artículo, son la navegación del blog. */
export const MIN_ARTICULOS_CATEGORIA = 2;

/** ¿Esta etiqueta agrupa lo suficiente para ser un destino de búsqueda? */
export const tagIndexable = (n: number) => n >= MIN_ARTICULOS_TAG;

/** ¿Esta categoría agrupa lo suficiente para ser un destino de búsqueda? */
export const categoriaIndexable = (n: number) => n >= MIN_ARTICULOS_CATEGORIA;
