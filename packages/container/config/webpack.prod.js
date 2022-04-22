const { merge } = require('webpack-merge')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')

const commonConfig = require('./webpack.common')
const packageJson = require('../package.json')

const domain = process.env.MFS_DOMAIN

module.exports = (env) => {

  const prodConfig = {
    mode: 'production',
    output: {
      filename: '[name].[contenthash].js',
      publicPath: '/container/latest'
    },
    plugins: [
      new ModuleFederationPlugin({
        name: 'MF_Container',
        remotes: {
          marketing: `MF_Marketing@${env.MFS_DOMAIN}/marketing/latest/remoteEntry.js`
        },
        shared: {
          ...packageJson.dependencies
        }
      })
    ]
  }

  return merge(prodConfig, commonConfig)

}
