import { FC } from 'react'
import { Get } from '@/utils'

export const InlineCode: FC = (props) => {
  return (
    <>
      <code className="inline-code">{props.children}</code>

      <style jsx>{`
        .inline-code {
          background: ${Get('inlineCodeColor')};
          color: ${Get('inlineCodeText')};
          font-family: 'Roboto Mono', monospace;
          padding: 0 6px;
          border-radius: 2px;
        }
      `}</style>
    </>
  )
}
