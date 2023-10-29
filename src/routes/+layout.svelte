<script lang="ts">
    import {
        Drawer,
        initializeStores,
        getDrawerStore,
    } from '@skeletonlabs/skeleton'
    import HeroiconsBars3BottomRight from '~icons/heroicons/bars-3-bottom-right'
    import HeroiconsXMark from '~icons/heroicons/x-mark'

    import { GITHUB_LINK, SITE_NAME } from '$lib/constants'

    import '@fontsource-variable/quicksand'
    import '../app.css'

    initializeStores()

    const drawerStore = getDrawerStore()

    function toggleDrawer() {
        drawerStore.open({
            id: 'mobile-menu',
            position: 'right',
            width: 'w-64',
        })
    }
</script>

<svelte:head>
    <title>{SITE_NAME}</title>
</svelte:head>

<nav
    class="flex justify-between py-2 px-4 xs:p-4 items-center max-w-screen-lg mx-auto"
>
    <a href="/">
        🌍<span class="ml-2 gradient-heading">{SITE_NAME}</span>
    </a>
    <ul class="gap-2 hidden xs:flex">
        <li>
            <a href="/resources" class="anchor p-1">Resources</a>
        </li>
        <li>
            <a href="/#activities" class="anchor p-1">Activities</a>
        </li>
    </ul>
    <button class="text-lg btn xs:hidden px-0" on:click={toggleDrawer}>
        <span><HeroiconsBars3BottomRight /></span>
        <span>Menu</span>
    </button>
</nav>
<main class="mx-auto max-w-screen-lg mt-8 px-4 text-lg sm:text-xl">
    <header>
        <h1 class="h1 font-bold mb-4 gradient-heading">
            Reconnect to what matters
        </h1>

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

<Drawer>
    {#if $drawerStore.id === 'mobile-menu'}
        <div class="flex justify-end p-2 mt-0.5">
            <button class="p-2 pl-8" on:click={() => drawerStore.close()}>
                <span><HeroiconsXMark class="w-8 h-8" /></span>
            </button>
        </div>
        <div class="grid gap-2 text-center">
            <a
                href="/resources"
                class="anchor p-2"
                on:click|capture={() => drawerStore.close()}>Resources</a
            >
            <a
                href="/#activities"
                class="anchor p-2"
                on:click|capture={() => drawerStore.close()}>Activities</a
            >
        </div>
    {/if}
</Drawer>
