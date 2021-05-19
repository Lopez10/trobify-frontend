export function catalogDom(div, item) {
	let ver = document.createElement('a');
	ver.href =
		'http://localhost:8080/public/inmueble.html' +
		'?catastro=' +
		item.id_catastro +
		'&modo=' +
		item.id_modalidad;

	let property = document.createElement('div');
	property.className = 'property_item';

	let photo = document.createElement('div');
	photo.className = 'photo';
	photo.style.backgroundImage = 'url(' + item.urlImg + ')';
	ver.appendChild(photo);
	property.appendChild(ver);

	let content = document.createElement('div');
	content.className = 'content';

	let price = document.createElement('div');
	price.className = 'price';
	let priceTitle = document.createElement('div');
	priceTitle.className = 'label title-x2';
	priceTitle.textContent = formatterEuro.format(item.precio);
	price.appendChild(priceTitle);
	content.appendChild(price);

	let location = document.createElement('div');
	location.className = 'location';
	let labelBold = document.createElement('div');
	labelBold.className = 'label bold';
	labelBold.textContent = item.direccion;
	location.appendChild(labelBold);
	content.appendChild(location);

	let features = document.createElement('div');
	features.className = 'features';

	if (item.nBano != null && item.nHab != null) {
		let banos = document.createElement('div');
		banos.className = 'label bold';
		banos.textContent = 'Baños: ' + item.nBano;
		features.appendChild(banos);

		let habitaciones = document.createElement('div');
		habitaciones.className = 'label bold';
		habitaciones.textContent = 'Habitaciones: ' + item.nHab;
		features.appendChild(habitaciones);
	}

	let sup = document.createElement('sup');
	sup.textContent = '2';
	let superficie = document.createElement('div');
	superficie.className = 'label bold';
	superficie.textContent = 'Superficie: ' + item.superficie + ' m';
	superficie.appendChild(sup);
	features.appendChild(superficie);
	content.appendChild(features);

	let descripcion = document.createElement('div');
	descripcion.className = 'description label paragraph';
	descripcion.textContent = item.breveDescripcion;
	content.appendChild(descripcion);

	property.appendChild(content);

	div?.appendChild(property);
}

export function inmueblePropietarioDom(div, item) {
	let ver = document.createElement('a');
	ver.href =
		'http://localhost:8080/public/inmueble.html' +
		'?catastro=' +
		item.id_catastro +
		'&modo=' +
		item.id_modalidad;

	let property = document.createElement('div');
	property.className = 'property_item';

	let photo = document.createElement('div');
	photo.className = 'photo';
	photo.style.backgroundImage = 'url(' + item.urlImg + ')';
	ver.appendChild(photo);
	property.appendChild(ver);

	let content = document.createElement('div');
	content.className = 'content';

	let price = document.createElement('div');
	price.className = 'price';
	let priceTitle = document.createElement('div');
	priceTitle.className = 'label title-x2';
	priceTitle.textContent = formatterEuro.format(item.precio);
	price.appendChild(priceTitle);
	content.appendChild(price);

	let location = document.createElement('div');
	location.className = 'location';
	let labelBold = document.createElement('div');
	labelBold.className = 'label bold';
	labelBold.textContent = item.direccion;
	location.appendChild(labelBold);
	content.appendChild(location);

	let features = document.createElement('div');
	features.className = 'features';

	if (item.nBano != null && item.nHab != null) {
		let banos = document.createElement('div');
		banos.className = 'label bold';
		banos.textContent = 'Baños: ' + item.nBano;
		features.appendChild(banos);

		let habitaciones = document.createElement('div');
		habitaciones.className = 'label bold';
		habitaciones.textContent = 'Habitaciones: ' + item.nHab;
		features.appendChild(habitaciones);
	}

	let sup = document.createElement('sup');
	sup.textContent = '2';
	let superficie = document.createElement('div');
	superficie.className = 'label bold';
	superficie.textContent = 'Superficie: ' + item.superficie + ' m';
	superficie.appendChild(sup);
	features.appendChild(superficie);
	content.appendChild(features);

	let descripcion = document.createElement('div');
	descripcion.className = 'description label paragraph';
	descripcion.textContent = item.breveDescripcion;
	content.appendChild(descripcion);

	// Codigo cambia
	let actions = document.createElement('div');
	actions.className = 'actions';
	let editar = document.createElement('a');
	editar.className = 'button';
	editar.href =
		'http://localhost:8080/public/editar.html' +
		'?catastro=' +
		item.id_catastro +
		'&modo=' +
		item.id_modalidad;
	editar.textContent = 'Editar';
	actions.appendChild(editar);
	content.appendChild(actions);
	// Hasta aqui

	property.appendChild(content);

	div?.appendChild(property);
}

const formatterEuro = new Intl.NumberFormat('de-DE', {
	style: 'currency',
	currency: 'EUR',
	maximumFractionDigits: 0,
});
