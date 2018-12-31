const posts = require('../static/posts')

const spaceReplace = string => string.replace(/\s+/g, '-').toLowerCase()

const getParams = page => ({
  page: `/${page}`
})

const defaultRoutes = {
  '/': { page: '/index' },
  '/about': { page: '/about' },
  '/experiments': { page: '/experiments' },
  '/help': { page: '/help' }
}

// function routes(posts, defaults = defaultRoutes) {
//   const prepared = posts.map(p => )
//   return Object.assign(defaults, )
// }

const routes = (defaults = defaultRoutes) =>
  posts.reduce((routes, post) => {
    const postRoutes = Object.assign(routes, {
      [`blog/${post.date}/${post.slug}`]: getParams('blog', post.slug)
    })
    const tags = post.tags || []
    return tags.reduce(
      (acc, tag) =>
        Object.assign(
          { [`tag/${spaceReplace(tag)}`]: getParams('tag', tag) },
          acc
        ),
      postRoutes
    )
  }, defaults)

module.exports = routes
