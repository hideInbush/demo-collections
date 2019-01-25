/* eslint-disable */
const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const HappyPack = require('happypack');
const happyThreadPool = HappyPack.ThreadPool({ size: 5 });

const ModuleConcatenationPlugin = require('webpack/lib/optimize/ModuleConcatenationPlugin');

const webpack = require('webpack');
const ROOT_PATH = path.resolve(__dirname);
const BUILD_PATH = path.resolve(ROOT_PATH, 'build');
const SRC_PATH = path.resolve(ROOT_PATH, 'src');
const TEMPLATE_PATH = path.resolve(SRC_PATH, 'template');

const isProudction = process.env.NODE_ENV === 'production' ? true : false;
console.log(`env is ${isProudction}`);

const pathsToClean = [
  'build/*.*',
  'build/routers',
  'build/assets',
];
const cleanOptions = {
  root: ROOT_PATH,
  exclude: [],
  verbose: true,
  dry: false,
}

module.exports = {
  entry: {
    index: [path.resolve(SRC_PATH, 'index.jsx')],
  },
  output: {
    path: BUILD_PATH,
    filename: isProudction ? '[name].[chunkhash].js' : '[name].js',
    chunkFilename: isProudction ? 'routers/[name].[chunkhash].js' : 'routers/[name].js',
  },
  watch: true,
  watchOptions: {
    ignored: /node_modules/,
    aggregateTimeout: 500,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: ['happypack/loader?id=babel'],
        exclude: path.resolve(__dirname, 'node_modules'),
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['happypack/loader?id=scss'],
        })
      },
      {
        test: /\.(png|jpg|jpeg|svg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: '1',
              name: '[folder]/[name].[ext]',
              outputPath: './assets/image/',
              publicPath: './assets/image/',
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    // 使用绝对路径指明第三方模块存放的位置，以减少搜索步骤
    // 其中 __dirname 表示当前工作目录，也就是项目根目录
    modules: [path.resolve(__dirname, 'node_modules')],
    // 针对 Npm 中的第三方模块优先采用 jsnext:main 中指向的 ES6 模块化语法的文件
    mainFields: ['jsnext:main', 'browser', 'main']
  },
  plugins: [
    new CleanWebpackPlugin(pathsToClean, cleanOptions),
    new HappyPack({
      id: 'scss',
      loaders: [
        {
          loader: require.resolve('css-loader'),
        },
        {
          loader: 'postcss-loader',
          options: {
            config: {
              path: 'postcss.config.js'
            },
            ident: 'postcss',
          }
        },
        {
          loader: 'sass-loader',
        },
      ],
      threadPool: happyThreadPool,
    }),
    new HappyPack({
      id: 'babel',
      loaders: ['babel-loader?cacheDirectory'],
      threadPool: happyThreadPool,
    }),
    // 开启 Scope Hoisting
    new ModuleConcatenationPlugin(),
    new ExtractTextPlugin({
      filename:  isProudction ? '[name].[contenthash:8].css' : '[name].css',
      allChunks: isProudction,
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(TEMPLATE_PATH, 'index.html'),
      title: 'Landing Page',
      filename: 'index.html',
      minify: false,
    }),
  ],
};