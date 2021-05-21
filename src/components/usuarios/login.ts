import { UsuarioInterface } from '../../interface/usuario.interface';
import { Singleton } from '../Singleton';
import { Usuario } from './usuario';

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
			const formData = new FormData(loginForm);
			let usuario: UsuarioInterface = {
				mail: formData.get('user') as string,
				password: formData.get('password') as string,
			};
			this.postLogin(usuario);
			return false;
		};
	}
}

let login = new Login();
