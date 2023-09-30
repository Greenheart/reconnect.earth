<script lang="ts">
    import IconTree from '~icons/ri/tree-fill'
    // import IconEarth from '~icons/ri/earth-line'
    import IconLibrary from '~icons/ion/library'
    import IconPeopleFill from '~icons/bi/people-fill'

    import SectionCard from '$components/SectionCard.svelte'
</script>

<div class="max-w-xl grid sm:grid-cols-2 gap-8 pb-8 place-items-center">
    <img
        src="/undraw_connected_world_wuay.svg"
        alt="Map of a connected world with dots and linked lines between continents"
    />
    <p>
        Reconnect.earth is a collaborative <span class="text-primary-500"
            >map</span
        >
        and <span class="text-primary-500">compass</span> for navigating a rapidly
        changing world.
    </p>
</div>

<div class="grid sm:grid-cols-3 gap-4 mt-8">
    <SectionCard
        title="The Reconnect.earth process"
        text="An invitation to reflect on how we all can live well while doing good in the world."
        cta="Explore"
        href="#"><IconTree slot="icon" class="mx-auto w-8 h-8" /></SectionCard
    >
    <SectionCard
        title="Resource library"
        text="Books, podcasts, videos (and more) about the metacrisis and how we can create a better future."
        cta="Be curious"
        href="/resources"
        ><IconLibrary slot="icon" class="mx-auto w-8 h-8" /></SectionCard
    >
    <SectionCard
        title="Activities"
        text="Ways to engage with the Reconnect.earth process on your own or together with others."
        cta="Get started"
        href="#"
        ><IconPeopleFill slot="icon" class="mx-auto w-8 h-8" /></SectionCard
    >
</div>

<p class="mb-4 mt-16">
    How can we all live meaningful and healthy lives? How can we do this <em
        >while</em
    > contributing a future with wellbeing for all, within the planetary boundaries?
</p>
<p>
    This might feel like a daunting task, given how the metacrisis is affecting
    the world (link to what we mean with the metacrisis).
</p>

<p>
    Many of the problems today stem from disconnection - from ourselves, each
    other, and from the living Earth.
</p>

<p>
    Today, a lot of efforts are unfortunately primarily focusing on the symptoms
    of the metacrisis, rather than the underlying causes.
</p>

<p class="mb-4">
    We need a more systematic approach and we need to reconnect. We can redefine
    what it means to be an active citizen, prioritising wellbeing on all levels
    while using more potent leverage points to more effectively respond to the
    metacrisis.
</p>

<p>
    Reconnect.earth is a process and growing library of resources and activities
    to help you and your community to learn and increase your impact.
</p>

<hr class="my-16" />

<!-- IDEA: Visualise the process as a tree with five branches. Then as you scroll, a new section is highlighted -->

<h2 class="h2 font-bold mb-4 gradient-heading">Reclaim</h2>
<h2 class="h2 font-bold mb-4 gradient-heading">Reflect</h2>
<h2 class="h2 font-bold mb-4 gradient-heading">Reconnect</h2>
<h2 class="h2 font-bold mb-4 gradient-heading">Reimagine</h2>
<h2 class="h2 font-bold mb-4 gradient-heading">Regenerate</h2>

<!-- IDEA: After learning about the framework, the first tree is joined by more trees, forming a forest. -->
<!-- IDEA: Even further down, the view zooms out and you see forests and trees all over the Earth. Then finally, reconnect.earth and some CTA -->
