import { dev } from '$app/env'
import { error } from '@sveltejs/kit'
import { type Handle } from '@sveltejs/kit/hooks'

import { DEV_ONLY_ROUTES } from '#lib/server/config.js'

export const handle: Handle | undefined = dev
  ? undefined
  : ({ event, resolve }) => {
      if (DEV_ONLY_ROUTES.has(event.route.id!)) {
        console.info('Excluding DEV only route from prerendering:', event.route.id)
        error(400)
      }
      return resolve(event)
    }
