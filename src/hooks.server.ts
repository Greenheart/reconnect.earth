import { type Handle } from '@sveltejs/kit'
import { handleKeystatic } from 'keystatic-sveltekit'
import config from '../keystatic.config.ts'

export const handle: Handle = await handleKeystatic({ config })
