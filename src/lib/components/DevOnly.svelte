<script lang="ts">
  import { dev } from '$app/env'
  import type { Component } from 'svelte'

  const {
    loader,
  }: {
    /**
     * Loader function that should return a dynamically imported Svelte component.
     */
    loader: () => Promise<Component> | Component
  } = $props()

  // const DevOnlyComponent = $derived(dev ? await loader() : null)
</script>

<!-- {#if typeof DevOnlyComponent === 'function'}
  <DevOnlyComponent />
{/if} -->

{#if dev}
  {#await loader() then Component}
    <Component />
  {/await}
{/if}
