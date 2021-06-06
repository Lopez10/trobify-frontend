import querystring from 'querystring';
import { Catalogo } from './catalogo/Catalogo';
import { obtenerProvincias, crearProvincias } from '../../../data/provincias';
import { Provincia } from '../../interface/provincia.interface';
import { API } from '../API';
const busqueda = require('../../../public/js/busqueda.js');
const mapa = require('../../../public/js/mapa.js');
const form = require('../../../public/js/form.js');

export class Busqueda {
	provincias: Provincia[];
	constructor() {
		this.provincias = obtenerProvincias();
		this.obtenerFiltroUrl();
	}

	public accion(params: string): Promise<any> {
		let api: API = API.getInstance();
		let url = 'catalogo?' + params;
		return api.accesoAPI('get', url);
	}

	public escucharFormulario() {
		let filtroForm: HTMLFormElement =
			document.querySelector('#filtroForm') || document.createElement('form');
		filtroForm.onsubmit = () => {
			let obj = form.getForm();
			let params = querystring.stringify(obj);

			let inmuebles = this.accion(params);
			this.crearMapa(obj.prov, inmuebles);
			this.crearCatalogo(inmuebles);

			return false;
		};
	}

	private crearMapa(prov: number, inmuebles: Promise<any>) {
		mapa.mostrarMapa(
			inmuebles,
			this.provincias[prov].latitud,
			this.provincias[prov].longitud,
			this.provincias[prov].zoom,
			false
		);
	}

	private crearCatalogo(inmuebles: Promise<any>): void {
		let catalogo = new Catalogo();
		catalogo.mostrarInmuebles(inmuebles);
	}

	public obtenerFiltroUrl(): any {
		const queryString = window.location.search;
		const urlParams = new URLSearchParams(queryString);

		// @ts-ignore: Object is possibly 'null'.
		let prov: number = +urlParams.get('prov');
		// @ts-ignore: Object is possibly 'null'.
		let opt: number = +urlParams.get('opt');
		// @ts-ignore: Object is possibly 'null'.
		let tpoInm: number = +urlParams.get('tpoInm');
		return { prov, opt, tpoInm };
	}
}
let iniciarBusqueda = new Busqueda();
let { prov, opt, tpoInm } = iniciarBusqueda.obtenerFiltroUrl();
crearProvincias(prov);
busqueda.modificarFiltro(opt, prov, tpoInm);
iniciarBusqueda.escucharFormulario();
