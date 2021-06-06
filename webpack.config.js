const path = require('path');

module.exports = {
	entry: {
		index: './src/components/index.ts',
		busqueda: './src/components/busqueda/Busqueda.ts',
		hipoteca: './src/components/inmueble/hipoteca/Hipoteca.ts',
		login: './src/components/usuarios/login.ts',
		registro: './src/components/usuarios/registro.ts',
		//inmueble: './src/components/inmueble/Inmueble.ts',
		visualizar: './src/components/inmueble/acciones/visualizar.inmueble.ts',
		inmuebles: './src/components/inmuebles/Inmuebles.ts',
		acciones: './src/components/inmueble/Acciones.ts',
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
