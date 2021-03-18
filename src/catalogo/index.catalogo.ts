import axios from 'axios';
import { catalogDom } from './catalogDom';
export class Catalogo {
	constructor() {}
	async getCatalogo(
		opt: number,
		ord: number,
		preMin: number,
		preMax: number,
		mrgn: number,
		supMin: number,
		supMax: number,
		prov: number,
		nHab: number,
		clfEn: number
	) {
		const myRequest = 'http://localhost:3000/catalogo';
		let inmuebles: Promise<any> = await axios
			.get(myRequest, {
				params: {
					opt: opt,
					ord: ord,
					preMin: preMin,
					preMax: preMax,
					mrgn: mrgn,
					supMin: supMin,
					supMax: supMax,
					prov: prov,
					nHab: nHab,
					clfEn: clfEn,
				},
			})
			.then((result) => {
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
