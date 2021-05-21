import { Inmueble } from '../inmueble';
const editar = require('../../../../public/js/editar.js');

let inmueble = new Inmueble();

let datosInmueble = inmueble.getInmueble();

datosInmueble.then((data) => {
	editar.editar(data);
	inmueble.aplicarEditar();
	inmueble.escuchaEliminar(data.id_catastro);
});
