import { NextPage, GetStaticProps, GetStaticPaths } from 'next'
import { TagData, PostData } from '@/types'
import { PageData, GetTagsData, GetPageTaggedPosts, Get } from '@/utils'
import { LinkMaker, TaggedPosts, Pagination } from '@/components'
import { MainLayout } from '@/layouts/Main'

export type TagPageProps = {
  tag: TagData
  page: PageData<PostData>
}

const TagPage: NextPage<TagPageProps> = (props) => {
  const { page } = props
  const linkMaker: LinkMaker = (page: number) =>
    page === 0 ? '/tags' : `/tags/${props.tag.name}/${page}`

  return (
    <>
      <MainLayout>
        <TaggedPosts posts={page.items} tag={props.tag} />

        <Pagination
          currentPage={page.currentPage}
          pageCount={page.pageCount}
          linkMaker={linkMaker}
        />
      </MainLayout>
    </>
  )
}

export default TagPage

export const getStaticPaths: GetStaticPaths = async () => {
  const paths: string[] = []
  const tags = GetTagsData()

  tags.forEach((tag) => {
    paths.push(`/tags/${tag.name}`)
  })

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const tagName = context.params.tagName as string
  const tag = GetTagsData().find(({ name }) => name === tagName)
  const page = GetPageTaggedPosts(tagName, 0, Get('postsPerPage'))

  return {
    props: {
      tag,
      page,
    },
  }
}
