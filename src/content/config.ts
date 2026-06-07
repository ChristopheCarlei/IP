import { defineCollection, z } from 'astro:content';

// French projects — primary content, all metadata
const projects = defineCollection({
  type: 'content',
  schema: z.object({
    id: z.number(),
    title: z.string(),
    author: z.string().optional(),
    contact: z.string().optional(),
    faculty: z.string().optional(),
    course: z.string().optional(),
    course_code: z.union([z.string(), z.number()]).transform(v => String(v)).optional(),
    level: z.string().optional(),
    students: z.union([z.string(), z.number()]).transform(v => String(v)).optional(),
    year: z.union([z.string(), z.number()]).optional(),
    category: z.string().optional(),
    innovation_type: z.string().optional(),
    observation_accepted: z.boolean().default(false),
    description_short: z.string().optional(),
    youtube: z.string().optional(),
    photo: z.string().optional(),
    images: z.array(z.string()).optional(),
    featured: z.boolean().default(false),
    status: z.enum(['actif', 'archivé', 'supprimé']).default('actif'),
    award: z.string().optional(),
  }),
});

// English translations — matched by same slug as FR
const projects_en = defineCollection({
  type: 'content',
  schema: z.object({
    id: z.number(),
    title: z.string().optional(),
    description_short: z.string().optional(),
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

export const collections = { projects, projects_en, team, pages };
