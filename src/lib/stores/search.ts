import { writable } from 'svelte/store'

export interface SearchStoreModel<T extends Record<PropertyKey, any>> {
    data: T[]
    filtered: T[]
    search: string
}

export type Searchable<T> = T & { _searchTerms: string }

export const createSearchStore = <T extends Record<PropertyKey, any>>({
    data,
    getSearchTerms,
}: {
    data: T[]
    getSearchTerms: (item: T) => string
}) => {
    const indexedData = (data as Searchable<T>[]).map((item) => {
        item._searchTerms = getSearchTerms(item).trim().toLowerCase()
        return item
    })
    const { subscribe, set, update } = writable<SearchStoreModel<T>>({
        data: indexedData,
        filtered: indexedData,
        search: '',
    })

    return { subscribe, set, update }
}

export const updateSearchResults = <T extends Record<PropertyKey, any>>(
    model: SearchStoreModel<T>,
) => {
    const search = model.search.trim().toLowerCase() || ''
    model.filtered = model.data.filter((item) =>
        item._searchTerms.includes(search),
    )
}
