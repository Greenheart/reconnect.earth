import type { Resource } from '$lib/schema'
import { localStorageStore } from '@skeletonlabs/skeleton'
import { get } from 'svelte/store'

export const bookmarks = localStorageStore<Resource['link'][]>(
    'resource_bookmarks',
    [],
)

export function toggleBookmark(resource: Resource) {
    const current = get(bookmarks)
    if (current.includes(resource.link)) {
        bookmarks.set(current.filter((link) => link !== resource.link))
    } else {
        bookmarks.set(current.concat(resource.link))
    }
}
