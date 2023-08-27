import { z } from 'zod'
import { RESOURCE_TYPES, RESOURCE_CATEGORIES } from './constants'

export const ResourceSchema = z.object({
    title: z.string(),
    description: z.string().max(300).optional(),
    link: z.string().url(),
    tags: z.array(z.enum(RESOURCE_TYPES).or(z.enum(RESOURCE_CATEGORIES))),
    featured: z.boolean().optional().default(false),
    quality: z.number().min(1).max(5),
})

export type Resource = z.infer<typeof ResourceSchema>
