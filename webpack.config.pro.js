/*import webpack from 'webpack';
import path from 'path';

export default {
    debug: true,
    noInfo: false,
    entry: [
        './src/index.js'
    ],
    target: 'web',
    output: {
        path: __dirname + '/public/js', // Note: Physical files are only output by the production build task `npm run build`.
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {test: /\.js$/, include: path.join(__dirname, 'src'), loader: 'babel-loader', query: { presets: ['es2015-ie', 'react'] }},
            {test: /(\.css)$/, loaders: ['style', 'css']}
        ]
    },
    stats: {
        colors: true
    },
    devtool: 'source-map'
};
*/

var path = require('path');
var webpack = require('webpack');
var WebpackShellPlugin = require('webpack-shell-plugin');
var plugins = [];

plugins.push(new WebpackShellPlugin({
    onBuildStart: ['echo "Starting"'],
    onBuildExit: ['node ./src/tools/fixBundle.js pro']
}));

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'public', 'js'),
        filename: 'bundle.js'
    },
    plugins: plugins,
    module: {
        loaders: [
            { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/, query: { presets: ['es2015', 'react']}},
            { test: /(\.css)$/, loaders: ['style', 'css'] }
        ]
    },
    stats: {
        colors: true
    },
    devtool: 'source-map'
};
