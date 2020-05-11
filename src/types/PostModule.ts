import { PostMeta } from './PostMeta'

/*
 * PostModule type.
 */
export type PostModule = {
  /**
   * Post meta.
   */
  meta: PostMeta

  /**
   * Post layout.
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  default: (props: any) => JSX.Element
}
