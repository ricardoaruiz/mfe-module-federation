const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')

const packageJson = require('../package.json')

module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ["@babel/preset-react", "@babel/preset-env"],
            plugins: ["@babel/plugin-transform-runtime"]
          }
        },
        resolve: {
          extensions: [".js", ".jsx"]
        }
      }
    ]
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'MF_Auth',
      filename: 'remoteEntry.js',
      exposes: {
        './AuthApp': './src/bootstrap.jsx'
      },
      shared: {
        ...packageJson.dependencies
      }
    })
  ]
}
