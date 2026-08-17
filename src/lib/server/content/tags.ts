import { z } from 'zod'
import { readdirSync, readFileSync } from 'node:fs'
import { resolve } from 'node:path'

export const TagValidation = {
  label: { max: 50 },
  kind: { topic: 'topic', 'media-type': 'media-type' },
} as const

export const TagSchema = z.object({
  label: z.string().trim().max(TagValidation.label.max),
  kind: z.enum(Object.keys(TagValidation.kind)),
})

export type AllTags = {
  MEDIA_TYPES: readonly string[]
  TOPICS: readonly string[]
}

function loadTags(): AllTags {
  const tags = {
    MEDIA_TYPES: [] as string[],
    TOPICS: [] as string[],
  }
  const tagsDir = resolve(import.meta.dirname, '../../../data/tags')

  for (const file of readdirSync(tagsDir, {
    withFileTypes: false,
  })) {
    const rawTag = JSON.parse(readFileSync(resolve(tagsDir, file as string), 'utf-8'))
    const tag = TagSchema.parse(rawTag)

    if (tag.kind === TagValidation.kind.topic) {
      tags.TOPICS.push(tag.label)
    } else if (tag.kind === TagValidation.kind['media-type']) {
      tags.MEDIA_TYPES.push(tag.label)
    } else {
      throw new Error(`Unknown tag kind: ${JSON.stringify(tag)}`)
    }
  }

  return tags
}

export const tags = loadTags()
