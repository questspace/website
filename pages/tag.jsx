import React from 'react'
import Link from 'next/link'
import { withRouter } from 'next/router'
import PostLink from '../components/PostLink'
import posts from '../utils/posts'

export default withRouter(({ router: { query: { tag } } }) => (
  <div>
    <Link href="/blog">
      <a>Home</a>
    </Link>
    <h1>{`Tag: "${tag.charAt(0).toUpperCase()}${tag.substring(1)}"`}</h1>
    {posts
      .filter(post => post.tags && post.tags.includes(tag))
      .map(post => (
        <PostLink
          key={post.slug}
          title={post.title}
          slug={post.slug}
          date={post.date}
          author={post.author}
          tags={post.tags}
          excerpt={post.excerpt}
        />
      ))}
  </div>
))
