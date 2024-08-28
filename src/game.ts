const maxNumber: number = 100;
let lastGuess: number = 0;
let possibleGuesses: number[] = [];

const initPossibleGuesses = () => {
    possibleGuesses = [];
    for (let i = 1; i <= maxNumber; i++) {
        possibleGuesses.push(i);
    }
}

const getRandomGuess = (): number => {
    const randomIndex = Math.floor(Math.random() * possibleGuesses.length);
    return possibleGuesses[randomIndex];
}

const handleTooLow = (guess: number) => {
    possibleGuesses = possibleGuesses.filter(number => number > guess);
}

const handleTooHigh = (guess: number) => {
    possibleGuesses = possibleGuesses.filter(number => number < guess);
}

const performGuess = () => {
    const guess = getRandomGuess();
    lastGuess = guess;
    return guess;
}

const resetGame = () => {
    lastGuess = 0;
    initPossibleGuesses();
}

const getLastGuess = () => lastGuess;

const getpossibleGuesses = () => possibleGuesses;

export { maxNumber, initPossibleGuesses, performGuess, handleTooLow, handleTooHigh, resetGame, getLastGuess, getpossibleGuesses };