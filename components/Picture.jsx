import React from 'react'
import Link from 'next/link'
import { Spring, animated } from 'react-spring'
import styled from 'styled-components'
import theme from '../utils/theme'
import css from './Picture.scss'

const Frame = styled.div`
  width: 660px;
  border: 20px solid black;
  margin: 0 auto;
  @media (max-width: ${theme.mediaQueryBig}) {
    width: 560px;
  }
  @media (max-width: ${theme.mediaQueryMedium}) {
    width: 275px;
  }
  @media (max-width: ${theme.mediaQuerySmall}) {
    width: 230px;
  }
`

export default class Picture extends React.Component {
  state = {
    reversed: false
  }
  reverseAnimation = async () => {
    await new Promise(resolve => setTimeout(resolve, 2000))
    this.setState({ reversed: !this.state.reversed })
  }
  render() {
    return (
      <Frame>
        <div className={css.pic}>
          <Spring
            native
            reset
            reverse={this.state.reversed}
            config={{ duration: 3000 }}
            from={{ opacity: 0.3 }}
            to={{ opacity: 1 }}
            onRest={this.reverseAnimation}
          >
            {props => (
              <Link href="/about" as="/about">
                <animated.img
                  src="/static/img/light_1280px.png"
                  style={{
                    width: '100%',
                    margin: '0 auto',
                    mixBlendMode: 'color-dodge',
                    display: 'block',
                    opacity: props.opacity,
                    cursor: 'pointer'
                  }}
                />
              </Link>
            )}
          </Spring>
        </div>
      </Frame>
    )
  }
}
