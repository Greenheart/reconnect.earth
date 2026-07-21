<script lang="ts">
  import type { Resource } from '$lib/schema'
  import type { FilteredItems } from '$lib/state/search.svelte'
  import IconSearch from '~icons/ri/search-eye-line'

  interface Props {
    searchResults: FilteredItems<Resource>
  }

  let { searchResults }: Props = $props()
</script>

<div class="input-group max-w-[300px] grid-cols-[auto_1fr_auto] rounded-md">
  <div class="!pl-3 !pr-0">
    <IconSearch />
  </div>
  <input
    type="search"
    class="!pl-2 !pr-0"
    placeholder="Search"
    bind:value={searchResults.filters.search}
  />
  <!-- TODO: Fix the clear button not positioned correctly (it's not visible) -->
  <button
    class="!px-3"
    onclick={() => {
      searchResults.filters.search = ''
    }}
    style:display={searchResults.filters.search === '' ? 'none' : ''}>✕</button
  >
</div>
