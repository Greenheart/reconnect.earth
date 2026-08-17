import { z } from 'zod'

import rawResources from '../../../data/resources.json' with { type: 'json' }
import { tags } from './tags.ts'
import { getFeaturedFirst, getSortedTags } from '../../content-utils.ts'

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

export const resources = z
  // The actual data format used by the CMS is slightly different
  // to allow customizing the CMS UI.
  .object({ resources: z.array(ResourceSchema) })
  .parse(rawResources)
  .resources.sort(getFeaturedFirst)
  .map((resource) => {
    resource.tags = getSortedTags(resource.tags)
    return resource
  })

export type Resource = z.infer<typeof ResourceSchema>
