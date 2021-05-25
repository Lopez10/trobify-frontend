export function modificarFiltro(opt, prov, tpoInm) {
	let provincia = document.getElementById('provincias');
	let option1 = document.getElementById('opt1');
	let option2 = document.getElementById('opt2');
	let tpoInmueble = document.getElementById('tpoInm');
	provincia.value = prov;
	option1.checked = opt == 1 ? true : false;
	option2.checked = opt == 2 ? true : false;
	tpoInmueble.value = tpoInm;
}

export function getForm() {
	var obj = {};

	Array.from(form.querySelectorAll(".dynamicFilter:not(.hideElement)")).forEach(
		(i) => {
			if (i.getAttribute("filterType") === "input") {
				Array.from(i.querySelectorAll("[filter]")).forEach((filter) => {
					obj[filter.name] =
						filter.type === "number"
							? parseInt(filter.value, 10) || 0
							: filter.value;
				});
			} else if (i.getAttribute("filterType") === "checkbox") {
				var cbs = Array.from(i.querySelectorAll("[filter]"));
				if (cbs.length > 0) {
					var name = i.querySelectorAll("[filter]")[0].name;
					obj[name] = [];
					cbs.forEach((cb) => {
						if (cb.checked) obj[name].push(cb.value);
					});
				}
			} else if (i.getAttribute("filterType") === "radio") {
				var rd = i.querySelectorAll("[filter]:checked");
				if (rd.length > 0) {
					obj[rd[0].name] = parseInt(rd[0].value, 10);
				} else {
					obj[i.querySelectorAll("[filter]")[0].name] = null;
					//console.warn("No radio button selected! Possibly causing struggles in backend side");
				}
			} else if (i.getAttribute("filterType") === "select") {
				var sl = i.querySelectorAll("select");
				obj[sl[0].name] = sl[0].value;
			} else {
				console.warn(
					"getForm(): Input type not defined or implemented:\n" + i.innerHTML
				);
			}
		}
	);
	console.log(obj);
	return obj;
}