export interface InmuebleInterface {
	id_catastro: string;
	id_tipoInmueble: number;
	id_estadoInmueble: number;
	id_certifEner: number;
	imagen: string[];
	breveDescripcion: string;

	id_tipoVivienda: number;
	nHab: number;
	nBano: number;
	nCocina: number;
	id_caractSecundaria: number[];
	extras?: string[];
	publicar: number;

	id_modalidad: number[];
	precio: String[];
	descuento: number;
	id_usuario: number;
}
