import { z } from 'zod'

import { TagValidation, ResourceValidation, AppValidation } from '#lib/content/constants.js'
import { generateSlug } from '#lib/content-utils.js'

export const TagSchema = z.object({
  label: z.string().trim().max(TagValidation.label.max),
  kind: z.enum(Object.keys(TagValidation.kind)),
})

export const ResourceSchema = z.object({
  title: z.string().max(ResourceValidation.title.max),
  description: z.string().max(ResourceValidation.description.max),
  link: z.url(),
  tags: z.array(z.string()).min(ResourceValidation.tags.min).max(ResourceValidation.tags.max),
  featured: z.boolean().default(false),
  quality: z.int().min(ResourceValidation.quality.min).max(ResourceValidation.quality.max),
})

export type Resource = z.infer<typeof ResourceSchema>

export const AppSchema = z.object({
  name: z.string().max(AppValidation.name.max),
  description: z.string().max(AppValidation.description.max),
  // We use the string field to allow internal links hosted on the same domain.
  link: z.string(),
  git: z.url(),
  image: z.string(),
})

export type App = z.infer<typeof AppSchema>
