const postFileNames = ['developers-see-developers-do.mdx']

module.exports = postFileNames.map(name => {
  const { meta } = require('../pages/blog/' + name)

  return meta
})
