import { sveltekit } from '@sveltejs/kit/vite'
import { defineConfig } from 'vite'
import { enhancedImages } from '@sveltejs/enhanced-img'
import adapter from '@sveltejs/adapter-static'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss(),
    enhancedImages(), // Must come before the SvelteKit plugin
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
        handleHttpError: ({ path, message, status }) => {
          console.dir({ handleHTTPERROR: 1, path, message, status })
          if (status === 403) {
            return
          }
          throw new Error(message)
        },
        handleUnseenRoutes: ({ routes, message }) => {
          console.dir({ routes, message })
        },
      },
    }),
  ],
})
