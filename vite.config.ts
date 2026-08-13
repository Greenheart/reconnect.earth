import { sveltekit } from '@sveltejs/kit/vite'
import { defineConfig } from 'vite'
import icons from 'unplugin-icons/vite'
import { enhancedImages } from '@sveltejs/enhanced-img'
import { setDefaultResultOrder } from 'dns'

setDefaultResultOrder('verbatim')

export default defineConfig({
  plugins: [
    enhancedImages(), // Must come before the SvelteKit plugin
    sveltekit(),
    icons({
      compiler: 'svelte',
    }),
  ],
})
