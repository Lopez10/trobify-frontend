import { Provincia } from '../../interface/provincia.interface';
const mapa = require('../../../public/js/mapa.js');

export class Mapa {
	constructor() {}
	mostrarMapa(inmuebles: Promise<any>, provincias: Provincia[], prov: number, unico?: Boolean) {
		mapa.mostrarMapa(
			inmuebles,
			provincias[prov].latitud,
			provincias[prov].longitud,
			provincias[prov].zoom,
			unico || false
		);
	}
}
