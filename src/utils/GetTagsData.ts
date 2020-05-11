import { TagData } from '@/types'
import { GetPostsData } from '@/utils'

/**
 * Returns all tags data.
 */
export const GetTagsData = () => {
  const tags: TagData[] = []
  const posts = GetPostsData()

  posts.forEach((post) => {
    post.tags.forEach((tag) => {
      const tagData = tags.find(({ name }) => name === tag)

      if (tagData) {
        tagData.posts.push(post)
      } else {
        tags.push({
          name: tag,
          posts: [post],
        })
      }
    })
  })

  return tags
}
