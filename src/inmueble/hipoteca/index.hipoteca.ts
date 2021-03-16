export class simuladorHipoteca {
	precio: number;
	localizacion: string;
	constructor(precio: number, localizacion: string) {
		this.precio = precio;
		this.localizacion = localizacion;
	}
	calculoAhorro(ahorro: number) {
		return this.precio - ahorro;
	}
	calculoInteres(interes: string, variable: number) {
		let interesFijo: number = 2;
		let valorInteres: number;
		if (interes == 'fijo') {
			valorInteres = interesFijo * this.precio;
		} else {
			valorInteres = variable * this.precio;
		}
		return valorInteres;
	}
	calculoCondicion(condicion: string) {
		if (condicion == 'segunda mano') {
		} else {
		}
	}
	calculoCuotaMensual(precioTotal: number, plazo: number) {
		return precioTotal / plazo;
	}
}
