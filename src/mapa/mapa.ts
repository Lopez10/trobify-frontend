import { obtenerProvincias } from '../../data/provincias';
import { Provincia } from '../interface/provincia.inteface';

export class Mapa {
	inmuebles: any;
	constructor(inmuebles: any) {
		this.inmuebles = inmuebles;
	}
	mostrarMapa(mapa: any, provincia: Array<Provincia>) {
		mapa.mostrarMapa(
			this.inmuebles.getCatalogo(),
			provincia[0].latitud,
			provincia[0].longitud,
			provincia[0].zoom
		);
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
