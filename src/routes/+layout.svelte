<script lang="ts">
  import { Drawer, initializeStores, getDrawerStore } from '@skeletonlabs/skeleton'
  import HeroiconsBars3BottomRight from '~icons/heroicons/bars-3-bottom-right'
  import HeroiconsXMark from '~icons/heroicons/x-mark'

  import { GITHUB_LINK, SITE_NAME } from '$lib/constants'

  import '@fontsource-variable/quicksand'
  import '../app.css'

  let { children } = $props()

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

<!-- IDEA: add bg color so the header is clearly separated from the page content -->
<nav class="mx-auto flex max-w-screen-lg items-center justify-between px-4 py-2 xs:p-4">
  <a href="/">
    🌍<span class="ml-2 gradient-heading">{SITE_NAME}</span>
  </a>
  <ul class="hidden gap-2 xs:flex">
    <li>
      <a href="/resources" class="anchor p-1">Resources</a>
    </li>
    <li>
      <a href="/#activities" class="anchor p-1">Activities</a>
    </li>
  </ul>
  <button class="btn px-0 text-lg xs:hidden" onclick={toggleDrawer}>
    <span><HeroiconsBars3BottomRight /></span>
    <span>Menu</span>
  </button>
</nav>
<main class="mx-auto mt-8 max-w-screen-lg px-4 text-lg sm:text-xl">
  <header>
    <h1 class="h1 mb-4 font-bold gradient-heading">Reconnect to what matters</h1>

    <h2 class="h2 mb-8 sm:mb-16">Thrive in life while doing good in the world</h2>
  </header>
  {@render children?.()}
</main>

<footer class="mx-auto mt-8 max-w-screen-md p-4 px-4 text-lg sm:text-xl">
  <p class="pt-4">
    Reconnect.earth is a free and open source project, co-created by the community.
  </p>
  <p><a href={GITHUB_LINK} class="anchor">Welcome to get involved!</a></p>
</footer>

<Drawer>
  {#if $drawerStore.id === 'mobile-menu'}
    <div class="mt-0.5 flex justify-end p-2">
      <button class="p-2 pl-8" onclick={() => drawerStore.close()}>
        <span><HeroiconsXMark class="h-8 w-8" /></span>
      </button>
    </div>
    <div class="grid gap-2 text-center">
      <a href="/resources" class="anchor p-2" onclickcapture={() => drawerStore.close()}
        >Resources</a
      >
      <a href="/#activities" class="anchor p-2" onclickcapture={() => drawerStore.close()}
        >Activities</a
      >
    </div>
  {/if}
</Drawer>
