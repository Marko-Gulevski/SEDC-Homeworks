'use strict'

// Write a function that will make an array of 5 numbers as an argument and return the sum. Write another function that checks if a number is a valid number and acll it of every number. If one of the numbers of the array is invalid show an error message instead of a result

function summarizer(fiveNumberArray) {
    let result = 0;
    for (let i = 0; i < fiveNumberArray.length; i++) {
        result += fiveNumberArray[i];
    }
    return result;
}

const arrayNumberFive = [1, 2, 3, 4, 5];
const summarizedArray = summarizer(arrayNumberFive);
console.log(summarizedArray);