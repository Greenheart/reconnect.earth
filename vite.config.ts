import { sveltekit } from '@sveltejs/kit/vite'
import { defineConfig } from 'vite'
import { enhancedImages } from '@sveltejs/enhanced-img'
import adapter from '@sveltejs/adapter-static'
import tailwindcss from '@tailwindcss/vite'

const dev = process.env.NODE_ENV === 'development'

export default defineConfig({
  plugins: [
    tailwindcss(),
    enhancedImages(), // Must come before the SvelteKit plugin
    dev && (await import('keystatic-sveltekit')).keystatic(),
    sveltekit({
      adapter: adapter(),
      experimental: {
        remoteFunctions: true,
      },
      compilerOptions: {
        experimental: {
          async: true,
        },
      },
    }),
  ],
})
