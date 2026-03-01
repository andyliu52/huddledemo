import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    author: z.string().default('Huddle Steel Buildings'),
    image: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

const serviceAreas = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/service-areas' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    city: z.string(),
    county: z.string(),
    state: z.string().default('Texas'),
    distance: z.string(),
  }),
});

export const collections = { blog, 'service-areas': serviceAreas };
