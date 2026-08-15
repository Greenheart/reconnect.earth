import { type Handle } from '@sveltejs/kit'
import { sequence } from '@sveltejs/kit/hooks'
import { dev } from '$app/env'

// Add your other hooks here
const hooks: Handle[] = []

// Only enable Keystatic during development
if (dev) {
  // Use dynamic imports to reduce the size of the production build.
  const config = (await import('../keystatic.config.ts')).default
  const { handleKeystatic } = await import('keystatic-sveltekit')
  hooks.push(await handleKeystatic({ config }))
}

export const handle = sequence(...hooks)
