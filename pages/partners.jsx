import React from 'react'
import theme from '../utils/theme'
import styled, { keyframes } from 'styled-components'
import { fadeIn } from 'react-animations'

const fadeInAnimation = keyframes`${fadeIn}`

const Wrapper = styled.div`
  animation: 0.7s ${fadeInAnimation};
  display: flex;
  justify-content: space-evenly;
  text-align: center;
  @media (max-width: ${theme.mediaQueryMedium}) {
    display: block;
  }
`

const Partner = styled.a`
  width: 32%;
  @media (max-width: ${theme.mediaQueryMedium}) {
    width: 100%;
  }
`

const PartnerImage = styled.img`
  width: 150px;
  @media (max-width: ${theme.mediaQueryMedium}) {
    width: 120px;
  }
`

export default () => {
  return [
    <Wrapper>
      <Partner href="https://paralelnapoliskosice.sk/" target="_blank">
        <PartnerImage src="/static/img/partners/ppke-logo.png" />
      </Partner>
    </Wrapper>
  ]
}
