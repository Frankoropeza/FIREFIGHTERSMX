import datosGuiasInventario from '../data/guias-inventario.json' with { type: 'json' };

export interface GuiaInventario {
  panorama: string;
  ubicacion: string;
  eleccion: string;
}

export interface FaqItem {
  pregunta: string;
  respuesta: string;
}

export interface EntradaGuia {
  guia?: GuiaInventario;
  faqs: FaqItem[];
  revisado: string;
  generado: {
    lote: string;
    modelo: string;
    editado: boolean;
  };
}

function esRegistro(valor: unknown): valor is Record<string, unknown> {
  return typeof valor === 'object' && valor !== null && !Array.isArray(valor);
}

function esFechaISO(valor: unknown): valor is string {
  if (typeof valor !== 'string' || !/^\d{4}-\d{2}-\d{2}$/.test(valor)) return false;
  const fecha = new Date(`${valor}T00:00:00Z`);
  const [anio, mes, dia] = valor.split('-').map(Number);
  return fecha.getUTCFullYear() === anio && fecha.getUTCMonth() === mes - 1 && fecha.getUTCDate() === dia;
}

function esFaq(valor: unknown): valor is FaqItem {
  return esRegistro(valor) && typeof valor.pregunta === 'string' && typeof valor.respuesta === 'string';
}

function esGuia(valor: unknown): valor is GuiaInventario {
  return esRegistro(valor)
    && typeof valor.panorama === 'string'
    && typeof valor.ubicacion === 'string'
    && typeof valor.eleccion === 'string';
}

export function normalizarEntradaGuia(valor: unknown): EntradaGuia | null {
  if (!esRegistro(valor) || !Array.isArray(valor.faqs) || !valor.faqs.every(esFaq) || !esFechaISO(valor.revisado) || !esRegistro(valor.generado)) return null;
  if (typeof valor.generado.lote !== 'string' || typeof valor.generado.modelo !== 'string' || typeof valor.generado.editado !== 'boolean') return null;
  if ('guia' in valor && !esGuia(valor.guia)) return null;

  return valor as unknown as EntradaGuia;
}

const guiasInventario: unknown = datosGuiasInventario;

export function entradaGuia(clave: string): EntradaGuia | null {
  if (!esRegistro(guiasInventario)) return null;
  return normalizarEntradaGuia(guiasInventario[clave]);
}
