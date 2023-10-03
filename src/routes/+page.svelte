<script lang="ts">
    import Img from '@zerodevx/svelte-img'
    import IconEarth from '~icons/ion/earth'
    import IconLibrary from '~icons/ion/library'
    import IconPeopleFill from '~icons/bi/people-fill'

    import treeOfReconnection from '$lib/assets/tree-of-reconnection.jpg?as=run'
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
        href="#the-process"
        ><IconEarth slot="icon" class="mx-auto w-8 h-8" /></SectionCard
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
        href="#activities"
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

<div class="max-w-prose mx-auto">
    <h2 class="h1 font-bold gradient-heading" id="the-process">
        The Reconnect.earth process
    </h2>

    <!-- IDEA: Either have the text within the image to make it consistent and easy to use on all screen sizes -->
    <!-- IDEA: Or add interactive links on top of the tree image, making the experience more engaging, and easier to style in a consistent way with the rest of the project -->
    <div class="grid py-4">
        <Img
            class="rounded-md"
            src={treeOfReconnection}
            alt="The Tree of Reconnection, featuring a lush green scenery, deep in a forest. At the center is a large tree with many branches. On each of the major branches is a text label representing the 5 branches of the Reconnect.earth process: Reclaim, Reflect, Reconnect, Reimagine and Regenerate. Of these five branches, Reconnect is actually at the root of the tree (symbolising connection to the root system)."
        />
        <p class="text-center pt-2 italic">The Tree of Reconnection</p>
    </div>

    <!-- <p class="pb-4">
        <span class="text-primary-500">The helping hand</span> symbolises how this
        is both a personal and a collective journey. By collaborating, we empower
        ourselves and each other to make change possible.
    </p> -->

    <!-- <p class="pb-4">
        This is an iterative process, and is both a personal and collective
        journey. By collaborating, we empower ourselves and each other to make
        change possible. Just like how trees in the forest work together to
        create resilient and healthy ecosystems, we can collaborate to empower
        ourselves and each other to help us thrive in life while doing good in
        the world.
    </p> -->

    <p class="pb-4">
        Change starts within and is both personal and collective. By
        collaborating, we empower ourselves and each other to thrive in life
        while doing good in the world - very similar to how trees in the forest
        work together to create resilient and healthy ecosystems.
    </p>

    <p class="pb-4">
        There are five branches of learning and practice to help turn the
        metacrisis from an abstract threat into actionable pathways towards a
        better future.
    </p>

    <!-- IDEA: Maybe have symbols for each branch? -->
    <div class="flex flex-col justify-around font-bold gap-2 pt-8">
        <h2 class="h2 gradient-heading">Reclaim</h2>
        <h2 class="h2 gradient-heading">Reflect</h2>
        <h2 class="h2 gradient-heading">Reconnect</h2>
        <h2 class="h2 gradient-heading">Reimagine</h2>
        <h2 class="h2 gradient-heading">Regenerate</h2>
    </div>
</div>

<hr class="my-16" />

<div class="max-w-prose mx-auto">
    <h2 class="h1 font-bold gradient-heading" id="activities">Activities</h2>

    <!-- TODO: find a good image or visual to showcase what collaborative activities could mean -->
    <div class="grid py-4">
        <Img
            class="rounded-md"
            src={treeOfReconnection}
            alt="The Tree of Reconnection, featuring a lush green scenery, deep in a forest. At the center is a large tree with many branches. On each of the major branches is a text label representing the 5 branches of the Reconnect.earth process: Reclaim, Reflect, Reconnect, Reimagine and Regenerate. Of these five branches, Reconnect is actually at the root of the tree (symbolising connection to the root system)."
        />
        <p class="text-center pt-2 italic">The Tree of Reconnection</p>
    </div>

    <p class="pb-4">
        To make it easier to engage with and participate in the Reconnect.earth
        process, we need to go beyond the thinking dimension and learn in a
        relational way together with peers. To make this happen, the community
        has curated and experimented with multiple kinds of activities that
        makes the process of change both social and fun. After all, this is not
        just about surviving - but thriving!
    </p>

    <!-- IDEA: Maybe use a shorter version -->
    <!-- <p class="pb-4">
        To make it easier to engage with and participate in the Reconnect.earth
        process, the community has curated and experimented with multiple kinds
        of activities. Activities makes change social and fun. After all, this
        is not just about surviving - but thriving!
    </p> -->

    <p class="pb-4">
        The library of activities include everything from workshops, learning
        circles to creative sessions and civic tech hackathons. Just like the
        <a href="/resources" class="text-primary-500 underline"
            >resource library</a
        >, this is a co-created by and for the community. Welcome to share your
        favourite ways of engaging!
    </p>
</div>

<!-- TODO: Maybe describe the map (resources and activities?) -->
<!-- TODO: Maybe describe the compass (principles)? -->

<!-- IDEA: Visualise the process as a tree with five branches. Then as you scroll, a new section is highlighted -->
<!-- IDEA: After learning about the framework, the first tree is joined by more trees, forming a forest. -->
<!-- IDEA: Even further down, the view zooms out and you see forests and trees all over the Earth. Then finally, reconnect.earth and some CTA -->
