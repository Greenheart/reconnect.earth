<script lang="ts">
    import Resources from '$components/Resources.svelte'
    import type { PageData } from './$types'

    export let data: PageData
    $: ({ resources } = data)
</script>

<div class="mx-auto max-w-screen-lg mt-8 px-4">
    <h1 class="h1 font-bold mb-4">Reconnect.earth</h1>

    <h2 class="h2 mb-4">Let's create a thriving future!</h2>

    <p class="mb-4">
        Towards a meaningful, fulfilling life where our way of living
        contributes to increased resilience and wellbeing for all, within the
        means of the planet.
    </p>

    <hr class="my-16" />

    <Resources {resources} />

    <hr class="my-16" />

    <h2 class="h2 font-bold mb-4">Reclaim</h2>
    <h2 class="h2 font-bold mb-4">Reflect</h2>
    <h2 class="h2 font-bold mb-4">Reconnect</h2>
    <h2 class="h2 font-bold mb-4">Re-imagine</h2>
    <h2 class="h2 font-bold mb-4">Regenerate</h2>
</div>
