let webpack = require("webpack");
let path = require('path');
let ExtractTextPlugin = require('extract-text-webpack-plugin');

let config = require('./config/webpack-constants');

module.exports = {
	entry: ["babel-polyfill", "./src/main.js"],	//this is to support ES6 features
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "assets/bundle.js",
    publicPath: config.BASE_URL
	},
	devServer: {
		historyApiFallback: true
	},
	resolve: {
		alias: {
			styles:  path.resolve(__dirname, 'src/sass'), // relative to the location of the webpack config file!
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
					use: ["css-loader", "sass-loader"],
					//publicPath: "/dist"
				})
			},
      {
      // Post-CSS
      test: /\.css/,
      use: [
        {
          loader: 'postcss-loader',
          options: {
            plugins: function () {
              return [
                require('precss'),
                require('autoprefixer')
              ];
            }
          }
        }
        ]
      }
		]
	},
	plugins: config.PLUGINS
};
