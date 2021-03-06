import * as request from 'request';

export class catalogo {
	getCatalog() {
		let options: any = {
			headers: {
				'User-Agent': 'request',
			},
		};
		request.get('http://localhost:3000/catalogo', options, (err, res, body) => {
			console.log(body);
		});
	}
}
