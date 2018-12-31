import React from 'react'
import styled, { keyframes } from 'styled-components'
import { fadeIn } from 'react-animations'

const fadeInAnimation = keyframes`${fadeIn}`

const Wrapper = styled.div`
  animation: 0.7s ${fadeInAnimation};
  word-wrap: break-word;
`

export default () => {
  return (
    <Wrapper>
      <h1>Want to help? Donate!</h1>
      <p>
        <strong>BTC:</strong> 3DKrqgAMLktorYisFoERS1nUJJiSbihbBM <br />
        <strong>LTC:</strong> MTyA4HtqNaKYgC1FVDbk37U8gVkjE5Xaou <br />
        <strong>ETH:</strong> 0xf9F2E4A849c4Cb2FBd09802c96d681499aE00664 <br />
        <strong>XMR:</strong>{' '}
        43BGWBiyWwJV1csW21fu9aNSHPJfaNjKF2gLqvdWxTYc7SWfkiRKpJTNHAXiNyKa51ecrdQE9ETH1Bg7UHkTQHVZBV9w22E
      </p>

      <p>Thank you.</p>
    </Wrapper>
  )
}
