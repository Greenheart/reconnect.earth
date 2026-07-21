<script lang="ts">
  import type { SearchStoreModel } from '$lib/stores/search'
  import type { Writable } from 'svelte/store'
  import IconSearch from '~icons/ri/search-eye-line'

  interface Props {
    searchStore: Writable<SearchStoreModel<any>>
  }

  let { searchStore }: Props = $props()
</script>

<div class="input-group max-w-[300px] grid-cols-[auto_1fr_auto] rounded-md">
  <div class="!pl-3 !pr-0">
    <IconSearch />
  </div>
  <input type="search" class="!pl-2 !pr-0" placeholder="Search" bind:value={$searchStore.search} />
  <!-- TODO: Fix the clear button not positioned correctly (it's not visible) -->
  <button
    class="!px-3"
    onclick={() => ($searchStore.search = '')}
    style:display={$searchStore.search === '' ? 'none' : ''}>✕</button
  >
</div>
