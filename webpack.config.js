const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');

module.exports = {
    //mode: 'production', 
    mode: 'development',
    optimization: {
        minimize: false,
    },
    entry: '/src/js/index.js',
    //想要多個js files
    // entry: {a:'a.js',b:'b.js'},
    //載入也可以使用function自定義去選取想要載入的js files
    // entry: addFunction(),
    output: {
        path: path.resolve(__dirname, 'www/dist'),
        filename: 'main.[hash].bundle.js',
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
        ],
    },
    // devtool: 'source-map',
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
        }),
        new MiniCssExtractPlugin({
            filename: 'main.[hash].css'
        }),
    ],

};