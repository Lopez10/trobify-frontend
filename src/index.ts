import { crearProvincias } from '../data/provincias';

crearProvincias();

let searchForm: HTMLFormElement =
	document.querySelector('#formSearch') || document.createElement('form');
searchForm.onsubmit = () => {
	const formData = new FormData(searchForm);
	let opt = (formData.get('opt') as unknown) as number;
	let prov = (formData.get('prov') as unknown) as number;
	let tpoInm = (formData.get('tpoInm') as unknown) as number;

	window.location.assign(
		'/public/busqueda.html?landing=1&opt=' + opt + '&prov=' + prov + '&tpoInm=' + tpoInm
	);
	return false;
};
