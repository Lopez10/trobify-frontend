import { Singleton } from '../Singleton';
import { Usuario } from './usuario';
const form = require('../../../public/js/form.js');

export class Registro extends Usuario {
	constructor() {
		super();
		this.obtenerParametrosRegistro();
	}

	private async postRegistro(usuario: any): Promise<void> {
		let api: Singleton = Singleton.getInstance();
		api.accesoAPI('post', 'registro', usuario).then((response) => {
			console.log(response);
			if (response == true) {
				console.log(usuario);
				super.setCookie('mail', usuario.mail);
				super.autoRedirect();
			}
		});
	}

	private obtenerParametrosRegistro(): void {
		let loginForm: HTMLFormElement =
			document.querySelector('#formSignUp') || document.createElement('form');
		loginForm.onsubmit = () => {
			let obj = form.getForm();
			this.postRegistro(obj);
			return false;
		};
	}
}

let registro = new Registro();
