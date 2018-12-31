const sass = require('@zeit/next-sass')
const bundleAnalyzer = require('@zeit/next-bundle-analyzer')
const mdx = require('@zeit/next-mdx')({
  extension: /\.mdx?$/
})
const images = require('next-images')
const withPlugins = require('next-compose-plugins')
const routes = require('./utils/routes')

const plugins = [
  [
    bundleAnalyzer,
    {
      analyzeServer: ['server', 'both'].includes(process.env.BUNDLE_ANALYZE),
      analyzeBrowser: ['browser', 'both'].includes(process.env.BUNDLE_ANALYZE),
      bundleAnalyzerConfig: {
        server: {
          analyzerMode: 'static',
          reportFilename: '../bundles/server.html'
        },
        browser: {
          analyzerMode: 'static',
          reportFilename: '../bundles/client.html'
        }
      }
    }
  ],
  [
    mdx,
    {
      pageExtensions: ['js', 'jsx', 'mdx']
    }
  ],
  [
    sass,
    {
      cssModules: true
    }
  ],
  images
]

const nextConfig = {
  distDir: 'build',
  webpack: (config, options) => {
    // config.module.rules.push({
    //   test: /\.mdx?$/,
    //   use: ['babel-loader', 'mdx-loader']
    // })
    return config
  },
  exportPathMap: () => routes()
}

module.exports = withPlugins(plugins, nextConfig)
