import axios from 'axios';
import { catalogDom } from './catalogDom';

export class Catalogo {
	constructor() {}
	async getCatalogo(params: string) {
		const myRequest = 'http://localhost:3000/catalogo/';
		console.log(params);
		let inmuebles: Promise<any> = await axios.get(myRequest + params).then((result) => {
			return result.data;
		});
		return inmuebles;
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
