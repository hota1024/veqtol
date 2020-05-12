import { NextComponentType } from 'next'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { Container } from '../components/Container'
import { Get } from '../utils/Config'
import { HeadMeta } from '@/components'

export const MainLayout: NextComponentType = (props) => {
  return (
    <>
      <HeadMeta
        title={Get('title')}
        description={Get('description')}
        image={Get('siteImageUrl')}
      />
      <Header
        title={Get('title')}
        titleColor={Get('titleColor')}
        description={Get('description')}
        descriptionColor={Get('descriptionColor')}
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
