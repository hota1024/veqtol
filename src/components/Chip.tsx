import { FC } from 'react'
import chroma from 'chroma-js'

export type ChipProps = {
  href?: string
  color?: string
  textColor?: string
}

export const Chip: FC<ChipProps> = (props) => {
  const { href } = props
  let { color, textColor } = props

  const Wrapper = href ? 'a' : 'span'
  color = color ?? '#e0e0e0'
  textColor = textColor ?? 'inherit'

  return (
    <>
      <Wrapper className="tag" href={href}>
        <span className="tag-label">{props.children}</span>
      </Wrapper>

      <style jsx>{`
        .tag {
          display: inline-flex;
          background: ${color};
          color: ${textColor};
          align-items: center;
          border-radius: 4px;
          text-decoration: none;
          font-size: 0.8rem;
          height: 32px;
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
        }
      `}</style>
    </>
  )
}
