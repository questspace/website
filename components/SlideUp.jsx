import React from 'react'
import styled, { css } from 'styled-components'
import theme from '../utils/theme'
import icons, { withStyles } from './Icons'

const iconStyles = css`
  width: 20px;
  height: 30px;
  fill: ${theme.colors.main};
  path {
    transition: fill 1s ease;
  }
  :hover path {
    fill: ${theme.colors.accent};
    transition: fill 1s ease;
  }
`
const StyledIcons = withStyles(iconStyles)

const Wrapper = styled.div`
  display: flex;
  margin-top: 30px;
  .post--footer-social-share {
    margin: 7px 10px 5px 0;
  }
  .footer--social-share-link {
    margin: 5px;
  }
`

export default ({ url, title }) => (
  <Wrapper className="post--footer-social">
    {/* <span className="post--footer-social-share">Share: </span> */}
    {/* <a
      className="footer--social-share-link"
      href={`https://www.facebook.com/sharer.php?u=${url}`}
      target="_blank">
      <StyledIcons.Facebook alt="Facebook" />
    </a> */}
    <a
      className="footer--social-share-link"
      href={`https://twitter.com/intent/tweet?url=${url}&text="${title}"&via=michaltakac`}
      target="_blank"
    >
      <StyledIcons.Twitter src="/static/img/twitter.svg" alt="Tweet this!" />
    </a>
    {/* <a
      className="footer--social-share-link"
      href={`https://plus.google.com/share?url=${url}`}
      target="_blank">
      <StyledIcons.Google src="/static/img/google.svg" alt="Google" />
    </a> */}
  </Wrapper>
)
