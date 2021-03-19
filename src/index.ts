import { Catalogo } from './catalogo/index.catalogo';
import { simuladorHipoteca } from './inmueble/hipoteca/index.hipoteca';
const mostrarMapa = require('../public/js/mapa.js');

//Creacion de catalogo con filtrado
let catalogo: Catalogo = new Catalogo();
let opt: number = 1;
let ord: number = 1;
/*let preMin: number = 1;
let preMax: number = 30000;
let aMrgn: number = 1;
let mrgn: number = 0.05;
let supMin: number = 1;
let supMax: number = 200;
let prov: number = 46;
let nHab: number = 2;
let clfEn: number = 1;*/
let inmuebles = catalogo.getCatalogo(
	opt,
	ord
	/*preMin,
	preMax,
	aMrgn,
	mrgn,
	supMin,
	supMax,
	prov,
	nHab,
	clfEn*/
);

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
mostrarMapa.mostrarMapa(inmuebles);
