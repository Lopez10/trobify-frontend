import { hipoteca } from './prueba';
let precio = 654765;
let ahorro = 10321;
let calculoTotal = hipoteca.calculoTotal(
	hipoteca.calculoInteres('variable', 2, precio - ahorro),
	precio - ahorro,
	10,
	0.995
);

test('Calculo del ahorro', () => {
	expect(hipoteca.calculoAhorro(precio, ahorro)).toBe(644444);
});
// 654765 - 10321 = 644444

test('Calculo del interes fijo', () => {
	expect(Math.round(hipoteca.calculoInteres('fijo', 0, precio - ahorro))).toBe(11278);
});
//(1.75 * 644444) / 100 = 11277,77

test('Calculo del interes variable', () => {
	expect(Math.round(hipoteca.calculoInteres('variable', 2, precio - ahorro))).toBe(12889);
});
//(2 * 644444) / 100 = 12888,88

test('Calculo de la condicion', () => {
	expect(hipoteca.calculoCondicion('segundaMano')).toBe(0.995);
});

test('Calculo de la condicion', () => {
	expect(hipoteca.calculoCondicion('ejemplo')).toBe(1.0005);
});

test('Calculo Total', () => {
	expect(
		Math.round(
			hipoteca.calculoTotal(
				hipoteca.calculoInteres('variable', 2, precio - ahorro),
				precio - ahorro,
				10,
				0.995
			)
		)
	).toBe(777777);
});
//644444+12888.88*10*0.995 = 772688,356

test('calculo de la cuota mensual', () => {
	expect(Math.round(hipoteca.calculoCuotaMensual(calculoTotal, 30))).toBe(2146);
});
//772688,356/(30*12) = 2146,35654444

//valorAhorro += valorInteres * anos * condicion;
//calculoInteres = 1.5*(654765-10321)
