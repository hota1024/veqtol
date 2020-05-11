import { FC } from 'react'
import chroma from 'chroma-js'
import clsx from 'clsx'
import { NumberUnitize, Get } from '@/utils'

export type ButtonProps = {
  href?: string
  height?: string | number
  onClick?: () => GlobalEventHandlers['onclick']
  className?: string
  disabled?: boolean
  color?: string
  textColor?: string
}

export const Button: FC<ButtonProps> = (props) => {
  const Wrapper = props.href ? 'a' : 'button'
  const color = chroma(props.color ?? Get('buttonColor'))
  const textColor = chroma(props.textColor ?? Get('buttonText'))
  const height = NumberUnitize(props.height ?? 40, 'px')
  const disabled = props.disabled ?? false

  return (
    <>
      <Wrapper
        className={clsx(
          'button',
          disabled && 'button-disabled',
          props.className
        )}
        href={props.href}
        onClick={props.onClick}
      >
        <span className="button-text">{props.children}</span>
      </Wrapper>

      <style jsx>{`
        .button {
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

        .button-disabled {
          background: ${color.darken(1.4).css()};
          box-shadow: none;
          pointer: default;
          pointer-events: none;
        }

        .button-text {
          color: ${textColor.css()};
          font-size: 1.1rem;
        }

        .button-disabled .button-text {
          color: ${textColor.darken(0.2).css()};
        }
      `}</style>
    </>
  )
}
