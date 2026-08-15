<script lang="ts">
  import { flip } from 'svelte/animate'
  import { quintOut } from 'svelte/easing'
  import { crossfade, fade } from 'svelte/transition'

  import type { Resource } from '$lib/schema'
  import { bookmarks, toggleBookmark } from '$lib/state/bookmarks'
  import ResourceFiltersSidebar from './ResourceFiltersSidebar.svelte'
  import { FilteredItems } from '$lib/state/search.svelte'
  import { Button, buttonVariants } from '$lib/components/ui/button'
  import * as Card from '$lib/components/ui/card'
  import * as Sheet from '$lib/components/ui/sheet'

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

<div class="grid gap-4 md:grid-cols-[230px_1fr]">
  <ResourceFiltersSidebar {searchResults} {resources} class="hidden md:block" />
  <div class="grid place-content-start gap-4 md:grid-cols-2">
    <div class="col-span-full mb-0.5 flex h-9 items-center gap-4 text-sm">
      <div class="md:hidden">
        <Sheet.Root>
          <Sheet.Trigger class={buttonVariants({ variant: 'outline' })}>Show filters</Sheet.Trigger>
          <Sheet.Content side="left" class="w-[90%]!">
            <Sheet.Header class="sticky top-0">
              <Sheet.Title>Filters</Sheet.Title>
            </Sheet.Header>
            <ResourceFiltersSidebar {searchResults} {resources} class="overflow-y-auto px-4" />
          </Sheet.Content>
        </Sheet.Root>
      </div>
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
              <span class={isBookmarked ? 'icon-[bi--bookmark-fill]' : 'icon-[bi--bookmark]'}
              ></span>
            </Button>
            <Button
              href={resource.link}
              target="_blank"
              variant="ghost"
              class="bg-muted/20"
              size="lg"
            >
              <div class="span items-stretch">Explore</div>
              <span class="icon-[lucide--external-link]"></span>
            </Button>
          </div>
        </Card.Root>
      </div>
    {/each}
  </div>
</div>
