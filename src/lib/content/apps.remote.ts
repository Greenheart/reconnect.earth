import { z } from 'zod'
import { prerender } from '$app/server'

import { AppSchema } from '#lib/content/schemas.js'
import rawApps from '#data/apps.json' with { type: 'json' }

export const getApps = prerender(async () => {
  // The actual data format used by the CMS is slightly different
  // to allow customizing the CMS UI.
  return z.object({ apps: z.array(AppSchema) }).parse(rawApps).apps
})
