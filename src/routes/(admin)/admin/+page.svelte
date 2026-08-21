<script lang="ts">
  import { init } from '@sveltia/cms'
  import config from './cms-config'

  init({ config })
</script>

<svelte:head>
  <meta charset="utf-8" />
  <meta name="robots" content="noindex" />
  <title>Sveltia CMS</title>
</svelte:head>

<!-- TODO: Investigate if there is a way to prevent a white flashing background when the CMS loads -->
<div style="background: #1e2124">
  <div id="nc-root"></div>
</div>
