import { Estrategia } from './Estrategia';

export class Context {
	private estrategia!: Estrategia;

	setEstrategia(estrategia: Estrategia) {
		this.estrategia = estrategia;
	}
	ejecutarEstatregia() {
		return this.estrategia.formulario();
	}
}
