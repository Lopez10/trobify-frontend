import { InmuebleInterface } from '../../../interface/inmueble.interface';
import { API } from '../../API';
import { Inmueble } from '../inmueble';
const editar = require('../../../../public/js/editar.js');

export class Edicion extends Inmueble {
	constructor() {
		super();
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
	async putInmueble(inmueble: any) {
		let api: API = API.getInstance();
		return await api.accesoAPI('put', 'inmueble', inmueble);
	}
	async deleteInmueble(id_catastro: any) {
		let api: API = API.getInstance();
		return await api.accesoAPI('delete', 'inmueble', id_catastro);
	}
}

let editarInmueble = new Edicion();

let datosInmueble = editarInmueble.getInmueble();

datosInmueble.then((data) => {
	editar.editar(data);
	editarInmueble.aplicarEditar();
	editarInmueble.escuchaEliminar(data.id_catastro);
});
