<script lang="ts">
  import DevOnly from '#lib/components/DevOnly.svelte'
</script>

<DevOnly loader={async () => (await import('#lib/components/Activities.svelte')).default} />
