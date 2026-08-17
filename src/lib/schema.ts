import { z } from 'zod'

import { generateSlug } from './content-utils.ts'
import { tags } from './server/content.ts'

export const TagValidation = {
  label: { max: 50 },
  kind: { topic: 'topic', 'media-type': 'media-type' },
} as const

export const TagSchema = z.object({
  label: z.string().trim().max(TagValidation.label.max),
  kind: z.enum(Object.keys(TagValidation.kind)),
})

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
    .array(z.enum([...tags.MEDIA_TYPES, ...tags.TOPICS]))
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
  name: z.codec(
    z.object({ name: z.string().max(AppValidation.name.max), slug: z.string() }),
    z.string(),
    {
      decode: ({ name }) => name,
      encode: (name) => {
        return {
          name,
          slug: generateSlug(name),
        }
      },
    },
  ),
  description: z.string().max(AppValidation.description.max),
  // We use the string field to allow internal links hosted on the same domain.
  link: z.string(),
  git: z.url(),
  image: z.string(),
})

export type App = z.infer<typeof AppSchema>
