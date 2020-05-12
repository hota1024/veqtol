import { FC } from 'react'
import { PostMeta } from '@/types'
import {
  Header,
  Container,
  Card,
  CardContent,
  Time,
  Tags,
  Divider,
  PostContent,
  Footer,
  Image,
  HeadMeta,
} from '@/components'
import { Get } from '@/utils'
import Head from 'next/head'

export type PostLayoutProps = {
  meta: PostMeta
}

export const PostLayout: FC<PostLayoutProps> = (props) => {
  const { meta } = props
  const title = `${props.meta.title} | ${Get('title')}`
  const description = Get('description')

  return (
    <>
      <Head>
        <HeadMeta
          title={title}
          description={description}
          image={meta.thumbnail ? Get('siteUrl') + meta.thumbnail : void 0}
        />
      </Head>
      <Header
        title={Get('title')}
        titleColor={Get('titleColor')}
        description={Get('description')}
        descriptionColor={Get('descriptionColor')}
      />
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
