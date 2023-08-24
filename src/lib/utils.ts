import type { Resource } from './schema'

const resourceTypes = {
    Video: true,
    Book: true,
    Podcast: true,
    Website: true,
    Report: true,
    Article: true,
    Guide: true,
    Toolkit: true,
    Webinar: true,
}

export const getSortedTags = (tags: string[]) => {
    return tags.sort((a, b) => {
        let scoreA = 0
        let scoreB = 0

        // Show special tags for resource types first
        if (resourceTypes[a as keyof typeof resourceTypes]) {
            scoreA += 100
        }
        if (resourceTypes[b as keyof typeof resourceTypes]) {
            scoreB += 100
        }

        return scoreB - scoreA
    })
}

export const getFeaturedFirst = (a: Resource, b: Resource) => {
    // 1. Sort by quality (1-5)
    let scoreA = a.quality
    let scoreB = b.quality

    // 2. Give higher priority to featured items
    if (a.featured) scoreA += 100
    if (b.featured) scoreB += 100

    return scoreB - scoreA
}
