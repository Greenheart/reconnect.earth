<script lang="ts">
  import { onMount } from 'svelte'
  import { init } from '@sveltia/cms'
  import config from './cms-config'

  onMount(() => {
    init({ config })
  })
</script>

<svelte:head>
  <meta name="robots" content="noindex" />
  <title>{config.app_title}</title>
</svelte:head>

<!-- TODO: Investigate if there is a way to prevent a white flashing background when the CMS loads -->
<div style="background: #1e2124">
  <div id="nc-root"></div>
</div>
