<script lang="ts">
  import { init } from '@sveltia/cms'
  import config from './cms-config'

  init({ config })

  if (import.meta.hot) {
    import.meta.hot?.accept(() => {
      console.log('Refreshing after config change…')

      // NOTE: Force-reload the page when the config changes.
      // This is not as nice as a proper hot module replacement,
      // but much better than having to manually reload the config all the time.
      window.location.reload()
    })
  }
</script>

<svelte:head>
  <meta name="robots" content="noindex" />
  <title>{config.app_title}</title>
</svelte:head>
