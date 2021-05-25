import { API } from '../../API';
import { Estrategia } from '../Estrategia';
import { Inmueble } from '../inmueble';

export class EstrategiaEliminar extends Inmueble implements Estrategia {
	async ejecucion(id_catastro: any) {
		let api: API = API.getInstance();
		return await api.accesoAPI('delete', 'inmueble', id_catastro);
	}
	formulario(id_catastro: string) {
		let registroForm: HTMLFormElement =
			document.querySelector('#deleteProperty') || document.createElement('form');
		registroForm.onsubmit = () => {
			this.ejecucion(id_catastro);
			window.history.back();
			return false;
		};
	}
}
