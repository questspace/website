import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import config from '../config'
import { distanceInWordsToNow } from 'date-fns'
import theme from '../utils/theme'
import styled, { keyframes } from 'styled-components'
import { fadeIn } from 'react-animations'
import animateScrollTo from 'animated-scroll-to'
import ScrollPercentage from 'react-scroll-percentage'

const fadeInAnimation = keyframes`${fadeIn}`

const Article = styled.article`
  font-family: 'Lora', serif;
  margin: 0;
  animation: 0.7s ${fadeInAnimation};
  section: {
    margin: 5px 0;
  }
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

const LeftBottomNav = styled.div`
  background: linear-gradient(
    to top,
    rgba(255, 255, 255, 1),
    rgba(255, 255, 255, 0.96)
  );
  padding: 10px 50px 50px 100px;
  position: fixed;
  left: 50px;
  bottom: 50px;
  font-size: 10px;
  text-align: center;
  opacity: ${props => props.percentage / 100} @media
    (max-width: ${theme.mediaQueryMedium}) {
    display: none;
  }
`

export default class extends React.Component {
  constructor(...args) {
    super(...args)

    this.state = {
      percentage: null,
      distanceFromLeft: 50
    }

    this.handleReadingStatus = this.handleReadingStatus.bind(this)
    this.handleResizing = this.handleResizing.bind(this)
  }

  componentDidMount() {
    // !this.props.excerpt && require('intersection-observer')
    window.addEventListener('resize', this.handleResizing)

    this.setState({ distanceFromLeft: this.distanceFromLeft() })
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResizing)
  }

  distanceFromLeft = () => {
    const fullWidth = window.innerWidth
    const articleWidth = document.querySelector('article').clientWidth
    const sliderNavWidth = document.getElementById('slider-nav').clientWidth
    const distanceFromLeft = (fullWidth - articleWidth) / 2 - sliderNavWidth - 10

    return distanceFromLeft
  }

  handleResizing(event) {
    this.setState({ distanceFromLeft: this.distanceFromLeft() })
  }

  handleReadingStatus(percentage) {
    const value = Math.floor((5.234242).toPrecision(5) * 100)
    this.setState({ percentage: value < 30 ? 0 : value })
  }

  render() {
    const {
      title,
      author,
      date,
      tags,
      body,
      slug,
      excerpt,
      children
    } = this.props
    return (
      <Article
        itemScope
        itemType="http://schema.org/BlogPosting"
        className="post"
      >
        <Head>
          <title>{`${config.siteName} - ${this.props.title}`}</title>
        </Head>
        <header>
          <h2 itemProp="headline" className="post--title">
            {this.props.title}
          </h2>
          <ScrollPercentage
            threshold={1}
            onChange={state => this.handleReadingStatus(state.percentage)}
          >
            <LeftBottomNav
              id="slider-nav"
              percentage={this.state.percentage}
              style={{ left: this.state.distanceFromLeft }}
            >
              <a onClick={() => animateScrollTo(0)}>
                <div>
                  <br />
                  {'to the top'}
                </div>
              </a>
              <div>
                <br />
                <Link href="/">
                  <a className="home-link">
                    <br />
                    {'home'}
                  </a>
                </Link>
              </div>
            </LeftBottomNav>
          </ScrollPercentage>
          <section className="post--tags">
            <small>
              <span>Tags: </span>
              {this.props.tags.map((tag, index) => (
                <span key={tag} itemProp="keywords" className="post--tag">
                  <Link href={`/tag/${tag.replace(/\s+/g, '-').toLowerCase()}`}>
                    <a>{tag}</a>
                  </Link>
                  {index !== tags.length - 1 ? ', ' : ''}
                </span>
              ))}
            </small>
          </section>
          <section className="post--info">
            <span>
              <time itemProp="datePublished" dateTime={date}>
                {distanceInWordsToNow(date, { addSuffix: true })}
              </time>
            </span>
          </section>
        </header>
        {this.props.children}
      </Article>
    )
  }
}
