import { FC } from 'react'
import clsx from 'clsx'

export type CardProps = {
  noShadow?: boolean
  color?: string
  className?: string
}

export const Card: FC<CardProps> = (props) => {
  const noShadow = props.noShadow ?? false
  const color = props.color ?? 'white'

  return (
    <>
      <div className={clsx('card', props.className)}>{props.children}</div>

      <style jsx>{`
        .card {
          background: ${color};
          color: inherit;
          border-radius: 4px;
          ${!noShadow && 'box-shadow: 0 0 8px rgba(0, 0, 0, 0.14);'}
          display: block;
          max-width: 100%;
          overflow: hidden;
          overflow-wrap: break-word;
          position: relative;
        }
      `}</style>
    </>
  )
}
