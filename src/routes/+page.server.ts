import { getApps } from '$lib/server/content'

export async function load() {
  const apps = await getApps()
  return { apps }
}
