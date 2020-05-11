/**
 * Format a string with data.
 *
 * @param source Source string.
 * @param data Data.
 */
export function Format<T>(source: string, data: T) {
  Object.keys(data).forEach((key) => {
    source = source.replace(new RegExp(`{${key}}`, 'g'), data[key])
  })
  return source
}
