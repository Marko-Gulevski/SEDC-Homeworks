// Create a function that would determine the types of the paramater given

function determineType(subject) {
    let youAreThis = typeof subject;
    return youAreThis;
}

let odlucenTip = determineType("This")
let odlucenTip2 = determineType(20);
let odlucenTip3 = determineType(20 < 19);
let odlucenTip4 = determineType(null)
let odlucenTip5 = determineType();

console.log(odlucenTip);
console.log(odlucenTip2);
console.log(odlucenTip3);
console.log(odlucenTip4);
console.log(odlucenTip5);