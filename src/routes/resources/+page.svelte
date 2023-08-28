<script lang="ts">
    import Resources from '$components/Resources.svelte'
    import type { PageData } from './$types'

    export let data: PageData
    $: ({ resources } = data)
</script>

<Resources {resources} />
