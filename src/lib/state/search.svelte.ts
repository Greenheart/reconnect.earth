import type { Resource } from '#lib/content/schemas.js'
import type { GroupedTags } from '#lib/content/tags.remote.js'
import { queryParameters, ssp } from 'sveltekit-search-params'

type ResourceTag = Resource['tags'][number]

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
  #allTags: GroupedTags

  constructor(
    items: readonly T[],
    allTags: GroupedTags,
    filterFn: (item: T, filters: typeof this.filters) => boolean,
  ) {
    this.items = items
    this.matches = $derived(items.filter((item) => filterFn(item, this.filters)))
    this.#allTags = allTags
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
      resourceTypes: this.#getItemsWithTags(this.#allTags.MEDIA_TYPES),
      resourceCategories: this.#getItemsWithTags(this.#allTags.TOPICS),
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
