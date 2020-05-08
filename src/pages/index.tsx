import { MainLayout } from '../layouts/Main'
import { FC } from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'
import { PostData } from '../types/PostData'
import { PostCard } from '../components/PostCard'

const Home: FC<{ posts: PostData[] }> = (props) => {
  return (
    <>
      <MainLayout>
        <div className="posts">
          {props.posts.map((post, key) => (
            <PostCard key={key} post={post} />
          ))}
        </div>
      </MainLayout>

      <style jsx>{`
        .posts {
          margin: 64px auto;
          max-width: 1200px;
          display: grid;
          justify-content: center;
          grid-template-columns: repeat(auto-fit, minmax(378px, 1fr));
          column-gap: 32px;
          row-gap: 32px;
        }
      `}</style>
    </>
  )
}

export default Home

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: ['/'],
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async () => {
  const contexts = require.context('./', true, /\.mdx$/)
  const posts: PostData[] = []

  contexts.keys().forEach((key) => {
    const meta = contexts(key).meta ?? {}
    posts.push({
      name: key.replace(/\.mdx$/, ''),
      ...meta,
    })
  })

  return {
    props: {
      posts,
    },
  }
}
