import { defineCollection, z } from 'astro:content';

const candidatesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    position: z.string(),
    party: z.string().optional(),
    riding: z.string().optional(),
    municipality: z.string().optional(),
    website: z.string().url().optional(),
    email: z.string().email().optional(),
    phone: z.string().optional(),
    image: z.string().optional(),
    incumbent: z.boolean().default(false),
    elected: z.boolean().default(false),
    role: z.string().optional(),
    election: z.string().optional(),
    votes: z.number().optional(),
    votePercent: z.string().optional(),
    bioSummary: z.string().optional(),
    level: z.enum(['provincial', 'municipal']).optional().default('provincial'),
  }),
});

export const collections = {
  candidates: candidatesCollection,
};