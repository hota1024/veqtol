// eslint-disable-next-line @typescript-eslint/no-var-requires
const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
})

module.exports = withMDX({
  exportTrailingSlash: true,
  pageExtensions: ['ts', 'tsx', 'md', 'mdx'],
})
