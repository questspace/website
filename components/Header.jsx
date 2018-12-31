import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import theme from '../utils/theme'
import styled from 'styled-components'

const StyledLink = styled(Link)`
  font-weight: 300;
  margin: 10px;
`

const Header = styled.header`
  text-align: center;
  padding: ${theme.space * 2}px ${theme.space / 2}px;
  h1 {
    letter-spacing: 1px;
    margin: 0 0 ${theme.space / 2}px 0;
    font-size: 2rem;
  }
  @media (max-width: ${theme.mediaQuerySmall}) {
    padding: 0;
  }
  .header--links {
    display: flex;
    justify-content: center;
    text-align: center;
    a {
      font-weight: 300;
      font-size: 0.9rem;
      margin: 10px;
    }
  }
  .header-link {
    font-weight: 300;
    margin: 10px;
  }
  .header-social-link {
    margin: 5px;
  }
  .header--slogan {
    font-size: 1.2rem;
    margin: 0 auto;
  }
  .header--bio {
    margin: 0 auto;
    text-align: center;
    @media (max-width: ${theme.mediaQuerySmall}) {
      width: 240px;
    }
  }
`

const QLogo = styled.img`
  width: 64px;
  padding-left: 25px;
  @media (max-width: ${theme.mediaQueryBig}) {
    width: 64px;
  }
  @media (max-width: ${theme.mediaQueryMedium}) {
    width: 60px;
  }
  @media (max-width: ${theme.mediaQuerySmall}) {
    width: 55px;
  }
`

export default () => (
  <Header className="header">
    <Head />
    <div id="q-logo" className="header--hero">
      <a href="/">
        <QLogo src="/static/img/q-logo.svg" />
      </a>
    </div>
    <div className="header--links">
      <StyledLink href="/about">
        <a>{'wtf'}</a>
      </StyledLink>
      <StyledLink href="/blog">
        <a>{'words & sentences'}</a>
      </StyledLink>
      <StyledLink href="/experiments">
        <a>{'experiments'}</a>
      </StyledLink>
      <StyledLink href="/help">
        <a>{'pay my bills'}</a>
      </StyledLink>
    </div>
  </Header>
)
