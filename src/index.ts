import { catalogo } from './catalogo/index.catalogo';

let inmuebles = new catalogo();
let listadoInmuebles = inmuebles.getCatalogo();
listadoInmuebles.then((resultadoInmuebles) => {
	console.log(resultadoInmuebles.data);
});
