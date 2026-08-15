<script lang="ts">
  import { getBookmarks } from '$lib/state/bookmarks.svelte'
  import { Button } from '$lib/components/ui/button'
  import SearchInput from './SearchInput.svelte'

  import type { Resource } from '$lib/schema'
  import type { FilteredItems } from '$lib/state/search.svelte'
  import { cn } from '$lib/utils'

  interface Props {
    searchResults: FilteredItems<Resource>
    onSearchSubmit?: () => void
    resources: Resource[]
    class?: string
  }

  let { searchResults, resources, class: className = '', onSearchSubmit }: Props = $props()

  const resourceCounts = $derived(searchResults.getItemCountsPerTag())
  const bookmarks = $derived(getBookmarks(resources))
</script>

<div class={className}>
  <div class="grid gap-2 pb-2">
    <form
      onsubmit={(event) => {
        event.preventDefault()
        onSearchSubmit?.()
      }}
    >
      <SearchInput {searchResults} />
    </form>

    <Button
      variant="outline"
      size="lg"
      class="mt-2 justify-start rounded-md"
      onclick={() => searchResults.resetFilters()}
    >
      <span class="icon-[ion--library]"></span>
      <span class="grow text-left">All resources</span>
      <span>{resources.length}</span>
    </Button>
    <Button
      variant="outline"
      size="lg"
      class={cn('justify-start rounded-md', searchResults.filters.showBookmarks && 'bg-muted/50')}
      onclick={() => (searchResults.filters.showBookmarks = !searchResults.filters.showBookmarks)}
      disabled={!bookmarks.value.length ||
        !bookmarks.value.some((bookmark) =>
          searchResults.matches.some((resource) => resource.link === bookmark),
        )}
    >
      <span class="icon-[bi--bookmarks-fill]"></span>
      <span class="grow text-left">Bookmarks</span>
      <span class={[bookmarks.value.length === 0 && 'invisible']}>{bookmarks.value.length}</span>
    </Button>
  </div>

  <div
    class="scroll-y-shadow grid max-h-[calc(100vh-var(--filters-top-section-height,180px))] gap-8 overflow-y-auto pt-2 pb-8 md:pb-4"
  >
    <div class="grid">
      <h2 class="h3 pb-1 font-bold">Resource types</h2>
      {#each resourceCounts.resourceTypes as { tag, count, enabled } (tag)}
        <Button
          variant="ghost"
          size="sm"
          class={cn(
            'flex w-full justify-start gap-2 rounded-sm text-left',
            searchResults.isTagSelected(tag) && 'bg-muted/50',
          )}
          disabled={!enabled}
          onclick={() => searchResults.toggleTag(tag)}
        >
          <span class="text-primary">#{tag}</span>
          <span class="text-gray-300">{count}</span>
        </Button>
      {/each}
    </div>

    <div class="grid">
      <h2 class="h3 pb-1 font-bold">Categories</h2>
      {#each resourceCounts.resourceCategories as { tag, count, enabled } (tag)}
        <Button
          variant="ghost"
          size="sm"
          class={cn(
            'flex w-full justify-start gap-2 rounded-sm text-left',
            searchResults.isTagSelected(tag) && 'bg-muted/50',
          )}
          disabled={!enabled}
          onclick={() => searchResults.toggleTag(tag)}
        >
          <span class="text-primary">#{tag}</span>
          <span class="text-gray-300">{count}</span>
        </Button>
      {/each}
    </div>
  </div>
</div>
