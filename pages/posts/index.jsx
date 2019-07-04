import React from 'react'
import format from 'date-fns/format'
import compareDesc from 'date-fns/compare_desc'
import PostLink from '../../components/PostLink'
import posts from '../../utils/posts'

export default () => (
  <div>
    {posts
      .filter(post => !post.draft)
      .sort((a, b) => compareDesc(format(a.date), format(b.date)))
      .map(post => (
        <PostLink
          key={post.slug}
          title={post.title}
          slug={post.slug}
          date={post.date}
          author={post.author}
          Blogpost={post.Blogpost}
          tags={post.tags}
          excerpt={post.excerpt}
          pageTitle={post.title}
        />
      ))}
  </div>
)
