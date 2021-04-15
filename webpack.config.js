const path = require('path');

module.exports = {
	entry: {
		index: './src/index.ts',
		catalogo: 'src/catalogo/index.catalogo.ts',
	},
	mode: 'development',
	module: {
		rules: [
			{
				test: /\.ts$/,
				use: 'ts-loader',
				include: [path.resolve(__dirname, 'src'), path.resolve(__dirname, 'data')],
				exclude: '/node_modules/',
			},
		],
	},
	resolve: {
		extensions: ['.ts', '.js'],
	},
	output: {
		publicPath: 'public',
		filename: '[name].bundle.js', // [name].js
		path: path.resolve(__dirname, 'public'),
	},
};
