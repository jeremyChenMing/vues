
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
    hot: true,
    historyApiFallback: true,
    compress: true,
    // publicPath: "/dist/",
    stats: {
        colors: true,
        chunks: false
    },
    open: true,
    // clientLogLevel: "error",
    noInfo: false
});

server.listen(8080, 'localhost', function () {
    console.log('Starting server on http://localhost:8080');
    open('http://localhost:8080');
});