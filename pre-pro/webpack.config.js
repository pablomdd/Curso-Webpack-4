const path = require('path');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry: {
        home: path.resolve(__dirname,'src/js/index.js'),
     },
    mode: 'development',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].js',
    },
    devServer:{
        hot: true,
        open: true,
        port: 9000,
    },
    module: {
        rules: [
            {
                test: /\.jpg|png|gif|eot|ttf|svg|mp4|webm$/,
                use: {
                    loader: 'url-loader',
                    options:{
                        limit: 90000,
                    }
                }
                
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader', 
                    'sass-loader'
                ]
            },
            {
                test: /\.less$/,
                use: [
                    'style-loader',
                    'css-loader', 
                    'less-loader'
                ]
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    {
                        loader:'css-loader', 
                        options: {
                            importLoaders: 1
                        }
                    },
                    'postcss-loader'
                ]
            },
        ]
    },
    resolve: {
        extensions: [".js", ".jsx"]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            title: 'webpack-dev-server',
            template: path.resolve(__dirname,'index.html')
        }),
    ],
    //CONGIG FOR Split Chunk aka Vendor Files Capacity
    optimization:{
        splitChunks: {
            chunks: 'all',
            minSize: 0,
            name: 'commons'
        }
    }
}