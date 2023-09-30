<script lang="ts">
    import IconEarth from '~icons/ion/earth'
    import IconLibrary from '~icons/ion/library'
    import IconPeopleFill from '~icons/bi/people-fill'

    import SectionCard from '$components/SectionCard.svelte'
</script>

<div class="grid sm:grid-cols-[250px_1fr] gap-8 pb-8 place-items-center">
    <div class="max-w-sm mx-auto">
        <img
            src="/undraw_connected_world_wuay.svg"
            alt="Map of a connected world with dots and linked lines between continents"
        />
    </div>
    <div class="max-w-md mx-auto sm:mx-0 place-self-start">
        <p class="pb-4">
            Reconnect.earth is a collaborative <span class="text-primary-500"
                >map</span
            >
            and <span class="text-primary-500">compass</span> for navigating a rapidly
            changing world.
        </p>
        <p class="pb-4">
            The <span class="text-primary-500">map</span> is an emerging library
            of resources and activities, co-created and improved by the community.
        </p>
        <p>
            The <span class="text-primary-500">compass</span> is a set of principles
            inspired by Doughnut Economics, helping us create a thriving future.
        </p>
    </div>
</div>

<div class="grid sm:grid-cols-3 gap-4 mt-8">
    <SectionCard
        title="The Reconnect.earth process"
        text="An invitation to reflect on how we all can live well while doing good in the world."
        cta="Explore"
        href="#"><IconEarth slot="icon" class="mx-auto w-8 h-8" /></SectionCard
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

<div class="max-w-prose mx-auto">
    <p class="mb-4 mt-16 font-bold text-2xl">
        How can we all live meaningful and healthy lives? How can we do this <em
            >while</em
        > contributing a future with wellbeing for all, within the planetary boundaries?
    </p>
    <p class="mb-4">
        This might feel like a daunting task, given how the metacrisis is
        affecting the world (link to what we mean with the metacrisis). Many
        problems in today's world arise from disconnection - from ourselves,
        each other, and from the living Earth. Up until now, efforts to tackle
        these issues have unfortunately been focused on the symptoms of the
        metacrisis, rather than the underlying causes.
    </p>

    <p class="mb-4">
        We need a more systematic approach and we need to <span
            class="text-primary-500">reconnect to what matters</span
        >. We can redefine what it means to be an active citizen, prioritising
        wellbeing on all levels while using more potent leverage points to more
        effectively respond to the metacrisis.
    </p>

    <p>
        Reconnect.earth is a process and growing library of resources and
        activities to help you and your community to learn and increase your
        impact.
    </p>
</div>

<hr class="my-16" />

<!-- IDEA: Visualise the process as a tree with five branches. Then as you scroll, a new section is highlighted -->

<div class="max-w-prose mx-auto">
    <h2 class="h1 font-bold gradient-heading pb-4">
        The Reconnect.earth process
    </h2>

    <p class="pb-4">
        <span class="text-primary-500">The helping hand</span> symbolises how this
        is both a personal and a collective journey. By collaborating, we empower
        ourselves and each other to make change possible.
    </p>

    <p class="pb-4">
        There are five dimensions of learning and practice to help turn the
        metacrisis from an abstract threat into actionable pathways towards a
        better future.
    </p>
</div>

<div class="grid grid-cols-[3fr_1fr] gap-8 max-w-lg mx-auto pt-4">
    <img src="/hand.svg" alt="Hand" class="w-full place-self-center" />
    <div class="flex flex-col justify-around font-bold gap-2">
        <h2 class="h2 pb-1 gradient-heading">Reclaim</h2>
        <h2 class="h2 pb-1 gradient-heading">Reflect</h2>
        <h2 class="h2 pb-1 gradient-heading">Reconnect</h2>
        <h2 class="h2 pb-1 gradient-heading">Reimagine</h2>
        <h2 class="h2 pb-1 gradient-heading">Regenerate</h2>
    </div>
</div>

<!-- IDEA: After learning about the framework, the first tree is joined by more trees, forming a forest. -->
<!-- IDEA: Even further down, the view zooms out and you see forests and trees all over the Earth. Then finally, reconnect.earth and some CTA -->
