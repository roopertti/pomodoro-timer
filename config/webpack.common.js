const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: path.join(__dirname, '..', 'src', 'index.js'),
  output: {
    path: path.join(__dirname, '..', 'build'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({ template: path.join(__dirname, '..', 'src', 'index.html') })
  ],
  resolve: {
    alias: {
      Components: path.join(__dirname, '..', 'src', 'components'),
      Util: path.join(__dirname, '..', 'src', 'util'),
      Contexts: path.join(__dirname, '..', 'src', 'contexts'),
      Hooks: path.join(__dirname, '..', 'src', 'hooks')
    }
  }
}
