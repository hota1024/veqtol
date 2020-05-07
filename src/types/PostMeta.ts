/*
 * PostMeta data type.
 */
export type PostMeta = {
  /**
   * Post title.
   */
  title: string

  /**
   * Post tags array.
   */
  tags: string[]

  /**
   * Post thumbnail url.
   */
  thumbnail?: string

  /**
   * Post created at.
   */
  createdAt: string

  /**
   * Post updated at.
   */
  updatedAt: string
}
