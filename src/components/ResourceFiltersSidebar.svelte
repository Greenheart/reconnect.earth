<script lang="ts">
  import { bookmarks } from '$lib/state/bookmarks'
  // import { SlideToggle } from '@skeletonlabs/skeleton'

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
    <button
      class="variant-soft-surface btn justify-start rounded-md"
      onclick={() => (searchResults.filters.showBookmarks = false)}
    >
      <IconLibrary />
      <span class="grow text-left">Library</span>
      <span>{resources.length}</span>
    </button>
    <button
      class={cn(
        'variant-soft-surface btn justify-start rounded-md',
        searchResults.filters.showBookmarks ? 'bg-surface-active-token' : '',
      )}
      onclick={() => (searchResults.filters.showBookmarks = !searchResults.filters.showBookmarks)}
      disabled={!bookmarks.value.length ||
        !bookmarks.value.some((bookmark) =>
          searchResults.matches.some((resource) => resource.link === bookmark),
        )}
    >
      <IconBookmarksFill />
      <span class="grow text-left">Bookmarks</span>
      {#if bookmarks.value.length}
        <span>{bookmarks.value.length}</span>
      {/if}
    </button>
  </div>

  <!-- IDEA: Maybe add a toggle for how filters are combined - Do you want to see results including all tags - or any of the tags? This could be a switch -->

  <!-- <div class="pb-4">
        <SlideToggle
            active="bg-primary-700"
            name="filterIncludeAllTags"
            bind:checked={filterIncludeAllTags}
            size="sm">Include all chosen tags</SlideToggle
        >
        <label class="flex items-center space-x-2">
            <input class="checkbox" type="checkbox" checked />
            <p>Include all chosen tags</p>
        </label>
    </div> -->

  <!-- TODO: Update lists of filters to only show possible combinations -->
  <!-- For example, hide tags that can't be combined with the current other filters -->
  <!-- IDEA: Maybe move the sidebar list of tags out into a separate component -->
  <!-- TODO: Maybe always render all tags and show how many items that tag has -->
  <!-- TODO: Maybe disable irrelevant tags rather than showing them -->
  <!-- TODO: Maybe change the animation when results change -->
  <div class="grid gap-1 pb-8">
    <h2 class="h3 font-bold">Resource types</h2>
    {#each resourceCounts.resourceTypes as { tag, count, enabled } (tag)}
      <button
        class={cn(
          'chip hover:variant-soft-surface flex w-full justify-start text-left',
          searchResults.isTagSelected(tag) ? 'variant-soft-surface' : '',
        )}
        disabled={!enabled}
        onclick={() => searchResults.toggleTag(tag)}
      >
        <span class="text-primary-500">#{tag}</span>
        <!-- TODO: Make the count update when filters change -->
        <span class="text-gray-300">{count}</span>
      </button>
    {/each}
  </div>

  <div class="grid gap-1 pb-8">
    <h2 class="h3 font-bold">Categories</h2>
    {#each resourceCounts.resourceCategories as { tag, count, enabled } (tag)}
      <button
        class={cn(
          'chip hover:variant-soft-surface flex w-full justify-start text-left',
          searchResults.isTagSelected(tag) ? 'variant-soft-surface' : '',
        )}
        disabled={!enabled}
        onclick={() => searchResults.toggleTag(tag)}
      >
        <span class="text-primary-500">#{tag}</span>
        <!-- TODO: Make the count update when filters change -->
        <span class="text-gray-300">{count}</span>
      </button>
    {/each}
  </div>
</div>
