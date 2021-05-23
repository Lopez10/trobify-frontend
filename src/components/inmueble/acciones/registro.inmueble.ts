import { InmuebleInterface } from '../../../interface/inmueble.interface';
import { API } from '../../API';
import { Inmueble } from '../inmueble';

export class Registro extends Inmueble {
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
	async postInmueble(inmueble: any) {
		let api: API = API.getInstance();
		return await api.accesoAPI('post', 'inmueble', inmueble);
	}
}

let registroInmueble = new Registro();
registroInmueble.aplicarRegistro();
