const { merge } = require('webpack-merge')
const path = require('path')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')

const commonConfig = require('./webpack.common')
const packageJson = require('../package.json')

module.exports = (env) => { 

  const devConfig = {
    mode: 'development',
    output: {
      publicPath: 'http://localhost:8080/',
    },
    devServer: {
      port: 8080,
      historyApiFallback: true
    },
    plugins: [
      new ModuleFederationPlugin({
        name: 'MF_Container',
        remotes: {
          marketing: `MF_Marketing@${env.MFS_DOMAIN}:8081/remoteEntry.js`
        },
        shared: {
          ...packageJson.dependencies
        }
      })
    ]
  }
  
  return merge(devConfig, commonConfig)

}

