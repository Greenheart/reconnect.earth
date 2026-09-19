import { type Picture } from '@sveltejs/enhanced-img'

const allImages = import.meta.glob<Picture | undefined>('#assets/**/*.{avif,jpeg,jpg,png,webp}', {
  // Only import the default export which includes the relevant metadata.
  import: 'default',
  query: { enhanced: true },
})

/**
 * Load an image from #assets based on its filename.
 *
 * Only supports loading images and file extensions included in the glob pattern for `import.meta.glob`.
 *
 * @returns Image metadata for the processed image, ready to assign to the `src` attribute.
 */
export async function getImage(filename: string) {
  const loader = allImages[filename]
  if (!loader) {
    throw new Error(`Image not found: ${filename}`)
  }

  const image = await loader()
  if (!image) {
    throw new Error(`Failed to load image: ${filename}`)
  }

  return image
}
