const construccionDOM = require('../../../../public/js/hipoteca.js');
export class Hipoteca {
	precio: number;

	constructor() {
		this.precio = this.obtenerPrecio() || 0;
		console.log(this.precio);
	}

	calculoAhorro(precio: number, ahorro: number) {
		return precio - ahorro;
	}

	calculoInteres(interes: string, variable: number, ahorro: number) {
		let interesFijo: number = 1.75;
		let valorInteres: number;
		if (interes == 'fijo') {
			valorInteres = (interesFijo * ahorro) / 100;
		} else {
			valorInteres = (variable * ahorro) / 100;
		}
		return valorInteres;
	}

	calculoCondicion(condicion: string) {
		return condicion == 'segundaMano' ? 0.995 : 1.0005;
	}

	calculoTotal(valorInteres: number, valorAhorro: number, anos: number, condicion: number) {
		return (valorAhorro += valorInteres * anos) * condicion;
	}

	calculoCuotaMensual(valorTotal: number, anos: number) {
		return valorTotal / (anos * 12);
	}
	obtenerPrecio() {
		let queryString = window.location.search;
		let urlParams = new URLSearchParams(queryString);
		let precio = urlParams.get('precio');

		if (precio) return +precio;
	}
}

let hipoteca = new Hipoteca();

construccionDOM.hipotecaDom(hipoteca);
