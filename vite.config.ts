import { sveltekit } from '@sveltejs/kit/vite'
import { defineConfig } from 'vite'
import { enhancedImages } from '@sveltejs/enhanced-img'
import adapter from '@sveltejs/adapter-static'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'node:path'
import { keystatic } from 'keystatic-sveltekit'

export default defineConfig({
  plugins: [
    tailwindcss(),
    enhancedImages(), // Must come before the SvelteKit plugin
    keystatic(),
    sveltekit({
      adapter: adapter(),
      alias: {
        $assets: resolve('src/assets'),
      },
    }),
  ],
})
