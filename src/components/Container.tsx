import { FC } from 'react'
import clsx from 'clsx'

export type ContainerProps = {}

export const Container: FC<ContainerProps> = (props) => {
  return (
    <>
      <div className={clsx('container')}>{props.children}</div>

      <style jsx>{`
        .container {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          background: black;
        }
      `}</style>
    </>
  )
}
