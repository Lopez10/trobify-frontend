import { Filtrado } from './catalogo/filtrado/index.filtrado';
import { simuladorHipoteca } from './inmueble/hipoteca/index.hipoteca';
import { obtenerProvincias } from './data/provincias';
import { Provincia } from './interface/provincia.inteface';
const mapa = require('../public/js/mapa.js');
import querystring from 'querystring';

//Creacion de catalogo con filtrado
let catalogo: Filtrado = new Filtrado();

let catalogoForm: HTMLFormElement =
	document.querySelector('#filtroForm') || document.createElement('form');
catalogoForm.onsubmit = () => {
	const formData = new FormData(catalogoForm);
	let ord = (formData.get('orden') as unknown) as number;
	let opt = (formData.get('opt') as unknown) as number;
	let preMin = (formData.get('priceMin') as unknown) as number;
	let preMax = (formData.get('priceMax') as unknown) as number;
	let mrgn = (formData.get('umbral') as unknown) as number;
	let aMrgn = (formData.get('boolUmbral') as unknown) as number;
	let supMin = (formData.get('supMin') as unknown) as number;
	let supMax = (formData.get('supMax') as unknown) as number;
	let prov = (formData.get('provincia') as unknown) as number;
	let nHab = (formData.get('h') as unknown) as number;
	let nBan = (formData.get('b') as unknown) as number;
	let stdo = ((formData.getAll('stdo') as unknown) as Array<String>).join(",") as string;
	let tpoViv = ((formData.getAll('tpoViv') as unknown) as Array<String>).join(",") as string;
	let caract = ((formData.getAll('caract') as unknown) as Array<String>).join(",") as string;
	//let clfEn = (formData.get('clfEn') as unknown) as number; // Por que no se puede seleccionar en ningún sitio
	let params = querystring.stringify({
		ord: ord,
		opt: opt,
		preMin: preMin,
		preMax: preMax,
		mrgn: mrgn/100,
		aMrgn: aMrgn,
		supMin: supMin,
		supMax: supMax,
		stdo: stdo,
		tpoViv: tpoViv,
		caract: caract,
		prov: prov,
		nHab: nHab,
		nBan: nBan,
		//clfEn: clfEn, // Por que no se puede seleccionar en ningún sitio
	});

	let catalogoFiltrado = catalogo.getCatalogo(params);
	catalogo.mostrarInmuebles(catalogoFiltrado);
	
	mapa.mostrarMapa(
		catalogoFiltrado,
		provincia[prov].latitud,
		provincia[prov].longitud,
		provincia[prov].zoom
	);

	return false;
};

// Creacion de Hipoteca (ejemplo)
let hipotecaForm: HTMLFormElement =
	document.querySelector('#formularioHipoteca') || document.createElement('form');
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

let provincia: Array<Provincia> = obtenerProvincias();
catalogo.crearProvincias();
