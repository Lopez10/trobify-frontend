export class Hipoteca {
	precio: number;
	localizacion: string;

	constructor(precio: number, localizacion: string) {
		this.precio = precio;
		this.localizacion = localizacion;
	}

	calculoAhorro(ahorro: number) {
		return this.precio - ahorro;
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
		if (condicion == 'segundaMano') {
			this.precio = this.precio * 0.995;
		} else {
			this.precio = this.precio * 1.0005;
		}
	}

	calculoTotal(valorInteres: number, valorAhorro: number, anos: number) {
		return (valorAhorro += valorInteres * anos);
	}

	calculoCuotaMensual(valorTotal: number, anos: number) {
		return valorTotal / (anos * 12);
	}
}
