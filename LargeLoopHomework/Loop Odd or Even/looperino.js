'use strict'

// Write a loop that in range from 1 till 20 will write in the console every number and will add the \n after every even number other wise add empty space.

for (let i = 1; i <= 20; i++) {
    if (i % 2 == 0) {
        console.log(i + "\n");
    } else if (i % 2 != 0) {
        console.log(i + " " + "empty");
    }
}