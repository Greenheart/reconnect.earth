<script lang="ts">
  import * as Card from '#lib/components/ui/card/index.js'
  import { Button } from '#lib/components/ui/button/index.js'

  import treeOfReconnection from '#assets/tree-of-reconnection.jpg?enhanced'
  import SectionCard from '#lib/components/SectionCard.svelte'
  import Divider from '#lib/components/Divider.svelte'
  import { getApps } from '#lib/content/apps.remote.js'

  const apps = await getApps()

  const allImages = import.meta.glob('#assets/**/*.{avif,jpeg,jpg,png,webp,svg}', {
    eager: true,
    query: { enhanced: true },
  }) as Record<string, { default: any }>

  function joinPath(parts: string[], separator = '/') {
    return parts.join(separator).replace(new RegExp(separator + '{1,}', 'g'), separator)
  }

  function getImage(filename: string) {
    const image = allImages[joinPath(['/src/assets', filename])]?.default
    if (!image) {
      throw new Error(`Image not found: ${filename}`)
    }
    return image
  }
</script>

<div class="flex flex-col items-center gap-8 pb-8 sm:flex-row">
  <div class="max-w-sm sm:max-w-[250px]">
    <img
      src="/undraw_connected_world_wuay.svg"
      alt="Map of a connected planet Earth with dots and linked lines between continents"
    />
  </div>
  <div class="grid max-w-prose gap-y-8 text-2xl font-medium">
    <p class="text-[#f5e1a5]">We all want to live meaningful and healthy lives, don't we?</p>

    <p class="text-[#f4d677]">What if we could collaborate to make this a reality?</p>

    <p class="text-[#f0ca55]">What if this already happens, and you are invited?</p>
  </div>
</div>

<div class="mt-16">
  <h2 class="h2 gradient-heading">Why Reconnect.earth exists</h2>
  <p class="pb-4">
    Our purpose is to empower and encourage more people to explore pathways towards wellbeing for
    all within the means of the living planet.
  </p>

  <p class="pb-4">
    But <span class="italic">how on earth</span> can we do this in a rapidly changing, uncertain and disconnected
    world, shaped by the metacrisis?
  </p>
  <p class="pb-4">
    Reconnect.earth offers a process to explore topics like these - on your own, and even better
    together with other people.
  </p>
  <p class="pb-4">
    This is an invitation to deepen your connection with yourself, other people and the living
    Earth.
  </p>
  <p class="font-bold">Welcome to <span class="italic">reconnect to what matters!</span></p>
</div>

<div class="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
  <div class="col-span-full max-w-prose pb-4">
    <h2 class="h2 gradient-heading">What are we creating?</h2>
    <p class="pt-4">
      This is a <a class="anchor" href="https://github.com/Greenheart/reconnect.earth"
        >collaborative project</a
      >, created by and for people and communites working towards a wellbeing economy, in service of
      life.
    </p>
    <p class="pt-4">
      On this website, you will find the Reconnect.earth process and an emerging collection of
      resources, activities and tools to help you along your journey of learning, exploration and
      action.
    </p>
  </div>

  <SectionCard
    title="Resource library"
    text="Books, podcasts, videos, scientific papers and other kinds of media to support your learning and reflections."
    cta="Be curious"
    href="/resources"
    iconClass="icon-[ion--library]"
  ></SectionCard>
  <SectionCard
    title="Actions"
    text="Concrete things you can do by yourself or together with others to help create a thriving future."
    cta="Take action"
    href="#actions"
    iconClass="icon-[bi--people-fill]"
  ></SectionCard>
  <SectionCard
    title="Activities"
    text="Inspiration and supporting material to help you host workshops, learning circles and other types of events."
    cta="Get started"
    href="#activities"
    iconClass="icon-[bi--people-fill]"
  ></SectionCard>
  <SectionCard
    title="Tools"
    text="To make this journey more fun, engaging and accessible, we're designing and developing free and open source apps."
    cta="Try them"
    href="#apps"
    iconClass="icon-[bi--people-fill]"
  ></SectionCard>
</div>

<Divider />

