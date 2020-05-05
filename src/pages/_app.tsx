import App from 'next/app'
import { MainLayout } from '../layouts/Main'
import Head from 'next/head'
import { PostLayout } from '../layouts/Post'

export default class extends App {
  render() {
    const { Component, pageProps } = this.props
    let isPost = false

    if (Component['isMDXComponent'] && !Component['noPost']) {
      isPost = true
    }

    return (
      <>
        <Head>
          <title>hotalog</title>
        </Head>
        {isPost ? (
          <PostLayout>
            <Component {...pageProps} />
          </PostLayout>
        ) : (
          <MainLayout>
            <Component {...pageProps} />
          </MainLayout>
        )}
      </>
    )
  }
}
