import { NextComponentType } from 'next'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { Container } from '../components/Container'

export const MainLayout: NextComponentType = (props) => {
  return (
    <>
      <Header title="hotalog" description="プログラミング好きの技術ブログ" />
      <main className="main-root">
        <Container>{props.children}</Container>
      </main>
      <Footer />

      <style global jsx>{`
        body {
          font-family: 'Helvetica Neue', Arial, 'Hiragino Kaku Gothic ProN',
            'Hiragino Sans', Meiryo, sans-serif;

          background: #f6f6f4;
          color: #202020;

          padding: 0;
          margin: 0;
        }

        #__next {
          display: flex;
          flex-flow: column;
          min-height: 100vh;
        }

        .main-root {
          flex: 1;
          height: 100%;
          display: flex;
        }
      `}</style>
    </>
  )
}
