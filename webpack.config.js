/* webpack.config.js */
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');
var ROOT_PATH = path.resolve(__dirname);
var BUILD_PATH = path.resolve(ROOT_PATH, 'build');
var SRC_PATH = path.resolve(ROOT_PATH, 'src');
var JS_PATH = path.resolve(SRC_PATH, 'js');
var JSX_PATH = path.resolve(SRC_PATH, 'jsx');
var VIEW_PATH = path.resolve(SRC_PATH, 'views');
var TEMPLATE_PATH = path.resolve(SRC_PATH, 'template');

module.exports = {
    entry: {
        index: path.resolve(VIEW_PATH, 'index.js'),
    },
    output: {
        path: BUILD_PATH,
        filename: '[name].js'
    },
    watch: true,
    watchOptions: {
        ignored: /node_modules/
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx?)$/, 
                exclude: /node_modules/, 
                loader: 'babel-loader'
            },
            {//抽取css
                test: /\.css$/,
                loader: ExtractTextPlugin.extract({ fallback: "style-loader", use: "css-loader" })
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    plugins: [
        new ExtractTextPlugin('index.css'),
        new HtmlWebpackPlugin({
            title: 'demo-collections',
            filename: 'index.html',
            template: path.resolve(TEMPLATE_PATH, 'index.html'),
        }),
    ]
}