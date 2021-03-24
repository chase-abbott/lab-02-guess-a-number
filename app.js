// import functions and grab DOM elements
import { checkIfCorrect } from './test/utils.js';
const userInput = document.getElementById('user-input');
const guessButton = document.getElementById('guess');
const retryButton = document.getElementById('retry');
const results = document.getElementById('results');
const main = document.getElementById('main');
const wrongText = document.getElementById('wrong-text');



// initialize state
let clicks = 5;
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
        guessButton.style.display = 'none';
        retryButton.style.display = 'block';
        results.textContent = 'Great Job! You win!';
        main.classList.add('correct');
    };

    if (clicks < 1) {
        guessButton.style.display = 'none';
        retryButton.style.display = 'block';
        results.textContent = "You lose!";
        main.classList.add('wrong');
        
    };  

    if (checkIfCorrect(userInput.value, correctAnswer) === 'equal' && clicks <= 1) {
        guessButton.style.display = 'none';
        retryButton.style.display = 'block';
        main.classList.add('wrong');
        results.textContent = 'Great Job! You win!';
    };   
});

retryButton.addEventListener('click', () => {
    clicks = 5;
    correctAnswer = Math.round(Math.random() * 20);
    // location.reload(); can be used instead but reloads the page and feels really slow
    guessButton.style.display = 'block';
    retryButton.style.display = 'none';
    userInput.value = '';
    results.textContent = '';
    main.classList.remove('wrong');
    main.classList.remove('correct');
    wrongText.classList.add('hidden');
});

