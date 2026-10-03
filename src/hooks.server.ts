import { dev } from '$app/env'
import { type RequestEvent } from '@sveltejs/kit'
import { type Handle } from '@sveltejs/kit/hooks'

function excludeRoutesFromProductionBuild(routeIdsToExclude: RequestEvent['route']['id'][]) {
  // Allow all routes during development
  if (dev) return

  const excludedRoutes = new Set(routeIdsToExclude)

  return (({ event, resolve }) => {
    if (excludedRoutes.has(event.route.id)) {
      throw new Error('Skipping prerendering for excluded route: ' + event.route.id)
    }
    return resolve(event)
  }) satisfies Handle
}

export const handle = dev ? undefined : excludeRoutesFromProductionBuild(['/(site)/activities'])
