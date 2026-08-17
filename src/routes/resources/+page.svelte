<script lang="ts">
  import Resources from '#lib/components/Resources.svelte'

  let { data } = $props()
  let { resources } = $derived(data)
</script>

<Resources {resources} />
