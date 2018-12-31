import App, { Container } from 'next/app'
import React from 'react'
import Layout from '../components/Layout'

// Override the App class to put layout component around the page contents
// https://github.com/zeit/next.js#custom-app

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    const { pathname } = this.props.router
    return (
      <Container>
        <Layout pathname={pathname}>
          <Component {...pageProps} />
        </Layout>
      </Container>
    )
  }
}
