import { InmuebleInterface } from '../../../interface/inmueble.interface';
import { API } from '../../API';
import { Inmueble } from '../inmueble';
import { Estrategia } from '../Estrategia';
import { Acciones } from '../Acciones';
const editar = require('../../../../public/js/editar.js');

export class EstrategiaEditar extends Inmueble implements Estrategia {
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
			const params: InmuebleInterface = this.crearParametros(registroForm);
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
