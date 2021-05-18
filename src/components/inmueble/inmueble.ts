import { Singleton } from '../Singleton';
import { InmuebleInterface } from '../../interface/inmueble.interface';
const imagenes = require('../../../public/js/imagenes.js');
const inm = require('../../../public/js/inmueble.js');
const editar = require('../../../public/js/editar.js');

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

	// async registrarInmueble() {
	// 	let params = await this.aplicarRegistro();
	// 	this.postInmueble(params);
	// }

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
			const formData = new FormData(registroForm);
			let propertyType = formData.get('propertyType') as string;
			let catast = formData.get('catast') as string;
			let descripcion = formData.get('descripcion') as string;
			let estado = formData.get('stdo') as string;
			let energia = formData.get('energia') as string;
			let precioV = formData.get('precioV') as string;
			let precioA = formData.get('precioA') as string;
			let homeType = formData.get('homeType') as string;
			let roomCount = formData.get('roomCount') as string;
			let bathroomCount = formData.get('bathroomCount') as string;
			let publicar = formData.get('publicar') as string;
			let feature = (formData.getAll('feature') as unknown as Array<String>).join(',');
			let propertyMethod = (formData.getAll('propertyMethod') as unknown as Array<String>).join(
				','
			);
			let modo = propertyMethod.split(',').map((x) => +x);
			let caract = feature.split(',').map((x) => +x);
			let precios: string[] = this.validarPrecio(precioA, precioV);
			const params: InmuebleInterface = {
				nBano: +bathroomCount,
				nHab: +roomCount,
				id_caractSecundaria: caract,
				breveDescripcion: descripcion,
				id_estadoInmueble: +estado,
				id_catastro: catast,
				id_modalidad: modo,
				precio: precios,
				id_tipoVivienda: +homeType,
				descuento: 0,
				id_certifEner: +energia,
				id_tipoInmueble: +propertyType,
				nCocina: 2,
				mail: this.getCookie('mail'),
				publicado: +publicar | 0,
				imagen: imagenes.getImageGalleryValues(),
			};
			console.log(params);
			this.postInmueble(params);
			window.location.replace('http://localhost:8080/public');
			return false;
		};
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
			const formData = new FormData(registroForm);
			let propertyType = formData.get('propertyType') as string;
			let catast = formData.get('catast') as string;
			let descripcion = formData.get('descripcion') as string;
			let estado = formData.get('stdo') as string;
			let energia = formData.get('energia') as string;
			let precioV = formData.get('precioV') as string;
			let precioA = formData.get('precioA') as string;
			let homeType = formData.get('homeType') as string;
			let roomCount = formData.get('roomCount') as string;
			let publicar = formData.get('publicar') as string;
			let bathroomCount = formData.get('bathroomCount') as string;
			let feature = (formData.getAll('feature') as unknown as Array<String>).join(',');
			let propertyMethod = (formData.getAll('propertyMethod') as unknown as Array<String>).join(
				','
			);
			let modo = propertyMethod.split(',').map((x) => +x);
			let caract = feature.split(',').map((x) => +x);
			let precios: string[] = this.validarPrecio(precioA, precioV);

			const params: InmuebleInterface = {
				nBano: +bathroomCount,
				nHab: +roomCount,
				id_caractSecundaria: caract,
				breveDescripcion: descripcion,
				id_estadoInmueble: +estado,
				id_catastro: catast,
				id_modalidad: modo,
				precio: precios,
				id_tipoVivienda: +homeType,
				descuento: 0,
				id_certifEner: +energia,
				id_tipoInmueble: +propertyType,
				nCocina: 2,
				publicado: +publicar | 0,
				mail: this.getCookie('mail'),
				imagen: imagenes.getImageGalleryValues(),
			};
			console.log(params);
			this.putInmueble(params);
			window.location.replace('http://localhost:8080/public');
			return false;
		};
	}

	escuchaEliminar(id_catastro: string) {
		let registroForm: HTMLFormElement =
			document.querySelector('#deleteProperty') || document.createElement('form');
		registroForm.onsubmit = () => {
			this.deleteInmueble(id_catastro);
			window.location.replace('http://localhost:8080/public/');
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
