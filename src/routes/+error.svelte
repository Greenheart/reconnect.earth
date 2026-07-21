<script lang="ts">
  import { page } from '$app/state'
  import { SITE_NAME } from '$lib/constants'
</script>

<div class="flex flex-col items-center justify-center">
  {#if page.status === 404}
    <h2 class="h2 mb-8 font-bold gradient-heading">Sorry, this page does not exist</h2>
    <a href="/" class="variant-filled-primary btn">Explore {SITE_NAME}</a>
  {:else}
    <h2 class="h2 mb-8 font-bold gradient-heading">Oops! Something went wrong</h2>
    <p class="mb-8">
      <span>HTTP {page.status} - </span>
      {page.error?.message}
    </p>
    <a href="/" class="variant-filled-primary btn">Explore {SITE_NAME}</a>
  {/if}
</div>
