const webpack = require('webpack');
const merge = require('webpack-merge');
const path = require('path');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  devtool: 'inline-source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    }),
    new ForkTsCheckerWebpackPlugin() // runs type checking in a separate process
  ],
  devServer: {
    stats: 'minimal'
  }
});