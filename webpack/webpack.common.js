const webpack = require("webpack");
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

let BASE_URL  = '/';                          //HTML5 history api href for <base>
let API_URL   = 'http://localhost:8000/';     //API endpoints base

switch(process.env.NODE_ENV){
  case 'dev':
    BASE_URL = '/';
    API_URL  = 'http://localhost:8080/';
    break;
  case 'prod':
    BASE_URL = '/';
    API_URL = 'http://localhost:8000/';
    break;
  case 'gh-pages':
    BASE_URL = '/welance-bs/';
    API_URL = 'https://welance.github.io/welance-bs/'
    break;
  default:
    //nothing here;
    break;
}

module.exports = {
  entry: {
    app: './src/main.js'
  },
  plugins: [
    new webpack.DefinePlugin({
      "BASE_URL": JSON.stringify(BASE_URL),
      "API_URL": JSON.stringify(API_URL)
    }),
    new CleanWebpackPlugin(['../dist']),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true,
      title: 'Welance Bootstrap',
      baseUrl: BASE_URL,
      APIUrl: API_URL
    }),
    // Simply copy assets to dist folder
    new CopyWebpackPlugin([
      { from: './src/assets/images/', to: 'assets/images/' },
      { from: './src/assets/data/', to: 'assets/data/', debug: 'debug' }
    ])
  ],
  output: {
    filename: 'assets/scripts/[name].bundle.js',
    path: path.resolve(__dirname, '../dist')
  },
  resolve: {
		alias: {
      styles:  path.resolve(__dirname, '../src/sass'), // relative to the location of the webpack config file!
			// node_modules: path.resolve(__dirname, 'node_modules'),
      // components: path.resolve(__dirname, 'src/components')
		}
	},
	module: {
		rules: [
			//allows vue compoents in "<template><html><script><style>" syntax
			{
				test: /\.vue$/,
				loader: 'vue-loader',
				options: {
					loaders: {
							//This is to be able to write SASS in Vue Components
							// Since sass-loader (weirdly) has SCSS as its default parse mode, we map
							// the "scss" and "sass" values for the lang attribute to the right configs here.
							// other preprocessors should work out of the box, no loader config like this necessary.
							/*'scss': 'vue-style-loader!css-loader!sass-loader',
							'sass': 'vue-style-loader!css-loader!sass-loader?indentedSyntax',*/
							'scss': ExtractTextPlugin.extract({
								fallback: "vue-style-loader",
								use: ["css-loader", "sass-loader"],
								//publicPath: "/dist"
							})
					},
					// other vue-loader options go here
				}
			},
			//ES2015 to ES5 compilation
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: "babel-loader"
			},
			//SASS compilation
			{
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
					fallback: "vue-style-loader",
					use: ["css-loader", "sass-loader", "postcss-loader"]
					// publicPath: "/dist"
				})
			}
		]
  }
};
