import { InmuebleInterface } from '../../../interface/inmueble.interface';
import { API } from '../../API';
import { Acciones } from '../Acciones';
import { Estrategia } from '../Estrategia';
import { Inmueble } from '../inmueble';

export class EstrategiaRegistrar extends Inmueble implements Estrategia {
	async ejecucion(inmueble: any) {
		let api: API = API.getInstance();
		return await api.accesoAPI('post', 'inmueble', inmueble);
	}
	formulario() {
		let registroForm: HTMLFormElement =
			document.querySelector('#formNewProperty') || document.createElement('form');
		registroForm.onsubmit = () => {
			const params: InmuebleInterface = this.crearParametros(registroForm);
			console.log(params);
			this.ejecucion(params);
			window.history.back();
			return false;
		};
	}
}
