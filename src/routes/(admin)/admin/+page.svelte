<script lang="ts">
  import { init } from '@sveltia/cms'
  import config from './cms-config'

  init({ config })

  if (import.meta.hot) {
    // TODO: This watches for all changed files in the project
    // IDEA: Maybe we can refresh only if specific modules are changed?
    // IDEA: Or maybe we can create a minimal vite plugin to watch for changes for the config file and only then reload the CMS?
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
