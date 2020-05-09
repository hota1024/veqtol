import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { Container } from '../components/Container'
import { Card } from '../components/Card'
import { CardContent } from '../components/CardContent'
import { PostMeta } from '../types/PostMeta'
import { FC } from 'react'
import { Image } from '../components/Image'
import { Time } from '../components/Time'
import { Divider } from '../components/Divider'
import { PostContent } from '../components/PostContent'
import { Get } from '../utils/Config'
import { Tags } from '../components/Tags'

export type PostLayoutProps = {
  meta: PostMeta
}

export const PostLayout: FC<PostLayoutProps> = (props) => {
  const { meta } = props

  return (
    <>
      <Header title="hotalog" description="プログラミング好きの技術ブログ" />
      <main className="main-root">
        <Container maxWidth="800px">
          <Card color={Get('postColor')}>
            <Image src={meta.thumbnail} />
            <CardContent>
              {meta.updatedAt && <Time time={meta.updatedAt} />}
              <h1>{meta.title}</h1>
              <Tags tags={meta.tags} />
            </CardContent>
            <Divider />
            <PostContent>{props.children}</PostContent>
          </Card>
        </Container>
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
