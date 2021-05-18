import { Singleton } from '../../Singleton';
const inmueblesPropietario = require('../../../../public/js/catalogo.js');

export class Inmuebles {
	constructor() {}
	async getInmueblesPropietario(params: string): Promise<any> {
		let api: Singleton = Singleton.getInstance();
		let url = 'catalogo/' + params;
		let inmuebles = await api.accesoAPI('get', url);
		this.mostrarInmuebles(inmuebles);
	}

	private mostrarInmuebles(inmuebles: any) {
		const div = document.getElementById('catalogo');
		inmuebles.forEach((item: any) => {
			console.log(item);
			inmueblesPropietario.inmueblePropietarioDom(div, item);
		});
	}
	getCookie(name: string): string {
		var nameEQ = name + '=';
		var ca = document.cookie.split(';');
		for (var i = 0; i < ca.length; i++) {
			var c = ca[i];
			while (c.charAt(0) == ' ') c = c.substring(1, c.length);
			if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
		}
		return '';
	}
}

let inmuebles = new Inmuebles();
let correo = inmuebles.getCookie('mail');
inmuebles.getInmueblesPropietario(correo);
