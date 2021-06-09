export interface Estrategia {
	ejecucion(object: any): void;
	formulario(object?: any): void;
}
