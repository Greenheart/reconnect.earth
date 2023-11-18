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
            How can we all live meaningful and healthy lives while doing good in
            the world? And <span class="italic">how on earth</span> can we do this
            in a rapidly changing, uncertain and disconnected world, shaped by the
            metacrisis?
        </p>
        <p class="pb-4">
            Reconnect.earth is a process to explore questions like these, and
            find pathways towards futures with wellbeing for all within the
            means of the planet.
        </p>
        <p class="pb-4">
            This is an invitation to deepen your connection with yourself, other
            people and the living Earth.
        </p>
        <p class="font-bold">Welcome to Reconnect.earth!</p>
    </div>
</div>

<div class="grid sm:grid-cols-3 gap-4 mt-8">
    <div class="col-span-full pb-4 max-w-prose">
        <h2 class="h2 gradient-heading">How to engage with Reconnect.earth</h2>
        <p class="pt-4">
            This is a collaborative project, created by and for people and
            communites working towards a wellbeing economy, in service of life.
        </p>
        <p class="pt-4">
            On this website, you will find the Reconnect.earth process, an
            emerging library of resources and a collection of activities. We are
            also developing a suite of <a href="#apps" class="anchor"
                >free and open source apps</a
            > to help you along your journey of learning, exploration and action.
        </p>
    </div>

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
        text="Ways to engage with the Reconnect.earth process, both personally and together with others."
        cta="Get started"
        href="#activities"
        ><IconPeopleFill slot="icon" class="mx-auto w-8 h-8" /></SectionCard
    >
</div>

<div class="my-16 divider">
    ○ <IconEarth class="text-xl mx-2" /> ○
</div>

<div class="max-w-prose mx-auto">
    <h2 class="h1 gradient-heading" id="process">
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

    <p>
        There are five branches of learning and practice to help turn the
        metacrisis from an abstract threat into actionable pathways towards a
        better future.
    </p>

    <!-- IDEA: Maybe have symbols for each branch? -->
    <div class="flex flex-col justify-around gap-8 pt-8">
        <div>
            <h2 class="h2 gradient-heading mb-3">Reclaim</h2>
            <p class="pb-4">
                To change culture and economics towards wellbeing for all within
                the means of the planet, we first of all need to create
                conditions that make change possible. This is something we need
                to do together: reclaiming our time, energy, attention, agency
                and socioeconomic conditions. Start with yourself, and then
                support others to do the same.
            </p>
            <p>
                Over time, this empowers us to thrive in life while engaging
                further in ways that feel right for us. This part of the process
                is key to help us shift our mindsets from mere consumers to
                active citizens and co-creators of the future.
            </p>
        </div>

        <div>
            <h2 class="h2 gradient-heading mb-3">Reflect</h2>
            <p class="pb-4">
                To develop as a person it is important to reflect about – among
                others – your values, your behaviours, your relationship to
                yourself, relationships with other people and your relationship
                to the living ecosystems. As a help, you can find a collection
                of questions on this website. You can do it by yourself, but we
                encourage you do to this together with other people.
            </p>
            <p>
                Part of the Reflect branch is also to learn more about how the
                complex world is working and how things are connected. Be
                curious and explore the different resources in the <a
                    href="/resources"
                    class="anchor">library</a
                >, and other resources which you find interesting!
            </p>
        </div>

        <div>
            <h2 class="h2 gradient-heading mb-3">Reconnect</h2>
            <p class="pb-4">
                Many of the world's problems today stem from a deep
                disconnection - from ourselves, from other people and from the
                living planet.
            </p>
            <p class="pb-4">
                Therefore it is important to reconnect to what matters:
            </p>
            <!-- TODO: Maybe add list markers -->
            <ul class="list">
                <li>
                    Reconnect with yourself: become aware of what you feel in
                    your body. Recognise your thoughts, feelings, what you need
                    to thrive in life and what you find meaningful.
                </li>
                <li>
                    Reconnect with other people, both locally and globally, and
                    recognise their needs, and become aware of how they are
                    interconnected with your life.
                </li>
                <li>
                    Reconnect with other living beings and with the living
                    planet.
                </li>
            </ul>
        </div>

        <div>
            <h2 class="h2 gradient-heading mb-3">Reimagine</h2>
            <blockquote class="blockquote mb-4">
                "We cannot create what we can't imagine." — Lucille Clifton
            </blockquote>
            <p class="pb-4">
                As the metacrisis unfolds and the world seems increasingly
                unstable, it's easy to get distracted and feel stuck with doom
                and gloom. However, one of the most important forms of
                constructive action is to envision a better future, and to
                explore and experiment with pathways towards it.
            </p>
            <p>
                By focusing on what we want to create rather than on what we try
                to avoid, we become much more effective changemakers. The good
                news is that the process of reimaging the future is a skill we
                can practice, and there are plenty of resources and activities
                to get inspiration.
            </p>
        </div>

        <div>
            <h2 class="h2 gradient-heading mb-3">Regenerate</h2>
            <p class="pb-4">
                Create what you have imagined. Make the world a better place.
                It's not enough to reduce our negative footprint – we need to
                increase our positive handprint. It is not enough to do things
                sustainably – we need to make a net positive impact.
            </p>
            <p>
                If we can participate in regenerative actions at all levels
                (individual, in communities and for the living planet) we will
                get positive feedback loops and we strengthen the capacity to do
                even more positive actions in the future.
            </p>
        </div>
    </div>
