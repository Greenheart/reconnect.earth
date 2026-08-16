<script lang="ts">
  import { flip } from 'svelte/animate'
  import { quintOut } from 'svelte/easing'
  import { crossfade, fade } from 'svelte/transition'

  import type { Resource } from '$lib/schema'
  import { getBookmarks, toggleBookmark } from '$lib/state/bookmarks.svelte'
  import ResourceFiltersSidebar from './ResourceFiltersSidebar.svelte'
  import { FilteredItems } from '$lib/state/search.svelte'
  import { Button, buttonVariants } from '$lib/components/ui/button'
  import * as Card from '$lib/components/ui/card'
  import * as Sheet from '$lib/components/ui/sheet'
  import { SITE_NAME } from '$lib/constants'
  import { useIntersectionObserver } from '$lib/intersection-observer.svelte'
  import { cn } from '$lib/utils'

  interface Props {
    resources: Resource[]
  }

  let { resources }: Props = $props()
  const bookmarks = $derived(getBookmarks(resources))

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

  const disableResetFiltersButton = $derived(searchResults.matches.length === resources.length)

  function resetFilters() {
    searchResults.resetFilters()
  }

  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
  let isSheetOpen = $state(false)
  const shouldAnimate = $derived(!isMobile && !isSheetOpen)

  const maybe = (node: HTMLElement, options: { fn: (...args: any[]) => any; key: unknown }) => {
    if (shouldAnimate) {
      return options.fn(node, options)
    }
  }

  let scrollTarget = $state<HTMLElement | null>(null)

  // Enable the intersection observer on mobile to hide the toolbar after scrolling to the bottom of the list
  const { isIntersecting } = useIntersectionObserver(
    isMobile || (typeof window !== 'undefined' && window.innerWidth <= 768)
      ? () => scrollTarget
      : () => null,
  )
</script>

<h2 class="h2 gradient-heading mb-2 font-bold">Resources</h2>

<p class="mb-4">
  Explore topics related to {SITE_NAME}. Learn how we can create a future where both humanity and
  the living planet thrive together.
</p>

<div class="grid gap-4 md:grid-cols-[230px_1fr]">
  <div class="hidden md:block">
    <ResourceFiltersSidebar {searchResults} {resources} class="sticky top-4" />
  </div>
  <div class="grid place-content-start gap-4 md:grid-cols-2">
    <div
      class={cn(
        'bg-card md-left-auto fixed right-0 bottom-0 left-0 z-10 p-2 md:static md:right-auto md:bottom-auto md:z-auto md:col-span-full md:mb-1 md:w-56 md:bg-transparent md:p-0 md:*:justify-between',
        // Hide the toolbar when scrolled past the bottom of the list
        isIntersecting() &&
          typeof window !== 'undefined' &&
          scrollTarget &&
          window.scrollY > scrollTarget.scrollTop &&
          'hidden!',
      )}
    >
      <div
        class="pointer-events-none fixed right-0 bottom-13 left-0 h-8 w-full bg-linear-to-b from-transparent to-black/15 md:hidden"
      ></div>
      <div class="flex items-center justify-center gap-4 text-sm">
        <div class="md:hidden">
          <Sheet.Root bind:open={isSheetOpen}>
            <Sheet.Trigger class={buttonVariants({ variant: 'secondary', class: 'rounded-md' })}
              ><span class="icon-[lucide--filter]"></span>Filters</Sheet.Trigger
            >
            <Sheet.Content
              side="left"
              class="w-[90%]! px-4"
              onOpenAutoFocus={(event) => event.preventDefault()}
            >
              <Sheet.Header class="px-1 py-5">
                <Sheet.Title class="font-sans text-lg font-bold">Filters</Sheet.Title>
              </Sheet.Header>
              <ResourceFiltersSidebar
                {searchResults}
                {resources}
                onSearchSubmit={() =>
                  document.querySelector<HTMLDivElement>('[data-dialog-close]')?.click?.()}
                --filters-top-section-height="210px"
              />
            </Sheet.Content>
          </Sheet.Root>
        </div>
        <span
          ><span class="hidden pr-1 md:inline">Showing</span>{searchResults.matches.length} / {resources.length}</span
        >
        <Button
          variant="outline"
          class="rounded-md"
          disabled={disableResetFiltersButton}
          onclick={resetFilters}>Show all</Button
        >
      </div>
    </div>

    {#each searchResults.matches as resource (resource.link)}
      {@const key = resource.link}
      {@const isBookmarked = bookmarks.value.includes(resource.link)}
      {@const label = isBookmarked ? 'Remove bookmark' : 'Save bookmark'}
      <div
        animate:flip={shouldAnimate ? { duration: 400 } : { duration: 0 }}
        in:maybe={{ fn: send, key }}
        out:maybe={{ fn: receive, key }}
      >
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
              onclick={() => toggleBookmark(bookmarks, resource)}
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

    <div class="col-span-full mt-4 flex flex-col items-center gap-4" bind:this={scrollTarget}>
      <p class="text-center text-sm">
        Showing {searchResults.matches.length} / {resources.length}
      </p>

      <Button
        variant="outline"
        class={['rounded-md px-8', disableResetFiltersButton && 'hidden']}
        onclick={resetFilters}>Show all</Button
      >
    </div>

    <!-- IDEA: At the end of the list could be a good place to ask people to suggest new resources. Add link to contributing guide for adding resources here. -->
  </div>
</div>
