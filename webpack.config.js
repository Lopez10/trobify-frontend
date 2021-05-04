const path = require('path');

module.exports = {
	entry: {
		index: './src/components/index.ts',
		busqueda: './src/components/busqueda/index.busqueda.ts',
		hipoteca: './src/components/inmueble/hipoteca/index.hipoteca.ts',
		login: './src/components/login/index.login.ts',
		editarInmueble: './src/components/inmueble/acciones/editar.inmueble.ts',
		registroInmueble: './src/components/inmueble/acciones/registro.inmueble.ts',
		verInmueble: './src/components/inmueble/acciones/ver.inmueble.ts',
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
