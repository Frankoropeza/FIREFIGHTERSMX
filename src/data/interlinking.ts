export interface EnlaceRel { href: string; label: string; desc?: string }
export interface NodoRel { hermanas?: EnlaceRel[]; servicios?: EnlaceRel[]; industrias?: EnlaceRel[]; guias?: EnlaceRel[]; marcas?: EnlaceRel[] }

const producto = (slug: string, label: string): EnlaceRel => ({ href: `/productos/${slug}/`, label });
const servicio = (slug: string, label: string): EnlaceRel => ({ href: `/servicios/${slug}/`, label });
const industria = (slug: string, label: string): EnlaceRel => ({ href: `/industrias/${slug}/`, label });
const guia = (slug: string, label: string): EnlaceRel => ({ href: `/blog/${slug}/`, label });

const sistemas = producto('sistemas-ci', 'Sistemas contra incendio');
const alarma = { href: '/productos/sistemas-ci/alarma-contra-incendio/', label: 'Alarma contra incendio NFPA 72' };
const rociadores = { href: '/productos/sistemas-ci/rociadores-contra-incendio/', label: 'Rociadores contra incendio NFPA 13' };
const bombas = { href: '/productos/sistemas-ci/bombas-contra-incendio/', label: 'Bombas contra incendio NFPA 20' };
const hidrantes = { href: '/productos/sistemas-ci/hidrantes-contra-incendio/', label: 'Hidrantes contra incendio NFPA 14' };
const tyco = { href: '/productos/sistemas-ci/tyco-viking/', label: 'Rociadores Tyco Viking NFPA 13' };
const notifier = { href: '/productos/sistemas-ci/honeywell-notifier/', label: 'Honeywell Notifier NFPA 72' };
const agentes = { href: '/productos/sistemas-ci/fm200-novec/', label: 'FM-200 y Novec NFPA 2001' };
const red = { href: '/productos/sistemas-ci/red-hidraulica/', label: 'Red hidráulica contra incendio' };
const instalacion = servicio('instalacion-sistemas-ci', 'Instalación de sistemas contra incendio');
const mantenimiento = servicio('mantenimiento', 'Mantenimiento contra incendio');
const auditoria = servicio('auditoria-seguridad', 'Auditoría de seguridad NOM-002');
const deteccionGuia = guia('deteccion-alarma-supresion-nfpa-72-2001', 'Guía de detección, alarma y supresión');
const marca = (slug: string, label: string): EnlaceRel => ({ href: `/marcas/${slug}/`, label });
const co2 = (slug: string, label: string): EnlaceRel => ({ href: `/productos/extintores/${slug}/`, label });
const nomGuia = guia('nom-002-stps-guia-completa', 'Guía NOM-002-STPS-2010');

