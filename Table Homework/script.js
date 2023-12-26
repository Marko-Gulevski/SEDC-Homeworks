'use strict'

let addRows = prompt("How many rows?")
let addColumns = prompt("How many columns")

const tableSetter = (rows, columns) => {
    const getTable = document.getElementById('setTheTable');
    const getTBody = document.getElementById('tableBody');
    for (let i = 0; i < rows; i++) {
        const rowCreator = document.createElement('tr');
        getTBody.appendChild(rowCreator);
        for (let j = 0; j < columns; j++) {
            const columnCreator = document.createElement('td');
            columnCreator.innerText += `Row ${[i + 1]}  - Column ${[j + 1]}`
            rowCreator.appendChild(columnCreator);
        }
    }
}

tableSetter(addRows, addColumns);

