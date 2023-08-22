import { resources } from '$lib/content-backend'

const getFeaturedFirst = (a: { featured: boolean }, b: { featured: boolean }) =>
    (b.featured ? 1 : 0) - (a.featured ? 1 : 0)

export function load() {
    return {
        resources: resources.sort(getFeaturedFirst),
    }
}
