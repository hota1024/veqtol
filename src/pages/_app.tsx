import App, { AppContext } from 'next/app'
import Head from 'next/head'
import { MDXProvider } from '@mdx-js/react'
import { MdxComponents } from '@/MdxComponents'
import { GetTagsData, Get } from '@/utils'
import { createContext } from 'react'

export const CommonContext = createContext({
  tagNames: [] as string[],
})

export type AppProps = {
  tagNames: string[]
}

export default class extends App<AppProps> {
  static async getInitialProps({ Component, ctx }: AppContext) {
    let pageProps = {}
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    const tagNames = GetTagsData().map(({ name }) => name)

    return { pageProps, tagNames }
  }

  get commonValue() {
    return {
      tagNames: this.props.tagNames,
    }
  }

  render() {
    const { Component, pageProps } = this.props

    return (
      <>
        <Head>
          <title>{Get('title')}</title>
          <meta name="description" content={Get('description')} />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@300;400;500;700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <MDXProvider components={MdxComponents}>
          <CommonContext.Provider value={this.commonValue}>
            <Component {...pageProps} />
          </CommonContext.Provider>
        </MDXProvider>
      </>
    )
  }
}
