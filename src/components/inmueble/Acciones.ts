import { EstrategiaEditar } from './acciones/editar.inmueble';
import { EstrategiaEliminar } from './acciones/eliminar.inmueble';
import { EstrategiaRegistrar } from './acciones/registro.inmueble';
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
		console.log(action);
		let context = new Context(new EstrategiaEliminar());
		if (action == 'editar') {
			context.setEstrategia(new EstrategiaEditar());
		}
		if (action == 'eliminar') {
			context.setEstrategia(new EstrategiaEliminar());
		}
		if (action == 'registrar') {
			context.setEstrategia(new EstrategiaRegistrar());
		}

		context.ejecutarEstatregia();
	}
}

let acciones = new Acciones();
