import Link from 'next/link'
import { FC } from 'react'
import clsx from 'clsx'
import { PostData } from '@/types'
import { Get } from '@/utils'
import { Card, Image, CardContent, Time, Tags } from '@/components'

export type PostCardProps = {
  className?: string
  post: PostData
}

export const PostCard: FC<PostCardProps> = (props) => {
  const { post } = props

  return (
    <>
      <Card
        className={clsx('post-card', props.className)}
        color={Get('postColor')}
      >
        <Link href={`/${post.name}`}>
          <a className="post-card-link" href={`/${post.name}`}>
            <Image src={post.thumbnail} width="100%" height="auto" />
            <CardContent className="post-card-content">
              <h2 className="post-card-title">{post.title}</h2>
            </CardContent>
            <CardContent className="post-card-content">
              <Time time={post.updatedAt} />
            </CardContent>
          </a>
        </Link>
        <CardContent className="post-card-content">
          <Tags tags={post.tags} className="post-card-tags" />
        </CardContent>
      </Card>

      <style jsx global>{`
        .post-card {
          min-height: 300px;
          transition: all 500ms;
          background: ${Get('postColor')};
          color: ${Get('postText')};
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
          color: inherit;
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
