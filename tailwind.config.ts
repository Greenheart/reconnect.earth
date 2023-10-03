import type { Config } from 'tailwindcss'
import plugin from 'tailwindcss/plugin'
import { skeleton } from '@skeletonlabs/tw-plugin'
import { join } from 'path'

const config = {
    darkMode: 'class',
    content: [
        './src/**/*.{html,js,svelte,ts}',
        join(
            require.resolve('@skeletonlabs/skeleton'),
            '../**/*.{html,js,svelte,ts}',
        ),
    ],
    theme: {
        extend: {},
    },
    plugins: [
        require('@tailwindcss/forms'),
        plugin(({ addUtilities }) => {
            addUtilities({
                '.gradient-heading': {
                    '@apply bg-gradient-to-br from-primary-500 via-primary-500 to-secondary-500 text-transparent bg-clip-text box-decoration-clone pb-1':
                        {},
                },
                '.link': {
                    '@apply text-primary-500 underline': {},
                },
                '.divider': {
                    '@apply justify-center flex text-xs items-center text-gray-500 select-none':
                        {},
                },
            })
        }),
        skeleton({
            base: true,
            themes: { preset: ['skeleton'] },
        }),
    ],
} satisfies Config

export default config
