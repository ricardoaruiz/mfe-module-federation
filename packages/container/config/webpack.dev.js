const { merge } = require('webpack-merge')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')

const commonConfig = require('./webpack.common')
const packageJson = require('../package.json')

const devConfig = {
  mode: 'development',
  devServer: {
    port: 8080,
    historyApiFallback: true
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'MF_Container',
      remotes: {
        marketing: 'MF_Marketing@http://localhost:8081/remoteEntry.js'
      },
      shared: {
        ...packageJson.dependencies
      }
    })
  ]
}

module.exports = merge(devConfig, commonConfig)
