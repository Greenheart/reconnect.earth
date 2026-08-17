import { z } from 'zod'
import { readFileSync, readdirSync } from 'node:fs'
import { resolve } from 'node:path'

import { ResourceSchema, AppSchema, TagSchema, TagValidation } from '../schema'
import { getFeaturedFirst, getSortedTags } from '../content-utils'

// By importing the JSON modules via Vite, we get the latest file versions as they change
import rawResources from '../../data/resources.json' with { type: 'json' }
import rawApps from '../../data/apps.json' with { type: 'json' }

function loadTags(): { MEDIA_TYPES: readonly string[]; TOPICS: readonly string[] } {
  const tags = {
    MEDIA_TYPES: [] as string[],
    TOPICS: [] as string[],
  }
  const tagsDir = resolve(import.meta.dirname, '../../data/tags')

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

// NOTE: For now we only use simple JSON files and have no need for the Keystatic Reader API.
// Let's switch to the Reader API only if and when we need advanced content types in the future.
// Another benefit of using Zod schemas for parsing rather than the Keystatic Reader API
// is that we get much more flexible parsing rules.
const CONTENT_SCHEMAS = {
  resources: z.object({ resources: z.array(ResourceSchema) }),
  apps: z.object({ apps: z.array(AppSchema) }),
}

export const resources = CONTENT_SCHEMAS.resources
  .parse(rawResources)
  .resources.sort(getFeaturedFirst)
  .map((resource) => {
    resource.tags = getSortedTags(resource.tags)
    return resource
  })

export const apps = CONTENT_SCHEMAS.apps.parse(rawApps).apps
