import axios from 'axios';
import { catalogDom } from './catalogDom';
export class Catalogo {
	constructor() {
		this.getCatalogo();
	}
	async getCatalogo() {
		const myRequest = 'http://localhost:3000/catalogo';
		let inmuebles: Promise<any> = await axios
			.get(myRequest, {
				params: {
					opt: 1,
					ord: 1,
					preMin: 1,
					preMax: 1,
					mrgn: 10,
					supMin: 10,
					supMax: 100,
					prov: 1,
					nHab: 1,
					clfEn: 1,
					//stdo: 1,
					//tpoViv: 1,
					//carac: 1,
				},
			})
			.then((result) => {
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
