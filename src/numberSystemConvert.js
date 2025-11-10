/**
 * convert binary string to number
 * @param {string} ch binary string
 * @returns {number} number
 */
export function charToDigit(ch) {
    return Number(ch); // allowed on single digit
}

/**
 * convert binary to decimal
 * @param {string} binaryString input number as binary string
 * @returns {number} number converted to decimal
 */
export function binaryToDecimal(binaryString) {
    let decimal = 0;
    let power = 0;

    for (let i = binaryString.length - 1; i >= 0; i--) {
        const digit = charToDigit(binaryString[i]);
        if (digit !== 0 && digit !== 1) throw new Error("Invalid binary digit");
        decimal += digit * (2 ** power);
        power++;
    }
    return decimal;
}

/**
 * convert decimal to binary
 * @param {number} decimal input number as decimal
 * @returns {string} number converted to binary string
 */
export function decimalToBinary(decimal) {
    if (decimal === 0) return "0";

    let result = "";
    let number = decimal;

    while (number > 0) {
        const remain = number % 2;
        result = String(remain) + result;
        number = Math.floor(number / 2);
    }
    return result;
}
