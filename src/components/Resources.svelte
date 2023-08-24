<script lang="ts">
    import type { Resource } from '$lib/schema'

    export let resources: Resource[]
</script>

<h2 class="h2 font-bold mb-2">Resources</h2>

<p class="mb-8">
    Explore topics related to reconnect.earth. Learn how we can create a future
    where both humanity and the living planet thrive together.
</p>

<!-- IDEA: Add search field to filter resources -->
<!-- IDEA: Add filters to only show specific tags. Add tags to array and then filter resources with those tags. Reset button  -->
<div class="grid grid-cols-2 gap-4">
    {#each resources as resource}
        <div
            class="card p-4 grid gap-2 grid-rows-[min-content_min-content_1fr]"
        >
            <h3 class="h3 font-bold">{resource.title}</h3>
            <p>{resource.description}</p>
            <div class="flex gap-2 items-start text-sm">
                <!-- TODO: implement getSortedTags() to ensure consistent order -->
                <!-- IDEA: Maybe use colors for different types of tags -->
                {#each resource.tags as tag}
                    <span>#{tag}</span>
                {/each}
            </div>
            <div class="flex justify-end">
                <a
                    class="btn variant-outline btn-sm rounded-sm gap-1"
                    href={resource.link}
                    target="_blank"
                    ><span>Explore</span><svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-6 h-6"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                        />
                    </svg></a
                >
            </div>
        </div>
    {/each}
</div>
