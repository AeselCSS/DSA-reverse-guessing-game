import { resetGuessContainer } from "./utils.ts";

const maxNumber: number = 100;
let lastGuess: number = 0;
let highestNumber: number = maxNumber;
let lowestNumber: number = 1;

const getRandomGuess = (): number => {
    return Math.ceil((highestNumber - lowestNumber) / 2) + lowestNumber;
}

const handleTooLow = (guess: number) => {
    lowestNumber = guess + 1;
    console.log(`new lowestNumber: ${guess}`);
}

const handleTooHigh = (guess: number) => {
    highestNumber = guess - 1;
    console.log(`new highestNumber: ${guess}`);
}

const performGuess = () => {
    const guess = getRandomGuess();
    lastGuess = guess;
    return guess;
}

const resetGame = () => {
    resetGuessContainer();
    lastGuess = 0;
    highestNumber = maxNumber;
    lowestNumber = 0;
}

const getLastGuess = () => lastGuess;

const getHighestNumber = () => highestNumber;

const getLowestNumber = () => lowestNumber;

export { maxNumber, performGuess, handleTooLow, handleTooHigh, resetGame, getLastGuess, getHighestNumber, getLowestNumber };