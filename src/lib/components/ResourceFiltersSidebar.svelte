<script lang="ts">
  import { bookmarks } from '$lib/state/bookmarks'
  import { Button } from '$lib/components/ui/button'

  import IconLibrary from '~icons/ion/library'
  import IconBookmarksFill from '~icons/bi/bookmarks-fill'

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
      <IconLibrary />
      <span class="grow text-left">Library</span>
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
      <IconBookmarksFill />
      <span class="grow text-left">Bookmarks</span>
      <span class={[bookmarks.value.length === 0 && 'invisible']}>{bookmarks.value.length}</span>
    </Button>
  </div>

  <!-- TODO: Make the filters sidebar work for mobile as an expandable sheet -->

  <!-- TODO: Update lists of filters to only show possible combinations -->
  <!-- For example, hide tags that can't be combined with the current other filters -->
  <!-- IDEA: Maybe move the sidebar list of tags out into a separate component -->
  <!-- TODO: Maybe always render all tags and show how many items that tag has -->
  <!-- TODO: Maybe disable irrelevant tags rather than showing them -->
  <!-- TODO: Maybe change the animation when results change -->
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
        <!-- TODO: Update the tag count based on current searchResults -->
        <!-- TODO: Make tag gray and disabled when count === 0 among current search results -->
        <!-- TODO: Preserve order based on tag count in all resources, not based on tag count in the search results -->
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
        <!-- TODO: Update the tag count based on current searchResults -->
        <!-- TODO: Make tag gray and disabled when count === 0 among current search results -->
        <!-- TODO: Preserve order based on tag count in all resources, not based on tag count in the search results -->
        <span class="text-gray-300">{count}</span>
      </Button>
    {/each}
  </div>
</div>
