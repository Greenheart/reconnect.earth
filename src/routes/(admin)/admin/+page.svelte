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

<div id="nc-root"></div>
