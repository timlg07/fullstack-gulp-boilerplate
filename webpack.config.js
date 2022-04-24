var webpack = require('webpack');
var path    = require('path');
var babel   = require('babel-loader');

var ENV = process.env.NODE_ENV || 'development';

module.exports = {

    mode: ENV,

    output: {
        filename: '[name].js',
        sourceMapFilename: "[name].js.map"
    },

    resolve: {
        extensions: ['', '.jsx', '.js', '.json', '.less'],
    },

    resolveLoader: {
        modules: [__dirname, 'node_modules']
    },

    module: {
        rules: [
            {
                enforce: 'pre',
                test: /\.jsx?$/,
                exclude: /source\//,
                use: 'source-map-loader'
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            }
        ]
    },

    plugins: ([
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(ENV),
            'NODE_ENV': JSON.stringify(ENV)
        })
    ]).concat(ENV === 'production' ? [
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            compress: { warnings: false },
            minimize: true,
            sourceMap: true,
            comments: false
        })
    ] : []),

    stats: { colors: true },

    devtool: 'source-map',

    externals: {
        "jquery": "jQuery"
    }
};
