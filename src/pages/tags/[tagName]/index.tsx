import { NextPage } from 'next'
import { MainLayout } from '../../../layouts/Main'
import { TagData } from '../../../types/TagData'
import { GetPageTaggedPosts } from '../../../utils/GetPageTaggedPosts'
import { GetTagsData } from '../../../utils/GetTagsData'
import { PostData } from '../../../types/PostData'
import { TaggedPosts } from '../../../components/TaggedPosts'
import { LinkMaker, Pagination } from '../../../components/Pagination'
import { PageData } from '../../../utils/GetPage'

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

TagPage.getInitialProps = ({ query }) => {
  const tagName = query.tagName as string
  const tag = GetTagsData().find(({ name }) => name === tagName)
  const page = GetPageTaggedPosts(tagName, 0, 6)

  return {
    tag,
    page,
  }
}

export default TagPage
