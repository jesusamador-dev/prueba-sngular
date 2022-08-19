const Serie = require("../Serie");

const serie = new Serie();

describe("Pruebas unitarias para la serie de numeros triangulares", () => {
	test("Prueba 1", () => {
		expect(serie.numerosTriangulares(6)).toBe(21);
	});
	test("Prueba 2", () => {
		expect(serie.numerosTriangulares(7)).toBe(28);
	});
	test("Prueba 3", () => {
		expect(serie.numerosTriangulares(8)).toBe(36);
	});
	test("Prueba 4", () => {
		expect(serie.numerosTriangulares(9)).toBe(45);
	});
	test("Prueba 5", () => {
		expect(serie.numerosTriangulares(10)).toBe(55);
	});
	test("Prueba 6", () => {
		expect(serie.numerosTriangulares(1)).toBe(1);
	});
	test("Prueba 7", () => {
		expect(serie.numerosTriangulares(2)).toBe(3);
	});
	test("Prueba 8", () => {
		expect(serie.numerosTriangulares(3)).toBe(6);
	});
	test("Prueba 9", () => {
		expect(serie.numerosTriangulares(4)).toBe(10);
	});
	test("Prueba 10", () => {
		expect(serie.numerosTriangulares(5)).toBe(15);
	});
});

describe("Pruebas unitarias para la serie fibonacci", () => {
	test("Prueba 1", () => {
		expect(serie.fibonacci(8)).toBe(21);
	});
	test("Prueba 2", () => {
		expect(serie.fibonacci(9)).toBe(34);
	});
	test("Prueba 3", () => {
		expect(serie.fibonacci(10)).toBe(55);
	});
	test("Prueba 4", () => {
		expect(serie.fibonacci(11)).toBe(89);
	});
	test("Prueba 5", () => {
		expect(serie.fibonacci(12)).toBe(144);
	});
	test("Prueba 6", () => {
		expect(serie.fibonacci(13)).toBe(233);
	});
	test("Prueba 7", () => {
		expect(serie.fibonacci(14)).toBe(377);
	});
	test("Prueba 8", () => {
		expect(serie.fibonacci(15)).toBe(610);
	});
	test("Prueba 9", () => {
		expect(serie.fibonacci(16)).toBe(987);
	});
	test("Prueba 10", () => {
		expect(serie.fibonacci(17)).toBe(1597);
	});
});

describe("Pruebas unitarias para la serie de numeros primos", () => {
	test("Prueba 1", () => {
		expect(serie.numerosPrimos(8)).toBe(19);
	});
	test("Prueba 2", () => {
		expect(serie.numerosPrimos(9)).toBe(23);
	});
	test("Prueba 3", () => {
		expect(serie.numerosPrimos(10)).toBe(29);
	});
	test("Prueba 4", () => {
		expect(serie.numerosPrimos(11)).toBe(31);
	});
	test("Prueba 5", () => {
		expect(serie.numerosPrimos(12)).toBe(37);
	});
	test("Prueba 6", () => {
		expect(serie.numerosPrimos(13)).toBe(41);
	});
	test("Prueba 7", () => {
		expect(serie.numerosPrimos(14)).toBe(43);
	});
	test("Prueba 8", () => {
		expect(serie.numerosPrimos(15)).toBe(47);
	});
	test("Prueba 9", () => {
		expect(serie.numerosPrimos(16)).toBe(53);
	});
	test("Prueba 10", () => {
		expect(serie.numerosPrimos(17)).toBe(59);
	});
});
