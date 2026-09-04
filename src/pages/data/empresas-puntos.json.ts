/**
 * /data/empresas-puntos.json — puntos del mapa nacional, en build.
 * Formato compacto: [lat, lng, nombre, url, giro][] (~80 KB para 1,400 empresas).
 * Lo consume MapaEmpresas cuando recibe `src` en vez de `puntos` inline.
 */
import type { APIRoute } from 'astro';
import { todasLasEmpresas, puntosMapa } from '@lib/empresas';

export const GET: APIRoute = async () => {
  const puntos = puntosMapa(await todasLasEmpresas());
  return new Response(JSON.stringify(puntos), { headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'public, max-age=3600' } });
};
