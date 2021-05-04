import { Inmueble } from '../inmueble';

let inmueble = new Inmueble();

let datosInmueble = inmueble.getInmueble();

datosInmueble.then((data) => {
	inmueble.editarInmueble(data);
});
