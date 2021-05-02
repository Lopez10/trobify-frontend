const path = require('path');

module.exports = {
	entry: {
		index: './src/index.ts',
		busqueda: './src/busqueda/index.busqueda.ts',
		hipoteca: './src/inmueble/hipoteca/index.hipoteca.ts',
		login: './src/login/index.login.ts',
		inmueble: './src/inmueble/index.inmueble.ts',
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
