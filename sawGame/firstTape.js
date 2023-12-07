// Play Tape One

const beginGame = new Audio();
beginGame.src = './tapes/helloIvan.mp3'

// Typing Effect

const textTypeEffect = document.getElementById('textTyping');
const typeThis = "Hello Ivan, I want to play a game. Your entire life you have taught and measured other people's futures, now it is time for you to learn your lesson. Will you gain a new appreciation for life or will this be your final failure? Live or Die, make your choice"

function typingEffect(element, typeThis, t = 0) {
    if (t === 0) {
        element.textContent = "";
    }

    element.textContent += typeThis[t];

    if (t === typeThis.length - 1) {
        return;
    }

    setTimeout(() => typingEffect(element, typeThis, t + 1), 60);
}

typingEffect(textTypeEffect, typeThis);