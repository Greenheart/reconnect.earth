<script lang="ts">
    import { page } from '$app/stores'
    import { SITE_NAME } from '$lib/constants'
</script>

<div class="flex flex-col items-center justify-center">
    {#if $page.status === 404}
        <h2 class="mb-8 h2 font-bold gradient-heading">
            Sorry, this page does not exist
        </h2>
        <a href="/" class="btn variant-filled-primary">Explore {SITE_NAME}</a>
    {:else}
        <h2 class="mb-8 h2 font-bold gradient-heading">
            Oops! Something went wrong
        </h2>
        <p class="mb-8">
            <span>HTTP {$page.status} - </span>
            {$page.error?.message}
        </p>
        <a href="/" class="btn variant-filled-primary">Explore {SITE_NAME}</a>
    {/if}
</div>
