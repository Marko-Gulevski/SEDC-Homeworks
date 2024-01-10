'use strict'

// Get Buttons
const valOne = document.getElementById('valOne');
const valTwo = document.getElementById('valTwo');
const valThree = document.getElementById('valThree');
const valFour = document.getElementById('valFour');
const valFive = document.getElementById('valFive');
const valSix = document.getElementById('valSix');
const valSeven = document.getElementById('valSeven');
const valEight = document.getElementById('valEight');
const valNine = document.getElementById('valNine');
const valZero = document.getElementById('valZero');
const clrBtn = document.getElementById('clearButton');
const mulBtn = document.getElementById('multiplyButton');
const addBtn = document.getElementById('plusButton');
const subBtn = document.getElementById('minusButton');
const bSpaceBtn = document.getElementById('backspaceButton');
const decBtn = document.getElementById('decimalButton');
const equalsBtn = document.getElementById('equalsButton');
const diviBtn = document.getElementById('divideButton');

// Setting up the display field
const displayField = document.getElementById('userInput');
displayField.maxLength = 12;
let errorReport = false;

// Limiting the amount of button clicks that display in the input field
const clickMax = (value) => {
    if (!errorReport && displayField.value.length < displayField.maxLength) {
        displayField.value += value;
    } else {
        displayField.value = 'Error';
        errorReport = true;
    }
};

// Event Listeners for Buttons
valOne.addEventListener('click', () => {
    clickMax(valOne.value);
});

valTwo.addEventListener('click', () => {
    clickMax(valTwo.value);
});

valThree.addEventListener('click', () => {
    clickMax(valThree.value);
});

valFour.addEventListener('click', () => {
    clickMax(valFour.value);
});

valFive.addEventListener('click', () => {
    clickMax(valFive.value);
});

valSix.addEventListener('click', () => {
    clickMax(valSix.value);
});

valSeven.addEventListener('click', () => {
    clickMax(valSeven.value);
});

valEight.addEventListener('click', () => {
    clickMax(valEight.value);
});

valNine.addEventListener('click', () => {
    clickMax(valNine.value);
});

valZero.addEventListener('click', () => {
    clickMax(valZero.value);
});

let sortNumbers = [];
let sortOperators = [];

addBtn.addEventListener('click', () => {
    sortNumbers.push(parseFloat(displayField.value));
    sortOperators.push(addBtn.value);
    displayField.value = ' ';
});

subBtn.addEventListener('click', () => {
    sortNumbers.push(parseFloat(displayField.value));
    sortOperators.push(subBtn.value);
    displayField.value = ' ';
});

mulBtn.addEventListener('click', () => {
    sortNumbers.push(parseFloat(displayField.value));
    sortOperators.push(mulBtn.value);
    displayField.value = ' ';
});

diviBtn.addEventListener('click', () => {
    sortNumbers.push(parseFloat(displayField.value));
    sortOperators.push(diviBtn.value);
    displayField.value = ' ';
});

decBtn.addEventListener('click', () => {
    displayField.value += decBtn.value;
});

bSpaceBtn.addEventListener('click', () => {
    displayField.value = displayField.value.slice(0, -1);
});

clrBtn.addEventListener('click', () => {
    displayField.value = ' ';
    sortNumbers = [];
    sortOperators = [];
    errorReport = false
});

equalsBtn.addEventListener('click', () => {
    sortNumbers.push(parseFloat(displayField.value));
    // Multiply and Division prio
    for (let i = 0; i < sortOperators.length; i++) {
        if (sortOperators[i] === "*" || sortOperators[i] === "/") {
            let num1 = sortNumbers[i];
            let num2 = sortNumbers[i + 1];
            switch (sortOperators[i]) {
                case "*":
                    sortNumbers.splice(i, 2, num1 * num2);
                    sortOperators.splice(i, 1);
                    i--;
                    break;
                case "/":
                    if (num2 !== 0) {
                        sortNumbers.splice(i, 2, num1 / num2);
                        sortOperators.splice(i, 1);
                        i--;
                    } else {
                        displayField.value = 'Error';
                        return; // Exit for dividing with zero
                    }
                    break;
                default:
                    break;
            }
        }
    }
    // Add and subtract
    let result = sortNumbers[0];
    for (let i = 0; i < sortOperators.length; i++) {
        let someNum = sortNumbers[i + 1];
        switch (sortOperators[i]) {
            case "+":
                result += someNum;
                break;
            case "-":
                result -= someNum;
                break;
            default:
                break;
        }
    }

    // Regulate maxLength
    if (result.toString().length > displayField.maxLength) {
        displayField.value = 'Error';
    } else {
        // Please show me the result
        displayField.value = result;
    }

    // Clear the arrays
    sortNumbers = [];
    sortOperators = [];
});
