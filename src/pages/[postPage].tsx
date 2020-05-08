import { MainLayout } from '../layouts/Main'
import { NextPage, GetStaticPaths, GetStaticProps } from 'next'
import { PostList } from '../components/PostList'
import { GetPagePosts, PaginatedPosts } from '../utils/GetPagePosts'
import { Pagination, LinkMaker } from '../components/Pagination'

const PostPage: NextPage<{ page: PaginatedPosts }> = (props) => {
  const { page } = props
  const { posts } = page

  const linkMaker: LinkMaker = (page: number) =>
    page === 0 ? '/' : `/page-${page}`

  return (
    <>
      <MainLayout>
        <PostList posts={posts} />

        <Pagination
          currentPage={page.currentPage}
          pageCount={page.pageCount}
          linkMaker={linkMaker}
        />
      </MainLayout>
    </>
  )
}

export default PostPage

export const getStaticPaths: GetStaticPaths = async () => {
  const page = GetPagePosts(0, 6)
  const paths: string[] = []
  for (let i = 1; i < page.pageCount; ++i) {
    paths.push(`/page-${i}`)
  }

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { postPage } = context.params
  const pageNumber = parseInt((postPage as string).match(/page-(\d+)/)[1])
  const page = GetPagePosts(pageNumber, 6)

  return {
    props: { page },
  }
}