<div class="mx-auto max-w-prose">
  <h2 class="h1 gradient-heading" id="branches">The five branches of Reconnect.earth</h2>

  <!-- IDEA: Either have the text within the image to make it consistent and easy to use on all screen sizes -->
  <!-- IDEA: Or add interactive links on top of the tree image, making the experience more engaging, and easier to style in a consistent way with the rest of the project -->
  <div class="grid py-4">
    <enhanced:img
      class="rounded-md"
      src={treeOfReconnection}
      alt="The Tree of Reconnection, featuring a lush green scenery, deep in a forest. At the center is a large tree with many branches. On each of the major branches is a text label representing the 5 branches of the Reconnect.earth process: Reclaim, Reflect, Reconnect, Reimagine and Regenerate. Of these five branches, Reconnect is actually at the root of the tree (symbolising connection to the root system)."
      sizes="min(1920px, 100vw)"
    />
    <p class="pt-2 text-center italic">The Tree of Reconnection</p>
  </div>

  <p class="pb-4">
    Change starts within and is both personal and collective. By collaborating, we empower ourselves
    and each other to live meaningful and healthy lives - very similar to how trees in the forest
    work together to create resilient and healthy ecosystems.
  </p>

  <p>
    There are five branches of learning and practice to help turn the metacrisis from an abstract
    threat into actionable pathways towards a better future.
  </p>

  <!-- IDEA: Maybe have symbols for each branch? -->
  <div class="flex flex-col justify-around gap-8 pt-8">
    <div>
      <h2 class="h2 gradient-heading mb-3">Reclaim</h2>
      <p class="pb-4">
        To change culture and economics towards wellbeing for all within the means of the planet, we
        first of all need to create conditions that make change possible. This is something we need
        to do together: reclaiming our time, energy, attention, agency and socioeconomic conditions.
        Start with yourself, and then support others to do the same.
      </p>
      <p>
        Over time, this empowers us to thrive in life while engaging further in ways that feel right
        for us. This part of the process is key to help us shift our mindsets from mere consumers to
        active citizens and co-creators of the future.
      </p>
    </div>

    <div>
      <h2 class="h2 gradient-heading mb-3">Reflect</h2>
      <p class="pb-4">
        To develop as a person it is important to reflect about – among others – your values, your
        behaviours, your relationship to yourself, relationships with other people and your
        relationship to the living ecosystems. As a help, you can find a collection of questions on
        this website. You can do it by yourself, but we encourage you do to this together with other
        people.
      </p>
      <p>
        Part of the Reflect branch is also to learn more about how the complex world is working and
        how things are connected. Be curious and explore the different resources in the <a
          href="/resources"
          class="anchor">library</a
        >, and other resources which you find interesting!
      </p>
    </div>

    <div>
      <h2 class="h2 gradient-heading mb-3">Reconnect</h2>
      <p class="pb-4">
        Many of the world's problems today stem from a deep disconnection - from ourselves, from
        other people and from the living planet.
      </p>
      <p class="pb-4">Therefore it is important to reconnect to what matters:</p>
      <ul class="list list-disc space-y-4 pl-8">
        <li>
          Reconnect with yourself: become aware of what you feel in your body. Recognise your
          thoughts, feelings, what you need to thrive in life and what you find meaningful.
        </li>
        <li>
          Reconnect with other people, both locally and globally, and recognise their needs, and
          become aware of how they are interconnected with your life.
        </li>
        <li>Reconnect with other living beings and with the living planet.</li>
      </ul>
    </div>

    <div>
      <h2 class="h2 gradient-heading mb-3">Reimagine</h2>
      <blockquote class="blockquote mb-4">
        "We cannot create what we can't imagine." — Lucille Clifton
      </blockquote>
      <p class="pb-4">
        As the metacrisis unfolds and the world seems increasingly unstable, it's easy to get
        distracted and feel stuck with doom and gloom. However, one of the most important forms of
        constructive action is to envision a better future, and to explore and experiment with
        pathways towards it.
      </p>
      <p>
        By focusing on what we want to create rather than on what we try to avoid, we become much
        more effective changemakers. The good news is that the process of reimaging the future is a
        skill we can practice, and there are plenty of resources and activities to get inspiration.
      </p>
    </div>

    <div>
      <h2 class="h2 gradient-heading mb-3">Regenerate</h2>
      <p class="pb-4">
        Create what you have imagined. Make the world a better place. It's not enough to reduce our
        negative footprint – we need to increase our positive handprint. It is not enough to do
        things sustainably – we need to make a net positive impact.
      </p>
      <p>
        If we can participate in regenerative actions at all levels (individual, in communities and
        for the living planet) we will get positive feedback loops and we strengthen the capacity to
        do even more positive actions in the future.
      </p>
    </div>
  </div>
