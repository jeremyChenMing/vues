
var webpack = require('webpack');
var path = require('path');
var open = require('open');
var HtmlWebpackPlugin = require('html-webpack-plugin')
var WebpackDevServer = require('webpack-dev-server');
var htmlPlugin = [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './index.html',
      inject: true
    }),
]


let config = require('./webpack.config.js');

// Hot Module Replacement
config.entry.app.unshift('webpack-dev-server/client?http://localhost:8080/', 'webpack/hot/dev-server');
config.plugins = (config.plugins || []).concat([
    new webpack.HotModuleReplacementPlugin()
]);

var compiler = webpack(config);
var server = new WebpackDevServer(compiler, {
    hot: true,                                      //启用热替换
    historyApiFallback: true,
    compress: true,                                 //一切服务都启动gzip压缩
    // publicPath: "/dist/",
    stats: {                                //精确控制bundle的信息展示  https://doc.webpack-china.org/configuration/stats/
        colors: true,
        chunks: false
    },
    open: true,
    noInfo: false                    //启动时的一些bundle的信息隐藏掉，错误和警告仍然会展示的
});

server.listen(8080, 'localhost', function () {
    console.log('Starting server on http://localhost:8080');
    open('http://localhost:8080');
});