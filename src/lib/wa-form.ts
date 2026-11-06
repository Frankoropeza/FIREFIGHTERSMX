/**
 * Formularios → WhatsApp (decisión de Frank 2026-11-05: todo lead llega por
 * WhatsApp; sin backend ni correo). El sitio es estático: los `action="/api/*"`
 * anteriores no existían y el lead se perdía.
 *
 * Marcado esperado en el <form>:
 *   data-wa-form  data-wa-intro="Hola INPROSEG, …"
 *   method="GET" action={whatsappLink()} target="_blank"
 *   <input type="hidden" name="phone" value={SITE.whatsapp} />
 * Sin JS, el GET abre el chat con el número (sin texto prellenado). Con JS se
 * valida, se arma el mensaje «Etiqueta: valor» y se abre con whatsappLink().
 * Casillas/grupos sin <label for> toman su etiqueta de `data-wa-label`.
 */
import { whatsappLink } from '@config/site';

type Campo = HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;

function etiqueta(f: HTMLFormElement, el: Campo): string {
  const lbl = el.id ? f.querySelector(`label[for="${el.id}"]`) : null;
  const txt = el.dataset.waLabel ?? lbl?.textContent ?? el.name;
  return txt.replace('*', '').trim();
}

export function mensajeWhatsApp(f: HTMLFormElement): string {
  const valores = new Map<string, string[]>();
  for (const el of Array.from(f.elements)) {
    if (!(el instanceof HTMLInputElement || el instanceof HTMLSelectElement || el instanceof HTMLTextAreaElement)) continue;
    if (!el.name || el.type === 'hidden') continue;
    if (el instanceof HTMLInputElement && (el.type === 'checkbox' || el.type === 'radio') && !el.checked) continue;
    // En <select> se manda el texto visible, no el slug; el placeholder (value="") no cuenta.
    const v = el instanceof HTMLSelectElement
      ? (el.value ? el.selectedOptions[0]?.text ?? '' : '')
      : el.value;
    if (!v.trim()) continue;
    const k = etiqueta(f, el);
    valores.set(k, [...(valores.get(k) ?? []), v.trim()]);
  }
  const intro = f.dataset.waIntro ?? 'Hola INPROSEG, te escribo desde el sitio web:';
  const lineas = [...valores].map(([k, vs]) => `${k}: ${vs.join(', ')}`);
  return [intro, '', ...lineas].join('\n');
}

export function bindWaForms(): void {
  document.querySelectorAll<HTMLFormElement>('form[data-wa-form]').forEach((f) => {
    if (f.dataset.bound) return;
    f.dataset.bound = '1';
    f.addEventListener('submit', (e) => {
      e.preventDefault();
      if (!f.reportValidity()) return;
      window.open(whatsappLink(mensajeWhatsApp(f)), '_blank', 'noopener');
    });
  });
}
