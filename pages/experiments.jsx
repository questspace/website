import React from 'react'
import theme from '../utils/theme'
import styled, { keyframes } from 'styled-components'
import { fadeIn } from 'react-animations'

const fadeInAnimation = keyframes`${fadeIn}`

const Wrapper = styled.div`
  animation: 0.7s ${fadeInAnimation};
  display: flex;
  justify-content: space-between;
  @media (max-width: ${theme.mediaQueryMedium}) {
    display: block;
  }
`

const Experiment = styled.a`
  width: 32%;
  @media (max-width: ${theme.mediaQueryMedium}) {
    width: 100%;
  }
`

const ExperimentImage = styled.div`
  width: 100%;
  height: 160px;
  background-image: url(${props => props.img});
  background-position: center;
  background-size: cover;
  @media (max-width: ${theme.mediaQueryMedium}) {
    width: 100%;
    height: 300px;
  }
`

export default () => {
  return [
    <Wrapper>
      <Experiment href="https://mathworldvr.com/" target="_blank">
        <ExperimentImage img="/static/img/experiments/mathworldvr.jpg" />
        <h3>MathworldVR</h3>
        <p className="experiment--list__description">
          "I am convinced that the best learning takes place when the learner
          takes charge."
          <br /> - Seymour Papert
        </p>
      </Experiment>
    </Wrapper>
  ]
}
