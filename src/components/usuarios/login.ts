import { UsuarioInterface } from '../../interface/usuario.interface';
import { API } from '../API';
import { Usuario } from './usuario';
const form = require('../../../public/js/form.js');

export class Login extends Usuario {
	constructor() {
		super();
		this.obtenerParametrosLogin();
	}

	async postUsuarios(usuario: any): Promise<void> {
		let api: API = API.getInstance();
		api.accesoAPI('post', 'login', usuario).then((response) => {
			if (response == true) {
				console.log(usuario);
				this.setCookie('mail', usuario.mail);
				this.autoRedirect();
			}
		});
	}

	private obtenerParametrosLogin(): void {
		let loginForm: HTMLFormElement =
			document.querySelector('#formLogin') || document.createElement('form');
		loginForm.onsubmit = () => {
			let obj = form.getForm();
			this.postUsuarios(obj);
			return false;
		};
	}
}

let login = new Login();
