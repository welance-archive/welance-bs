var webpack = require("webpack");
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');

//process.env.NODE_ENV): prod | dev

module.exports = {
    entry: "./src/main.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
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
                        minify:{
                            collapseWhitespace: true
                        }
                    }),
                //about SASS compilation
                new ExtractTextPlugin({
                        filename: "bundle.css"
                    }),
                //Giving ES6 libraries what they need
                new webpack.ProvidePlugin({
                    axios: "axios"
                })
            ]
};