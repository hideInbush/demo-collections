/* eslint-disable */
const path = require('path');
const merge = require('webpack-merge');
const common = require('../webpack.base.conf');
const NamedModulesPlugin = require('webpack/lib/NamedModulesPlugin');

module.exports = merge(common, {
  devtool: 'inline-source-map',
  devServer: {
    contentBase: __dirname,
    host: 'localhost',
    inline: true,
    port: 9999,
    open: false,
    historyApiFallback: true,
    proxy: {
    },
  },
  plugins: [
    // 显示出被替换模块的名称
    new NamedModulesPlugin(),
  ],
});