</div>

<Divider />

<div class="mx-auto max-w-prose" id="actions">
  <h2 class="h1 gradient-heading">Actions</h2>

  <p class="py-4">
    Explore a collection of actions you can take to help create a thriving future - for yourself,
    other people, and the living planet. Save the ones that spark your interest. This is not meant
    to be a list of tasks to be completed. Do them on your own or together with other people.
  </p>

  <p class="pb-4">
    Support each other by being respectful of people's varying backgrounds and their circumstances
    for taking action. Instead of judging others, constructively challenge each other and encourage
    further actions. Change is hard, but when you do it together and celebrate your progress, you
    will have much more fun along the journey.
  </p>
</div>

<Divider />

<div class="mx-auto max-w-prose" id="activities">
  <h2 class="h1 gradient-heading">Activities</h2>

  <!-- IDEA: find a good image or visual to showcase what collaborative activities could mean -->

  <p class="py-4">
    To make it easier to engage with and participate in the Reconnect.earth process, we need to go
    beyond the thinking dimension and learn together with peers. The community has gathered and
    experimented with different types of activities that makes the process of change both social and
    fun. After all, this is not just about surviving - but thriving!
  </p>

  <p class="pb-4">
    The library of activities includes everything from workshops and learning circles to creative
    sessions and civic tech hackathons. Just like the
    <a href="/resources" class="anchor">resource library</a>, the activities are co-created by and
    for the community. Welcome to share your favourite ways of engaging!
  </p>
</div>

<Divider />

<div class="mx-auto max-w-prose" id="apps">
  <h2 class="h1 gradient-heading">Our free and open source apps</h2>

  <p class="pt-4 pb-16">
    To make this journey more fun, engaging and accessible, we're designing and developing <a
      href="https://fsfe.org/freesoftware/#freedoms"
      class="anchor">free and open source</a
    > apps. Like all our projects, these are co-created by and for the community. Welcome to contribute
    with feedback, ideas, and improvements!
  </p>

  <div class="grid justify-center gap-4">
    {#each apps as app}
      <Card.Root class="xs:grid-cols-[min-content_1fr] grid max-w-xl gap-4 p-4">
        <div class="xs:max-h-full xs:w-48 max-h-80">
          <enhanced:img
            src={getImage(app.image)}
            alt={app.name + ' screenshot'}
            class="order-3 h-full w-full place-self-center rounded-xl bg-transparent! object-contain sm:order-1"
            sizes="min(200px, 100vw)"
          />
        </div>
        <div class="order-2 grid grid-rows-[min-content_1fr_min-content]">
          <h3 class="h3 mb-4 font-bold">
            <a href={app.link} class="anchor">{app.name}</a>
          </h3>
          <p class="xs:pb-2 pb-4 text-lg">{app.description}</p>

          <div class="flex items-center justify-end gap-2 text-base">
            <Button href={app.git} variant="secondary" size="lg">Contribute</Button>
            <Button href={app.link} target="_blank" size="lg">
              Explore
              <span class="icon-[lucide--external-link]"></span>
            </Button>
          </div>
        </div>
      </Card.Root>
    {/each}
  </div>
</div>

<!-- TODO: Add section about how to contribute here. Give a high level overview of each way to contribute. Link to the /get-involved page and the exact anchor link to the relevant way of contributing so people easily find what they are looking for -->

<!-- TODO: Add previous examples of contributions and show what people have added to the project. Lead by example and inspire more to get involved. -->

<!-- IDEA: Visualise the process as a tree with five branches. Then as you scroll, a new section is highlighted -->
<!-- IDEA: After learning about the framework, the first tree is joined by more trees, forming a forest. -->
<!-- IDEA: Even further down, the view zooms out and you see forests and trees all over the Earth. Then finally, reconnect.earth and some CTA -->
