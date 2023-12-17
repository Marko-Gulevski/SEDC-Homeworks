'use strict'

const gatherValues = (arrayToSum) => {
    let largestNumber = -Infinity;
    let smallestNumber = Infinity;
    let result = 0;
    for (let i = 0; i < arrayToSum.length; i++) {
        if (largestNumber < arrayToSum[i]) {
            largestNumber = arrayToSum[i];
        } if (smallestNumber > arrayToSum[i]) {
            smallestNumber = arrayToSum[i]
        }
        result = largestNumber + smallestNumber;
    }
    return result;
}

const numbersTogether = [25, 33, 45, 505, 10];
const finalValues = gatherValues(numbersTogether);
console.log(finalValues);