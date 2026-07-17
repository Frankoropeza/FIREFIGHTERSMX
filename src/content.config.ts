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

export const collections = {
  blog: blogCollection,
  productos: productosCollection,
};
