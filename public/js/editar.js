export function editar(inmueble) {
	console.log(inmueble);
	//let tpoInm = document.getElementById('tpoInm');
	console.log(inmueble);
	let descripcion = document.getElementById('descripcion');
	let catastro = document.getElementById('catast');
	let venta = document.getElementById('propertyMethodS');
	let alquiler = document.getElementById('propertyMethodR');
	let stdo = document.getElementById('stdo');
	let nBanos = document.getElementById('banos');
	let nHab = document.getElementById('hab');
	let precioV = document.getElementById('precio1');
	let precioA = document.getElementById('precio2');
	let tipoViv = document.getElementById('homeType');
	let gallery = document.getElementById('imageOptions');

	let ascensor = document.getElementById('ascensor');
	let amueblado = document.getElementById('amueblado');
	let terraza = document.getElementById('terraza');
	let acondicionado = document.getElementById('acondicionado');
	let empotrado = document.getElementById('empotrado');
	let garaje = document.getElementById('garaje');
	let piscina = document.getElementById('piscina');
	let jardin = document.getElementById('jardin');

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
	} else if (inmueble.modalidad === 1) {
		precioV.value = inmueble.precio;
	} else if (inmueble.modalidad === 2) {
		precioA.value = inmueble.precio;
	}

	nBanos.value = inmueble.nBanos;
	nHab.value = inmueble.nHab;
	inmueble.caracteristicas.forEach(function (value) {
		console.log(value);
		if (value === 'Ascensor') ascensor.checked = true;
		if (value === 'Amueblado') amueblado.checked = true;
		if (value === 'Garaje') garaje.checked = true;
		if (value === 'Jardin') jardin.checked = true;
		if (value === 'Piscina') piscina.checked = true;
	});

	addImages(inmueble.imagen);
}
