'use strict'

const nameCobminer = (firstNames, lastNames) => {
    let fullNames = [];
    for (let i = 0; i < firstNames.length; i++) {
        fullNames += " " + [i + 1] + "." + " " + firstNames[i] + " " + lastNames[i];
    }
    return fullNames;
}

const nameList = ["Marko", "Damjan", "Filip"];
const lastNameList = ["Gulevski", "Temelkovski", "Lazovski"];
const fullTogether = [nameCobminer(nameList, lastNameList)];
console.log(fullTogether);