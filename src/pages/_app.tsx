import App from 'next/app'
import { MainLayout } from '../layouts/Main'
import Head from 'next/head'

export default class extends App {
  render() {
    const { Component, pageProps } = this.props

    return (
      <>
        <Head>
          <title>hotalog</title>
        </Head>
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </>
    )
  }
}
