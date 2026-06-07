import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    title_en: z.string().optional(),
    author: z.string().optional(),
    members: z.array(z.string()).optional(),
    faculty: z.string().optional(),
    course: z.string().optional(),
    course_code: z.string().optional(),
    level: z.string().optional(),
    students: z.string().optional(),
    year: z.union([z.string(), z.number()]).optional(),
    category: z.string().optional(),
    innovation_type: z.string().optional(),
    status: z.enum(['actif', 'archivé', 'supprimé']).default('actif'),
    description_short: z.string().optional(),
    description_short_en: z.string().optional(),
    youtube: z.string().optional(),
    images: z.array(z.string()).optional(),
    observation_accepted: z.boolean().default(false),
    award: z.string().optional(),
    award_year: z.string().optional(),
    featured: z.boolean().default(false),
    url: z.string().optional(),
    published: z.coerce.date().optional(),
    updated: z.coerce.date().optional(),
  }),
});

const team = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    role: z.string(),
    service: z.string().optional(),
    platform_role: z.string().optional(),
    email: z.string().optional(),
    photo: z.string().optional(),
    order: z.number().default(99),
  }),
});

const pages = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    title_en: z.string().optional(),
    description: z.string().optional(),
  }),
});

export const collections = { projects, team, pages };
