'use strict'

class Animal {
    constructor(name, type, age, size) {
        this.name = name;
        this.type = type;
        this.age = age;
        this.size = size;
        this.isEaten = false
    }
    eat = function (someInputedAnimal) {
        if (someInputedAnimal instanceof Animal && this.type === 'herbivore') {
            console.log(`The animal ${this.name} is a herbivore and does not eat other animals`);
        } else if (someInputedAnimal instanceof Animal && this.type === "carnivore" || this.type === "omnivore") {
            if (someInputedAnimal.size > this.size * 2) {
                console.log(`The animal ${this.name} tried to eat the ${someInputedAnimal.name}, but it was too large`);
            } else {
                this.isEaten = true;
                console.log(`The animal ${this.name} ate the ${someInputedAnimal.name}`);
            }
        } else {
            console.log(`The animal ${this.name} is eating ${someInputedAnimal}`);
        };
    }
}
const animalOne = new Animal("Zebra", "herbivore", 15, 125)
const animalTwo = new Animal("Tiger", "carnivore", 12, 235)
const animalThree = new Animal("Elephant", "herbivore", 25, 550)
let nonAnimal = "Grujo"
animalOne.eat(nonAnimal)
animalTwo.eat(animalOne)
animalThree.eat(animalOne)
animalThree.eat("Tursko Kafe")