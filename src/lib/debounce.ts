export function debounce<T extends (...args: any[]) => void>(callback: T, wait: number) {
  let timeoutId: number | NodeJS.Timeout

  return ((...args) => {
    clearTimeout(timeoutId)

    timeoutId = setTimeout(() => {
      callback.apply(null, args)
    }, wait)
  }) as T
}
