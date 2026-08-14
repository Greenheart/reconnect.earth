<script lang="ts">
  import { page } from '$app/state'
  import { Button } from '$lib/components/ui/button'
  import { SITE_NAME } from '$lib/constants'
</script>

<div class="flex flex-col items-center justify-center">
  {#if page.status === 404}
    <h2 class="h2 gradient-heading mb-8 font-bold">Sorry, this page does not exist</h2>
    <Button href="/">Explore {SITE_NAME}</Button>
  {:else}
    <h2 class="h2 gradient-heading mb-8 font-bold">Oops! Something went wrong</h2>
    <p class="mb-8">
      <span>HTTP {page.status} - </span>
      {page.error?.message}
    </p>
    <Button href="/">Explore {SITE_NAME}</Button>
  {/if}
</div>
