import { prerender } from '$app/server'
import { z } from 'zod'
import type { Picture } from '@sveltejs/enhanced-img'

let allImages: Record<string, () => Promise<Picture | undefined>>

/**
 * Load an image from `#assets` based on its filename for use with `<enhanced:img />`
 *
 * NOTE: Only supports loading images and file extensions included in the glob pattern
 * for `import.meta.glob` defined in this function.
 *
 * @returns Image metadata for the processed image, ready to use with `<enhanced:img />`.
 */
export const getImage = prerender(z.string(), async (filename: string) => {
  // Initiate on first call
  if (!allImages) {
    allImages = import.meta.glob<Picture | undefined>('#assets/**/*.{avif,jpeg,jpg,png,webp}', {
      // Only import the default export which includes the relevant metadata.
      import: 'default',
      query: { enhanced: true },
    })
  }

  const matchingImageKey = Object.keys(allImages).find((filepath) => filepath.endsWith(filename))
  if (!matchingImageKey) {
    throw new Error(`Image not found: ${filename}`)
  }

  const loader = allImages[matchingImageKey]
  const image = await loader?.()
  if (!image) {
    throw new Error(`Failed to load image: ${filename}`)
  }

  return image
})
