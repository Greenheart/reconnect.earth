import { z } from 'zod'

import { ResourceSchema, type Resource, AppSchema, type App } from '../schema'
import { getFeaturedFirst, getSortedTags } from '../content-utils'

/**
 * By importing via `import.meta.glob()` (and by checking for changes during every request),
 * we can refresh content without restarting the dev server.
 */
const allContent = Object.entries(import.meta.glob('/src/data/*.json')).reduce<
  Record<string, () => Promise<{ default: unknown }>>
>((rawContent, [path, load]) => {
  const slug = path.replace('/src/data/', '').replace(/\.json$/, '')
  rawContent[slug] = load as () => Promise<{ default: unknown }>
  return rawContent
}, {})

// NOTE: For now we only use simple JSON files and have no need for the Keystatic Reader API.
// Let's switch to the Reader API only if and when we need advanced content types in the future.
// Another benefit of using Zod schemas for parsing rather than the Keystatic Reader API
// is that we get much more flexible parsing rules.
const CONTENT_SCHEMAS = {
  resources: z.object({ resources: z.array(ResourceSchema) }),
  apps: z.object({ apps: z.array(AppSchema) }),
}

export async function getResources(): Promise<Resource[]> {
  const raw = (await allContent.resources()).default
  return CONTENT_SCHEMAS.resources
    .parse(raw)
    .resources.sort(getFeaturedFirst)
    .map((resource) => {
      resource.tags = getSortedTags(resource.tags)
      return resource
    })
}

export async function getApps(): Promise<App[]> {
  const raw = (await allContent.apps()).default
  return CONTENT_SCHEMAS.apps.parse(raw).apps
}