</div>

<div class="my-16 divider">
    ○ <IconEarth class="text-xl mx-2" /> ○
</div>

<div class="max-w-prose mx-auto" id="activities">
    <h2 class="h1 gradient-heading">Activities</h2>

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
        <a href="/resources" class="anchor">resource library</a>, the activities
        are co-created by and for the community. Welcome to share your favourite
        ways of engaging!
    </p>
</div>

<div class="my-16 divider">
    ○ <IconEarth class="text-xl mx-2" /> ○
</div>

<div class="max-w-prose mx-auto" id="apps">
    <h2 class="h1 gradient-heading">Our free and open source apps</h2>

    <p class="pb-8 pt-4">
        To make this journey more fun, engaging and accessible, we're designing
        and developing <a
            href="https://fsfe.org/freesoftware/#freedoms"
            class="anchor">free and open source</a
        > apps. Like all our projects, these are co-created by and for the community.
        Welcome to contribute with feedback, ideas, and improvements!
    </p>

    <div class="grid gap-4 justify-center">
        {#each apps as app}
            <div
                class="card p-4 grid gap-4 max-w-xl xs:grid-cols-[min-content_1fr]"
            >
                <div class="max-h-80 xs:max-h-full xs:w-48">
                    <Img
                        src={app.image}
                        alt={app.name + ' screenshot'}
                        class="order-3 sm:order-1 w-full h-full object-contain !bg-transparent place-self-center rounded-xl"
                    />
                </div>
                <div
                    class="order-2 grid grid-rows-[min-content_1fr_min-content]"
                >
                    <h3 class="h3 font-bold mb-4">
                        <a href={app.link} class="anchor">{app.name}</a>
                    </h3>
                    <p class="pb-2">{app.description}</p>

                    <div
                        class="flex justify-between space-x-4 items-center text-base"
                    >
                        <a href={app.git} class="anchor">Contribute</a>
                        <a
                            class="btn variant-soft rounded-sm gap-1"
                            href={app.link}
                            target="_blank"
                            ><span class="flex items-stretch">Explore</span>
                            <IconShare />
                        </a>
                    </div>
                </div>
            </div>
        {/each}
    </div>
</div>

<!-- IDEA: Visualise the process as a tree with five branches. Then as you scroll, a new section is highlighted -->
<!-- IDEA: After learning about the framework, the first tree is joined by more trees, forming a forest. -->
<!-- IDEA: Even further down, the view zooms out and you see forests and trees all over the Earth. Then finally, reconnect.earth and some CTA -->
