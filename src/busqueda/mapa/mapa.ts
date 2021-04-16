import { obtenerProvincias } from '../../../data/provincias';
import { Provincia } from '../../interface/provincia.inteface';
const mapa = require('../../../public/js/mapa.js');

export class Mapa {
	provincias: Array<Provincia>;
	constructor() {
		this.provincias = obtenerProvincias();
	}
	mostrarMapa(inmuebles: any, prov: number) {
		mapa.mostrarMapa(
			inmuebles,
			this.provincias[prov].latitud,
			this.provincias[prov].longitud,
			this.provincias[prov].zoom
		);
	}
}
