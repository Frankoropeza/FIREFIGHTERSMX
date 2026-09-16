/**
 * cta-empresa — URL del botón «Cotizar» de una ficha VIP.
 *
 * Antes el botón se armaba como `${sitioWeb}/cotizar`, suponiendo que todas
 * las empresas tienen esa ruta. Ahrefs (crawl 2026-09-16) marcó seis fichas
 * con enlace roto: sólo gamademexico.com tiene /cotizar; los otros seis
 * sitios responden 404.
 *
 * Regla: cada destino está verificado a mano con respuesta 200 directa (sin
 * redirect — la forma con o sin barra final es la que cada sitio sirve). Un
 * dominio que no esté en la tabla enlaza a su home, que siempre existe.
 * Verificado 2026-09-16.
 */
const DESTINO_COTIZAR: Record<string, string> = {
  "gamademexico.com": "https://gamademexico.com/cotizar",
  "meseci.com.mx": "https://meseci.com.mx/contacto",
  "mantenimientodeextintores.mx": "https://mantenimientodeextintores.mx/contacto",
  "proyectored.com.mx": "https://proyectored.com.mx/contacto/",
  "equiposcontraincendio.com": "https://equiposcontraincendio.com/contacto/",
  "lgacontraincendios.com": "https://lgacontraincendios.com/contacto/",
  "monitorescontraincendios.com": "https://monitorescontraincendios.com/contacto/",
};

export function urlCotizar(web: string | null | undefined): string | undefined {
  if (!web) return undefined;
  let host: string;
  try {
    host = new URL(web).hostname.replace(/^www\./, "");
  } catch {
    return undefined;
  }
  return DESTINO_COTIZAR[host] ?? web;
}
