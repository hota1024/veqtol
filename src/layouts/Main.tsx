import { NextComponentType } from 'next'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { Container } from '../components/Container'
import { config, Get } from '../utils/Config'

export const MainLayout: NextComponentType = (props) => {
  return (
    <>
      <Header
        title={config.title}
        titleColor={config.titleColor}
        description={config.description}
        descriptionColor={config.descriptionColor}
      />
      <main className="main-root">
        <Container>{props.children}</Container>
      </main>
      <Footer />

      <style global jsx>{`
        body {
          font-family: 'Helvetica Neue', Arial, 'Hiragino Kaku Gothic ProN',
            'Hiragino Sans', Meiryo, sans-serif;

          background: ${Get('background')};
          color: ${Get('color')};

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
