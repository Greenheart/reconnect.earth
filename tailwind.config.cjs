const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config}*/
const config = {
    darkMode: 'class',
    content: [
        './src/**/*.{html,js,svelte,ts}',
        require('path').join(
            require.resolve('@skeletonlabs/skeleton'),
            '../**/*.{html,js,svelte,ts}',
        ),
    ],

    theme: {
        extend: {},
    },

    plugins: [
        ...require('@skeletonlabs/skeleton/tailwind/skeleton.cjs')(),
        plugin(({ addUtilities }) => {
            addUtilities({
                '.gradient-heading': {
                    '@apply bg-gradient-to-br from-primary-500 via-primary-500 to-secondary-500 text-transparent bg-clip-text box-decoration-clone':
                        {},
                },
            })
        }),
    ],
}

module.exports = config
