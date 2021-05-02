import querystring from 'querystring';
import axios from 'axios';
import { Catalogo } from './catalogo/catalogo';
import { Mapa } from './mapa/mapa';
import { obtenerProvincias, crearProvincias } from '../../data/provincias';
import { Provincia } from '../interface/provincia.interface';


export class Busqueda {
	provincias: Provincia[];
	constructor() {
		this.provincias = obtenerProvincias();
		this.aplicarFiltros();
		crearProvincias();
	}
	aplicarFiltros() {
		let filtroForm: HTMLFormElement =
			document.querySelector('#filtroForm') || document.createElement('form');
		filtroForm.onsubmit = () => {
			const formData = new FormData(filtroForm);
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
			let stdo = ((formData.getAll('stdo') as unknown) as Array<String>).join(',') as string;
			let tpoViv = ((formData.getAll('tpoViv') as unknown) as Array<String>).join(',') as string;
			let caract = ((formData.getAll('caract') as unknown) as Array<String>).join(',') as string;
			//let clfEn = (formData.get('clfEn') as unknown) as number; // Por que no se puede seleccionar en ningún sitio
			let params = querystring.stringify({
				ord: ord,
				opt: opt,
				preMin: preMin,
				preMax: preMax,
				mrgn: mrgn / 100,
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
			let inmuebles = this.getInmuebles(params);
			this.crearMapa(prov, inmuebles);
			this.crearCatalogo(inmuebles);

			return false;
		};
	}

	aplicarFiltrosURL(prov: number, opt: number, tpoViv: number) {

		let params = querystring.stringify({
			opt: opt,
			tpoViv: tpoViv,
			prov: prov
		});

		let inmuebles = this.getInmuebles(params);
		this.crearMapa(prov, inmuebles);
		this.crearCatalogo(inmuebles);

		return false;
	}

	private crearMapa(prov: number, inmuebles: Promise<any>) {
		let mapa = new Mapa();
		mapa.mostrarMapa(inmuebles, this.provincias, prov || 0);
	}

	private crearCatalogo(inmuebles: Promise<any>) {
		let catalogo = new Catalogo();
		catalogo.mostrarInmuebles(inmuebles);
	}

	private getInmuebles(params: string) {
		const myRequest = 'http://localhost:3000/catalogo?';
		let inmuebles: Promise<any> = axios.get(myRequest + params).then((result) => {
			return result.data;
		});
		return inmuebles;
	}
}

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

if (urlParams.get("landing") != undefined) {

	let busqueda = new Busqueda();

	// @ts-ignore: Object is possibly 'null'.
	let prov: number = +urlParams.get('prov');
	// @ts-ignore: Object is possibly 'null'.
	let opt: number = +urlParams.get('opt');
	// @ts-ignore: Object is possibly 'null'.
	let tpoViv: number = +urlParams.get('tpoViv');

	console.log("Parametros de la busqueda del landing: prov="+prov+", opt="+opt+", tpoViv="+tpoViv);
	
	busqueda.aplicarFiltrosURL(prov,opt,tpoViv);
}