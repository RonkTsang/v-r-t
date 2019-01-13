const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

module.exports = {
  entry: {
    env: path.resolve(__dirname, 'env/index.js'),
    bundle: path.resolve(__dirname, 'src/index.js'),
    ctx: path.resolve(__dirname, 'env/setCTX.js')
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  node: false,  // 关闭 webpack 对 node api接口的 polyfill
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: '@tencent/Viola-vue-loader',
        options: {
          buble: {}
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(html)$/,
        exclude: [/index\.html/],
        use: {
          loader: 'html-loader'
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html',
      inject: false
    }),
    new webpack.LoaderOptionsPlugin({
      options: {
        htmlLoader: {
          interpolate: true
        }
      }
    })
  ],
  devServer: {
    open: true,
    contentBase: path.join(__dirname, 'dist'),
    port: 9000
  }
};