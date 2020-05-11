import { FC } from 'react'
import { PostData } from '@/types'
import { PostCard } from '@/components'

export type PostListProps = {
  posts: PostData[]
}

export const PostList: FC<PostListProps> = (props) => {
  return (
    <>
      <div className="post-list">
        {props.posts.map((post, key) => (
          <PostCard key={key} post={post} />
        ))}
      </div>

      <style jsx>{`
        .post-list {
          max-width: 1200px;
          display: grid;
          justify-content: center;
          grid-template-columns: repeat(auto-fit, minmax(378px, 1fr));
          column-gap: 32px;
          row-gap: 32px;
        }
      `}</style>
    </>
  )
}
