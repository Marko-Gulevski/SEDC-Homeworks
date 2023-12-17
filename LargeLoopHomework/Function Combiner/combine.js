'use strict'

// Write a JS function that: When given any array of strings will create one big string and return it!

// function combineStrings(noStringsAttached) {
//     let combineThem = ""

//     for (let i = 0; i < noStringsAttached.length; i++) {
//         combineThem += noStringsAttached[0] + ' ' + noStringsAttached[1] + ' ' + noStringsAttached[2] + ' ' + noStringsAttached[3] + ' ' + noStringsAttached[4];

//         return combineThem;
//     }
// }


// const stringerRinger = ["Marko", "is", "learning", "through", "homeworks"];
// const finalString = combineStrings(stringerRinger);
// console.log(finalString);

// Actual result 

function combineSentence(stringSentence) {
    for (let i = 0; i < stringSentence.length; i++) {
        return stringSentence.join(" ");
    }

}

const wordsInSentence = ["Marko", "is", "learning", "through", "homeworks"];
const finalizedSentence = combineSentence(wordsInSentence);
console.log(finalizedSentence);