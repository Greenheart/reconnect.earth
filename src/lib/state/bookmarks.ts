import type { Resource } from '$lib/schema'
import { persisted } from '$lib/persisted.svelte'

const KEY = 'resource_bookmarks'

export const bookmarks = persisted<Resource['link'][]>(KEY, [])

/** Add or remove a bookmark from the persisted state */
export function toggleBookmark(resource: Resource) {
  if (bookmarks.value.includes(resource.link)) {
    bookmarks.value = bookmarks.value.filter((link) => link !== resource.link)
  } else {
    bookmarks.value.push(resource.link)
  }
}
