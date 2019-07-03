import React from 'react'
import { fadeIn } from 'react-animations'
import styled, { css, keyframes } from 'styled-components'
import { withStyles } from '../components/Icons'
import theme from '../utils/theme'

const fadeInAnimation = keyframes`${fadeIn}`

const Wrapper = styled.div`
  p {
    text-align: center;
  }
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
        <br />
        It serves as a hackerspace, makerspace, research workspace and studio.
        <br />
      </p>

      <p>
        We operate as a self-governing micro-community, programmatically
        governed by{' '}
        <a
          href="https://en.wikipedia.org/wiki/Decentralized_autonomous_organization"
          target="_blank"
        >
          DAO
        </a>{' '}
        (Decentralized Autonomous Organization).
        Our DAO is build on top of{' '}
        <a href="https://hack.aragon.org/" target="_blank">
          AragonOS
        </a>.
      </p>

      <div className="about--social">
        <a
          className="about-social-link"
          href="https://twitter.com/questalion/"
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
