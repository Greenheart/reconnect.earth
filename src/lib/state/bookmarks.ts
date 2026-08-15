import type { Resource } from '$lib/schema'
import { persisted } from '$lib/persisted.svelte'

const KEY = 'resource_bookmarks'

let bookmarks: ReturnType<typeof persisted<Resource['link'][]>>

export function getBookmarks(resources: Resource[]) {
  bookmarks ??= persisted<Resource['link'][]>(KEY, [], {
    parse: (stored) => {
      try {
        const bookmarks = JSON.parse(stored) as Resource['link'][]
        if (!Array.isArray(bookmarks)) return []
        // Only keep valid bookmarks to filter out old links that are no longer present.
        // This ensures the bookmark count matches the actual items shown in the UI.
        return bookmarks.filter((bookmark) => resources.some(({ link }) => bookmark === link))
      } catch (error) {
        console.error('Failed to parse bookmarks:', error)
        return []
      }
    },
  })

  return bookmarks
}

/** Add or remove a bookmark from the persisted state */
export function toggleBookmark(resource: Resource) {
  if (bookmarks.value.includes(resource.link)) {
    bookmarks.value = bookmarks.value.filter((link) => link !== resource.link)
  } else {
    bookmarks.value.push(resource.link)
  }
}
