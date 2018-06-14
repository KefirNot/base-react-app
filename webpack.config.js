const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

module.exports = {
    entry: [
        'babel-polyfill',
        'react-hot-loader/patch',
        './src/index.jsx',
    ],
    output: {
        path: path.resolve('public'),
        filename: 'bundle.js',
    },
    devtool: 'source-map',
    module: {
        loaders: [
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(css|scss)$/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' },
                    { loader: 'sass-loader' }
                ]
            }
        ],
    },
    resolve: {
        alias: {
            helpers: path.resolve('src/helpers'),
            components: path.resolve('src/components'),
            blocks: path.resolve('src/blocks'),
            store: path.resolve('src/store'),
        },
        extensions: ['.js', '.jsx'],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html',
            title: 'React example',
            meta: { viewport: 'width=device-width, initial-scale=1' }
        }),
        new CopyWebpackPlugin([{ from: 'src/images', to: 'images' }]),
    ],
};