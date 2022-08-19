class Serie {
	numerosTriangulares(num) {
		let result = 0;
		for (let index = 1; index <= num; index++) {
			result = index + result;
		}
		return result;
	}

	fibonacci(num) {
		let prev1 = 1;
		let prev2 = 0;
		let result = 0;

		if (num <= 1) return num;

		for (let i = 2; i <= num; i++) {
			result = prev1 + prev2;
			prev2 = prev1;
			prev1 = result;
		}

		return result;
	}

	numerosPrimos(num) {
		if (num <= 1) return num;
		let index = 2;
		let result = 1;
		let aux = 1;
		let isPrimo = false;
		while (aux <= num) {
			isPrimo = true;
			for (let j = 2; j < index; j++) {
				if (index % j === 0) isPrimo = false;
			}

			if (isPrimo) {
				result = index;
				aux++;
			}
			index++;
		}
		return result;
	}
}

module.exports = Serie;
