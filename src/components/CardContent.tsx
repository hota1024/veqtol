import { FC } from 'react'

export const CardContent: FC = (props) => {
  return (
    <>
      <div className="card-content">{props.children}</div>

      <style jsx>{`
        .card-content {
          padding: 16px;
        }
      `}</style>
    </>
  )
}
