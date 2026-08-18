import { z } from 'zod'
import { prerender } from '$app/server'

import { getTags } from '#lib/content/tags.remote.ts'
import { getFeaturedFirst, getSortedTags } from '#lib/content-utils.ts'
import { readFile } from 'node:fs/promises'

export const ResourceValidation = {
  title: { max: 125 },
  description: { max: 500 },
  tags: { min: 1, max: 5 },
  quality: { min: 1, max: 5 },
}

const allTags = await getTags()

export const ResourceSchema = z.object({
  title: z.string().max(ResourceValidation.title.max),
  description: z.string().max(ResourceValidation.description.max),
  link: z.url(),
  tags: z
    .array(z.enum([...allTags.MEDIA_TYPES, ...allTags.TOPICS]))
    .min(ResourceValidation.tags.min)
    .max(ResourceValidation.tags.max),
  featured: z.boolean().default(false),
  quality: z.int().min(ResourceValidation.quality.min).max(ResourceValidation.quality.max),
})

export type Resource = z.infer<typeof ResourceSchema>

export const getResources = prerender(async () => {
  const rawResources = JSON.parse(await readFile('#data/resources.json', 'utf-8'))
  return (
    z
      // The actual data format used by the CMS is slightly different
      // to allow customizing the CMS UI.
      .object({ resources: z.array(ResourceSchema) })
      .parse(rawResources)
      .resources.sort(getFeaturedFirst)
      .map((resource) => {
        resource.tags = getSortedTags(resource.tags)
        return resource
      })
  )
})
