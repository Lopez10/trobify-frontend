import { UsuarioInterface } from '../../interface/usuario.interface';
import { API } from '../API';
import { Usuario } from './usuario';

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
			const formData = new FormData(loginForm);
			let usuario: UsuarioInterface = {
				mail: formData.get('user') as string,
				password: formData.get('password') as string,
			};
			this.postUsuarios(usuario);
			return false;
		};
	}
}

let login = new Login();
