import { Editar } from './acciones/Editar.inmueble';
import { Eliminar } from './acciones/Eliminar.inmueble';
import { Registrar } from './acciones/Registrar.inmueble';
import { Context } from './Context';

export class Acciones {
	constructor() {
		var pathname = this.leerUrl();

		this.realizarAccion(pathname);
	}
	private leerUrl() {
		let pathname = window.location.pathname;

		return pathname.substring(pathname.lastIndexOf('/') + 1, pathname.lastIndexOf('.'));
	}

	realizarAccion(action: string) {
		let context = new Context(new Eliminar());
		if (action == 'editar') {
			context.setEstrategia(new Editar());
		}
		if (action == 'eliminar') {
			context.setEstrategia(new Eliminar());
		}
		if (action == 'registrar') {
			context.setEstrategia(new Registrar());
		}

		context.ejecutarEstatregia();
	}
}

let acciones = new Acciones();