export const interlinking: Record<string, NodoRel> = {
  '/productos/cascos-nfpa/': { hermanas: [producto('trajes-bombero', 'Trajes para bomberos NFPA'), producto('equipos-scba', 'Equipos SCBA')], servicios: [mantenimiento, servicio('capacitacion', 'Capacitación contra incendio')], industrias: [industria('bomberos-municipales', 'Equipo para bomberos municipales')], marcas: [marca('msa-safety', 'MSA Safety'), marca('bullard', 'Bullard'), marca('cairns-helmets', 'Cairns'), marca('rosenbauer', 'Rosenbauer')] },
  '/productos/trajes-bombero/': { hermanas: [producto('cascos-nfpa', 'Cascos NFPA'), producto('equipos-scba', 'Equipos SCBA')], servicios: [mantenimiento, servicio('capacitacion', 'Capacitación contra incendio')], industrias: [industria('bomberos-municipales', 'Equipo para bomberos municipales')], marcas: [marca('globe-manufacturing', 'Globe Manufacturing'), marca('lion-apparel', 'Lion Apparel')] },
  '/productos/equipos-scba/': { hermanas: [producto('cascos-nfpa', 'Cascos NFPA'), producto('camaras-termicas', 'Cámaras térmicas')], servicios: [mantenimiento, servicio('capacitacion', 'Capacitación contra incendio')], industrias: [industria('bomberos-municipales', 'Equipo para bomberos municipales')], marcas: [marca('3m-scott', '3M Scott'), marca('msa-safety', 'MSA Safety'), marca('drager', 'Dräger')] },
  '/productos/camaras-termicas/': { hermanas: [producto('cascos-nfpa', 'Cascos NFPA'), producto('equipos-scba', 'Equipos SCBA')], servicios: [mantenimiento, servicio('capacitacion', 'Capacitación contra incendio')], industrias: [industria('bomberos-municipales', 'Equipo para bomberos municipales')], marcas: [marca('flir-teledyne', 'Teledyne FLIR'), marca('bullard', 'Bullard')] },
  '/productos/herramientas-rescate/': { hermanas: [producto('equipos-scba', 'Equipos SCBA'), producto('trajes-bombero', 'Trajes para bomberos NFPA')], servicios: [servicio('capacitacion', 'Capacitación contra incendio'), mantenimiento], industrias: [industria('bomberos-municipales', 'Equipo para bomberos municipales')], marcas: [marca('holmatro', 'Holmatro')] },
  '/productos/sistemas-ci/': { hermanas: [tyco, notifier, alarma, agentes, red, rociadores, bombas, hidrantes], servicios: [instalacion, mantenimiento, auditoria], industrias: [industria('hospitales', 'Sistemas contra incendio para hospitales'), industria('hoteles', 'Sistemas contra incendio para hoteles')], guias: [deteccionGuia, nomGuia], marcas: [marca('tyco-johnson-controls', 'Tyco · Johnson Controls'), marca('ansul', 'Ansul'), marca('kidde-utc', 'Kidde'), marca('naffco', 'NAFFCO')] },
  '/productos/hazmat/': { hermanas: [producto('equipos-scba', 'Equipos SCBA'), producto('trajes-bombero', 'Trajes para bomberos NFPA')], servicios: [servicio('capacitacion', 'Capacitación HAZMAT'), mantenimiento], industrias: [industria('refinerias-pemex', 'Protección para refinerías')] },
  '/productos/extintores/': { hermanas: [sistemas, producto('trajes-bombero', 'Trajes para bomberos NFPA')], servicios: [mantenimiento, servicio('capacitacion', 'Capacitación contra incendio')], industrias: [industria('hoteles', 'Extintores para hoteles')], guias: [guia('tipos-de-extintores-mexico', 'Tipos de extintores en México'), nomGuia], marcas: [marca('ansul', 'Ansul'), marca('kidde-utc', 'Kidde'), marca('naffco', 'NAFFCO')] },
  '/productos/drones-emergencia/': { hermanas: [producto('camaras-termicas', 'Cámaras térmicas'), producto('herramientas-rescate', 'Herramientas de rescate')], servicios: [servicio('capacitacion', 'Capacitación contra incendio')], industrias: [industria('proteccion-civil', 'Soluciones para Protección Civil')], marcas: [marca('dji-enterprise', 'DJI Enterprise')] },
  '/productos/sistemas-ci/alarma-contra-incendio/': { hermanas: [tyco, notifier, red, agentes, rociadores, bombas, hidrantes], servicios: [instalacion, mantenimiento, auditoria], industrias: [industria('hospitales', 'Alarmas contra incendio para hospitales'), industria('hoteles', 'Alarmas contra incendio para hoteles')], guias: [deteccionGuia, nomGuia], marcas: [{ href: '/marcas/honeywell/', label: 'Marca Honeywell' }] },
  '/productos/sistemas-ci/tyco-viking/': { hermanas: [alarma, notifier, agentes, red, rociadores], servicios: [instalacion, mantenimiento], industrias: [industria('hoteles', 'Rociadores para hoteles'), industria('hospitales', 'Rociadores para hospitales')], guias: [deteccionGuia] },
  '/productos/sistemas-ci/honeywell-notifier/': { hermanas: [alarma, tyco, agentes, red], servicios: [instalacion, mantenimiento], industrias: [industria('hospitales', 'Alarmas para hospitales'), industria('hoteles', 'Alarmas para hoteles')], guias: [deteccionGuia, nomGuia] },
  '/productos/sistemas-ci/fm200-novec/': { hermanas: [alarma, tyco, notifier, red], servicios: [instalacion, mantenimiento], industrias: [industria('hospitales', 'Supresión para hospitales'), industria('refinerias-pemex', 'Supresión para refinerías')], guias: [deteccionGuia] },
  '/productos/sistemas-ci/red-hidraulica/': { hermanas: [alarma, tyco, notifier, agentes, bombas, hidrantes], servicios: [instalacion, mantenimiento], industrias: [industria('hospitales', 'Red hidráulica para hospitales'), industria('hoteles', 'Red hidráulica para hoteles')], guias: [nomGuia] },
  '/productos/sistemas-ci/rociadores-contra-incendio/': { hermanas: [bombas, hidrantes, alarma, red], servicios: [instalacion, mantenimiento], industrias: [industria('hospitales', 'Rociadores para hospitales'), industria('hoteles', 'Rociadores para hoteles')], guias: [deteccionGuia, nomGuia], marcas: [tyco, marca('tyco-johnson-controls', 'Tyco · Johnson Controls')] },
  '/productos/sistemas-ci/bombas-contra-incendio/': { hermanas: [rociadores, hidrantes, alarma, red], servicios: [instalacion, mantenimiento], industrias: [industria('hospitales', 'Bombas contra incendio para hospitales'), industria('hoteles', 'Bombas contra incendio para hoteles'), industria('refinerias-pemex', 'Bombas contra incendio para refinerías')], guias: [nomGuia], marcas: [red] },
  '/productos/sistemas-ci/hidrantes-contra-incendio/': { hermanas: [rociadores, bombas, alarma, red], servicios: [instalacion, mantenimiento], industrias: [industria('hospitales', 'Hidrantes para hospitales'), industria('hoteles', 'Hidrantes para hoteles'), industria('refinerias-pemex', 'Hidrantes para refinerías')], guias: [nomGuia], marcas: [red] },
  '/servicios/capacitacion/': { hermanas: [servicio('brigadas-empresariales', 'Brigadas empresariales'), auditoria], industrias: [industria('brigadas-industriales', 'Capacitación para brigadas industriales')], guias: [nomGuia] },
  '/servicios/mantenimiento/': { hermanas: [instalacion, auditoria], industrias: [industria('hoteles', 'Mantenimiento para hoteles')], guias: [guia('tipos-de-extintores-mexico', 'Tipos de extintores en México')], marcas: [rociadores, bombas, hidrantes] },
  '/servicios/instalacion-sistemas-ci/': { hermanas: [mantenimiento, auditoria], industrias: [industria('hospitales', 'Instalación para hospitales'), industria('hoteles', 'Instalación para hoteles')], guias: [deteccionGuia, nomGuia], marcas: [alarma, tyco, notifier, rociadores, bombas, hidrantes] },
  '/servicios/auditoria-seguridad/': { hermanas: [instalacion, mantenimiento], industrias: [industria('brigadas-industriales', 'Auditoría para brigadas industriales')], guias: [nomGuia] },
  '/servicios/brigadas-empresariales/': { hermanas: [servicio('capacitacion', 'Capacitación contra incendio'), auditoria], industrias: [industria('brigadas-industriales', 'Brigadas industriales')], guias: [nomGuia] },
  '/servicios/licitaciones/': { hermanas: [instalacion, mantenimiento], industrias: [industria('proteccion-civil', 'Compras para Protección Civil')], guias: [nomGuia] },
  '/industrias/bomberos-municipales/': { hermanas: [industria('proteccion-civil', 'Equipo para Protección Civil')], servicios: [servicio('capacitacion', 'Capacitación contra incendio')], marcas: [producto('trajes-bombero', 'Trajes para bomberos NFPA'), producto('equipos-scba', 'Equipos SCBA'), marca('flir-teledyne', 'Teledyne FLIR'), marca('lion-apparel', 'Lion Apparel'), marca('cairns-helmets', 'Cairns')] },
  '/industrias/brigadas-industriales/': { hermanas: [industria('proteccion-civil', 'Equipo para Protección Civil')], servicios: [servicio('capacitacion', 'Capacitación contra incendio'), auditoria], marcas: [sistemas] },
  '/industrias/aeropuertos-arff/': { hermanas: [industria('bomberos-municipales', 'Equipo para bomberos municipales')], servicios: [servicio('capacitacion', 'Capacitación contra incendio')], marcas: [producto('trajes-bombero', 'Trajes para bomberos NFPA'), marca('rosenbauer', 'Rosenbauer')] },
  '/industrias/hospitales/': { hermanas: [industria('hoteles', 'Sistemas contra incendio para hoteles')], servicios: [instalacion, mantenimiento, auditoria], guias: [deteccionGuia, nomGuia], marcas: [alarma, notifier, tyco, rociadores, bombas, hidrantes] },
  '/industrias/hoteles/': { hermanas: [industria('hospitales', 'Sistemas contra incendio para hospitales')], servicios: [instalacion, mantenimiento], guias: [deteccionGuia], marcas: [alarma, tyco, rociadores, bombas, hidrantes] },
  '/industrias/refinerias-pemex/': { hermanas: [industria('mineria', 'Protección contra incendio para minería')], servicios: [instalacion, servicio('capacitacion', 'Capacitación contra incendio')], marcas: [agentes, producto('hazmat', 'Equipos HAZMAT'), bombas, hidrantes] },
  '/industrias/mineria/': { hermanas: [industria('refinerias-pemex', 'Protección para refinerías')], servicios: [servicio('capacitacion', 'Capacitación contra incendio'), mantenimiento], marcas: [producto('herramientas-rescate', 'Herramientas de rescate')] },
  '/industrias/proteccion-civil/': { hermanas: [industria('bomberos-municipales', 'Equipo para bomberos municipales')], servicios: [servicio('capacitacion', 'Capacitación contra incendio'), servicio('licitaciones', 'Soporte para licitaciones')], marcas: [sistemas, marca('dji-enterprise', 'DJI Enterprise')] },
  '/blog/tipos-de-extintores-mexico/': { hermanas: [guia('nom-002-stps-guia-completa', 'Guía NOM-002-STPS-2010')], servicios: [mantenimiento], marcas: [producto('extintores', 'Extintores para cada clase de fuego')], guias: [co2('extintor-co2-2-3kg', 'Extintor CO₂ 2–3 kg'), co2('extintor-co2-4-5kg', 'Extintor CO₂ 4–5 kg'), co2('extintor-co2-6-8kg', 'Extintor CO₂ 6–8 kg'), co2('extintor-co2-9kg', 'Extintor CO₂ 9 kg'), co2('extintor-co2-10kg', 'Extintor CO₂ 10 kg'), co2('extintor-co2-15kg', 'Extintor CO₂ 15 kg')] },
  '/blog/nom-002-stps-guia-completa/': { hermanas: [guia('tipos-de-extintores-mexico', 'Tipos de extintores en México'), deteccionGuia], servicios: [auditoria, instalacion], industrias: [industria('brigadas-industriales', 'Cumplimiento para brigadas industriales')], marcas: [alarma, sistemas, rociadores, bombas, hidrantes] },
  '/blog/deteccion-alarma-supresion-nfpa-72-2001/': { hermanas: [nomGuia], servicios: [instalacion, mantenimiento], industrias: [industria('hospitales', 'Sistemas para hospitales'), industria('hoteles', 'Sistemas para hoteles')], marcas: [alarma, notifier, agentes] },
};

const normalizar = (ruta: string) => {
  const sinDominio = ruta.replace(/^https:\/\/firefighters\.mx/, '').split(/[?#]/)[0] || '/';
  return sinDominio === '/' ? '/' : `${sinDominio.replace(/\/+$/, '')}/`;
};

export function relacionados(ruta: string): EnlaceRel[] {
  const nodo = interlinking[normalizar(ruta)];
  if (!nodo) return [];
  const vistos = new Set<string>();
  return [nodo.hermanas, nodo.servicios, nodo.industrias, nodo.guias, nodo.marcas]
    .flatMap((grupo) => grupo ?? [])
    .filter((enlace) => {
      const href = normalizar(enlace.href);
      if (href === normalizar(ruta) || vistos.has(href)) return false;
      vistos.add(href);
      return true;
    });
}
