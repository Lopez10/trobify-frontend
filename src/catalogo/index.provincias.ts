import axios from 'axios';

export class Provincia {
	constructor() {}
	async getProvincia(prov?: number) {
		const myRequest = 'http://localhost:3000/catalogo/Provincias';
		let provincia: Promise<any> = await axios
			.get(myRequest, {
				params: {
					prov: prov,
				},
			})
			.then((result) => {
				return result.data;
			});
		return provincia;
	}

	getProvLatitud(provincia: Promise<any>): number {
		let numero: number = 0;
		provincia.then((result) => {
			numero = result.latitud;
			console.log(numero);
			console.log(result.latitud);
		});

		return numero;
	}

	getProvLongitud(provincia: Promise<any>): number {
		let numero: number = 0;
		provincia.then((result) => {
			result.forEach((item: any) => {
				numero = result.longitud;
			});
		});

		return numero;
	}
}
