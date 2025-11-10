import { binaryToDecimal, decimalToBinary, charToDigit } from './src/numberSystemConvert.js';
/**
 * The main function which calls the application.
 * This application can convert any number from binary to decimal system or from decimal to binary system.
 * @param {string} inputNumber number that is being converted
 * @param {number} inputNumberSystem numerical system that the inputNumber is being converted from
 * @param {number} outputNumberSystem numerical system that the inputNumber is being converted into
 * @returns {string} containing number converted to output system
 */
export function main(inputNumber, inputNumberSystem, outputNumberSystem) {
	let decimalValue;

	// input convert system (binary to decimal or decimal to binary)
	if (inputNumberSystem === 2) {
		decimalValue = binaryToDecimal(inputNumber);
	} else if (inputNumberSystem === 10) {
		decimalValue = 0;
		for (let i = 0; i < inputNumber.length; i++) {
			const digit = charToDigit(inputNumber[i]);
			decimalValue = decimalValue * 10 + digit;
		}
	} else {
		throw new Error(`Input number system not supported: ${inputNumberSystem}`);
	}

	// output of convert system
	let dtoOut;
	if (outputNumberSystem === 10) {
		dtoOut = String(decimalValue);
	} else if (outputNumberSystem === 2) {
		dtoOut = decimalToBinary(decimalValue);
	} else {
		throw new Error(`Output number system not supported: ${outputNumberSystem}`);
	}

	return dtoOut;
}

/**
 * Function which returns which number systems are permitted on input.
 * @returns {Array<number>} permitted input systems
 */
export function permittedInputSystems() {
	return [10, 2];
}

/**
 * Function which returns which number systems are permitted on output.
 * @returns {Array<number>} permitted output systems
 */
export function permittedOutputSystems() {
	return [10, 2];
}