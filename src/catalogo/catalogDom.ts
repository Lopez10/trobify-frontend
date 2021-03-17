export function catalogDom(div: any, item: any) {
	let property = document.createElement('div');
	property.className = 'property_item';

	let photo = document.createElement('div');
	photo.className = 'photo';
	photo.style.backgroundImage = 'url(' + item.urlImg + ')';
	property.appendChild(photo);

	let content = document.createElement('div');
	content.className = 'content';

	let price = document.createElement('div');
	price.className = 'price';
	let priceTitle = document.createElement('div');
	priceTitle.className = 'label title-x2';
	let priceText = document.createElement('p');
	priceText.textContent = item.precio;
	priceTitle.appendChild(priceText);
	price.appendChild(priceTitle);
	content.appendChild(price);

	let location = document.createElement('div');
	location.className = 'location';
	let labelBold = document.createElement('div');
	labelBold.className = 'label bold';
	labelBold.textContent = 'Ubicacion del inmueble';
	location.appendChild(labelBold);
	content.appendChild(location);

	let features = document.createElement('div');
	features.className = 'features';

	let banos = document.createElement('div');
	banos.className = 'label bold';
	banos.textContent = item.nBan + ' Baños';
	features.appendChild(banos);

	let habitaciones = document.createElement('div');
	habitaciones.className = 'label bold';
	habitaciones.textContent = item.nHab + ' Habitaciones';
	features.appendChild(habitaciones);

	let superficie = document.createElement('div');
	superficie.className = 'label bold';
	superficie.textContent = item.area;
	features.appendChild(superficie);
	content.appendChild(features);

	let descripcion = document.createElement('div');
	descripcion.className = 'description label paragraph';
	descripcion.textContent = item.descrip;
	content.appendChild(descripcion);

	property.appendChild(content);
	div?.appendChild(property);
}
