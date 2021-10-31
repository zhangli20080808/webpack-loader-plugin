const path = require('path');

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].js',
  },
  // resolveLoader: {
  //   modules: ["node_modules", "./myLoaders"],
  // },

  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          // "kkbloader",
          {
            // loader: "kkbloaderAsync",
            loader: path.resolve(__dirname, './myLoader/index.js'),
            options: {
              name: '开课吧zzzz',
            },
          },
        ],
        // use: path.resolve(__dirname, './myLoader/index.js'),
      },
      // {
      //   test: /\.less$/,
      //   use: ["style-loader", "lessLoader"],
      // },
      {
        test: /\.md$/,
        use: [
          {
            loader: './markdownHtml',
            options:{
              headingStyle: 'atx'
            }
          },
          {
            loader: './markLoader',
            options:{
              headerIds: false
            }
          },
        ],
      },
    ],
  },
};
