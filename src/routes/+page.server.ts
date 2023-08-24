import { resources } from '$lib/content-backend'
import type { Resource } from '$lib/schema'

const getFeaturedFirst = (a: Resource, b: Resource) => {
    // 1. Sort by quality (1-5)
    let scoreA = a.quality
    let scoreB = b.quality

    // 2. Give higher priority to featured items
    if (a.featured) scoreA += 100
    if (b.featured) scoreB += 100

    return scoreB - scoreA
}

export function load() {
    return {
        resources: resources.sort(getFeaturedFirst),
    }
}
