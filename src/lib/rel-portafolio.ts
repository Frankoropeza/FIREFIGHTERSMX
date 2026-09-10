/**
 * rel-portafolio — decide el `rel` de un enlace externo según a quién apunta.
 *
 * El directorio de empresas enlaza la web de la empresa desde su ficha. Para
 * una empresa ajena eso es una colocación de directorio y lleva `sponsored`:
 * el atributo está definido para publicidad y colocaciones pagadas, y el
 * directorio ofrece planes. Para los sitios del propio grupo no hay pago que
 * declarar —nadie se paga a sí mismo— así que `sponsored` describiría mal la
 * relación y se omite.
 *
 * Misma política que bombero.mx (`normalizarEnlacesPortafolio`), resuelta aquí
 * en el origen en vez de post-procesando HTML, porque estos enlaces se pintan
 * en componentes y no pasan por el pipeline de markdown.
 *
 * NO afecta a los enlaces de infraestructura ni a las fuentes citadas
 * (OpenStreetMap, CARTO, Google Maps, notas de prensa): esos llevan su
 * `nofollow` por su cuenta y deben conservarlo.
 */

/** Dominios del grupo. Cualquier otro host es un tercero. */
const PORTAFOLIO = [
  "gamademexico.com",
  "meseci.com.mx",
  "lgacontraincendios.com",
  "proyectored.com.mx",
  "mantenimientodeextintores.mx",
  "monitorescontraincendios.com",
  "equiposcontraincendio.com",
  "trajesbomberos.com",
  "bombero.mx",
  "firefighter.com.mx",
  "firefighter.mx",
  "firefighters.mx",
  "tuseguridad.mx",
] as const;

/** true si la URL apunta a un dominio del grupo (o a un subdominio suyo). */
export function esPortafolio(url: string | null | undefined): boolean {
  if (!url) return false;
  let host: string;
  try {
    host = new URL(url, "https://firefighters.mx").hostname.toLowerCase();
  } catch {
    return false;
  }
  host = host.replace(/^www\./, "");
  return PORTAFOLIO.some((d) => host === d || host.endsWith("." + d));
}

/**
 * `rel` para el enlace saliente de una ficha de empresa.
 * Tercero → `noopener sponsored`. Grupo → `noopener`.
 */
export function relEmpresa(url: string | null | undefined): string {
  return esPortafolio(url) ? "noopener" : "noopener sponsored";
}
