#!/usr/bin/env node
const posts = require('../../utils/posts')

function exportMeta() {
  const json = JSON.stringify(posts, null, 2)

  const exportPath = 'posts.json'

  fs.writeFileSync(exportPath, json)
  console.info(`Saved ${posts.length} posts in ${exportPath}`)
}

exportMeta()
