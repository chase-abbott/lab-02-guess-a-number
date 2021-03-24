// import functions and grab DOM elements
import { checkIfCorrect } from './test/utils.js';
const userInput = document.getElementById('user-input');
const guessButton = document.getElementById('guess');
const retryButton = document.getElementById('retry');
const results = document.getElementById('results');


// initialize state
let clicks = 3;
let correctAnswer = Math.round(Math.random() * 20);

// set event listeners to update state and DOM
guessButton.addEventListener('click', () => {
    clicks--;
    if (checkIfCorrect(userInput.value, correctAnswer) === 'less than') {
        results.textContent = 'Go Lower! The answer is less than that!';
    };
    if (checkIfCorrect(userInput.value, correctAnswer) === 'greater than') {
        results.textContent = 'Go Higher! The answer is greater than that!';
    }
    if (checkIfCorrect(userInput.value, correctAnswer) === 'equal') {
        results.textContent = 'Great Job! You got it!';
    }
})

retryButton.addEventListener('click', () => {
    
})