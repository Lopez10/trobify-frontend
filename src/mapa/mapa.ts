import { obtenerProvincias } from '../../data/provincias';
import { Provincia } from '../interface/provincia.inteface';
import { Catalogo } from '../catalogo/catalogo';

export class Mapa {
	constructor() {}

	mostrarProvincia(mapa: any) {
		let provincia: Array<Provincia> = obtenerProvincias();
		this.crearProvincias();
		mapa.mostrarMapa(
			catalogo.getCatalogo(),
			provincia[0].latitud,
			provincia[0].longitud,
			provincia[0].zoom
		);
		return provincia;
	}

	crearProvincias() {
		let div = document.getElementById('provincias');
		obtenerProvincias().forEach((result) => {
			// Este if es para que no salga la primera posición del Array (Corresponede a las coordenadas de España) en el cuadro desplegable
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
