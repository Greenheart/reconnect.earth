import { dev } from '$app/env'
import { error, type RequestEvent } from '@sveltejs/kit'
import { type Handle } from '@sveltejs/kit/hooks'

function excludeRoutesFromProductionBuild(routeIdsToExclude: RequestEvent['route']['id'][]) {
  // Allow all routes during development
  if (dev) return

  const excludedRoutes = new Set(routeIdsToExclude)

  return (({ event, resolve }) => {
    if (excludedRoutes.has(event.route.id)) {
      error(403, 'DISABLE_PRERENDERING')
    }
    return resolve(event)
  }) satisfies Handle
}

export const handle = dev ? undefined : excludeRoutesFromProductionBuild(['/(site)/activities'])
