import axios from 'axios';
import { catalogDom } from './catalogDom';
import { obtenerProvincias } from '../data/provincias';

export class Catalogo {
	constructor() {}
	async getCatalogo(params: string) {
		const myRequest = 'http://localhost:3000/catalogo?';
		console.log(params);
		let inmuebles: Promise<any> = await axios.get(myRequest + params).then((result) => {
			console.log(result);
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
	async getFiltros(
		id_cliente: number,
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
		caract: string
	) {
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
					caract: caract,
				},
			})
			.then((result) => {
				return result.data;
			});
		return filtros;
	}

	crearProvincias() {
		obtenerProvincias().forEach((result) => {
			// Este if es para que no salga la primera posición del Array (Corresponede a las coordenadas de España) en el cuadro desplegable
			if (result.codigoPostal != 0) {
				let div = document.getElementById('provincias');
				let option = document.createElement('option');
				option.setAttribute('value', result.codigoPostal.toString());
				let textoProvincia = document.createTextNode(result.provincia.toString());
				option.appendChild(textoProvincia);
				if (div != null) div.appendChild(option);
			}
		});
	}
}
