import { crearProvincias } from '../../data/provincias';
const form = require('../../public/js/form.js');

crearProvincias();

let searchForm: HTMLFormElement =
	document.querySelector('#formSearch') || document.createElement('form');
searchForm.onsubmit = () => {
	let obj = form.getForm();
	window.location.assign(
		'/public/busqueda.html?opt=' + obj.opt + '&prov=' + obj.prov + '&tpoInm=' + obj.tpoInm
	);
	return false;
};
