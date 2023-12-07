// Play Tape Challenge #1
const beginPuzzle1 = new Audio();
beginPuzzle1.src = './tapes/tapePuzzleOne.mp3'

// Typing Effect

const typingEffect = document.getElementById('puzzleOneText');
const typeThis = "A teacher's job is to make sure his students are aware of his accomplishments. In the first class, you told your students the percentile with which you graduated. Put the answer in the box if you want to move one step closer towards returning to your family. If memory has given up on you, I've placed the numbers somewhere on this page. Remember sometimes you look better when MOVING AWAY, rather than MOVING CLOSER!";

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

// Puzzle #1

let buttonAnswer = document.getElementById('guessButton');

let numberAnswer = 70;

buttonAnswer.addEventListener('click', function (guessFunction) {
    let input = document.getElementById('userInput').value;
    if (input == numberAnswer) {
        window.location.href = 'puzzleTwoPage.html';
    } else if (input < numberAnswer || input > numberAnswer) {
        window.location.href = 'gameOverScreen1.html';
    }
})

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
        window.location.href = 'gameOverScreen1.html'
    }

    seconds = seconds < 10 ? '0' + seconds : seconds;
    countdownElement.innerHTML = `${minutes}:${seconds}`;

    time--;
}

if (time <= 0) {
    clearInterval(updateTimer);
    window.location.href = 'gameOverScreen1.html'
}