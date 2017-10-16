const path = require('path');

const HtmlWebpackPlugin   = require('html-webpack-plugin');
const CleanWebpackPlugin  = require('clean-webpack-plugin');
const ExtractTextPlugin   = require('extract-text-webpack-plugin');

const APP   = path.join(__dirname, 'src');
const STYLE = path.join(__dirname, 'src/styles/app.scss');
const DIST  = path.join(__dirname, 'dist');

module.exports = {
  entry: APP,
  devtool: 'source-map',
  devServer: {
    contentBase: DIST
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
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: ExtractTextPlugin.extract({
          use: ['css-loader', 'sass-loader'],
          fallback: 'style-loader'
        })
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new ExtractTextPlugin({
      filename: '[name].css'
    }),
    new HtmlWebpackPlugin({
      title: 'Flappy Bird by @agzeri',
      inject: 'body'
    })
  ],
  output: {
    path: DIST,
    filename: '[name].js'
  }
};
