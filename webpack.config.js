const path = require('path');

module.exports = {
	entry: {
		index: './src/components/index.ts',
		busqueda: './src/components/busqueda/busqueda.ts',
		hipoteca: './src/components/inmueble/hipoteca/hipoteca.ts',
		login: './src/components/usuarios/login.ts',
		inmueble: './src/components/inmueble/inmueble.ts',
		editarInmueble: './src/components/inmueble/acciones/editar.inmueble.ts',
		registroInmueble: './src/components/inmueble/acciones/registro.inmueble.ts',
		inmuebles: './src/components/inmuebles/Inmuebles.ts',
		registro: './src/components/usuarios/registro',
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
		filename: './bundle/[name].bundle.js', // [name].js
		path: path.resolve(__dirname, 'public'),
	},
};
