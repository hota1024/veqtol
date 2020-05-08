import { PostData } from '../types/PostData'
import { Paginate } from './Paginate'

export const GetPagePosts = (page: number, pageSize = 12): PaginatedPosts => {
  const contexts = require.context('../pages', true, /\.mdx$/)
  const posts: PostData[] = []

  const paginated = Paginate(contexts.keys(), pageSize)
  const pageCount = paginated.length

  paginated[page].forEach((key) => {
    const meta = contexts(key).meta ?? {}
    posts.push({
      name: key.replace(/\.mdx$/, ''),
      ...meta,
    })
  })

  const result: PaginatedPosts = {
    posts,
    pageSize,
    currentPage: page,
    pageCount,
  }

  if (page + 1 < pageCount) result.nextPage = page + 1
  if (page - 1 >= 0) result.prevPage = page - 1

  return result
}

export type PaginatedPosts = {
  posts: PostData[]
  pageSize: number
  nextPage?: number
  prevPage?: number
  pageCount: number
  currentPage: number
}
