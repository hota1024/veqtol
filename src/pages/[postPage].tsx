import { NextPage, GetStaticPaths, GetStaticProps } from 'next'
import { PageData, GetPagePosts, Get } from '@/utils'
import { PostData } from '@/types'
import { LinkMaker, PostList, Pagination } from '@/components'
import { MainLayout } from '@/layouts/Main'

const PostPage: NextPage<{ page: PageData<PostData> }> = (props) => {
  const { page } = props
  const { items: posts } = page

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
  const page = GetPagePosts(0, Get('postsPerPage'))
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
  const page = GetPagePosts(pageNumber, Get('postsPerPage'))

  return {
    props: { page },
  }
}
