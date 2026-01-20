import { defineCollection, z } from 'astro:content';

const candidatesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    position: z.string(),
    party: z.string().optional(),
    website: z.string().url().optional(),
    email: z.string().email().optional(),
    phone: z.string().optional(),
    image: z.string().optional(),
    order: z.number().optional(),
  }),
});

export const collections = {
  candidates: candidatesCollection,
};