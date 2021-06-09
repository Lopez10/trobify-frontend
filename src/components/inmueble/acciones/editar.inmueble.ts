import { API } from '../../API';
import { Inmueble } from '../Inmueble';
import { Estrategia } from '../../../interface/estrategia.interface';
const editar = require('../../../../public/js/editar.js');

export class Editar extends Inmueble implements Estrategia {
	constructor() {
		super();
		this.getInmueble().then((data) => {
			editar.editar(data);
		});
	}
	formulario() {
		let registroForm: HTMLFormElement =
			document.querySelector('#formNewProperty') || document.createElement('form');
		registroForm.onsubmit = () => {
			const params = this.creacionObjeto();
			this.ejecucion(params);
			window.history.back();
			return false;
		};
	}

	async ejecucion(inmueble: any) {
		let api: API = API.getInstance();
		return await api.accesoAPI('put', 'inmueble', inmueble);
	}
}
