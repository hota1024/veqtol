import { FC } from 'react'

export const PostContent: FC = (props) => {
  return (
    <>
      <div className="post-content">{props.children}</div>

      <style jsx>{`
        .post-content {
          padding: 16px;
        }
      `}</style>
    </>
  )
}
