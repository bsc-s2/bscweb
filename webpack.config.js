const path = require('path');
const webpack = require('webpack');
// const htmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
var UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;

module.exports = {
  //文件入口
  entry: {
    'main': './public/app.js'
  },
  output: {
    path: __dirname + '/dist/',
    publicPath: 'http://localhost:4000/dist/',
    filename: 'js/[name].bundle.js'
  },
  resolve: {
    modules: [
      path.resolve(__dirname, "public"), "node_modules"
    ]
  },
  module: {
    rules: [{
        test: /\.js$/,
        use: {
          loader: 'eslint-loader',
          options: {
            formatter: require('eslint-friendly-formatter')
          }
        },
        enforce: 'pre', // 编译前检查
        exclude: /node_modules/,
        include: [__dirname + '/public/js/'],
      },
      {
        test: /\.js$/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/,
        exclude: path.resolve(__dirname, "./node_modules"),
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [{
            loader: 'css-loader',
            options: {
              minimize: true //注意loader版本问题
            }
          }]
        })
      },
      {
        test: /\.less$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [{
            loader: "css-loader",
            options: {
              minimize: true
            }
          }, {
            loader: "less-loader"
          }]
        }),
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader?limit=8192&name=image/[hash:8].[name].[ext]'
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader?name=fonts/[hash:8].[name].[ext]'
        ],
      },
      {
        test: /\.(csv|tsv)$/,
        use: [
          'csv-loader?name=image/[hash:8].[name].[ext]'
        ],
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('css/[name].bundle.css'),
    new webpack.ProvidePlugin({
      jQuery: "jquery",
      $: "jquery"
    }),
    new UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ]
};