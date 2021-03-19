import { Catalogo } from '../index.catalogo';
import querystring from 'querystring';

export class Filtrado extends Catalogo {
	public catalogoParams(): string {
		let catalogoForm: HTMLFormElement =
			document.querySelector('#filtroForm') || document.createElement('form');
		return (catalogoForm.onsubmit = () => {
			const formData = new FormData(catalogoForm);

			let ord = (formData.get('orden') as unknown) as number;
			let preMin = (formData.get('preMin') as unknown) as number;
			let preMax = (formData.get('preMax') as unknown) as number;
			let mrgn = (formData.get('umbral') as unknown) as number;
			let aMrgn = (formData.get('boolUmbral') as unknown) as number;
			let supMin = (formData.get('supMin') as unknown) as number;
			let supMax = (formData.get('supMax') as unknown) as number;
			let prov = (formData.get('provincia') as unknown) as number;
			let nHab = (formData.get('h') as unknown) as number;
			let nBan = (formData.get('b') as unknown) as number;
			let clfEn = (formData.get('clfEn') as unknown) as number;
			console.log(ord, preMin, preMax, mrgn, aMrgn, supMin, supMax, prov, nHab, nBan, clfEn);
			return querystring.stringify({
				ord: ord,
				preMin: preMin,
				preMax: preMax,
				mrgn: mrgn,
				aMrgn: aMrgn,
				supMin: supMin,
				supMax: supMax,
				prov: prov,
				nHab: nHab,
				nBan: nBan,
				clfEn: clfEn,
			});
		})();
	}

	public generarLista(): void {
		let params: string = this.catalogoParams();
		console.log(params);
		let catalogo = this.getCatalogo(params);
		this.mostrarInmuebles(catalogo);
	}
}
