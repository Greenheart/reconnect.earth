<script lang="ts">
  import { bookmarks } from '$lib/state/bookmarks'
  import { Button } from '$lib/components/ui/button'
  import SearchInput from './SearchInput.svelte'

  import type { Resource } from '$lib/schema'
  import type { FilteredItems } from '$lib/state/search.svelte'
  import { cn } from '$lib/utils'

  interface Props {
    searchResults: FilteredItems<Resource>
    resources: Resource[]
    class?: string
  }

  let { searchResults, resources, class: className = '' }: Props = $props()

  const resourceCounts = $derived(searchResults.getItemCountsPerTag())
</script>

<div class={className}>
  <SearchInput {searchResults} />

  <div class="grid gap-2 pt-4 pb-8">
    <Button
      variant="outline"
      size="lg"
      class="justify-start rounded-md"
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

  <div class="grid pb-8">
    <h2 class="h3 font-bold">Resource types</h2>
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

  <div class="grid pb-8">
    <h2 class="h3 font-bold">Categories</h2>
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
