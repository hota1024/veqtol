import { PostData } from '../types/PostData'
import Link from 'next/link'
import { FC } from 'react'
import clsx from 'clsx'
import { Card } from './Card'

import { Image } from './Image'
import { CardContent } from './CardContent'
import { Chip } from './Chip'
import { Time } from './Time'

export type PostCardProps = {
  className?: string
  post: PostData
}

export const PostCard: FC<PostCardProps> = (props) => {
  const { post } = props

  return (
    <>
      <Card className={clsx('post-card', props.className)}>
        <Link href={post.name}>
          <a className="post-card-link" href={post.name}>
            <Image src={post.thumbnail} width="100%" height="auto" />
            <CardContent className="post-card-content">
              <h2 className="post-card-title">{post.title}</h2>
            </CardContent>
            <CardContent className="post-card-content">
              <Time time={post.updatedAt} />
            </CardContent>
          </a>
        </Link>
        <CardContent className="post-card-content post-card-tags">
          {post.tags.map((tag) => (
            <Chip key={tag} href={tag}>
              {tag}
            </Chip>
          ))}
        </CardContent>
      </Card>

      <style jsx global>{`
        .post-card {
          min-height: 300px;
          transition: all 500ms;
        }

        .post-card:hover {
          box-shadow: 0 0 32px rgba(0, 0, 0, 0.2);
          transform: translateY(-8px);
        }

        .post-card-title {
          margin-bottom: 4px;
        }

        .post-card-link {
          text-decoration: none;
          color: #202020;
        }

        .post-card-content {
          padding-top: 4px !important;
          padding-bottom: 4px !important;
        }

        .post-card-tags {
          margin-bottom: 8px;
        }
      `}</style>
    </>
  )
}
