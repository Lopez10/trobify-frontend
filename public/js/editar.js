export function editar(inmueble) {
	console.log(inmueble);
	//let tpoInm = document.getElementById('tpoInm');
	console.log(inmueble);
	let descripcion = document.getElementById('descripcion');
	let catastro = document.getElementById('catast');
	let venta = document.getElementById('propertyMethodS');
	let alquiler = document.getElementById('propertyMethodR');
	let stdo = document.getElementById('stdo');
	let prov = document.getElementById('provincias');
	let superficie = document.getElementById('superficie');
	let nBanos = document.getElementById('banos');
	let nHab = document.getElementById('hab');
	let precioV = document.getElementById('precio1');
	let precioA = document.getElementById('precio1');
	let direccion = document.getElementById('direccion');
	let tipoViv = document.getElementById('homeType');
	let gallery = document.getElementById('imageOptions');

	//tpoInm.value = inmueble.tpoInm;
	descripcion.innerHTML = inmueble.descripcion;
	catastro.value = inmueble.id_catastro;
	if (inmueble.modalidad === 1) venta.checked = true;
	if (inmueble.modalidad === 2) alquiler.checked = true;
	if (inmueble.estadoInmueble == 'Obra nueva') stdo.value = 1;
	if (inmueble.estadoInmueble == 'Buen estado') stdo.value = 2;
	if (inmueble.estadoInmueble == 'Reformado') stdo.value = 2;
	if (inmueble.estadoInmueble == 'A reformar') stdo.value = 2;
	if (typeof inmueble.precio == 'array') {
		precioV.value = inmueble.precio[0];
		precioA.value = inmueble.precio[1];
	} else {
		precioV.value = inmueble.precio;
	}
	direccion.innerHTML = inmueble.direccion;
	prov.value = inmueble.provincia;
	superficie.value = inmueble.superficie;
	nBanos.value = inmueble.nBanos;
	nHab.value = inmueble.nHab;

	addImages(inmueble.imagen);
}
