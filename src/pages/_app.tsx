import App from 'next/app'
import Head from 'next/head'
import { MDXProvider } from '@mdx-js/react'
import { MdxComponents } from '../MdxComponents'

export default class extends App {
  render() {
    const { Component, pageProps } = this.props

    return (
      <>
        <Head>
          <title>hotalog</title>
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@300;400;500;700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <MDXProvider components={MdxComponents}>
          <Component {...pageProps} />
        </MDXProvider>
      </>
    )
  }
}
