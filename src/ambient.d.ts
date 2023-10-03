// Silence warnings of image imports from the assets directory
declare module '$lib/assets/*' {
    var meta
    export default meta
}
