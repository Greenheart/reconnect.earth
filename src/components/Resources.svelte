<script lang="ts">
  import { flip } from 'svelte/animate'
  import { quintOut } from 'svelte/easing'
  import { crossfade, fade } from 'svelte/transition'

  import IconShare from '~icons/ri/share-box-fill'
  import IconBookmark from '~icons/bi/bookmark'
  import IconBookmarkFill from '~icons/bi/bookmark-fill'

  import type { Resource } from '$lib/schema'
  import { bookmarks, toggleBookmark } from '$lib/state/bookmarks'
  import ResourceFiltersSidebar from './ResourceFiltersSidebar.svelte'
  import { FilteredItems } from '$lib/state/search.svelte'

  interface Props {
    resources: Resource[]
  }

  let { resources }: Props = $props()

  const searchResults = $derived(
    new FilteredItems<Resource>(resources, (item, filters) => {
      // All conditions need to be met, so abort as soon as we find something that does not match.
      if (filters.tags?.length && !filters.tags.some((tag) => item.tags.includes(tag))) {
        return false
      }

      if (filters.showBookmarks && !bookmarks.value.includes(item.link)) {
        return false
      }

      // IDEA: Maybe make all filters inclusive, so all conditions need to match

      const searchString = filters.search.toLowerCase()

      // IDEA: Maybe create a search index to make lookups faster
      if (
        searchString &&
        !item.title.toLowerCase().includes(searchString) &&
        item.description &&
        !item.description?.toLowerCase()?.includes(searchString)
      ) {
        return false
      }

      return true
    }),
  )

  const [send, receive] = crossfade({
    duration: 500,
    easing: quintOut,
    fallback: (node) => fade(node, { duration: 300 }),
  })

  // let filterIncludeAllTags = false
</script>

<h2 class="h2 mb-2 font-bold gradient-heading">Resources</h2>

<p class="mb-4">
  Explore topics related to Reconnect.earth. Learn how we can create a future where both humanity
  and the living planet thrive together.
</p>

<!-- TODO: Make this view responsive on mobile, maybe with a drawer for the navigation -->
<!--
    IDEA: Maybe show small icon buttons that expand into a a modal/drawer. Search and Filter.
    Or maybe this could be a floating toolbar on top of the content, or fixed to the top of the screen
-->

<!-- TODO: Make sure the clear button in the search input remains visible -->
<!-- TODO: Currently it's overflowing, even though the parent element is 250px, the child elements don't respect that -->
<div class="grid gap-4 xs:grid-cols-[230px_1fr]">
  <ResourceFiltersSidebar {searchResults} {resources} class="hidden xs:block" />
  <div class="grid place-content-start gap-4 md:grid-cols-2">
    <div class="col-span-full mb-0.5 flex h-10 items-center gap-4 text-sm">
      <span>Showing {searchResults.matches.length} / {resources.length}</span>
      <button
        class="variant-outline-surface btn btn-sm rounded-md"
        class:hidden={searchResults.matches.length === resources.length}
        onclick={() => searchResults.resetFilters()}>Reset filters</button
      >
    </div>
    <!-- IDEA: when bookmarks are shown, there could be a short paragraph explaining that bookmarks are saved on your device, and can be exported to a file -->
    <!-- <div class="col-span-full text-sm flex items-center">
            Your bookmarked resources are saved in your browser. You can export
            them to a file.
        </div> -->
    {#each searchResults.matches as resource (resource.link)}
      {@const key = resource.link}
      {@const isBookmarked = bookmarks.value.includes(resource.link)}
      {@const label = isBookmarked ? 'Remove bookmark' : 'Save bookmark'}
      <div
        class="card grid grid-rows-[min-content_min-content_1fr] gap-2 p-4"
        animate:flip={{ duration: 400 }}
        in:send={{ key }}
        out:receive={{ key }}
      >
        <h3 class="h4 font-bold text-primary-500">
          {resource.title}
        </h3>
        <p class="text-base">{resource.description}</p>
        <div class="flex flex-wrap content-start items-start gap-2 text-sm">
          {#each resource.tags as tag}
            <div class="text-primary-500">#{tag}</div>
          {/each}
        </div>
        <div class="flex justify-between gap-2">
          <button
            class="btn-icon rounded-sm hover:variant-soft"
            onclick={() => toggleBookmark(resource)}
            aria-label={label}
            title={label}
          >
            {#if isBookmarked}
              <IconBookmarkFill />
            {:else}
              <IconBookmark />
            {/if}
          </button>
          <a class="variant-soft btn gap-1 rounded-sm" href={resource.link} target="_blank"
            ><span class="flex items-stretch">Explore</span>
            <IconShare />
          </a>
        </div>
      </div>
    {/each}
  </div>
</div>
