import { apps } from '$lib/content-backend'
import type { App } from '$lib/schema'

import lifeWheel from '$lib/assets/lifewheel.png?as=run:1'

const IMAGES: Record<App['name'], any> = {
    'Life Wheel': lifeWheel,
}

export function load() {
    return { apps: apps.map((app) => ({ ...app, image: IMAGES[app.name] })) }
}
