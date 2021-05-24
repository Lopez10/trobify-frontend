import { EstrategiaEditar } from './acciones/editar.inmueble';
import { EstrategiaEliminar } from './acciones/eliminar.inmueble';
import { EstrategiaRegistrar } from './acciones/registro.inmueble';
import { Context } from './Context';

export class Acciones {
	constructor() {
		this.realizarAccion('editar');
	}
	private realizarAccion(action: string) {
		console.log(action);
		let context = new Context();
		if (action == 'editar') {
			context.setEstrategia(new EstrategiaEditar());
		}
		if (action == 'eliminar') {
			context.setEstrategia(new EstrategiaEliminar());
		}
		if (action == 'registrar') {
			context.setEstrategia(new EstrategiaRegistrar());
		}

		let result = context.ejecutarEstatregia();
	}
}
