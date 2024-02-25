'use strict'

// Link: https://raw.githubusercontent.com/sedc-codecademy/mkwd12-04-ajs/main/G2/Homework/cars.json

// Bare Bones Version

// Getting the Table
const resultTable = document.getElementById('resultTable')
const tableBody = document.getElementById('tableBody')
// Getting the Buttons
const searchBtn = document.getElementById('searchButton')
const clearBtn = document.getElementById('clearButton')

// Getting the Filters
const typeSelector = document.getElementById('typeSelector')
const brandSelector = document.getElementById('brandSelector')
const gasSelector = document.getElementById('gasSelector')
const colorSelector = document.getElementById('colorSelector')

// Getting the Inputs
const modelInput = document.getElementById('modelInput')
const oldFilter = document.getElementById('oldFilter')
const newFilter = document.getElementById('newFilter')
const doorFilter = document.getElementById('doorFilter')
const horsepowerSelector = document.getElementById('horsepower')

// Setting the Table

let filterThis;
fetch('https://raw.githubusercontent.com/sedc-codecademy/mkwd12-04-ajs/main/G2/Homework/cars.json')
    .then(data => data.json())
    .then(res => {
        filterThis = res
        res.forEach(res =>

            tableBody.innerHTML += `
        <th>Type:<td>${res.type}</td></th>
        <th>Brand:<td>${res.brand}</td></th>
        <th>Model:<td>${res.model}</td></th>
        <th>Doors:<td>${res.doors}</td></th>
        <th>Gas Type:<td>${res.gasType}</td></th>
        <th>Color:<td>${res.color}</td></th>
        <th>New:<td>${res.isNew}</td></th>
        <th>Horsepower<td>${res.horsepower}</td></th>`
        )
        searchBtn.addEventListener('click', filterResults);
        clearBtn.addEventListener('click', clearResults);
    })

// Hooray WE SERVED THE EASY PART

// Advanced W/O Bonus

function filterResults() {
    let fullData = filterThis.filter(res => {
        let typeFill = !typeSelector.value || res.type.toLowerCase() === typeSelector.value.toLowerCase();
        let brandFill = !brandSelector.value || res.brand.toLowerCase() === brandSelector.value.toLowerCase();
        let gasFill = !gasSelector.value || res.gasType.toLowerCase() === gasSelector.value.toLowerCase();
        let colorFill = !colorSelector.value || res.color.toLowerCase() === colorSelector.value.toLowerCase();
        let doorFill = !doorFilter.value || res.doors.toString() === doorFilter.value;
        let modelFill = !modelInput.value || res.model.toLowerCase().includes(modelInput.value.toLowerCase());
        let oldFill = !oldFilter.checked || res.isNew === !oldFilter.checked;
        let newFill = !newFilter.checked || res.isNew === newFilter.checked;
        let horsepowerFill = !horsepowerSelector.value || res.horsepower >= parseInt(horsepowerSelector.value);

        return typeFill && brandFill && gasFill && colorFill && doorFill && modelFill && oldFill && newFill && horsepowerFill
    });

    tableBody.innerHTML = ""

    fullData.forEach(res => {
        tableBody.innerHTML += `  <th>Type:<td>${res.type}</td></th>
        <th>Brand:<td>${res.brand}</td></th>
        <th>Model:<td>${res.model}</td></th>
        <th>Doors:<td>${res.doors}</td></th>
        <th>Gas Type:<td>${res.gasType}</td></th>
        <th>Color:<td>${res.color}</td></th>
        <th>New:<td>${res.isNew}</td></th>
        <th>Horsepower<td>${res.horsepower}</td></th>`;
    });
}

function clearResults() {
    typeSelector.value = '';
    brandSelector.value = '';
    gasSelector.value = '';
    colorSelector.value = '';
    doorFilter.value = '';
    modelInput.value = '';
    oldFilter.checked = false;
    newFilter.checked = false;
    horsepowerSelector.value = 0;

    filterResults()
}