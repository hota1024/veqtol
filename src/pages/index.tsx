import { NextPage } from 'next'
import { PageData, GetPagePosts, Get } from '@/utils'
import { PostData } from '@/types'
import { LinkMaker, PostList, Pagination } from '@/components'
import { MainLayout } from '@/layouts/Main'

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
  const page = GetPagePosts(0, Get('postsPerPage'))

  return {
    page,
  }
}

export default Home
