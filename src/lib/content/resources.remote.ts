import { z } from 'zod'
import { prerender } from '$app/server'

import { getFeaturedFirst, getSortedTags } from '#lib/content-utils.js'
import { ResourceSchema } from '#lib/content/schemas.js'
import { getTags } from '#lib/content/tags.remote.js'
import rawResources from '#data/resources.json' with { type: 'json' }

export const getResources = prerender(async () => {
  const allTags = await getTags()
  const combinedTags = [...allTags.MEDIA_TYPES, ...allTags.TOPICS]
  return (
    z
      // The actual data format used by the CMS is slightly different
      // to allow customizing the CMS UI.
      .object({ resources: z.array(ResourceSchema) })
      .parse(rawResources)
      .resources.sort(getFeaturedFirst)
      .map((resource) => {
        resource.tags = resource.tags.map((tagSlug) => {
          const tag = combinedTags.find((tag) => tagSlug === tag.toLowerCase())
          if (!tag) throw new Error(`Invalid tag: "${tagSlug}" in resource ${resource.title}`)
          return tag
        })
        resource.tags = getSortedTags(resource.tags, allTags)
        return resource
      })
  )
})
