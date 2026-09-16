/**
 * Devuelve los siguientes vecinos de una lista circular sin repetir ni incluir
 * el elemento actual. Ahrefs (2026-09-16): en un anillo cada elemento recibe
 * enlaces de sus n anteriores, en vez de concentrarlos en los primeros N.
 */
export function vecinosEnAnillo<T>(lista: T[], indiceActual: number, n: number): T[] {
  if (lista.length <= 1 || n <= 0) return [];

  const limite = Math.min(n, lista.length - 1);
  const vecinos: T[] = [];
  for (let desplazamiento = 1; desplazamiento <= limite; desplazamiento += 1) {
    vecinos.push(lista[(indiceActual + desplazamiento + lista.length) % lista.length]);
  }
  return vecinos;
}
