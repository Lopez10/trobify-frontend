import { Inmueble } from '../inmueble';
import { Mapa } from '../../busqueda/mapa/mapa';
import { obtenerProvincias } from '../../../../data/provincias';
const inm = require('../../../../public/js/inmueble.js');

let inmueble = new Inmueble();
let mapa = new Mapa();

let datosInmueble = inmueble.getInmueble();

datosInmueble.then((data) => {
	mapa.mostrarMapa(datosInmueble, obtenerProvincias(), data.provincia, true);
	inm.inmuebleDom(inmueble);
});
