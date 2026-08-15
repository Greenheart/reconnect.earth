import { RESOURCE_CATEGORIES, RESOURCE_TYPES, type ResourceTag } from '$lib/constants'
import type { Resource } from '$lib/schema'
import { queryParameters, ssp } from 'sveltekit-search-params'

export class FilteredItems<T extends Resource> {
  items: readonly T[]
  matches: T[]

  filters = queryParameters(
    {
      search: ssp.string(''),
      tags: ssp.array<ResourceTag>([])(
        (current: string[] | null, next: string[] | null) =>
          current?.length === next?.length && JSON.stringify(current) === JSON.stringify(next),
      ),
      showBookmarks: ssp.boolean(false),
    },
    {
      showDefaults: false,
    },
  )

  constructor(items: readonly T[], filterFn: (item: T, filters: typeof this.filters) => boolean) {
    this.items = items
    this.matches = $derived(items.filter((item) => filterFn(item, this.filters)))
  }

  toggleTag(tag: ResourceTag) {
    if (this.filters.tags?.includes(tag)) {
      this.filters.tags = this.filters.tags.filter((selectedTag) => selectedTag !== tag)
      // NOTE: Maybe clean the tags array when final item has been removed
    } else {
      this.filters.tags ??= []
      this.filters.tags.push(tag)
    }
  }

  resetFilters() {
    this.filters.search = ''
    this.filters.showBookmarks = false
    this.filters.tags = null
  }

  isTagSelected(tag: ResourceTag) {
    return this.filters.tags?.includes(tag)
  }

  getItemCountsPerTag() {
    return {
      resourceTypes: this.#getItemsWithTags(RESOURCE_TYPES),
      resourceCategories: this.#getItemsWithTags(RESOURCE_CATEGORIES),
    }
  }

  #countItemsWithTag(tag: ResourceTag, collection: readonly T[]) {
    return collection.filter((item) => item.tags.includes(tag)).length
  }

  #getItemsWithTags(tags: readonly ResourceTag[]) {
    return (
      tags
        .map((tag) => {
          const total = this.#countItemsWithTag(tag, this.items)
          const matches = this.#countItemsWithTag(tag, this.matches)
          return {
            tag,
            /** Number of items with the given tag */
            total,
            /** Number of items with the given tag that also match the current filters */
            matches,
            enabled: matches >= 1,
          }
        })
        // Only show tags with at least one item
        .filter(({ total }) => total >= 1)
        .sort((a, b) => b.total - a.total)
    )
  }
}
