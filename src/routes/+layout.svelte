<script lang="ts">
    import { SITE_NAME } from '$lib/constants'

    import '@fontsource-variable/playfair-display'
    import '@fontsource-variable/rosario'
    import '@skeletonlabs/skeleton/themes/theme-skeleton.css'
    import '@skeletonlabs/skeleton/styles/skeleton.css'
    import '../app.css'
</script>

<svelte:head>
    <title>{SITE_NAME}</title>
</svelte:head>

<slot />
