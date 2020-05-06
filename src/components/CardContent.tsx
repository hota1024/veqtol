import { FC } from 'react'
import clsx from 'clsx'

export type CardContentProps = {
  className?: string
}

export const CardContent: FC<CardContentProps> = (props) => {
  return (
    <>
      <div className={clsx('card-content', props.className)}>
        {props.children}
      </div>

      <style jsx>{`
        .card-content {
          padding: 16px;
        }
      `}</style>
    </>
  )
}
