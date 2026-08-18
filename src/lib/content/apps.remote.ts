import { z } from 'zod'
import { readFile } from 'node:fs/promises'
import { prerender } from '$app/server'

import { generateSlug } from '#lib/content-utils.ts'

// TODO: The error indicates that the import is not working
// However, the hidden cause is probably a circular import or similar.
// We likely need to clearly separate data loading from other cases
//
// IDEA: Maybe we can use async zod transforms to load the actual tags for validating the resources
// https://zod.dev/api?id=transform#transform
//
// Or maybe avoid using tags in resource schema
//
// IDEA: Either attempt to create a minimal reproduction.
// Or just downgrade to SvelteKit 2 until the problem is fixed.

export const AppValidation = {
  name: { max: 100 },
  description: { max: 300 },
}

export const AppSchema = z.object({
  name: z.codec(
    z.object({ name: z.string().max(AppValidation.name.max), slug: z.string() }),
    z.string(),
    {
      decode: ({ name }) => name,
      encode: (name) => {
        return {
          name,
          slug: generateSlug(name),
        }
      },
    },
  ),
  description: z.string().max(AppValidation.description.max),
  // We use the string field to allow internal links hosted on the same domain.
  link: z.string(),
  git: z.url(),
  image: z.string(),
})

export type App = z.infer<typeof AppSchema>

export const getApps = prerender(async () => {
  const rawApps = JSON.parse(await readFile('#data/apps.json', 'utf-8'))
  // The actual data format used by the CMS is slightly different
  // to allow customizing the CMS UI.
  return z.object({ apps: z.array(AppSchema) }).parse(rawApps).apps
})
