import axios from 'axios';

export class Inmueble {
	constructor() {
		this.getInmueble();
	}
	async getInmueble() {
		const myRequest = 'http://localhost:3000/inmueble/:id';
		let inmueble = await axios.get(myRequest).then((result) => {
			return result.data;
		});
		return inmueble;
	}
}
