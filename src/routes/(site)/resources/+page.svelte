<script lang="ts">
  import Resources from '#lib/components/Resources.svelte'
  import { getResources } from '#lib/content/resources.remote.js'

  const resources = await getResources()
</script>

<Resources {resources} />
