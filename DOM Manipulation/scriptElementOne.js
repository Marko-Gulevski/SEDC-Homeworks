'use strict'

// Create an array with numbers and make it print all the numbers from the array in a list element in a new HTML Page. Print out the sum of all the numbers and the whole mathmetical equation.

function sirPrintALot(arrayW) {
    let listedItems = document.getElementById('listToPrint');
    let resultPage = document.getElementById('resultToPrint')
    let processShow = document.getElementById('howToGet')
    let result = 0;
    listedItems.innerHTML += "<ul>";
    for (let i = 0; i < arrayW.length; i++) {
        listedItems.innerHTML += `<li>${arrayW[i]}</li>`
        result += arrayW[i];
    }
    listedItems.innerHTML += "</ul>"
    resultPage.innerHTML += `<p>This is the result ${result}</p>`
    processShow.innerHTML += `<p>We got the result like this: ${arrayW[0]} + ${arrayW[1]} + ${arrayW[2]} = ${result}</p>`
}

let numbersWow = [25, 35, 10];
let numbersForResult = sirPrintALot(numbersWow);