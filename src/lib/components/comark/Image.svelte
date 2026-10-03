<script lang="ts">
  import { getImage } from '#lib/content/get-image.remote.js'

  const { src, alt }: { src: string; alt: string } = $props()

  const imageSrc = $derived(await getImage(src))
</script>

<enhanced:img src={imageSrc} {alt} />
