const allImages = import.meta.glob('#assets/**/*.{avif,jpeg,jpg,png,webp}', {
  // Only import the default export which includes the relevant metadata.
  import: 'default',
  query: { enhanced: true },
})

function joinPath(parts: string[], separator = '/') {
  return parts.join(separator).replace(new RegExp(separator + '{1,}', 'g'), separator)
}

/**
 * Load an image from #assets based on its filename.
 *
 * Only supports loading images and file extensions included in the glob pattern for `import.meta.glob`.
 *
 * @returns Image metadata for the processed image, ready to assign to the `src` attribute.
 */
export async function getImage(filename: string) {
  const path = joinPath(['/src/assets', filename])
  const loader = allImages[path]
  if (!loader) {
    throw new Error(`Image not found: ${path}`)
  }

  const image = await loader()
  if (!image) {
    throw new Error(`Failed to load image: ${filename}`)
  }

  return image
}
