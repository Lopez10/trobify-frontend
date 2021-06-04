import { UsuarioInterface } from '../../interface/usuario.interface';
import { Singleton } from '../Singleton';
import { Usuario } from './usuario';
const form = require('../../../public/js/form.js');

export class Login extends Usuario {
	constructor() {
		super();
		this.obtenerParametrosLogin();
	}

	private async postLogin(usuario: UsuarioInterface): Promise<void> {
		let api: Singleton = Singleton.getInstance();
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
			this.postLogin(obj);
			return false;
		};
	}
}

let login = new Login();
