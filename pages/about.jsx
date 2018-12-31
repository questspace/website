import React from 'react'
import { fadeIn } from 'react-animations'
import styled, { css, keyframes } from 'styled-components'
import { withStyles } from '../components/Icons'
import theme from '../utils/theme'

const fadeInAnimation = keyframes`${fadeIn}`

const Wrapper = styled.div`
  .about--social {
    text-align: center;
  }
  .about-social-link {
    margin: 5px;
  }
  font-family: 'Lora', serif;
  margin: 0;
  animation: 0.7s ${fadeInAnimation};
  .post--tags {
    margin: 15px 0;
  }
  blockquote {
    font-style: italic;
    padding: 10px;
    margin: 10px;
    background-image: url(/static/img/startquote.gif);
    background-position: top left;
    background-repeat: no-repeat;
    background-size: 5%;
    text-indent: 30px;
  }
  blockquote p {
    display: block;
    background-image: url(/static/img/endquote.gif);
    background-repeat: no-repeat;
    background-position: bottom right;
    background-size: 5%;
  }
`

const ProfileImg = styled.img`
  float: left;
  width: 200px;
`

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

export default () => {
  return (
    <Wrapper>
      <blockquote>"I know that I know nothing" - Socrates</blockquote>
      <p>
        Image you see in header of this website is{' '}
        <a href="http://harrypotter.wikia.com/wiki/Pensieve">Pensieve</a>. I
        think that perfectly describes this online space. It serves me as a
        place to put out stuff I'm thinking about. There are so many things in
        life you can learn about. I love learning at my own pace. I'm really
        slow thinker, but enduring one. A long-term strategy to life.
      </p>
      <p>
        I'm currently living in Europe, working as a software engineer, doing
        stuff with VR on the web.
      </p>
      <p>
        Content on this site is{' '}
        <a href="https://creativecommons.org/publicdomain/zero/1.0/">
          unlicensed
        </a>
        . If you cited something or shared and linked back - that's great, thank
        you! If not, that's great too! Hope your readers loved it.
      </p>

      <div className="about--social">
        <a
          className="about-social-link"
          href="https://facebook.com/michaltakacdesign/"
          target="_blank"
        >
          <StyledIcons.Facebook alt="Facebook" />
        </a>
        <a
          className="about-social-link"
          href="https://twitter.com/michaltakac/"
          target="_blank"
        >
          <StyledIcons.Twitter alt="Twitter" />
        </a>
        <a
          className="about-social-link"
          href="https://github.com/michaltakac/"
          target="_blank"
        >
          <StyledIcons.Github alt="GitHub" />
        </a>
        <a
          className="about-social-link"
          href="https://pinterest.com/michaltakac/"
          target="_blank"
        >
          <StyledIcons.Pinterest alt="Pinterest" />
        </a>
        <a
          className="about-social-link"
          href="https://www.goodreads.com/michaltakac/"
          target="_blank"
        >
          <StyledIcons.Goodreads alt="Goodreads" />
        </a>
      </div>
    </Wrapper>
  )
}
