import { NextPage, GetStaticPaths, GetStaticProps } from 'next'
import { TagData, PostData } from '@/types'
import { PageData, GetTagsData, GetPageTaggedPosts, Get } from '@/utils'
import { LinkMaker, TaggedPosts, Pagination } from '@/components'
import { MainLayout } from '@/layouts/Main'

export type TagPagePageProps = {
  tag: TagData
  page: PageData<PostData>
}

const TagPagePage: NextPage<TagPagePageProps> = (props) => {
  const { page, tag } = props
  const { items: posts } = page

  const linkMaker: LinkMaker = (page: number) =>
    page === 0 ? `/tags/${tag.name}` : `/tags/${tag.name}/${page}`

  return (
    <>
      <MainLayout>
        <TaggedPosts tag={tag} posts={posts} />

        <Pagination
          currentPage={page.currentPage}
          pageCount={page.pageCount}
          linkMaker={linkMaker}
        />
      </MainLayout>
    </>
  )
}

export default TagPagePage

export const getStaticPaths: GetStaticPaths = async () => {
  const tags = GetTagsData()
  const paths: string[] = []

  tags.forEach((tag) => {
    const page = GetPageTaggedPosts(tag.name, 0, 6)
    for (let i = 1; i < page.pageCount; ++i) {
      paths.push(`/tags/${tag.name}/${i}`)
    }
  })

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const tagPage = context.params.page as string
  const tagName = context.params.tagName as string
  const tag = GetTagsData().find(({ name }) => name === tagName)
  const page = GetPageTaggedPosts(
    tagName,
    parseInt(tagPage),
    Get('postsPerPage')
  )

  return {
    props: { page, tag },
  }
}
