<script lang="ts">
  import { Drawer, initializeStores, getDrawerStore } from '@skeletonlabs/skeleton'
  import HeroiconsBars3BottomRight from '~icons/heroicons/bars-3-bottom-right'
  import HeroiconsXMark from '~icons/heroicons/x-mark'

  import { GITHUB_LINK, SITE_NAME } from '$lib/constants'

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
<nav class="xs:p-4 mx-auto flex max-w-5xl items-center justify-between px-4 py-2">
  <a href="/">
    🌍<span class="gradient-heading ml-2">{SITE_NAME}</span>
  </a>
  <ul class="xs:flex hidden gap-2">
    <li>
      <a href="/resources" class="anchor p-1">Resources</a>
    </li>
    <li>
      <a href="/#activities" class="anchor p-1">Activities</a>
    </li>
  </ul>
  <button class="btn xs:hidden px-0 text-lg" onclick={toggleDrawer}>
    <span><HeroiconsBars3BottomRight /></span>
    <span>Menu</span>
  </button>
</nav>
<main class="mx-auto mt-8 max-w-5xl px-4 text-lg sm:text-xl">
  <header>
    <h1 class="h1 gradient-heading mb-4 font-bold">Reconnect to what matters</h1>

    <h2 class="h2 mb-8 sm:mb-16">Thrive in life while doing good in the world</h2>
  </header>
  {@render children?.()}
</main>

<footer class="mx-auto mt-8 max-w-3xl p-4 px-4 text-lg sm:text-xl">
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
