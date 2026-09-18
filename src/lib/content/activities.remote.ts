import { z } from 'zod'
import { parseMarkdown } from '@comark/svelte/parse'
import { prerender } from '$app/server'

import { ActivityFrontmatterSchema } from '#lib/content/schemas.js'

async function parseEntries<T extends Record<string, string>, F extends z.ZodType>({
  entries,
  getSlugFromFilepath,
  frontmatterSchema,
}: {
  entries: T
  getSlugFromFilepath: (filepath: string) => string
  frontmatterSchema: F
}) {
  const parsedEntries = await Promise.all(
    Object.entries(entries).map(async ([filepath, content]) => {
      const entry = await parseMarkdown(content)
      return [
        getSlugFromFilepath(filepath),
        { ...entry, frontmatter: frontmatterSchema.parse(entry.frontmatter) },
      ] as const
    }),
  )

  return Object.fromEntries(parsedEntries) as Record<string, (typeof parsedEntries)[number][1]>
}

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
