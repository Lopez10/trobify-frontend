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
let x: HTMLFormElement =
	document.querySelector('#formularioHipoteca') || document.createElement('form');

let localizacion: string = 'Valencia';

let valorVariable = 0.0;

x.onsubmit = () => {
	const formData = new FormData(x);

	let condicionHipoteca = formData.get('condicion') as string;
	let precio = (formData.get('precio') as unknown) as number;
	let ahorro = (formData.get('ahorro') as unknown) as number;
	let plazo = (formData.get('plazo') as unknown) as number;
	let interes = formData.get('interes') as string;
	console.log(condicionHipoteca, precio, ahorro, plazo, interes);
	let hipoteca = new simuladorHipoteca(precio, localizacion);
	let calculoAhorro = hipoteca.calculoAhorro(ahorro);
	let calculoInteres = hipoteca.calculoInteres(interes, valorVariable, calculoAhorro);
	let total = hipoteca.calculoTotal(calculoInteres, calculoAhorro, plazo);
	console.log(total, hipoteca.calculoCuotaMensual(total, plazo));
	return false;
};

// Mostrar mapa
//mostrarMapa.mostrarMapa(inmuebles);
