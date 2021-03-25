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
let correctAnswer = Math.ceil(Math.random() * 20);


// set event listeners to update state and DOM
guessButton.addEventListener('click', () => {
    clicks--;
    console.log(correctAnswer);
    if (checkIfCorrect(userInput.value, correctAnswer) === 'equal') {
        guessButton.style.display = 'none';
        retryButton.style.display = 'block';
        results.textContent = 'Great Job! You win!';
        main.classList.add('correct');
    } else if (checkIfCorrect(userInput.value, correctAnswer) === 'less than') {
        results.textContent = `The answer is less than that! You have ${clicks} tries left!`;
    } else {
        results.textContent = `The answer is greater than that! You have ${clicks} tries left!`;
    };

    if (clicks < 1 && !(checkIfCorrect(userInput.value, correctAnswer) === 'equal')) {
        guessButton.style.display = 'none';
        retryButton.style.display = 'block';
        results.textContent = "You lose!";
        main.classList.add('wrong');
        wrongText.classList.remove('hidden');
    };  
});

retryButton.addEventListener('click', () => {
    // reset state
    clicks = 5;
    correctAnswer = Math.ceil(Math.random() * 20);
    
    guessButton.style.display = 'block';
    retryButton.style.display = 'none';
    userInput.value = '';
    results.textContent = '';
    main.classList.remove('wrong');
    main.classList.remove('correct');
    wrongText.classList.add('hidden');
    // location.reload(); can be used instead but reloads the page and feels really slow
});

