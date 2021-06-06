import { API } from '../../API';
import { Estrategia } from '../Estrategia';
import { Inmueble } from '../Inmueble';

export class Eliminar extends Inmueble implements Estrategia {
	async ejecucion(id_catastro: any) {
		console.log(id_catastro);
		let api: API = API.getInstance();
		return await api.accesoAPI('delete', 'inmueble', id_catastro);
	}
	formulario() {
		let params = this.obtenerParametros();
		let registroForm: HTMLFormElement =
			document.querySelector('#deleteProperty') || document.createElement('form');
		registroForm.onsubmit = () => {
			this.ejecucion(params.catastroId);
			window.location.replace('http://localhost:8080/public/inmuebles.html');
			return false;
		};
	}
}
