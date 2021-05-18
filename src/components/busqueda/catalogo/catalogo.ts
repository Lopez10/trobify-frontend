const constructorDom = require('../../../../public/js/catalogo.js');
export class Catalogo {
	constructor() {}

	mostrarInmuebles(catalogo: Promise<any>) {
		const div = this.reiniciarInmuebles();

		catalogo.then((result) => {
			console.log(result);
			const resultado = document.getElementById('resultAmount');
			this.numeroResultados(resultado, result);
			result.forEach((item: any) => {
				constructorDom.catalogDom(div, item);
			});
		});
	}

	private numeroResultados(resultado: HTMLElement | null, result: any): void {
		if (resultado != null) {
			resultado.innerHTML = result.length;
			const plural = document.getElementById('plural');
			if (result.length == 1 && plural != null) plural.innerHTML = 'Resultado';
			else if (result.length != 1 && plural != null) plural.innerHTML = 'Resultados';
		}
	}

	private reiniciarInmuebles() {
		const div = document.getElementById('catalogo');
		if (div != null) div.innerHTML = '';
		return div;
	}
}
