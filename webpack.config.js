'use strict';

const ExtractTextPlugin = require('extract-text-webpack-plugin');

const sassLoaders = [
  'css-loader?sourceMap',
  'sass-loader?outputStyle=expanded'
];

module.exports = {
  entry: './src/main.js',
  output: {
    path: './',
    filename: 'bundle.js'
  },
  devtool: '#source-map',
  devServer: {
    port: 3333,
    inline: true
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['react', 'babel-preset-es2015']
        }
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('style', sassLoaders)
      },
      {
        test: /\.json?$/,
        loader: 'json'
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin("bundle.css")
  ]
}