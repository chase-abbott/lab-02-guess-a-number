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
    console.log(correctAnswer);
    if (checkIfCorrect(userInput.value, correctAnswer) === 'less than') {
        results.textContent = `The answer is less than that! You have ${clicks} tries left!`;
    };

    if (checkIfCorrect(userInput.value, correctAnswer) === 'greater than') {
        results.textContent = `The answer is greater than that! You have ${clicks} tries left!`;
    };

    if (checkIfCorrect(userInput.value, correctAnswer) === 'equal') {
        guessButton.disabled = true;
        guessButton.style.display = 'none';
        results.textContent = 'Great Job! You win!';
    };

    if (clicks < 1) {
        guessButton.disabled = true;
        guessButton.style.display = 'none';
        results.textContent = "You lose!";
    };  

    if (checkIfCorrect(userInput.value, correctAnswer) === 'equal' && clicks <= 1) {
        guessButton.disabled = true;
        guessButton.style.display = 'none';
        results.textContent = 'Great Job! You win!';
    };   
});

retryButton.addEventListener('click', () => {
    guessButton.disabled = false;
    guessButton.style.display = 'block';
    results.textContent = '';
    clicks = 3;
    correctAnswer = Math.round(Math.random() * 20);
});

