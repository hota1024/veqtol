import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { Container } from '../components/Container'
import { Card } from '../components/Card'
import { CardContent } from '../components/CardContent'
import { PostMeta } from '../types/PostMeta'
import { FC } from 'react'
import { Image } from '../components/Image'
import { Time } from '../components/Time'
import { Chip } from '../components/Chip'
import { Divider } from '../components/Divider'
import { PostContent } from '../components/PostContent'

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
          <Card>
            <Image src={meta.thumbnail} />
            <CardContent>
              {meta.updatedAt && <Time time={meta.updatedAt} />}
              <h1>{meta.title}</h1>
              <div>
                {meta.tags.map((tag) => (
                  <Chip key={tag} href={`/${tag}`}>
                    {tag}
                  </Chip>
                ))}
              </div>
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
