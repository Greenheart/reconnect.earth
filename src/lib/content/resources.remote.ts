import { z } from 'zod'
import { prerender } from '$app/server'

import { getFeaturedFirst, getSortedTags } from '#lib/content-utils.js'
import { ResourceSchema } from '#lib/content/schemas.js'
import { getTags } from '#lib/content/tags.remote.js'
import rawResources from '#data/resources.json' with { type: 'json' }

export const getResources = prerender(async () => {
  const allTags = await getTags()
  return (
    z
      // The actual data format used by the CMS is slightly different
      // to allow customizing the CMS UI.
      .object({ resources: z.array(ResourceSchema) })
      .parse(rawResources)
      .resources.sort(getFeaturedFirst)
      .map((resource) => {
        resource.tags = getSortedTags(resource.tags, allTags)
        return resource
      })
  )
})
