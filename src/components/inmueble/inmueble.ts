import { Singleton } from '../Singleton';
import { crearProvincias } from '../../../data/provincias';
import { InmuebleInterface } from '../../interface/inmueble.interface';
const imagenes = require('../../../public/js/imagenes.js');
const inm = require('../../../public/js/inmueble.js');
const editar = require('../../../public/js/editar.js');

export class Inmueble {
	constructor() {
		crearProvincias();
	}
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
			let place = formData.get('place') as string;
			let descripcion = formData.get('descripcion') as string;
			let estado = formData.get('stdo') as string;
			let energia = formData.get('energia') as string;
			let provincia = formData.get('provincia') as string;
			let superficie = formData.get('superficie') as string;
			let precioV = formData.get('precioV') as string;
			let precioA = formData.get('precioA') as string;
			let homeType = formData.get('homeType') as string;
			let roomCount = formData.get('roomCount') as string;
			let bathroomCount = formData.get('bathroomCount') as string;
			let feature = (formData.getAll('feature') as unknown as Array<String>).join(',');
			let propertyMethod = (formData.getAll('propertyMethod') as unknown as Array<String>).join(
				','
			);
			let modo = propertyMethod.split(',').map((x) => +x);
			let caract = feature.split(',').map((x) => +x);

			const params: InmuebleInterface = {
				nBano: +bathroomCount,
				nHab: +roomCount,
				id_caractSecundaria: caract,
				breveDescripcion: descripcion,
				direccion: place,
				id_estadoInmueble: +estado,
				id_catastro: catast,
				superficie: +superficie,
				id_modalidad: modo,
				precio: [precioV, precioA],
				id_provincia: +provincia || 46,
				id_tipoVivienda: +homeType,
				descuento: 0,
				id_certifEner: +energia,
				id_tipoInmueble: +propertyType,
				nCocina: 2,
				id_usuario: 1,
				longitud: 0,
				latitud: 0,
				imagen: imagenes.getImageGalleryValues(),
			};
			this.postInmueble(params);
			window.location.replace(
				'http://localhost:8080/public/inmueble.html?catastro=' + catast + '&modo=' + modo[0]
			);
			return false;
		};
	}

	// Refactorizar
	aplicarEditar() {
		let registroForm: HTMLFormElement =
			document.querySelector('#formNewProperty') || document.createElement('form');
		registroForm.onsubmit = () => {
			const formData = new FormData(registroForm);
			let propertyType = formData.get('propertyType') as string;
			let catast = formData.get('catast') as string;
			let place = formData.get('place') as string;
			let descripcion = formData.get('descripcion') as string;
			let estado = formData.get('stdo') as string;
			let energia = formData.get('energia') as string;
			let provincia = formData.get('provincia') as string;
			let superficie = formData.get('superficie') as string;
			let precioV = formData.get('precioV') as string;
			let precioA = formData.get('precioA') as string;
			let homeType = formData.get('homeType') as string;
			let roomCount = formData.get('roomCount') as string;
			let bathroomCount = formData.get('bathroomCount') as string;
			let feature = (formData.getAll('feature') as unknown as Array<String>).join(',');
			let propertyMethod = (formData.getAll('propertyMethod') as unknown as Array<String>).join(
				','
			);
			let modo = propertyMethod.split(',').map((x) => +x);
			let caract = feature.split(',').map((x) => +x);

			const params: InmuebleInterface = {
				nBano: +bathroomCount,
				nHab: +roomCount,
				id_caractSecundaria: caract,
				breveDescripcion: descripcion,
				direccion: place,
				id_estadoInmueble: +estado,
				id_catastro: catast,
				superficie: +superficie,
				id_modalidad: modo,
				precio: [precioV, precioA],
				id_provincia: +provincia || 46,
				id_tipoVivienda: +homeType,
				descuento: 0,
				id_certifEner: +energia,
				id_tipoInmueble: +propertyType,
				nCocina: 2,
				id_usuario: 1,
				longitud: 0,
				latitud: 0,
				imagen: imagenes.getImageGalleryValues(),
			};
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
}
