import { API } from '../../API';
import { Estrategia } from '../Estrategia';
import { Inmueble } from '../Inmueble';

export class Registrar extends Inmueble implements Estrategia {
	async ejecucion(inmueble: any) {
		let api: API = API.getInstance();
		return await api.accesoAPI('post', 'inmueble', inmueble);
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
}
