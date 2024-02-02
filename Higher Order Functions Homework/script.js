'use strict'

class Product {
    constructor(productName, productCategory, productDiscount, productPrice) {
        this.productName = productName,
            this.productCategory = productCategory,
            this.productDiscount = productDiscount,
            this.productPrice = productPrice
    }
}

const availableProducts = [
    new Product("Hairdryer", "Electronics", true, 250),
    new Product("Pomegranate", "Food", false, 39),
    new Product("Pizza", "Food", false, 65),
    new Product("Deodarant", "Hygiene", false, 125),
    new Product("Fanta", "Drinks", true, 76),
    new Product("Ramen", "Food", true, 25),
    new Product("Eyeliner", "Cosmetics", false, 350),
    new Product("Mirinda", "Drinks", true, 45),
    new Product("Oranges", "Food", false, 24),
    new Product("Cereal", "Food", true, 55),
    new Product("Headphones", "Electronics", false, 6000),
    new Product("Sandals", "Clothing", false, 560),
    new Product("Pencil", "Office Equipment", true, 15),
    new Product("Doritos", "Food", false, 115),
    new Product("Pen", "Office Equipment", false, 17)
]

// Find All Products with price greater than 20

const overTwenty = product => product.productPrice > 20

const displayPricesOverTwenty = availableProducts.filter(overTwenty)

console.log(displayPricesOverTwenty);

// Get the Names of All products with Category Food and that are on discount

const categoryDiscount = product => {
    if (product.productCategory === "Food" && product.productDiscount) {
        console.log(`${product.productName}`);
    }
}

const showCategoryAndDiscounted = availableProducts.filter(categoryDiscount)

// Get the price of all product that are on discount

const discountedPrices = product => {
    if (product.productDiscount) {
        console.log(`${product.productPrice}`);
    }
}

const showDiscounted = availableProducts.filter(discountedPrices)

// Find the name and price of all non discounted products with a name starting with a vowel

const vowels = ["a", "e", "i", "o", "u"]

const vowelIncluded = product => {
    if (product.productDiscount === false && vowels.includes(product.productName.toLowerCase().charAt(0))) {
        console.log(`${product.productName} ${product.productPrice}`);
    }
}

const giveResultDiscount = availableProducts.filter(vowelIncluded);