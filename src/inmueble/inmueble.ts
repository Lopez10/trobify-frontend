import axios from 'axios';
const imagenes = require('../../public/js/imagenes.js');
export class Inmueble {
	constructor() {
		this.aplicarRegistro();
	}
	async getInmueble() {
		let params = this.obtenerParametros();
		const myRequest = 'http://localhost:3000/inmueble/' + params.catastroId + '/' + params.modo;

		let inmueble = await axios.get(myRequest).then((result) => {
			console.log(result.data);
			return result.data;
		});
		return await inmueble;
	}

	private obtenerParametros(): any {
		let queryString = window.location.search;
		let urlParams = new URLSearchParams(queryString);
		let catastroId = urlParams.get('catastro');
		let modo = urlParams.get('modo');
		return { catastroId, modo };
	}

	aplicarRegistro() {
		let registroForm: HTMLFormElement =
			document.querySelector('#formNewProperty') || document.createElement('form');
		registroForm.onsubmit = () => {
			const formData = new FormData(registroForm);
			let propertyType = formData.get('propertyType') as string;
			let catast = formData.get('catast') as string;
			let place = formData.get('place') as string;
			let descripcion = formData.get('descripcion') as string;
			let estado = formData.get('stdo') as string;
			let energia = formData.get('energia') as string;
			let provincia = formData.get('provincia') as string;
			let superficie = formData.get('superficie') as string;
			let precio = formData.get('precio') as string;
			let homeType = formData.get('homeType') as string;
			let roomCount = formData.get('roomCount') as string;
			let bathroomCount = formData.get('bathroomCount') as string;
			let feature = ((formData.getAll('feature') as unknown) as Array<String>).join(',');
			let propertyMethod = ((formData.getAll('propertyMethod') as unknown) as Array<String>).join(
				','
			);
			let modo = propertyMethod.split(',').map((x) => +x);
			let caract = feature.split(',').map((x) => +x);

			//let clfEn = (formData.get('clfEn') as unknown) as number; // Por que no se puede seleccionar en ningún sitio
			const params: any = {
				cantBanos: +bathroomCount,
				cantHab: +roomCount,
				caracteristicas: caract,
				descripcion: descripcion,
				direccion: place,
				estadoInmueble: +estado,
				id_catastro: catast,
				superficie: +superficie,
				modalidad: modo,
				precio: +precio,
				provincia: +provincia || 46,
				tipoVivienda: +homeType,
				descuento: 0,
				energia: +energia,
				tipoInmueble: +propertyType,
				propietario: 1,
				id_imagen: imagenes.getImageGalleryValues(),
			};
			this.postInmueble(params);
			console.log(params);
			return false;
		};
	}
	async postInmueble(inmueble: any) {
		axios({
			method: 'post',
			url: 'http://localhost:3000/inmueble',
			data: inmueble,
			headers: { 'Content-Type': 'multipart/form-data' },
		})
			.then(function (response) {
				console.log(response.data);
				if (response.data == true) {
					window.location.replace('http://localhost:8080/public/busqueda.html');
				}
			})
			.catch(function (response) {
				console.log(response);
			});
	}
}
