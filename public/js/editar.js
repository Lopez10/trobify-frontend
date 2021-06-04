export function editar(inmueble) {
	console.log(inmueble);
	document.getElementById('tpoInm').value = inmueble.tipoInmueble;
	document.getElementById('descripcion').innerHTML = inmueble.descripcion;
	document.getElementById('catast').value = inmueble.id_catastro;
	document.getElementById('stdo').value = inmueble.estadoInmueble;
	document.getElementById('banos').value = inmueble.nBanos;
	document.getElementById('homeType').value = inmueble.tipoVivienda;
	document.getElementById('energia').value = inmueble.energia;
	document.getElementById('hab').value = inmueble.nHab;
	document.getElementById('visibility').value = inmueble.publicado;
	document
		.getElementById('deleteButton')
		.setAttribute('href', './eliminar.html?catastro=' + inmueble.id_catastro);

	let precioA = document.getElementById('precio2');
	let alquiler = document.getElementById('propertyMethodR');
	let venta = document.getElementById('propertyMethodS');
	let precioV = document.getElementById('precio1');

	inmueble.modalidad.forEach((element) => {
		if (element === 1) {
			venta.checked = true;
			precioV.value = inmueble.precio[0];
		} else {
			alquiler.checked = true;
			precioA.value = inmueble.precio[1];
		}
	});
	inmueble.caracteristicas.forEach(function (value) {
		document.getElementById(value).checked = true;
	});

	addImages(inmueble.imagen);
}
