import axios from 'axios';

export class catalogo {
	constructor() {
		this.getCatalogo();
	}
	async getCatalogo() {
		const myRequest = 'http://localhost:3000/catalogo';
		let listadoInmuebles = axios.get(myRequest);
		return listadoInmuebles;
	}
}
