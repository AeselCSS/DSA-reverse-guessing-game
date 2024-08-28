import { performGuess, handleTooLow, handleTooHigh, resetGame, getLastGuess } from './game';
import { hideContainer, showContainer, outputToGuessContainer, visualizePossibleGuesses } from './utils';

const startButton: HTMLButtonElement | null = document.querySelector('#start');
const tooLowButton: HTMLButtonElement | null = document.querySelector('#tooLow');
const tooHighButton: HTMLButtonElement | null = document.querySelector('#tooHigh');
const correctButton: HTMLButtonElement | null = document.querySelector('#correct');

const gameContainer: HTMLDivElement | null = document.querySelector('#game-container');
const startGameContainer: HTMLDivElement | null = document.querySelector('#start-game-container');

const initEventListeners = () => {
    if (!startButton || !tooLowButton || !tooHighButton || !correctButton) {
        console.error('One or more buttons are missing');
        throw new Error('One or more buttons are missing');
    }

    startButton.addEventListener('click', () => {
        console.log('Start button clicked');
        resetGame();
        showContainer(gameContainer);
        hideContainer(startGameContainer);
        outputToGuessContainer('Game started');
        const guess = performGuess();
        outputToGuessContainer(`Computer guessed: ${guess}`);
        visualizePossibleGuesses();
    });

    tooLowButton.addEventListener('click', () => {
        console.log('Too Low button clicked');
        handleTooLow(getLastGuess());
        const guess = performGuess();
        outputToGuessContainer(`Computer guessed: ${guess}`);
        visualizePossibleGuesses();
    });

    tooHighButton.addEventListener('click', () => {
        console.log('Too High button clicked');
        handleTooHigh(getLastGuess());
        const guess = performGuess();
        outputToGuessContainer(`Computer guessed: ${guess}`);
        visualizePossibleGuesses();
    });

    correctButton.addEventListener('click', () => {
        console.log('Correct button clicked');
        outputToGuessContainer('The correct number was guessed');
        outputToGuessContainer('Game over - press start to play again');
        showContainer(startGameContainer);
    });
}

const init = () => {
    initEventListeners();
    hideContainer(gameContainer);
}

export { init };