const path = require('path');
const fs = require('fs')
const webpack = require('webpack')
// const VueLoaderPlugin = require('vue-loader/lib/plugin');

var viola = fs.readFileSync(path.resolve(__dirname, 'viola/web-Viola.js'), 'UTF-8')

module.exports = {
  entry: path.resolve(__dirname, 'src/index.js'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devtool: 'source-map',
  mode: 'none',
  // mode: 'production',
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        // options: {
        //   shadowMode: true
        // }
        // loader: 'weex-vue-loader'
      },
      // {
      //   test: /\.css$/,
      //   use: [
      //     'vue-style-loader',
      //     'css-loader'
      //   ]
      // }
    ]
  },
  resolve: {
    alias: {
      'viola-vue': path.resolve(__dirname, 'viola-vue/index.js')
    }
  },
  plugins: [
    new webpack.BannerPlugin({
      banner: viola,
      raw: true,
      entryOnly: true
    })
    // 请确保引入这个插件！
    // new VueLoaderPlugin()
  ]
};