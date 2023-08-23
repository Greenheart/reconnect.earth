<script lang="ts">
    import type { Resource } from '$lib/schema'

    export let resources: Resource[]
</script>

<h2 class="h2 font-bold mb-2">Resources</h2>

<p class="mb-4">
    Explore topics related to reconnect.earth. Learn how we can create a future
    where both humanity and the living planet thrive together.
</p>

<div class="grid grid-cols-2 gap-4">
    {#each resources as resource}
        <div class="card p-4">
            <h3 class="h3 mb-4">{resource.title}</h3>
            <p class="mb-4">{resource.description}</p>
            <div class="flex gap-1">
                <!-- TODO: implement getSortedTags() to ensure consistent order -->
                <!-- IDEA: Maybe use colors for different types of tags -->
                {#each resource.tags as tag}
                    <span class="text-sm">#{tag}</span>
                {/each}
            </div>
            <div class="flex justify-end mt-4">
                <a
                    class="btn variant-filled btn-sm rounded-sm gap-1"
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
