import { z } from 'zod'
import { RESOURCE_TYPES, RESOURCE_CATEGORIES } from './constants.ts'

export const ResourceValidation = {
  title: { max: 125 },
  description: { max: 500 },
  tags: { min: 1, max: 5 },
  quality: { min: 1, max: 5 },
}

export const ResourceSchema = z.object({
  title: z.string().max(ResourceValidation.title.max),
  description: z.string().max(ResourceValidation.description.max),
  link: z.url(),
  tags: z
    .array(z.enum(RESOURCE_TYPES).or(z.enum(RESOURCE_CATEGORIES)))
    .min(ResourceValidation.tags.min)
    .max(ResourceValidation.tags.max),
  featured: z.boolean().default(false),
  quality: z.int().min(ResourceValidation.quality.min).max(ResourceValidation.quality.max),
})

export type Resource = z.infer<typeof ResourceSchema>

export const AppValidation = {
  name: { max: 100 },
  description: { max: 300 },
}

export const AppSchema = z.object({
  name: z.string().max(AppValidation.name.max),
  description: z.string().max(AppValidation.description.max),
  link: z.string(),
  git: z.url(),
  image: z.string(),
})

export type App = z.infer<typeof AppSchema>
