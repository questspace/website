const posts = require('../static/posts')

const spaceReplace = string => string.replace(/\s+/g, '-').toLowerCase()

const getParams = (page, value) => ({
  page: `/${page}`,
  query: { [page]: spaceReplace(value) }
})

const defaultRoutes = {
  '/': { page: '/index' },
  '/blog': { page: '/blog' },
  '/about': { page: '/about' }
  // '/experiments': { page: '/experiments' },
  // '/help': { page: '/help' }
}

const routes = (defaults = defaultRoutes) =>
  posts.reduce((routes, post) => {
    const postRoutes = Object.assign(routes, {
      [`/blog/${post.date}/${post.slug}`]: getParams('blog', post.slug)
    })
    const tags = post.tags || []
    return tags.reduce(
      (acc, tag) =>
        Object.assign(
          { [`/tag/${spaceReplace(tag)}`]: getParams('tag', tag) },
          acc
        ),
      postRoutes
    )
  }, defaults)

module.exports = routes
