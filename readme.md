## loader？

Loader 就是⼀个函数，声明式函数，不能⽤箭头函数
拿到源代码，作进⼀步的修饰处理，再返回处理后的源码就可以了

- 最后的 loader 最早调用，将会传入原始资源内容
- 第一个 loader 最后调用，期望值是传出 js 和 source map
- 中间的 loader 执行，会传入前一个 loader 传出的结果

* 官⽅⽂档：https://webpack.js.org/contribute/writing-a-loader/
* 接⼝⽂档：https://webpack.js.org/api/loaders/

## plugin
* 一个js函数或者js类
* 在他的原型上定义apply方法，会在安装插件时被调用，并用webpack compile 调用一次
* 指定一个触及到webpack本身的事件钩子，即hooks，用于特定时期处理额外的逻辑。