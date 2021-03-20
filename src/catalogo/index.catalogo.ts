import axios from 'axios';
import { catalogDom } from './catalogDom';

export class Catalogo {
	constructor() {}
	async getCatalogo(
		opt: number,
		ord: number
		/*preMin: number,
		preMax: number,
		mrgn: number,
		aMrgn: number,
		supMin: number,
		supMax: number,
		prov: number,
		nHab: number,
		clfEn: number*/
	) {
		const myRequest = 'http://localhost:3000/catalogo';
		let inmuebles: Promise<any> = await axios
			.get(myRequest, {
				params: {
					opt: opt,
					ord: ord,
					/*preMin: preMin,
					preMax: preMax,
					aMrgn: aMrgn,
					mrgn: mrgn,
					supMin: supMin,
					supMax: supMax,
					prov: prov,
					nHab: nHab,
					clfEn: clfEn,*/
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

	//Aún en pruebas.
	async getFiltros(id_cliente: number,
		opt: number,
		vis: number,
		prov: number,
		ord: number,
		preMin: number,
		preMax: number,
		aMrgn: number,
		mrgn: number,
		supMin: number,
		supMax: number,	
		nHab: number,
		nBan: number,
		clfEn: number,
		stdo: string,
		tipoViv: string,
		caract: string){
			const myRequest = 'http://localhost:3000/catalogo/:id_cliente';			
			let filtros: Promise<any> = await axios
			.get(myRequest, {
				params: {
					id_cliente: id_cliente,
					opt: opt,
					vis: vis,
					prov: prov,
					ord: ord,
					preMin: preMin,
					preMax: preMax,
					aMrgn: aMrgn,
					mrgn: mrgn,
					supMin: supMin,
					supMax: supMax,	
					nHab: nHab,
					nBan: nBan,
					clfEn: clfEn,
					stdo: stdo,
					tipoViv: tipoViv,
					caract: caract
				},
			}).then((result) => {
				return result.data;
			});
		return filtros;		
		}
}
