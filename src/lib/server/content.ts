import { z } from 'zod'
import { readFile } from 'node:fs/promises'
import { resolve } from 'node:path'

import { ResourceSchema, type Resource, AppSchema, type App } from '../schema'
import { getFeaturedFirst, getSortedTags } from '../content-utils'

async function readJSON(path: string) {
  return await readFile(path, { encoding: 'utf-8' }).then(JSON.parse)
}

const rawResources = await readJSON(resolve('./src/data/resources.json'))
const rawApps = await readJSON(resolve('./src/data/apps.json'))

// NOTE: For now we only use simple JSON files and have no need for the Keystatic Reader API.
// Let's switch to the Reader API only if and when we need advanced content types in the future.
export const resources: Resource[] = z
  .object({
    resources: z.array(ResourceSchema),
  })
  .parse(rawResources)
  .resources.sort(getFeaturedFirst)
  .map((resource) => {
    resource.tags = getSortedTags(resource.tags)
    return resource
  })

export const apps: App[] = z.object({ apps: z.array(AppSchema) }).parse(rawApps).apps
