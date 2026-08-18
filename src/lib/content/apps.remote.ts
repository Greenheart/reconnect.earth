import { z } from 'zod'
import { readFile } from 'node:fs/promises'
import { prerender } from '$app/server'

import { AppSchema } from '#lib/content/schemas.js'

export const getApps = prerender(z.void(), async () => {
  const rawApps = JSON.parse(await readFile('#data/apps.json', 'utf-8'))
  // The actual data format used by the CMS is slightly different
  // to allow customizing the CMS UI.
  return z.object({ apps: z.array(AppSchema) }).parse(rawApps).apps
})
