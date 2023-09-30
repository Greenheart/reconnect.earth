import type { Resource } from '$lib/schema'
import { get } from 'svelte/store'
import persistedStore from '$lib/persistedStore'

const KEY = 'resource_bookmarks'

export const bookmarks = persistedStore<Resource['link'][]>(KEY, [])

export function toggleBookmark(resource: Resource) {
    const current = get(bookmarks)
    if (current.includes(resource.link)) {
        bookmarks.set(current.filter((link) => link !== resource.link))
    } else {
        bookmarks.set(current.concat(resource.link))
    }
}
