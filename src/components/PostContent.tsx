import { FC } from 'react'
import { Get } from '@/utils'

export const PostContent: FC = (props) => {
  return (
    <>
      <div className="post-content">{props.children}</div>

      <style jsx global>{`
        .post-content h1,
        h2,
        h3,
        h4,
        h5,
        h6,
        p {
          margin-left: 1.4rem;
          margin-right: 1.4rem;
          line-height: 1.4;
        }

        .post-content {
          color: ${Get('postText')};
        }
      `}</style>
    </>
  )
}
