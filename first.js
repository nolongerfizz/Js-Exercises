// Sum of two numbers
// Create a program that asks the user for two numbers and displays its sum

const prompt = require("prompt-sync") ();

let first = parseFloat(prompt("Enter the first number: "))
let second = parseFloat(prompt("Enter the second number: "))

if (isNaN(first) || isNaN(second)) {
    console.log("Invalid input. please enter numeric values")
} else {
    console.log(first + second)
}
