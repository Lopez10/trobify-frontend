import axios from 'axios';
import { catalogDom } from './catalogDom';
export class Catalogo {
	constructor() {
		this.getCatalogo();
	}
	async getCatalogo() {
		const myRequest = 'http://localhost:3000/catalogo';
		let inmuebles = await axios.get(myRequest).then((result) => {
			return result.data;
		});
		return inmuebles;
	}

	listadoInmuebles() {
		let inmuebles = new Catalogo();
		let listadoInmuebles = inmuebles.getCatalogo();
		return listadoInmuebles;
	}

	mostrarInmuebles(catalogo: Promise<any>) {
		const div = document.getElementById('catalogo');
		catalogo.then((result) => {
			result.forEach((item: any) => {
				catalogDom(div, item);
			});
		});
	}
}
