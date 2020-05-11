import { FC } from 'react'
import { TagData, PostData } from '@/types'
import { PostList, Chip } from '@/components'

export type TaggedPostsProps = {
  tag: TagData
  posts: PostData[]
}

export const TaggedPosts: FC<TaggedPostsProps> = (props) => {
  return (
    <>
      <div>
        <div className="tagged-posts-details">
          <Chip href={`/tags/${props.tag.name}`} fontSize="2rem">
            {props.tag.name}
          </Chip>
          <p className="tagged-posts-count">{props.tag.posts.length} posts</p>
        </div>
        <PostList posts={props.posts} />
      </div>

      <style jsx>{`
        .tagged-posts-details {
          text-align: center;
          margin-bottom: 64px;
        }

        .tagged-posts-count {
          font-size: 1.4rem;
          font-weight: 500;
        }
      `}</style>
    </>
  )
}
