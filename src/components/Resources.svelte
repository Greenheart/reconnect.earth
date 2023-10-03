<script lang="ts">
    import { onDestroy, onMount } from 'svelte'
    import { flip } from 'svelte/animate'
    import { quintOut } from 'svelte/easing'
    import { crossfade, fade } from 'svelte/transition'
    // import { SlideToggle } from '@skeletonlabs/skeleton'

    import IconShare from '~icons/ri/share-box-fill'
    import IconLibrary from '~icons/ion/library'
    import IconBookmark from '~icons/bi/bookmark'
    import IconBookmarkFill from '~icons/bi/bookmark-fill'
    import IconBookmarksFill from '~icons/bi/bookmarks-fill'

    import type { Resource } from '$lib/schema'
    import { createSearchStore, updateSearchResults } from '$lib/stores/search'
    import SearchInput from './SearchInput.svelte'
    import { bookmarks, toggleBookmark } from '$lib/stores/bookmarks'
    import {
        RESOURCE_CATEGORIES,
        RESOURCE_TYPES,
        type ResourceTag,
    } from '$lib/constants'
    import { cx } from '$lib/utils'

    export let resources: Resource[]

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

    function countResourcesWithTag(tag: ResourceTag) {
        // IDEA: By switching to the resources from $searchStore.filtered, we only show relevant tags
        // return $searchStore.filtered.filter((r) => r.tags.includes(tag)).length
        return resources.filter((r) => r.tags.includes(tag)).length
    }

    function getRelevantTags(tags: readonly ResourceTag[]) {
        const count = countResourcesWithTag
        return tags
            .filter((tag) => count(tag) >= 1)
            .sort((a, b) => count(b) - count(a))
    }

    const unsubscribe = searchStore.subscribe((model) =>
        updateSearchResults(model, keepMatchingResources),
    )

    function toggleTag(tag: ResourceTag) {
        if ($searchStore.tags.includes(tag)) {
            $searchStore.tags = $searchStore.tags.filter((t) => t !== tag)
        } else {
            $searchStore.tags = [...$searchStore.tags, tag]
        }
    }

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
    Explore topics related to reconnect.earth. Learn how we can create a future
    where both humanity and the living planet thrive together.
</p>

<!-- TODO: Make sure the clear button in the search input remains visible -->
<!-- TODO: Currently it's overflowing, even though the parent element is 250px, the child elements don't respect that -->
<div class="grid grid-cols-[250px_1fr] gap-4">
    <div>
        <SearchInput {searchStore} />

        <div class="grid gap-2 pb-8 pt-4">
            <button
                class="btn variant-soft-surface rounded-md justify-start"
                on:click={() => ($searchStore.showBookmarks = false)}
            >
                <IconLibrary />
                <span class="flex-grow text-left">Library</span>
                <span>{resources.length}</span>
            </button>
            <button
                class={cx(
                    'btn variant-soft-surface rounded-md justify-start',
                    $searchStore.showBookmarks ? 'bg-surface-active-token' : '',
                )}
                on:click={() =>
                    ($searchStore.showBookmarks = !$searchStore.showBookmarks)}
                disabled={!$bookmarks.length ||
                    !$bookmarks.some((bookmark) =>
                        $searchStore.filtered.some(
                            (resource) => resource.link === bookmark,
                        ),
                    )}
            >
                <IconBookmarksFill />
                <span class="flex-grow text-left">Bookmarks</span>
                {#if $bookmarks.length}
                    <span>{$bookmarks.length}</span>
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
            {#each getRelevantTags(RESOURCE_TYPES) as tag (tag)}
                <button
                    class={cx(
                        'text-left chip w-full flex justify-start hover:variant-soft-surface',
                        $searchStore.tags.includes(tag)
                            ? 'variant-soft-surface'
                            : '',
                    )}
                    on:click={() => toggleTag(tag)}
                >
                    <span class="text-primary-500">#{tag}</span>
                    <!-- TODO: Make the count update when filters change -->
                    <span class="text-gray-300"
                        >({countResourcesWithTag(tag)})</span
                    >
                </button>
            {/each}
        </div>

        <div class="grid gap-1 pb-8">
            <h2 class="h3 font-bold">Categories</h2>
            {#each getRelevantTags(RESOURCE_CATEGORIES) as tag (tag)}
                <button
                    class={cx(
                        'text-left chip w-full flex justify-start hover:variant-soft-surface',
                        $searchStore.tags.includes(tag)
                            ? 'variant-soft-surface'
                            : '',
                    )}
                    on:click={() => toggleTag(tag)}
                >
                    <span class="text-primary-500">#{tag}</span>
                    <!-- TODO: Make the count update when filters change -->
                    <span class="text-gray-300"
                        >({countResourcesWithTag(tag)})</span
                    >
                </button>
            {/each}
        </div>
    </div>
    <div class="grid sm:grid-cols-2 gap-4 place-content-start">
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
                <h3 class="h3 font-bold">{resource.title}</h3>
                <p>{resource.description}</p>
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
