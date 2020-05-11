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
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 48px;
        }
      `}</style>
    </>
  )
}
