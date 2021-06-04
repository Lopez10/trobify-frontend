import { API } from '../API';
import { obtenerProvincias } from '../../../data/provincias';
const imagenes = require('../../../public/js/imagenes.js');
const form = require('../../../public/js/form.js');
const inm = require('../../../public/js/inmueble.js');
const mapa = require('../../../public/js/mapa.js');

export class Inmueble {
	constructor() {}

	getInmueble() {
		let api: API = API.getInstance();
		let params = this.obtenerParametros();
		let url = 'inmueble/' + params.catastroId + '/' + params.modo;

		return api.accesoAPI('get', url);
	}

	protected creacionObjeto() {
		let obj = form.getForm();
		let precio = this.validarPrecio(obj.precioV, obj.precioA);
		let params = {
			mail: this.getCookie('mail'),
			imagen: imagenes.getImageGalleryValues(),
			descuento: 0,
			precio,
			nCocina: 0,
		};
		delete obj.precioV;
		delete obj.precioA;
		Object.assign(obj, params);
		return obj;
	}

	protected obtenerParametros(): any {
		let queryString = window.location.search;
		let urlParams = new URLSearchParams(queryString);
		let catastroId = urlParams.get('catastro');
		let modo = urlParams.get('modo');
		return { catastroId, modo };
	}

	private validarPrecio(precioA: string, precioV: string): Array<string> {
		if (precioA == '') return [precioV];
		else if (precioV == '') return [precioA];
		else return [precioV, precioA];
	}

	private getCookie(name: string): string {
		var nameEQ = name + '=';
		var ca = document.cookie.split(';');
		for (var i = 0; i < ca.length; i++) {
			var c = ca[i];
			while (c.charAt(0) == ' ') c = c.substring(1, c.length);
			if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
		}
		return '';
	}
}

let inmueble = new Inmueble();

let datosInmueble = inmueble.getInmueble();
let provincias = obtenerProvincias();

datosInmueble.then((data) => {
	mapa.mostrarMapa(
		datosInmueble,
		provincias[data.provincia].latitud,
		provincias[data.provincia].longitud,
		provincias[data.provincia].zoom,
		true
	);
	inm.inmuebleDom(data);
});
