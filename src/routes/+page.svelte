<script lang="ts">
    import Resources from '$components/Resources.svelte'
    import type { PageData } from './$types'

    export let data: PageData
    $: ({ resources } = data)
</script>

<div class="mx-auto max-w-screen-lg mt-8 px-4">
    <h1 class="h1 font-bold mb-8">Reconnect to what matters</h1>

    <h2 class="h2 mb-16">
        <!-- Thrive in life while contributing to a thriving future -->
        <!-- Live well while doing good in the world -->
        Thrive in life while doing good in the world
    </h2>

    <p class="mb-4">
        How can we all live meaningful and healthy lives? How can we do this <em
            >while</em
        > contributing a future with wellbeing for all, within the planetary boundaries?
    </p>
    <p>
        This might feel like a daunting task, given how the metacrisis is
        affecting the world (link to what we mean with the metacrisis).
    </p>

    <p>
        Many of the problems today stem from disconnection - from ourselves,
        each other, and from the living planet.
    </p>

    <p>
        Today, a lot of efforts are unfortunately primarily focusing on the
        symptoms of the metacrisis, rather than the underlying causes.
    </p>

    <p>
        We need a more systematic approach and we need to reconnect. We can
        redefine what it means to be an active citizen, prioritising wellbeing
        on all levels while using more potent leverage points to more
        effectively respond to the metacrisis.
    </p>

    <p>
        Reconnect.earth is a process and growing library of resources and
        activities to help you and your community to learn and increase your
        impact.
    </p>

    <div class="grid grid-cols-3 gap-4 mt-8">
        <div
            class="card p-4 grid gap-2 grid-rows-[min-content_min-content_1fr]"
        >
            <h3 class="h4 text-center font-bold">
                The Reconnect.earth process
            </h3>
            <p class="mb-2">
                An invitation to reflect on how we all can live well while doing
                good in the world.
            </p>
            <a
                href="#"
                class="btn variant-filled btn-sm justify-self-center self-end w-44"
                >Explore</a
            >
        </div>
        <div
            class="card p-4 grid gap-2 grid-rows-[min-content_min-content_1fr]"
        >
            <h3 class="h4 text-center font-bold">Resource library</h3>
            <p class="mb-2">
                Books, podcasts, videos (and more) about the metacrisis and how
                we can create a better future.
            </p>
            <a
                href="#"
                class="btn variant-filled btn-sm justify-self-center self-end w-44"
                >Follow your curiosity</a
            >
        </div>
        <div
            class="card p-4 grid gap-2 grid-rows-[min-content_min-content_1fr]"
        >
            <h3 class="h4 text-center font-bold">Activities</h3>
            <p class="mb-2">
                Ways to engage with the Reconnect.earth process on your own or
                together with others.
            </p>
            <a
                href="#"
                class="btn variant-filled btn-sm justify-self-center self-end w-44"
                >Get started</a
            >
        </div>
    </div>

    <hr class="my-16" />

    <Resources {resources} />

    <hr class="my-16" />

    <!-- IDEA: Visualise the process as a tree with five branches. Then as you scroll, a new section is highlighted -->

    <h2 class="h2 font-bold mb-4">Reclaim</h2>
    <h2 class="h2 font-bold mb-4">Reflect</h2>
    <h2 class="h2 font-bold mb-4">Reconnect</h2>
    <h2 class="h2 font-bold mb-4">Re-imagine</h2>
    <h2 class="h2 font-bold mb-4">Regenerate</h2>

    <!-- IDEA: After learning about the framework, the first tree is joined by more trees, forming a forest. -->
    <!-- IDEA: Even further down, the view zooms out and you see forests and trees all over the Earth. Then finally, reconnect.earth and some CTA -->
</div>
