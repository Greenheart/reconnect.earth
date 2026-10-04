import { sveltekit } from '@sveltejs/kit/vite'
import { defineConfig } from 'vite'
import { enhancedImages } from '@sveltejs/enhanced-img'
import adapter from '@sveltejs/adapter-static'
import tailwindcss from '@tailwindcss/vite'
import { cn } from 'cn/vite'

import { DEV_ONLY_ROUTES } from '#lib/server/config.js'

export default defineConfig({
  plugins: [
    tailwindcss(),
    cn({ out: 'src/lib/cn-tables.ts' }),
    enhancedImages(), // Must be initiated before the SvelteKit plugin
    sveltekit({
      adapter: adapter(),
      experimental: {
        remoteFunctions: true,
      },
      compilerOptions: {
        // Force runes mode for the project, except for libraries. Can be removed in Svelte 6.
        runes: ({ filename }) =>
          filename.split(/[/\\]/).includes('node_modules') ? undefined : true,

        experimental: {
          async: true,
        },
      },
      prerender: {
        handleHttpError: ({ path, message }) => {
          // Ignore errors for dev only routes that should not be prerendered
          if (DEV_ONLY_ROUTES.has(path)) {
            return
          }
          throw new Error(message)
        },
        handleUnseenRoutes: ({ routes }) => {
          // Only keep routes that we have not explicitly excluded
          const unseenRoutes = routes.filter((routeId) => !DEV_ONLY_ROUTES.has(routeId))

          if (unseenRoutes.length) {
            throw new Error('Unseen routes', { cause: unseenRoutes })
          }
        },
      },
    }),
  ],
})
