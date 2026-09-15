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
  const groupedTags = await getTags()
  const combinedTags = [...groupedTags.MEDIA_TYPES, ...groupedTags.TOPICS]

  return resources.map((resource) => {
    // TODO: Figure out why the tags do not match properly
    // IDEA: Maybe get combined tags as an object to make it easier to find specific tags
    resource.tags = resource.tags.map((tagSlug) => {
      const tag = combinedTags.find((tag) => tagSlug.toLowerCase() === tag.toLowerCase())
      if (!tag) {
        console.dir({ combinedTags, tagSlug })
        throw new Error(`Invalid tag: "${tagSlug}" in resource ${resource.title}`)
      }
      return tag
    })
    resource.tags = getSortedTags(resource.tags, groupedTags)
    return resource
  })
})
