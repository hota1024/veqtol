import { FC } from 'react'

export const MdxHeader2: FC = (props) => {
  return (
    <>
      <h3 className="mdx-header mdx-header-2">{props.children}</h3>

      <style jsx>{`
        .mdx-header-2 {
          font-size: 1.5rem;
          padding-bottom: 0.5rem;
          border-bottom: 1px solid rgba(0, 0, 0, 0.2);
        }
      `}</style>
    </>
  )
}
