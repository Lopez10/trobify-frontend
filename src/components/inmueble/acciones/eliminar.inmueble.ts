import { API } from '../../API';
import { Estrategia } from '../Estrategia';
import { Inmueble } from '../inmueble';

export class EstrategiaEliminar extends Inmueble implements Estrategia {
	async ejecucion(id_catastro: any) {
		console.log(id_catastro);
		let api: API = API.getInstance();
		return await api.accesoAPI('delete', 'inmueble', id_catastro);
	}
	formulario() {
		let params = this.obtenerParametros();
		console.log(params);
		let registroForm: HTMLFormElement =
			document.querySelector('#deleteProperty') || document.createElement('form');
		registroForm.onsubmit = () => {
			this.ejecucion(params.catastroId);
			window.location.replace('http://localhost:8080/public/inmuebles.html');
			return false;
		};
	}
}
