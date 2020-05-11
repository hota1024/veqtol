import { FC } from 'react'
import Link from 'next/link'
import chroma from 'chroma-js'

export type ChipProps = {
  href?: string
  color?: string
  textColor?: string
  fontSize?: string
}

export const Chip: FC<ChipProps> = (props) => {
  const { href } = props
  let { color, textColor, fontSize } = props

  const Wrapper = href ? 'a' : 'span'
  color = color ?? '#f0f0f0'
  textColor = textColor ?? '#202020'
  fontSize = fontSize ?? '0.8rem'

  return (
    <>
      {href ? (
        <Link href={href}>
          <Wrapper className="tag" href={href}>
            <span className="tag-label">{props.children}</span>
          </Wrapper>
        </Link>
      ) : (
        <Wrapper className="tag">
          <span className="tag-label">{props.children}</span>
        </Wrapper>
      )}

      <style jsx>{`
        .tag {
          display: inline-flex;
          background: ${color};
          color: ${textColor};
          align-items: center;
          border-radius: 4px;
          text-decoration: none;
          font-size: ${fontSize};
          padding: 8px 6px;
          margin: 4px;
          transition: all 220ms;
        }

        a.tag:hover {
          background: ${chroma(color).darken(0.5).css()};
        }

        .tag-label {
          padding-left: 14px;
          padding-right: 14px;
          overflow: hidden;
          font-weight: 500;
        }
      `}</style>
    </>
  )
}
