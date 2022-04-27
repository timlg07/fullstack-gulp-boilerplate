const webpack = require('webpack');
const TerserPlugin = require("terser-webpack-plugin");

const ENV = process.env.NODE_ENV || 'development';
const isProduction = ENV.toLowerCase() === 'production';

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
    ]),

    optimization: {
        minimize: isProduction,
        minimizer: [
            new TerserPlugin({
                terserOptions: {
                    compress: true,
                    format: {
                        ascii_only: true
                    }
                },
                extractComments: true,
                parallel: true,
            })
        ],
    },

    stats: { colors: true },

    devtool: 'source-map'
};
