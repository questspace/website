import React from 'react'
import marked from 'marked'
import Prism from 'prismjs'
import styled from 'styled-components'
import 'prismjs/components/prism-markdown'
import 'prismjs/components/prism-jsx'
import 'prismjs/components/prism-json'
import 'prismjs/components/prism-javascript'
import 'prismjs/components/prism-bash'

const renderer = new marked.Renderer()
const langPrefix = 'language-'

// prettier-ignore
renderer.code = (code, language = "html") => `<pre class="${langPrefix}${language}"><code class="${langPrefix}${language}">${Prism.highlight(code, Prism.languages[language])}</code></pre>`;
renderer.table = (header, body) =>
  `<div class="table-wrapper"><table>${header}${body}</table></div>`

marked.setOptions({
  gfm: true,
  breaks: true,
  langPrefix,
  renderer
})

module.exports = markdown => marked(markdown)
