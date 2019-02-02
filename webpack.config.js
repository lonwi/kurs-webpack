const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");

module.exports = {
    entry: "./src/index.js",
    output : {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },
    devServer: {
        contentBase: path.resolve(__dirname, "dist"),
        port: 9158,
        watchContentBase: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        }),
        new CleanWebpackPlugin( path.resolve(__dirname, "dist"), {} ),
        new MiniCssExtractPlugin( { filename: "[name].[hash].css"} ),
        new OptimizeCssAssetsPlugin( {assetNameRegExp: /\.css$/})
    ],
    module: {
        rules: [
            // {
            //     test: /\.css$/, //what loaders should be applied
            //     // use: ["style-loader", "css-loader"] // what loaders we want
            //     // use: ["style-loader/url", "file-loader"]
            //     use: [
            //         {loader: "style-loader/url"}, 
            //         {loader: "file-loader", options: {name: "[name].[ext]"}}
            //     ]
            // },
            {
                test: /\.scss$/,
                use: [ 
                    // "style-loader", 
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader"
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env']
                        
                    }
                }
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [{loader: "file-loader", options: {name: "[name].[ext]"}}]
            },
            {
                test: /\.html$/,
                use: [{loader: "html-loader"}]
            }
        ]
    }
}