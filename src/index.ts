import { Catalogo } from './catalogo/index.catalogo';
import { simuladorHipoteca } from './inmueble/hipoteca/index.hipoteca';
const mostrarMapa = require('../public/js/mapa.js');

//Creacion de catalogo
let catalogo: Catalogo = new Catalogo();
let filtros: any = {
	opt: 1,
	ord: 1,
	preMin: 1,
	preMax: 1,
	mrgn: 10,
	supMin: 10,
	supMax: 100,
	prov: 1,
	nHab: 1,
	clfEn: 1,
};
let inmuebles = catalogo.getCatalogo(filtros);
catalogo.mostrarInmuebles(inmuebles);

// Creacion de Hipoteca (ejemplo)
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

// Mostrar mapa
mostrarMapa.mostrarMapa(inmuebles);
