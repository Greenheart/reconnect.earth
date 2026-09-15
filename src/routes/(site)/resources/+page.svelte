<script lang="ts">
  import Resources from '#lib/components/Resources.svelte'
  import { getResources } from '#lib/content/resources.remote.js'
  import { getWeekNumber } from '#lib/get-week-number.js'
  import { shuffle } from '#lib/shuffle.js'

  const [year, week] = getWeekNumber(new Date())
  const seed = `${year}:${week}`

  // TODO: The shuffle is preserving state across page navigations (but not page reloads)
  // So we need to make sure it is always re-created from scratch.
  // Perhaps by moving the shuffling into the component rather than on the page level?
  const resources = shuffle(await getResources(), seed)
</script>

<Resources {resources} />
