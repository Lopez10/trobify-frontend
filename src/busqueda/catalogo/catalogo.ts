import { catalogDom } from './dom.catalogo';

export class Catalogo {
	constructor() {}

	mostrarInmuebles(catalogo: Promise<any>) {
		const div = document.getElementById('catalogo');
		if (div != null) {
			div.innerHTML = '';
		}
		catalogo.then((result) => {
			const resultado = document.getElementById('resultAmount');
			if (resultado != null) {
				resultado.innerHTML = result.length;
				const plural = document.getElementById('plural');
				if (result.length == 1 && plural != null) {
					plural.innerHTML = 'Resultado';
				} else if (result.length != 1 && plural != null) {
					plural.innerHTML = 'Resultados';
				}
			}
			result.forEach((item: any) => {
				catalogDom(div, item);
			});
		});
	}
}
