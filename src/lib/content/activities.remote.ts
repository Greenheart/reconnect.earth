import { prerender } from '$app/server'

import { ActivityFrontmatterSchema } from '#lib/content/schemas.js'
import { parseEntries } from '#lib/content/parse-entries.js'

export const getActivities = prerender(async () => {
  const rawActivities = import.meta.glob('/src/data/activities/*.md', {
    eager: true,
    query: '?raw',
    import: 'default',
  })

  const activities = await parseEntries({
    entries: rawActivities,
    getSlugFromFilepath: (filepath) =>
      filepath.replace('/src/data/activities/', '').replace('.md', ''),
    frontmatterSchema: ActivityFrontmatterSchema,
  })

  return activities
})
