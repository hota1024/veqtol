import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { Container } from '../components/Container'
import { Card } from '../components/Card'
import { CardContent } from '../components/CardContent'
import { PostMeta } from '../types/PostMeta'
import { FC } from 'react'
import { Image } from '../components/Image'

export type PostLayoutProps = {
  meta: PostMeta
}

export const PostLayout: FC<PostLayoutProps> = (props) => {
  return (
    <>
      <Header title="hotalog" description="プログラミング好きの技術ブログ" />
      <main className="main-root">
        <Container maxWidth="800px">
          <Card>
            <Image src={props.meta.thumbnail} />
            <CardContent>{props.children}</CardContent>
          </Card>
        </Container>
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
