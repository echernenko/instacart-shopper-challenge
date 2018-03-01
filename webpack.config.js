const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
const path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'public/js');
var APP_DIR = path.resolve(__dirname, 'src/js');

var config = {
    entry: path.resolve(__dirname, 'server.js'),
    output: {
        path: path.resolve(__dirname, ''),
        filename: 'server-w-react.js',
         publicPath: '/'
    },
    target: 'node',
    externals: nodeExternals(),
    plugins: [
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: `'development'`
        }
      })
    ],
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.js?/,
                use: ['babel-loader']
            }
        ]
    }
};

module.exports = config;
