import { FC } from 'react'

export type DividerProps = {
  marginX?: string
}

export const Divider: FC<DividerProps> = (props) => {
  return (
    <>
      <hr className="divider" />

      <style jsx>{`
        .divider {
          border: none;
          height: 1px;
          margin: 0 ${props.marginX ?? 0};
          flex-shrink: 0;
          background: rgba(0, 0, 0, 0.2);
        }
      `}</style>
    </>
  )
}
