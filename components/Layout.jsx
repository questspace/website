import React from 'react'
import config from '../config'
import styled, { ThemeProvider } from 'styled-components'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Layouts from '../layouts'
import theme, { defaultColors } from '../utils/theme'

const Layout = Layouts[config.layout || 'none']

const Theme = styled.div`
  font-family: 'Lato', sans-serif;
  font-size: 1.1rem;
  line-height: 1.6;
  p {
    margin: 1.3rem 0;
  }
  color: ${theme.colors.main};
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: 'Lato', sans-serif;
    font-weight: 400;
    color: ${theme.colors.main};
  }
  a {
    transition: all 0.5s ease;
    color: ${theme.colors.accent};
  }
  a:hover {
    cursor: pointer;
    transition: all 0.5s ease;
    color: ${theme.colors.accent.lighten(0.2)};
  }
  @media (max-width: ${theme.mediaQueryBig}) {
    font-size: 1rem;
    line-height: 1.6;
  }
  @media (max-width: ${theme.mediaQueryMedium}) {
    font-size: 0.9rem;
    line-height: 1.5;
  }
  @media (max-width: ${theme.mediaQuerySmall}) {
    font-size: 0.8rem;
    line-height: 1.4;
  }
`

export default ({ ...props }) => (
  <ThemeProvider theme={config.theme ? config.theme.colors : defaultColors}>
    <Layout>
      <Theme>
        {!props.isBlogpost && <Header />}
        <main className="main">{props.children}</main>
        {!props.isBlogpost && <Footer className="footer" />}
      </Theme>
    </Layout>
  </ThemeProvider>
)
