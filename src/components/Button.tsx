import { FC } from 'react'
import chroma from 'chroma-js'
import { NumberUnitize } from '../utils/NumberUnitize'

export type ButtonProps = {
  href?: string
  height?: string | number
  onClick?: () => GlobalEventHandlers['onclick']
}

export const Button: FC<ButtonProps> = (props) => {
  const Wrapper = props.href ? 'a' : 'button'
  const color = chroma('white')
  const textColor = chroma('#202020')
  const height = NumberUnitize(props.height ?? 40, 'px')

  return (
    <>
      <Wrapper className="button" href={props.href} onClick={props.onClick}>
        <span className="button-text">{props.children}</span>
      </Wrapper>

      <style jsx>{`
        .button {
          position: relative;
          display: inline-flex;
          justify-content: center;
          align-items: center;
          background: ${color.css()};
          min-width: 100px;
          min-height: ${height};
          text-decoration: none;
          box-sizing: border-box;
          border: none;
          border-radius: 4px;
          outline: none;
          margin: 4px;
          box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
          cursor: pointer;
          transition: all 200ms;
          padding: 6px 8px;
        }

        .button:hover {
          box-shadow: 0 0 16px rgba(0, 0, 0, 0.2);
        }

        .button:active {
          background: ${color.darken(0.4).css()};
          box-shadow: none;
        }

        .button-text {
          color: ${textColor.css()};
          font-size: 1.1rem;
        }
      `}</style>
    </>
  )
}
