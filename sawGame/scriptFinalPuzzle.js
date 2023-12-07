// Interactive keyboard
const wordDisplay = document.querySelector(".wordDisplay");
const keyboardDiv = document.querySelector(".keyboardWithLetters");
const guessesDisplay = document.querySelector(".guessesLeft b");
const hangmanUpdate = document.querySelector(".hangmanBox img")
// Word to guess
let currentPuzzle, correctLetters = [], wrongGuessCount = 0;

const maxGuesses = 6;

let wordList = ["marko"];
function getPuzzleAnswer() {
    const puzzleAnswer = wordList[0];
    currentPuzzle = wordList[0];
    console.log(puzzleAnswer);
    wordDisplay.innerHTML = puzzleAnswer.split("").map(() => `<li class="letter"></li>`).join("");
}

function initGame(button, clickedLetter) {
    if (currentPuzzle.includes(clickedLetter)) {
        [...currentPuzzle].forEach((letter, index) => {
            if (letter === clickedLetter) {
                correctLetters.push(letter);
                wordDisplay.querySelectorAll("li")[index].innerText = letter;
                wordDisplay.querySelectorAll("li")[index].classList.add("guessed");
            }
        })
    } else {
        wrongGuessCount++;
        hangmanUpdate.src = `images/hangman-${wrongGuessCount}.svg`
    }
    button.disabled = true;
    guessesDisplay.innerText = `${wrongGuessCount} / ${maxGuesses}`;

    if (wrongGuessCount === maxGuesses) {
        window.location.href = "gameOverScreen3.html"
    }
    if (correctLetters.length === currentPuzzle.length) {
        window.location.href = "victoryScreen.html"
    }
}

for (let b = 97; b < 123; b++) {
    const button = document.createElement("button");
    button.innerText = String.fromCharCode(b)
    keyboardDiv.appendChild(button)
    button.addEventListener("click", e => initGame(e.target, String.fromCharCode(b)));
}

getPuzzleAnswer();

// Play Tape Challenge #3
const beginPuzzle3 = new Audio();
beginPuzzle3.src = './tapes/finalTape.mp3'

// Typing Effect

const typingEffect = document.getElementById('puzzleThreeText');
const typeThis = "Although rarely with children, but always with students, teachers's tend to have favorites. To achieve freedom you must select your favorite student to guess the name of your captor. Live or Die, make your choice!";

function textTypingEffect(element, typeThis, t = 0) {
    if (t === 0) {
        element.textContent = ''
    }

    element.textContent += typeThis[t];

    if (t === typeThis.length - 1) {
        return;
    }

    setTimeout(() => textTypingEffect(element, typeThis, t + 1), 60);

}

textTypingEffect(typingEffect, typeThis);

// Timer

const startingMinutes = 3.5;
let time = startingMinutes * 60;

const countdownElement = document.getElementById("countdownTimer");

setInterval(updateTimer, 1000);

function updateTimer() {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;
    if (time <= 0) {
        clearInterval(updateTimer);
        window.location.href = 'gameOverScreen2.html'
    }

    seconds = seconds < 10 ? '0' + seconds : seconds;
    countdownElement.innerHTML = `${minutes}:${seconds}`;

    time--;
}

if (time <= 0) {
    clearInterval(updateTimer);
    window.location.href = 'gameOverScreen2.html'
}