export interface InmuebleInterface {
	id_catastro: string;
	id_tipoInmueble: number;
	id_estadoInmueble: number;
	id_certifEner: number;
	imagen: string[];
	superficie: number;
	breveDescripcion: string;
	direccion: string;
	id_provincia: number;
	longitud?: number;
	latitud?: number;

	id_tipoVivienda: number;
	nHab: number;
	nBano: number;
	nCocina: number;
	id_caractSecundaria: number[];
	extras?: string[];

	id_modalidad: number[];
	precio: number;
	descuento: number;
	id_usuario: number;
}
