import { Catalogo } from './catalogo/index.catalogo';
import { simuladorHipoteca } from './inmueble/hipoteca/index.hipoteca';
const mostrarMapa = require('../public/js/mapa.js');
let catalogo: Catalogo = new Catalogo();

let inmuebles = catalogo.listadoInmuebles();
catalogo.mostrarInmuebles(inmuebles);

let precio: number = 300000;
let localizacion: string = 'Valencia';
let hipoteca = new simuladorHipoteca(precio, localizacion);

let ahorro = 25000;
let interes = 'fijo';
let valorVariable = 0.0;
let anos = 40;

let calculoAhorro = hipoteca.calculoAhorro(ahorro);
let calculoInteres = hipoteca.calculoInteres(interes, valorVariable, calculoAhorro);
let total = hipoteca.calculoTotal(calculoInteres, calculoAhorro, anos);
console.log(total, hipoteca.calculoCuotaMensual(total, anos));

mostrarMapa.mostrarMapa(inmuebles);
