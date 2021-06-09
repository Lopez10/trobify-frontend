class HipotecaTest {
	calculoAhorro(precio: number, ahorro: number) {
		return precio - ahorro;
	}

	calculoInteres(interes: string, variable: number, ahorro: number) {
		let interesFijo: number = 1.75;
		let valorInteres: number;
		if (interes == 'fijo') {
			valorInteres = (interesFijo * ahorro) / 100;
		} else {
			valorInteres = (variable * ahorro) / 100;
		}
		return valorInteres;
	}

	calculoCondicion(condicion: string) {
		return condicion == 'segundaMano' ? 0.995 : 1.0005;
	}

	calculoTotal(valorInteres: number, valorAhorro: number, anos: number, condicion: number) {
		return (valorAhorro += valorInteres * anos * condicion);
	}

	calculoCuotaMensual(valorTotal: number, anos: number) {
		return valorTotal / (anos * 12);
	}
}

export const hipoteca = new HipotecaTest();
