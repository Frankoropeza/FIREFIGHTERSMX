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
const giroEnum = z.enum(['venta-equipo', 'extintores', 'sistemas-ci', 'capacitacion']);

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
    fuentes: z.array(z.union([z.string(), z.object({ nombre: z.string(), url: z.string() })])).min(1),
    denueId: z.string().optional(),
    verificadoEl: z.string().optional(),
    confianza: z.enum(['alta', 'media', 'baja']),
    plan: z.enum(['basico', 'verificado', 'destacado']).default('basico'),
    reclamadaEl: z.string().optional(),
    activa: z.boolean().default(true),
  }),
});

export const collections = {
  blog: blogCollection,
  productos: productosCollection,
  empresas: empresasCollection,
};
