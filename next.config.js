/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')
const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
})

module.exports = withMDX({
  exportTrailingSlash: true,
  pageExtensions: ['ts', 'tsx', 'md', 'mdx'],
  webpack(config) {
    config.resolve.alias['@'] = path.resolve(__dirname, 'src')
    return config
  },
})
