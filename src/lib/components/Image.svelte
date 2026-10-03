<!--
@component

This can be used to load optimised images.

NOTE: When using `#asset` absolute paths, it's better to use `<enhanced:img>` directly
since this leads to better caching and performance.
-->
<script lang="ts">
  import { getImage } from '#lib/content/get-image.remote.js'

  const {
    src,
    alt,
    class: className,
    sizes,
  }: { src: string; alt: string; class?: string; sizes?: string } = $props()

  const imageSrc = $derived.by(() => {
    if (src.startsWith('#assets')) {
      throw new Error(
        'Use `<enhanced:img>` directly for images with `src="#assets/*" to improve performance`',
      )
    }
    return getImage(src)
  })
</script>

<enhanced:img src={await imageSrc} {alt} class={className} {sizes} />
