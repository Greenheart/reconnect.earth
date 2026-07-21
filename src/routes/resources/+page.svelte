<script lang="ts">
  import Resources from '$components/Resources.svelte'

  let { data } = $props()
  let { resources } = $derived(data)
</script>

<Resources {resources} />
