import App from 'next/app'
import Head from 'next/head'

export default class extends App {
  render() {
    const { Component, pageProps } = this.props

    return (
      <>
        <Head>
          <title>hotalog</title>
        </Head>
        <Component {...pageProps} />
      </>
    )
  }
}
