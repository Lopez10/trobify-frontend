import { Catalogo } from './catalogo/index.catalogo';

let catalogo: Catalogo = new Catalogo();

let inmuebles = catalogo.listadoInmuebles();
catalogo.mostrarInmuebles(inmuebles);
