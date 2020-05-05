import App from 'next/app'
import { MainLayout } from '../layouts/Main'

export default class extends App {
  render() {
    const { Component, pageProps } = this.props

    return (
      <>
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </>
    )
  }
}
