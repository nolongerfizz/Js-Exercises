// Even or odd
// Create a function that determines whether a number is even or odd
const prompt = require("prompt-sync") ();

function main() {

    let n = parseInt(prompt("Enter a number to check whether is even or odd: "))
    console.log(evenOdd(n))

function evenOdd(number) {

    if (number % 2 == 0) {
        return "Even"
    } else {
        return "Odd"
    }
}
}
main()