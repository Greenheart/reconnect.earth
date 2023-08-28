<script lang="ts">
    import { SITE_NAME } from '$lib/constants'

    import '@fontsource-variable/quicksand'
    import '@skeletonlabs/skeleton/themes/theme-skeleton.css'
    import '@skeletonlabs/skeleton/styles/skeleton.css'
    import '../app.css'
</script>

<svelte:head>
    <title>{SITE_NAME}</title>
</svelte:head>

<main class="mx-auto max-w-screen-lg mt-8 px-4">
    <header>
        <a href="/">
            <h1 class="h1 font-bold mb-8 gradient-heading">
                Reconnect to what matters
            </h1>
        </a>

        <h2 class="h2 mb-16">
            <!-- Thrive in life while contributing to a thriving future -->
            <!-- Live well while doing good in the world -->
            Thrive in life while doing good in the world
        </h2>
    </header>
    <slot />
</main>
