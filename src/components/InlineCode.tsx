import { FC } from 'react'

export const InlineCode: FC = (props) => {
  return (
    <>
      <code className="inline-code">{props.children}</code>

      <style jsx>{`
        .inline-code {
          background: rgba(0, 0, 0, 0.06);
          font-family: 'Roboto Mono', monospace;
          padding: 0 6px;
          border-radius: 2px;
        }
      `}</style>
    </>
  )
}
