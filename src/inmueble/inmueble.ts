import axios from 'axios';
import { InmuebleInterface } from '../interface/inmueble.interface';
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
			let propertyType = formData.get('propertyType') as string;
			let propertyMethod = formData.get('propertyMethod') as string;
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
			//let clfEn = (formData.get('clfEn') as unknown) as number; // Por que no se puede seleccionar en ningún sitio
			const params: InmuebleInterface = {
				cantBanos: +bathroomCount,
				cantHab: +roomCount,
				caracteristicas: feature,
				descripcion: descripcion,
				direccion: place,
				estadoInmueble: estado,
				id_catastro: catast,
				superficie: +superficie,
				modalidad: +propertyMethod,
				precio: +precio,
				provincia: +provincia || 46,
				tipoVivienda: homeType,
				descuento: 0,
				energia: energia,
				tipoInmueble: propertyType,
				propietario: 1,
			};
			this.postInmueble(params);
			console.log(params);
			return false;
		};
	}
	async postInmueble(inmueble: any) {
		const myRequest = 'http://localhost:3000/inmueble';
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
