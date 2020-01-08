const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin')
const webpack = require('webpack');

module.exports = {
    entry: {
        home: path.resolve(__dirname,'src/js/index.js'),
     },
    mode: 'production',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].js',
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
                    {loader: MiniCSSExtractPlugin.loader},
                    'css-loader', 
                    'sass-loader'
                ]
            },
            {
                test: /\.less$/,
                use: [
                    {loader: MiniCSSExtractPlugin.loader},
                    'css-loader', 
                    'less-loader'
                ]
            },
            {
                test: /\.css$/,
                use: [
                    {loader: MiniCSSExtractPlugin.loader},
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
        new MiniCSSExtractPlugin({
            filename: 'css/[name].css',
            chunkFilename: 'css/[id].css'
        }),
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            title: 'webpack-dev-server',
            template: path.resolve(__dirname,'index.html')
        }),
        new webpack.DllReferencePlugin({
            manifest: require('./modules-manifest.json')
        })
    ],
}