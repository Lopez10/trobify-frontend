import { Singleton } from '../Singleton';
import { InmuebleInterface } from '../../interface/inmueble.interface';
const imagenes = require('../../../public/js/imagenes.js');

export class Inmueble {
	constructor() {}
	getInmueble() {
		let api: Singleton = Singleton.getInstance();
		let params = this.obtenerParametros();
		let url = 'inmueble/' + params.catastroId + '/' + params.modo;

		return api.accesoAPI('get', url);
	}

	async postInmueble(inmueble: any) {
		let api: Singleton = Singleton.getInstance();
		return await api.accesoAPI('post', 'inmueble', inmueble);
	}

	async putInmueble(inmueble: any) {
		let api: Singleton = Singleton.getInstance();
		console.log(inmueble);
		return await api.accesoAPI('put', 'inmueble', inmueble);
	}

	async deleteInmueble(id_catastro: any) {
		let api: Singleton = Singleton.getInstance();
		return await api.accesoAPI('delete', 'inmueble', id_catastro);
	}

	aplicarEditar() {
		let registroForm: HTMLFormElement =
			document.querySelector('#formNewProperty') || document.createElement('form');
		registroForm.onsubmit = () => {
			const params: InmuebleInterface = this.crearParametros(registroForm);
			this.putInmueble(params);
			window.history.back();
			return false;
		};
	}

	escuchaEliminar(id_catastro: string) {
		let registroForm: HTMLFormElement =
			document.querySelector('#deleteProperty') || document.createElement('form');
		registroForm.onsubmit = () => {
			this.deleteInmueble(id_catastro);
			window.history.back();
			return false;
		};
	}

	aplicarRegistro() {
		let registroForm: HTMLFormElement =
			document.querySelector('#formNewProperty') || document.createElement('form');
		registroForm.onsubmit = () => {
			const params: InmuebleInterface = this.crearParametros(registroForm);
			console.log(params);
			this.postInmueble(params);
			window.history.back();
			return false;
		};
	}

	private obtenerParametros(): any {
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

	private crearParametros(registroForm: HTMLFormElement) {
		const formData = new FormData(registroForm);

		let precioV = formData.get('precioV') as string;
		let precioA = formData.get('precioA') as string;

		const params: InmuebleInterface = {
			nBano: formData.get('bathroomCount') as unknown as number,
			nHab: formData.get('roomCount') as unknown as number,
			id_caractSecundaria: (formData.getAll('feature') as unknown as Array<String>)
				.join(',')
				.split(',')
				.map((x) => +x),
			breveDescripcion: formData.get('descripcion') as string,
			id_estadoInmueble: formData.get('stdo') as unknown as number,
			id_catastro: formData.get('catast') as string,
			id_modalidad: (formData.getAll('propertyMethod') as unknown as Array<String>)
				.join(',')
				.split(',')
				.map((x) => +x),
			precio: this.validarPrecio(precioA, precioV),
			id_tipoVivienda: formData.get('homeType') as unknown as number,
			descuento: 0,
			id_certifEner: formData.get('energia') as unknown as number,
			id_tipoInmueble: formData.get('propertyType') as unknown as number,
			nCocina: 2,
			mail: this.getCookie('mail'),
			publicado: formData.get('publicar') as unknown as number | 0,
			imagen: imagenes.getImageGalleryValues(),
		};
		return params;
	}
}
