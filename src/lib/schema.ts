import { z } from 'zod'

export const ResourceSchema = z.object({
    title: z.string(),
    description: z.string().max(300).optional(),
    link: z.string().url(),
    tags: z.array(z.string()),
    featured: z.boolean().optional().default(false),
    quality: z.number().min(1).max(5),
})

export type Resource = z.infer<typeof ResourceSchema>
