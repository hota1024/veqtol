import { MainLayout } from '../layouts/Main'
import { NextPage } from 'next'
import { PostList } from '../components/PostList'
import { GetPagePosts } from '../utils/GetPagePosts'
import { Pagination, LinkMaker } from '../components/Pagination'
import { PageData } from '../utils/GetPage'
import { PostData } from '../types/PostData'

const Home: NextPage<{ page: PageData<PostData> }> = (props) => {
  const { page } = props
  const { items: posts } = page

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
