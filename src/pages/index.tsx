import { MainLayout } from '../layouts/Main'
import { FC } from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'
import { PostData } from '../types/PostData'
import { PostList } from '../components/PostList'

const Home: FC<{ posts: PostData[] }> = (props) => {
  const { posts } = props

  return (
    <>
      <MainLayout>
        <PostList posts={posts} />
      </MainLayout>
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
