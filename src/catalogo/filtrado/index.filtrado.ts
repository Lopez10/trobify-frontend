import { Catalogo } from '../index.catalogo';

export class Filtrado extends Catalogo {
	public async catalogoParams() {}

	public generarLista(): void {
		let params = this.catalogoParams();
		console.log(params);
		//let catalogo = this.getCatalogo(params);
		//this.mostrarInmuebles(catalogo);
	}
}
