import { API } from '../API';
import { Usuario } from './usuario';
const mostrarValidacion = require('../../../public/js/registro.js');
const form = require('../../../public/js/form.js');

export class Registro extends Usuario {
	constructor() {
		super();
		this.obtenerParametrosRegistro();
	}

	async postUsuarios(usuario: any): Promise<void> {
		let api: API = API.getInstance();
		api.accesoAPI('post', 'registro', usuario).then((response) => {
			console.log(response);
			if (response == true) {
				console.log(usuario);
				super.setCookie('mail', usuario.mail);
				super.autoRedirect();
			} else {
				mostrarValidacion.alertAlreadyExists();
			}
		});
	}

	private obtenerParametrosRegistro(): void {
		let loginForm: HTMLFormElement =
			document.querySelector('#formSignUp') || document.createElement('form');
		loginForm.onsubmit = () => {
			let obj = form.getForm();
			this.postUsuarios(obj);
			return false;
		};
	}
}

let registro = new Registro();
