<script lang="ts">
    export let title: string
    export let text: string
    export let href: string
    export let cta: string
</script>

<div
    class="card p-4 grid gap-2 grid-rows-[min-content_min-content_min-content_1fr] max-w-md mx-auto sm:mx-0"
>
    <slot name="icon" />
    <h3 class="h4 text-center font-bold text-primary-500">{title}</h3>
    <p class="mb-2 text-lg">
        {text}
    </p>
    <a
        {href}
        class="btn variant-filled-primary justify-self-center self-end w-44"
        >{cta}</a
    >
</div>
