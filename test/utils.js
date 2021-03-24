export function checkIfCorrect(guess, correctNumber) {
    if (guess > correctNumber) return 'less than';

    if (guess < correctNumber) return 'greater than';

    return 'equal';
}