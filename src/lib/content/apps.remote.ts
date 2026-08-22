import { z } from 'zod'
import { prerender } from '$app/server'

import { AppSchema } from '#lib/content/schemas.js'

const apps = z
  .array(AppSchema)
  .parse(Object.values(import.meta.glob('/src/data/apps/*.json', { eager: true })))

export const getApps = prerender(() => apps)
