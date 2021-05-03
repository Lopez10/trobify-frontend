export function editar(inmueble) {
	console.log(inmueble);
	let descripcion = document.getElementById('descripcion');
	let catastro = document.getElementById('catast');
	let venta = document.getElementById('venta');
	let alquiler = document.getElementById('alquiler');
	let stdo = document.getElementById('stdo');
	let prov = document.getElementById('provincias');
	let superficie = document.getElementById('superficie');
	let nBanos = document.getElementById('banos');
	let nHab = document.getElementById('hab');

	descripcion.innerHTML = inmueble.descripcion;
	catastro.value = inmueble.id_catastro;
	if (inmueble.modalidad === 1) venta.checked = true;
	if (inmueble.modalidad === 2) alquiler.checked = true;
	if (inmueble.estadoInmueble == 'Obra nueva') stdo.value = 1;
	if (inmueble.estadoInmueble == 'Buen estado') stdo.value = 2;
	if (inmueble.estadoInmueble == 'Reformado') stdo.value = 2;
	if (inmueble.estadoInmueble == 'A reformar') stdo.value = 2;
	prov.value = inmueble.provincia;
	superficie.value = inmueble.superficie;
	nBanos.value = inmueble.nBanos;
	nHab.value = inmueble.nHab;
}

export function inmuebleDom(inmueble) {
	console.log(inmueble);
	let precio = document.getElementById('precio');
	let superficie = document.getElementById('superficie');
	let nBanos = document.getElementById('nBan');
	let nHab = document.getElementById('nHab');
	let desc = document.getElementById('breveDescripcion');
	let ubi = document.getElementById('direccion');
	let imagenes = document.getElementById('imageGallery');
	let caract = document.getElementById('caract');
	let atras = document.getElementById('atras');
	precio.innerHTML = inmueble.precio;
	superficie.innerHTML = inmueble.superficie;
	nBanos.innerHTML = inmueble.nBanos;
	nHab.innerHTML = inmueble.nHab;
	desc.innerHTML = inmueble.descripcion;
	ubi.innerHTML = inmueble.direccion;
	caract.innerHTML = inmueble.caracteristicas;
	imagenes.src = inmueble.imagen[0];
	atras.href = 'http://localhost:8080/public/busqueda.html?prov=' + inmueble.provincia;
}
