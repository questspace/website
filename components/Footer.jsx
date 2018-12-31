import React from 'react'
import theme from '../utils/theme'
import styled from 'styled-components'

const medium = '700px'

const Footer = styled.footer`
  width: 500px;
  @media (min-width: ${medium}) {
    width: 700px;
  }
  display: flex;
  justify-content: space-between;
  margin: 50px auto;

  a,
  a:visited {
    color: ${theme.colors.accent.darken(0.3)};
  }
  .zeit-logo {
    color: black;
  }
  .footer--left {
    text-align: left;
  }

  .footer--right {
    text-align: right;
  }
  @media (max-width: ${theme.mediaQueryMedium}) {
    width: 400px;
    flex-flow: column wrap;
    .footer--left,
    .footer--right {
      text-align: center;
    }
  }
`

const ZeroCopyrightImage = styled.img`
  width: 9px;
`

export default () => (
  <Footer className="footer">
    <small className="footer--left">
      <a
        href="https://creativecommons.org/publicdomain/zero/1.0/"
        target="_blank"
      >
        <ZeroCopyrightImage src="/static/img/publicdomain.png" />{' '}
        {`${new Date().getFullYear()}`}
      </a>
    </small>

    <small className="footer--right">
      <a href="https://zeit.co" target="_blank">
        <span className="zeit-logo" aria-label="zeit">
          ▲
        </span>
      </a>
    </small>
  </Footer>
)
