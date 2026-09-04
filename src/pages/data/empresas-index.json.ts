/**
 * /data/empresas-index.json — índice de búsqueda del directorio, en build.
 * Campos cortos para peso mínimo. Lo consume EmpresasGrid cuando recibe `indexSrc`:
 * el servidor renderiza las primeras N cards; el buscador filtra sobre el índice
 * completo en el cliente y re-renderiza.
 */
import type { APIRoute } from 'astro';
import { todasLasEmpresas, urlEmpresa } from '@lib/empresas';

export const GET: APIRoute = async () => {
  const idx = (await todasLasEmpresas()).map((e) => ({
    n: e.nombre, r: e.razonSocial ?? '', c: e.ciudad, m: e.municipio, e: e.estado, en: e.estadoNombre,
    g: e.giros, gp: e.giroPrincipal, s: e.especialidades, u: urlEmpresa(e), p: e.plan, k: e.confianza, w: e.sitioWeb ? 1 : 0, t: e.estrato ?? '',
  }));
  return new Response(JSON.stringify(idx), { headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'public, max-age=3600' } });
};
