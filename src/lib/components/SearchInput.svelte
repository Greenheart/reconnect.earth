<script lang="ts">
  import type { Resource } from '#lib/content/schemas.js'
  import type { FilteredItems } from '#lib/state/search.svelte.js'
  import * as InputGroup from '#lib/components/ui/input-group/index.js'
  import { Button } from '#lib/components/ui/button/index.js'
  import { debounce } from '#lib/debounce.js'
  import type { ChangeEventHandler } from 'svelte/elements'

  interface Props {
    searchResults: FilteredItems<Resource>
  }

  let { searchResults }: Props = $props()

  const updateSearchResults: ChangeEventHandler<HTMLInputElement> = debounce((event) => {
    searchResults.filters.search = (event.target as HTMLInputElement).value
  }, 200)
</script>

<InputGroup.Root class="rounded-sm">
  <InputGroup.Addon align="inline-start">
    <span class="icon-[ri--search-eye-line]"></span>
  </InputGroup.Addon>
  <InputGroup.Input
    placeholder="Search..."
    value={searchResults.filters.search}
    oninput={updateSearchResults}
  />
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
