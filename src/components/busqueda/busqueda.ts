import querystring from 'querystring';
import { Catalogo } from './catalogo/catalogo';
import { Mapa } from './mapa/mapa';
import { obtenerProvincias, crearProvincias } from '../../../data/provincias';
import { Provincia } from '../../interface/provincia.interface';
import { Singleton } from '../Singleton';
const busqueda = require('../../../public/js/busqueda.js');

export class Busqueda {
	provincias: Provincia[];
	private inmuebles: any;
	constructor() {
		this.provincias = obtenerProvincias();
		this.obtenerFiltroUrl();
	}

	private getInmuebles(params: string): Promise<any> {
		let api: Singleton = Singleton.getInstance();
		let url = 'catalogo?' + params;
		return api.accesoAPI('get', url);
	}

	public aplicarFiltros() {
		let filtroForm: HTMLFormElement =
			document.querySelector('#filtroForm') || document.createElement('form');
		filtroForm.onsubmit = () => {
			const formData = new FormData(filtroForm);
			let ord = formData.get('orden') as unknown as number;
			let opt = formData.get('opt') as unknown as number;
			let preMin = formData.get('priceMin') as unknown as number;
			let preMax = formData.get('priceMax') as unknown as number;
			let mrgn = formData.get('umbral') as unknown as number;
			let aMrgn = formData.get('boolUmbral') as unknown as number;
			let supMin = formData.get('supMin') as unknown as number;
			let supMax = formData.get('supMax') as unknown as number;
			let prov = formData.get('provincia') as unknown as number;
			let tpoInmueble = formData.get('tpoInm') as unknown as number;
			let nHab = formData.get('h') as unknown as number;
			let nBan = formData.get('b') as unknown as number;
			let stdo = (formData.getAll('stdo') as unknown as Array<String>).join(',') as string;
			let tpoViv = (formData.getAll('tpoViv') as unknown as Array<String>).join(',') as string;
			let caract = (formData.getAll('caract') as unknown as Array<String>).join(',') as string;
			let params = querystring.stringify({
				tpoInm: tpoInmueble,
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
			});
			this.inmuebles = this.getInmuebles(params);
			this.crearMapa(prov, this.inmuebles);
			this.crearCatalogo(this.inmuebles);

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
iniciarBusqueda.aplicarFiltros();
