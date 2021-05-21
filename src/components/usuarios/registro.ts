import { Singleton } from '../Singleton';
import { Usuario } from './usuario';
const mostrarValidacion = require('../../../public/js/registro.js');

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
			} else {
				mostrarValidacion.alertAlreadyExists();
			}
		});
	}

	private obtenerParametrosRegistro(): void {
		let loginForm: HTMLFormElement =
			document.querySelector('#formSignUp') || document.createElement('form');
		loginForm.onsubmit = () => {
			const formData = new FormData(loginForm);
			let usuario: any = {
				nombre: formData.get('name') as string,
				apellidos: formData.get('lastName') as string,
				mail: formData.get('email') as string,
				telefono: formData.get('phone') as string,
				contrasena: formData.get('password') as string,
				id_rol: formData.get('role') as string,
			};
			console.log(usuario);
			this.postRegistro(usuario);

			return false;
		};
	}
}

let registro = new Registro();
