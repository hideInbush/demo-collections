/* eslint-disable */
class LocalWebpackPlugin {
  constructor(options) {
    // 存下在构造函数中传入的回调函数
    this.paths = options.paths;

    this.apply = this.apply.bind(this);
  }

  apply(compiler) {
    const paths = this.paths;
    compiler.plugin('compilation', (compilation, options) => {
      compilation.plugin('html-webpack-plugin-before-html-processing', (htmlPluginData, callback) => {
        for (var i = paths.length - 1; i >= 0; i--) {
          htmlPluginData.assets.js.unshift(paths[i]);
        }
        callback(null, htmlPluginData);
      });
    });
  }
}
// 导出插件 
module.exports = LocalWebpackPlugin;