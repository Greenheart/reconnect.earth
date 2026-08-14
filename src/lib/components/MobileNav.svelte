<script lang="ts">
  import HeroiconsBars3 from '~icons/heroicons/bars-3'
  import HeroiconsXMark from '~icons/heroicons/x-mark'

  import EncryptedEmail from '@/components/EncryptedEmail.svelte'
  import LocaleSwitcher from '@/components/LocaleSwitcher.svelte'
  import type { NavItem } from '@/lib/types'
  import { getNavContext } from '@/lib/context'

  type Props = {
    class?: string
    links: NavItem[]
  }
  const { class: className = '', links }: Props = $props()

  const { t } = getNavContext()

  let open = $state(false)

  $effect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
  })

  async function toggle() {
    open = !open
  }

  let mobileNavContainer: HTMLDivElement
  let menuButton: HTMLButtonElement
</script>

<svelte:body
  onkeydown={open
    ? (event) => {
        if (event.key === 'Escape') {
          open = false
        }
      }
    : null}
  onclick={open
    ? (event) => {
        if (event.target === menuButton) return

        const withinBoundaries = event.composedPath().includes(mobileNavContainer)

        const isValidTarget = ['A'].includes((event.target as HTMLElement).tagName)

        if (!withinBoundaries || isValidTarget) {
          open = false
        }
      }
    : null}
/>

<div class={className} bind:this={mobileNavContainer}>
  <button
    bind:this={menuButton}
    class="xs:text-xl flex aspect-square items-center gap-2 rounded-md px-2 py-1.5 text-lg hover:bg-[#fff2]"
    onclick={toggle}
  >
    {#if open}<HeroiconsXMark />{:else}<HeroiconsBars3 />{/if}
  </button>

  <div
    class:hidden={!open}
    class="fixed top-14 right-0 bottom-0 left-0 z-30 bg-black pt-16 sm:pt-32 md:top-16"
  >
    <nav class="flex flex-col items-center justify-center overflow-auto p-4 text-2xl">
      {#each links as { href, title }}
        <a {href} class="nav-link p-4">{title}</a>
      {/each}
      <EncryptedEmail label={t('nav.contact')} class="mt-4" />
      <LocaleSwitcher label={t('nav.lang')} class="mt-8" />
    </nav>
  </div>
</div>

<style>
  nav {
    scrollbar-gutter: stable both-edges;
  }
</style>
