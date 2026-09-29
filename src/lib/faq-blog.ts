/**
 * faq-blog — FAQPage JSON-LD a partir de la sección «## Preguntas frecuentes»
 * del markdown de un artículo (2026-09-28).
 *
 * Todos los artículos del blog cierran con «## Preguntas frecuentes» (preguntas
 * en H3) y después «## Fuentes». El esquema se deriva del mismo texto visible,
 * sin duplicar contenido en el frontmatter: si la sección no existe o no tiene
 * al menos dos preguntas, no se emite nada.
 */

/** Markdown en línea → texto plano (enlaces, énfasis y código). */
function textoPlano(md: string): string {
  return md
    .replace(/!\[[^\]]*\]\([^)]*\)/g, '')
    .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')
    .replace(/[*_`]+/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

export function faqSchemaDesdeMarkdown(body: string | undefined) {
  if (!body) return undefined;
  const inicio = body.search(/^## Preguntas frecuentes\s*$/m);
  if (inicio < 0) return undefined;
  const resto = body.slice(inicio).replace(/^## Preguntas frecuentes\s*$/m, '');
  const fin = resto.search(/^## /m);
  const seccion = fin >= 0 ? resto.slice(0, fin) : resto;

  const bloques = seccion.split(/^### /m).slice(1);
  const preguntas = bloques
    .map((b) => {
      const [linea, ...cuerpo] = b.split('\n');
      const respuesta = textoPlano(cuerpo.join('\n'));
      return { pregunta: textoPlano(linea), respuesta };
    })
    .filter((q) => q.pregunta && q.respuesta);

  if (preguntas.length < 2) return undefined;
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: preguntas.map((q) => ({
      '@type': 'Question',
      name: q.pregunta,
      acceptedAnswer: { '@type': 'Answer', text: q.respuesta },
    })),
  };
}
