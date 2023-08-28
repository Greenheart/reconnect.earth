<script lang="ts">
    import { onDestroy } from 'svelte'
    import { flip } from 'svelte/animate'
    import { quintOut } from 'svelte/easing'
    import { crossfade, fade } from 'svelte/transition'

    import IconShare from '~icons/ri/share-box-fill'

    import type { Resource } from '$lib/schema'
    import { createSearchStore, updateSearchResults } from '$lib/stores/search'
    import SearchInput from './SearchInput.svelte'

    export let resources: Resource[]

    const searchStore = createSearchStore({
        data: resources,
        getSearchTerms: ({ title, description, tags }) =>
            `${title} ${description} ${tags.join(' ')}`,
    })
    const unsubscribe = searchStore.subscribe((model) =>
        updateSearchResults(model),
    )

    onDestroy(() => unsubscribe)

    const [send, receive] = crossfade({
        duration: 500,
        easing: quintOut,
        fallback: (node) => {
            return fade(node, { duration: 300 })
        },
    })
</script>

<h2 class="h2 font-bold mb-2 gradient-heading">Resources</h2>

<p class="mb-4">
    Explore topics related to reconnect.earth. Learn how we can create a future
    where both humanity and the living planet thrive together.
</p>

<div class="mb-4 flex gap-2 items-center">
    <SearchInput {searchStore} />

    <span class="ml-4 text-sm"
        >Showing {$searchStore.filtered.length} / {resources.length}</span
    >
</div>

<!-- IDEA: Add filters to only show specific tags. Add tags to array and then filter resources with those tags. Reset button  -->
<div class="grid grid-cols-2 gap-4">
    {#each $searchStore.filtered as resource (resource.link)}
        {@const key = resource.link}
        <div
            class="card p-4 grid gap-2 grid-rows-[min-content_min-content_1fr]"
            animate:flip={{ duration: 400 }}
            in:send={{ key }}
            out:receive={{ key }}
        >
            <h3 class="h3 font-bold">{resource.title}</h3>
            <p>{resource.description}</p>
            <div class="flex gap-2 items-start text-sm">
                {#each resource.tags as tag}
                    <span class="text-primary-500">#{tag}</span>
                {/each}
            </div>
            <div class="flex justify-end">
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
