<script lang="ts">
  import type { Resource } from '$lib/schema'
  import type { FilteredItems } from '$lib/state/search.svelte'
  import * as InputGroup from '$lib/components/ui/input-group'
  import { Button } from '$lib/components/ui/button'

  interface Props {
    searchResults: FilteredItems<Resource>
  }

  let { searchResults }: Props = $props()
</script>

<InputGroup.Root class="rounded-sm">
  <InputGroup.Addon align="inline-start">
    <span class="icon-[ri--search-eye-line]"></span>
  </InputGroup.Addon>
  <InputGroup.Input placeholder="Search..." bind:value={searchResults.filters.search} />
  <InputGroup.Addon align="inline-end" class="pr-1">
    <Button
      size="icon"
      variant="ghost"
      onclick={() => {
        searchResults.filters.search = ''
      }}
      class={[!searchResults.filters.search.length && 'hidden']}
      aria-label="Clear search"
    >
      <span class="icon-[lucide--x]"></span>
    </Button>
  </InputGroup.Addon>
</InputGroup.Root>
