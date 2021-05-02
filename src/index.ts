import { obtenerProvincias, crearProvincias } from '../data/provincias';
import { Busqueda } from './busqueda/busqueda';
import querystring from 'querystring';

crearProvincias();
async function prueba() {
	let params: string;
	let searchForm: HTMLFormElement =
		document.querySelector('#formSearch') || document.createElement('form');
	searchForm.onsubmit = () => {
		const formData = new FormData(searchForm);
		let opt = (formData.get('method') as unknown) as number;
		let prov = (formData.get('provincia') as unknown) as number;
		let tpoViv = (formData.get('type') as unknown) as number;

		params = querystring.stringify({
			opt: opt,
			prov: prov,
			tpoViv: tpoViv,
		});

		//crearBusqueda(params, prov);
		// window.location.replace(
		// 	'http://localhost:8080/public/busqueda.html?prov=' +
		// 		prov +
		// 		'&opt=' +
		// 		opt +
		// 		'&tpoViv=' +
		// 		tpoViv
		// );
		let busqueda = new Busqueda();
		return false;
	};
}
prueba();
function crearBusqueda(params: string, prov: number) {
	console.log(params);
	let busqueda = new Busqueda();
	// let inmuebles = busqueda.getInmuebles(params);
	// console.log(inmuebles);
	// busqueda.crearMapa(prov || 0, inmuebles);
	// busqueda.crearCatalogo(inmuebles);
}
