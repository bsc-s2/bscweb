const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const GenerateAssetPlugin = require('generate-asset-webpack-plugin');
const UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
const yaml = require('js-yaml');

module.exports = {
  //文件入口
  entry: {
    'main': './public/app.js'
  },
  output: {
    path: __dirname + '/dist/',
    publicPath: 'http://localhost:4000/dist/',
    filename: 'js/[hash:8].[name].bundle.js'
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
    new GenerateAssetPlugin({
      filename: '../_data/hash-name.yml',
      fn: (compilation, cb) => {
          cb(null, createHashData(compilation));
      },
      extraFiles: []
    }),
    new ExtractTextPlugin('css/[hash:8].[name].bundle.css'),
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
function createHashData(compilation) {
    var chunk = compilation.chunks[0];
    var jsHash = chunk.files[0];
    var cssHash = chunk.files[1];
    console.log(jsHash,cssHash);
    return yaml.dump({
        jsHash: jsHash,
        cssHash: cssHash
      })
}