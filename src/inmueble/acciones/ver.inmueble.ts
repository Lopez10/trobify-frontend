import { Inmueble } from '../inmueble';
import { Mapa } from '../../busqueda/mapa/mapa';
import { obtenerProvincias } from '../../../data/provincias';

let inmueble = new Inmueble();
let mapa = new Mapa();

let datosInmueble = inmueble.getInmueble();

datosInmueble.then((data) => {
	mapa.mostrarMapa(datosInmueble, obtenerProvincias(), data.provincia, true);
	inmueble.verInmueble(data);
});
