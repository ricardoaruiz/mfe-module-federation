const { merge } = require('webpack-merge')
const packageJson = require('../package.json')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')

const commonConfig = require('./webpack.common')

const devConfig = {
  mode: 'development',
  devServer: {
    port: 8081,
    historyApiFallback: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '..', 'public/index.html'),
      filename: 'index.html',
      title: 'Marketing MF',
      inject: 'body'
    }),
    new ModuleFederationPlugin({
      name: 'MF_Marketing',
      filename: 'remoteEntry.js',
      exposes: {
        './MarketingApp': './src/bootstrap.jsx'
      },
      shared: {
        ...packageJson.dependencies
      }
    })
  ]
}

module.exports = merge(devConfig, commonConfig)
