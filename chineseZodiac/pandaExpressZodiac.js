function zodiacKiller(year) {
    let animals = ["Rat", "Ox", "Tiger", "Rabbit", "Dragon", "Snake", "Horse", "Goat", "Monkey", "Rooster", "Dog", "Pig"]
    let calculateZodiac = (year - 4) % 12;

    if (calculateZodiac == 1) {
        console.log(`Your Chinese Zodiac is ${animals[0]}`);
    } else if (calculateZodiac == 2) {
        console.log(`Your Chinese Zodiac is ${animals[1]}`);
    } else if (calculateZodiac == 3) {
        console.log(`Your Chinese Zodiac is ${animals[2]}`);
    } else if (calculateZodiac == 4) {
        console.log(`Your Chinese Zodiac is ${animals[3]}`);
    } else if (calculateZodiac == 5) {
        console.log(`Your Chinese Zodiac is ${animals[4]}`);
    } else if (calculateZodiac == 6) {
        console.log(`Your Chinese Zodiac is ${animals[5]}`);
    } else if (calculateZodiac == 7) {
        console.log(`Your Chinese Zodiac is ${animals[6]}`);
    } else if (calculateZodiac == 8) {
        console.log(`Your Chinese Zodiac is ${animals[7]}`);
    } else if (calculateZodiac == 9) {
        console.log(`Your Chinese Zodiac is ${animals[8]}`);
    } else if (calculateZodiac == 10) {
        console.log(`Your Chinese Zodiac is ${animals[9]}`);
    } else if (calculateZodiac == 11) {
        console.log(`Your Chinese Zodiac is ${animals[10]}`);
    } else if (calculateZodiac == 12) {
        console.log(`Your Chinese Zodiac is ${animals[11]}`);
    } else {
        console.log(`There is no such Zodiac`);
    }
}

let showZodiac = zodiacKiller(1997);

// Alternate method

function chooseYourZodiac(yearZodiac) {
    let animalSelector = ["Rat", "Ox", "Tiger", "Rabbit", "Dragon", "Snake", "Horse", "Goat", "Monkey", "Rooster", "Dog", "Pig"]
    let pandaExpressOrder = (yearZodiac - 4) % 12;
    if (isNaN(yearZodiac) || yearZodiac < 0) {
        console.log(`${yearZodiac} is not a valid Zodiac`);
        return;
    }
    console.log(`Your Chinese Zodiac is ${animalSelector[pandaExpressOrder - 1]}`);
}

chooseYourZodiac(1997);