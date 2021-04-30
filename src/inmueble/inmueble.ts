import axios from 'axios';

export class Inmueble {
	constructor() {
		this.aplicarFiltros();
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

	aplicarFiltros() {
		let registroForm: HTMLFormElement =
			document.querySelector('#formNewProperty') || document.createElement('form');
		registroForm.onsubmit = () => {
			const formData = new FormData(registroForm);
			let propertyType = (formData.get('propertyType') as unknown) as number;
			let propertyMethod = (formData.get('propertyMethod') as unknown) as number;
			let catast = (formData.get('catast') as unknown) as number;
			let place = formData.get('place') as string;
			let descripcion = formData.get('descripcion') as string;
			let provincia = (formData.get('provincia') as unknown) as number;
			let superficie = (formData.get('superficie') as unknown) as number;
			let precio = (formData.get('precio') as unknown) as number;
			let homeType = (formData.get('homeType') as unknown) as number;
			let roomCount = (formData.get('roomCount') as unknown) as number;
			let bathroomCount = (formData.get('bathroomCount') as unknown) as number;

			let feature = ((formData.getAll('feature') as unknown) as Array<String>).join(',') as string;
			//let clfEn = (formData.get('clfEn') as unknown) as number; // Por que no se puede seleccionar en ningún sitio
			let params = {
				cantBanos: bathroomCount,
				cantHab: roomCount,
				caracteristicas: feature,
				descripcion: descripcion,
				direccion: place,
				estadoInmueble: propertyType,
				id_catastro: catast,
				superficie: superficie,
				modalidad: propertyMethod,
				precio: precio,
				provincia: provincia || 46,
				tipoVivienda: homeType,
				descuento: 0,
				energia: 'A++',
				tipoInmueble: 'Vivienda',
				propietario: 1,
			};
			this.postInmueble(params);

			return false;
		};
	}
	async postInmueble(inmueble: any) {
		const myRequest = 'http://localhost:3000/login';
		axios.post(myRequest, inmueble).then(
			(response) => {
				console.log(response.data);
				if (response.data == true) {
					window.location.replace('http://localhost:8080/public/busqueda.html');
				}
			},
			(error) => console.log(error)
		);
	}
}
