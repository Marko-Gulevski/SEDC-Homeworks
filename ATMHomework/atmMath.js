// Write a JS script for an ATM that should return "Not enough money" if you request more money. Should return the amount withdrawn and money left on the account if you have enough. Make it work with prompt

let moneyWanted = prompt("Please enter the amount you would like to withdraw");
const moneyOnAccount = 25000;

if (moneyWanted > moneyOnAccount || moneyWanted < 0) {
    alert("I am afraid that the amount you requested is not available on your account")
} else if (moneyWanted <= moneyOnAccount) {
    let moneyLeft = moneyOnAccount - moneyWanted;
    alert(`You have withdrawn ${moneyWanted} dollars and are left with ${moneyLeft} dollars`)
} else if (isNaN(moneyWanted)) {
    alert("Please enter the amount only in the form of numbers")
} 