import { z } from 'zod'
import { RESOURCE_TYPES, RESOURCE_CATEGORIES } from './constants'

export const ResourceSchema = z.object({
    title: z.string(),
    description: z.string().max(300).optional(),
    link: z.string().url(),
    tags: z
        .array(z.enum(RESOURCE_TYPES).or(z.enum(RESOURCE_CATEGORIES)))
        .min(1)
        .max(5),
    featured: z.boolean().optional().default(false),
    quality: z.number().min(1).max(5),
})

export type Resource = z.infer<typeof ResourceSchema>

export const AppSchema = z.object({
    name: z.string(),
    description: z.string().max(300),
    link: z.string(),
    git: z.string().url(),
})

export type App = z.infer<typeof AppSchema>
