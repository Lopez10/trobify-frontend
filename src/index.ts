import { Catalogo } from './catalogo/index.catalogo';
import { simuladorHipoteca } from './inmueble/hipoteca/index.hipoteca';

let catalogo: Catalogo = new Catalogo();

let inmuebles = catalogo.listadoInmuebles();
catalogo.mostrarInmuebles(inmuebles);

let precio: number = 0;
let localizacion: string = 'Valencia';
let hipoteca = new simuladorHipoteca(precio, localizacion);
