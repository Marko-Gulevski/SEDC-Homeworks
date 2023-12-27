'use strict'

// Create object Animal with 2 properties and 1 method: properties:name,kind, method speak. This method will take one parameter and will print in the console.log

const dogName = prompt("What is the name of your dog?");
const dogBreed = prompt("What breed is your dog?");

class DogInfo{
    constructor(nameDog, nameBreed){
        this.dogName = nameDog;
        this.dogBreed = nameBreed;}

        speak(talk){
            this.talk = talk;
            console.log(`${this.dogName} is a ${this.dogBreed} and says: ${talk} `);
        }
    }

    const dogEntered = new DogInfo(dogName, dogBreed);
dogEntered.speak("Hey Bro");
