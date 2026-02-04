import { sveltekit } from '@sveltejs/kit/vite'
import { defineConfig } from 'vite'
import icons from 'unplugin-icons/vite'
import purgeCSS from 'vite-plugin-tailwind-purgecss'
import { enhancedImages } from '@sveltejs/enhanced-img'
import { setDefaultResultOrder } from 'dns'

setDefaultResultOrder('verbatim')

export default defineConfig({
    plugins: [
        enhancedImages(), // Must come before the SvelteKit plugin
        sveltekit(),
        purgeCSS(),
        icons({
            compiler: 'svelte',
        }),
    ],
})
