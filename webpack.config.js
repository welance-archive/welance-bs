var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');

//process.env.NODE_ENV): prod | dev

module.exports = {
    entry: "./main.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: "babel-loader"
            },
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
                new HtmlWebpackPlugin({
                        title: "Welance",
                        filename: "index.html",
                        template: "./index.html",
                        minify:{
                            collapseWhitespace: true
                        }
                    }),
                new ExtractTextPlugin({
                        filename: "bundle.css"
                    })
            ]
};