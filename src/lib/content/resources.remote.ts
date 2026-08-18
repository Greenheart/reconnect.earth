import { z } from 'zod'
import { prerender } from '$app/server'
import { readFile } from 'node:fs/promises'

import { getFeaturedFirst, getSortedTags } from '#lib/content-utils.js'
import { ResourceSchema } from '#lib/content/schemas.js'
import { getTags } from './tags.remote'

export const getResources = prerender(z.void(), async () => {
  const rawResources = JSON.parse(await readFile('#data/resources.json', 'utf-8'))
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
