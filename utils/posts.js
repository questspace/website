const postFileNames = ['dimensionlab-meets-questspace.mdx']

module.exports = postFileNames.map(name => {
  const { meta } = require('../pages/posts/' + name)

  return meta
})
