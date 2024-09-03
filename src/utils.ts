import { maxNumber, getLowestNumber, getHighestNumber} from "./game.ts";

const guessContainer: HTMLDivElement | null = document.querySelector('#guess-container');
const visualizationContainer: HTMLDivElement | null = document.querySelector('#visualization');

const resetGuessContainer = () => {
    if (guessContainer) {
        guessContainer.innerHTML = '';
    }
}

const outputToGuessContainer = (message: string) => {
    if (guessContainer) {
        guessContainer.insertAdjacentHTML('beforeend', `<div>${message}</div>`);
    }
}

const hideContainer = (container: HTMLDivElement | null) => {
    if (container) {
        container.classList.remove('visible');
        container.classList.add('hidden');
    }
}

const showContainer = (container: HTMLDivElement | null) => {
    if (container) {
        container.classList.remove('hidden');
        container.classList.add('visible');
    }
}

const visualizePossibleGuesses = () => {
    if (visualizationContainer) {
        visualizationContainer.innerHTML = '';

        const allNumbers = Array.from({ length: maxNumber }, (_, i) => i + 1);
        const lowestNumber = getLowestNumber();
        const highestNumber = getHighestNumber();

        const allNumbersInRange = allNumbers.filter(i => i >= lowestNumber && i <= highestNumber);
        console.log(allNumbersInRange);

        const combinedElements = allNumbers.map(i => {
            const isAvailable = allNumbersInRange.includes(i);
            const className = isAvailable ? 'available' : 'not-available';
            return `<div class="numberElement ${className}">${i}</div>`;
        });

        visualizationContainer.insertAdjacentHTML('beforeend', combinedElements.join(''));
    }
}

export { hideContainer, showContainer, outputToGuessContainer, visualizePossibleGuesses, resetGuessContainer };