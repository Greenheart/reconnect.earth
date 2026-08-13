<script lang="ts">
  interface Props {
    title: string
    text: string
    href: string
    cta: string
    icon?: import('svelte').Snippet
  }

  let { title, text, href, cta, icon }: Props = $props()
</script>

<div
  class="card mx-auto grid max-w-sm grid-rows-[min-content_min-content_min-content_1fr] gap-2 p-4 sm:mx-0"
>
  {@render icon?.()}
  <h3 class="h4 text-primary text-center font-bold">{title}</h3>
  <p class="mb-2 text-base md:text-lg">
    {text}
  </p>
  <a {href} class="variant-filled-primary btn w-full self-end justify-self-center sm:w-40 md:w-48"
    >{cta}</a
  >
</div>
