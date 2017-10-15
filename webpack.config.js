const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const APP   = path.join(__dirname, 'src');
const DIST  = path.join(__dirname, 'dist');

module.exports = {
  entry: APP,
  output: {
    path: DIST,
    filename: 'app.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true
          }
        }
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: 'Flappy Bird by @agzeri',
      inject: 'body',
      filename: 'index.html'
    })
  ]
};
