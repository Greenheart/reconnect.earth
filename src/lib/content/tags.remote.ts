import { z } from 'zod'
import { resolve } from 'node:path'
import { prerender } from '$app/server'
import { readdir, readFile } from 'node:fs/promises'

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

export const getTags = prerender(async (): Promise<AllTags> => {
  const tags = {
    MEDIA_TYPES: [] as string[],
    TOPICS: [] as string[],
  }
  const tagsDir = resolve('src/data/tags')

  for (const file of await readdir(tagsDir, {
    withFileTypes: false,
  })) {
    const rawTag = JSON.parse(await readFile(resolve(tagsDir, file as string), 'utf-8'))
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
})
