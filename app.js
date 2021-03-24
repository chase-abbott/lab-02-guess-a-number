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
    
})

retryButton.addEventListener('click', () => {
    console.log('button');
})