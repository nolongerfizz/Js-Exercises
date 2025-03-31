// Create a program that calculates de factorial of a number using a for loop
// The factorial of a number (n) is the product off all positive integers from 1 to n

// Example: 3! = 3 * 2 * 1 = 6
// 4! = 4 * 3 * 2 * 1 = 24

// Set input funtion
const prompt = require("prompt-sync") ();

function main() {

    // Get the number
    number = parseInt(prompt("Enter a number to calculate its factorial: "))

    // Count factorial
    factorial = 1

    // Generate numbers from n to 1 by creating a for loop
    for (let i = 1; i <= number; i++){
        factorial = factorial * i;
    }

    console.log(factorial)

}
main()