import dayjs from 'dayjs'
import { GetPage, GetPostsData } from '@/utils'

/**
 * Returns page posts.
 *
 * @param page Number of page.
 * @param pageSize Items per page.
 */
export const GetPagePosts = (page: number, pageSize = 12) => {
  return GetPage(
    GetPostsData().sort((a, b) =>
      dayjs(a.updatedAt).isBefore(dayjs(b.updatedAt)) ? 1 : -1
    ),
    page,
    pageSize
  )
}
