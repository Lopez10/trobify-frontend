import http from 'http';

export class catalogo {
	getCatalogo() {
		const myRequest = 'http://localhost:3000';

		http.get(myRequest, (res) => {
			console.log(res);
		});
	}
}
