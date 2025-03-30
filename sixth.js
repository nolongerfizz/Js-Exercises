// Numbers from 1 to N
// Ask for a number a return the numbers from 1 to N using a while loop

// Set prompt 
const prompt = require("prompt-sync") ();

function main() {

    // Ask for number
    let n = parseInt(prompt("Enter a number: "))

    // Set counter
    let counter = 1

    if (isNaN(n)) {
        console.log("Invalid input. Please enter an int.")
    } else {
        while (counter <= n) {
            console.log(counter)
            counter++
        }
    }

}
main ()