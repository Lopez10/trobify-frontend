import querystring from 'querystring';
import { Catalogo } from './catalogo/catalogo';
import { Mapa } from './mapa/mapa';
import { obtenerProvincias, crearProvincias } from '../../../data/provincias';
import { Provincia } from '../../interface/provincia.interface';
import { Singleton } from '../Singleton';
const busqueda = require('../../../public/js/busqueda.js');
const form = require('../../../public/js/form.js');

export class Busqueda {
	provincias: Provincia[];
	constructor() {
		this.provincias = obtenerProvincias();
		this.obtenerFiltroUrl();
	}

	private getInmuebles(params: string): Promise<any> {
		let api: Singleton = Singleton.getInstance();
		let url = 'catalogo?' + params;
		return api.accesoAPI('get', url);
	}

	private aplicarFiltros() {
		let filtroForm: HTMLFormElement =
			document.querySelector('#filtroForm') || document.createElement('form');
		filtroForm.onsubmit = () => {
			let obj = form.getForm();
			let params = querystring.stringify(obj);
			console.log(params);

			let inmuebles = this.getInmuebles(params);
			this.crearMapa(obj.prov, inmuebles);
			this.crearCatalogo(inmuebles);

			return false;
		};
	}

	private crearMapa(prov: number, inmuebles: Promise<any>) {
		let mapa = new Mapa();
		mapa.mostrarMapa(inmuebles, this.provincias, prov || 0);
	}

	private crearCatalogo(inmuebles: Promise<any>): void {
		let catalogo = new Catalogo();
		catalogo.mostrarInmuebles(inmuebles);
	}

	private aplicarFiltrosURL(prov: number, opt: number, tpoInm: number) {
		busqueda.modificarFiltro(opt, prov, tpoInm);
		this.aplicarFiltros();
	}

	private obtenerFiltroUrl(): void {
		const queryString = window.location.search;
		const urlParams = new URLSearchParams(queryString);
		if (urlParams.get('prov') != null) {
			// @ts-ignore: Object is possibly 'null'.
			let prov: number = +urlParams.get('prov');
			// @ts-ignore: Object is possibly 'null'.
			let opt: number = +urlParams.get('opt');
			// @ts-ignore: Object is possibly 'null'.
			let tpoInm: number = +urlParams.get('tpoInm');

			crearProvincias(prov);
			this.aplicarFiltrosURL(prov, opt, tpoInm);
		}
	}
}
let iniciarBusqueda = new Busqueda();
