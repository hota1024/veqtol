/**
 * Paginate an array.
 *
 * @param array Item array.
 * @param pageSize Items per page.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function Paginate<T extends any[]>(array: T, pageSize: number): T[] {
  return array.reduce(
    (newArray, _, i) =>
      i % pageSize ? newArray : [...newArray, array.slice(i, i + pageSize)],
    []
  )
}
