<script lang="ts">
    import { onDestroy, onMount } from 'svelte'
    import { flip } from 'svelte/animate'
    import { quintOut } from 'svelte/easing'
    import { crossfade, fade } from 'svelte/transition'
    import { getDrawerStore } from '@skeletonlabs/skeleton'

    import IconShare from '~icons/ri/share-box-fill'
    import IconBookmark from '~icons/bi/bookmark'
    import IconBookmarkFill from '~icons/bi/bookmark-fill'

    import type { Resource } from '$lib/schema'
    import { createSearchStore, updateSearchResults } from '$lib/stores/search'
    import { bookmarks, toggleBookmark } from '$lib/stores/bookmarks'
    import type { ResourceTag } from '$lib/constants'
    import ResourceFiltersSidebar from './ResourceFiltersSidebar.svelte'

    export let resources: Resource[]

    const drawerStore = getDrawerStore()
    const searchStore = createSearchStore({
        data: resources,
        getSearchTerms: ({ title, description, tags }) =>
            `${title} ${description} ${tags.join(' ')}`,
    })

    // TODO: Consider moving this into the search store
    function keepMatchingResources(resource: Resource) {
        const matchesTags = $searchStore.tags.length
            ? $searchStore.tags.some((tag) =>
                  resource.tags.includes(tag as ResourceTag),
              )
            : true

        return $searchStore.showBookmarks
            ? matchesTags && $bookmarks.includes(resource.link)
            : matchesTags
    }

    const unsubscribe = searchStore.subscribe((model) =>
        updateSearchResults(model, keepMatchingResources),
    )

    onMount(() => {
        bookmarks.useLocalStorage()
    })

    onDestroy(() => unsubscribe)

    const [send, receive] = crossfade({
        duration: 500,
        easing: quintOut,
        fallback: (node) => fade(node, { duration: 300 }),
    })

    // let filterIncludeAllTags = false
</script>

<h2 class="h2 font-bold mb-2 gradient-heading">Resources</h2>

<p class="mb-4">
    Explore topics related to Reconnect.earth. Learn how we can create a future
    where both humanity and the living planet thrive together.
</p>

<!-- TODO: Make this view responsive on mobile, maybe with a drawer for the navigation -->

<!-- TODO: Make sure the clear button in the search input remains visible -->
<!-- TODO: Currently it's overflowing, even though the parent element is 250px, the child elements don't respect that -->
<div class="grid xs:grid-cols-[230px_1fr] gap-4">
    <ResourceFiltersSidebar {searchStore} {resources} class="hidden xs:block" />
    <div class="grid md:grid-cols-2 gap-4 place-content-start">
        <div class="col-span-full flex gap-4 text-sm h-10 mb-0.5 items-center">
            <span
                >Showing {$searchStore.filtered.length} / {resources.length}</span
            >
            <button
                class="btn variant-outline-surface btn-sm rounded-md"
                class:hidden={$searchStore.filtered.length === resources.length}
                on:click={() => searchStore.reset()}>Reset filters</button
            >
        </div>
        <!-- IDEA: when bookmarks are shown, there could be a short paragraph explaining that bookmarks are saved on your device, and can be exported to a file -->
        <!-- <div class="col-span-full text-sm flex items-center">
            Your bookmarked resources are saved in your browser. You can export
            them to a file.
        </div> -->
        {#each $searchStore.filtered as resource (resource.link)}
            {@const key = resource.link}
            {@const isBookmarked = $bookmarks.includes(resource.link)}
            {@const label = isBookmarked ? 'Remove bookmark' : 'Save bookmark'}
            <div
                class="card p-4 grid gap-2 grid-rows-[min-content_min-content_1fr]"
                animate:flip={{ duration: 400 }}
                in:send={{ key }}
                out:receive={{ key }}
            >
                <h3 class="h4 font-bold text-primary-500">
                    {resource.title}
                </h3>
                <p class="text-base">{resource.description}</p>
                <div
                    class="flex gap-2 items-start text-sm flex-wrap content-start"
                >
                    {#each resource.tags as tag}
                        <div class="text-primary-500">#{tag}</div>
                    {/each}
                </div>
                <div class="flex justify-between gap-2">
                    <button
                        class="btn-icon hover:variant-soft rounded-sm"
                        on:click={() => toggleBookmark(resource)}
                        aria-label={label}
                        title={label}
                    >
                        {#if isBookmarked}
                            <IconBookmarkFill />
                        {:else}
                            <IconBookmark />
                        {/if}
                    </button>
                    <a
                        class="btn variant-soft rounded-sm gap-1"
                        href={resource.link}
                        target="_blank"
                        ><span class="flex items-stretch">Explore</span>
                        <IconShare />
                    </a>
                </div>
            </div>
        {/each}
    </div>
</div>
