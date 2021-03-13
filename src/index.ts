import { Catalogo } from './catalogo/index.catalogo';

class Principal {
	constructor() {}
}

let catalogo: Catalogo = new Catalogo();

let inmuebles = catalogo.listadoInmuebles();
catalogo.mostrarInmuebles(inmuebles);


