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
  import { Button } from '$lib/components/ui/button'
  import * as Card from '$lib/components/ui/card'

  interface Props {
    resources: Resource[]
  }

  let { resources }: Props = $props()

  const searchResults = $derived(
    new FilteredItems<Resource>(resources, (item, filters) => {
      // All conditions need to be met, so abort as soon as we find something that does not match.
      if (filters.tags?.length && !filters.tags.every((tag) => item.tags.includes(tag))) {
        return false
      }

      if (filters.showBookmarks && !bookmarks.value.includes(item.link)) {
        return false
      }

      const searchString = filters.search.toLowerCase()

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
</script>

<h2 class="h2 gradient-heading mb-2 font-bold">Resources</h2>

<p class="mb-4">
  Explore topics related to Reconnect.earth. Learn how we can create a future where both humanity
  and the living planet thrive together.
</p>

<!-- TODO: Make this view responsive on mobile, maybe with a sheet for the navigation -->
<!--
    IDEA: Maybe show small icon buttons that expand into a a sheet. Search and Filter.
    Or maybe this could be a floating toolbar on top of the content, or fixed to the top of the screen
-->

<!-- TODO: Make sure the clear button in the search input remains visible -->
<!-- TODO: Currently it's overflowing, even though the parent element is 250px, the child elements don't respect that -->
<div class="xs:grid-cols-[230px_1fr] grid gap-4">
  <ResourceFiltersSidebar {searchResults} {resources} class="xs:block hidden" />
  <div class="grid place-content-start gap-4 md:grid-cols-2">
    <div class="col-span-full mb-0.5 flex h-10 items-center gap-4 text-sm">
      <span>Showing {searchResults.matches.length} / {resources.length}</span>
      <Button
        variant="outline"
        size="sm"
        class={['rounded-md', searchResults.matches.length === resources.length && 'hidden']}
        onclick={() => searchResults.resetFilters()}>Reset filters</Button
      >
    </div>

    {#each searchResults.matches as resource (resource.link)}
      {@const key = resource.link}
      {@const isBookmarked = bookmarks.value.includes(resource.link)}
      {@const label = isBookmarked ? 'Remove bookmark' : 'Save bookmark'}
      <div animate:flip={{ duration: 400 }} in:send={{ key }} out:receive={{ key }}>
        <Card.Root class="grid h-full grid-rows-[min-content_min-content_1fr] gap-2 p-4">
          <h3 class="h4 text-primary font-bold">
            {resource.title}
          </h3>
          <p class="text-base">{resource.description}</p>
          <div class="flex flex-wrap content-start items-start gap-2 text-sm">
            {#each resource.tags as tag}
              <div class="text-primary">#{tag}</div>
            {/each}
          </div>
          <div class="flex items-center justify-between gap-2">
            <Button
              variant="ghost"
              size="icon"
              onclick={() => toggleBookmark(resource)}
              aria-label={label}
              title={label}
            >
              {#if isBookmarked}
                <IconBookmarkFill />
              {:else}
                <IconBookmark />
              {/if}
            </Button>
            <Button
              href={resource.link}
              target="_blank"
              variant="ghost"
              class="bg-muted/20"
              size="lg"
            >
              <div class="span items-stretch">Explore</div>
              <IconShare />
            </Button>
          </div>
        </Card.Root>
      </div>
    {/each}
  </div>
</div>
