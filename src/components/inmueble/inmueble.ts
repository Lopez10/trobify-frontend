import { Singleton } from '../Singleton';
import { InmuebleInterface } from '../../interface/inmueble.interface';
const imagenes = require('../../../public/js/imagenes.js');
const inm = require('../../../public/js/inmueble.js');
const editar = require('../../../public/js/editar.js');
const form = require('../../../public/js/form.js');

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

	async editarInmueble(inmueble: any) {
		editar.editar(inmueble);
		this.aplicarEditar();
		this.escuchaEliminar(inmueble.id_catastro);
	}

	verInmueble(inmueble: any) {
		inm.inmuebleDom(inmueble);
	}

	private obtenerParametros(): any {
		let queryString = window.location.search;
		let urlParams = new URLSearchParams(queryString);
		let catastroId = urlParams.get('catastro');
		let modo = urlParams.get('modo');
		return { catastroId, modo };
	}

	aplicarRegistro() {
		let registroForm: HTMLFormElement =
			document.querySelector('#formNewProperty') || document.createElement('form');
		registroForm.onsubmit = () => {
			let obj = form.getForm();
			let params = this.modificacionObjeto(obj);
			this.postInmueble(params);
			console.log(params);
			window.history.back();
			return false;
		};
	}

	private modificacionObjeto(obj: any) {
		let params = {
			mail: this.getCookie('mail'),
			imagen: imagenes.getImageGalleryValues(),
			descuento: 0,
			precios: [obj.precioV, obj.precioA],
		};
		delete obj.precioV;
		delete obj.precioA;
		Object.assign(obj, params);
		return obj;
	}

	private validarPrecio(precioA: string, precioV: string) {
		let precios: string[];
		if (precioA == '') {
			precios = [precioV];
		} else if (precioV == '') {
			precios = [precioA];
		} else {
			precios = [precioV, precioA];
		}
		return precios;
	}

	aplicarEditar() {
		let registroForm: HTMLFormElement =
			document.querySelector('#formNewProperty') || document.createElement('form');
		registroForm.onsubmit = () => {
			let obj = form.getForm();
			let params = this.modificacionObjeto(obj);
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
