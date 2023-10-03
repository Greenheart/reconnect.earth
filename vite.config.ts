import { sveltekit } from '@sveltejs/kit/vite'
import { defineConfig } from 'vite'
import Icons from 'unplugin-icons/vite'
import purgeCSS from 'vite-plugin-tailwind-purgecss'
import { imagetools } from '@zerodevx/svelte-img/vite'
import basicSsl from '@vitejs/plugin-basic-ssl'
import { setDefaultResultOrder } from 'dns'

setDefaultResultOrder('verbatim')

export default defineConfig({
    plugins: [
        sveltekit(),
        purgeCSS(),
        imagetools(),
        basicSsl(),
        Icons({
            compiler: 'svelte',
        }),
    ],
})
