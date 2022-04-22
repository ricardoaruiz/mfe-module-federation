const { merge } = require('webpack-merge')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

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
    })
  ]
}

module.exports = merge(devConfig, commonConfig)
