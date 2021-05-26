export function getForm() {
	var obj = {};

	Array.from(form.querySelectorAll(".dynamicFilter:not(.hideElement)")).forEach(
		(i) => {
			if (i.getAttribute("filterType") === "input") {
				Array.from(i.querySelectorAll("[filter]")).forEach((filter) => {
					if (filter.type === "checkbox") {
						if (filter.checked) obj[filter.name] = filter.checked;
					} else {
						if (!(filter.value === "")) obj[filter.name] = filter.type === "number" || "tel" ? parseInt(filter.value, 10) : filter.value;
					}
				});
			} else if (i.getAttribute("filterType") === "checkbox") {
				var cbs = Array.from(i.querySelectorAll("[filter]:checked"));
				if (cbs.length > 0) {
					obj[cbs[0].name] = [];
					cbs.forEach((cb) => {
						obj[cbs[0].name].push(cb.value);
					});
				}
			} else if (i.getAttribute("filterType") === "radio") {
				var rd = i.querySelectorAll("[filter]:checked");
				if (rd.length > 0)  obj[rd[0].name] = parseInt(rd[0].value, 10);
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
	//console.log(obj);
	return obj;
}