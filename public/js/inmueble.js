export function inmuebleDom(inmueble) {
	const queryString = window.location.search;
	const urlParams = new URLSearchParams(queryString);
	let modalidad = urlParams.get('modo');
	console.log(inmueble);
	let precio = document.getElementById('precio');
	let imagenes = document.getElementById('imageGallery');
	document.getElementById('superficie').innerHTML = inmueble.superficie;
	document.getElementById('nBan').innerHTML = inmueble.nBanos;
	document.getElementById('nHab').innerHTML = inmueble.nHab;
	document.getElementById('breveDescripcion').innerHTML = inmueble.descripcion;
	document.getElementById('direccion').innerHTML = inmueble.direccion;
	//let caract = document.getElementById('caract');
	//caract.innerHTML = inmueble.caracteristicas;
	if (modalidad == 1) {
		precio.innerHTML = inmueble.precio[0];
	} else {
		precio.innerHTML = inmueble.precio[1];
	}
	inmueble.imagen.forEach((item) => {
		console.log(item);
		let img = document.createElement('img');
		img.src = item;
		imagenes.appendChild(img);
	});

	let tpoInm = 3;
	if (inmueble.tipoInmueble == 'Vivienda') {
		tpoInm = 3;
	} else if (inmueble.tipoInmueble == 'Garaje') {
		tpoInm = 1;
	} else {
		tpoInm = 2;
	}
}
