import { Catalogo } from './catalogo';
import querystring from 'querystring';

let catalogo: Catalogo = new Catalogo();
const mapa = require('../public/js/mapa.js');

construirCatalogo();

function construirCatalogo() {
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

		let catalogoFiltrado = catalogo.getCatalogo(params);
		catalogo.mostrarInmuebles(catalogoFiltrado);

		return false;
	};
}
