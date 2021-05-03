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
