<script lang="ts">
    import { Drawer, initializeStores } from '@skeletonlabs/skeleton'
    import { GITHUB_LINK, SITE_NAME } from '$lib/constants'

    import '@fontsource-variable/quicksand'
    import '../app.css'

    initializeStores()
</script>

<svelte:head>
    <title>{SITE_NAME}</title>
</svelte:head>

<nav class="flex justify-between p-4">
    <a href="/">
        🌍<span class="ml-2 gradient-heading">{SITE_NAME}</span>
    </a>
    <ul class="flex gap-2">
        <li>
            <a href="/resources" class="anchor p-2">Resources</a>
        </li>
        <li>
            <a href="/#activities" class="anchor p-2">Activities</a>
        </li>
    </ul>
</nav>
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
    <p><a href={GITHUB_LINK} class="anchor">Welcome to get involved!</a></p>
</footer>

<Drawer />
