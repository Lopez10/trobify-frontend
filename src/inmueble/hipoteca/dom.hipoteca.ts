import { Hipoteca } from './hipoteca';
export function hipotecaDom() {
	let hipotecaForm: HTMLFormElement =
		document.querySelector('#formularioHipoteca') || document.createElement('form');
	let localizacion: string = 'Valencia';

	hipotecaForm.onsubmit = () => {
		const formData = new FormData(hipotecaForm);

		let condicionHipoteca = formData.get('condicion') as string;
		let precio = (formData.get('precio') as unknown) as number;
		let ahorro = (formData.get('ahorro') as unknown) as number;
		let plazo = (formData.get('plazo') as unknown) as number;
		let valorVariable = (formData.get('valorVariable') as unknown) as number;
		let interes = formData.get('interes') as string;
		console.log(condicionHipoteca, precio, ahorro, plazo, interes);
		let hipoteca = new Hipoteca(precio, localizacion);
		let valorCondicionHipoteca = hipoteca.calculoCondicion(condicionHipoteca);
		let calculoAhorro = hipoteca.calculoAhorro(ahorro);
		let calculoInteres = hipoteca.calculoInteres(interes, valorVariable, calculoAhorro);
		let total = hipoteca.calculoTotal(calculoInteres, calculoAhorro, plazo);
		let cuotaMensual = hipoteca.calculoCuotaMensual(total, plazo);
		console.log(total, hipoteca.calculoCuotaMensual(total, plazo));
		let totalDom = document.getElementById('total');
		total = Math.round(total);
		if (totalDom != null) totalDom.textContent = total.toString();
		let cuotaMensualDom = document.getElementById('cuotaMensual');
		cuotaMensual = Math.round(cuotaMensual);
		if (cuotaMensualDom != null) cuotaMensualDom.textContent = cuotaMensual.toString();
		return false;
	};
}
