import { Builder } from '@/abstracts'
import { PostModule } from '@/types'
import { PostLayout } from '@/layouts/Post'

/*
 * PostModuleBuilder class.
 */
export class PostModuleBuilder extends Builder<PostModule> {
  buildDefault(): Partial<PostModule> {
    return {
      meta: {
        title: '',
        tags: [],
        createdAt: '',
        updatedAt: '',
      },
      // eslint-disable-next-line react/display-name
      default: (props) => <PostLayout {...props} />,
    }
  }

  title(title: string) {
    this.data.meta.title = title
    return this
  }

  tag(tag: string) {
    this.data.meta.tags.push(tag)
    return this
  }

  tags(tags: string[]) {
    this.data.meta.tags.push(...tags)
    return this
  }

  createdAt(createdAt: string) {
    this.data.meta.createdAt = createdAt
    return this
  }

  updateAt(updatedAt: string) {
    this.data.meta.updatedAt = updatedAt
    return this
  }

  layout(layout: PostModule['default']) {
    this.data.default = layout
    return this
  }

  build() {
    return this.data as PostModule
  }
}
