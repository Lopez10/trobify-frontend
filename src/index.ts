import { Filtrado } from './catalogo/filtrado/index.filtrado';
import { simuladorHipoteca } from './inmueble/hipoteca/index.hipoteca';
const mostrarMapa = require('../public/js/mapa.js');

//Creacion de catalogo con filtrado
let catalogo: Filtrado = new Filtrado();
catalogo.generarLista();
let params: string = catalogo.catalogoParams();
let inmueblesMapa = catalogo.getCatalogo(params);
/*let opt: number = 1;
let ord: number = 1;
let preMin: number = 1;
let preMax: number = 30000;
let aMrgn: number = 1;
let mrgn: number = 0.05;
let supMin: number = 1;
let supMax: number = 200;
let prov: number = 46;
let nHab: number = 2;
let clfEn: number = 1;*/

// Creacion de Hipoteca (ejemplo)
let hipotecaForm: HTMLFormElement =
	document.querySelector('#formularioHipoteca') || document.createElement('form');
console.log('object');
let localizacion: string = 'Valencia';

hipotecaForm.onsubmit = () => {
	const formData = new FormData(hipotecaForm);

	let condicionHipoteca = formData.get('condicion') as string;
	let precio = (formData.get('precio') as unknown) as number;
	let ahorro = (formData.get('ahorro') as unknown) as number;
	let plazo = (formData.get('plazo') as unknown) as number;
	let valorVariable = (formData.get('valorVariable') as unknown) as number;
	let interes = formData.get('interes') as string;
	console.log(condicionHipoteca, precio, ahorro, plazo, interes);
	let hipoteca = new simuladorHipoteca(precio, localizacion);
	let valorCondicionHipoteca = hipoteca.calculoCondicion(condicionHipoteca);
	let calculoAhorro = hipoteca.calculoAhorro(ahorro);
	let calculoInteres = hipoteca.calculoInteres(interes, valorVariable, calculoAhorro);
	let total = hipoteca.calculoTotal(calculoInteres, calculoAhorro, plazo);
	let cuotaMensual = hipoteca.calculoCuotaMensual(total, plazo);
	console.log(total, hipoteca.calculoCuotaMensual(total, plazo));
	let totalDom = document.getElementById('total');
	total = Math.round(total);
	if (totalDom != null) totalDom.textContent = total.toString();
	let cuotaMensualDom = document.getElementById('cuotaMensual');
	cuotaMensual = Math.round(cuotaMensual);
	if (cuotaMensualDom != null) cuotaMensualDom.textContent = cuotaMensual.toString();
	return false;
};

// Mostrar mapa
mostrarMapa.mostrarMapa(inmueblesMapa);
