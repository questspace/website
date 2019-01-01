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
      <p>
        QuestSpace is a physical space located in the heart of Košice, Slovakia.
      </p>
      <p>
        Currently, it serves as a personal hackerspace. Let's see if that would
        make sense.
      </p>
      {/*<p>
        Content on this site is{' '}
        <a href="https://creativecommons.org/publicdomain/zero/1.0/">
          unlicensed
        </a>
        . If you cited something or shared and linked back - that's great, thank
        you! If not, that's great too! Hope your readers loved it.
      </p>*/}

      <div className="about--social">
        <a
          className="about-social-link"
          href="https://twitter.com/michaltakac/"
          target="_blank"
        >
          <StyledIcons.Twitter alt="Twitter" />
        </a>
        <a
          className="about-social-link"
          href="https://github.com/questspace/"
          target="_blank"
        >
          <StyledIcons.Github alt="GitHub" />
        </a>
      </div>
    </Wrapper>
  )
}
