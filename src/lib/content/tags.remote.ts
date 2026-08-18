import { prerender } from '$app/server'

import { TagValidation } from '#lib/content/constants.js'
import { TagSchema } from '#lib/content/schemas.js'

export type AllTags = {
  MEDIA_TYPES: readonly string[]
  TOPICS: readonly string[]
}

export const getTags = prerender(async (): Promise<AllTags> => {
  const allTags = Object.values(import.meta.glob('#data/tags/*.json', { eager: true })).reduce<{
    MEDIA_TYPES: string[]
    TOPICS: string[]
  }>(
    (allTags, rawTag) => {
      const tag = TagSchema.parse(rawTag)

      if (tag.kind === TagValidation.kind.topic) {
        allTags.TOPICS.push(tag.label)
      } else if (tag.kind === TagValidation.kind['media-type']) {
        allTags.MEDIA_TYPES.push(tag.label)
      } else {
        throw new Error(`Unknown tag kind: ${JSON.stringify(tag)}`)
      }

      return allTags
    },
    { MEDIA_TYPES: [], TOPICS: [] },
  )

  return allTags
})
