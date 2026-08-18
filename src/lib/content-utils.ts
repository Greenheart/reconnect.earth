import slugify from '@sindresorhus/slugify'

import { getTags } from '#lib/content/tags.remote.js'
import type { Resource } from '#lib/content/resources.remote.js'

const allTags = await getTags()

export const getSortedTags = (tags: string[]) => {
  return tags.sort((a, b) => {
    let scoreA = 0
    let scoreB = 0

    // Ensure media types appear first
    if (allTags.MEDIA_TYPES.includes(a)) {
      scoreA += 100
    }
    if (allTags.MEDIA_TYPES.includes(b)) {
      scoreB += 100
    }

    return scoreB - scoreA
  }) as Resource['tags']
}

export const getFeaturedFirst = (a: Resource, b: Resource) => {
  // 1. Sort by quality (1-5)
  let scoreA = a.quality
  let scoreB = b.quality

  // 2. Give higher priority to featured items
  if (a.featured) scoreA += 100
  if (b.featured) scoreB += 100

  return scoreB - scoreA
}

export function generateSlug(name: string) {
  return slugify(name, {
    customReplacements: [
      ['å', 'a'],
      ['ä', 'a'],
      ['ö', 'o'],
    ],
  })
}
