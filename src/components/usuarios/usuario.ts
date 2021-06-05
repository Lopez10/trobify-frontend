import { API } from '../API';
const mostrarValidacion = require('../../../public/js/registro.js');
const form = require('../../../public/js/form.js');

export class Usuario {
	protected async postUsuarios(usuario: any, tipo: string): Promise<void> {
		let api: API = API.getInstance();
		api.accesoAPI('post', tipo, usuario).then((response) => {
			if (response == true) {
				this.setCookie('mail', usuario.mail);
				this.autoRedirect();
			} else {
				mostrarValidacion.alertAlreadyExists();
			}
		});
	}

	public obtenerParametros(tipo: string): void {
		let escucharFormulario: HTMLFormElement =
			document.querySelector('#form') || document.createElement('form');
		escucharFormulario.onsubmit = () => {
			let obj = form.getForm();
			this.postUsuarios(obj, tipo);
			return false;
		};
	}

	private setCookie(name: string, value: string): void {
		let expires = '';
		let date = new Date();
		date.setTime(date.getTime() + 30 * 24 * 60 * 60 * 1000);
		expires = '; expires=' + date.toUTCString();
		document.cookie = name + '=' + value + expires + '; path=/';
	}
	private autoRedirect(): void {
		window.location.replace('http://localhost:8080/public/');
	}
}
