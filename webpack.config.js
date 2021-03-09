const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './src/index.ts',
	plugins: [new HtmlWebpackPlugin({ title: 'Development' })],
	mode: 'development',
	module: {
		rules: [
			{
				test: /\.ts$/,
				use: 'ts-loader',
				include: [path.resolve(__dirname, 'src')],
				exclude: '/node_modules/',
			},
		],
	},
	resolve: {
		extensions: ['.ts', '.js'],
	},
	output: {
		publicPath: 'public',
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'public'),
	},
};
