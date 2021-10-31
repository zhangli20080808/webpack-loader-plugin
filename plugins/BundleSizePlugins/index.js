/**
提示最终生成的文件大小是否符合我们的要求？
 */
const fs = require('fs');
const { resolve } = require('path');
class BundleSizeWebpackPlugin {
  constructor(options) {
    this.options = options;
  }
  // 通过apply获取 编译器实例 compiler，通过 compiler不同阶段的钩子函数hooks，tap进去可以获取不同的参数，再将
  // 自定义的逻辑植入，可以劫持和修改整个编译的默认过程
  apply(compiler) {
    const { sizeLimit } = this.options;
    console.log('webpack BundleSizeWebpackPlugin');
    // compiler.hooks.compile.tap('BundleSizePlugin', (complicationParams) => {
    //   console.log('compiler');
    // });
    compiler.hooks.done.tap('BundleSizePlugin', (stats) => {
      // console.log('done', stats.compilation.outputOptions);
      const { path, filename } = stats.compilation.outputOptions;
      const bundlePath = resolve(path, filename);
      const { size } = fs.statSync(bundlePath);
      const bundleSize = size / 1024;
      if (bundleSize < sizeLimit) {
        console.log(
          'Safe:Bundle-Size',
          bundleSize,
          '\n SIZE LIMIT:',
          sizeLimit
        );
      } else {
        console.log(
          'UnSafe:Bundle-Size',
          bundleSize,
          '\n SIZE LIMIT:',
          sizeLimit
        );
      }
    });
  }
}
module.exports = BundleSizeWebpackPlugin;
