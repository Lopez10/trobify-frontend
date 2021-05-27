import { API } from '../API';
import { InmuebleInterface } from '../../interface/inmueble.interface';
import { obtenerProvincias } from '../../../data/provincias';
const imagenes = require('../../../public/js/imagenes.js');
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

	protected crearParametros(registroForm: HTMLFormElement) {
		const formData = new FormData(registroForm);

		let precioV = formData.get('precioV') as string;
		let precioA = formData.get('precioA') as string;

		const params: InmuebleInterface = {
			nBano: formData.get('bathroomCount') as unknown as number,
			nHab: formData.get('roomCount') as unknown as number,
			id_caractSecundaria: this.creacionArrayNumeros(formData, 'feature'),
			breveDescripcion: formData.get('descripcion') as string,
			id_estadoInmueble: formData.get('stdo') as unknown as number,
			id_catastro: formData.get('catast') as string,
			id_modalidad: this.creacionArrayNumeros(formData, 'propertyMethod'),
			precio: this.validarPrecio(precioA, precioV),
			id_tipoVivienda: formData.get('homeType') as unknown as number,
			descuento: 0,
			id_certifEner: formData.get('energia') as unknown as number,
			id_tipoInmueble: formData.get('propertyType') as unknown as number,
			nCocina: 2,
			mail: this.getCookie('mail'),
			publicado: formData.get('visibility') as unknown as number | 0,
			imagen: imagenes.getImageGalleryValues(),
		};
		return params;
	}

	private creacionArrayNumeros(formData: FormData, tipo: string): number[] {
		return (formData.getAll(tipo) as unknown as Array<String>)
			.join(',')
			.split(',')
			.map((x) => +x);
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
