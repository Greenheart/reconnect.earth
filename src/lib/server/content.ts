import { z } from 'zod'

import { ResourceSchema, type Resource, AppSchema, type App } from '../schema'
import { getFeaturedFirst, getSortedTags } from '../content-utils'

// By importing the JSON modules via Vite, we get the latest file versions as they change
import rawResources from '../../data/resources.json' with { type: 'json' }
import rawApps from '../../data/apps.json' with { type: 'json' }

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
