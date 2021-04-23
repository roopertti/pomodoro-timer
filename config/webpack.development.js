const { merge } = require('webpack-merge')
const path = require('path')

const config = require('./webpack.common')

module.exports = merge(config, {
  mode: 'development',
  devServer: {
    contentBase: path.join(__dirname, '..', 'build'),
    compress: true,
    port: 3000,
    hot: true,
    open: true,
    historyApiFallback: true
  },
  devtool: 'eval-source-map'
})
