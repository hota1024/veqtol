import { FC } from 'react'
import clsx from 'clsx'

export type ContainerProps = {
  maxWidth?: string
}

export const Container: FC<ContainerProps> = (props) => {
  return (
    <>
      <div className={clsx('container')}>{props.children}</div>

      <style jsx>{`
        .container {
          width: 100%;
          max-width: ${props.maxWidth ?? '1200px'};
          margin: 0 auto;
        }
      `}</style>
    </>
  )
}
