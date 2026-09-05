import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blogCollection = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string().max(165),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    author: z.string().default('FIREFIGHTERS MX'),
    category: z.string(),
    tags: z.array(z.string()).default([]),
    image: z.object({
      url: z.string(),
      alt: z.string(),
      caption: z.string().optional(),
    }).optional(),
    draft: z.boolean().default(false),
  }),
});

const productosCollection = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/productos' }),
  schema: z.object({
    title: z.string(),
    description: z.string().max(165),
    category: z.string(),
    subcategory: z.string().optional(),
    brand: z.string().optional(),
    model: z.string().optional(),
    norm: z.string().optional(),
    sku: z.string().optional(),
    image: z.string().optional(),
    images: z.array(z.string()).default([]),
    specs: z.record(z.string(), z.string()).optional(),
    features: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

/**
 * Directorio nacional de empresas — un archivo por empresa en
 * src/content/empresas/<estado>/<slug>.md
 *
 * `fuentes` con .min(1) hace imposible publicar una empresa sin fuente:
 * la regla de cero datos fabricados es un gate del build, no disciplina.
 * `confianza` (veracidad editorial) y `plan` (nivel comercial) son ejes
 * independientes y nunca se mezclan.
 */
const giroEnum = z.enum(['venta-equipo', 'equipos-contra-incendio', 'extintores', 'sistemas-ci', 'capacitacion']);

const empresasCollection = defineCollection({
  // generateId: el id es la ruta <estado>/<slug>. Sin esto, glob usa el campo `slug`
  // del frontmatter como id y dos empresas con el mismo slug en estados distintos se pisan.
  loader: glob({ pattern: '**/*.md', base: './src/content/empresas', generateId: ({ entry }) => entry.replace(/\.md$/, '') }),
  schema: z.object({
    id: z.string(),
    nombre: z.string(),
    razonSocial: z.string().optional(),
    slug: z.string(),
    estado: z.string(),
    estadoNombre: z.string(),
    ciudad: z.string(),
    municipio: z.string(),
    direccion: z.string().optional(),
    codigoPostal: z.string().optional(),
    coordenadas: z.object({ lat: z.number(), lng: z.number(), precision: z.string().optional() }).optional(),
    giroPrincipal: giroEnum,
    giros: z.array(giroEnum).min(1),
    especialidades: z.array(z.string()).default([]),
    cobertura: z.array(z.string()).default([]),
    marcas: z.array(z.string()).default([]),
    certificaciones: z.array(z.string()).default([]),
    normas: z.array(z.string()).default([]),
    claseDENUE: z.string().optional(),
    estrato: z.string().optional(),
    telefono: z.string().optional(),
    telefonosAdicionales: z.array(z.string()).default([]),
    email: z.string().optional(),
    sitioWeb: z.string().optional(),
    redes: z.object({ facebook: z.string().optional(), instagram: z.string().optional(), linkedin: z.string().optional(), x: z.string().optional() }).optional(),
    fundacion: z.number().optional(),
    /* Texto editorial de la ficha, en párrafos separados por línea en blanco.
       Sólo para fichas verificadas contra fuente propia: sustituye al párrafo
       auto-generado del template, que es un relleno derivado del DENUE. */
    descripcion: z.string().optional(),
    /* Bloques de la ficha VIP (plan destacado). Todo opcional y todo declarado
       por la empresa contra su propia fuente: servicios en cards, líneas en
       tabla comparativa, proceso de atención, condiciones comerciales,
       sectores y preguntas frecuentes. La plantilla sólo pinta lo que existe. */
    vip: z.object({
      servicios: z.array(z.object({
        titulo: z.string(),
        descripcion: z.string(),
        incluye: z.array(z.string()).default([]),
        entregable: z.string().optional(),
      })).default([]),
      lineas: z.array(z.object({
        nombre: z.string(),
        /* Card estilo catálogo: foto, bajada de una línea y enlace a la página
           de la línea en el sitio de la empresa (sólo se publica en VIP). */
        subtitulo: z.string().optional(),
        imagen: z.string().optional(),
        imagenAlt: z.string().optional(),
        url: z.string().optional(),
        /* Slug de la página interna de la línea (colección `lineas`). Si existe,
           el botón de la card apunta adentro del directorio y el sitio de la
           empresa queda como enlace secundario. */
        pagina: z.string().optional(),
        familias: z.array(z.string()).default([]),
        rango: z.string().optional(),
        materiales: z.string().optional(),
        certificaciones: z.string().optional(),
        normas: z.string().optional(),
        modelos: z.string().optional(),
      })).default([]),
      criterios: z.array(z.object({ titulo: z.string(), descripcion: z.string() })).default([]),
      proceso: z.array(z.object({ paso: z.string(), descripcion: z.string() })).default([]),
      condiciones: z.array(z.object({ concepto: z.string(), detalle: z.string() })).default([]),
      sectores: z.array(z.string()).default([]),
      faq: z.array(z.object({ pregunta: z.string(), respuesta: z.string() })).default([]),
    }).optional(),
    fuentes: z.array(z.union([z.string(), z.object({ nombre: z.string(), url: z.string() })])).min(1),
    denueId: z.string().optional(),
    verificadoEl: z.string().optional(),
    confianza: z.enum(['alta', 'media', 'baja']),
    plan: z.enum(['basico', 'verificado', 'destacado']).default('basico'),
    reclamadaEl: z.string().optional(),
    activa: z.boolean().default(true),
  }),
});

/**
 * Directorio nacional de estaciones de bomberos — un archivo por ESTACIÓN FÍSICA
 * en src/content/estaciones/<estado>/<slug>.md (decisión de Frank 2026-09-04:
 * la unidad del registro es el cuartel, no la corporación).
 *
 * El esquema es el gate del estándar mínimo publicable:
 *   · `fuentes.min(1)`  → imposible publicar una estación sin fuente citada
 *   · `coordenadas.precision` OBLIGATORIO → nunca más un punto que aparenta ser
 *     exacto sin serlo (88 fichas compartían coordenada con otra)
 *   · `serviciosDetalle.min(1)` conserva el texto de la fuente; `servicios`
 *     es la capacidad derivada del vocabulario controlado
 */
const tipoEstacionEnum = z.enum(['Municipal', 'Estatal', 'Industrial', 'Aeropuerto', 'PEMEX', 'CFE', 'Voluntarios']);
const capacidadEnum = z.enum([
  'incendios-estructurales', 'incendios-vehiculares', 'incendios-forestales',
  'rescate-vehicular', 'rescate-altura', 'rescate-acuatico', 'espacios-confinados',
  'hazmat', 'fugas-gas', 'atencion-prehospitalaria', 'enjambres-fauna',
  'proteccion-civil', 'capacitacion', 'arff',
]);

const estacionesCollection = defineCollection({
  // Mismo generateId que empresas: el id es <estado>/<slug>. Sin esto, dos
  // estaciones con el mismo slug en estados distintos se pisarían.
  loader: glob({ pattern: '**/*.md', base: './src/content/estaciones', generateId: ({ entry }) => entry.replace(/\.md$/, '') }),
  schema: z.object({
    id: z.string(),
    nombre: z.string(),
    slug: z.string(),
    estado: z.string(),
    estadoNombre: z.string(),
    ciudad: z.string(),
    municipio: z.string(),
    tipo: tipoEstacionEnum,
    /* ── Corporación a la que pertenece el cuartel ── */
    corporacion: z.string(),
    corporacionSlug: z.string(),
    rolEstacion: z.enum(['central', 'subestacion', 'unica']).default('unica'),
    numeroEstacion: z.string().optional(),
    /* ── Ubicación ── */
    direccion: z.string().optional(),
    coordenadas: z.object({
      lat: z.number(),
      lng: z.number(),
      precision: z.enum(['exacta', 'aproximada']),
    }),
    /* ── Contacto ── */
    telefono: z.string().optional(),
    telefonosAdicionales: z.array(z.string()).default([]),
    email: z.string().optional(),
    sitioWeb: z.string().optional(),
    redes: z.object({
      facebook: z.string().optional(),
      instagram: z.string().optional(),
      x: z.string().optional(),
      twitter: z.string().optional(),
    }).optional(),
    operador: z.string().optional(),
    /* ── Operación ── */
    servicios: z.array(capacidadEnum).default([]),
    serviciosDetalle: z.array(z.string()).min(1),
    certificaciones: z.array(z.string()).default([]),
    elementos: z.number().optional(),
    estacionesFisicas: z.number().optional(),
    unidades: z.number().optional(),
    fundacion: z.number().optional(),
    descripcion: z.string().optional(),
    /* ── Trazabilidad ── */
    fuentes: z.array(z.object({ nombre: z.string(), url: z.string() })).min(1),
    verificadoEl: z.string(),
    confianza: z.enum(['alta', 'media', 'baja']),
    activa: z.boolean().default(true),
  }),
});

/**
 * Páginas de línea de producto de una empresa VIP — nivel L5 del directorio:
 * /empresas/<giro>/<estado>/<empresa>/<linea>/
 *
 * Una página por línea y empresa, anclada a UNA plaza (`estado`): las fichas
 * hermanas de la misma empresa enlazan a la misma URL en vez de duplicarla.
 * `fuentes.min(1)` y `urlEmpresa` obligatorios: todo lo publicado es trazable
 * al sitio de la empresa. Sólo se generan para fichas con `plan: destacado`.
 */
const lineasCollection = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/lineas', generateId: ({ entry }) => entry.replace(/\.md$/, '') }),
  schema: z.object({
    empresa: z.string(),
    estado: z.string(),
    giro: giroEnum,
    slug: z.string(),
    nombre: z.string(),
    subtitulo: z.string(),
    imagen: z.string().optional(),
    imagenAlt: z.string().optional(),
    /* Párrafos separados por línea en blanco: los dos primeros van al hero */
    intro: z.string(),
    /* Qué es y cuándo se especifica — prosa larga, párrafos por línea en blanco */
    contexto: z.string().optional(),
    familias: z.array(z.object({
      nombre: z.string(),
      descripcion: z.string(),
      cuando: z.string().optional(),
      modelos: z.number().optional(),
    })).default([]),
    modelos: z.array(z.object({
      modelo: z.string(),
      marca: z.string().optional(),
      familia: z.string().optional(),
      caudal: z.string().optional(),
      presion: z.string().optional(),
      material: z.string().optional(),
      certificacion: z.string().optional(),
      aplicaciones: z.string().optional(),
    })).default([]),
    criterios: z.array(z.object({ titulo: z.string(), descripcion: z.string() })).default([]),
    aplicaciones: z.array(z.string()).default([]),
    normas: z.array(z.object({ norma: z.string(), alcance: z.string() })).default([]),
    datosParaCotizar: z.array(z.string()).default([]),
    faq: z.array(z.object({ pregunta: z.string(), respuesta: z.string() })).default([]),
    /* Enlaces internos editoriales: rutas del propio sitio con anchor con keyword */
    relacionados: z.array(z.object({ titulo: z.string(), url: z.string(), nota: z.string().optional() })).default([]),
    urlEmpresa: z.string(),
    fuentes: z.array(z.object({ nombre: z.string(), url: z.string() })).min(1),
    verificadoEl: z.string(),
  }),
});

export const collections = {
  blog: blogCollection,
  productos: productosCollection,
  empresas: empresasCollection,
  estaciones: estacionesCollection,
  lineas: lineasCollection,
};
