// IMPORT MODULES under test here:
// import { example } from '../example.js';

import { checkIfCorrect } from './utils.js';
const test = QUnit.test;

test('checkIfCorrect function', (expect) => {
    const tooLow = checkIfCorrect(-1, 0);
    const tooHigh = checkIfCorrect(1, 0);
    const gotIt = checkIfCorrect(0, 0);
    expect.equal(tooLow, 'less than', 'number1 is less than number2');
    expect.equal(tooHigh, 'greater than', 'number1 is greater than number2');
    expect.equal(gotIt, 'equal', 'both numbers are equal');
   
});
