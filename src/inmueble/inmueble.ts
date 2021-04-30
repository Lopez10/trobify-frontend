import axios from 'axios';

export class Inmueble {
	constructor() {}
	async getInmueble() {
		let params = this.obtenerParametros();
		const myRequest = 'http://localhost:3000/inmueble/' + params.catastroId + '/' + params.modo;

		let inmueble = await axios.get(myRequest).then((result) => {
			return result.data;
		});
		return await inmueble;
	}

	private obtenerParametros(): any {
		let queryString = window.location.search;
		let urlParams = new URLSearchParams(queryString);
		let catastroId = urlParams.get('catastro');
		let modo = urlParams.get('modo');
		return { catastroId, modo };
	}
}
