'use strict'

import videoGamesList from "../Folder With Lists/videoGamesList.js"

// Hangman Elements
const keyboardWithLetters = document.getElementById('keyboardWithLetters');
const wordDisplay = document.getElementById('wordDisplay');
const guessesText = document.querySelector(".guessesLeft b");
const updateHangman = document.querySelector('#hangmanBox img');

let theAnswer, correctLetters = [], incorrectGuesses = 0;
const maxGuesses = 6;

const selectWord = () => {
    const { word, hint } = videoGamesList[Math.floor(Math.random() * videoGamesList.length)];
    theAnswer = word;
    document.querySelector('.hintText b').innerText = hint;

    // Clear previous word display
    wordDisplay.innerHTML = '';

    // Create display for each character, including spaces
    word.split("").forEach(char => {
        const li = document.createElement('li');
        li.className = char === ' ' ? 'space' : 'letters';
        wordDisplay.appendChild(li);
    });
};

// Setting the Game Up
const startGame = (button, letterClicked) => {
    let isCorrectGuess = false;

    [...theAnswer].forEach((letter, index) => {
        if (letter === letterClicked) {
            wordDisplay.querySelectorAll('li')[index].innerText = letter;
            wordDisplay.querySelectorAll('li')[index].classList.add('guessed');
            correctLetters.push(letter);
            isCorrectGuess = true;
        }
    });

    if (!isCorrectGuess) {
        incorrectGuesses++;
        updateHangman.src = `../Hangman Images/hangman-${incorrectGuesses}.svg`;
    }

    button.disabled = true;
    guessesText.innerText = `${incorrectGuesses} / ${maxGuesses}`;
    // So that the final hangman pic or final letter can show up
    if (incorrectGuesses === maxGuesses) {
        setTimeout(() => {
            alert(`The word was: ${theAnswer}`);
        }, 200)
        setTimeout(() => {
            playAgainOption();
        }, 600)
    }

    if (correctLetters.filter(letter => letter !== ' ').length === theAnswer.replace(/ /g, '').length) {
        setTimeout(() => {
            alert('You WON');
        }, 500)
        setTimeout(() => {
            playAgainOption();
        }, 500);
    }
};

const playAgainOption = () => {
    let playAgain = confirm("Play Again?");
    if (playAgain) {
        window.location.href = "indexGames.html";
    } else {
        window.location.href = "../Hangman Homepage/index.html";
    }
}

selectWord();

// Creating the Keyboard
for (let i = 97; i < 123; i++) {
    const buttons = document.createElement('button');
    buttons.innerText = String.fromCharCode(i);
    keyboardWithLetters.appendChild(buttons);
    buttons.addEventListener('click', e => startGame(e.target, String.fromCharCode(i)));
}
