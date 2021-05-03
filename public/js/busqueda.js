export function modificarFiltro(opt, prov, tpoInm) {
<<<<<<< Updated upstream
	console.log(tpoInm);
=======
	//console.log(opt);
>>>>>>> Stashed changes
	let provincia = document.getElementById('provincias');
	let option1 = document.getElementById('opt1');
	let option2 = document.getElementById('opt2');
	let tpoInmueble = document.getElementById('tpoInm');
	provincia.value = prov;
	option1.checked = opt == 1 ? true : false;
	option2.checked = opt == 2 ? true : false;
	tpoInmueble.value = tpoInm;
}
