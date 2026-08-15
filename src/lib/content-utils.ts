import slugify from '@sindresorhus/slugify'

import { RESOURCE_TYPES, type ResourceType } from './constants.ts'
import type { Resource } from './schema.ts'

export const getSortedTags = (tags: string[]) => {
  return tags.sort((a, b) => {
    let scoreA = 0
    let scoreB = 0

    // Ensure ResourceType tags appear first
    if (RESOURCE_TYPES.includes(a as ResourceType)) {
      scoreA += 100
    }
    if (RESOURCE_TYPES.includes(b as ResourceType)) {
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
