<script lang="ts">
    import type { SearchStore } from '$lib/stores/search'
    import { bookmarks } from '$lib/stores/bookmarks'
    // import { SlideToggle } from '@skeletonlabs/skeleton'

    import IconLibrary from '~icons/ion/library'
    import IconBookmarksFill from '~icons/bi/bookmarks-fill'

    import SearchInput from './SearchInput.svelte'
    import {
        RESOURCE_CATEGORIES,
        RESOURCE_TYPES,
        type ResourceTag,
    } from '$lib/constants'
    import type { Resource } from '$lib/schema'
    import { cx } from '$lib/utils'

    export let searchStore: SearchStore
    export let resources: Resource[]
    let className = ''
    export { className as class }

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

    // IDEA: Move toggleTag into the searchStore, to keep logic together
    function toggleTag(tag: ResourceTag) {
        if ($searchStore.tags.includes(tag)) {
            $searchStore.tags = $searchStore.tags.filter((t) => t !== tag)
        } else {
            $searchStore.tags = [...$searchStore.tags, tag]
        }
    }
</script>

<div class={className}>
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
            disabled={!bookmarks.value.length ||
                !bookmarks.value.some((bookmark) =>
                    $searchStore.filtered.some(
                        (resource) => resource.link === bookmark,
                    ),
                )}
        >
            <IconBookmarksFill />
            <span class="flex-grow text-left">Bookmarks</span>
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
                <span class="text-gray-300">({countResourcesWithTag(tag)})</span
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
                <span class="text-gray-300">({countResourcesWithTag(tag)})</span
                >
            </button>
        {/each}
    </div>
</div>
