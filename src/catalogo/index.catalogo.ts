import axios from 'axios';

export class catalogo {
	constructor() {
		this.getCatalogo();
	}
	async getCatalogo() {
		const myRequest = 'http://localhost:3000/catalogo';
		let inmuebles = await axios.get(myRequest);
		//let datosInmuebles = inmuebles.data;
		return inmuebles.data;
	}
}
