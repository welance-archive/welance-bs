let webpack = require("webpack");
let HtmlWebpackPlugin = require('html-webpack-plugin');
let ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');
let ExtractTextPlugin = require('extract-text-webpack-plugin');
let path = require('path');
let CopyWebpackPlugin = require('copy-webpack-plugin');
let ImageminWebpackPlugin = require('imagemin-webpack-plugin').default;
let FaviconsWebpackPlugin = require('favicons-webpack-plugin');
let PrerenderSpaPlugin = require('prerender-spa-plugin');

const seo_routes = [ '/', '/styles' ];

const prod_plugins = [
		//about HTML compression and CSS/JS scripts injection

		new HtmlWebpackPlugin({
			filename: "index.html",
			template: "./index.html",
      inject: 'head',                       // ensure scripts to be include in the <head>
                                            // so pre-render-spa-plugin doesn't override it
      chunksSortMode: 'dependency',         // Ensure chunks are evaluated in correct order
      // Optional
      baseUrl: process.env.NODE_ENV === 'gh-pages' ? '/welance-bs/' : 'http://localhost:8000/',     // ensure to have a <base> for HTML5 History API

			hash: true,
			minify:{
				collapseWhitespace: true
			}
		}),
    //adds async tag to script to load JS asynchronously
    /*new ScriptExtHtmlWebpackPlugin({
      defaultAttribute: 'async'
    }),*/
		//about SASS compilation
		new ExtractTextPlugin({
			filename: "assets/bundle.css"
		}),
		//Giving ES6 libraries what they need (should be enough using the babel-polyfill as entry point)
		/*new webpack.ProvidePlugin({
			axios: "axios"
		}),*/
		// Copy the images folder and optimize all the images
		new CopyWebpackPlugin([{
			from: 'src/assets/images/',
			to: 'assets/images/'
		}]),
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
			title: 'Welanstrap',

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
		}),
		new PrerenderSpaPlugin(
			// (REQUIRED) Absolute path to static root
			path.join(__dirname, 'dist'),
			//path.resolve(__dirname, "dist"),
			// (REQUIRED) List of routes to prerender
			seo_routes,
			// (OPTIONAL) Options
			{
				// NOTE: Unless you are relying on asynchronously rendered content,
				// such as after an Ajax request, none of these options should be
				// necessary. All synchronous scripts are already executed before
				// capturing the page content.

				// Wait until a specific event is fired on the document.
				//**** captureAfterDocumentEvent: 'now-its-seo-time',
				// This is how you would trigger this example event:
				// document.dispatchEvent(new Event('now-its-seo-time'))

				// Wait until a specific element is detected with
				// document.querySelector.
				captureAfterElementExists: '#app',

				// Wait until a number of milliseconds has passed after scripts
				// have been executed. It's important to note that this may
				// produce unreliable results when relying on network
				// communication or other operations with highly variable timing.
				captureAfterTime: 1500,

				// NOTE: You can even combine strategies if you like. For example,
				// if you only _sometimes_ want to wait for an event to fire, you
				// can create a timeout by combining captureAfterTime with
				// captureAfterDocumentEvent. When combining strategies, page
				// content will be captured after the first triggered strategy.

				// Instead of loudly failing on JS errors (the default), ignore them.
				//**** ignoreJSErrors: true,

				// Because PhantomJS occasionally runs into an intermittent issue,
				// we will retry a page capture up to 10 times by default. You may
				// raise or lower this limit if you wish.
				maxAttempts: 10,

				// Prevent PhantomJS from navigating away from the URL passed to it
				// and prevent loading embedded iframes (e.g. Disqus and Soundcloud
				// embeds), which are not ideal for SEO and may introduce JS errors.
				navigationLocked: true,

				// The options below expose configuration options for PhantomJS,
				// for the rare case that you need special settings for specific
				// systems or applications.

				// http://phantomjs.org/api/command-line.html#command-line-options
				phantomOptions: '--disk-cache=true',

				// http://phantomjs.org/api/webpage/property/settings.html
				phantomPageSettings: {
					loadImages: true
				},

				// Manually transform the HTML for each page after prerendering,
				// for example to set the page title and metadata in edge cases
				// where you cannot handle this via your routing solution.
				//
				// The function's context argument contains two properties:
				//
				// - html :: the resulting HTML after prerendering)
				// - route :: the route currently being processed
				//            e.g. "/", "/about", or "/contact")
				//
				// Whatever is returned will be printed to the prerendered file.
				/*postProcessHtml: function (context) {
					var titles = {
						'/': 'Welance Home',
						'/hello': 'Hello!'
					}
					return context.html.replace(
						/<title>[^<]*<\/title>/i,
						'<title>' + titles[context.route] + '</title>'
					)
				}*/
			}
		)
	];


const dev_plugins = [
		//about HTML compression and CSS/JS scripts injection
		new HtmlWebpackPlugin({
			filename: "index.html",
			template: "./index.html",
			hash: true,
			minify:{
				collapseWhitespace: false
			}
		}),
		//about SASS compilation
		new ExtractTextPlugin({
			filename: "assets/bundle.css"
		}),
		//Giving ES6 libraries what they need (should be enough using the babel-polyfill as entry point)
		/*new webpack.ProvidePlugin({
			axios: "axios"
		}),*/
		// Copy the images folder and optimize all the images
		new CopyWebpackPlugin([{
			from: 'src/assets/images/',
			to: 'assets/images/'
		}]),
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
			// favicon app title (see https://github.com/haydenbleasel/favicons#usage)
			title: 'Welance Website',

			// which icons should be generated (see https://github.com/haydenbleasel/favicons#usage)
			icons: {
				android: false,
				appleIcon: false,
				appleStartup: false,
				coast: false,
				favicons: true,
				firefox: false,
				opengraph: false,
				twitter: false,
				yandex: false,
				windows: false
			}
		})
	];

const plugins = (process.env.NODE_ENV === 'prod' || process.env.NODE_ENV === 'gh-pages') ? prod_plugins : dev_plugins;



module.exports = {
	entry: ["babel-polyfill", "./src/main.js"],	//this is to support ES6 features
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "assets/bundle.js",
    //publicPath: ''
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
	plugins: plugins
};
