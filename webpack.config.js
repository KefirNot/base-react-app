const HtmlWebpackPlugin = require('html-webpack-plugin');
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
				test: /\.scss$/,
				use: [
					{ loader: 'style-loader' },
					{ loader: 'css-loader' },
					{ loader: 'sass-loader' }
				]
			}
		],
	},
	resolve: {
		extensions: ['.js', '.jsx'],
	},
	plugins: [
		new HtmlWebpackPlugin({ template: './src/index.html', filename: 'index.html', inject: 'body' }),
	],
};