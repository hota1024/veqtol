import { NextComponentType } from 'next'

export const MainLayout: NextComponentType = (props) => {
  return (
    <>
      <main>{props.children}</main>

      <style global jsx>{`
        body {
          font-family: 'Helvetica Neue', Arial, 'Hiragino Kaku Gothic ProN',
            'Hiragino Sans', Meiryo, sans-serif;

          background: #f6f6f4;
          color: #202020;
        }
      `}</style>
    </>
  )
}
