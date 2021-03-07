import axios from 'axios';

export class catalogo {
	constructor() {
		this.getCatalogo();
	}
	getCatalogo() {
		const myRequest = 'http://localhost:3000/catalogo';

		axios.get(myRequest).then((response) => {
			console.log(response);
		});
	}
}
let ejemplo = new catalogo();
ejemplo.getCatalogo();
