import { obtenerProvincias } from '../../../../data/provincias';
import { Inmueble } from '../Inmueble';
const inm = require('../../../../public/js/inmueble.js');
const mapa = require('../../../../public/js/mapa.js');

export class Visualizar extends Inmueble {
	private provincias: any;
	private datosInmueble: Promise<any>;
	constructor() {
		super();
		this.provincias = obtenerProvincias();
		this.datosInmueble = this.getInmueble();
	}
	ejecucion() {
		this.datosInmueble.then((data) => {
			mapa.mostrarMapa(
				this.datosInmueble,
				this.provincias[data.provincia].latitud,
				this.provincias[data.provincia].longitud,
				this.provincias[data.provincia].zoom,
				true
			);
			inm.inmuebleDom(data);
		});
	}
}
let visualizarInmueble = new Visualizar();
visualizarInmueble.ejecucion();
