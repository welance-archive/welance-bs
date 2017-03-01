let webpack = require("webpack");
let HtmlWebpackPlugin = require('html-webpack-plugin');
let ExtractTextPlugin = require('extract-text-webpack-plugin');
let path = require('path');
let CopyWebpackPlugin = require('copy-webpack-plugin');
let ImageminWebpackPlugin = require('imagemin-webpack-plugin').default;
let FaviconsWebpackPlugin = require('favicons-webpack-plugin')

//process.env.NODE_ENV): prod | dev

module.exports = {
	entry: "./src/main.js",
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "assets/bundle.js"
	},
	module: {
		rules: [
			//allows vue compoents in "<template><html><script><style>" syntax
			{
				test: /\.vue$/,
				loader: 'vue-loader',
				options: {
				loaders: {
						//This is to be able to write SASS in Vue Components (not used for now)
						/*{{#sass}}
						// Since sass-loader (weirdly) has SCSS as its default parse mode, we map
						// the "scss" and "sass" values for the lang attribute to the right configs here.
						// other preprocessors should work out of the box, no loader config like this necessary.
						'scss': 'vue-style-loader!css-loader!sass-loader',
						'sass': 'vue-style-loader!css-loader!sass-loader?indentedSyntax'
						{{/sass}}*/
				}
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
					fallback: "style-loader",
					use: ["css-loader", "sass-loader"],
					publicPath: "/dist"
				})
			}
		]
	},
	plugins: [
		//about HTML compression and CSS/JS scripts injection
		new HtmlWebpackPlugin({
			filename: "index.html",
			template: "./index.html",
			hash: true,
			minify:{
				collapseWhitespace: process.env.NODE_ENV == 'prod'
			}
		}),
		//about SASS compilation
		new ExtractTextPlugin({
			filename: "assets/bundle.css"
		}),
		//Giving ES6 libraries what they need
		new webpack.ProvidePlugin({
			axios: "axios"
		}),
		// Copy the images folder and optimize all the images
		new CopyWebpackPlugin([{
			from: 'src/assets/images/',
			to: 'assets/images/'
		}]),
		new ImageminWebpackPlugin({
			test: /\.(jpe?g|png|gif|svg)$/i,
			disable: process.env.NODE_ENV !== 'prod',
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
		new FaviconsWebpackPlugin({
			// Your source logo
			logo: './src/assets/images/favicon.png',
			// The prefix for all image files (might be a folder or a name)
			prefix: './assets/images/icons-[hash]/',
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
			title: 'Welance Website',

			// which icons should be generated (see https://github.com/haydenbleasel/favicons#usage)
			icons: {
				android: true,
				appleIcon: true,
				appleStartup: true,
				coast: false,
				favicons: true,
				firefox: true,
				opengraph: false,
				twitter: false,
				yandex: false,
				windows: false
			}
		})
	]
};