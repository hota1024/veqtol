/**
 * Returns posts require.contexts.
 */
export const GetPostsContexts = () => require.context('../', true, /\.mdx$/)
