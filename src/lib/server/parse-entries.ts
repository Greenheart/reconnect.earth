import { z } from 'zod'
import { parseMarkdown } from '@comark/svelte/parse'

/**
 * Parse a collection of Markdown `entries` into Comark `MarkdownDocument`s
 * that can be rendered with the `@comark/svelte` renderer.
 *
 * The main benefit of parsing up front is that this allows us to avoid shipping
 * a full Markdown parser to the client. It also speeds up rendering and replaces duplicate
 * parsing for every client with one single parser execution per content entry.
 *
 * The parsing also performs two additional steps:
 * 1. File paths are transformed into slugs that can be used for URLs
 * 2. The frontmatter of each entry is parsed to ensure it matches the provided schema.
 *
 * @returns A map of slugs and `MarkdownDocument`s.
 */
export async function parseEntries<T extends Record<string, string>, F extends z.ZodType>({
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
