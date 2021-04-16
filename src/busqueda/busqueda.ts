import querystring from 'querystring';
import { Catalogo } from './catalogo/catalogo';
import { Mapa } from './mapa/mapa';
import axios from 'axios';
import { Provincia } from '../interface/provincia.inteface';

export class Busqueda {
	constructor() {
		this.aplicarFiltros();
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
			let inmuebles = this.getInmuebles();
			this.crearMapa(0, inmuebles);
			this.crearCatalogo(inmuebles);
		};
	}

	private crearMapa(prov: number, inmuebles: Promise<any>) {
		let mapa = new Mapa();
		let provincias: Provincia[] = mapa.mostrarProvincia();
		mapa.mostrarMapa(inmuebles, provincias, prov || 0);
	}

	private crearCatalogo(inmuebles: Promise<any>) {
		let catalogo = new Catalogo();
		catalogo.mostrarInmuebles(inmuebles);
	}

	getInmuebles() {
		const myRequest = 'http://localhost:3000/catalogo?';
		let inmuebles: Promise<any> = axios.get(myRequest).then((result) => {
			return result.data;
		});
		return inmuebles;
	}
}
