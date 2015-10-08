var webpack = require('webpack');

var webpackConfigs = {
    cache: true,
    entry: __dirname + '/bottles.ts',
    devtool: 'source-map',
    output: {
        path: __dirname,
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            { test: /\.ts?$/, loader: 'ts-loader', exclude: /node_modules/ }
        ]
    },
    resolve: {
        extensions: ['', '.webpack.js', '.web.js', '.ts', '.js', 'html'],
        modulesDirectories: ['node_modules']
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
};

module.exports = webpackConfigs;
