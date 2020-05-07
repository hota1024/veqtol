import { FC } from 'react'

export const MdxHeader1: FC = (props) => {
  return (
    <>
      <h2 className="mdx-header mdx-header-1">{props.children}</h2>

      <style jsx>{`
        .mdx-header-1 {
          font-size: 2rem;
          padding-left: 1rem;
          border-left: 4px solid #202020;
        }
      `}</style>
    </>
  )
}
