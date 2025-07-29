import { z } from 'zod'
import { readFile } from 'fs/promises'
import { resolve } from 'path'

import { ResourceSchema, type Resource, AppSchema, type App } from '../schema'
import { getFeaturedFirst, getSortedTags } from '../utils'

async function readJSON(path: string) {
    return await readFile(path, { encoding: 'utf-8' }).then(JSON.parse)
}

const rawResources = await readJSON(resolve('./src/data/resources.json'))
const rawApps = await readJSON(resolve('./src/data/apps.json'))

export const resources: Resource[] = z
    .array(ResourceSchema)
    .parse(rawResources)
    .sort(getFeaturedFirst)
    .map((resource) => {
        resource.tags = getSortedTags(resource.tags)
        return resource
    })

export const apps: App[] = z.array(AppSchema).parse(rawApps)
