const { merge } = require('webpack-merge')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')

const commonConfig = require('./webpack.common')
const packageJson = require('../package.json')

module.exports = (env) => {

  const prodConfig = {
    mode: 'production',
    output: {
      filename: '[name].[contenthash].js',
      publicPath: '/container/latest/'
    },
    plugins: [
      new ModuleFederationPlugin({
        name: 'MF_Container',
        remotes: {
          auth: `MF_Auth@${env.MFS_DOMAIN}/auth/latest/remoteEntry.js`,
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
