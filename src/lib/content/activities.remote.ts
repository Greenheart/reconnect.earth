import { prerender } from '$app/server'
import { basename } from 'node:path'

import { ActivityFrontmatterSchema } from '#lib/content/schemas.js'
import { parseEntries } from '#lib/server/parse-entries.js'

export const getActivities = prerender(async () => {
  const rawActivities = import.meta.glob('/src/data/activities/*.md', {
    eager: true,
    query: '?raw',
    import: 'default',
  })

  const activities = await parseEntries({
    entries: rawActivities,
    getSlugFromFilepath: (filepath) => basename(filepath, '.md'),
    frontmatterSchema: ActivityFrontmatterSchema,
  })

  return activities
})
