import { obtenerProvincias } from '../../../data/provincias';
import { Provincia } from '../../interface/provincia.inteface';
//const mapa = require('../../../public/js/mapa.js');

export class Mapa {
	constructor() {}
	mostrarMapa(inmuebles: any, provincias: Array<Provincia>, prov: number) {
		//mapa.mostrarMapa(inmuebles, provincias[0].latitud, provincias[0].longitud, provincias[0].zoom);
	}

	mostrarProvincia() {
		let provincia: Array<Provincia> = obtenerProvincias();
		this.crearProvincias();
		return provincia;
	}

	crearProvincias() {
		let div = document.getElementById('provincias');
		obtenerProvincias().forEach((result) => {
			if (result.codigoPostal != 0) {
				let option = document.createElement('option');
				option.setAttribute('value', result.codigoPostal.toString());
				if (result.codigoPostal == 46) option.setAttribute('selected', 'selected');
				let textoProvincia = document.createTextNode(result.provincia.toString());
				option.appendChild(textoProvincia);
				if (div != null) div.appendChild(option);
			}
		});
	}
}
