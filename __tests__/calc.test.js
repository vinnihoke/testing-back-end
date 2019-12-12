const calculator = require('../calculator.js');

let valueA = 2
let valueB = 2

test('add', () => {
	let expectedResult = 4
	let result = calculator.add(valueA, valueB)
	expect(result).toBe(expectedResult)
});

test('multiply', () => {
	let expectedResult = 4
	let result = calculator.multiply(valueA, valueB);
	expect(result).toBe(expectedResult)
})

test('divide', () => {
	let expectedResult = 1
	let result = calculator.divide(valueA, valueB);
	expect(result).toBe(expectedResult);
})

test('subtract', () => {
	let expectedResult = 0
	let result = calculator.subtract(valueA, valueB);
	expect(result).toBe(expectedResult);
})