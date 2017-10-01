const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = merge(common, {
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist'
  },
  plugins: [
    // SASS compilation target
    new ExtractTextPlugin({
      filename: "assets/styles/bundle.css"
    })
  ]
});


