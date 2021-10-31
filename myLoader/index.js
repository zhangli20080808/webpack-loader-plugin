/**
 * 1. loader是处理模块的
   2. 多个loader是有顺序的，上一个loader处理好的内容会交给下一个loader
   3. 每个loader都有返回值
 * @param {*} source 源代码,字符串或者buffer
 * @param {*} map source-map
 * @param {*} ast 模块的ast，如果上一个转过来没有带，那都是undefined
 */
module.exports = function (source, map, ast) {
  console.log(this.query.name);
  //   console.log(result);
  // const callback = this.async();
  // setTimeout(() => {
  //   const result = source.replace("hello", this.query.name);
  //   // return result;
  //   callback(null, result);
  // }, 3000);

  //   return result;
  //this.callback(),返回多个信息
  //this.callback(null, result);
  return source.replace('kkb', this.query.name);
};
