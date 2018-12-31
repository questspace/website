import React from 'react'
import SocialShareButtons from './SocialShareButtons'
import config from '../config'
import Head from 'next/head'
import theme from '../utils/theme'
import styled from 'styled-components'
import Post from './Post'

const StyledPost = styled.div`
  .post--furtherReading {
    display: flex;
    justify-content: middle;
    margin-bottom: 45px;
  }
  .post--furtherReading__previous {
    text-align: left;
    flex: 1;
  }
  .post--furtherReading__next {
    text-align: right;
    flex: 2;
  }
`

const BreakLine = styled.div`
  width: ${props => (props.width ? props.width : '100%')};
  border-top: 1px solid ${theme.colors.accent.lighten(0.4)};
  margin: 20px auto;
`

export default props => (
  <StyledPost>
    <Head>
      <title>{config.siteName}</title>
      {/* Twitter Card data */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@michaltakac" />
      <meta name="twitter:title" content={props.title} />
      <meta
        name="twitter:description"
        content="Online Pensieve containing thoughts of Michal Takac"
      />
      <meta name="twitter:creator" content="@michaltakac" />

      {/* Open Graph data */}
      <meta property="og:title" content={props.title} />
      <meta property="og:type" content="article" />
      <meta
        property="og:url"
        content={`https://michaltakac.com/post/${props.slug}`}
      />
      <meta
        property="og:description"
        content="Online Pensieve containing thoughts of Michal Takac"
      />
      <meta property="og:site_name" content={config.siteName} />
    </Head>
    <Post {...props}>{props.children}</Post>

    <SocialShareButtons
      url={`https://michaltakac.com/post/${props.slug}`}
      title={props.title}
    />

    <BreakLine />
  </StyledPost>
)
