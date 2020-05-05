import { FC } from 'react'

export const Card: FC = (props) => {
  return (
    <>
      <div className="card">{props.children}</div>

      <style jsx>{`
        .card {
          border-radius: 4px;
          box-shadow: 0 0 8px rgba(0, 0, 0, 0.14);
          background: white;
          display: block;
          max-width: 100%;
          overflow-wrap: break-word;
          position: relative;
        }
      `}</style>
    </>
  )
}
