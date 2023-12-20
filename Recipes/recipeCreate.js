'use strict'

const giveRecipe = document.getElementById('makeRecipe');
let recipeName = prompt("What is the name of the recipe?")

giveRecipe.innerHTML += `<h1>${recipeName}</h1>`
let howManyIngredients = prompt("How many ingredients? (Please input a number)")

for (let i = 0; i < howManyIngredients; i++) {

    let ingredients = prompt(`Ingredient ${i + 1}?`)
    giveRecipe.innerHTML += "<ul>";
    giveRecipe.innerHTML += `<li>${ingredients}</li>`;
    giveRecipe.innerHTML += "</ul>"
}

