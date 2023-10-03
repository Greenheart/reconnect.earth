import { sveltekit } from '@sveltejs/kit/vite'
import { defineConfig } from 'vite'
import Icons from 'unplugin-icons/vite'
import purgeCSS from 'vite-plugin-tailwind-purgecss'
import { imagetools } from '@zerodevx/svelte-img/vite'

export default defineConfig({
    plugins: [
        sveltekit(),
        purgeCSS(),
        imagetools(),
        Icons({
            compiler: 'svelte',
        }),
    ],
})
