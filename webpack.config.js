var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');

module.exports = {
    entry: "./main.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },
    module: {
        rules: [
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
                    }}),
                new ExtractTextPlugin({
                        filename: "bundle.css"
                    })
            ]
};