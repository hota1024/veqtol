import { MainLayout } from '../layouts/Main'
import { NextPage } from 'next'
import { PostList } from '../components/PostList'
import { GetPagePosts, PaginatedPosts } from '../utils/GetPagePosts'
import { Pagination, LinkMaker } from '../components/Pagination'

const Home: NextPage<{ page: PaginatedPosts }> = (props) => {
  const { page } = props
  const { posts } = page

  const linkMaker: LinkMaker = (page: number) => `/page-${page}`

  return (
    <>
      <MainLayout>
        <PostList posts={posts} />

        <Pagination
          currentPage={0}
          pageCount={page.pageCount}
          linkMaker={linkMaker}
        />
      </MainLayout>
    </>
  )
}

Home.getInitialProps = () => {
  const page = GetPagePosts(0, 6)

  return {
    page,
  }
}

export default Home
