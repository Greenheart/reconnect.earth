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
        </div>
    {/each}
</div>
