const { merge } = require('webpack-merge')
const packageJson = require('../package.json')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')

const commonConfig = require('./webpack.common')

const devConfig = {
  mode: 'development',
  devServer: {
    port: 8080,
    historyApiFallback: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '..', 'public/index.html'),
      filename: 'index.html',
      title: 'MFs Module Federation',
      inject: 'body'
    }),
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
