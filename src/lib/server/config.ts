import type { RouteId } from '$app/types'

/**
 * Routes that should be excluded from the production build.
 *
 * NOTE: For every route to exclude, include both the `path` and `route.id`.
 */
export const DEV_ONLY_ROUTES = new Set([
  // Paths to ignore
  '/activities',

  // Route IDs to ignore
  ...(['/(site)/activities'] satisfies RouteId[]),
])
