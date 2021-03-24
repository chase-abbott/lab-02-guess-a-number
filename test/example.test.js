// IMPORT MODULES under test here:
// import { example } from '../example.js';

import { checkIfCorrect } from './utils.js';
const test = QUnit.test;

test('time to test a function', (expect) => {
    const tooLow = checkIfCorrect(-1);
    const tooHigh = checkIfCorrect(1);
    const gotIt = checkIfCorrect(0);
    expect.equal(tooLow, true);
    expect.equal(tooHigh, true);
    expect.equal(gotIt, true);
   
});
