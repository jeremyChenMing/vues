var path = require('path');
var webpack = require('webpack');


var HtmlWebpackPlugin = require('html-webpack-plugin')
var htmlPlugin =  new HtmlWebpackPlugin({
                    filename: 'index.html',
                    template: './index.html',
                    inject: true
                  })

var plugins = [htmlPlugin];


var IS_DEV = process.env.NODE_ENV !== 'production';

console.log('什么环境',IS_DEV ? '开发环境' : '生产环境')

var  webConfig = {
  entry : {
    'app' : ['./app.js']
  },
  output : {
    path: path.join(__dirname, 'dist'),
    filename: '[name].web.js',
    publicPath:'/'
  },
  resolve: {
      // alias: {
      //     vue$: 'vue/dist/vue.esm.js'
      // }
      alias: {  
        vue: 'vue/dist/vue.js',  //更改路径名称
        // extensions: [".js", ".json"] //自动介休文件名称   这个是默认值
      }
  },
  performance: {
    hints: false
    // hints: "error"  //生产环境建议配置这个，用来展示一条错误，通知你这个体积较大的资源，这个有助于防止把体积过大的bundle部署到生产环境
  },
  module: {
    // webpack 2.0 
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [{
            loader: 'babel-loader',
            // query : {
            //   presets : ['es2015']
            // }
        }]
      },
      {
        test: /\.vue(\?[^?]+)?$/,
        use: [{
          loader: 'vue-loader'
        }]
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?\S*)?$/,
        loader: 'file-loader',
        options: {
          // name: '[name].[ext]?[hash]'
          name: 'file/[name].[ext]?[hash]'
        }
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
        loader: 'file-loader',
        options: {
          // name: '[name].[ext]?[hash]'
          name: 'file/[name].[ext]?[hash]'
        }
      },
    ]
  },
  plugins: plugins
  
}
if (IS_DEV) {
  // webConfig.devtool = '#source-map'
  webConfig.devtool = '#inline-source-map'
}


if (!IS_DEV) {
  webConfig.devtool = '#source-map';
  webConfig.plugins = (webConfig.plugins || [])
                      .concat([
                          new webpack.DefinePlugin({
                              'process.env': {
                                  NODE_ENV: '"production"'
                              }
                          }),
                          new webpack.optimize.UglifyJsPlugin({
                              // sourceMap: true,
                              compress: {
                                  warnings: false,
                                  drop_console: true,
                                  // minimize:true, //用来压缩loader的
                              }
                          })
                      ]);
}

module.exports = webConfig;


