import { z } from 'zod'
import { RESOURCE_TYPES, RESOURCE_CATEGORIES } from './constants.ts'

export const ResourceSchema = z.object({
  title: z.string().max(125),
  description: z.string().max(500),
  link: z.url(),
  tags: z
    .array(z.enum(RESOURCE_TYPES).or(z.enum(RESOURCE_CATEGORIES)))
    .min(1)
    .max(5),
  featured: z.boolean().optional().default(false),
  quality: z.int().min(1).max(5),
})

export type Resource = z.infer<typeof ResourceSchema>

export const AppSchema = z.object({
  name: z.string().max(100),
  description: z.string().max(300),
  link: z.string(),
  git: z.url(),
  image: z.string(),
})

export type App = z.infer<typeof AppSchema>
