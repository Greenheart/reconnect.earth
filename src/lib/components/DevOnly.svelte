<script lang="ts">
  import { dev } from '$app/env'
  import type { Component } from 'svelte'

  type Props = {
    /** Loader function that should return a dynamically imported Svelte component. */
    loader: () => Promise<Component> | Component
  }
  const { loader }: Props = $props()
</script>

{#if dev}
  {#await loader() then Component}
    <Component />
  {/await}
{/if}
