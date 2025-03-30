// Multiplication table
// Returns the Multiplication table for a given number

// Set prompt
const prompt = require("prompt-sync") ();

function main() {

    // Ask for number
    let n = parseInt(prompt("Enter a number: "))

    if (isNaN(n)) {
        console.log("Invalid input. Please enter a numeric value")
    } else {
        // Print out multiplication table
        for (let i = 1; i <= 10; i++){
            console.log(`${n} * ${i} = ${n * i}`);
    }
    }

}
main()