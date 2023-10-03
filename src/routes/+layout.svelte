<script lang="ts">
    import { GITHUB_LINK, SITE_NAME } from '$lib/constants'

    import '@fontsource-variable/quicksand'
    import '../app.css'
</script>

<svelte:head>
    <title>{SITE_NAME}</title>
</svelte:head>

<main class="mx-auto max-w-screen-lg mt-8 px-4 text-lg sm:text-xl">
    <header>
        <a href="/">
            <h1 class="h1 font-bold mb-8 gradient-heading">
                Reconnect to what matters
            </h1>
        </a>

        <h2 class="h2 mb-8 sm:mb-16">
            Thrive in life while doing good in the world
        </h2>
    </header>
    <slot />
</main>

<footer class="p-4 max-w-screen-md mx-auto px-4 mt-8 text-lg sm:text-xl">
    <p class="pt-4">
        Reconnect.earth is a free and open source project, co-created by the
        community.
    </p>
    <p><a href={GITHUB_LINK} class="link">Welcome to get involved!</a></p>
</footer>
