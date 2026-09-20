import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.string(),
    tags: z.array(z.string()).min(1),
    pubDate: z.coerce.date(),
    featured: z.boolean().optional().default(false),
  }),
});

export const collections = { blog };
