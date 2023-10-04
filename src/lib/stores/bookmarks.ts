import { get } from 'svelte/store'
import type { Resource } from '$lib/schema'
import persistedStore from '$lib/persistedStore'

const KEY = 'resource_bookmarks'

// IDEA: Add the toggleBookmark method into the store itself
export const bookmarks = persistedStore<Resource['link'][]>(KEY, [])

export function toggleBookmark(resource: Resource) {
    const current = get(bookmarks)
    if (current.includes(resource.link)) {
        bookmarks.set(current.filter((link) => link !== resource.link))
    } else {
        bookmarks.set(current.concat(resource.link))
    }
}
