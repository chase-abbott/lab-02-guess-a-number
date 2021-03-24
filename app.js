// import functions and grab DOM elements
import { checkIfCorrect } from './test/utils.js';
const userInput = document.getElementById('user-input');
const guessButton = document.getElementById('guess');
const retryButton = document.getElementById('retry');
const results = document.getElementById('results');


// initialize state
let clicks = 3;
let correctAnswer = Math.round(Math.random() * 20);
console.log(correctAnswer);

// set event listeners to update state and DOM
guessButton.addEventListener('click', () => {
    clicks--;
   console.log(clicks);
    if (checkIfCorrect(userInput.value, correctAnswer) === 'less than') {
        results.textContent = `The answer is less than that! You have ${clicks} tries left!`;
    };
    if (checkIfCorrect(userInput.value, correctAnswer) === 'greater than') {
        results.textContent = `The answer is greater than that! You have ${clicks} tries left!`;
    };
    if (checkIfCorrect(userInput.value, correctAnswer) === 'equal') {
        results.textContent = 'Great Job! You win!';
    };
    if (clicks <= 0) {
        guessButton.disabled = true;
        results.textContent = "You lose!";
       
    }    
})

retryButton.addEventListener('click', () => {
    guessButton.disabled = false;
    results.textContent = '';
    
})