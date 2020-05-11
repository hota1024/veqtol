import { NextPage, GetStaticPaths, GetStaticProps } from 'next'
import { GetPageTaggedPosts } from '../../../utils/GetPageTaggedPosts'
import { GetTagsData } from '../../../utils/GetTagsData'
import { PageData } from '../../../utils/GetPage'
import { PostData } from '../../../types/PostData'
import { LinkMaker, Pagination } from '../../../components/Pagination'
import { MainLayout } from '../../../layouts/Main'
import { TagData } from '../../../types/TagData'
import { TaggedPosts } from '../../../components/TaggedPosts'

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
  const page = GetPageTaggedPosts(tagName, parseInt(tagPage), 6)

  return {
    props: { page, tag },
  }
}
