<script lang="ts">
  import { getActivities } from '#lib/content/activities.remote.js'
  import { MarkdownDocument } from '@comark/svelte'

  const activities = await getActivities()
</script>

<section class="space-y-8">
  {#each Object.values(activities) as activity}
    <article>
      <h2 class="h2 mb-4">{activity.frontmatter.title}</h2>
      <MarkdownDocument value={activity} />
    </article>
  {/each}
</section>
