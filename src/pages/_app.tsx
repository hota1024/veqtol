import App from 'next/app'
import Head from 'next/head'

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
        <Component {...pageProps} />
      </>
    )
  }
}
