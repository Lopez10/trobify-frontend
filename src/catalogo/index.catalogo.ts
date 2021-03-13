import axios from 'axios';

export class Catalogo {
	constructor() {
		this.getCatalogo();
	}
	async getCatalogo() {
		const myRequest = 'http://localhost:3000/catalogo';
		let inmuebles = await axios.get(myRequest).then((result) => {
			return result.data;
		});
		return inmuebles;
	}

	listadoInmuebles() {
		let inmuebles = new Catalogo();
		let listadoInmuebles = inmuebles.getCatalogo();
		return listadoInmuebles;
	}

	mostrarInmuebles(catalogo: Promise<any>) {
		const div = document.getElementById('catalogo');
		catalogo.then((result) => {
			result.forEach((item: any) => {
				let property = document.createElement('div');
				property.className = 'property_item';
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
				let labelBoldBanos = document.createElement('div');
				labelBoldBanos.className = 'label bold';
				labelBoldBanos.textContent = item.banos;
				features.appendChild(labelBoldBanos);
				content.appendChild(features);

				property.appendChild(content);
				div?.appendChild(property);
			});
		});
	}
}
