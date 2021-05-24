import { Estrategia } from './Estrategia';

export class Context {
	private estrategia: Estrategia;
	constructor(estrategia: Estrategia) {
		this.estrategia = estrategia;
	}

	setEstrategia(estrategia: Estrategia) {
		this.estrategia = estrategia;
	}
	ejecutarEstatregia() {
		return this.estrategia.formulario();
	}
}
