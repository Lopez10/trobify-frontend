import axios from 'axios';
export class Singleton {
	private static instance: Singleton;
	private constructor() {}
	public static getInstance(): Singleton {
		if (Singleton.instance == null) {
			Singleton.instance = new Singleton();
		}
		return Singleton.instance;
	}

	public async accesoAPI(tipo: string, ruta: string, objeto?: any) {
		const myRequest = 'http://localhost:3000/';
		if (tipo == 'get') {
			console.log(myRequest + ruta);
			return await axios.get(myRequest + ruta).then((result) => {
				return result.data;
			});
		} else if (tipo == 'post') {
			return await axios.post(myRequest + ruta, objeto).then((result) => {
				return result.data;
			});
		} else if (tipo == 'put') {
			return await axios.put(myRequest + ruta, objeto).then((result) => {
				return result.data;
			});
		} else if (tipo == 'delete') {
			return await axios
				.delete(myRequest + ruta, { data: { id_catastro: objeto } })
				.then((result) => {
					return result.data;
				});
		}
	}
}
