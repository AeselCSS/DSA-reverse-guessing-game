import './styles/style.css';
import {init} from "./ui.ts";

// // global variables
// const startButton: HTMLButtonElement | null = document.querySelector('#start');
// const tooLowButton: HTMLButtonElement | null = document.querySelector('#tooLow');
// const tooHighButton: HTMLButtonElement | null = document.querySelector('#tooHigh');
// const correctButton: HTMLButtonElement | null = document.querySelector('#correct');
//
// const gameContainer: HTMLDivElement | null = document.querySelector('#game-container');
// const startGameContainer: HTMLDivElement | null = document.querySelector('#start-game-container');
// const guessContainer: HTMLDivElement | null = document.querySelector('#guess-container');
//
// const maxNumber: number = 100;
//
// let lastGuess: number = 0;
// let possibleGuesses: number[] = [];
//
// const visualizePossibleGuesses = () => {
//     const visualizationContainer = document.querySelector('#visualization');
//     if (visualizationContainer) {
//         visualizationContainer.innerHTML = '';
//
//         const allNumbers = Array.from({ length: maxNumber }, (_, i) => i + 1);
//
//         const combinedElements = allNumbers.map(i => {
//             const isAvailable = possibleGuesses.includes(i);
//             const className = isAvailable ? 'available' : 'not-available';
//             return `<div class="numberElement ${className}">${i}</div>`;
//         });
//
//         visualizationContainer.insertAdjacentHTML('beforeend', combinedElements.join(''));
//     }
// }
//
// const initPossibleGuesses = () => {
//     for (let i = 1; i <= maxNumber; i++) {
//         possibleGuesses.push(i);
//     }
// }
//
// const getRandomGuess = (): number => {
//     const randomIndex = Math.floor(Math.random() * possibleGuesses.length);
//     return possibleGuesses[randomIndex];
// }
//
// const handleTooLow = (guess: number) => {
//     possibleGuesses = possibleGuesses.filter(number => number > guess);
// }
//
// const handleTooHigh = (guess: number) => {
//     possibleGuesses = possibleGuesses.filter(number => number < guess);
// }
//
// const performGuess = () => {
//     const guess = getRandomGuess();
//     console.log(possibleGuesses);
//     outputToGuessContainer(`Computer guessed: ${guess}`);
//     lastGuess = guess;
//     visualizePossibleGuesses();
//     return guess;
// }
//
// const resetGame = () => {
//     if (guessContainer) {
//         guessContainer.innerHTML = '';
//     }
//     lastGuess = 0;
//     initPossibleGuesses()
// }
//
// const outputToGuessContainer = (message: string) => {
//     if (guessContainer) {
//         guessContainer.insertAdjacentHTML('beforeend', `<div>${message}</div>`);
//     }
// }
//
// const hideContainer = (container: HTMLDivElement | null) => {
//     if (container) {
//         container.classList.remove('visible');
//         container.classList.add('hidden');
//     }
// }
//
// const showContainer = (container: HTMLDivElement | null) => {
//     if (container) {
//         container.classList.remove('hidden');
//         container.classList.add('visible');
//     }
// }
//
// const initEventListeners = () => {
//     if (!startButton || !tooLowButton || !tooHighButton || !correctButton) {
//         console.error('One or more buttons are missing');
//         throw new Error('One or more buttons are missing');
//     }
//     // Event listener for the start button
//     startButton.addEventListener('click', () => {
//         console.log('Start button clicked');
//         resetGame();
//         showContainer(gameContainer);
//         hideContainer(startGameContainer);
//         outputToGuessContainer('Game started');
//         performGuess();
//     });
//
//     // Event listener for the too low button
//     tooLowButton.addEventListener('click', () => {
//         console.log('Too Low button clicked');
//         handleTooLow(lastGuess);
//         performGuess();
//     });
//
//     // Event listener for the too high button
//     tooHighButton.addEventListener('click', () => {
//         console.log('Too High button clicked');
//         handleTooHigh(lastGuess);
//         performGuess();
//     });
//
//     // Event listener for the correct button
//     correctButton.addEventListener('click', () => {
//         console.log('Correct button clicked');
//         outputToGuessContainer('The correct number was guessed');
//         outputToGuessContainer('Game over - press start to play again');
//         showContainer(startGameContainer);
//     });
// }



window.addEventListener('load', init);

