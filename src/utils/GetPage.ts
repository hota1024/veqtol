import { Paginate } from '@/utils'

/**
 * PageData type.
 */
export type PageData<T> = {
  items: T[]
  pageSize: number
  nextPage?: number
  prevPage?: number
  pageCount: number
  currentPage: number
}

/**
 * Returns paged item.
 *
 * @param items Item array.
 * @param page Number of page.
 * @param pageSize Items per pages.
 */
export function GetPage<T>(items: T[], page: number, pageSize: number) {
  const pages = Paginate(items, pageSize)

  const result: PageData<T> = {
    items: pages[page],
    pageSize,
    pageCount: pages.length,
    currentPage: page,
  }

  if (page < 0) result.prevPage = page - 1
  if (page > pages.length - 1) result.nextPage = page + 1

  return result
}
