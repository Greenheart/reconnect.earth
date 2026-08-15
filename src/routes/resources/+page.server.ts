import { getResources } from '$lib/server/content'

export async function load() {
  const resources = await getResources()
  return { resources }
}
