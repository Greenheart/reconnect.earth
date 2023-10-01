<script lang="ts">
    import type { SearchStoreModel } from '$lib/stores/search'
    import type { Writable } from 'svelte/store'
    import IconSearch from '~icons/ri/search-eye-line'

    export let searchStore: Writable<SearchStoreModel<any>>
</script>

<div class="input-group grid-cols-[auto_1fr_auto] max-w-[300px] rounded-md">
    <div class="!pl-3 !pr-0">
        <IconSearch />
    </div>
    <input
        type="search"
        class="!pr-0 !pl-2"
        placeholder="Search"
        bind:value={$searchStore.search}
    />
    <button
        class="!px-3"
        on:click={() => ($searchStore.search = '')}
        style:display={$searchStore.search === '' ? 'none' : ''}>✕</button
    >
</div>
