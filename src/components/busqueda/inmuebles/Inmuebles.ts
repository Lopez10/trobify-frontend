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
}

let inmuebles = new Inmuebles();
inmuebles.getInmueblesPropietario('prueba2@gmail.com');
