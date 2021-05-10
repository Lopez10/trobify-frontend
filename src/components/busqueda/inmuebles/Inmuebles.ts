import { Singleton } from '../../Singleton';
import { Catalogo } from '../catalogo/catalogo';
export class Inmuebles {
	constructor() {}
	async getInmueblesPropietario(params: string): Promise<any> {
		let api: Singleton = Singleton.getInstance();
		let catalogo = new Catalogo();
		let url = 'catalogo?propietario=' + params;
		let inmuebles = await api.accesoAPI('get', url);
		catalogo.mostrarInmuebles(inmuebles);
	}
}

let inmuebles = new Inmuebles();
inmuebles.getInmueblesPropietario('prueba4@gmail.com');
