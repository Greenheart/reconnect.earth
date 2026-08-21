/**
 * There are two important details that together make it possible to embed @sveltia/cms
 * within an existing SvelteKit project:
 *
 * 1) By using SvelteKit layout groups, we can render the `(admin)/admin/+page.svelte` without any
 *    other HTML or JS, which gives us a blank slate where we can initiate the CMS.
 *    If we would have used a normal SvelteKit route, we would included the root +layout.svelte which
 *    likely would have interfered with the CMS, leading to unpredictable resulting CSS and JS.
 *
 * 2) By disabling SvelteKit SSR, we give the client-side @sveltia/cms SPA full control of the page.
 *    Without this change, SvelteKit injects basic logic like for example routing. This would have
 *    caused conflicts with @sveltia/cms, preventing it from initiating.
 */
export const ssr = false

// Add a trailing slash for this route to make it easier to manually edit the URL and stay within the CMS.
export const trailingSlash = 'always'
