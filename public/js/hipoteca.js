export function hipotecaDom(hipoteca) {
	let hipotecaForm = document.querySelector('#formularioHipoteca');
	document.getElementById('precio').value = hipoteca.precio;

	hipotecaForm.onsubmit = () => {
		const formData = new FormData(hipotecaForm);

		let condicionHipoteca = formData.get('condicion');
		let precio = formData.get('precio');
		let ahorro = formData.get('ahorro');
		let plazo = formData.get('plazo');
		let valorVariable = formData.get('valorVariable');
		let interes = formData.get('interes');

		let valorCondicionHipoteca = hipoteca.calculoCondicion(condicionHipoteca);
		let calculoAhorro = hipoteca.calculoAhorro(+precio, ahorro);
		let calculoInteres = hipoteca.calculoInteres(interes, valorVariable, calculoAhorro);
		let total = hipoteca.calculoTotal(
			calculoInteres,
			calculoAhorro,
			plazo,
			+valorCondicionHipoteca
		);
		let cuotaMensual = hipoteca.calculoCuotaMensual(total, plazo);
		console.log(interes, total, cuotaMensual);
		let totalDom = document.getElementById('total');
		total = Math.round(total);
		if (totalDom != null) totalDom.textContent = total.toString();
		let cuotaMensualDom = document.getElementById('cuotaMensual');
		cuotaMensual = Math.round(cuotaMensual);
		if (cuotaMensualDom != null) cuotaMensualDom.textContent = cuotaMensual.toString();
		return false;
	};
}
