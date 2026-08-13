import { sveltekit } from '@sveltejs/kit/vite'
import { defineConfig } from 'vite'
import icons from 'unplugin-icons/vite'
import { enhancedImages } from '@sveltejs/enhanced-img'
import adapter from '@sveltejs/adapter-static'
import { resolve } from 'node:path'

export default defineConfig({
  plugins: [
    enhancedImages(), // Must come before the SvelteKit plugin

    sveltekit({
      adapter: adapter(),
      alias: {
        $components: resolve('src/components'),
        $assets: resolve('src/assets'),
      },
    }),
    icons({
      compiler: 'svelte',
    }),
  ],
})
