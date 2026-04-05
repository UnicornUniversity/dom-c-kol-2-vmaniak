/**
 * Loads the input binary number and converts it to a decimal number.
 * @param {string} inputNumber number that is being converted
 * @param {number} inputNumberSystem numerical system that the inputNumber is being converted from
 * @param {number} outputNumberSystem numerical system that the inputNumber is being converted into
 * @returns {string} containing number converted to output system
 */
export function main(inputNumber, inputNumberSystem, outputNumberSystem) {
  // Initialize the result to zero.
  let decimalResult = 0;

  // Sequentially process each digit from the most significant bit to the least significant bit.
  for (let digitIndex = 0; digitIndex < inputNumber.length; digitIndex += 1) {
    const currentDigit = Number(inputNumber[digitIndex]);

    // Calculate the exponent and the value of the current digit.
    const exponent = inputNumber.length - digitIndex - 1;
    const digitValue = currentDigit * (2 ** exponent);

    // Add the value of the current digit to the result.
    decimalResult += digitValue;
  }

  // Return the final decimal result.
  return String(decimalResult);
}

/**
 * Function which returns which number systems are permitted on input.
 * @returns {Array} array of numbers refering to permitted input systems
 */
export function permittedInputSystems() {
	return [2];
}

/**
 * Function which returns which number systems are permitted on output.
 * @returns {Array} array of numbers refering to permitted output systems
 */
export function permittedOutputSystems() {
	return [10];
}
