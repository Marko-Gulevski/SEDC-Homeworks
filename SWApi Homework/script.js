'use strict'

// SWAPI Link: https://swapi.dev/api/planets/?page=1

// Getting the table and buttons

const table = document.getElementById('table')
const resultsButton = document.getElementById('resultsButton')
const nextButton = document.getElementById('nextButton')
const prevButton = document.getElementById('prevButton')
const tbodyHere = document.getElementById('tbodyHere')

// Page Counter

let pageCounter = 1
prevButton.style.visibility = "hidden"

resultsButton.addEventListener('click', async () => {

    for (let i = 1; i <= 10; i++) {
        await fetch(`https://swapi.dev/api/planets/${i}/?page=${pageCounter}`)
            .then(res => res.json())
            .then(res => {
                tbodyHere.innerHTML += `<th>Planet Name:</th> <td>${res.name}</td>
                <th>Population: </th> <td>${res.population}</td>
                <th>Climate: </th> <td>${res.climate}</td>
                <th>Gravity: </th><td>${res.gravity}</td>`
            })
    }

}
)

nextButton.addEventListener('click', async () => {
    tbodyHere.innerHTML = ` `
    pageCounter = 2
    if (pageCounter = 2) {
        nextButton.style.visibility = "hidden"
        prevButton.style.visibility = "visible"
    }
    for (let i = 11; i <= 20; i++) {
        await fetch(`https://swapi.dev/api/planets/${i}/?page=${pageCounter}`)
            .then(res => res.json())
            .then(res => {
                tbodyHere.innerHTML += `<th>Planet Name:</th> <td>${res.name}</td>
            <th>Population: </th> <td>${res.population}</td>
            <th>Climate: </th> <td>${res.climate}</td>
            <th>Gravity: </th><td>${res.gravity}</td>`
            })
    }
})


prevButton.addEventListener('click', async () => {
    tbodyHere.innerHTML = ` `
    pageCounter = 1
    if (pageCounter = 1) {
        prevButton.style.visibility = "hidden"
        nextButton.style.visibility = "visible"
    }
    console.log(pageCounter);
    for (let i = 1; i <= 10; i++) {
        await fetch(`https://swapi.dev/api/planets/${i}/?page=${pageCounter}`)
            .then(res => res.json())
            .then(res => {
                tbodyHere.innerHTML += `<th>Planet Name:</th> <td>${res.name}</td>
            <th>Population: </th> <td>${res.population}</td>
            <th>Climate: </th> <td>${res.climate}</td>
            <th>Gravity: </th><td>${res.gravity}</td>`
            })
    }
})

