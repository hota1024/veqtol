import dayjs from 'dayjs'
import { GetPage, GetPostsData } from '@/utils'

/**
 * Returns page tagged posts.
 *
 * @param tag Tag.
 * @param page Number of page.
 * @param pageSize Items per page.
 */
export const GetPageTaggedPosts = (
  tag: string,
  page: number,
  pageSize = 12
) => {
  return GetPage(
    GetPostsData()
      .filter(({ tags }) => !!tags.find((t) => t === tag))
      .sort((a, b) =>
        dayjs(a.updatedAt).isBefore(dayjs(b.updatedAt)) ? 1 : -1
      ),
    page,
    pageSize
  )
}
