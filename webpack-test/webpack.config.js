const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src/index.js'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devtool: 'source-map',
  node: false,  // 关闭 webpack 对 node api接口的 polyfill
  mode: 'none',
  // mode: 'development',
  // mode: 'production',
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: '@tencent/viola-vue-loader',
        options: {
          buble: {}
        }
        // options: {
        //   shadowMode: true
        // }
        // loader: 'weex-vue-loader'
      }
    ]
  }
};