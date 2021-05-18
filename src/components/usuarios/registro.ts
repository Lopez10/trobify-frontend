import { Usuario } from '../../interface/usuario.interface';
import { Singleton } from '../Singleton';

export class Registro {
	constructor() {
		this.obtenerParametrosRegistro();
	}
	private obtenerParametrosRegistro(): void {
		let loginForm: HTMLFormElement =
			document.querySelector('#formSignUp') || document.createElement('form');
		loginForm.onsubmit = () => {
			const formData = new FormData(loginForm);
			let name = formData.get('name') as string;
			let lastname = formData.get('lastName') as string;
			let mayor = formData.get('adult') as string;
			let mail = formData.get('email') as string;
			let repeatMail = formData.get('repeatMail') as string;
			let phone = formData.get('phone') as string;
			let password = formData.get('password') as string;
			let repeatPassword = formData.get('repeatPassword') as string;
			let role = formData.get('role') as string;
			console.log(mayor);
			console.log(mail, repeatMail);
			console.log(password, repeatPassword);
			if (mail == repeatMail && password == repeatPassword && mayor == '1') {
				let usuario: any = {
					nombre: name,
					apellidos: lastname,
					mail: mail,
					telefono: phone,
					contrasena: password,
					id_rol: role,
				};
				console.log(usuario);
			}
			return false;
		};
	}
}

let registro = new Registro();
