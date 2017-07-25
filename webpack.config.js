const Path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const Webpack = require('webpack');

module.exports = {
    entry: {
        app: './src/index.jsx'
    },
    devtool: 'inline-source-map',
    output: {
        filename: '[name].bundle.js',
        path: Path.resolve(__dirname, 'dist'),
        publicPath: '/'
    },
    devServer: {
        hot: true,                  // Tell the dev-server we're using HMR
        contentBase: './dist',
        publicPath: '/',
        historyApiFallback: true    // react-router config
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new Webpack.HotModuleReplacementPlugin(), // Enable HMR
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: '!!pug-loader!src/templates/index.pug'
        })
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    }
};
