import { writable } from 'svelte/store'

export interface SearchStoreModel<T extends Record<PropertyKey, any>> {
    data: T[]
    filtered: T[]
    search: string
    tags: string[]
    showBookmarks: boolean
}

export type Searchable<T> = T & { _searchTerms: string }

export const createSearchStore = <T extends Record<PropertyKey, any>>({
    data,
    getSearchTerms,
}: {
    data: T[]
    /** Indexing function to make data searchable. */
    getSearchTerms: (item: T) => string
}) => {
    const indexedData = (data as Searchable<T>[]).map((item) => {
        item._searchTerms = getSearchTerms(item).trim().toLowerCase()
        return item
    })

    const defaultState = {
        data: indexedData,
        filtered: indexedData,
        search: '',
        tags: [],
        showBookmarks: false,
    }

    const { subscribe, set, update } = writable<SearchStoreModel<T>>({
        ...defaultState,
    })

    const reset = () => set({ ...defaultState })

    return { subscribe, set, update, reset }
}

export const updateSearchResults = <T extends Record<PropertyKey, any>>(
    model: SearchStoreModel<T>,
    /** Filter search results based on custom logic. */
    matcher?: (item: T) => boolean,
) => {
    const search = model.search.trim().toLowerCase() || ''
    model.filtered = model.data.filter((item) => {
        const searchMatch = item._searchTerms.includes(search)
        return matcher ? searchMatch && matcher(item) : searchMatch
    })
}
