const merge = require('webpack-merge');
const common = require('./webpack.common.js');

const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const ImageminWebpackPlugin = require('imagemin-webpack-plugin').default;
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

module.exports = merge(common, {
  devtool: 'source-map',
  plugins: [
    // SASS compilation target
    new ExtractTextPlugin({
      filename: "assets/styles/bundle.css"
    }),
    new UglifyJSPlugin({
      sourceMap: true
    }),
    // Compress static assets
    new ImageminWebpackPlugin({
      test: /\.(jpe?g|png|gif|svg)$/i,
      //disable: process.env.NODE_ENV !== 'prod',
      pngquant: {
        quality: '95-100'
      },
      optipng: {
        optimizationLevel: 5 //0-7 (7 slower)
      },
      jpegtran: {
        progressive: true
      },
      gifsicle: {
        optimizationLevel: 3 //1-3 (3 slower)
      }
    }),
    // Create most commonly used favicons icons
    new FaviconsWebpackPlugin({
      // Your source logo
      logo: './src/assets/images/favicon.svg',
      // The prefix for all image files (might be a folder or a name)
      prefix: 'assets/images/icons-[hash]/',
      // Emit all stats of the generated icons
      emitStats: false,
      // The name of the json containing all favicon information
      statsFilename: 'iconstats-[hash].json',
      // Generate a cache file with control hashes and
      // don't rebuild the favicons until those hashes change
      persistentCache: true,
      // Inject the html into the html-webpack-plugin
      inject: true,
      // favicon background color (see https://github.com/haydenbleasel/favicons#usage)
      //background: '#fff',
      // favicon app title (see https://github.com/haydenbleasel/favicons#usage)
      title: 'Anna',

      // which icons should be generated (see https://github.com/haydenbleasel/favicons#usage)
      icons: {
        android: true,
        appleIcon: true,
        appleStartup: true,
        coast: false,
        favicons: true,
        firefox: true,
        opengraph: false,
        twitter: true,
        yandex: false,
        windows: false
      }
    }),
  ]
})
