// Create a function that will calculate your dog's age based on your human years and vice versa

let convertBorderCollie = prompt("Do you want to convert from human years to dog years or dog years to human years?")

function converterCollies() {
    let borderCollieRatio = 7;
    switch (convertBorderCollie) {
        case "Human years to dog years":
            let enterHumanYears = prompt("Enter Human years")
            let convertHumanToDog = enterHumanYears * borderCollieRatio;
            alert(`${enterHumanYears} human years is equal to ${convertHumanToDog} dog years`);
            break;
        case "Dog years to human years":
            let enterDogYears = prompt("Enter Dog years");
            let convertDogToHuman = Math.floor(enterDogYears / borderCollieRatio);
            console.log(`${enterDogYears} dog years is equal to ${convertDogToHuman} human years`);
            return;
        default:
            alert(`You have not entered any amount of years`);
    }
}

converterCollies();