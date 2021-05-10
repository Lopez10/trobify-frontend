import { Usuario } from '../../interface/usuario.interface';
import { Singleton } from '../Singleton';
const log = require('../../../public/js/navbar.js');

export class Login {
	constructor() {
		this.obtenerParametrosLogin();
	}

	private async postLogin(usuario: Usuario): Promise<void> {
		let api: Singleton = Singleton.getInstance();
		api.accesoAPI('post', 'login', usuario).then((response) => {
			if (response == true) {
				console.log(usuario);
				this.setCookie('username', usuario.mail);
				this.autoRedirect();
			}
		});
	}
	private isLoggedIn(): boolean {
		if (this.getCookie('username') !== null) return true;
		return false;
	}

	private autoRedirect(): void {
		window.location.replace('http://localhost:8080/public/');
	}

	private obtenerParametrosLogin(): void {
		let loginForm: HTMLFormElement =
			document.querySelector('#formLogin') || document.createElement('form');
		loginForm.onsubmit = () => {
			const formData = new FormData(loginForm);
			let mail = formData.get('user') as string;
			let pass = formData.get('password') as string;
			let usuario: Usuario = {
				mail: mail,
				password: pass,
			};
			this.postLogin(usuario);
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

	private getCookie(name: string): string | null {
		var nameEQ = name + '=';
		var ca = document.cookie.split(';');
		for (var i = 0; i < ca.length; i++) {
			var c = ca[i];
			while (c.charAt(0) == ' ') c = c.substring(1, c.length);
			if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
		}
		return null;
	}
}

let login = new Login();
