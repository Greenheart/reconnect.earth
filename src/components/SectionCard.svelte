<script lang="ts">
  export let title: string
  export let text: string
  export let href: string
  export let cta: string
</script>

<div
  class="card mx-auto grid max-w-sm grid-rows-[min-content_min-content_min-content_1fr] gap-2 p-4 sm:mx-0"
>
  <slot name="icon" />
  <h3 class="h4 text-center font-bold text-primary-500">{title}</h3>
  <p class="mb-2 text-base md:text-lg">
    {text}
  </p>
  <a {href} class="variant-filled-primary btn w-full self-end justify-self-center sm:w-40 md:w-48"
    >{cta}</a
  >
</div>
