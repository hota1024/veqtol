import { FC } from 'react'
import { Get } from '../utils/Config'

export const MdxHeader1: FC = (props) => {
  return (
    <>
      <h2 className="mdx-header mdx-header-1">{props.children}</h2>

      <style jsx>{`
        .mdx-header-1 {
          font-size: 2rem;
          padding-left: 1rem;
          border-left: 4px solid ${Get('postHeader1BorderColor', '#202020')};
        }
      `}</style>
    </>
  )
}
