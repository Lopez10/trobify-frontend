import { Inmueble } from '../inmueble';
import { obtenerProvincias } from '../../../../data/provincias';
const inm = require('../../../../public/js/inmueble.js');
const mapa = require('../../../../public/js/mapa.js');

let inmueble = new Inmueble();

let datosInmueble = inmueble.getInmueble();
let provincias = obtenerProvincias();

datosInmueble.then((data) => {
	console.log(data);
	mapa.mostrarMapa(
		datosInmueble,
		provincias[data.provincia].latitud,
		provincias[data.provincia].longitud,
		provincias[data.provincia].zoom,
		true
	);
	inm.inmuebleDom(data);
});
