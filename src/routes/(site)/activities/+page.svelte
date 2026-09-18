<script lang="ts">
  import { getActivities } from '#lib/content/activities.remote.js'
  import { MarkdownDocument } from '@comark/svelte'

  const activities = await getActivities()
  $inspect(activities)
</script>

<section>
  <MarkdownDocument value={Object.values(activities)[0]} />
</section>
