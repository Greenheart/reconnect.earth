<script lang="ts">
    import Img from '@zerodevx/svelte-img'
    import IconEarth from '~icons/ion/earth'
    import IconLibrary from '~icons/ion/library'
    import IconPeopleFill from '~icons/bi/people-fill'
    import IconShare from '~icons/ri/share-box-fill'

    import treeOfReconnection from '$lib/assets/tree-of-reconnection.jpg?as=run'
    import SectionCard from '$components/SectionCard.svelte'
    import type { PageData } from './$types'

    export let data: PageData
    $: ({ apps } = data)
</script>

<div class="flex flex-col sm:flex-row gap-8 pb-8 items-center">
    <div class="max-w-sm sm:max-w-[250px]">
        <img
            src="/undraw_connected_world_wuay.svg"
            alt="Map of a connected world with dots and linked lines between continents"
        />
    </div>
    <div class="max-w-prose">
        <p class="pb-4">
            Reconnect.earth is a collaborative <span class="text-primary-500"
                >map</span
            >
            and <span class="text-primary-500">compass</span> for navigating a rapidly
            changing world.
        </p>
        <p class="pb-4">
            The <span class="text-primary-500">map</span> is the result of exploring
            pathways towards a thriving future, together with the community. The
            map includes the Reconnect.earth process and an emerging library of resources
            and activities.
        </p>
        <p>
            The <span class="text-primary-500">compass</span> is a set of principles
            inspired by Doughnut Economics, helping us ensure the wellbeing for all
            within the means of the planet.
        </p>
    </div>
</div>

<div class="grid sm:grid-cols-3 gap-4 mt-8">
    <SectionCard
        title="The Reconnect.earth process"
        text="Pathways towards how we all can live well while doing good in the world."
        cta="Explore"
        href="#process"
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
        > contributing to a future with wellbeing for all, within the planetary boundaries?
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

    <p class="pb-4">
        Reconnect.earth is a collaborative <span class="text-primary-500"
            >map</span
        >
        and <span class="text-primary-500">compass</span> for navigating a rapidly
        changing world. The goal is to explore and share pathways towards how we
        all can thrive in life while doing good in the world.
    </p>
</div>

<div class="my-16 divider">
    🞉 <IconEarth class="text-xl mx-2" /> 🞉
</div>

<div class="max-w-prose mx-auto">
    <h2 class="h1 font-bold gradient-heading" id="process">
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

<div class="my-16 divider">
    🞉 <IconEarth class="text-xl mx-2" /> 🞉
</div>

<div class="max-w-prose mx-auto">
    <h2 class="h1 font-bold gradient-heading" id="activities">Activities</h2>

    <!-- IDEA: find a good image or visual to showcase what collaborative activities could mean -->

    <p class="py-4">
        To make it easier to engage with and participate in the Reconnect.earth
        process, we need to go beyond the thinking dimension and learn together
        with peers. The community has gathered and experimented with different
        types of activities that makes the process of change both social and
        fun. After all, this is not just about surviving - but thriving!
    </p>

    <p class="pb-4">
        The library of activities includes everything from workshops and
        learning circles to creative sessions and civic tech hackathons. Just
        like the
        <a href="/resources" class="link">resource library</a>, the activities
        are co-created by and for the community. Welcome to share your favourite
        ways of engaging!
    </p>
</div>

<div class="my-16 divider">
    🞉 <IconEarth class="text-xl mx-2" /> 🞉
</div>

<div class="max-w-prose mx-auto">
    <h2 class="h1 font-bold gradient-heading">Our free and open source apps</h2>

    <p class="pb-8 pt-4">
        To make this journey more fun, engaging and accessible, we're designing
        and developing <a
            href="https://fsfe.org/freesoftware/#freedoms"
            class="link">free and open source</a
        > apps. Like all our projects, these are co-created by and for the community.
        Welcome to contribute with feedback, ideas, and improvements!
    </p>

    <div class="grid gap-4 justify-center">
        {#each apps as app}
            <div class="card p-4 grid gap-4 max-w-xl xs:grid-cols-[2fr_2fr]">
                <div class="max-h-80 xs:max-h-full xs:w-48 mx-auto">
                    <Img
                        src={app.image}
                        alt={app.name + ' screenshot'}
                        class="order-3 sm:order-1 w-full h-full object-contain !bg-transparent place-self-center"
                    />
                </div>
                <div class="sm:px-4 order-2">
                    <h3 class="h3 font-bold mb-4">
                        <a href={app.link} class="link">{app.name}</a>
                    </h3>
                    <p>{app.description}</p>
                </div>

                <div
                    class="flex justify-end space-x-4 items-center text-base col-span-full order-last"
                >
                    <a href={app.git} class="link">Contribute</a>
                    <a
                        class="btn variant-soft rounded-sm gap-1"
                        href={app.link}
                        target="_blank"
                        ><span class="flex items-stretch">Explore</span>
                        <IconShare />
                    </a>
                </div>
            </div>
        {/each}
    </div>
</div>

<!-- IDEA: Visualise the process as a tree with five branches. Then as you scroll, a new section is highlighted -->
<!-- IDEA: After learning about the framework, the first tree is joined by more trees, forming a forest. -->
<!-- IDEA: Even further down, the view zooms out and you see forests and trees all over the Earth. Then finally, reconnect.earth and some CTA -->
