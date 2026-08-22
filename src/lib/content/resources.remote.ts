import { z } from 'zod'
import { prerender } from '$app/server'

import { sortFeaturedFirst, getSortedTags } from '#lib/content-utils.js'
import { ResourceSchema } from '#lib/content/schemas.js'
import { getTags } from '#lib/content/tags.remote.js'

const resources = z
  .array(ResourceSchema)
  .parse(Object.values(import.meta.glob('/src/data/resources/*.json', { eager: true })))
  .sort(sortFeaturedFirst)

export const getResources = prerender(async () => {
  const allTags = await getTags()
  const combinedTags = [...allTags.MEDIA_TYPES, ...allTags.TOPICS]

  return resources.map((resource) => {
    resource.tags = resource.tags.map((tagSlug) => {
      const tag = combinedTags.find((tag) => tagSlug === tag.toLowerCase())
      if (!tag) throw new Error(`Invalid tag: "${tagSlug}" in resource ${resource.title}`)
      return tag
    })
    resource.tags = getSortedTags(resource.tags, allTags)
    return resource
  })
})
