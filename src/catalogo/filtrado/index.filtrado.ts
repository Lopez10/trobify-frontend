import { Catalogo } from '../index.catalogo';
import querystring from 'querystring';

export class Filtrado extends Catalogo {
	public catalogoParams(): string {
		let catalogoForm: HTMLFormElement =
			document.querySelector('#filtroForm') || document.createElement('form');
		const formData = new FormData(catalogoForm);
		return querystring.stringify({
			opt: (formData.get('opt') as unknown) as number,
			ord: (formData.get('orden') as unknown) as number,
			preMin: (formData.get('preMin') as unknown) as number,
			preMax: (formData.get('preMax') as unknown) as number,
			mrgn: (formData.get('umbral') as unknown) as number,
			aMrgn: (formData.get('boolUmbral') as unknown) as number,
			supMin: (formData.get('supMin') as unknown) as number,
			supMax: (formData.get('supMax') as unknown) as number,
			prov: (formData.get('provincia') as unknown) as number,
			nHab: (formData.get('h') as unknown) as number,
			nBan: (formData.get('b') as unknown) as number,
			clfEn: (formData.get('clfEn') as unknown) as number,
		});
	}

	public generarLista(): void {
		let params: string = this.catalogoParams();
		let catalogo = this.getCatalogo(params);
		this.mostrarInmuebles(catalogo);
	}
}
