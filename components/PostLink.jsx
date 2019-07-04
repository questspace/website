import React from 'react'
import Link from 'next/link'
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
  .post--tags {
    margin: 15px 0;
  }
  .info-section: {
    margin: 5px 0;
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
  padding: 10px 20px 20px 50px;
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
  componentDidMount() {
    !this.props.excerpt && require('intersection-observer')
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
      pageTitle
    } = this.props
    return (
      <Article
        itemScope
        itemType="http://schema.org/BlogPosting"
        className="post"
      >
        <header>
          <Link href={`/posts/${slug}`}>
            <a>
              <h2 itemProp="headline" className="post--title">
                {title}
              </h2>
            </a>
          </Link>
          <section className="post--tags info-section">
            <small>
              <span>Tags: </span>
              {tags.map((tag, index) => (
                <span key={tag} itemProp="keywords" className="post--tag">
                  <Link href={`/tag/${tag.replace(/\s+/g, '-').toLowerCase()}`}>
                    <a>{tag}</a>
                  </Link>
                  {index !== tags.length - 1 ? ', ' : ''}
                </span>
              ))}
            </small>
          </section>
          <section className="post--info info-section">
            <span>
              <time itemProp="datePublished" dateTime={date}>
                {distanceInWordsToNow(date, { addSuffix: true })}
              </time>
            </span>
          </section>
        </header>
        <div className="post--body"><Link href={`/posts/${slug}`}>{excerpt}</Link></div>
      </Article>
    )
  }
}
