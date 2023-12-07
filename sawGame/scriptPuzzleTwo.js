// Play Tape Challenge #1
const beginPuzzle2 = new Audio();
beginPuzzle2.src = './tapes/tapePuzzleTwo.mp3'

// Typing Effect

const typingEffect = document.getElementById('puzzleTwoText');
const typeThis = "Daily you are obsessed with hiding objects in plain sight. If you want to go back to your family you must reveal SHE who hides objects. Watch out, this CASE may be a little SENSITIVE. Live or Die, Make your choice!";

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

// Flashlight Effect

let positionFlash = document.documentElement;
positionFlash.addEventListener('mousemove', e => {
    positionFlash.style.setProperty('--x', e.clientX + 'px')
    positionFlash.style.setProperty('--y', e.clientY + 'px')
})