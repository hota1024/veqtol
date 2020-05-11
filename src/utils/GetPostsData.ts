import { GetPostsContexts } from '@/utils'
import { PostData } from '@/types'

/**
 * Returns all posts data.
 */
export const GetPostsData = () => {
  const contexts = GetPostsContexts()
  const posts: PostData[] = []

  contexts.keys().map((key) => {
    const meta = contexts(key).meta ?? {}
    posts.push({
      name: key.replace(/\.mdx$/, ''),
      ...meta,
    })
  })

  return posts
}
