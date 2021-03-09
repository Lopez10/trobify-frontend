import { catalogo } from './catalogo/index.catalogo';

let inmuebles = new catalogo();
let listadoInmuebles = inmuebles.getCatalogo();
listadoInmuebles.then((result) => {
	console.log(result);
});
