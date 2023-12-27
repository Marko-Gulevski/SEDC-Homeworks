'use strict'

const titleOfBook = prompt("What is the title of the book?")
const authorName = prompt("Who is the author of this book?")
const haveRead = prompt("Have you read this book?")

import Books from "../src/books.js"

const readThis = new Books(titleOfBook, authorName, haveRead);
readThis.hasRead();