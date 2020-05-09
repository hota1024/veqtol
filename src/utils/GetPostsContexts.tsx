/**
 * Returns posts require.contexts.
 */
export const GetPostsContexts = () =>
  require.context('../pages', true, /\.mdx$/)
