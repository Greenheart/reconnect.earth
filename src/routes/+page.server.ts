import { apps } from '$lib/content-backend'
import type { App } from '$lib/schema'

import lifeWheel from '$lib/assets/lifewheel.png?as=run:1'
import aware from '$lib/assets/29k-aware.jpeg?as=run:1'

const IMAGES: Record<App['name'], any> = {
    'Life Wheel': lifeWheel,
    Aware: aware,
}

export function load() {
    return { apps: apps.map((app) => ({ ...app, image: IMAGES[app.name] })) }
}
