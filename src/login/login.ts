import { Usuario } from '../interface/usuario.interface';
import axios from 'axios';

export class Login {
	constructor() {
		this.obtenerParametrosLogin();
	}

	private async postLogin(usuario: Usuario) {
		const myRequest = 'http://localhost:3000/login';
		axios.post(myRequest, usuario).then(
			(response) => console.log(response),
			(error) => console.log(error)
		);
	}
	private isLoggedIn(): boolean {
		return false;
	}

	private autoRedirect(): void {}

	private logOut(): void {}

	private obtenerParametrosLogin(): void {
		let loginForm: HTMLFormElement =
			document.querySelector('#formLogin') || document.createElement('form');
		loginForm.onsubmit = () => {
			const formData = new FormData(loginForm);
			let mail = formData.get('user') as string;
			let pass = formData.get('password') as string;
			let usuario: Usuario = {
				username: mail,
				password: pass,
			};
			this.postLogin(usuario);
			return false;
		};
	}
}
