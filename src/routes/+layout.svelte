<script lang="ts">
  import MobileNav from '#lib/components/MobileNav.svelte'
  import { Button } from '#lib/components/ui/button/index.js'

  import { GITHUB_LINK, SITE_NAME } from '#lib/constants.js'

  import '../app.css'

  let { children } = $props()

  const links = [
    { title: 'Resources', href: '/resources' },
    { title: 'Activities', href: '/#activities' },
    { title: 'Contribute', href: GITHUB_LINK },
  ]
</script>

<svelte:head>
  <title>{SITE_NAME}</title>
</svelte:head>

<nav class="xs:p-4 mx-auto flex max-w-5xl items-center justify-between p-2">
  <a href="/">
    🌍<span class="gradient-heading ml-2">{SITE_NAME}</span>
  </a>
  <ul class="hidden gap-2 md:flex">
    {#each links as { title, href }}
      <li>
        <a {href} class="anchor p-1">{title}</a>
      </li>
    {/each}
  </ul>

  <MobileNav class="md:hidden" {links} />
</nav>
<main class="mx-auto mt-8 max-w-5xl px-4 text-lg sm:text-xl">
  <header>
    <h1 class="h1 gradient-heading mb-2 text-5xl font-bold">Reconnect to what matters</h1>

    <h2 class="h3 mb-8 italic sm:mb-16">Thrive in life while doing good in the world</h2>
  </header>
  {@render children?.()}
</main>

<footer class="bg-card mt-24 p-4 text-lg">
  <div class="mx-auto max-w-2xl p-4">
    <a href="/" class="text-3xl">
      🌍<span class="gradient-heading ml-2">{SITE_NAME}</span>
    </a>
    <p class="pt-4">
      This is a free and open source project, co-created by an international community. You are
      welcome to contribute relevant resources, activities and more!
    </p>

    <div class="flex justify-center">
      <Button href={GITHUB_LINK} size="lg" class="mt-4">Get involved</Button>
    </div>

    <p class="mt-8 flex items-center justify-center gap-2 text-base">
      &copy;
      <span class="text-nowrap">2022-{new Date().getFullYear()}</span>
      <span class="text-nowrap">{SITE_NAME}</span>
    </p>
  </div>
</footer>
